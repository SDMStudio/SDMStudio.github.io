
# File jhistory\_tree.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**jhistory\_tree.hpp**](jhistory__tree_8hpp.md)

[Go to the documentation of this file.](jhistory__tree_8hpp.md) 


````cpp

#pragma once

#include <sdm/core/state/history_tree.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{

    template <typename T>
    class JointHistoryTree : public HistoryTree<Joint<T>>
    {
    protected:
        Joint<std::shared_ptr<HistoryTree<T>>> indiv_hist;

        void addIndivHist(std::shared_ptr<HistoryTree<T>> ihist);
    public:
        JointHistoryTree();

        JointHistoryTree(number max_depth);

        JointHistoryTree(number n_agents, number max_depth);

        JointHistoryTree(std::shared_ptr<JointHistoryTree<T>> parent, const Joint<T> &item);

        std::shared_ptr<JointHistoryTree<T>> expand(const Joint<T> &data, bool backup = true);

        std::shared_ptr<HistoryTree<T>> getIndividualHistory(number ag_id);

        friend std::ostream &operator<<(std::ostream &os, const JointHistoryTree &j_hist)
        {
            os << static_cast<HistoryTree<Joint<T>>>(j_hist);
            return os;
        }
    };

} // namespace sdm
#include <sdm/core/state/jhistory_tree.tpp>
````

