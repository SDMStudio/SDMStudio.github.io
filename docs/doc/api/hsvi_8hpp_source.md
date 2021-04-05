
# File hsvi.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**hsvi.hpp**](hsvi_8hpp.md)

[Go to the documentation of this file.](hsvi_8hpp.md) 


````cpp

#pragma once

#include <string>

#include <sdm/types.hpp>
#include <sdm/world/posg.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/core/state/state.hpp>

namespace sdm
{
  template <typename TState, typename TAction>
  class HSVI
  {
  protected:
    std::shared_ptr<ValueFunction<TState, TAction>> lower_bound_;

    std::shared_ptr<ValueFunction<TState, TAction>> upper_bound_;

    // std::shared_ptr<HeuristicSearch<TState, TAction>> search;

    std::shared_ptr<POSG> world_;

    int trial, MAX_TRIALS;
    double error_;
    number planning_horizon_;

    void initLogger();
    void updateValueFunction(TState s, number h);

  public:
    HSVI(number trials, std::string results);

    HSVI(std::shared_ptr<POSG> &world,
         std::shared_ptr<ValueFunction<TState, TAction>> lower_bound,
         std::shared_ptr<ValueFunction<TState, TAction>> upper_bound,
         number planning_horizon,
         double epsilon,
         number num_max_trials = 10000);

    void do_initialize();

    void do_solve();

    double do_excess(TState s, number h);

    bool do_stop(TState s, number h);

    void do_explore(TState s, number h);

    TAction selectNextAction(TState s, number h);

    TState selectNextState(TState s, TAction a, number d);

    TState getInitialState();
  };

  // using mdpHSVI = HSVI<number, number>;
  // using HSVI = HSVI<BeliefState, number>;
  // using oHSVI = HSVI<oState, DetDecisionRule>;
} // namespace sdm
````

