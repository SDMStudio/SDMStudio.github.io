
# File action\_maxplan.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_maxplan.hpp**](action__maxplan_8hpp.md)

[Go to the documentation of this file.](action__maxplan_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_base.hpp>

namespace sdm
{
    class ActionVFMaxplan : public ActionVFBase
    {
    public:
        using TData = std::shared_ptr<State>;

        ActionVFMaxplan();
        ActionVFMaxplan(const std::shared_ptr<SolvableByHSVI> &world);

        Pair<std::shared_ptr<Action>, double> selectBestAction(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t);
    };
}
````

