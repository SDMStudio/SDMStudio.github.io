
# File value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**value\_function.hpp**](value__function_8hpp.md)

[Go to the documentation of this file.](value__function_8hpp.md) 


````cpp

#pragma once

#include <memory>

#include <sdm/utils/linear_algebra/vector_impl.hpp>
#include <sdm/world/posg.hpp>

namespace sdm
{
    template <typename TState, typename TAction, typename TValue = double>
    class ValueFunction
    {
    protected:
        std::shared_ptr<POSG> problem_;

        int horizon_;

    public:
        ValueFunction(std::shared_ptr<POSG> problem, int horizon) : problem_(problem), horizon_(horizon)
        {
        }

        virtual void updateValueAt(TState &s, int t = 0) = 0;

        virtual void initialize() = 0;

        virtual void initialize(TValue v, int t = 0) = 0;

        virtual TValue getValueAt(TState &state, int t = 0) = 0;

        virtual std::shared_ptr<VectorImpl<TAction, TValue>> getQValueAt(TState &state, int t = 0) = 0;

        virtual TValue getQValueAt(TState &state, TAction &action, int t = 0) = 0;

        virtual TAction getBestAction(TState &state, int t = 0) = 0;

        virtual std::string str() = 0;

        std::shared_ptr<POSG> getWorld()
        {
            return this->problem_;
        }

        int getHorizon() const
        {
            return this->horizon_;
        }

        int isFiniteHorizon() const
        {
            return (this->horizon_ > 0);
        }

        int isInfiniteHorizon() const
        {
            return !(this->isFiniteHorizon());
        }

        friend std::ostream &operator<<(std::ostream &os, ValueFunction<TState, TAction> &vf)
        {
            os << vf.str();
            return os;
        }
    };
} // namespace sdm
````

