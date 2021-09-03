
# File lp\_problem.hpp

[**File List**](files.md) **>** [**linear\_programming**](dir_0699598e7f4b6e2c3b8ad2b0ce6abc71.md) **>** [**lp\_problem.hpp**](lp__problem_8hpp.md)

[Go to the documentation of this file.](lp__problem_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/core/state/interface/belief_interface.hpp>
#include <sdm/utils/linear_programming/lp_problem_interface.hpp>
// #include <sdm/utils/linear_algebra/vector_interface.hpp>

namespace sdm
{
    class LPBase : public LPInterface
    {
    public:
        LPBase();
        LPBase(const std::shared_ptr<SolvableByHSVI>&);
        ~LPBase();

        Pair<std::shared_ptr<Action>,double> createLP(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, number t);


    protected : 
    
        std::shared_ptr<SolvableByHSVI> world_;

        std::shared_ptr<BeliefInterface> tmp_representation;
    };
}
````

