
# File space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**space.hpp**](space_8hpp.md)

[Go to the documentation of this file.](space_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <boost/bimap.hpp>
#include <sdm/types.hpp>

namespace sdm
{
  class Space
  {
  public:
    virtual ~Space() {}

    virtual bool isDiscrete() const = 0;

    bool isContinuous() const
    {
      return !(this->isDiscrete());
    }

    virtual std::vector<number> getDim() const = 0;

    virtual std::string str() const = 0;

    bool operator==(const Space &sp) const
    {
      if (this->str() == sp.str())
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    bool operator!=(const Space &sp) const
    {
      return !(this->operator==(sp));
    }
  };
} // namespace sdm
````

