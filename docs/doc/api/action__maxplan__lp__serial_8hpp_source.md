
# File action\_maxplan\_lp\_serial.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_maxplan\_lp\_serial.hpp**](action__maxplan__lp__serial_8hpp.md)

[Go to the documentation of this file.](action__maxplan__lp__serial_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_maxplan_lp.hpp>

namespace sdm
{
    class ActionVFMaxplanLPSerial : public ActionVFMaxplanLP
    {
    public:
        using TData = std::shared_ptr<State>;
        
        ActionVFMaxplanLPSerial();
        ActionVFMaxplanLPSerial(const std::shared_ptr<SolvableByHSVI>& world);
        
        void createObjectiveFunction(const std::shared_ptr<ValueFunction>&vf, const std::shared_ptr<State> &occupancy_state, IloNumVarArray &var, IloObjective &obj, number t);

        void createDecentralizedVariables(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloNumVarArray &var, number &index, number t);
        
        void createDecentralizedConstraints(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, IloEnv &env, IloRangeArray &con, IloNumVarArray &var, number &index, number t);
    
        std::shared_ptr<Action> getVariableResult(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const IloCplex &cplex, const IloNumVarArray &var, number t);
    };
}
````

