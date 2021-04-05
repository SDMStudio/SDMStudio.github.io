
# File serialized\_belief\_state.cpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**serialized\_belief\_state.cpp**](serialized__belief__state_8cpp.md)

[Go to the documentation of this file.](serialized__belief__state_8cpp.md) 


````cpp
#include <sdm/core/state/serialized_belief_state.hpp>

namespace sdm
{

    SerializedBeliefState::SerializedBeliefState()
    {
    }

    SerializedBeliefState::SerializedBeliefState(double default_value) : BaseBeliefState<SerializedState>(default_value)
    {
    }

    SerializedBeliefState::SerializedBeliefState(std::size_t size, double default_value) : BaseBeliefState<SerializedState>(size, default_value)
    {
    }

    SerializedBeliefState::SerializedBeliefState(const SerializedBeliefState &v) : BaseBeliefState<SerializedState>(v)
    {
    }

} // namespace sdm
````

