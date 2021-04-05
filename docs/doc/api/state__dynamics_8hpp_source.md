
# File state\_dynamics.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state\_dynamics.hpp**](state__dynamics_8hpp.md)

[Go to the documentation of this file.](state__dynamics_8hpp.md) 


````cpp

#pragma once

#include <unordered_set>

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/matrix.hpp>

namespace sdm
{
  class StateDynamics
  {
  public:
    StateDynamics();
    StateDynamics(StateDynamics &copy);

    StateDynamics(number num_actions, number num_states);

    void initDynamics(number num_actions, number num_states);

    void setTransitionProbability(number x, number u, number y, double p, bool cumul = false);

    double getTransitionProbability(number x, number u, number y) const;

    void setTransitions(const std::vector<Matrix> &t_model);

    std::vector<Matrix> getTransitions();

    const Matrix &getTransitions(number u);

    const std::unordered_set<state> &getStateSuccessors(number x, number u);

  protected:
    std::vector<Matrix> t_model;

    std::unordered_map<state, std::unordered_map<action, std::unordered_set<state>>> successor_states;
  };
} // namespace sdm
````

