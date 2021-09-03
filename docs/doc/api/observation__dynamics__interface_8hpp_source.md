
# File observation\_dynamics\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**dynamics**](dir_bf78c8d352c5567b2f707cd9e5690bcc.md) **>** [**observation\_dynamics\_interface.hpp**](observation__dynamics__interface_8hpp.md)

[Go to the documentation of this file.](observation__dynamics__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/distribution.hpp>

namespace sdm
{
    class ObservationDynamicsInterface
    {
    public:
        virtual std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const = 0;

        virtual double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const = 0;

        virtual std::shared_ptr<Distribution<std::shared_ptr<Observation>>> getNextObservationDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) = 0;
    };
} // namespace sdm
````

