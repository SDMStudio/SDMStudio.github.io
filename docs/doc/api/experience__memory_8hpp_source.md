
# File experience\_memory.hpp

[**File List**](files.md) **>** [**rl**](dir_1bc0c1e8b4bb5415537951e68df5cc3c.md) **>** [**experience\_memory.hpp**](experience__memory_8hpp.md)

[Go to the documentation of this file.](experience__memory_8hpp.md) 


````cpp
#pragma once

#include <random>
#include <math.h>
#include <iterator>
#include <experimental/algorithm>
#include <utility>

// #include <boost/program_options.hpp>
// #include <boost/any.hpp>

#include <sdm/utils/rl/experience_memory_interface.hpp>

namespace sdm
{

    class ExperienceMemory : public ExperienceMemoryInterface
    {
    protected:
        int capacity_;
        std::vector<std::vector<sars_transition>> experience_memory_;
        int position;

    public:
        ExperienceMemory(number horizon, int capacity = 1);

        void push(const std::shared_ptr<Observation>& observation, const std::shared_ptr<Action>& action, const double reward, const std::shared_ptr<Observation>& next_observation, const std::shared_ptr<Action>& next_action, number t);

        std::vector<sars_transition> sample(number t, int n = 1);

        int size();
    };
} // namespace sdm
````

