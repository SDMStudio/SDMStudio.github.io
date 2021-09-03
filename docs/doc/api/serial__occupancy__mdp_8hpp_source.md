
# File serial\_occupancy\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**serial\_occupancy\_mdp.hpp**](serial__occupancy__mdp_8hpp.md)

[Go to the documentation of this file.](serial__occupancy__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/state/jhistory_tree.hpp>
#include <sdm/core/state/serial_occupancy_state.hpp>
#include <sdm/world/base/mmdp_interface.hpp>
#include <sdm/world/occupancy_mdp.hpp>

namespace sdm
{
        class SerialOccupancyMDP : public OccupancyMDP,
                                   public SerialProblemInterface
        {
        public:
                SerialOccupancyMDP();
                SerialOccupancyMDP(const std::shared_ptr<SerialMPOMDPInterface> &dpomdp, number memory = -1, bool compression = true, bool store_states = true, bool store_actions = true, int batch_size = 0);

                number getAgentId(number t) const;
                bool isLastAgent(number t) const;
                double getDiscount(number t) const;
                std::shared_ptr<SerialMMDPInterface> getUnderlyingSerializedMMDP() const;
                std::shared_ptr<SerialMPOMDPInterface> getUnderlyingSerializedMPOMDP() const;

                std::shared_ptr<Action> applyDecisionRule(const std::shared_ptr<OccupancyStateInterface> &ostate, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<Action> &decision_rule, number t) const;
                std::shared_ptr<Space> computeActionSpaceAt(const std::shared_ptr<State> &occupancy_state, number t = 0);

                double getReward(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &decision_rule, number t);

        protected:
                bool do_compression(number t) const;
        };
} // namespace sdm
````

