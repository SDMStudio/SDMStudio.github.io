
# File pomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**pomdp.hpp**](pomdp_8hpp.md)

[Go to the documentation of this file.](pomdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/dynamics/observation_dynamics_interface.hpp>

#include <sdm/world/mdp.hpp>
#include <sdm/world/base/pomdp_interface.hpp>

namespace sdm
{
    class POMDP : virtual public MDP, virtual public POMDPInterface
    {
    public:
        POMDP();
        POMDP(const std::shared_ptr<Space> &state_space,
              const std::shared_ptr<Space> &action_space,
              const std::shared_ptr<Space> &obs_space,
              const std::shared_ptr<RewardInterface> &reward,
              const std::shared_ptr<StateDynamicsInterface> &state_dynamics,
              const std::shared_ptr<ObservationDynamicsInterface> &obs_dynamics,
              const std::shared_ptr<Distribution<std::shared_ptr<State>>> &start_distrib,
              number horizon = 0,
              double discount = 0.99,
              Criterion criterion = Criterion::REW_MAX);

        virtual std::shared_ptr<Space> getObservationSpace(number t = 0) const;

        virtual std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const;

        virtual double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t = 0) const;

        virtual double getDynamics(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t = 0) const;

        std::shared_ptr<ObservationDynamicsInterface> getObservationDynamics() const;

        std::shared_ptr<Observation> sampleNextObservation(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);

    protected:
        std::shared_ptr<Space> observation_space_;
        std::shared_ptr<ObservationDynamicsInterface> observation_dynamics_;
    };
} // namespace sdm
````

