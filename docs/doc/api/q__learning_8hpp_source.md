
# File q\_learning.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**q\_learning.hpp**](q__learning_8hpp.md)

[Go to the documentation of this file.](q__learning_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/world/gym_interface.hpp>

namespace sdm
{
  template <typename TState, typename TAction, typename TObservation>
  class QLearning : public LearningAlgo<TState, TAction, TObservation>
  {
  protected:
    std::shared_ptr<QValueFunction<TState, TAction>> q_value_, q_target_;

  public:
    QLearning(number trials, std::string results);

    QLearning(std::shared_ptr<GymInterface> &env,
              std::shared_ptr<QValueFunction<TState, TAction>> value,
              std::shared_ptr<QValueFunction<TState, TAction>> target,
              number planning_horizon,
              double epsilon,
              number num_max_trials = 10000);
  };
} // namespace sdm
#include <sdm/algorithms/q_learning.tpp>
````

