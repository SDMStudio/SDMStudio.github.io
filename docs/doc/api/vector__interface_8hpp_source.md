
# File vector\_interface.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**vector\_interface.hpp**](vector__interface_8hpp.md)

[Go to the documentation of this file.](vector__interface_8hpp.md) 


````cpp

#pragma once

#include <cstdlib>
#include <sstream>

namespace sdm
{
  template <typename I, typename T>
  class VectorInterface
  {
  public:
    virtual T at(const I &index) const = 0;
    virtual T getValueAt(const I &index) const = 0;
    virtual void setValueAt(const I &index, const T &value) = 0;
    virtual void addValueAt(const I &index, const T &value) = 0;

    virtual T min() = 0;
    virtual I argmin() = 0;

    virtual T max() = 0;
    virtual I argmax() = 0;

    // virtual T sum() const = 0;
    // virtual T norm_1() const = 0;
    // virtual T norm_2() const = 0;

    virtual std::string str() const = 0;

    // bool operator<=(const VectorInterface &) const;
    // bool operator==(const VectorInterface &) const;
    // bool operator!=(const VectorInterface &) const;
    // bool is_equal(const VectorInterface &other, double precision) const;

    // T dot(const VectorInterface &other) const;
    // T operator^(const VectorInterface &other) const;

    virtual size_t size() const = 0;
    virtual std::vector<I> getIndexes() const = 0;


    // T operator[](const I &) const;

    // virtual T operator^(const VectorInterface &) const = 0;
    // virtual T dot(const VectorInterface &) const = 0;
  };

} // namespace sdm
````

