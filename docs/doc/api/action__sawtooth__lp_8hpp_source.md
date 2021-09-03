
# File action\_sawtooth\_lp.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_sawtooth\_lp.hpp**](action__sawtooth__lp_8hpp.md)

[Go to the documentation of this file.](action__sawtooth__lp_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_base.hpp>
#include <sdm/utils/linear_programming/decentralized_lp_problem.hpp>

#include <sdm/utils/linear_algebra/mapped_vector.hpp>
namespace sdm
{
    class ActionVFSawtoothLP : public ActionVFBase, public DecentralizedLP
    {
    public:
        using TData = double;

        ActionVFSawtoothLP();
        ActionVFSawtoothLP(const std::shared_ptr<SolvableByHSVI>& world,TypeOfResolution current_type_of_resolution, number bigM_value, TypeSawtoothLinearProgram type_of_linear_program);

        virtual Pair<std::shared_ptr<Action>, double> selectBestAction(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t);

        virtual void createVariables(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &occupancy_state, IloEnv &env, IloNumVarArray &var, number &index, number t);

        virtual void createConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &occupancy_state, IloEnv &env, IloModel &model, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        void createObjectiveFunction(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &occupancy_state, IloNumVarArray &var, IloObjective &obj, number t);
        Pair<std::shared_ptr<State>, double> evaluate(const std::shared_ptr<ValueFunction> &vf,const std::shared_ptr<State> &state_tmp,const std::shared_ptr<Action>& decision_rule, number t);

    protected:
        TypeOfResolution current_type_of_resolution_;

        TypeSawtoothLinearProgram type_of_linear_program_ = PLAIN_SAWTOOTH_LINER_PROGRAMMING;

        number bigM_value_;

        std::unordered_map<Pair<std::shared_ptr<State>,double>,std::unordered_map<std::shared_ptr<HistoryInterface>,std::vector<std::shared_ptr<State>>>> all_support;

        virtual void createSawtoothBigM(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, const std::shared_ptr<State> &next_one_step_uncompressed_occupancy_state, double probability, double difference, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        // virtual void createSawtoothIloIfThen(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, const std::shared_ptr<State> &next_state, double probability, double difference, IloEnv &env, IloModel &model, IloNumVarArray &var, number t);

        virtual void createSawtoothIloIfThen(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, const std::shared_ptr<State> &next_state, double probability, double difference, IloEnv &env, IloModel &model, IloNumVarArray &var, number t);

        virtual double getSawtoothMinimumRatio(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, double denominator, number t);

        virtual double getQValueRelaxation(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<Action> &action, number t);

        virtual std::shared_ptr<Joint<std::shared_ptr<Observation>>> determineNextJointObservation(const std::shared_ptr<JointHistoryInterface> &, number t);

        // std::shared_ptr<MappedVector<std::shared_ptr<State>, double>> representation;

        // std::unordered_map<std::shared_ptr<State>, std::shared_ptr<Action>> state_linked_to_decision_rule;

        virtual void createDecentralizedVariables(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);
        virtual void createDecentralizedConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
        virtual std::shared_ptr<Action> getVariableResult(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const IloCplex &cplex, const IloNumVarArray &var, number t);

        virtual void createInitialConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
        void createOmegaConstraints(const Pair<std::shared_ptr<State>,double> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index);
        // void createUpperBoundLimitConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state,  IloEnv &env,IloRangeArray &con, IloNumVarArray &var,number &index, number t);

        Pair<std::shared_ptr<Action>, double> selectBestActionFull(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t);
        Pair<std::shared_ptr<Action>, double> selectBestActionRelaxed(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t);
        Pair<std::shared_ptr<Action>, double> selectBestActionRelaxedV2(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, number t);

        void createOmegaVariable(IloEnv &env, IloNumVarArray &var, number &index);

        void createObjectiveVariable(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);

        double computeDifference(const std::shared_ptr<ValueFunction> &vf,const Pair<std::shared_ptr<State>,double>& state_AND_value, number t);


        void createConstraintsKnowingInformation(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<JointHistoryInterface> &, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, const std::shared_ptr<State> &next_state, double denominator , double difference , IloEnv &env, IloModel &model, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        double computeSawtooth( const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<Action>& action, const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &next_hidden_state, const std::shared_ptr<Observation> &next_observation, const std::shared_ptr<JointHistoryInterface> &next_joint_history, double denominator , double difference, number t);

        void createGlobalConstraint(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state,IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
    };
}
````

