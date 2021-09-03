
# File private\_hierarchical\_occupancy\_mdp\_with\_history.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**private\_hierarchical\_occupancy\_mdp\_with\_history.hpp**](private__hierarchical__occupancy__mdp__with__history_8hpp.md)

[Go to the documentation of this file.](private__hierarchical__occupancy__mdp__with__history_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/private_hierarchical_occupancy_mdp.hpp>

namespace sdm
{
        class PrivateHierarchicalOccupancyMDPWithHistory : public PrivateHierarchicalOccupancyMDP
        {
        public:
                PrivateHierarchicalOccupancyMDPWithHistory();
                PrivateHierarchicalOccupancyMDPWithHistory(const std::shared_ptr<MPOMDPInterface> &dpomdp, number memory = -1, bool compression = true, bool store_states = true, bool store_actions = true, int batch_size = 0);
                std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
                std::shared_ptr<Observation> reset();
                double getReward(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &decision_rule, number t = 0);
                std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &observation, number t);
        protected:
                std::shared_ptr<HistoryInterface> getJointLabel(const std::shared_ptr<HistoryInterface> &joint_history, const std::shared_ptr<State> &occupancy_state);
        };
} // namespace sdm
````

