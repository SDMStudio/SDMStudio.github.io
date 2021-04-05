
# File serialized\_state.cpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**serialized\_state.cpp**](serialized__state_8cpp.md)

[Go to the documentation of this file.](serialized__state_8cpp.md) 


````cpp
#include <sdm/core/state/serialized_state.hpp>

namespace sdm
{

    SerializedState::SerializedState(): Pair<number, std::vector<number>>(0, {})
    {
    }

    SerializedState::SerializedState(number state) : Pair<number, std::vector<number>>(state, {})
    {
    }
    
    SerializedState::SerializedState(number state, std::vector<number> actions) : Pair<number, std::vector<number>>(state, actions)
    {
    }

    SerializedState::SerializedState(const SerializedState &copy) : SerializedState(copy.first, copy.second)
    {
    }

    number SerializedState::getState() const 
    {
        return this->first;
    }

    std::vector<number> SerializedState::getAction()const 
    {
        return this->second;
    }

    number SerializedState::getCurrentAgentId() const
    {
        return (this->second).size();
    }

} // namespace sdm
````

