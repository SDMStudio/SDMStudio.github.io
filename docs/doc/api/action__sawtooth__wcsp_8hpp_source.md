
# File action\_sawtooth\_wcsp.hpp

[**File List**](files.md) **>** [**action\_vf**](dir_d1aeb2fe2f9787dc1bfb67b37cd039f2.md) **>** [**action\_sawtooth\_wcsp.hpp**](action__sawtooth__wcsp_8hpp.md)

[Go to the documentation of this file.](action__sawtooth__wcsp_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/action_vf/action_vf_base.hpp>
#include <sdm/utils/linear_programming/variable_naming.hpp>

// #include "../../toulbar2/src/toulbar2lib.hpp"
#include "toulbar2lib.hpp"

#include <sdm/utils/linear_algebra/mapped_vector.hpp>

namespace sdm
{
    class ActionVFSawtoothWCSP : public ActionVFBase, public VarNaming
    {
    public:
        using TData = std::shared_ptr<State>;
        
        ActionVFSawtoothWCSP();
        ActionVFSawtoothWCSP(const std::shared_ptr<SolvableByHSVI>& world);
        
        Pair<std::shared_ptr<Action>, double> selectBestAction(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, number t);
    
        // Fonction temporaire le temps de bien comprendre 
        Pair<std::shared_ptr<Action>,double>  createWCSPProblem(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, number t);
    
    protected :

        double max;

        long offset = 1000000000000;

        Cost getCost(double);

        double getValueAt(const std::shared_ptr<ValueFunction>& vf,const std::shared_ptr<OccupancyStateInterface>& occupancy_state, const std::shared_ptr<JointHistoryInterface>& joint_history, const std::shared_ptr<Action>& action,const std::shared_ptr<State>& next_hyperplan, number t);

        Pair<std::shared_ptr<State>,double> representation;
        std::shared_ptr<HistoryInterface> support_of_the_next_history;
        std::shared_ptr<State> support_of_the_next_hidden_state;
        std::shared_ptr<Action> support_of_the_next_action;
        bool support_empty;

        std::unordered_map<std::shared_ptr<State>,std::shared_ptr<Action>> state_linked_to_decision_rule;

        void determineMaxValue(const std::shared_ptr<ValueFunction>& vf,const std::shared_ptr<State>& state, number t);

        std::set<std::shared_ptr<JointHistoryInterface>> determineJointHistory(const std::shared_ptr<State> &state);

        void createWCSPVariable(std::shared_ptr<WeightedCSPSolver>&,const std::shared_ptr<State>& state,number t);
        void createWCSPCostGraph(std::shared_ptr<WeightedCSPSolver>& wcsp_solver,const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state,const std::set<std::shared_ptr<JointHistoryInterface>>& set_joint_history,number t);
        Pair<std::shared_ptr<Action>,double> getWSCPResult(std::shared_ptr<WeightedCSPSolver>& wcsp_solver,const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state,const std::set<std::shared_ptr<JointHistoryInterface>>& set_joint_history,number t);


    };
}
````

