
# File serialized\_belief\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**serialized\_belief\_mdp.hpp**](serialized__belief__mdp_8hpp.md)

[Go to the documentation of this file.](serialized__belief__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/world/belief_mdp.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/state/serialized_belief_state.hpp>

#include <sdm/utils/linear_algebra/vector.hpp>
#include <sdm/utils/decision_rules/det_decision_rule.hpp>

namespace sdm
{

    class DiscretePOMDP;

    template <typename TBelief = SerializedBeliefState,
              typename TAction = number,
              typename TObservation = number>
    class SerializedBeliefMDP : public BeliefMDP<TBelief, TAction, TObservation>
    {
    protected:
        std::shared_ptr<DiscretePOMDP> mpomdp_;

    public:
        using state_type = oState;
        using action_type = oAction;

        SerializedBeliefMDP(std::shared_ptr<DiscretePOMDP> underlying_mmdp);
        SerializedBeliefMDP(std::string underlying_mmdp);

        std::shared_ptr<SerializedBeliefMDP> getptr();

        oState &getState();
        double getDiscount(int t) const;

        bool isSerialized() const;
        DiscreteMMDP *getUnderlyingProblem();

        oState getInitialState();
        oState nextState(const oState &ostate, const oAction &oaction, int t = 0, HSVI<oState, oAction> *hsvi = nullptr) const;

        std::shared_ptr<DiscreteSpace<oAction>> getActionSpaceAt(const oState &);

        double getReward(const oState &ostate, const oAction &oaction) const;
        double getExpectedNextValue(ValueFunction<oState, oAction> *value_function, const oState &ostate, const oAction &oaction, int t = 0) const;

        // Problem conversion
        std::shared_ptr<SerializedBeliefMDP> toMDP();

        std::shared_ptr<BeliefMDP<BeliefState, number, number>> toBeliefMDP();
    };
} // namespace sdm
#include <sdm/world/serialized_mdp.tpp>
````

