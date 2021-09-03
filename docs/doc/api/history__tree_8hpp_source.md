
# File history\_tree.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**history\_tree.hpp**](history__tree_8hpp.md)

[Go to the documentation of this file.](history__tree_8hpp.md) 


````cpp

#pragma once

#include <sdm/core/state/state.hpp>
#include <sdm/utils/struct/tree.hpp>
#include <sdm/core/state/interface/history_interface.hpp>

namespace sdm
{

    class HistoryTree : virtual public HistoryInterface, public Tree<std::shared_ptr<Observation>>
    {
    protected:
        template <typename output>
        std::shared_ptr<output> truncatedExpand(const std::shared_ptr<Observation> &observation, bool backup)
        {
            std::list<std::shared_ptr<Observation>> items;

            //<! fill in the vector of observation to simulate
            items.push_front(observation);
            auto parent = this->getptr();
            while (items.size() < this->getMaxDepth())
            {
                items.push_front(parent->getData());
                parent = parent->getParent();
            }

            //<! iteratively expands the base_graph
            auto trace = parent->getOrigin();

            for (auto it = items.begin(); it != items.end(); ++it)
            {
                trace = std::dynamic_pointer_cast<output>(trace->expand(*it, backup));
            }

            return std::dynamic_pointer_cast<output>(trace);
        }

    public:
        using value_type = typename Tree<std::shared_ptr<Observation>>::value_type;
        
        HistoryTree();

        HistoryTree(number max_depth);

        HistoryTree(std::shared_ptr<HistoryTree> parent, const std::shared_ptr<Observation> &item);

        std::shared_ptr<HistoryInterface> getPreviousHistory();

        std::shared_ptr<Observation> getLastObservation();

        number getHorizon() const;

        template <typename output = HistoryTree>
        std::shared_ptr<output> expand(const std::shared_ptr<Observation> &observation, bool backup = true)
        {
            if (backup && (this->children_.find(observation) != this->children_.end()))
            {
                return std::dynamic_pointer_cast<output>(this->getChild(observation));
            }
            if (backup && (this->getDepth() >= this->getMaxDepth()))
            {
                return this->truncatedExpand<output>(observation, backup);
            }
            if (backup)
            {
                this->children_.emplace(observation, std::make_shared<output>(this->getptr(), observation));

                return std::dynamic_pointer_cast<output>(this->getChild(observation));
            }
            return std::make_shared<output>(this->getptr(), observation);
        }
        std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Observation> &observation, bool backup = true);

        std::string str() const;
        std::string short_str() const;

        std::shared_ptr<Item> getPointer();
        std::shared_ptr<HistoryTree> getptr();

        std::shared_ptr<HistoryTree> getParent() const;
        std::shared_ptr<HistoryTree> getOrigin();
        std::vector<std::shared_ptr<HistoryTree>> getChildren() const;
        std::shared_ptr<HistoryTree> getChild(const std::shared_ptr<Observation> &child_item) const;

        const std::shared_ptr<Observation> &getData() const;


        friend std::ostream &operator<<(std::ostream &os, HistoryTree &i_hist)
        {
            os << i_hist.str();
            return os;
        }

        template <class Archive>
        void serialize(Archive &archive, const unsigned int);
    };

} // namespace sdm
// #include <sdm/core/state/history_tree.tpp>
````

