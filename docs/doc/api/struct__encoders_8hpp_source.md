
# File struct\_encoders.hpp

[**File List**](files.md) **>** [**encoders**](dir_26a62d7ea2bd3315be1d2a3057f158c4.md) **>** [**struct\_encoders.hpp**](struct__encoders_8hpp.md)

[Go to the documentation of this file.](struct__encoders_8hpp.md) 


````cpp
#pragma once

#include <sdm/parser/ast.hpp>

#include <sdm/utils/linear_algebra/vector_interface.hpp>
#include <sdm/utils/linear_algebra/matrix_interface.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>
#include <sdm/utils/linear_algebra/mapped_matrix.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>
#include <sdm/utils/linear_algebra/matrix.hpp>

namespace sdm
{
    namespace ast
    {

        struct vector_encoder : boost::static_visitor<std::shared_ptr<MappedVector<number, double>>>
        {

            number size_;

            vector_encoder(const number size);

            std::shared_ptr<MappedVector<number, double>> operator()(const std::string &name) const;

            std::shared_ptr<MappedVector<number, double>> operator()(const std::vector<float> &vector) const;
        };

        struct matrix_encoder : boost::static_visitor<std::shared_ptr<MappedMatrix<number, number>>>
        {
            number rows, cols;

            matrix_encoder(number rows, number cols);

            std::shared_ptr<MappedMatrix<number, number>> operator()(const std::string &str) const;

            std::shared_ptr<MappedMatrix<number, number>> operator()(const std::vector<std::vector<float>> &v) const;
        };
    } // namespace ast

} // namespace sdm
````

