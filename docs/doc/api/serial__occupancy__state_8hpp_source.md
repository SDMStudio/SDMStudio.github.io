
# File serial\_occupancy\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**serial\_occupancy\_state.hpp**](serial__occupancy__state_8hpp.md)

[Go to the documentation of this file.](serial__occupancy__state_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/state/occupancy_state.hpp>
#include <sdm/core/state/interface/serial_interface.hpp>

namespace sdm
{
    class SerialOccupancyState : public OccupancyState, public SerialInterface
    {
    public:
        SerialOccupancyState();
        SerialOccupancyState(number num_agents);
        SerialOccupancyState(const SerialOccupancyState &copy);
        SerialOccupancyState(const OccupancyState &copy);

        number getCurrentAgentId() const;
        TypeState getTypeState() const;
        std::string str() const;
    };
}

namespace std
{
    template <>
    struct hash<sdm::SerialOccupancyState>
    {
        typedef sdm::SerialOccupancyState argument_type;
        typedef std::size_t result_type;
        inline result_type operator()(const argument_type &in) const
        {
            return std::hash<sdm::OccupancyState>()(in);
        }
    };
}
````

