
# File discrete\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**discrete\_mdp.hpp**](discrete__mdp_8hpp.md)

[Go to the documentation of this file.](discrete__mdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/world/decision_process.hpp>
#include <sdm/world/belief_mdp.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/reward.hpp>

namespace sdm
{
    class DiscreteMDP : public FullyObservableDecisionProcess<DiscreteSpace<number>, DiscreteSpace<number>, StateDynamics, Reward, std::discrete_distribution<number>>,
                        public SolvableByHSVI<number, number>,
                        public std::enable_shared_from_this<DiscreteMDP>
    {
    public:
        DiscreteMDP();
        DiscreteMDP(std::shared_ptr<DiscreteSpace<number>> state_sp, std::shared_ptr<DiscreteSpace<number>> action_sp);
        DiscreteMDP(std::shared_ptr<DiscreteSpace<number>> state_sp, std::shared_ptr<DiscreteSpace<number>> action_sp, std::discrete_distribution<number>);
        DiscreteMDP(std::shared_ptr<DiscreteSpace<number>> state_sp, std::shared_ptr<DiscreteSpace<number>> action_sp, std::shared_ptr<StateDynamics>, std::shared_ptr<Reward>, std::discrete_distribution<number> start_distrib, number planning_horizon = 0, double discount = 0.9, Criterion criterion = Criterion::REW_MAX);
        DiscreteMDP(std::string &filename);

        std::shared_ptr<DiscreteMDP> getptr();
        std::shared_ptr<Reward> getReward() const;

        // SolvableByHSVI interface implementation
        number getInitialState();
        number nextState(const number &state, const number &action, int t = 0, HSVI<number, number> *hsvi = nullptr) const;
        std::shared_ptr<DiscreteSpace<number>> getActionSpaceAt(const number &state);
        double getReward(const number &state, const number &action) const;
        double getExpectedNextValue(ValueFunction<number, number> *value_function, const number &state, const number &action, int t = 0) const;
        DiscreteMDP *getUnderlyingProblem();
        bool isSerialized() const;

        // Problem conversion
        std::shared_ptr<DiscreteMDP> toMDP();

        std::shared_ptr<BeliefMDP<BeliefState, number, number>> toBeliefMDP();

    };
} // namespace sdm
````

