
# File transformed\_mpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**transformed\_mpomdp.hpp**](transformed__mpomdp_8hpp.md)

[Go to the documentation of this file.](transformed__mpomdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>

#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/world/base/mpomdp_interface.hpp>

namespace sdm
{
    class TransformedMPOMDP : public MPOMDPInterface
    {
    public:
        TransformedMPOMDP(const std::shared_ptr<MPOMDPInterface> &mpomdp);

        virtual ~TransformedMPOMDP() {}

        number getNumAgents() const;

        number getHorizon() const;

        double getDiscount(number t) const;

        std::shared_ptr<Distribution<std::shared_ptr<State>>> getStartDistribution() const;

        std::shared_ptr<Space> getStateSpace(number t) const;

        double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const;

        double getMinReward(number t) const;
        double getMaxReward(number t) const;

        double getTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const;

        std::set<std::shared_ptr<State>> getReachableStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const;

        std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const;

        double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const;

        double getDynamics(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, const std::shared_ptr<Observation> &observation, number t) const;

        std::shared_ptr<Space> getActionSpace(number agent_id, number t) const;

        std::shared_ptr<Space> getActionSpace(number t) const;

        std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<Observation> &observation, number t);

        std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const;

        std::shared_ptr<Space> getObservationSpace(number t) const;

        void setInternalState(std::shared_ptr<State> state);
        
        std::shared_ptr<State> getInternalState() const;

        std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &observation, number t);

        std::shared_ptr<Observation> reset();

        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);
        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action, bool increment_timestep);

    protected:
        std::shared_ptr<MPOMDPInterface> mpomdp_;
    };

} // namespace sdm
````

