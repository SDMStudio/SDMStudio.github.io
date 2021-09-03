
# File action\_maxplan\_lp.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_maxplan\_lp.hpp**](action__maxplan__lp_8hpp.md)

[Go to the documentation of this file.](action__maxplan__lp_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_base.hpp>
#include <sdm/utils/linear_programming/decentralized_lp_problem.hpp>

namespace sdm
{
    class ActionVFMaxplanLP : public ActionVFBase, public DecentralizedLP
    {
    public:
        using TData = std::shared_ptr<State>;
        
        ActionVFMaxplanLP();
        ActionVFMaxplanLP(const std::shared_ptr<SolvableByHSVI>& world);
        
        Pair<std::shared_ptr<Action>, double> selectBestAction(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, number t);

        void createVariables(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, IloEnv &env, IloNumVarArray &var,number &index, number t);
        
        void createObjectiveFunction(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, IloNumVarArray &var, IloObjective &obj, number t);
        
        void createConstraints(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State>& occupancy_state, IloEnv &env, IloModel &model, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        virtual void createDecentralizedVariables(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);
        
        virtual void createDecentralizedConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
        
        virtual std::shared_ptr<Action> getVariableResult(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const IloCplex &cplex, const IloNumVarArray &var, number t);
    };
}
````

