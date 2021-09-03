
# File action\_sawtooth\_lp\_serial.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_sawtooth\_lp\_serial.hpp**](action__sawtooth__lp__serial_8hpp.md)

[Go to the documentation of this file.](action__sawtooth__lp__serial_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/value_function/action_vf/action_sawtooth_lp.hpp>

namespace sdm
{
    class ActionVFSawtoothLPSerial : public ActionVFSawtoothLP
    {
    public:
        using TData = ActionVFSawtoothLP::TData;

        ActionVFSawtoothLPSerial();
        ActionVFSawtoothLPSerial(const std::shared_ptr<SolvableByHSVI> &world, TypeOfResolution current_type_of_resolution, number bigM_value, TypeSawtoothLinearProgram type_of_linear_program);

        void createSawtoothBigM(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, const std::shared_ptr<State> &next_one_step_uncompressed_occupancy_state, double probability, double difference, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        void createSawtoothIloIfThen(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, const std::shared_ptr<State> &next_state, double probability, double difference, IloEnv &env, IloModel &model, IloNumVarArray &var, number t);

        void createDecentralizedVariables(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);
        void createDecentralizedConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
        std::shared_ptr<Action> getVariableResult(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const IloCplex &cplex, const IloNumVarArray &var, number t);

    protected:
        std::shared_ptr<Joint<std::shared_ptr<Observation>>> determineNextJointObservation(const std::shared_ptr<JointHistoryInterface> &joint_history, number t);

        void createInitialConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

    };
}
````

