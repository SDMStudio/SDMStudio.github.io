
# File mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**mdp.hpp**](mdp_8hpp.md)

[Go to the documentation of this file.](mdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/distribution.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/core/reward/reward_interface.hpp>
#include <sdm/core/dynamics/state_dynamics_interface.hpp>
#include <sdm/world/base/mdp_interface.hpp>
#include <sdm/world/gym_interface.hpp>


namespace sdm
{
    class MDP : virtual public MDPInterface,
                virtual public GymInterface
    {
    public:
        MDP();
        MDP(const std::shared_ptr<Space> &state_space,
            const std::shared_ptr<Space> &action_space,
            const std::shared_ptr<RewardInterface> &reward_space,
            const std::shared_ptr<StateDynamicsInterface> &state_dynamics,
            const std::shared_ptr<Distribution<std::shared_ptr<State>>> &start_distribution,
            number horizon = 0,
            double discount = 0.99,
            Criterion criterion = Criterion::REW_MAX);

        virtual ~MDP();

        number getNumAgents() const;

        double getDiscount(number t = 0) const;

        void setDiscount(double discount);

        number getHorizon() const;

        void setHorizon(number horizon);

        std::shared_ptr<Distribution<std::shared_ptr<State>>> getStartDistribution() const;

        std::shared_ptr<Space> getStateSpace(number t = 0) const;

        std::shared_ptr<Space> getActionSpace(number t = 0) const;

        virtual double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

        virtual std::shared_ptr<RewardInterface> getRewardSpace() const;

        virtual double getMinReward(number t = 0) const;

        virtual double getMaxReward(number t = 0) const;

        virtual double getTransitionProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t = 0) const;

        std::shared_ptr<Space> getActionSpaceAt(const std::shared_ptr<Observation> &observation, number t);

        std::shared_ptr<Action> getRandomAction(const std::shared_ptr<Observation> &observation, number t);

        std::shared_ptr<Observation> reset();

        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action);

        std::tuple<std::shared_ptr<Observation>, std::vector<double>, bool> step(std::shared_ptr<Action> action, bool increment_timestep);

        void setInternalState(std::shared_ptr<State>);

        std::shared_ptr<State> getInternalState() const;

        virtual std::shared_ptr<Observation> sampleNextObservation(const std::shared_ptr<State>& state, const std::shared_ptr<Action>& action, number t);

        virtual std::set<std::shared_ptr<State>> getReachableStates(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0) const;

        virtual std::shared_ptr<StateDynamicsInterface> getStateDynamics() const;


        virtual std::string toStdFormat();

        virtual std::string toXML();

        virtual std::string toJSON();

        void generateFile(std::string);

        friend std::ostream &operator<<(std::ostream &os, MDP &model)
        {
            os << model.toStdFormat();
            return os;
        }

    protected:
        number num_agents_, horizon_;

        int current_timestep_;

        std::shared_ptr<State> internal_state_;

        double discount_;

        Criterion criterion_;

        std::shared_ptr<Space> state_space_;

        std::shared_ptr<Space> action_space_;

        std::shared_ptr<RewardInterface> reward_space_;

        std::shared_ptr<StateDynamicsInterface> state_dynamics_;

        std::shared_ptr<Distribution<std::shared_ptr<State>>> start_distribution_;
    };

} // namespace sdm
````

