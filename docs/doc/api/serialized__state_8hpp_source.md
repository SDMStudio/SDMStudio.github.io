
# File serialized\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**serialized\_state.hpp**](serialized__state_8hpp.md)

[Go to the documentation of this file.](serialized__state_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/utils/struct/vector.hpp>
#include <sdm/utils/struct/pair.hpp>

namespace sdm
{
  class SerializedState : public Pair<number, std::vector<number>>
  {
  public:
    using state_type = number;
    using action_type = number;

    SerializedState();
    SerializedState(number state);
    SerializedState(number state, std::vector<number> actions);
    SerializedState(const SerializedState &v);

    number getState() const;
    std::vector<number> getAction() const;
    number getCurrentAgentId() const;
  };

} // namespace sdm

namespace std
{
  template<>
  struct hash<sdm::SerializedState>
  {
    typedef sdm::SerializedState argument_type;
    typedef std::size_t result_type;
    inline result_type operator()(const argument_type &in) const
    {
      size_t seed = 0;
      //Combine the hash of the current vector with the hashes of the previous ones
      sdm::hash_combine(seed, in.first);
      sdm::hash_combine(seed, in.second);
      return seed;
    }
  };
}
````
