
# File joint.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**joint.hpp**](joint_8hpp.md)

[Go to the documentation of this file.](joint_8hpp.md) 


````cpp
/*=============================================================================
Copyright (c) 2016 Jilles Steeve Dibangoye, Olivier Buffet, Charles Bessonet
==============================================================================*/
#pragma once

#include <vector>

#include <sdm/types.hpp>
#include <sdm/tools.hpp>
#include <sdm/core/function.hpp>


namespace sdm
{
  template <typename item>
  class Joint : public std::vector<item>, public Function<number, item>
  {
  protected:
    number num_agents_;

  public:
    Joint() : std::vector<item>() {}
    Joint(const std::vector<item> &joint_item) : std::vector<item>(joint_item), num_agents_(joint_item.size()) {}
    Joint(const std::vector<number> &num_agents, const std::vector<item> &joint_item) : std::vector<item>(joint_item), num_agents_(joint_item.size()) {}

    number getNumAgents() const
    {
      return this->size();
    }

    friend std::ostream &operator<<(std::ostream &os, const Joint<item> &j)
    {
      os << "(";
      if (j.size() > 0)
      {
        number ag;
        for (ag = 0; ag < j.size() - 1; ++ag)
        {
          std::ostringstream res;
          res << j[ag] << ", ";
          sdm::tools::indentedOutput(os, res.str().c_str());
          // os << j[ag] << ", ";
        }
        os << j[ag];
      }
      os << ")";
      return os;
    }

    item operator()(const number &i)
    {
      return (*this)[i];
    }
  };

  template class Joint<number>;

  typedef Joint<number> JointItem;
} // namespace sdm
````

