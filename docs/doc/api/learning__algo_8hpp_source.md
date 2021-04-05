
# File learning\_algo.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**learning\_algo.hpp**](learning__algo_8hpp.md)

[Go to the documentation of this file.](learning__algo_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/world/gym_interface.hpp>
#include <sdm/public/algorithm.hpp>

namespace sdm
{
    template <typename TState, typename TAction, typename TObservation>
    class LearningAlgo : public Algorithm
    {
    protected:
        std::shared_ptr<GymInterface> env_;

        int trial, max_trials;
        number planning_horizon_, episode;

    public:
        LearningAlgo(number trials, std::string results);

        LearningAlgo(std::shared_ptr<GymInterface> env,
                     number planning_horizon,
                     number num_max_trials = 10000);

        void do_solve(std::shared_ptr<GymInterface> env, long nb_timesteps, number planning_horizon = 100, number test_freq = 1000, number save_freq = 1000, std::string save_folder = "models", number verbose = 1, long timestep_init = 0, std::string log_file = "")
    };
} // namespace sdm
#include <sdm/algorithms/learning_algo.tpp>
````

