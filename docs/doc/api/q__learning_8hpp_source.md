
# File q\_learning.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**q\_learning.hpp**](q__learning_8hpp.md)

[Go to the documentation of this file.](q__learning_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/public/algorithm.hpp>
#include <sdm/world/gym_interface.hpp>
#include <sdm/utils/rl/exploration.hpp>
#include <sdm/utils/logging/logger.hpp>
#include <sdm/utils/value_function/qvalue_function.hpp>
#include <sdm/utils/value_function/backup/qvalue_backup_interface.hpp>
#include <sdm/utils/rl/experience_memory_interface.hpp>


namespace sdm
{
  template <class TInput = std::shared_ptr<State>>
  class QLearning : public Algorithm
  {
  private:
    std::shared_ptr<Observation> observation, next_observation;
    std::shared_ptr<Action> action, next_action;
    number log_freq = 1, test_freq = 1000, save_freq = 10000;
    bool do_log_ = false, do_test_ = false, do_save_ = false, is_done = false;
    unsigned long target_update_;
    clock_t t_begin;

  protected:
    std::shared_ptr<GymInterface> env_;

    std::shared_ptr<ExperienceMemoryInterface> experience_memory_;

    std::shared_ptr<QValueFunction<TInput>> q_value_table_;

    std::shared_ptr<QValueFunction<TInput>> q_value_table_target_;

    std::shared_ptr<QValueBackupInterface> backup_;

    std::shared_ptr<EpsGreedy> exploration_process;

    std::shared_ptr<MultiLogger> logger_;

    number horizon_, step;

    double discount_, lr_, smooth_, E_R, R;

    std::vector<double> rewards_;

    unsigned long global_step, num_episodes_, episode;

    std::string name_ = "qlearning";

  public:
    QLearning(std::shared_ptr<GymInterface> &env,
              std::shared_ptr<ExperienceMemoryInterface> experience_memory,
              std::shared_ptr<QValueFunction<TInput>> q_value_table,
              std::shared_ptr<QValueFunction<TInput>> q_value_table_target,
              std::shared_ptr<QValueBackupInterface> backup,
              std::shared_ptr<EpsGreedy> exploration,
              number horizon,
              double discount = 0.9,
              double lr = 0.001,
              double smooth = 0.99,
              unsigned long num_episodes = 10000,
              std::string name = "qlearning"
            );

    void do_initialize();

    void do_solve();

    void do_test();

    void do_episode();

    void do_step();

    void do_save();

    void update_model();

    void update_target();

    std::shared_ptr<Action> select_action(const std::shared_ptr<Observation> &observation, number t);
    std::shared_ptr<Action> select_greedy_action(const std::shared_ptr<Observation> &observation, number t);

    void initLogger();
    double getResultOpti() { throw sdm::exception::NotImplementedException(); }
    int getTrial() { throw sdm::exception::NotImplementedException(); }
    double getResult() { throw sdm::exception::NotImplementedException(); }

    // void saveResults(std::string filename, double other);

  };
} // namespace sdm
#include <sdm/algorithms/q_learning.tpp>
````

