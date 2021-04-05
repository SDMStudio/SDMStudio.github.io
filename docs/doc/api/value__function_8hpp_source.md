
# File value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**value\_function.hpp**](value__function_8hpp.md)

[Go to the documentation of this file.](value__function_8hpp.md) 


````cpp

#pragma once

#include <memory>

#include <sdm/core/function.hpp>
#include <sdm/utils/linear_algebra/vector_impl.hpp>

namespace sdm
{
    template <typename TState, typename TAction>
    class SolvableByHSVI;

    template <typename TState, typename TAction, typename TValue = double>
    class ValueFunction : public BinaryFunction<TState, number, TValue>
    {
    protected:
        std::shared_ptr<SolvableByHSVI<TState, TAction>> problem_;

        std::shared_ptr<BinaryFunction<TState, number, TValue>> init_function_ = nullptr;

        int horizon_;

    public:
        ValueFunction(std::shared_ptr<SolvableByHSVI<TState, TAction>> problem, number horizon);

        virtual ~ValueFunction() {}

        std::shared_ptr<BinaryFunction<TState, number, TValue>> getInitFunction();

        virtual void initialize() = 0;

        virtual void initialize(TValue v, number t = 0) = 0;

        void initialize(std::shared_ptr<BinaryFunction<TState, number, TValue>> init_function);

        virtual TValue getValueAt(const TState &state, number t = 0) = 0;

        virtual void updateValueAt(const TState &s, number t = 0) = 0;

        virtual std::string str() = 0;

        virtual std::vector<TState> getSupport(number t) = 0;

        TValue operator()(const TState &state, const number &t = 0);

        std::shared_ptr<VectorImpl<TAction, TValue>> getQValueAt(const TState &state, number t);

        TValue getQValueAt(const TState &state, const TAction &action, number t);

        TAction getBestAction(const TState &state, number t = 0);

        std::shared_ptr<SolvableByHSVI<TState, TAction>> getWorld();

        int getHorizon() const;

        bool isFiniteHorizon() const;

        bool isInfiniteHorizon() const;

        friend std::ostream &operator<<(std::ostream &os, ValueFunction<TState, TAction> &vf)
        {
            os << vf.str();
            return os;
        }

        double getDiscount(number t);
    };
} // namespace sdm
#include <sdm/utils/value_function/value_function.tpp>
````

