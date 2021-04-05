
# File belief\_2\_occupancy\_vf.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**belief\_2\_occupancy\_vf.hpp**](belief__2__occupancy__vf_8hpp.md)

[Go to the documentation of this file.](belief__2__occupancy__vf_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/exception.hpp>
#include <sdm/core/function.hpp>
#include <sdm/core/state/serialized_occupancy_state.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/world/world_type.hpp>

namespace sdm
{
    template <typename TBelief, typename TOccupancyState>
    class Belief2OccupancyValueFunction : public BinaryFunction<TOccupancyState, number, double>
    {
    protected:
        std::shared_ptr<ValueFunction<TBelief, number>> pomdp_vf_;

    public:
        Belief2OccupancyValueFunction(std::shared_ptr<ValueFunction<TBelief, number>> pomdp_vf);

        template <bool is_solving_dpomdp = std::is_any<typename WorldType<TOccupancyState>::underlying_problem_type, DiscreteDecPOMDP>::value>
        std::enable_if_t<is_solving_dpomdp, double>
        sawtooth(const TBelief &bstate, const number &tau);


        // template <bool is_solving_mdp = std::is_any<typename WorldType<TOccupancyState>::underlying_problem_type, DiscreteMDP, DiscreteMMDP>::value>
        // std::enable_if_t<is_solving_mdp, double>
        // operator()(const TOccupancyState &ostate, const number &tau);

        // template <bool is_solving_pomdp = std::is_any<typename WorldType<TOccupancyState>::underlying_problem_type, DiscretePOMDP>::value>
        // std::enable_if_t<is_solving_pomdp, double>
        // operator()(const TOccupancyState &ostate, const number &tau);

        template <bool is_solving_dpomdp = std::is_any<typename WorldType<TOccupancyState>::underlying_problem_type, DiscreteDecPOMDP>::value>
        std::enable_if_t<is_solving_dpomdp, double>
        operator()(const TOccupancyState &ostate, const number &tau);
        

        template <bool is_solving_dpomdp = std::is_any<typename WorldType<TOccupancyState>::underlying_problem_type, DiscreteDecPOMDP>::value>
        std::enable_if_t<!is_solving_dpomdp, double>
        operator()(const TOccupancyState &ostate, const number &tau);
        

        double operator()(const TOccupancyState &ostate, const number &tau);
    };

} // namespace sdm

#include <sdm/utils/value_function/belief_2_occupancy_vf.tpp>
````

