
# File decision\_process\_interface.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**decision\_process\_interface.hpp**](decision__process__interface_8hpp.md)

[Go to the documentation of this file.](decision__process__interface_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/distribution.hpp>

namespace sdm
{
    class DecisionProcessInterface 
    {
    public:
        virtual number getNumAgents() const = 0;

        virtual double getDiscount(number t) const = 0;

        virtual std::shared_ptr<Distribution<std::shared_ptr<State>>> getStartDistribution() const = 0;

        virtual std::shared_ptr<Distribution<std::shared_ptr<State>>> nextState(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) = 0;

        virtual std::set<std::shared_ptr<State>> getAllStates(number t) const = 0;

        virtual std::set<std::shared_ptr<State>> getReachableStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;

        virtual std::set<std::shared_ptr<Action>> getAllActions(number t) const = 0;

        virtual std::set<std::shared_ptr<Observation>> getAllObservations(number t) const = 0;

        virtual std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;

        virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t, number agent_id) const = 0;

        virtual double getTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const = 0;

        virtual double getObsProbability(const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const = 0;


        virtual double getDynamics(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const = 0;

    };

} // namespace sdm
````

