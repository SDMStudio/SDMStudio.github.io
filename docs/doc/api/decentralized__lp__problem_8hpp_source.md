
# File decentralized\_lp\_problem.hpp

[**File List**](files.md) **>** [**linear\_programming**](dir_0699598e7f4b6e2c3b8ad2b0ce6abc71.md) **>** [**decentralized\_lp\_problem.hpp**](decentralized__lp__problem_8hpp.md)

[Go to the documentation of this file.](decentralized__lp__problem_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/linear_programming/lp_problem.hpp>
#include <sdm/utils/linear_programming/variable_naming.hpp>

namespace sdm
{
    class DecentralizedLP : public VarNaming, public LPBase
    {
    public :

        DecentralizedLP();
        DecentralizedLP(const std::shared_ptr<SolvableByHSVI>&);

        virtual void createDecentralizedVariables(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t) = 0;
        void createDecentralizedVariablesSerial(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);
        void createDecentralizedVariablesOccupancy(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);

        virtual void createDecentralizedConstraints(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State>& state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t) = 0;
        void createDecentralizedConstraintsSerial(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State>& state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
        void createDecentralizedConstraintsOccupancy(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State>& state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        virtual std::shared_ptr<Action> getVariableResult(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state,const IloCplex &cplex, const IloNumVarArray &var, number t) = 0;
        std::shared_ptr<Action> getVariableResultSerial(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state,const IloCplex &cplex, const IloNumVarArray &var, number t);
        std::shared_ptr<Action> getVariableResultOccupancy(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state,const IloCplex &cplex, const IloNumVarArray &var, number t);

    protected : 

        void createDecentralizedConstraintsIndividual(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t, number agent_id);

        void createDecentralizedVariablesIndividual(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t, number agent_id);

        void createDecentralizedConstraintsJoint(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);

        void createDecentralizedControlConstraints(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
        void createDecentralizedVariablesJoint(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);

        Pair<std::vector<std::shared_ptr<Item>>,std::vector<std::shared_ptr<Item>>> getVariableResultIndividual(const std::shared_ptr<ValueFunction>&vf,const std::shared_ptr<State> &state,const IloCplex &cplex, const IloNumVarArray &var, number t, number agent_id);


    };
}
````

