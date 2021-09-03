
# File solvable\_by\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**solvable\_by\_mdp.hpp**](solvable__by__mdp_8hpp.md)

[Go to the documentation of this file.](solvable__by__mdp_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/world/base/mdp_interface.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/algorithms/hsvi.hpp>

namespace sdm
{
    class SolvableByMDP : public SolvableByHSVI
    {
    public:
        SolvableByMDP();

        SolvableByMDP(const std::shared_ptr<MDPInterface> &mdp);

        std::shared_ptr<State> getInitialState();

        void setInitialState(const std::shared_ptr<State> &state);

        virtual std::shared_ptr<State> nextState(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0, const std::shared_ptr<HSVI> &hsvi = nullptr);

        std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<State> &state, number t = 0);

        virtual std::shared_ptr<Space> getObservationSpaceAt(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);

        virtual Pair<std::shared_ptr<State>, double> getNextState(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &belief, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation>& observation, number t);

        double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0);

        double getExpectedNextValue(const std::shared_ptr<ValueFunction> &value_function, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0);

        const std::shared_ptr<MDPInterface> &getUnderlyingProblem() const;

        bool isSerialized() const;

        double getDiscount(number t = 0) const;

        double getWeightedDiscount(number t);

        double do_excess(double incumbent, double lb_value, double ub_value, double cost_so_far, double error, number horizon);

        Pair<std::shared_ptr<Action>, double> selectNextAction(const std::shared_ptr<ValueFunction> &lb, const std::shared_ptr<ValueFunction> &ub, const std::shared_ptr<State> &s, number h);

    protected:
        const std::shared_ptr<MDPInterface> &getUnderlyingMDP() const;

        std::shared_ptr<MDPInterface> underlying_problem_;

        std::shared_ptr<State> initial_state_;
    };
} // namespace sdm
````

