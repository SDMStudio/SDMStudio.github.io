
# File mlpnet.hpp

[**File List**](files.md) **>** [**nn**](dir_a0f8f367ee5fbc480d285e7bffe42674.md) **>** [**mlpnet.hpp**](mlpnet_8hpp.md)

[Go to the documentation of this file.](mlpnet_8hpp.md) 


````cpp
#pragma once

#include <torch/torch.h>
#include <sdm/types.hpp>

struct DQNImpl : torch::nn::Module
{
    DQNImpl(sdm::number num_states, sdm::number num_actions)
        : fc1(torch::nn::Linear(num_states, 10)),
          fc2(torch::nn::Linear(10, num_actions))
    {
        register_module("fc1", fc1);
        register_module("fc2", fc2);
    }
    torch::Tensor forward(torch::Tensor x)
    {
        torch::Tensor state_action_values = fc2(torch::relu(fc1(x)));
        return state_action_values;
    }
    torch::nn::Linear fc1, fc2;
};
TORCH_MODULE(DQN);
````

