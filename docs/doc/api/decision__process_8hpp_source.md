
# File decision\_process.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**decision\_process.hpp**](decision__process_8hpp.md)

[Go to the documentation of this file.](decision__process_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <tuple>

#include <sdm/types.hpp>
#include <sdm/exception.hpp>
#include <sdm/world/gym_interface.hpp>
#include <sdm/world/base/decision_process_base.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/space/multi_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/reward.hpp>

namespace sdm
{

    template <typename TStateSpace, typename TActionSpace, typename TObsSpace, typename TStateDynamics, typename TReward, typename TDistrib, bool is_fully_obs = true>
    class DecisionProcess : public DecisionProcessBase<TStateSpace, TActionSpace, TDistrib>,
                            public GymInterface<TObsSpace, TActionSpace>
    {
    public:
        using state_type = typename DecisionProcessBase<TStateSpace, TActionSpace, TDistrib>::state_type;
        using observation_type = typename GymInterface<TObsSpace, TActionSpace>::observation_type;
        using action_type = typename DecisionProcessBase<TStateSpace, TActionSpace, TDistrib>::action_type;

        DecisionProcess();
        DecisionProcess(std::shared_ptr<TStateSpace> state_sp, std::shared_ptr<TActionSpace> action_sp);
        DecisionProcess(std::shared_ptr<TStateSpace> state_sp, std::shared_ptr<TActionSpace> action_sp, TDistrib);
        DecisionProcess(std::shared_ptr<TStateSpace> state_sp, std::shared_ptr<TActionSpace> action_sp, std::shared_ptr<TStateDynamics>, std::shared_ptr<TReward>, TDistrib start_distrib, number planning_horizon = 0, double discount = 0.9, Criterion criterion = Criterion::REW_MAX);
        DecisionProcess(std::shared_ptr<TStateSpace> state_sp, std::shared_ptr<TActionSpace> action_sp, std::shared_ptr<TObsSpace> obs_sp, std::shared_ptr<TStateDynamics>, std::shared_ptr<TReward>, TDistrib start_distrib, number planning_horizon = 0, double discount = 0.9, Criterion criterion = Criterion::REW_MAX);
        virtual ~DecisionProcess();

        std::shared_ptr<TStateDynamics> getStateDynamics() const;

        void setStateDynamics(std::shared_ptr<TStateDynamics> state_dyn);

        std::shared_ptr<TReward> getReward() const;

        double getReward(state_type s, action_type a);

        void setReward(std::shared_ptr<TReward> reward_function);

        observation_type reset();

        TDistrib getNextStateDistrib(state_type cstate, action_type caction);

        TDistrib getNextStateDistrib(action_type caction);

        template <bool TBool = is_fully_obs>
        std::enable_if_t<TBool, observation_type> updateState_getObs(action_type a);

        template <bool TBool = is_fully_obs>
        std::enable_if_t<TBool, std::tuple<observation_type, std::vector<double>, bool>> step(action_type a);

        template <bool TBool = std::is_same<TDistrib, std::discrete_distribution<number>>::value>
        std::enable_if_t<TBool> setupDynamicsGenerator();

        template <bool TBool = std::is_same<TDistrib, std::discrete_distribution<number>>::value>
        std::enable_if_t<!TBool> setupDynamicsGenerator();

        std::shared_ptr<TActionSpace> getActionSpace() const;

        template <bool TBool = std::is_base_of<MultiSpace<DiscreteSpace<number>>, TActionSpace>::value>
        std::enable_if_t<TBool, number> getNumAgents();

        template <bool TBool = std::is_base_of<MultiSpace<DiscreteSpace<number>>, TActionSpace>::value>
        std::enable_if_t<!TBool, number> getNumAgents();

    protected:
        long ctimestep_ = 0;

        std::shared_ptr<TStateDynamics> state_dynamics_;

        std::shared_ptr<TReward> reward_function_;

        std::unordered_map<state_type, std::unordered_map<action_type, TDistrib>> dynamics_generator;

        template <bool TBool = std::is_same<TActionSpace, MultiDiscreteSpace<number>>::value>
        std::enable_if_t<TBool, number>
        getAction(action_type a);

        template <bool TBool = std::is_same<TActionSpace, MultiDiscreteSpace<number>>::value>
        std::enable_if_t<!TBool, action_type>
        getAction(action_type a);

        template <bool TBool = is_fully_obs> //std::is_same<TStateSpace, TObsSpace>::value>
        std::enable_if_t<TBool, observation_type>
        resetProcess();

        template <bool TBool = is_fully_obs> //std::is_same<TStateSpace, TObsSpace>::value>
        std::enable_if_t<!TBool, observation_type>
        resetProcess();
    };

    template <typename TStateSpace, typename TActionSpace, typename TStateDynamics, typename TReward, typename TDistrib>
    using FullyObservableDecisionProcess = DecisionProcess<TStateSpace, TActionSpace, TStateSpace, TStateDynamics, TReward, TDistrib, true>;

    using DiscreteSG = FullyObservableDecisionProcess<DiscreteSpace<number>, MultiDiscreteSpace<number>, StateDynamics, std::vector<Reward>, std::discrete_distribution<number>>;
} // namespace sdm
#include <sdm/world/decision_process.tpp>
````

