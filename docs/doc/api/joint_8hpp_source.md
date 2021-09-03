
# File joint.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**joint.hpp**](joint_8hpp.md)

[Go to the documentation of this file.](joint_8hpp.md) 


````cpp
#pragma once

#include <vector>

#include <sdm/types.hpp>
#include <sdm/tools.hpp>
#include <sdm/core/function.hpp>
#include <sdm/core/item.hpp>
#include <sdm/utils/struct/vector.hpp>

namespace sdm
{
  template <class T>
  class Joint : public std::vector<T>, public Function<number, T>
  {
  public:
    using value_type = T;

    Joint();
    Joint(const std::vector<T> &joint_item);
    Joint(const std::vector<number> &, const std::vector<T> &joint_item);
    Joint(std::initializer_list<T> list_values);
    virtual ~Joint();

    number getNumAgents() const;

    const T &get(const number &) const;

    T operator()(const number &);

    template <typename TOutput>
    std::shared_ptr<Joint<std::shared_ptr<TOutput>>> toJoint(); 
    
    std::string str() const;

    friend std::ostream &operator<<(std::ostream &os, const Joint<T> &joint_item)
    {
      os << joint_item.str();
      return os;
    }

    friend class boost::serialization::access;

    template <class Archive>
    void serialize(Archive &archive, const unsigned int)
    {
      archive &boost::serialization::base_object<std::vector<T>>(*this);
    }
  };

} // namespace sdm
#include <sdm/core/joint.tpp>
````

