
# File belief\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**belief\_state.hpp**](belief__state_8hpp.md)

[Go to the documentation of this file.](belief__state_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>

namespace sdm
{
  template <typename TState>
  class BaseBeliefState : public MappedVector<TState, double>
  {
  public:
    using state_type = number;

    BaseBeliefState();
    BaseBeliefState(double default_value);
    BaseBeliefState(std::size_t size, double default_value);
    BaseBeliefState(const BaseBeliefState &v);

    static TState getState(const TState &state);
  };

  using BeliefState = BaseBeliefState<number>;
} // namespace sdm

#include <sdm/core/state/belief_state.tpp>

namespace std
{
    template <typename TState>
    struct hash<sdm::BaseBeliefState<TState>>
    {
        typedef sdm::BaseBeliefState<TState> argument_type;
        typedef std::size_t result_type;
        inline result_type operator()(const argument_type &in) const
        {
            size_t seed = 0;
            for (auto &v : in)
            {
                //Combine the hash of the current vector with the hashes of the previous ones
                sdm::hash_combine(seed, v);
            }
            return seed;
        }
    };
}
````

