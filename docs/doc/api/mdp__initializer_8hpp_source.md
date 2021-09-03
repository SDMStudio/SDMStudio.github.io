
# File mdp\_initializer.hpp

[**File List**](files.md) **>** [**initializer**](dir_8f297180fb36cffec7cf6cc452bb4d2e.md) **>** [**mdp\_initializer.hpp**](mdp__initializer_8hpp.md)

[Go to the documentation of this file.](mdp__initializer_8hpp.md) 


````cpp

#pragma once

#include <sdm/algorithms/hsvi.hpp>
#include <sdm/utils/value_function/initializer/initializer.hpp>

namespace sdm
{
    class MDPInitializer : public Initializer
    {
    public:
        std::string algo_name_;
        double error_, trials_;
        std::shared_ptr<SolvableByHSVI> world_;

    public:
        MDPInitializer(std::shared_ptr<SolvableByHSVI> world,std::string algo_name, double error = 0.01, int trials = 10000);
        void init(std::shared_ptr<ValueFunction> vf);
    };
} // namespace sdm
````

