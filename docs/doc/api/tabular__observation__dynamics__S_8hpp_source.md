
# File tabular\_observation\_dynamics\_S.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**dynamics**](dir_bf78c8d352c5567b2f707cd9e5690bcc.md) **>** [**tabular\_observation\_dynamics\_S.hpp**](tabular__observation__dynamics__S_8hpp.md)

[Go to the documentation of this file.](tabular__observation__dynamics__S_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <unordered_set>

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/mapped_matrix.hpp>
#include <sdm/core/dynamics/tabular_observation_dynamics.hpp>

namespace sdm
{

    class TabularObservationDynamicsS : public TabularObservationDynamics
    {
    public:
        TabularObservationDynamicsS();

        TabularObservationDynamicsS(const TabularObservationDynamicsS &copy);

        virtual ~TabularObservationDynamicsS();

        double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t = 0) const;

        const MappedVector<std::shared_ptr<Observation>> &getObservationProbabilities(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0) const;

        void setObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, double proba);

        void setObservationProbabilities(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const MappedVector<std::shared_ptr<Observation>> &observation_probas);

        void setObservationModel(const MappedMatrix<std::shared_ptr<State>, std::shared_ptr<Observation>> &o_model);

        std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0) const;

        void setReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t = 0);

        std::shared_ptr<Distribution<std::shared_ptr<Observation>>> getNextObservationDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0);

    protected:
        void updateNextObsDistribution(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, double proba);

        MappedMatrix<std::shared_ptr<State>, std::shared_ptr<Observation>> observation_model_;

        std::unordered_map<std::shared_ptr<State>, std::set<std::shared_ptr<Observation>>> successor_observations_;

        std::unordered_map<std::shared_ptr<State>, std::shared_ptr<DiscreteDistribution<std::shared_ptr<Observation>>>> next_observations_distrib_;
    };
} // namespace sdm
````

