
# File history.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**history.hpp**](history_8hpp.md)

[Go to the documentation of this file.](history_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <sdm/core/state/state.hpp>
#include <sdm/core/state/history_tree.hpp>
#include <sdm/core/state/jhistory_tree.hpp>

namespace sdm
{
    template <typename T>
    using History = std::vector<T>;

    using int_history = History<int>;
    using char_history = History<char>;
    // using tensor_history = History<Tensor>;

    template <typename T>
    using HistoryTree_p = std::shared_ptr<HistoryTree<T>>;

    template <typename T>
    using JointHistoryTree_p = std::shared_ptr<JointHistoryTree<T>>;

    template <typename obs_t>
    using ObsHistoryTree_p = HistoryTree_p<obs_t>;

    template <typename action_t, typename obs_t>
    using ActObsHistoryTree_p = HistoryTree_p<std::pair<action_t, obs_t>>;

    // using tensor_jhistory_tree = JointHistoryTree<Tensor>;
    

} // namespace sdm
````

