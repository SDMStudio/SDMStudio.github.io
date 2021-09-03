
# File backup\_interface.hpp

[**File List**](files.md) **>** [**backup**](dir_803cd76b7b48fbc4f6eb3babc1175d51.md) **>** [**backup\_interface.hpp**](backup__interface_8hpp.md)

[Go to the documentation of this file.](backup__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/function.hpp>

namespace sdm
{
    class ValueFunction;

    class BackupInterfaceForValueFunction
    {
    };

    template <class TData>
    class BackupInterface : public BackupInterfaceForValueFunction
    {
    public:

        virtual TData backup(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, const std::shared_ptr<Action>& action, number t) = 0;
    };
}
````

