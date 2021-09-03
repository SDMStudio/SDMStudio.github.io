
# File solvable\_by\_hsvi.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**solvable\_by\_hsvi.hpp**](solvable__by__hsvi_8hpp.md)

[Go to the documentation of this file.](solvable__by__hsvi_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/exception.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/world/base/mdp_interface.hpp>

namespace sdm
{
    class HSVI;
    class ValueFunction;

    class SolvableByHSVI
    {
    public:
        virtual ~SolvableByHSVI() {
        }

        virtual std::shared_ptr<State> getInitialState() = 0;
        virtual void setInitialState(const std::shared_ptr<State> &) = 0;

        virtual std::shared_ptr<State> nextState(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0, const std::shared_ptr<HSVI> &hsvi = nullptr) = 0;
        // virtual std::shared_ptr<State> nextStateDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const = 0;

        virtual std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<State> &state, number t) = 0;

        virtual std::shared_ptr<Space> getObservationSpaceAt(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) = 0;
        virtual Pair<std::shared_ptr<State>, double> getNextState(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation>& observation, number t) = 0;

        virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) = 0;

        virtual double getExpectedNextValue(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) = 0;

        virtual const std::shared_ptr<MDPInterface> &getUnderlyingProblem() const = 0;

        virtual bool isSerialized() const = 0;

        virtual double getDiscount(number t) const = 0;

        virtual double getWeightedDiscount(number t) = 0;

        virtual double do_excess(double incumbent, double lb_value, double ub_value, double cost_so_far, double error, number t) = 0;

        virtual Pair<std::shared_ptr<Action>, double> selectNextAction(const std::shared_ptr<ValueFunction> &lb, const std::shared_ptr<ValueFunction> &ub, const std::shared_ptr<State> &state, number t) = 0;
    };
} // namespace sdm
````

