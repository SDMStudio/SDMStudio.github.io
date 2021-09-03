
# File action\_maxplan\_serial.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_maxplan\_serial.hpp**](action__maxplan__serial_8hpp.md)

[Go to the documentation of this file.](action__maxplan__serial_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_base.hpp>
#include <sdm/core/state/private_occupancy_state.hpp>

namespace sdm
{
    class ActionVFMaxplanSerial : public ActionVFBase
    {
    public:
        using TData = std::shared_ptr<State>;

        ActionVFMaxplanSerial();
        ActionVFMaxplanSerial(const std::shared_ptr<SolvableByHSVI> &world);

        Pair<std::shared_ptr<Action>,double> selectBestAction(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t);

        Pair<std::shared_ptr<Action>, double> selectBestDecisionRuleKnowingNextHyperplan(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<State> &next_hyperplan, number t);
        Pair<std::shared_ptr<Action>, double> selectBestActionKnowingNextHyperplanAndHistory(const std::shared_ptr<State> &state, const std::shared_ptr<State> &next_hyperplan, const std::shared_ptr<HistoryInterface> &ihistory, number t);
        double evaluationOfHyperplanKnowingNextHyperplanAndDiscreteAction(const std::shared_ptr<State> &occupancy_state, const std::shared_ptr<Action> &action ,const std::shared_ptr<State> &next_step_hyperplan, number t);
        double evaluateNextExpectedValueAt(const std::shared_ptr<State> &hyperplan, const std::shared_ptr<HistoryInterface> &joint_history, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);
    };
}
````

