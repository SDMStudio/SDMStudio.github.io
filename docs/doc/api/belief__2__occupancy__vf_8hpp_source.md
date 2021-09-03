
# File belief\_2\_occupancy\_vf.hpp

[**File List**](files.md) **>** [**initializer**](dir_8f297180fb36cffec7cf6cc452bb4d2e.md) **>** [**belief\_2\_occupancy\_vf.hpp**](belief__2__occupancy__vf_8hpp.md)

[Go to the documentation of this file.](belief__2__occupancy__vf_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/core/function.hpp>
#include <sdm/utils/value_function/backup/backup_interface.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>


namespace sdm
{
    class Belief2OccupancyValueFunction : public RelaxedValueFunction
    {
    protected:
        std::shared_ptr<ValueFunction> pomdp_vf_;

    public:
        Belief2OccupancyValueFunction(std::shared_ptr<ValueFunction> pomdp_vf);

        double operatorMPOMDP(const std::shared_ptr<State> &, const number &);        
        double operator()(const std::shared_ptr<State> &, const number &);
        double operator()(const Pair<std::shared_ptr<State>, std::shared_ptr<Action>> &, const number &);

        bool isPomdpAvailable();
        bool isMdpAvailable();

        std::shared_ptr<ValueFunction> getRelaxation();
    };
} // namespace sdm
````

