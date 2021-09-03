
# File qvalue\_function\_conditioning.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**qvalue\_function\_conditioning.hpp**](qvalue__function__conditioning_8hpp.md)

[Go to the documentation of this file.](qvalue__function__conditioning_8hpp.md) 


````cpp

#pragma once
#include <sdm/utils/value_function/qvalue_function.hpp>

namespace sdm
{
    template <class TCondition, class TState>
    class QValueFunctionConditioning : public QValueFunction<Pair<TCondition,TState>>
    {
    protected:
        // std::shared_ptr<BinaryFunction<TState, std::shared_ptr<Action>, number, double>> init_function_ = nullptr;

    public:
        using TInput = Pair<TCondition,TState>;

        QValueFunctionConditioning();

        QValueFunctionConditioning(number horizon);

        virtual double getQValueAt(const TCondition&, const TState &state, const std::shared_ptr<Action> &action, number t) = 0;

        virtual void updateQValueAt(const TCondition&, const TState &state, const std::shared_ptr<Action> &action, number t = 0) = 0;
        
        virtual void updateQValueAt(const TCondition&, const TState &state, const std::shared_ptr<Action> &action, number t, double delta) = 0;

        virtual double getQValueAt(const TInput &input, const std::shared_ptr<Action> &action, number t);

        virtual void updateQValueAt(const TInput &input, const std::shared_ptr<Action> &action, number t = 0);

        virtual void updateQValueAt(const TInput &input, const std::shared_ptr<Action> &action, number t, double target);

        std::shared_ptr<QValueFunctionConditioning<TCondition,TState>> getptr();

    };
} // namespace sdm
#include <sdm/utils/value_function/qvalue_function_conditioning.tpp>
````

