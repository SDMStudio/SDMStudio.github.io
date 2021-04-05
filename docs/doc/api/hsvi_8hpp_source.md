
# File hsvi.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**hsvi.hpp**](hsvi_8hpp.md)

[Go to the documentation of this file.](hsvi_8hpp.md) 


````cpp

#pragma once

#include <string>

#include <sdm/types.hpp>
#include <sdm/public/algorithm.hpp>

#include <sdm/core/state/state.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/logging/logger.hpp>

namespace sdm
{

  template <typename TState, typename TAction>
  class HSVI : public Algorithm
  {
  protected:
    std::shared_ptr<SolvableByHSVI<TState, TAction>> world_;

    std::shared_ptr<ValueFunction<TState, TAction>> lower_bound_;

    std::shared_ptr<ValueFunction<TState, TAction>> upper_bound_;

    std::shared_ptr<MultiLogger> logger_;

    int trial, MAX_TRIALS;
    double error_;
    number planning_horizon_;
    std::string name_ = "hsvi";

    void initLogger();

  public:

    HSVI(std::shared_ptr<SolvableByHSVI<TState, TAction>> &world,
         std::shared_ptr<ValueFunction<TState, TAction>> lower_bound,
         std::shared_ptr<ValueFunction<TState, TAction>> upper_bound,
         number planning_horizon,
         double epsilon,
         number num_max_trials = 10000,
         std::string name = "hsvi");

    void do_initialize();

    void do_solve();

    void do_test();

    double do_excess(const TState &s, number h);

    bool do_stop(const TState &s, number h);

    void do_explore(const TState &s, number h);

    TAction selectNextAction(const TState &s, number h);

    TState selectNextState(const TState &s, const TAction &a, number h);

    std::shared_ptr<ValueFunction<TState, TAction>> getLowerBound() const;

    std::shared_ptr<ValueFunction<TState, TAction>> getUpperBound() const;

    int getTrial() const;
  };
} // namespace sdm
#include <sdm/algorithms/hsvi.tpp>
````

