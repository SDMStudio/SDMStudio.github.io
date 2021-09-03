
# File tabular\_qvalue\_function\_conditioning.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**tabular\_qvalue\_function\_conditioning.hpp**](tabular__qvalue__function__conditioning_8hpp.md)

[Go to the documentation of this file.](tabular__qvalue__function__conditioning_8hpp.md) 


````cpp

#pragma once
#include <sdm/utils/value_function/tabular_qvalue_function.hpp>
#include <sdm/utils/value_function/qvalue_function_conditioning.hpp>
namespace sdm
{
    template <class TCondition, class TState>
    class TabularQValueFunctionConditioning : public TabularQValueFunction<Pair<TCondition,TState>>, public QValueFunctionConditioning<TCondition,TState>
    {

    public:
        using TInput = typename QValueFunctionConditioning<TCondition,TState>::TInput;
        using Container = typename TabularQValueFunction<Pair<TCondition,TState>>::Container;

        TabularQValueFunctionConditioning(number horizon, double learning_rate, std::shared_ptr<QInitializer<TInput>> initializer, bool active_learning = true);

        TabularQValueFunctionConditioning(number horizon = 0, double learning_rate = 0.1, double default_value = 0., bool active_learning = true);

        std::shared_ptr<VectorInterface<std::shared_ptr<Action>, double>> getQValuesAt(const TInput &state, number t);

        double getQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t);

        void updateQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t = 0);

        void updateQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t, double delta);


        // Fonction conditioning

        double getQValueAt(const TCondition&, const TState &state, const std::shared_ptr<Action> &action, number t);

        void updateQValueAt(const TCondition&, const TState &state, const std::shared_ptr<Action> &action, number t = 0);

        void updateQValueAt(const TCondition&, const TState &state, const std::shared_ptr<Action> &action, number t, double delta);

    };
} // namespace sdm
#include <sdm/utils/value_function/tabular_qvalue_function_conditioning.tpp>
````

