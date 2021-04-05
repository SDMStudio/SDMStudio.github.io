
# File po\_decision\_process.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**po\_decision\_process.hpp**](po__decision__process_8hpp.md)

[Go to the documentation of this file.](po__decision__process_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/world/decision_process.hpp>
#include <sdm/world/base/po_process_base.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/observation_dynamics.hpp>
#include <sdm/core/reward.hpp>

namespace sdm
{

    template <typename TStateSpace, typename TActionSpace, typename TObsSpace, typename TStateDynamics, typename TObsDynamics, typename TReward, typename TDistrib>
    class PartiallyObservableDecisionProcess : public DecisionProcess<TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TReward, TDistrib, false>,
                                               public PartiallyObservableProcessBase<TStateSpace, TObsSpace, TDistrib>
    {
    public:
        using state_type = typename DecisionProcessBase<TStateSpace, TActionSpace, TDistrib>::state_type;
        using observation_type = typename DecisionProcess<TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TReward, TDistrib>::observation_type;
        using action_type = typename DecisionProcessBase<TStateSpace, TActionSpace, TDistrib>::action_type;
        using PartiallyObservableProcessBase<TStateSpace, TObsSpace, TDistrib>::getObsSpace;

        PartiallyObservableDecisionProcess();
        PartiallyObservableDecisionProcess(std::shared_ptr<TStateSpace> state_sp,
                                           std::shared_ptr<TActionSpace> action_sp,
                                           std::shared_ptr<TObsSpace> obs_sp,
                                           std::shared_ptr<TStateDynamics> state_dyn,
                                           std::shared_ptr<TObsDynamics> obs_dyn, std::shared_ptr<TReward>,
                                           TDistrib start_distrib,
                                           number planning_horizon = 0,
                                           double discount = 0.9,
                                           Criterion criterion = Criterion::REW_MAX);

        PartiallyObservableDecisionProcess(PartiallyObservableDecisionProcess &copy);
        virtual ~PartiallyObservableDecisionProcess();

        std::shared_ptr<TObsDynamics> getObsDynamics() const;

        void setObsDynamics(std::shared_ptr<TObsDynamics> obs_dyn);

        observation_type updateState_getObs(action_type a);
        
        std::tuple<observation_type, std::vector<double>, bool> step(action_type a);

        template <bool TBool = std::is_same<TDistrib, std::discrete_distribution<number>>::value>
        std::enable_if_t<TBool> setupDynamicsGenerator();

        template <bool TBool = std::is_same<TDistrib, std::discrete_distribution<number>>::value>
        std::enable_if_t<!TBool> setupDynamicsGenerator();

    protected:
        std::shared_ptr<TObsDynamics> obs_dynamics_;

        std::unordered_map<number, std::pair<state_type, observation_type>> encoding;

        template <bool TBool = std::is_same<TObsSpace, MultiDiscreteSpace<number>>::value>
        std::enable_if_t<TBool, number>
        getObservation(observation_type o);

        template <bool TBool = std::is_same<TObsSpace, MultiDiscreteSpace<number>>::value>
        std::enable_if_t<!TBool, observation_type>
        getObservation(observation_type o);

    };

    template <typename TStateSpace, typename TActionSpace, typename TObsSpace, typename TStateDynamics, typename TObsDynamics, typename TReward, typename TDistrib>
    using PODecisionProcess = PartiallyObservableDecisionProcess<TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TObsDynamics, TReward, TDistrib>;

    using DiscretePOSG = PODecisionProcess<DiscreteSpace<number>, MultiDiscreteSpace<number>, MultiDiscreteSpace<number>, StateDynamics, ObservationDynamics, std::vector<Reward>, std::discrete_distribution<number>>;
} // namespace sdm
#include <sdm/world/po_decision_process.tpp>
````

