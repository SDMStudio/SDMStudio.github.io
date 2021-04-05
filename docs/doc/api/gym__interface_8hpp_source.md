
# File gym\_interface.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**gym\_interface.hpp**](gym__interface_8hpp.md)

[Go to the documentation of this file.](gym__interface_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <tuple>
#include <sdm/types.hpp>
#include <sdm/public/world.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>

namespace sdm
{
    template <typename TObsSpace = Space, typename TActSpace = Space, bool is_multi_agent = false>
    class GymInterface
    {
    protected:
        using observation_type = typename TObsSpace::value_type;
        using action_type = typename TActSpace::value_type;

        std::shared_ptr<TObsSpace> observation_space_;
        std::shared_ptr<TActSpace> action_space_;

    public:
        GymInterface();
        GymInterface(std::shared_ptr<TObsSpace>, std::shared_ptr<TActSpace>);
        // GymInterface(TObsSpace, TActSpace);

        std::shared_ptr<TObsSpace> getObsSpace() const;
        std::shared_ptr<TActSpace> getActionSpace() const;

        virtual observation_type reset() = 0;
        std::tuple<observation_type, std::vector<double>, bool> step(action_type) {}

        // template <bool TBool = is_multi_agent>
        // std::enable_if_t<TBool, std::tuple<observation_type, std::vector<double>, bool>>
        // step(action_type a);

        // template <bool TBool = is_multi_agent>
        // std::enable_if_t<!TBool, std::tuple<observation_type, double, bool>>
        // step(action_type a);
    };
} // namespace sdm

#include <sdm/world/gym_interface.tpp>
````

