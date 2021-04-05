
# File incremental\_value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**incremental\_value\_function.hpp**](incremental__value__function_8hpp.md)

[Go to the documentation of this file.](incremental__value__function_8hpp.md) 


````cpp

#pragma once
#include <map>
#include <assert.h>

#include <sdm/utils/linear_algebra/vector_impl.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/world/posg.hpp>

namespace sdm
{
    template <typename TState, typename TAction, typename TValueFunction>
    class IncrementalValueFunction : public TValueFunction<TState, TAction, TValue>
    {
    protected:
    public:
        IncrementalValueFunction(std::shared_ptr<POSG> problem);

        std::shared_ptr<POSG> getWorld();

        void updateValueAt(const TState &s, int t = 0){
            TBackupOperator backup_op(this, world);
            backup_op.updateAt(s, t);
        }
    };

} // namespace sdm

#include <sdm/utils/value_function/incremental_value_function.tpp>
````

