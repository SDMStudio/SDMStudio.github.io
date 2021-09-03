
# File experience\_memory\_interface.hpp

[**File List**](files.md) **>** [**rl**](dir_1bc0c1e8b4bb5415537951e68df5cc3c.md) **>** [**experience\_memory\_interface.hpp**](experience__memory__interface_8hpp.md)

[Go to the documentation of this file.](experience__memory__interface_8hpp.md) 


````cpp
#pragma once

#include <tuple>

#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>

namespace sdm
{
  class ExperienceMemoryInterface
  {
    public:
      virtual ~ExperienceMemoryInterface(){}
      using sars_transition = std::tuple<std::shared_ptr<Observation>, std::shared_ptr<Action>, double, std::shared_ptr<Observation>, std::shared_ptr<Action>>;
      virtual void push(const std::shared_ptr<Observation>& observation, const std::shared_ptr<Action>& action, const double reward, const std::shared_ptr<Observation>& next_observation, const std::shared_ptr<Action>& next_action, number t) = 0;
      virtual std::vector<sars_transition> sample(number t, int n = 1) = 0;
      virtual int size() = 0;
  };
}
````

