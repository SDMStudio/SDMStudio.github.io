
# File algorithms.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**algorithms.hpp**](algorithms_8hpp.md)

[Go to the documentation of this file.](algorithms_8hpp.md) 


````cpp
#pragma once

#include <random>

#include <sdm/exception.hpp>
#include <sdm/tools.hpp>
#include <sdm/worlds.hpp>
#include <sdm/algorithms/hsvi.hpp>
#include <sdm/public/algorithm.hpp>
#include <sdm/core/states.hpp>
#include <sdm/utils/decision_rules/det_decision_rule.hpp>
#include <sdm/utils/value_function/tabular_value_function.hpp>
#include <sdm/utils/value_function/initializers.hpp>
#include <sdm/utils/value_function/initializer/mdp_initializer.hpp>

namespace sdm
{
    namespace algo
    {
        template <typename TState, typename TAction>
        std::shared_ptr<sdm::HSVI<TState, TAction>> makeMappedHSVI(std::shared_ptr<SolvableByHSVI<TState, TAction>> problem, std::string ub_init_name, std::string lb_init_name, double discount, double error, int horizon, int trials, std::string name)
        {
            assert(((discount < 1) || (horizon > 0)));

            // Set params in the environment
            problem->getUnderlyingProblem()->setDiscount(discount);
            problem->getUnderlyingProblem()->setPlanningHorizon(horizon);

            // Increase the horizon for the value function if the problem is serialized
            if (problem->isSerialized())
            {
                horizon = horizon * problem->getUnderlyingProblem()->getNumAgents();
            }

            // Instanciate initializers
            auto lb_init = sdm::makeInitializer<TState, TAction>(lb_init_name); //std::make_shared<sdm::MinInitializer<TState, TAction>>();
            auto ub_init = sdm::makeInitializer<TState, TAction>(ub_init_name);

            // Instanciate bounds
            std::shared_ptr<sdm::ValueFunction<TState, TAction>> upper_bound(new sdm::MappedValueFunction<TState, TAction>(problem, horizon, ub_init));
            std::shared_ptr<sdm::ValueFunction<TState, TAction>> lower_bound(new sdm::MappedValueFunction<TState, TAction>(problem, horizon, lb_init));

            return std::make_shared<HSVI<TState, TAction>>(problem, lower_bound, upper_bound, horizon, error, trials, name);
        }

        // /**
        //  * @brief
        //  *
        //  * @tparam TState
        //  * @tparam TAction
        //  * @param problem
        //  * @param discount
        //  * @param error
        //  * @param horizon
        //  * @param trials
        //  * @return std::shared_ptr<sdm::HSVI<TState, TAction>>
        //  */
        // template <typename TState, typename TAction>
        // std::shared_ptr<sdm::HSVI<TState, TAction>> makeHSVI(std::shared_ptr<SolvableByHSVI<TState, TAction>> problem, double discount = 0.99, double error = 0.001, int horizon = 0, int trials = 1000)
        // {
        //     assert(((discount < 1) || (horizon > 0)));

        //     problem->setDiscount(discount);

        //     auto lb_init = std::make_shared<sdm::MinInitializer<TState, TAction>>(problem->getReward().getMinReward(), discount);
        //     auto ub_init = std::make_shared<sdm::MaxInitializer<TState, TAction>>(problem->getReward().getMaxReward(), discount);

        //     std::shared_ptr<sdm::ValueFunction<TState, TAction>> upper_bound(new sdm::MaxPlanValueFunction<TState, TAction>(problem, horizon, ub_init));
        //     std::shared_ptr<sdm::ValueFunction<TState, TAction>> lower_bound(new sdm::MaxPlanValueFunction<TState, TAction>(problem, horizon, lb_init));

        //     return std::make_shared<HSVI<TState, TAction>>(problem, lower_bound, upper_bound, horizon, error, trials);
        // }

        std::shared_ptr<Algorithm> make(std::string algo_name, std::string problem_path, std::string formalism, std::string ub_init, std::string lb_init, double discount = 0.99, double error = 0.001, int horizon = 0, int trials = 1000, std::string name = "")
        {
            if ((algo_name == "tabular_hsvi") || (algo_name == "mapped_hsvi"))
            {
                if ((formalism == "mdp") || (formalism == "MDP"))
                {
                    auto mdp = std::make_shared<DiscreteMDP>(problem_path);
                    mdp->getUnderlyingProblem()->setInternalState(0);

                    return makeMappedHSVI<number, number>(mdp, ub_init, lb_init, discount, error, horizon, trials, (name == "") ? "tab_mdphsvi" : name);
                }
                else if ((formalism == "pomdp") || (formalism == "POMDP"))
                {
                    using TState = BeliefState;
                    using TAction = number;
                    using TObservation = number;

                    auto pomdp = std::make_shared<DiscretePOMDP>(problem_path);
                    auto beliefMDP = std::make_shared<BeliefMDP<TState, TAction, TObservation>>(pomdp);

                    return makeMappedHSVI<TState, TAction>(beliefMDP, ub_init, lb_init, discount, error, horizon, trials, (name == "") ? "tab_hsvi" : name);
                }
                else if ((formalism == "decpomdp") || (formalism == "DecPOMDP") || (formalism == "dpomdp") || (formalism == "DPOMDP"))
                {
                    using TObservation = number;
                    using TState = number;

                    using TActionDescriptor = number;
                    using TStateDescriptor = HistoryTree_p<TObservation>;

                    using TActionPrescriptor = Joint<DeterministicDecisionRule<TStateDescriptor, TActionDescriptor>>;
                    using TStatePrescriptor = OccupancyState<TState, JointHistoryTree_p<TObservation>>;

                    auto oMDP = std::make_shared<OccupancyMDP<TStatePrescriptor, TActionPrescriptor>>(problem_path, horizon);
                    return makeMappedHSVI<TStatePrescriptor, TActionPrescriptor>(oMDP, ub_init, lb_init, discount, error, horizon, trials, (name == "") ? "tab_ohsvi" : name);
                }
                else if ((formalism == "extensive-mdp") || (formalism == "Extensive-MDP"))
                {
                    using TState = SerializedState; //<number, number>;
                    using TAction = number;

                    auto mmdp = std::make_shared<DiscreteMMDP>(problem_path);
                    auto serialized_mdp = std::make_shared<SerializedMDP<TState, TAction>>(mmdp);
                    serialized_mdp->getUnderlyingProblem()->setInternalState(0);

                    return makeMappedHSVI<TState, TAction>(serialized_mdp, ub_init, lb_init, discount, error, horizon, trials, (name == "") ? "tab_ext_mdphsvi" : name);
                }
                else if ((formalism == "extensive-decpomdp") || (formalism == "Extensive-DecPOMDP") || (formalism == "extensive-dpomdp") || (formalism == "Extensive-DPOMDP"))
                {
                    using TState = SerializedOccupancyState<SerializedState, JointHistoryTree_p<number>>;
                    using TAction = DeterministicDecisionRule<HistoryTree_p<number>, number>;

                    auto serialized_oMDP = std::make_shared<SerializedOccupancyMDP<TState, TAction>>(problem_path, horizon);

                    return makeMappedHSVI<TState, TAction>(serialized_oMDP, ub_init, lb_init, discount, error, horizon, trials, (name == "") ? "tab_ext_ohsvi" : name);
                }
            }
        }

        std::vector<std::string> available()
        {
            return {"tabular_hsvi"};
        }

    } // namespace algo
} // namespace sdm
````
