
# File value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**value\_function.hpp**](value__function_8hpp.md)

[Go to the documentation of this file.](value__function_8hpp.md) 


````cpp
#pragma once
#define LOGTIME

#include <sdm/types.hpp>
#include <sdm/core/function.hpp>
#include <sdm/utils/value_function/base_value_function.hpp>
#include <sdm/utils/value_function/action_vf/action_vf_interface.hpp>
#include <sdm/utils/value_function/backup/backup_interface.hpp>

namespace sdm
{
    class Initializer;

    class ValueFunction
        : public ValueFunctionBase,
          public BinaryFunction<std::shared_ptr<State>, number, double>

    {
    public:
        ValueFunction() {}

        ValueFunction(number horizon = 0, const std::shared_ptr<Initializer> &intializer = nullptr, const std::shared_ptr<BackupInterfaceForValueFunction> &backup = nullptr, const std::shared_ptr<ActionVFInterface> &action = nullptr);
        ValueFunction(const ValueFunction& copy);

        virtual ~ValueFunction() {}

        virtual void initialize() = 0;

        virtual void initialize(double v, number t = 0) = 0;

        void initialize(const std::shared_ptr<BinaryFunction<std::shared_ptr<State>, number, double>> &init_function);

        virtual double getValueAt(const std::shared_ptr<State> &state, number t = 0) = 0;

        virtual void updateValueAt(const std::shared_ptr<State> &state, number t = 0) = 0;
        
        virtual void updateValueAt(const std::shared_ptr<State> &state,const std::shared_ptr<Action>& action, number t = 0) = 0;

        virtual std::vector<std::shared_ptr<State>> getSupport(number t) = 0;

        virtual std::string str() const = 0;

        virtual size_t getSize(number t) const = 0;

        size_t getSize() const;

        std::shared_ptr<ValueFunction> getptr();

        double operator()(const std::shared_ptr<State> &state, const number &t = 0);

        std::shared_ptr<BinaryFunction<std::shared_ptr<State>, number, double>> getInitFunction();

        virtual Pair<std::shared_ptr<State>, double> evaluate(const std::shared_ptr<State> &state, number t) = 0;

        template <typename TData>
        TData backup(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t)
        {
#ifdef LOGTIME
            std::chrono::high_resolution_clock::time_point time_start =  std::chrono::high_resolution_clock::now();
#endif

            auto backup = std::static_pointer_cast<BackupInterface<TData>>(this->backup_)->backup(this->getptr(),state,action,t);

#ifdef LOGTIME 
            this->updateTime(time_start,"backup");
#endif

            return backup;
        }

        std::shared_ptr<Action> getBestAction(const std::shared_ptr<State> &state, number t);

        Pair<std::shared_ptr<Action>, double> getBestActionAndValue(const std::shared_ptr<State> &state, number t);


#ifdef LOGTIME
        double total_time_update_backup =0;
        double total_time_update_best_action =0;
        double total_time_evaluate =0;
        double total_time_exist =0;
        double time_get_value_at = 0;
        double time_update_value =0;
        double time_pruning =0;


        void StartTime();
        void updateTime(std::chrono::high_resolution_clock::time_point start_time,std::string information);
        double getTime(std::string information);
#endif

        virtual void do_pruning(number t) =0;

        std::shared_ptr<BackupInterfaceForValueFunction> backup_;
    protected:
        std::shared_ptr<BinaryFunction<std::shared_ptr<State>, number, double>> init_function_ = nullptr;

        // std::shared_ptr<EvaluateVFInterface> evaluate_;

        std::shared_ptr<ActionVFInterface> action_;

        std::shared_ptr<Initializer> initializer_;
    };
} // namespace sdm
````

