
# File joint\_det\_decision\_rule.hpp

[**File List**](files.md) **>** [**action**](dir_da22f131ef310b227029eb4cfbb3e75b.md) **>** [**joint\_det\_decision\_rule.hpp**](joint__det__decision__rule_8hpp.md)

[Go to the documentation of this file.](joint__det__decision__rule_8hpp.md) 


````cpp

#pragma once

#include <sdm/core/function.hpp>
#include <sdm/core/action/det_decision_rule.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{
    class JointDeterministicDecisionRule
        : public Joint<std::shared_ptr<DeterministicDecisionRule>>,
          public DeterministicDecisionRule
    {
    public:
        using input_type = typename DeterministicDecisionRule::input_type;
        using output_type = typename DeterministicDecisionRule::output_type;

        JointDeterministicDecisionRule();
        JointDeterministicDecisionRule(const Joint<std::shared_ptr<DeterministicDecisionRule>> &individual_decision_rules);
        JointDeterministicDecisionRule(std::vector<std::vector<std::shared_ptr<Item>>> acc_states, std::vector<std::vector<std::shared_ptr<Item>>> actions);
        JointDeterministicDecisionRule(const std::vector<std::shared_ptr<Item>> &, const std::vector<std::shared_ptr<Item>> &list_indiv_dr);

        std::shared_ptr<Action> act(const std::shared_ptr<State> &joint_state) const;

        double getProbability(const Joint<std::shared_ptr<State>> &state, const Joint<std::shared_ptr<Action>> &action) const;

        double getProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action) const;

        double getProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const number &agent_id) const;

        void setProbability(const Joint<std::shared_ptr<State>> &state, const Joint<std::shared_ptr<Action>> &action, double proba = 0);

        void setProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, double proba = 1);

        std::string str() const;

        friend std::ostream &operator<<(std::ostream &os, const JointDeterministicDecisionRule &joint_dr)
        {
            os << joint_dr.str();
            return os;
        }
        
        bool elementExist(const std::shared_ptr<State>&);

    };

} // namespace sdm

namespace std
{
    template <>
    struct hash<sdm::JointDeterministicDecisionRule>
    {
        typedef sdm::JointDeterministicDecisionRule argument_type;
        typedef std::size_t result_type;
        inline result_type operator()(const argument_type &joint_det_decision_rule) const
        {
            size_t seed = 0;
            for (auto &indiv_decision_rule_ptr : joint_det_decision_rule)
            {
                //Combine the hash of the current vector with the hashes of the previous ones
                sdm::hash_combine(seed, *indiv_decision_rule_ptr);
            }
            return seed;
        }
    };
}
````

