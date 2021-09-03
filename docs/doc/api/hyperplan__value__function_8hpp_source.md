
# File hyperplan\_value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**hyperplan\_value\_function.hpp**](hyperplan__value__function_8hpp.md)

[Go to the documentation of this file.](hyperplan__value__function_8hpp.md) 


````cpp
#pragma once
#define LOGTIME

#include <sdm/utils/value_function/initializer/initializer.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/backup/backup_interface.hpp>

#include <bits/stdc++.h>
#include <sdm/config.hpp>
namespace sdm
{
    class HyperplanValueFunction : public ValueFunction
    {
    public:
        static double PRECISION;

        HyperplanValueFunction(number horizon, const std::shared_ptr<Initializer> &initializer, const std::shared_ptr<BackupInterfaceForValueFunction> &backup, const std::shared_ptr<ActionVFInterface> &action_vf, int freq_prunning = -1,TypeOfMaxPlanPrunning type_of_maxplan_prunning = TypeOfMaxPlanPrunning::PAIRWISE);

        HyperplanValueFunction(number horizon, double default_value = 0., const std::shared_ptr<BackupInterfaceForValueFunction> &backup = nullptr, const std::shared_ptr<ActionVFInterface> &action_vf = nullptr, int freq_prunning = -1, TypeOfMaxPlanPrunning type_of_maxplan_prunning = TypeOfMaxPlanPrunning::PAIRWISE);

        ~HyperplanValueFunction();

        void initialize();
        
        void initialize(double, number = 0);

        double getValueAt(const std::shared_ptr<State> &, number = 0);

        void updateValueAt(const std::shared_ptr<State> &, number = 0);

        void updateValueAt(const std::shared_ptr<State> &state,const std::shared_ptr<Action>& action, number t = 0);

        std::vector<std::shared_ptr<State>> getSupport(number);

        void prune(number = 0);

        
        size_t getSize(number t) const;

        std::string str() const;

        double getDefaultValue(number);

        Pair<std::shared_ptr<State>, double> evaluate(const std::shared_ptr<State> &state, number t);

        void do_pruning(number t);

    protected:
        using HyperplanSet = std::vector<std::shared_ptr<State>>;
        // using HyperplanSet = std::unordered_set<std::shared_ptr<State>, Hash, KeyEqual>;

        // std::vector<std::shared_ptr<VectorInterface<std::shared_ptr<State>,double>>> getAllVectorInterface(number t);

        std::vector<HyperplanSet> representation;
        std::vector<double> default_values_per_horizon;

        number freq_pruning_;

        number last_prunning = 0;

        TypeOfMaxPlanPrunning type_of_maxplan_prunning_;
        std::vector<std::unordered_set<std::shared_ptr<State>>> all_state_updated_so_far;

        void createDefault(const std::shared_ptr<State> &state, number t);

        bool exist(const std::shared_ptr<BeliefInterface>&,number t, double precision = PRECISION);

        void bounded_prune(number = 0);

        void pairwise_prune(number t);

        std::pair<double, std::shared_ptr<State>> getMaxAt(const std::shared_ptr<State> &, number);

    };

} // namespace sdm
````

