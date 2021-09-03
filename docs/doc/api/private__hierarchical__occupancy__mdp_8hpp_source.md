
# File private\_hierarchical\_occupancy\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**private\_hierarchical\_occupancy\_mdp.hpp**](private__hierarchical__occupancy__mdp_8hpp.md)

[Go to the documentation of this file.](private__hierarchical__occupancy__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/occupancy_mdp.hpp>

#include <sdm/core/state/jhistory_tree.hpp>

namespace sdm
{
        class PrivateHierarchicalOccupancyMDP : public OccupancyMDP
        {
        public:
                PrivateHierarchicalOccupancyMDP();
                PrivateHierarchicalOccupancyMDP(const std::shared_ptr<MPOMDPInterface> &dpomdp, number memory = -1, bool compression = true, bool store_states = true, bool store_actions = true, int batch_size = 0);
                virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
                std::shared_ptr<Space> computeActionSpaceAt(const std::shared_ptr<State> &occupancy_state, number t = 0);
                std::shared_ptr<Action> computeRandomAction(const std::shared_ptr<OccupancyStateInterface> &ostate, number t);
                virtual std::shared_ptr<Action> applyDecisionRule(const std::shared_ptr<OccupancyStateInterface> &ostate, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<Action> &decision_rule, number t) const;
                std::shared_ptr<State> getJointHierarchicalLabels(const std::shared_ptr<State> &joint_labels, const std::shared_ptr<State> &ostate) const;
                
        protected:
                std::shared_ptr<Action> current_action_;
                Pair<std::shared_ptr<State>, double> computeNextStateAndProbability(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
                Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeExactNextState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
                Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeSampledNextState(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
        };
} // namespace sdm
````

