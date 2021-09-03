
# File pomdp\_interface.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**pomdp\_interface.hpp**](pomdp__interface_8hpp.md)

[Go to the documentation of this file.](pomdp__interface_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/world/base/mdp_interface.hpp>

namespace sdm
{
    class POMDPInterface : virtual public MDPInterface
    {
    public:
        virtual std::shared_ptr<Space> getObservationSpace(number t) const = 0;

        virtual std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const = 0;

        virtual double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const = 0;

        virtual double getDynamics(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const = 0;
    };
} // namespace sdm
````

