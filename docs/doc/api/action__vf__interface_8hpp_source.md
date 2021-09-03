
# File action\_vf\_interface.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_vf\_interface.hpp**](action__vf__interface_8hpp.md)

[Go to the documentation of this file.](action__vf__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/function.hpp>
#include <sdm/utils/struct/pair.hpp>

namespace sdm
{
    class ValueFunction;

    class ActionVFInterface
    {
    public:
        
        virtual Pair<std::shared_ptr<Action>, double> selectBestAction(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, number t) = 0;
    };
}
````

