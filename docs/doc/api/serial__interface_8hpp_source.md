
# File serial\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**interface**](dir_21fe4a973b70de512eb6303f0a371aff.md) **>** [**serial\_interface.hpp**](serial__interface_8hpp.md)

[Go to the documentation of this file.](serial__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/joint.hpp>
#include <sdm/core/state/interface/occupancy_state_interface.hpp>

namespace sdm
{

    class SerialInterface
    {
    public:
        virtual number getCurrentAgentId() const = 0;
    };

    class BaseSerialInterface : public SerialInterface, virtual public State
    {
    public:
        virtual std::shared_ptr<State> getHiddenState() const = 0;

        virtual Joint<std::shared_ptr<Action>> getAction() const = 0;

        virtual void setAgentId(number) = 0;
    };

    class SerialOccupancyInterface : virtual public SerialInterface, virtual public OccupancyStateInterface
    {
    };
}
````

