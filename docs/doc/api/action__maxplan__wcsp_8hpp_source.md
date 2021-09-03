
# File action\_maxplan\_wcsp.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_maxplan\_wcsp.hpp**](action__maxplan__wcsp_8hpp.md)

[Go to the documentation of this file.](action__maxplan__wcsp_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_base.hpp>
#include <sdm/utils/linear_programming/variable_naming.hpp>

// #include "../../toulbar2/src/toulbar2lib.hpp"
#include "toulbar2lib.hpp"


namespace sdm
{
    class ActionVFMaxplanWCSP : public ActionVFBase, public VarNaming
    {
    public:
        using TData = std::shared_ptr<State>;
        
        ActionVFMaxplanWCSP();
        ActionVFMaxplanWCSP(const std::shared_ptr<SolvableByHSVI>& world);
        
        Pair<std::shared_ptr<Action>,double> selectBestAction(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, number t);
    
        // Fonction temporaire le temps de bien comprendre 
        Pair<std::shared_ptr<Action>, double>  createWCSPProblem(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, number t);
    
    protected :

        double max;

        long offset = 1000000000000;

        long getCost(double);

        double getValueAt(const std::shared_ptr<OccupancyStateInterface>& occupancy_state, const std::shared_ptr<JointHistoryInterface>& joint_history, const std::shared_ptr<Action>& action,const std::shared_ptr<State>& next_hyperplan, number t);

        std::shared_ptr<BeliefInterface> tmp_representation;

        void determineMaxValue(const std::shared_ptr<State>& state, number t);

    };
}
````

