
# File state\_2\_occupancy\_vf.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**state\_2\_occupancy\_vf.hpp**](state__2__occupancy__vf_8hpp.md)

[Go to the documentation of this file.](state__2__occupancy__vf_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/function.hpp>

namespace sdm
{
    template <typename TState, typename TOccupancyState>
    class State2OccupancyValueFunction : public BinaryFunction<TOccupancyState, number, double>
    {
    protected:
        std::shared_ptr<BinaryFunction<TState, number, double>> mdp_vf_;

    public:
        State2OccupancyValueFunction(std::shared_ptr<BinaryFunction<TState, number, double>> vf);

        template <bool is_mdp = std::is_same<TState, TOccupancyState>::value>
        std::enable_if_t<is_mdp, double>
        operator()(const TOccupancyState &ostate, const number &tau);

        template <bool is_mdp = std::is_same<TState, TOccupancyState>::value>
        std::enable_if_t<!is_mdp, double>
        operator()(const TOccupancyState &ostate, const number &tau);
        
        double operator()(const TOccupancyState &ostate, const number &tau);
    };
} // namespace sdm

#include <sdm/utils/value_function/state_2_occupancy_vf.tpp>
````

