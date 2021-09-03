
# File tabular\_state\_dynamics.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**dynamics**](dir_bf78c8d352c5567b2f707cd9e5690bcc.md) **>** [**tabular\_state\_dynamics.hpp**](tabular__state__dynamics_8hpp.md)

[Go to the documentation of this file.](tabular__state__dynamics_8hpp.md) 


````cpp

#pragma once

#include <unordered_set>

#include <sdm/types.hpp>
#include <sdm/core/dynamics/state_dynamics_interface.hpp>
#include <sdm/utils/linear_algebra/mapped_matrix.hpp>

namespace sdm
{
  class TabularStateDynamics : public StateDynamicsInterface
  {
  public:
    using value_type = double;
    using matrix_type = MappedMatrix<std::shared_ptr<State>, std::shared_ptr<State>, value_type>;

    TabularStateDynamics();

    TabularStateDynamics(const TabularStateDynamics &copy);

    virtual ~TabularStateDynamics();

    void setTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, double proba, number t = 0, bool cumul = false);

    double getTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0) const;

    std::set<std::shared_ptr<State>> getReachableStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

    void setReachablesStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0);

    std::shared_ptr<Distribution<std::shared_ptr<State>>> getNextStateDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

  protected:
    void updateNextStateDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, double proba);

    std::unordered_map<std::shared_ptr<Action>, matrix_type> t_model;

    std::unordered_map<std::shared_ptr<State>, std::unordered_map<std::shared_ptr<Action>, std::set<std::shared_ptr<State>>>> successor_states;

    std::unordered_map<std::shared_ptr<State>, std::unordered_map<std::shared_ptr<Action>, std::shared_ptr<DiscreteDistribution<std::shared_ptr<State>>>>> next_states_distrib;
  };

} // namespace sdm
````

