
# File ndpomdp\_interface.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**ndpomdp\_interface.hpp**](ndpomdp__interface_8hpp.md)

[Go to the documentation of this file.](ndpomdp__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>

namespace sdm
{

    class NetworkedDistributedPOMDPInterface : public MPOMDPInterface
    {
        virtual number getNumGroups() const = 0;

        virtual std::shared_ptr<Space> getLocalStateSpace(number agent_id, number t) const = 0;

        virtual std::set<std::shared_ptr<State>> getLocalReachableStates(number agent_id, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;
        
        virtual double getLocalTransitionProbability(number agent_id, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const = 0;
        
        virtual std::shared_ptr<Distribution<std::shared_ptr<State>>> getLocalStartDistribution(number agent_id) const = 0;

        virtual double getReward(number group_id, const std::shared_ptr<State> &global_state, const std::shared_ptr<State> &joint_state, const std::shared_ptr<Action> &joint_action, number t) const = 0;
    };
} // namespace sdm
````

