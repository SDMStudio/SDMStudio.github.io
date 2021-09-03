
# File hierarchical\_occupancy\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**hierarchical\_occupancy\_mdp.hpp**](hierarchical__occupancy__mdp_8hpp.md)

[Go to the documentation of this file.](hierarchical__occupancy__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/occupancy_mdp.hpp>
#include <sdm/world/hierarchical_mpomdp.hpp>

#include <sdm/core/state/jhistory_tree.hpp>

namespace sdm
{
    class HierarchicalOccupancyMDP : public OccupancyMDP
    {
    public:
        HierarchicalOccupancyMDP();
        HierarchicalOccupancyMDP(const std::shared_ptr<HierarchicalMPOMDP> &hierarchical_mpomdp, number memory = -1, bool compression = true, bool store_states = true, bool store_actions = true,   int batch_size = 0);

        number getLowLevelAgentID();

        virtual std::shared_ptr<Space> getObservationSpace(number t);
        virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
        virtual bool checkCompatibility(const std::shared_ptr<Observation> &joint_observation, const std::shared_ptr<Observation> &observation);

    protected:
        
        std::shared_ptr<Action> current_action_;
        
        number low_level_agent_id_;
        
        virtual Pair<std::shared_ptr<State>, double> computeNextStateAndProbability(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t = 0);
      };
} // namespace sdm
````

