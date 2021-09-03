
# File interactive\_world\_base.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**interactive\_world\_base.hpp**](interactive__world__base_8hpp.md)

[Go to the documentation of this file.](interactive__world__base_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/spaces.hpp>
#include <sdm/core/reward.hpp>
#include <sdm/algorithms/hsvi.hpp>
#include <sdm/utils/value_function/value_function.hpp>

namespace sdm
{
    class InteractiveWorld : public GymInterface
    {
    protected:
        std::shared_ptr<MDPInterface> world;

    public:
        InteractiveWorld(const std::shared_ptr<MDPInterface> &world);
    };
} // namespace sdm
````

