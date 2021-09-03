
# File serialized\_mpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**serialized\_mpomdp.hpp**](serialized__mpomdp_8hpp.md)

[Go to the documentation of this file.](serialized__mpomdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>

#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>

#include <sdm/core/distribution.hpp>

#include <sdm/world/base/mpomdp_interface.hpp>
#include <sdm/world/serialized_mmdp.hpp>

#include <sdm/core/dynamics/tabular_observation_dynamics_SAS.hpp>

namespace sdm
{
    class SerializedMPOMDP : public SerialMPOMDPInterface, public SerializedMMDP
    {
    public:
        SerializedMPOMDP(std::shared_ptr<MPOMDPInterface> mpomdp);

        std::shared_ptr<Space> getObservationSpace(number t) const ;

        std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const ;

        std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action,const std::shared_ptr<State> &next_state, number t) const ;

        double getObservationProbability(const std::shared_ptr<State> &state,const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const;

        double getDynamics(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const;

        std::shared_ptr<Joint<std::shared_ptr<Observation>>> getDefaultObservation() const;

    protected:

        std::shared_ptr<Observation> empty_serial_observation;

        // std::unordered_map<std::shared_ptr<State>, std::unordered_map<std::shared_ptr<Action>, std::unordered_map<std::shared_ptr<State>, std::set<std::shared_ptr<Observation>>>>> reachable_obs_state_space;
        std::shared_ptr<ObservationDynamicsInterface> obs_dynamics_;

        Joint<std::shared_ptr<DiscreteSpace>> serialized_observation_space_;

        void setupObservationSpace(std::shared_ptr<MPOMDPInterface> mpomdp);

        void setReachableObservationSpace(std::shared_ptr<MPOMDPInterface> mpomdp);

        const std::shared_ptr<Observation> getPointeurObservation(Joint<std::shared_ptr<Observation>> &) const;

    };

} // namespace sdm
````

