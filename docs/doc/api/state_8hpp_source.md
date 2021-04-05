
# File state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**state.hpp**](state_8hpp.md)

[Go to the documentation of this file.](state_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/sdms_vector.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>
#include <sdm/utils/struct/tree.hpp>

namespace sdm
{
  using BeliefState = MappedVector<number, double>;
  // using OccupancyState = MappedVector<std::pair<BeliefState, JointHistoryTree<number>*>, double>;

} // namespace sdm
````

