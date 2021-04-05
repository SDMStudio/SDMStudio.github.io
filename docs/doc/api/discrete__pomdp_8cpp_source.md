
# File discrete\_pomdp.cpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**discrete\_pomdp.cpp**](discrete__pomdp_8cpp.md)

[Go to the documentation of this file.](discrete__pomdp_8cpp.md) 


````cpp
#include <sdm/world/discrete_pomdp.hpp>
#include <sdm/parser/parser.hpp>

namespace sdm
{

    DiscretePOMDP::DiscretePOMDP()
    {
    }

    DiscretePOMDP::DiscretePOMDP(std::string &filename)
    {
        *this = *(parser::parse_file(filename.c_str())->toPOMDP());
    }

    DiscretePOMDP::DiscretePOMDP(std::shared_ptr<DiscreteSpace<number>> state_sp, std::shared_ptr<DiscreteSpace<number>> action_sp, std::shared_ptr<DiscreteSpace<number>> obs_sp, std::shared_ptr<StateDynamics> state_dyn, std::shared_ptr<ObservationDynamics> obs_dyn, std::shared_ptr<Reward> rew_f, std::discrete_distribution<number> start_distrib, number planning_horizon, double discount, Criterion criterion)
        : StochasticProcessBase<DiscreteSpace<number>, std::discrete_distribution<number>>(state_sp, start_distrib),
          PartiallyObservableDecisionProcess<DiscreteSpace<number>,
                                             DiscreteSpace<number>,
                                             DiscreteSpace<number>,
                                             StateDynamics,
                                             ObservationDynamics,
                                             Reward,
                                             std::discrete_distribution<number>>(state_sp,
                                                                                 action_sp,
                                                                                 obs_sp,
                                                                                 state_dyn,
                                                                                 obs_dyn,
                                                                                 rew_f,
                                                                                 start_distrib,
                                                                                 planning_horizon,
                                                                                 discount,
                                                                                 criterion)

    {
    }

    std::shared_ptr<DiscretePOMDP> DiscretePOMDP::getptr()
    {
        return shared_from_this();
    }

    // // Other methods
    std::shared_ptr<DiscreteMDP> DiscretePOMDP::toMDP()
    {
        return std::make_shared<DiscreteMDP>(this->getStateSpace(), this->getActionSpace(), this->getStateDynamics(), this->getReward(), this->getStartDistrib(), this->getPlanningHorizon(), this->getDiscount(), this->getCriterion());
    }

    std::shared_ptr<BeliefMDP<BeliefState, number, number>> DiscretePOMDP::toBeliefMDP()
    {
        return std::make_shared<BeliefMDP<BeliefState, number, number>>(this->getptr());
    }

}
````

