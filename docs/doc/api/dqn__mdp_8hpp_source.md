
# File dqn\_mdp.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**dqn\_mdp.hpp**](dqn__mdp_8hpp.md)

[Go to the documentation of this file.](dqn__mdp_8hpp.md) 


````cpp
#pragma once

#include <torch/torch.h>
#include <vector>

#include <sdm/types.hpp>
#include <sdm/public/algorithm.hpp>
#include <sdm/world/posg.hpp>
#include <sdm/utils/nn/mlpnet.hpp>
#include <sdm/utils/rl/eps_greedy.hpp>
#include <sdm/utils/rl/replay_memory.hpp>

namespace sdm
{
    class DQNMDP : public Algorithm
    {
    protected:
        DQN policy_net_;

        DQN target_net_;

        torch::optim::Adam optimizer;

        ReplayMemory replay_memory_;

        EpsGreedy eps_greedy_;

        number batch_size_;

        number target_update_ = 1;

        number step_done_ = 0;

        torch::Device device_;

        action select_action(const std::shared_ptr<POSG> &, state, std::uniform_int_distribution<int> &);
        void optimize_dqn(const std::shared_ptr<POSG> &, bool = false);

    public:
        DQNMDP(DQN, DQN, ReplayMemory, EpsGreedy, int, int, torch::Device = torch::kCPU);
        void to(torch::Device);
        void solve(const std::shared_ptr<POSG> &, horizon, double = 0.001, double = 1.0);
    };
} // namespace sdm
````

