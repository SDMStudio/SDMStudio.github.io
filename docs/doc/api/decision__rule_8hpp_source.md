
# File decision\_rule.hpp

[**File List**](files.md) **>** [**action**](dir_da22f131ef310b227029eb4cfbb3e75b.md) **>** [**decision\_rule.hpp**](decision__rule_8hpp.md)

[Go to the documentation of this file.](decision__rule_8hpp.md) 


````cpp

#pragma once

#include <map>

#include <sdm/tools.hpp>
#include <sdm/core/function.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>

namespace sdm
{
    class DecisionRule : public Action, public Function<std::shared_ptr<State>, std::shared_ptr<Action>>
    {
    public:
        virtual std::shared_ptr<Action> act(const std::shared_ptr<State> &state) const = 0;

        /***
         * @brief Apply the DecisionRule function (similar to `act`)
         * 
         * @param state the generic states
         * @return the corresponding action
         */
        std::shared_ptr<Action> operator()(const std::shared_ptr<State> &s) { return this->act(s); }

        virtual double getProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action) const = 0;

        virtual void setProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, double proba) = 0;

        virtual std::string str() const = 0;

        virtual TypeAction getTypeAction() const { return TypeAction::DECISION_RULE; }

        virtual bool elementExist(const std::shared_ptr<State>&)  =0;
    };

} // namespace sdm
````

