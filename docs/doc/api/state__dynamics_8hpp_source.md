
# File state\_dynamics.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state\_dynamics.hpp**](state__dynamics_8hpp.md)

[Go to the documentation of this file.](state__dynamics_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <unordered_set>

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/matrix.hpp>


namespace sdm
{

  class StateDynamics
  {
  protected:
    std::vector<Matrix> t_model;

    std::unordered_map<state, std::unordered_map<action, std::unordered_set<state>>> successor_states;

  public:
    StateDynamics();

    StateDynamics(number, number);

    void initDynamics(number, number);

    void setTransitionProbability(number, number, number, double, bool = false);

    double getTransitionProbability(number, number, number) const;

    const std::unordered_set<state> &getStateSuccessors(number, number);

    void setTransitions(const std::vector<Matrix> &);

    const Matrix &getTransitions(number);
  };
} // namespace sdm
````

