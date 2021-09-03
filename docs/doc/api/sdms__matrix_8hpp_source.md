
# File sdms\_matrix.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**sdms\_matrix.hpp**](sdms__matrix_8hpp.md)

[Go to the documentation of this file.](sdms__matrix_8hpp.md) 


````cpp

#pragma once

#include <cmath>
#include <assert.h>

#include <boost/numeric/ublas/io.hpp>
#include <boost/numeric/ublas/vector.hpp>
#include <boost/numeric/ublas/matrix.hpp>
#include <boost/numeric/ublas/matrix_sparse.hpp>
#include <boost/numeric/ublas/matrix_proxy.hpp>

#include <sdm/utils/linear_algebra/matrix.hpp>
#include <sdm/utils/linear_algebra/vector_impl.hpp>
#include <sdm/utils/linear_algebra/sdms_vector.hpp>

namespace sdm
{
    template <class TLig, class TCol, class TValue, class TBaseMatrix, class TBaseVector>
    class sdmsMatrix : public TBaseMatrix
    {
    public:
        using vector_type = TBaseVector;

        sdmsMatrix();
        sdmsMatrix(std::size_t n_lig, std::size_t n_col);
        sdmsMatrix(const Matrix &m);
        sdmsMatrix(const sdmsMatrix &m);
        template <class AE>
        sdmsMatrix(const boost::numeric::ublas::matrix_expression<AE> &ae);

        sdmsMatrix transpose() const;
        TBaseVector operator^(const TBaseVector &) const;
    };

    template <typename TLig, class TCol, class TValue = double>
    using SparseMatrix = sdmsMatrix<TLig, TCol, TValue, boost::numeric::ublas::mapped_matrix<TValue>, SparseVector<TCol, TValue>>;

    template <typename TLig, class TCol, class TValue = double>
    using DenseMatrix = sdmsMatrix<TLig, TCol, TValue, boost::numeric::ublas::matrix<TValue>, DenseVector<TCol, TValue>>;

} // namespace sdm

#include <sdm/utils/linear_algebra/sdms_matrix.tpp>
````

