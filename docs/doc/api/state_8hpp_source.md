
# File state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**state.hpp**](state_8hpp.md)

[Go to the documentation of this file.](state_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/item.hpp>
#include <sdm/utils/struct/pair.hpp>
#include <sdm/core/observation/observation.hpp>

namespace sdm
{
    class BeliefInterface;
    class OccupancyStateInterface;
    class HistoryInterface;
    class JointHistoryInterface;
    class BaseSerialInterface;
    class SerialOccupancyInterface;

    class State : public Observation
    {
    public:
        virtual ~State() {}

        virtual std::shared_ptr<BeliefInterface> toBelief();

        virtual std::shared_ptr<OccupancyStateInterface> toOccupancyState();

        virtual std::shared_ptr<HistoryInterface> toHistory();

        virtual std::shared_ptr<BaseSerialInterface> toSerial();

        virtual std::shared_ptr<SerialOccupancyInterface> toSerialOccupancyState();

        virtual size_t hash() const;

        virtual bool operator==(const std::shared_ptr<State> &other) const;

        virtual std::string str() const = 0;

        virtual TypeState getTypeState() const;
    };

    template <typename TItem_1, typename TItem_2, class SuperClass = Item>
    class ItemPair : public SuperClass, public Pair<TItem_1, TItem_2>
    {
    public:
        ItemPair(const TItem_1 &first_item, const TItem_2 &second_item) : Pair<TItem_1, TItem_2>(first_item, second_item) {}
        ItemPair(const Pair<TItem_1, TItem_2> &copy) : Pair<TItem_1, TItem_2>(copy) {}

        std::string str() const
        {
            std::ostringstream res;
            res << "{" << this->first->str() << "," << this->second->str() << "}";
            return res.str();
        }
    };

    template <typename TState_1, typename TState_2>
    using StatePair = ItemPair<TState_1, TState_2, State>;

    template <typename TAction_1, typename TAction_2>
    using ActionPair = ItemPair<TAction_1, TAction_2, Action>;

    using JointHistoryStatePair = StatePair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<State>>;
    using JointHistoryBeliefPair = StatePair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<BeliefInterface>>;

    using JointHistoryJointActionPair = StatePair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<Action>>;

    using PrivateHierarchicalOccupancyStateJointHistoryPair = StatePair<std::shared_ptr<OccupancyStateInterface>, std::shared_ptr<JointHistoryInterface>>;

    // using PrivateHierarchicalOccupancyStateJointHistoryJointActionPair = StatePair<std::shared_ptr<PrivateHierarchicalOccupancyStateJointHistoryPair>, std::shared_ptr<Action>>;

    // template <typename TItem, typename SuperClass = Item>
    // class JointItem : public SuperClass, public Joint<TItem>
    // {

    // };

    // template <typename TState>
    // using JointState = ItemPair<TState, State>;

    // template <typename TAction>
    // using JointAction = ItemPair<TAction, Action>;

    // template <typename TObservation>
    // using JointObservation = ItemPair<TObservation, Observation>;

} // namespace sdm
````

