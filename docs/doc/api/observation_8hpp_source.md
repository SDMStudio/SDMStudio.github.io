
# File observation.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**observation**](dir_41a0d04126e8d45b46052647fbad64a4.md) **>** [**observation.hpp**](observation_8hpp.md)

[Go to the documentation of this file.](observation_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/item.hpp>

namespace sdm
{
    class Observation : public Item
    {
    public:
        virtual ~Observation() {}
        virtual std::string str() const = 0;
    };

} // namespace sdm
````

