
# File qvalue\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**qvalue\_function.hpp**](qvalue__function_8hpp.md)

[Go to the documentation of this file.](qvalue__function_8hpp.md) 


````cpp

#pragma once

#include <memory>

#include <sdm/core/function.hpp>
#include <sdm/utils/linear_algebra/vector_interface.hpp>
#include <sdm/utils/value_function/base_value_function.hpp>

namespace sdm
{
    template <class TInput = std::shared_ptr<State>>
    class QValueFunction : public BaseValueFunction<Pair<TInput,std::shared_ptr<Action>>>
    {
    protected:
        // std::shared_ptr<BinaryFunction<std::shared_ptr<State>, std::shared_ptr<Action>, number, double>> init_function_ = nullptr;

    public:
        using TGlobalInput = Pair<TInput,std::shared_ptr<Action>>;

        QValueFunction();

        QValueFunction(number horizon);

        virtual void initialize() = 0;

        virtual void initialize(double v, number t = 0) = 0;

        double getValueAt(const TGlobalInput &input, number t = 0);

        void updateValueAt(const TGlobalInput &input, number t = 0);

        std::shared_ptr<Action> getBestAction(const TGlobalInput &input, number t);
        
        virtual std::shared_ptr<VectorInterface<std::shared_ptr<Action>, double>> getQValuesAt(const TInput &state, number t) = 0;

        virtual double getQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t) = 0;

        virtual void updateQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t = 0) = 0;

        virtual void updateQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t, double target) = 0;

        virtual bool isNotSeen(const TInput &state, number t) = 0;

        virtual int getNumStates() const = 0;

        // virtual void printNumberOfActions() = 0;

        virtual std::string str() const = 0;

        std::shared_ptr<QValueFunction> getptr();

    };
} // namespace sdm
#include <sdm/utils/value_function/qvalue_function.tpp>
````

