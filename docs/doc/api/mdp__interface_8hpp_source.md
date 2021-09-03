
# File mdp\_interface.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**mdp\_interface.hpp**](mdp__interface_8hpp.md)

[Go to the documentation of this file.](mdp__interface_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/core/distribution.hpp>
#include <sdm/world/gym_interface.hpp>

namespace sdm
{
    class MDPInterface : virtual public GymInterface
    {
    public:
    
        virtual number getNumAgents() const = 0;

        virtual number getHorizon() const = 0;

        virtual double getDiscount(number t) const = 0;

        virtual std::shared_ptr<Distribution<std::shared_ptr<State>>> getStartDistribution() const = 0;

        virtual std::shared_ptr<Space> getStateSpace(number t) const = 0;

        virtual std::shared_ptr<Space> getActionSpace(number t) const = 0;

        virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;
        
        virtual double getMinReward(number t) const = 0;
        virtual double getMaxReward(number t) const = 0;

        virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action) = 0;
        virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action, bool increment_timestep) = 0;

        virtual double getTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const = 0;

        virtual std::set<std::shared_ptr<State>> getReachableStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;

        virtual void setInternalState(std::shared_ptr<State> state) = 0;

        virtual std::shared_ptr<State> getInternalState() const = 0;
    };

} // namespace sdm
````

