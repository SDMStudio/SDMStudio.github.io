
# File algorithms.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**algorithms.hpp**](algorithms_8hpp.md)

[Go to the documentation of this file.](algorithms_8hpp.md) 


````cpp
#pragma once

#include <random>

#include <sdm/algorithms/hsvi.hpp>
#include <sdm/utils/value_function/tabular_value_function.hpp>
#include <sdm/utils/value_function/initializer.hpp>

namespace sdm
{
    namespace algo
    {
        template <typename TState, typename TAction>
        std::shared_ptr<sdm::HSVI<TState, TAction>> makeMappedHSVI(std::shared_ptr<POSG> problem, double discount = 0.99, double error = 0.001, int horizon = 0, int trials = 1000)
        {
            assert(((discount < 1) || (horizon > 0)));

            problem->setDiscount(discount);

            auto lb_init = std::make_shared<sdm::MinInitializer<TState, TAction>>();
            auto ub_init = std::make_shared<sdm::MaxInitializer<TState, TAction>>();

            std::shared_ptr<sdm::ValueFunction<TState, TAction>> upper_bound(new sdm::MappedValueFunction<TState, TAction>(problem, horizon, ub_init));
            std::shared_ptr<sdm::ValueFunction<TState, TAction>> lower_bound(new sdm::MappedValueFunction<TState, TAction>(problem, horizon, lb_init));

            return std::make_shared<HSVI<TState, TAction>>(problem, lower_bound, upper_bound, horizon, error, trials);
        }
        

        template <typename TState, typename TAction>
        auto make(std::string algo_name, std::shared_ptr<POSG> problem, double discount = 0.99, double error = 0.001, int horizon = 0, int trials = 1000)
        {
            if (algo_name == "mapped_hsvi" || algo_name == "tabular_hsvi" || algo_name == "hsvi")
            {
                return makeMappedHSVI<TState, TAction>(problem, discount, error, horizon, trials);
            }
            return makeMappedHSVI<TState, TAction>(problem, discount, error, horizon, trials);
        }

        std::vector<std::string> available()
        {
            return {"mapped_hsvi", "tabular_hsvi"};
        }

    } // namespace algo
} // namespace sdm
````

