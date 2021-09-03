
# File history\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**interface**](dir_21fe4a973b70de512eb6303f0a371aff.md) **>** [**history\_interface.hpp**](history__interface_8hpp.md)

[Go to the documentation of this file.](history__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/state/state.hpp>

namespace sdm
{
    class JointHistoryInterface;

    class HistoryInterface : public State
    {

    public:
        virtual std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Observation> &observation, bool backup = true) = 0;

        virtual std::shared_ptr<HistoryInterface> getPreviousHistory() = 0;

        virtual std::shared_ptr<Observation> getLastObservation() = 0;

        virtual number getHorizon() const = 0;

        // virtual std::shared_ptr<Action> getLastAction() = 0;
        // virtual std::shared_ptr<Observation> getObservation() = 0;

        // virtual std::shared_ptr<Action> getActionAt(number t) = 0;
        // virtual std::shared_ptr<Observation> getObservationAt(number t) = 0;
        virtual std::string str() const = 0;
        virtual std::string short_str() const = 0;

        virtual TypeState getTypeState() const { return TypeState::STATE; }


        std::shared_ptr<JointHistoryInterface> toJointHistory();
    };
}
````

