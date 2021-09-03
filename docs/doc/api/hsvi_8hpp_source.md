
# File hsvi.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**hsvi.hpp**](hsvi_8hpp.md)

[Go to the documentation of this file.](hsvi_8hpp.md) 


````cpp

#pragma once
#define LOGTIME


#include <chrono>
#include <string>

#include <sdm/types.hpp>
#include <sdm/public/algorithm.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/utils/logging/logger.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/value_function/value_function.hpp>

namespace sdm
{

  class HSVI : public Algorithm,
               public std::enable_shared_from_this<HSVI>
  {
  protected:
    std::shared_ptr<SolvableByHSVI> world_;

    std::shared_ptr<ValueFunction> lower_bound_;

    std::shared_ptr<ValueFunction> upper_bound_;

    int trial, MAX_TRIALS;
    double error_, time_max_;
    number planning_horizon_, lb_update_frequency_, ub_update_frequency_;

    std::string name_ = "hsvi";
    
    bool keep_same_action_forward_backward_;

    std::shared_ptr<State> start_state;

    std::chrono::high_resolution_clock::time_point start_time, current_time;
    
    double duration;

  public:
    HSVI(std::shared_ptr<SolvableByHSVI> &world,
         std::shared_ptr<ValueFunction> lower_bound,
         std::shared_ptr<ValueFunction> upper_bound,
         number planning_horizon,
         double epsilon,
         number num_max_trials = 10000,
         std::string name = "hsvi",
         number lb_update_frequency = 1,
         number ub_update_frequency = 1,
         double time_max = 1000, 
         bool keep_same_action_forward_backward = false);

    std::shared_ptr<HSVI> getptr();

    void do_initialize();

    void do_solve();

    void do_test();

    void do_save();

    bool do_stop(const std::shared_ptr<State> &, double /*cost_so_far*/, number);

    void do_explore(const std::shared_ptr<State> &s, double /*cost_so_far*/, number h);

    double do_excess(const std::shared_ptr<State> &, double /*cost_so_far*/, number);

    std::shared_ptr<ValueFunction> getLowerBound() const;

    std::shared_ptr<ValueFunction> getUpperBound() const;

    int getTrial();

    double getResult();

    void saveResults(std::string filename, double other);

    static double TIME_TO_REMOVE;
#ifdef LOGTIME

    static double TIME_IN_SELECT_STATE, TIME_IN_SELECT_ACTION, TIME_INITIALIZATION, TIME_IN_UPDATE_LB, TIME_IN_UPDATE_UB, TIME_IN_PRUNING_LB, TIME_IN_PRUNING_UB, TIME_IN_DO_EXCESS;
    static double TIME_UPDATE_BACKUP_LB, TIME_BEST_ACTION_LB, TIME_EVALUATE_LB, TIME_GET_VALUE_AT_LB, TOTAL_TIME_LB;
    static double TIME_UPDATE_BACKUP_UB, TIME_BEST_ACTION_UB, TIME_EVALUATE_UB, TIME_GET_VALUE_AT_UB, TOTAL_TIME_UB;

    std::shared_ptr<MultiLogger> logger_, logger_precise_;

    void initLogger();

    static void cleanTIME();

    void updateTime(std::chrono::high_resolution_clock::time_point start_time, std::string information);
#endif

  };
} // namespace sdm
````

