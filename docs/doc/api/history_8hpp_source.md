
# File history.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**history.hpp**](history_8hpp.md)

[Go to the documentation of this file.](history_8hpp.md) 


````cpp

#pragma once

#include <sdm/core/state/interface/history_interface.hpp>

namespace sdm
{
    // class History : public HistoryInterface
    // {
    // public:
    //     History(const History &copy);
    //     History(const std::vector<std::shared_ptr<Item>> &history = {});

    //     std::shared_ptr<HistoryInterface> next(const std::shared_ptr<Item> &item, bool backup = false);
    //     std::shared_ptr<HistoryInterface> getPreviousHistory();

    //     std::shared_ptr<Item> get(number t) const;
    //     number getHorizon() const;

    //     std::string str() const;

    //     TypeState getTypeState() const;

    // protected:
    //     std::vector<std::shared_ptr<Item>> history_;
    // };

    // class History : public History
    // {
    // public:
    //     History(const std::vector<std::shared_ptr<Observation>> &);
    //     History(const History &copy);

    //     std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Observation> &observation, const std::shared_ptr<Action> &action = nullptr, bool backup = true);

    //     std::shared_ptr<HistoryInterface> getPreviousHistory();

    //     std::shared_ptr<Action> getLastAction();
    //     std::shared_ptr<Observation> getLastObservation();

    //     std::shared_ptr<Action> getActionAt(number t);
    //     std::shared_ptr<Observation> getObservationAt(number t);

    //     std::string str() const;

    //     TypeState getTypeState() const;

    // protected:
    //     std::vector<std::shared_ptr<Observation>> history_;
    // };

} // namespace sdm
````

