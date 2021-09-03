
# File serialized\_mmdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**serialized\_mmdp.hpp**](serialized__mmdp_8hpp.md)

[Go to the documentation of this file.](serialized__mmdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>

#include <sdm/core/state/state.hpp>
#include <sdm/core/state/serialized_state.hpp>

#include <sdm/core/action/action.hpp>
#include <sdm/core/distribution.hpp>
#include <sdm/world/base/mmdp_interface.hpp>

#include <sdm/core/space/multi_space.hpp>
#include <sdm/core/space/discrete_space.hpp>

#include <unordered_map>
#include <sdm/core/dynamics/tabular_state_dynamics.hpp>
#include <sdm/core/state/interface/serial_interface.hpp>

namespace sdm
{
    class SerializedMMDP : virtual public SerialMMDPInterface
    {
    public:
        SerializedMMDP(const std::shared_ptr<MMDPInterface> &mmdp);

        virtual ~SerializedMMDP();

        number getNumAgents() const;

        number getAgentId(number t) const;

        bool isLastAgent(number t) const;

        double getDiscount(number t = 0) const;

        number getHorizon() const;

        std::shared_ptr<Distribution<std::shared_ptr<State>>> getStartDistribution() const;

        std::shared_ptr<Space> getStateSpace(number t = 0) const;

        std::set<std::shared_ptr<State>> getReachableStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

        std::shared_ptr<Space> getActionSpace(number t = 0) const;

        std::shared_ptr<Space> getActionSpace(number agent_id, number t ) const;

        double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

        double getMinReward(number t = 0) const;

        double getMaxReward(number t = 0) const;
        double getTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0) const;

        // For Gym Interface

        std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<Observation> &observation, number t);

        std::shared_ptr<Observation> reset();

        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);

        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action, bool increment_timestep);

        void setInternalState(std::shared_ptr<State> state);

        std::shared_ptr<State> getInternalState() const;

        std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &, number t);
        
    protected:

        std::shared_ptr<MMDPInterface> mmdp_;

        Joint<std::shared_ptr<DiscreteSpace>> serialized_state_space_;

        // std::unordered_map<std::shared_ptr<State>, std::unordered_map<std::shared_ptr<Action>, std::set<std::shared_ptr<State>>>> reachable_state_space;
        std::shared_ptr<StateDynamicsInterface> state_dynamics_;

        std::unordered_map<Joint<std::shared_ptr<Action>>, std::shared_ptr<Action>> map_joint_action_to_pointeur;

        std::unordered_map<SerializedState, std::shared_ptr<State>> map_serialized_state_to_pointeur;

        std::shared_ptr<Distribution<std::shared_ptr<State>>> distribution_serial;

        void createInitSerializedStateSpace();

        void createInitReachableStateSpace();

        const std::shared_ptr<Action> getPointeurJointAction(Joint<std::shared_ptr<Action>> &) const;

        void setJointActionToPointeur(std::vector<Joint<std::shared_ptr<Action>>>);

        const std::shared_ptr<State> getPointeurState(SerializedState &) const;

        void createDistribution();

        Joint<std::shared_ptr<Action>> addNewAction(const std::shared_ptr<State>& state, const std::shared_ptr<Action>& new_action) const;
    };

} // namespace sdm
````

