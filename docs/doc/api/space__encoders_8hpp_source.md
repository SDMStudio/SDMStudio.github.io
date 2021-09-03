
# File space\_encoders.hpp

[**File List**](files.md) **>** [**encoders**](dir_26a62d7ea2bd3315be1d2a3057f158c4.md) **>** [**space\_encoders.hpp**](space__encoders_8hpp.md)

[Go to the documentation of this file.](space__encoders_8hpp.md) 


````cpp
#pragma once

#include <sdm/parser/ast.hpp>
#include <sdm/core/base_item.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>

namespace sdm
{
    namespace ast
    {
        struct discrete_space_encoder : boost::static_visitor<std::shared_ptr<DiscreteSpace>>
        {
            std::shared_ptr<DiscreteSpace> operator()(number ag) const;
            std::shared_ptr<DiscreteSpace> operator()(const std::vector<std::string> &ags) const;
        };

        struct multi_discrete_space_encoder : boost::static_visitor<std::shared_ptr<MultiDiscreteSpace>>
        {
            std::shared_ptr<MultiDiscreteSpace> operator()(const std::vector<number> &dim_spaces) const;
            std::shared_ptr<MultiDiscreteSpace> operator()(const std::vector<std::vector<std::string>> &all_list_names) const;
        };
    } // namespace ast

} // namespace sdm
````

