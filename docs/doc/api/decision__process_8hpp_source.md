
# File decision\_process.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**decision\_process.hpp**](decision__process_8hpp.md)

[Go to the documentation of this file.](decision__process_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2020 David Albert
==============================================================================*/
#pragma once

#include <vector>

#include <sdm/types.hpp>

#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/reward.hpp>

#include <sdm/public/world.hpp>
#include <sdm/world/stochastic_process.hpp>


namespace sdm
{
    class DecisionProcess : public virtual StochasticProcess, public World
    {
    protected:
        DiscreteSpace<number> agent_space_;

        MultiDiscreteSpace<number> action_space_;

        StateDynamics s_dynamics_;

        std::vector<Reward> rew_;

        Criterion criterion = Criterion::REW_MAX;

        double discount = 1.0, bound;

        number planning_horizon = 0;

        std::string filename;

    public:
        DecisionProcess();
        // DecisionProcess(number, number, const std::vector<number> &);
        // DecisionProcess(number, number, const std::vector<number> &, const Vector &);
        DecisionProcess(const DiscreteSpace<number> &, const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &);
        DecisionProcess(const DiscreteSpace<number> &, const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &, const Vector &);
        DecisionProcess(const DiscreteSpace<number> &, const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &, const StateDynamics &, const std::vector<Reward> &, const Vector &);

        void setFileName(std::string);

        std::string getFileName();

        double getBound() const;

        void setBound(double);

        bool getCriterion() const;

        void setCriterion(bool);

        double getDiscount() const;

        void setDiscount(double);

        number getPlanningHorizon() const;

        void setPlanningHorizon(number);

        const StateDynamics &getStateDynamics() const;

        double getTransitionProba(number cstate, std::vector<number> jaction, number state) const;

        double getTransitionProba(number cstate, number jaction, number state) const;

        void nextState(number jaction);

        void nextState(std::vector<number> jaction);

        const std::vector<Reward> &getRewards() const;

        std::vector<double> getRewards(number state, number jaction) const;

        std::vector<double> getRewards(number state, std::vector<number> jaction) const;

        double getReward(number state, number jaction, number ag_id) const;

        double getReward(number state, std::vector<number> jaction, number ag_id) const;

        std::vector<double> getCost(number state, number jaction) const;

        std::vector<double> getCost(number state, std::vector<number> jaction) const;

        const DiscreteSpace<number> &getAgentSpace() const;

        const MultiDiscreteSpace<number> &getActionSpace() const;

        number getNumJActions() const;

        number getNumActions(number) const;

        std::vector<number> getNumActions() const;

        number getNumAgents() const;

    };

    typedef DecisionProcess SG;
    typedef DecisionProcess StochasticGame;
} // namespace sdm
````

