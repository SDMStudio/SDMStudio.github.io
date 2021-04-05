
# File belief\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**belief\_mdp.hpp**](belief__mdp_8hpp.md)

[Go to the documentation of this file.](belief__mdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>

#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/world/discrete_mdp.hpp>
#include <sdm/world/discrete_mmdp.hpp>

namespace sdm
{
    template <typename TBelief = BeliefState, typename TAction = number, typename TObservation = number>
    class BeliefMDP : public SolvableByHSVI<TBelief, TAction>,
                      public GymInterface<DiscreteSpace<TBelief>, DiscreteSpace<TAction>>
    {
    protected:
        std::shared_ptr<DiscretePOMDP> pomdp_;
        TBelief istate_;
        TBelief cstate_;

    public:
        using state_type = TBelief;
        using action_type = TAction;
        using observation_type = TObservation;

        BeliefMDP();
        BeliefMDP(std::shared_ptr<DiscretePOMDP> underlying_pomdp);
        BeliefMDP(std::string underlying_pomdp);

        TBelief reset();
        TBelief &getState();

        bool isSerialized() const;
        DiscretePOMDP *getUnderlyingProblem();

        TBelief getInitialState();
        TBelief nextState(const TBelief &belief, const TAction &action, const TObservation &obs) const;
        TBelief nextState(const TBelief &belief, const TAction &action, int t = 0, HSVI<TBelief, TAction> *hsvi = nullptr) const;

        std::shared_ptr<DiscreteSpace<TAction>> getActionSpaceAt(const TBelief &ostate = TBelief());

        double getReward(const TBelief &belief, const TAction &action) const;
        double getExpectedNextValue(ValueFunction<TBelief, TAction> *value_function, const TBelief &belief, const TAction &action, int t) const;

        double getObservationProbability(const TAction &action, const TObservation &obs, const TBelief &belief) const;

        std::shared_ptr<DiscreteMDP> toMDP();

        std::shared_ptr<BeliefMDP<BeliefState, number, number>> toBeliefMDP();
    };
} // namespace sdm
#include <sdm/world/belief_mdp.tpp>
````

