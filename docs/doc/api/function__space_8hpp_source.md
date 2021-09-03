
# File function\_space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**function\_space.hpp**](function__space_8hpp.md)

[Go to the documentation of this file.](function__space_8hpp.md) 


````cpp

#pragma once

#include <vector>

#include <sdm/types.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/variations.hpp>

namespace sdm
{
    template <typename TFunction>
    class FunctionSpace : public DiscreteSpace
    {
    protected:
        // typedef boost::bimaps::bimap<number, TFunction> funct_bimap;
        // typedef typename funct_bimap::value_type funct_bimap_value;

        using value_type = TFunction;
        using input_type = typename TFunction::input_type;
        using output_type = typename TFunction::output_type;

        std::shared_ptr<Space> input_space_;

        std::vector<std::shared_ptr<Space>> output_space_;

    public:
        using iterator_type = DiscreteSpace::iterator_type;

        FunctionSpace(const std::shared_ptr<Space> &input_space, const std::shared_ptr<Space> &output_space, bool store_functions = false);

        FunctionSpace(std::vector<input_type> possible_inputs, std::vector<output_type> possible_outputs, bool store_functions = false);

        FunctionSpace(const std::shared_ptr<Space> &input_space, const std::vector<std::shared_ptr<Space>> &output_spaces, bool store_functions = false);

        FunctionSpace(std::vector<input_type> possible_inputs, std::vector<std::vector<output_type>> possible_outputs, bool store_functions = false);

        iterator_type begin();
        iterator_type end();

    };
} // namespace sdm
#include <sdm/core/space/function_space.tpp>
````

