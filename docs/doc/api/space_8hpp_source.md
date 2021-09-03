
# File space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**space.hpp**](space_8hpp.md)

[Go to the documentation of this file.](space_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <sdm/types.hpp>
#include <sdm/exception.hpp>
#include <sdm/core/item.hpp>
#include <sdm/utils/struct/iterator.hpp>


namespace sdm
{

  class DiscreteSpace;
  class MultiDiscreteSpace;

  class Space : public std::enable_shared_from_this<Space>
  {
  public:
    using iterator_type = std::shared_ptr<ItemIterator>;

    virtual ~Space() {}

    virtual bool isDiscrete() const = 0;

    bool isContinuous() const;

    virtual std::vector<number> getDim() const = 0;

    std::shared_ptr<DiscreteSpace> toDiscreteSpace();
    std::shared_ptr<MultiDiscreteSpace> toMultiDiscreteSpace();

    virtual std::shared_ptr<Item> sample() const { throw sdm::exception::Exception("Cannot sample Abstract space !!!"); }

    virtual iterator_type begin() = 0;
    virtual iterator_type end() = 0;

    virtual std::string str() const = 0;

    bool operator==(const Space &sp) const;
    bool operator!=(const Space &sp) const;

    friend std::ostream &
    operator<<(std::ostream &os, const Space &sp)
    {
      os << sp.str();
      return os;
    }
  };
} // namespace sdm
````

