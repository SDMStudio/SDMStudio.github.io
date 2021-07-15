
# File det\_decision\_rule.hpp

[**File List**](files.md) **>** [**decision\_rules**](dir_4983fd2ecc8cc6698afce148812a6aba.md) **>** [**det\_decision\_rule.hpp**](det__decision__rule_8hpp.md)

[Go to the documentation of this file.](det__decision__rule_8hpp.md) 


````cpp

#pragma once

#include <map>

#include <sdm/core/function.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>
#include <sdm/tools.hpp>

namespace sdm
{

  template <typename TState, typename TAction>
  class DeterministicDecisionRule : public Function<TState, TAction>
  {
  protected:
  public:
    std::map<TState, TAction> container_;
    DeterministicDecisionRule() {}

    DeterministicDecisionRule(std::vector<TState> acc_states, std::vector<TAction> n_actions)
    {
      assert(acc_states.size() == n_actions.size());
      for (std::size_t i = 0; i < acc_states.size(); i++)
      {
        this->container_[acc_states[i]] = n_actions[i];
      }
    }

    TAction act(const TState &s) const
    {
      return this->container_.at(s);
    }

    TAction operator()(const TState &s) 
    {
      return this->container_.at(s);
    }

    bool operator<(const DeterministicDecisionRule &v2) const
    {
      return this->container_ < v2.container_;
    }


    bool operator==(const DeterministicDecisionRule &v2) const
    {
      return this->container_ == v2.container_;
    }

    friend std::ostream &operator<<(std::ostream &os, const DeterministicDecisionRule<TState, TAction> &dr)
    {
      os << "<decision-rule type=\"deterministic\">" << std::endl;
      for (auto v : dr.container_)
      {
        os << "\t<decision state=\"" << v.first << "\">" << std::endl;
        std::ostringstream res;
        res << "\t\t" << v.second << std::endl;
        sdm::tools::indentedOutput(os, res.str().c_str());
        // os << "\t\t" << v.second << std::endl;
        os << "\t<decision/>" << std::endl;
      }
      os << "<decision-rule/>" << std::endl;
      return os;
    }
  };

  template <typename TState, typename TAction>
  using DetDecisionRule = DeterministicDecisionRule<TState, TAction>;

} // namespace sdm

namespace std
{
  template <typename S, typename A>
  struct hash<sdm::DeterministicDecisionRule<S, A>>
  {
    typedef sdm::DeterministicDecisionRule<S, A> argument_type;
    typedef std::size_t result_type;
    inline result_type operator()(const argument_type &in) const
    {
      size_t seed = 0;
      for (auto &input : in.container_)
      {
        //Combine the hash of the current vector with the hashes of the previous ones
        sdm::hash_combine(seed, input);
      }
      return seed;
    }
  };
}
````
