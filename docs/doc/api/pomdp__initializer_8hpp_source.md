
# File pomdp\_initializer.hpp

[**File List**](files.md) **>** [**initializer**](dir_8f297180fb36cffec7cf6cc452bb4d2e.md) **>** [**pomdp\_initializer.hpp**](pomdp__initializer_8hpp.md)

[Go to the documentation of this file.](pomdp__initializer_8hpp.md) 


````cpp

#pragma once

#include <sdm/utils/value_function/initializer.hpp>

namespace sdm
{
    template <typename TState, typename TAction>
    class POMDPInitializer : public Initializer<TState, TAction>
    {
    public:
        std::string algo_name_;
        double error_, trials_;

    public:
        POMDPInitializer(std::string algo_name, double error = 0.01, int trials = 10000);
        void init(ValueFunction<TState, TAction> *vf);
    };
} // namespace sdm
#include <sdm/utils/value_function/initializer/pomdp_initializer.tpp>
````

