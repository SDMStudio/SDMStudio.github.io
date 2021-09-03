
# File jhistory\_tree.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**jhistory\_tree.hpp**](jhistory__tree_8hpp.md)

[Go to the documentation of this file.](jhistory__tree_8hpp.md) 


````cpp

#pragma once

#include <sdm/core/state/history_tree.hpp>
#include <sdm/core/joint.hpp>
#include <sdm/types.hpp>
#include <sdm/core/observation/default_observation.hpp>
#include <sdm/core/state/interface/joint_history_interface.hpp>

namespace sdm
{

    class JointHistoryTree : public JointHistoryInterface,
                             public HistoryTree,
                             public Joint<std::shared_ptr<HistoryInterface>>,
                             public BoostSerializable<JointHistoryTree>

    {

    public:
        using ihistory_type = std::shared_ptr<HistoryTree>;
        using value_type = typename HistoryTree::value_type;

        JointHistoryTree();

        JointHistoryTree(number n_agents);

        JointHistoryTree(number n_agents, number max_depth);

        JointHistoryTree(std::shared_ptr<HistoryTree> parent, const std::shared_ptr<Observation> &item);

        JointHistoryTree(const Joint<std::shared_ptr<HistoryInterface>> &ihistories);

        std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Joint<std::shared_ptr<Observation>>> &joint_observation, bool backup = true);
        std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Observation> &joint_observation, bool backup = true);

        std::shared_ptr<HistoryInterface> getIndividualHistory(number agent_id) const;

        Joint<std::shared_ptr<HistoryInterface>> getIndividualHistories() const;

        std::string str() const;

        std::shared_ptr<JointHistoryTree> getptr();

        template <class Archive>
        void serialize(Archive &archive, const unsigned int);

        std::shared_ptr<Joint<std::shared_ptr<Observation>>> getDefaultObs();
        void setDefaultObs(const std::shared_ptr<Joint<std::shared_ptr<Observation>>> &default_observation);

        std::shared_ptr<JointHistoryTree> getParent() const;
        std::shared_ptr<JointHistoryTree> getOrigin();
        void isNotOrigin();
        std::vector<std::shared_ptr<JointHistoryTree>> getChildren() const;
        std::shared_ptr<JointHistoryTree> getChild(const std::shared_ptr<Observation> &child_item) const;

        friend std::ostream &operator<<(std::ostream &os, JointHistoryTree &j_hist)
        {
            os << j_hist.str();
            return os;
        }

    protected:
        void addIndividualHistory(std::shared_ptr<HistoryInterface> ihist);

        void setupDefaultObs(number num_agents, const std::shared_ptr<Observation> &default_observation = sdm::NO_OBSERVATION);
        std::shared_ptr<Joint<std::shared_ptr<Observation>>> default_observation_;
    };

} // namespace sdm
````

