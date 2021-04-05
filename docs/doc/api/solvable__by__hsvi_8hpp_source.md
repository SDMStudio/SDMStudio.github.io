
# File solvable\_by\_hsvi.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**solvable\_by\_hsvi.hpp**](solvable__by__hsvi_8hpp.md)

[Go to the documentation of this file.](solvable__by__hsvi_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/algorithms/hsvi.hpp>
#include <sdm/world/world_type.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/exception.hpp>

namespace sdm
{

    template <typename TState, typename TAction>
    class SolvableByHSVI
    {
    public:
        virtual ~SolvableByHSVI() {}
        
        virtual TState getInitialState() = 0;

        virtual TState nextState(const TState &state, const TAction &action, int t = 0, HSVI<TState, TAction> *hsvi = nullptr) const = 0;

        virtual std::shared_ptr<DiscreteSpace<TAction>> getActionSpaceAt(const TState &state) = 0;

        virtual double getReward(const TState &state, const TAction &action) const = 0;

        virtual double getExpectedNextValue(ValueFunction<TState, TAction> *value_function, const TState &state, const TAction &action, int t = 0) const = 0;

        virtual typename WorldType<TState, TAction>::underlying_problem_type *getUnderlyingProblem() = 0;

        virtual bool isSerialized() const = 0;
    };
} // namespace sdm
````

