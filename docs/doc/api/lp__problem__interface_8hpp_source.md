
# File lp\_problem\_interface.hpp

[**File List**](files.md) **>** [**linear\_programming**](dir_0699598e7f4b6e2c3b8ad2b0ce6abc71.md) **>** [**lp\_problem\_interface.hpp**](lp__problem__interface_8hpp.md)

[Go to the documentation of this file.](lp__problem__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/action/action.hpp>
#include <ilcplex/ilocplex.h>
#include <sdm/core/state/state.hpp>
#include <sdm/utils/value_function/value_function.hpp>


namespace sdm
{
    class LPInterface
    {
    public : 

        virtual Pair<std::shared_ptr<Action>,double> createLP(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, number t) = 0;

        virtual void createVariables(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, IloEnv &env, IloNumVarArray &var,number &index, number t) = 0;
        
        virtual void createObjectiveFunction(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, IloNumVarArray &var, IloObjective &obj, number t) = 0;
        
        virtual void createConstraints(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State>& occupancy_state, IloEnv &env, IloModel &model, IloRangeArray &con, IloNumVarArray &var, number &index, number t) = 0;

        virtual std::shared_ptr<Action> getVariableResult(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state,const IloCplex &cplex, const IloNumVarArray &var, number t) =0;
    };
}
````

