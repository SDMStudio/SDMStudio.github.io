
# File common.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**common.hpp**](common_8hpp.md)

[Go to the documentation of this file.](common_8hpp.md) 


````cpp
#pragma once

#include <random>

#include <sdm/types.hpp>

namespace sdm
{
    namespace common
    {
        void logo();
        std::default_random_engine &global_urng();
        std::string getState(state);
        std::string getAgentActionState(agent, action, state);

    } // namespace common
} // namespace sdm
````

