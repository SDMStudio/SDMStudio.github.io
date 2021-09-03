
# File gym\_interface.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**gym\_interface.hpp**](gym__interface_8hpp.md)

[Go to the documentation of this file.](gym__interface_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <sdm/types.hpp>
#include <sdm/utils/struct/tuple.hpp>
#include <sdm/core/space/discrete_space.hpp>

namespace sdm
{
    class GymInterface
    {
    public:
        virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<Observation> &observation, number t) = 0;

        virtual std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &observation, number t) = 0;

        virtual std::shared_ptr<Observation> reset() = 0;

        virtual std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action) = 0;
    };
} // namespace sdm
````

