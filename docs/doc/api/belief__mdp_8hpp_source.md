
# File belief\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**belief\_mdp.hpp**](belief__mdp_8hpp.md)

[Go to the documentation of this file.](belief__mdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/state/belief_state.hpp>
#include <sdm/core/state/interface/belief_interface.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/utils/struct/recursive_map.hpp>
#include <sdm/utils/struct/graph.hpp>
#include <sdm/world/solvable_by_mdp.hpp>
#include <sdm/world/base/pomdp_interface.hpp>
#include <sdm/world/gym_interface.hpp>
#include <sdm/world/mdp.hpp>

namespace sdm
{
    template <class TBelief>
    class BaseBeliefMDP : public SolvableByMDP,
                          public GymInterface
    {
    public:
        BaseBeliefMDP();
        BaseBeliefMDP(const std::shared_ptr<POMDPInterface> &pomdp, int batch_size = 0);
        ~BaseBeliefMDP();

        virtual Pair<std::shared_ptr<State>, double> nextBeliefAndProba(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
        
        virtual std::shared_ptr<State> nextBelief(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);

        virtual double getObservationProbability(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_belief, const std::shared_ptr<Observation> &obs, number t = 0) const;

        virtual std::shared_ptr<POMDPInterface> getUnderlyingPOMDP() const;

        virtual std::shared_ptr<State> nextState(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, number t = 0, const std::shared_ptr<HSVI> &hsvi = nullptr);

        virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<State> &belief, number t = 0);
        virtual std::shared_ptr<Space> getObservationSpaceAt(const std::shared_ptr<State> &, const std::shared_ptr<Action> &, number t);

        virtual double getReward(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, number t = 0);

        virtual double getExpectedNextValue(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, number t = 0);
        Pair<std::shared_ptr<State>, double> getNextState(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation>& observation, number t);

        // *****************
        //    RL methods
        // *****************

        virtual std::shared_ptr<Observation> reset();
        virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
        virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<Observation> &observation, number t);
        virtual std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &observation, number t);

        std::shared_ptr<Graph<std::shared_ptr<State>, Pair<std::shared_ptr<Action>, std::shared_ptr<Observation>>>> getMDPGraph();
        std::vector<std::shared_ptr<State>> getStoredStates() const;

        RecursiveMap<TBelief, std::shared_ptr<State>> state_space_;
        std::shared_ptr<Graph<double, Pair<std::shared_ptr<State>, std::shared_ptr<Action>>>> reward_graph_;

    public:
        // If 0, it means the exact transitions will be used and not sampled ones.
        int batch_size_;

        std::shared_ptr<State> current_state_;

        int step_;

        bool store_states_ = true, store_actions_ = true;

        RecursiveMap<std::shared_ptr<State>, std::shared_ptr<Action>, std::shared_ptr<Observation>, double> transition_probability;

        std::shared_ptr<Graph<std::shared_ptr<State>, Pair<std::shared_ptr<Action>, std::shared_ptr<Observation>>>> mdp_graph_;


        virtual Pair<std::shared_ptr<State>, double> computeNextStateAndProbability(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
        virtual std::shared_ptr<State> computeNextState(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
        virtual Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeExactNextState(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
        virtual Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeSampledNextState(const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
    };

    using BeliefMDP = BaseBeliefMDP<Belief>;

}
#include <sdm/world/belief_mdp.tpp>
````

