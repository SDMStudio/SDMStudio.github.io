
# File serialized\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**serialized\_mdp.hpp**](serialized__mdp_8hpp.md)

[Go to the documentation of this file.](serialized__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/struct/pair.hpp>
#include <sdm/world/belief_mdp.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/state/serialized_state.hpp>

#include <sdm/utils/linear_algebra/vector.hpp>
#include <sdm/utils/decision_rules/det_decision_rule.hpp>

namespace sdm
{

    class DiscreteMMDP;

    template <typename oState = SerializedState,
              typename oAction = number>
    class SerializedMDP : public SolvableByHSVI<oState, oAction>,
                          public std::enable_shared_from_this<SerializedMDP<oState, oAction>>

    {
    protected:
        std::shared_ptr<DiscreteMMDP> mmdp_;

    public:
        using state_type = oState;
        using action_type = oAction;

        SerializedMDP(std::shared_ptr<DiscreteMMDP> underlying_mmdp);
        SerializedMDP(std::string underlying_mmdp);

        std::shared_ptr<SerializedMDP> getptr();

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
        std::shared_ptr<SerializedMDP> toMDP();

        std::shared_ptr<BeliefMDP<BeliefState, number, number>> toBeliefMDP();        
    };
} // namespace sdm
#include <sdm/world/serialized_mdp.tpp>
````

