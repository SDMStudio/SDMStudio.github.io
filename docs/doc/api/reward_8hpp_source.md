
# File reward.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**reward.hpp**](reward_8hpp.md)

[Go to the documentation of this file.](reward_8hpp.md) 


````cpp

#pragma once

#include <vector>

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>

namespace sdm
{

  class Reward
  {
  protected:
    std::vector<Vector> rewards;

    double max = -999999, min = +999999;

  public:
    using value_type = double;

    Reward();

    Reward(number, number);

    Reward(Reward &copy);

    void initReward(number, number);

    double getReward(number, number) const;

    void setReward(number, number, double);

    const Vector &getReward(number) const;

    const std::vector<Vector> &getReward() const;

    void setReward(number, const Vector &);

    double getMaxReward() const;

    double getMinReward() const;

    friend std::ostream &operator<<(std::ostream &os, const Reward &reward_fct)
    {

      number ja;
      os << "<reward> " << std::endl;
      for (ja = 0; ja < reward_fct.rewards.size(); ++ja)
      {
        os << "\t" << reward_fct.getReward(ja) << "" << std::endl;
      }
      os << "</reward> " << std::endl;
      return os;
    }
  };

}
````

