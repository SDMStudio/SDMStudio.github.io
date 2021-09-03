
# File action\_vf\_base.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_vf\_base.hpp**](action__vf__base_8hpp.md)

[Go to the documentation of this file.](action__vf__base_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_interface.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/value_function/value_function.hpp>

namespace sdm
{
    class ActionVFBase : public ActionVFInterface
    {
    public:
        ActionVFBase();
        ActionVFBase(const std::shared_ptr<SolvableByHSVI> &world);

        virtual ~ActionVFBase();
        virtual Pair<std::shared_ptr<Action>, double> selectBestAction(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t) = 0;

    protected:
        std::shared_ptr<SolvableByHSVI> world_;
    };
}
````

