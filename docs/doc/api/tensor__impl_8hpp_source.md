
# File tensor\_impl.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**tensor\_impl.hpp**](tensor__impl_8hpp.md)

[Go to the documentation of this file.](tensor__impl_8hpp.md) 


````cpp

#pragma once

#include <cstdlib>
#include <sstream>

namespace sdm
{
  template <typename... I>
  class TensorImpl
  {
  public:
    virtual std::string str() const = 0;
  };

} // namespace sdm
````

