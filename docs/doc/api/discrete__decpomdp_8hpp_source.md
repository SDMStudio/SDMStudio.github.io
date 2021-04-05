
# File discrete\_decpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**discrete\_decpomdp.hpp**](discrete__decpomdp_8hpp.md)

[Go to the documentation of this file.](discrete__decpomdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/world/po_decision_process.hpp>
#include <sdm/world/occupancy_mdp.hpp>
#include <sdm/world/belief_mdp.hpp>

#include <sdm/core/state/occupancy_state.hpp>
#include <sdm/core/state/history.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/reward.hpp>

#include <sdm/utils/decision_rules/det_decision_rule.hpp>

namespace sdm
{
    class DiscreteDecPOMDP : public PartiallyObservableDecisionProcess<DiscreteSpace<number>, MultiDiscreteSpace<number>, MultiDiscreteSpace<number>, StateDynamics, ObservationDynamics, Reward, std::discrete_distribution<number>>,
                             public std::enable_shared_from_this<DiscreteDecPOMDP>

    {
    public:
        using occupancy_mdp = OccupancyMDP<OccupancyState<number, JointHistoryTree_p<number>>, Joint<DeterministicDecisionRule<HistoryTree_p<number>, number>>>;

        DiscreteDecPOMDP();
        DiscreteDecPOMDP(std::string &filename);
        DiscreteDecPOMDP(DiscreteDecPOMDP &copy);
        DiscreteDecPOMDP(std::shared_ptr<DiscreteSpace<number>> state_sp, std::shared_ptr<MultiDiscreteSpace<number>> action_sp, std::shared_ptr<MultiDiscreteSpace<number>> obs_sp, std::shared_ptr<StateDynamics> state_dyn, std::shared_ptr<ObservationDynamics> obs_dyn, std::shared_ptr<Reward>, std::discrete_distribution<number> start_distrib, number planning_horizon = 0, double discount = 0.9, Criterion criterion = Criterion::REW_MAX);

        std::shared_ptr<DiscreteDecPOMDP> getptr();

        std::shared_ptr<DiscreteMDP> toMDP();

        std::shared_ptr<DiscretePOMDP> toPOMDP();

        std::shared_ptr<BeliefMDP<BeliefState, number, number>> toBeliefMDP();

        std::shared_ptr<DiscreteMMDP> toMMDP();

        std::shared_ptr<occupancy_mdp> toOccupancyMDP();

        // std::shared_ptr<SerializedOccupancyMDP> toSerializedOccupancyMDP();

        std::string toStdFormat();

        std::string toXML();

        std::string toJSON();

        void generateFile(std::string);

        friend std::ostream &operator<<(std::ostream &os, DiscreteDecPOMDP &model)
        {
            os << model.toXML();
            return os;
        }
    };
} // namespace sdm
````

