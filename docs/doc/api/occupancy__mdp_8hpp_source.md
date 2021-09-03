
# File occupancy\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**occupancy\_mdp.hpp**](occupancy__mdp_8hpp.md)

[Go to the documentation of this file.](occupancy__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/belief_mdp.hpp>
#include <sdm/world/base/mpomdp_interface.hpp>
#include <sdm/core/state/interface/history_interface.hpp>
#include <sdm/core/state/interface/occupancy_state_interface.hpp>
#include <sdm/core/state/jhistory_tree.hpp>
#include <sdm/core/space/function_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/action/det_decision_rule.hpp>
#include <sdm/core/state/occupancy_state.hpp>
#include <sdm/core/action/joint_det_decision_rule.hpp>

namespace sdm
{

        template <class TOccupancyState = OccupancyState>
        class BaseOccupancyMDP : public BaseBeliefMDP<TOccupancyState>
        {
        public:
                BaseOccupancyMDP();
                BaseOccupancyMDP(const std::shared_ptr<MPOMDPInterface> &dpomdp, number memory = -1, bool compression = true, bool store_states = true, bool store_actions = true, int batch_size = 0);
                ~BaseOccupancyMDP();

                void initialize(number memory);

                virtual std::shared_ptr<State> nextOccupancyState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &decision_rule, const std::shared_ptr<Observation> &observation, number t = 0);

                virtual std::shared_ptr<MPOMDPInterface> getUnderlyingMPOMDP() const;

                virtual std::shared_ptr<BeliefMDP> getUnderlyingBeliefMDP() const;

                std::shared_ptr<Space> getObservationSpaceAt(const std::shared_ptr<State> &, const std::shared_ptr<Action> &, number t);
                virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<State> &occupancy_state, number t = 0);
                virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<Observation> &occupancy_state, number t = 0);
                virtual double getReward(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &decision_rule, number t = 0);
                virtual bool checkCompatibility(const std::shared_ptr<Observation> &joint_observation, const std::shared_ptr<Observation> &observation);

                // **********************
                // SolvableByHSVI methods
                // **********************

                // std::shared_ptr<State> nextState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &decision_rule, number t = 0, const std::shared_ptr<HSVI> &hsvi = nullptr);
                // double getExpectedNextValue(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &joint_decision_rule, number t);
                virtual double do_excess(double incumbent, double lb, double ub, double cost_so_far, double error, number horizon);

                // *****************
                //    RL methods
                // *****************

                virtual std::shared_ptr<Observation> reset();
                virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
                virtual std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &observation, number t);
                virtual std::shared_ptr<Action> computeRandomAction(const std::shared_ptr<OccupancyStateInterface> &ostate, number t);

                // *****************
                // Temporary methods
                // *****************

                // void setInitialState(const std::shared_ptr<State> &state);
                double getRewardBelief(const std::shared_ptr<BeliefInterface> &state, const std::shared_ptr<Action> &action, number t);
                virtual std::shared_ptr<Action> applyDecisionRule(const std::shared_ptr<OccupancyStateInterface> &ostate, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<Action> &decision_rule, number t) const;

                // *****************
                //    PROFILING
                // *****************

                static double TIME_IN_NEXT_STATE, TIME_IN_COMPRESS, TIME_IN_GET_ACTION, TIME_IN_STEP, TIME_IN_GET_REWARD, TIME_IN_NEXT_OSTATE, TIME_IN_EXP_NEXT;
                static double TIME_IN_UNDER_STEP, TIME_IN_APPLY_DR;
                static number PASSAGE_IN_NEXT_STATE;
                static unsigned long MEAN_SIZE_STATE;

                std::shared_ptr<HistoryInterface> initial_history_, current_history_;

        protected:
                bool compression_ = true;

                std::shared_ptr<BeliefMDP> belief_mdp_;

                virtual Pair<std::shared_ptr<State>, double> computeNextStateAndProbability(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
                virtual std::shared_ptr<State> computeNextState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
                virtual Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeExactNextState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
                virtual Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeSampledNextState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);

                std::shared_ptr<HistoryInterface> getNextHistory(const std::shared_ptr<Observation> &observation);

                virtual std::shared_ptr<Space> computeActionSpaceAt(const std::shared_ptr<State> &occupancy_state, number t = 0);

                virtual bool do_compression(number t) const;

                virtual void update_occupancy_state_proba(const std::shared_ptr<OccupancyStateInterface> &occupancy_state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<BeliefInterface> &belief, double probability);

                // std::shared_ptr<std::unordered_map<JointDeterministicDecisionRule, std::shared_ptr<Action>>> action_map_;

                // std::shared_ptr<Action> getActionPointer(std::shared_ptr<Action> action_tmp);
        };

        using OccupancyMDP = BaseOccupancyMDP<OccupancyState>;
} // namespace sdm

#include <sdm/world/occupancy_mdp.tpp>
````

