
# File vector.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**vector.hpp**](linear__algebra_2vector_8hpp.md)

[Go to the documentation of this file.](linear__algebra_2vector_8hpp.md) 


````cpp
/*=============================================================================
Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <boost/numeric/ublas/vector.hpp>
#include <boost/numeric/ublas/io.hpp>

#include <eigen3/Eigen/Sparse>
#include <eigen3/Eigen/Dense>

#include <assert.h>

#include <sdm/types.hpp>



namespace sdm{

  template<typename type, typename value>
  class vector{
  protected:
    size_t _size_;

    type container;

  public:
    vector();

    vector(size_t);

    vector(const vector&);

    ~vector();

    value sum();


    value norm_2() const;

    value norm_1() const;

    value norm_sawtooth(const vector&) const;


    value min() const;


    value max() const;


    size_t size() const;

    void resize(size_t);

    void init(value);

    vector transpose() const;

    const type& getContainer() const;

    void setContainer(const type&);

    value& operator[](size_t);

    value operator[](size_t) const;

    friend const vector& operator/=(vector& arg1, const value& arg2){
      assert( arg2 != 0 );
      arg1.container /= arg2;
      return arg1;
    }

    friend vector operator*(const value& arg1, const vector& arg2){
        vector vnew;
        vnew.setContainer( arg1 * arg2.getContainer() );
        return vnew;
    }

    friend std::ostream& operator<<(std::ostream& os, const vector& arg){
      #ifdef EIGEN
        return os << arg.getContainer().transpose();
      #endif
      #ifdef BOOST
        return os << arg.getContainer();
      #endif
    }

    friend const vector& operator+=(vector& arg1, const vector& arg2){
      arg1.setContainer( arg1.getContainer() + arg2.getContainer() );
      return arg1;
    }

    friend const vector& operator-=(vector& arg1, const vector& arg2){
      arg1.setContainer( arg1.getContainer() - arg2.getContainer() );
      return arg1;
    }

    value operator^(const vector<type, value>&) const;

    bool operator==(const vector<type, value>&) const;
  };



  #ifdef EIGEN
      using Vector = class vector<Eigen::VectorXd, double>;
      using SparseVector = class vector<Eigen::SparseVector<double>, double>;
  #endif


  #ifdef BOOST
      using Vector = class vector<boost::numeric::ublas::vector<double>, double>;
  #endif

}
````

