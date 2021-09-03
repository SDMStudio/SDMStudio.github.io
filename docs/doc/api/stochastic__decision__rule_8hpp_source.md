
# File stochastic\_decision\_rule.hpp

[**File List**](files.md) **>** [**action**](dir_da22f131ef310b227029eb4cfbb3e75b.md) **>** [**stochastic\_decision\_rule.hpp**](stochastic__decision__rule_8hpp.md)

[Go to the documentation of this file.](stochastic__decision__rule_8hpp.md) 


````cpp

#pragma once

#include <map>

#include <sdm/core/action/decision_rule.hpp>
#include <sdm/utils/struct/recursive_map.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>
#include <sdm/tools.hpp>

namespace sdm
{

    class StochasticDecisionRule : public DecisionRule, public RecursiveMap<std::shared_ptr<State>, std::shared_ptr<Action>, double>
    {
    public:
        using input_type = typename DecisionRule::input_type;
        using output_type = typename DecisionRule::output_type;

        StochasticDecisionRule();

        std::shared_ptr<Action> act(const std::shared_ptr<State> &s) const;

        // /**
        //  * @brief Apply the DetDecisionRule function (similar to `act` or even `at`)
        //  * 
        //  * @param s the generic state
        //  * @return the corresponding action
        //  */
        // std::shared_ptr<Action> operator()(const std::shared_ptr<State> &s);

        RecursiveMap<std::shared_ptr<Action>, double> getProbabilities(const std::shared_ptr<State> &state) const;

        double getProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action) const;

        void setProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, double proba);

        std::string str() const;

        friend std::ostream &operator<<(std::ostream &os, const StochasticDecisionRule &stoch_decision_rule)
        {
            os << stoch_decision_rule.str();
            return os;        
        }

        bool elementExist(const std::shared_ptr<State>& joint_state);

    };

} // namespace sdm
````

