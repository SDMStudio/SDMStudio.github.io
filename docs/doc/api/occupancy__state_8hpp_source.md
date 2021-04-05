
# File occupancy\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**occupancy\_state.hpp**](occupancy__state_8hpp.md)

[Go to the documentation of this file.](occupancy__state_8hpp.md) 


````cpp

#pragma once

#include <string>

#include <sdm/types.hpp>
#include <sdm/utils/struct/pair.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/state/history.hpp>

namespace sdm
{

  template <typename TState = number, typename TJointHistory_p = JointHistoryTree_p<number>>
  class OccupancyState : public MappedVector<Pair<TState, TJointHistory_p>, double>
  {
  public:
    using jhistory_type = TJointHistory_p;
    using state_type = TState;

    OccupancyState();
    OccupancyState(double default_value);
    OccupancyState(std::size_t size, double default_value);
    OccupancyState(const OccupancyState &v);

    std::set<state_type> getStates() const;

    std::set<jhistory_type> getJointHistories() const;
    std::vector<std::set<typename jhistory_type::element_type::ihistory_type>> getAllIndividualHistories() const;
    std::set<typename jhistory_type::element_type::ihistory_type> getIndividualHistories(number ag_id) const;

    static TState getState(const Pair<TState, TJointHistory_p> &pair_state_hist);

    static TJointHistory_p getHistory(const Pair<TState, TJointHistory_p> &pair_state_hist);

    double getProbability(const Pair<TState, TJointHistory_p> &pair_state_hist);

  };
} // namespace sdm
#include <sdm/core/state/occupancy_state.tpp>

namespace std
{
    template <typename S, typename V>
    struct hash<sdm::OccupancyState<S, V>>
    {
        typedef sdm::OccupancyState<S, V> argument_type;
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

