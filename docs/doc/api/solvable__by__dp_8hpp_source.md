
# File solvable\_by\_dp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**solvable\_by\_dp.hpp**](solvable__by__dp_8hpp.md)

[Go to the documentation of this file.](solvable__by__dp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/exception.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/world/base/mdp_interface.hpp>

namespace sdm
{
    class ValueFunction;

    class SolvableByDP
    {
    public:
        virtual ~SolvableByDP() {}
        
        virtual std::shared_ptr<Distribution<std::shared_ptr<State>>> getStartDistribution() const = 0;

        virtual std::shared_ptr<Distribution<std::shared_ptr<State>>> getNextStateDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

        virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<State> &state, number t) = 0;

        virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;

        virtual double getExpectedNextValue(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;

        virtual double getDiscount(number t) = 0;
    };
} // namespace sdm
````

