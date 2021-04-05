
# File tabular\_value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**tabular\_value\_function.hpp**](tabular__value__function_8hpp.md)

[Go to the documentation of this file.](tabular__value__function_8hpp.md) 


````cpp

#pragma once

#include <map>
#include <iostream>
#include <type_traits>

#include <sdm/utils/value_function/initializer.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>
#include <sdm/utils/linear_algebra/sdms_vector.hpp>
#include <sdm/utils/backup_operator/backup_operator.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/function.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>

namespace sdm
{
    template <typename TState,
              typename TAction,
              typename TValue = double,
              template <typename TI, typename TV> class TBackupOperator = ClassicBellmanBackupOperator,
              template <typename TI, typename TV> class TStruct = MappedVector>
    class TabularValueFunction : public ValueFunction<TState, TAction, TValue>
    {
    protected:
        using Container = TStruct<TState, TValue>;
        using backup_operator_type = TBackupOperator<TState, TAction>;

        std::vector<Container> representation;

        backup_operator_type backup_op_;

        std::shared_ptr<Initializer<TState, TAction>> initializer_;

    public:
        TabularValueFunction(std::shared_ptr<SolvableByHSVI<TState, TAction>> problem, number horizon, std::shared_ptr<Initializer<TState, TAction>> initializer);

        TabularValueFunction(std::shared_ptr<SolvableByHSVI<TState, TAction>> problem, number horizon = 0, TValue default_value = 0.);

        void initialize();

        void initialize(TValue default_value, number t = 0);

        TValue getValueAt(const TState &state, number t = 0);

        Container getValueAt(number t = 0);

        void updateValueAt(const TState &state, number t = 0);
        void updateValueAt(const TState &state, number t, TValue target);

        std::string str();

        std::vector<TState> getSupport(number t);

        backup_operator_type getBackupOperator();

        friend std::ostream &operator<<(std::ostream &os, TabularValueFunction<TState, TAction> &vf)
        {
            os << vf.str();
            return os;
        }
    };

    template <typename TState, typename TAction, typename TValue = double>
    using MappedValueFunction = TabularValueFunction<TState, TAction, TValue, ClassicBellmanBackupOperator, MappedVector>;

    template <typename TState, typename TAction, typename TValue = double>
    using SparseValueFunction = TabularValueFunction<TState, TAction, TValue, ClassicBellmanBackupOperator, SparseVector>;

    template <typename TState, typename TAction, typename TValue = double>
    using DenseValueFunction = TabularValueFunction<TState, TAction, TValue, ClassicBellmanBackupOperator, DenseVector>;

} // namespace sdm
#include <sdm/utils/value_function/tabular_value_function.tpp>
````

