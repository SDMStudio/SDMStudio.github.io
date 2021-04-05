
# File eps\_greedy.hpp

[**File List**](files.md) **>** [**rl**](dir_1bc0c1e8b4bb5415537951e68df5cc3c.md) **>** [**eps\_greedy.hpp**](eps__greedy_8hpp.md)

[Go to the documentation of this file.](eps__greedy_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>

namespace sdm
{
    struct EpsGreedy
    {
        float epsilon_start;
        float epsilon_end;
        float epsilon_decay;
        std::uniform_real_distribution<double> eps_distrib = std::uniform_real_distribution<double>(0.0, 1.0);

        EpsGreedy(number eps_start, number eps_end, number eps_decay) : epsilon_start(eps_start), epsilon_end(eps_end), epsilon_decay(eps_decay)
        {
        }
    };
} // namespace sdm
````

