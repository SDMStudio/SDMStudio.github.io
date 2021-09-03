
# File base\_value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**base\_value\_function.hpp**](base__value__function_8hpp.md)

[Go to the documentation of this file.](base__value__function_8hpp.md) 


````cpp

#pragma once

#include <memory>

#include <sdm/types.hpp>
#include <sdm/exception.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/public/boost_serializable.hpp>
namespace sdm
{
    template <class TInput>
    class BaseValueFunction
        : public std::enable_shared_from_this<BaseValueFunction<TInput>>
    {
    public:
        BaseValueFunction();

        BaseValueFunction(number horizon);
        BaseValueFunction(const BaseValueFunction& copy);

        virtual ~BaseValueFunction() {}

        virtual void initialize() = 0;

        virtual void initialize(double v, number t = 0) = 0;

        virtual double getValueAt(const TInput &input, number t = 0) = 0;

        // virtual std::shared_ptr<VectorInterface<std::shared_ptr<Action>, double>> getQValueAt(const std::shared_ptr<Observation> &state, number t) = 0;

        // virtual double getQValueAt(const std::shared_ptr<Observation> &state, const std::shared_ptr<Action> &action, number t) = 0;

        virtual void updateValueAt(const TInput &input, number t = 0) = 0;

        virtual std::shared_ptr<Action> getBestAction(const TInput &input, number t) = 0;
        
        virtual void save(std::string) { throw exception::Exception("This class cannot be saved."); }

        virtual void load(std::string) { throw exception::Exception("This class cannot be load."); }

        virtual std::string str() const = 0;

        std::shared_ptr<BaseValueFunction<TInput>> getptr();

        number getHorizon() const;

        bool isFiniteHorizon() const;

        bool isInfiniteHorizon() const;

        friend std::ostream &operator<<(std::ostream &os, const BaseValueFunction<TInput> &vf)
        {
            os << vf.str();
            return os;
        }

    protected:
        number horizon_;
    };

    using ValueFunctionBase = BaseValueFunction<std::shared_ptr<State>>;
    using QValueFunctionBase = BaseValueFunction<Pair<std::shared_ptr<State>,std::shared_ptr<Action>>>;

} // namespace sdm
#include <sdm/utils/value_function/base_value_function.tpp>
````

