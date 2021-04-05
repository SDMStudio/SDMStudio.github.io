
# File backup\_operator.hpp

[**File List**](files.md) **>** [**backup\_operator**](dir_e5da9301ce0d3402db8949e56416e9b7.md) **>** [**backup\_operator.hpp**](backup__operator_8hpp.md)

[Go to the documentation of this file.](backup__operator_8hpp.md) 


````cpp
#pragma once
#include <math.h>

#include <sdm/utils/value_function/value_function.hpp>

namespace sdm
{
    template <typename TState, typename TAction, typename TData>
    class BackupOperator
    {
    public:
        using data_type = TData;

        virtual TData backup(ValueFunction<TState, TAction> *vf, TState s, int t) = 0;
    };

    template <typename TState, typename TAction>
    class ClassicBellmanBackupOperator : public BackupOperator<TState, TAction, double>
    {
    public:
        double backup(ValueFunction<TState, TAction> *vf, TState s, int t)
        {
            return vf->getQValueAt(s, t)->max();
        }
    };
} // namespace sdm
````

