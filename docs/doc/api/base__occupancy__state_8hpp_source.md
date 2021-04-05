
# File base\_occupancy\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**base\_occupancy\_state.hpp**](base__occupancy__state_8hpp.md)

[Go to the documentation of this file.](base__occupancy__state_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>

namespace sdm
{
  template <typename TSupport>
  class MappedDisreteDistrib : public MappedVector<TSupport, double>
  {
  public:
    MappedDisreteDistrib();
    TSupport sample();
  };
} // namespace sdm
// #include <sdm/core/mapped_distrib.tpp>
````

