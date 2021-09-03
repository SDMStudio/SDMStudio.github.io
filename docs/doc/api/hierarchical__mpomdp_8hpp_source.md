
# File hierarchical\_mpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**hierarchical\_mpomdp.hpp**](hierarchical__mpomdp_8hpp.md)

[Go to the documentation of this file.](hierarchical__mpomdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>

#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/world/transformed_mpomdp.hpp>

namespace sdm
{
    class HierarchicalMPOMDP : public TransformedMPOMDP
    {
    public:
        HierarchicalMPOMDP(const std::shared_ptr<MPOMDPInterface> &mpomdp);

        std::shared_ptr<Space> getObservationSpace(number t) const;

        std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const;

        std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const;

        double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const;

        // virtual std::shared_ptr<Space> getSubordinateActionSpace(number agent_id) const = 0;

        std::shared_ptr<Observation> getClassicObservation(const std::shared_ptr<Observation> &hierarchical_joint_observation) const;
        std::shared_ptr<Observation> getHierarchicalObservation(const std::shared_ptr<Observation> &classic_joint_observation) const;

        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action, bool increment_timestep);

    protected:
        std::shared_ptr<DiscreteSpace> joint_observation_space_;

        Joint<std::shared_ptr<DiscreteSpace>> indiv_observation_spaces_;

        using obs_bimap = boost::bimaps::bimap<std::shared_ptr<Observation>, std::shared_ptr<Observation>>;
        using obs_bimap_value = obs_bimap::value_type;

        obs_bimap bimap_classic_to_hierarchical_obs;

        void setupObservationSpace();
    };

} // namespace sdm
````

