
# File interactive\_world.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**interactive\_world.hpp**](interactive__world_8hpp.md)

[Go to the documentation of this file.](interactive__world_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <sdm/types.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/world/posg.hpp>
#include <sdm/world/gym_interface.hpp>
#include <sdm/public/world.hpp>

namespace sdm
{
    template <typename TDecProcess = POSG>
    class InteractiveWorld : public GymInterface<typename TDecProcess::observation_space_type, typename TDecProcess::action_space_type, typename TDecProcess::reward_function_type>
    {
    protected:
        number ctimestep_ = 0;
        std::shared_ptr<TDecProcess> internal_formalism_;

    public:
        using observation_space_type = typename TDecProcess::observation_space_type;
        using observation_type = typename observation_space_type::value_type;

        using action_space_type = typename TDecProcess::action_space_type;
        using action_type = typename action_space_type::value_type;

        using reward_function_type = typename TDecProcess::reward_type;
        using reward_type = typename reward_type::value_type;

        InteractiveWorld(TDecProcess *real_world);

        InteractiveWorld(const TDecProcess &);

        InteractiveWorld(const std::string &);

        observation_type reset();

        std::tuple<observation_type, reward_type, bool> step(action_type ja); 
    };
} // namespace sdm
#include <sdm/world/interactive_world.tpp>
````

