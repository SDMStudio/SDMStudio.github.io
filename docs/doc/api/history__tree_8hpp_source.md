
# File history\_tree.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**history\_tree.hpp**](history__tree_8hpp.md)

[Go to the documentation of this file.](history__tree_8hpp.md) 


````cpp

#pragma once

#include <sdm/utils/struct/tree.hpp>

namespace sdm
{

    template <typename T>
    class HistoryTree : public Tree<T>
    {
    protected:
        template <typename output = HistoryTree<T>>
        std::shared_ptr<output> truncatedExpand(const T &data, bool backup);

    public:
        HistoryTree();

        HistoryTree(number max_depth);

        HistoryTree(std::shared_ptr<HistoryTree<T>> parent, const T &item);

        template <typename output = HistoryTree<T>>
        std::shared_ptr<output> expand(const T &data, bool backup = true);

        number getHorizon() const;
    };

} // namespace sdm
#include <sdm/core/state/history_tree.tpp>
````

