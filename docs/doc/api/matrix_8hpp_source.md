
# File matrix.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**matrix.hpp**](matrix_8hpp.md)

[Go to the documentation of this file.](matrix_8hpp.md) 


````cpp
/*=============================================================================
Copyright (c) 2016 Jilles Steeve Dibangoye, Olivier Buffet, Charles Bessonet
==============================================================================*/
#pragma once

#include <boost/numeric/ublas/matrix_sparse.hpp>
#include <boost/numeric/ublas/matrix_proxy.hpp>
#include <boost/numeric/ublas/matrix.hpp>
#include <boost/numeric/ublas/vector.hpp>
#include <boost/numeric/ublas/io.hpp>

#include <eigen3/Eigen/Sparse>
#include <eigen3/Eigen/Dense>
#include <eigen3/Eigen/Core>
#include <cmath>

#include <sdm/utils/linear_algebra/vector.hpp>


namespace sdm{

  template<typename mtype, typename vtype, typename value>
  class matrix {
  public:

    matrix();

    matrix(size_t, size_t);

    ~matrix();

    matrix transpose() const;

    void resize(size_t, size_t);

    value& operator()(size_t, size_t);

    value operator()(size_t, size_t) const;

    size_t rows();

    vector<vtype, value> row(size_t);

    size_t cols();

    void compress();


    friend std::ostream& operator<<(std::ostream& os, const matrix& arg){
      return os << arg.container;
    }

    friend const matrix& operator+=(matrix& arg1, const matrix& arg2){
      arg1.container += arg2.container;
      return arg1;
    }

    mtype container;
  };

  template<typename mtype, typename vtype, typename value>
  vector<vtype, value> operator*(const matrix<mtype, vtype, value>&, const vector<vtype, value>&);

  template<typename mtype, typename vtype, typename value>
  matrix<mtype, vtype, value> operator*(const matrix<mtype, vtype, value>&, const matrix<mtype, vtype, value>&);

  template<typename mtype, typename vtype, typename value>
  bool operator==(const matrix<mtype, vtype, value>&, const matrix<mtype, vtype, value>&);


  template<typename mtype, typename vtype, typename value>
  matrix<mtype, vtype, value> operator^(const vector<vtype, value>&, const matrix<mtype, vtype, value>&);


  #ifdef EIGEN
    #ifdef DENSE
      using Matrix = class matrix<Eigen::MatrixXd, Eigen::VectorXd, double>;
    #endif
    #ifdef SPARSE
      using Matrix = class matrix<Eigen::SparseMatrix<double, Eigen::RowMajor>, Eigen::SparseVector<double>, double>;
    #endif
  #endif

  #ifdef BOOST
    #ifdef DENSE
      using Matrix = class matrix<boost::numeric::ublas::matrix<double>, boost::numeric::ublas::vector<double>, double>;
    #endif
    #ifdef SPARSE
      using Matrix = class matrix<boost::numeric::ublas::mapped_matrix<double>, boost::numeric::ublas::vector<double>, double>;
    #endif
  #endif

}
````

