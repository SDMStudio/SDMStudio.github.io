
# File abstract\_vector.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**abstract\_vector.hpp**](abstract__vector_8hpp.md)

[Go to the documentation of this file.](abstract__vector_8hpp.md) 


````cpp

#pragma once

#include <cstdlib>
#include <sstream>

namespace sdm
{
  template <typename I, typename T>
  class AbstractVector
  {
  public:
    virtual T norm_1() const = 0;
    virtual T norm_2() const = 0;

    virtual T min() const = 0;
    virtual I argmin() const = 0;

    virtual T max() const = 0;
    virtual I argmax() const = 0;
    virtual T at(I) = 0;

    virtual std::string str() const = 0;

    // T operator[](const I &) const;

    // virtual T operator^(const VectorImpl &) const = 0;
    // virtual T dot(const VectorImpl &) const = 0;
  };

} // namespace sdm
````

