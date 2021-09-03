
# File reward\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**reward**](dir_59c5b62e8a8eb2a182fe05633902ea55.md) **>** [**reward\_interface.hpp**](reward__interface_8hpp.md)

[Go to the documentation of this file.](reward__interface_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>

namespace sdm
{
  class RewardInterface
  {
  public:
    virtual double getMinReward(number t) const = 0;
    virtual double getMaxReward(number t) const = 0;
    virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const = 0;
  };


  // class BaseMultiReward
  // {
  // public:
  //   virtual double getMinReward(number t, number agent_id) const = 0;
  //   virtual double getMaxReward(number t, number agent_id) const = 0;
  //   virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t, number agent_id) const = 0;
  // };
}
````

