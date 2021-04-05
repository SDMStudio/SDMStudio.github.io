
# File sdms\_vector.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**sdms\_vector.hpp**](sdms__vector_8hpp.md)

[Go to the documentation of this file.](sdms__vector_8hpp.md) 


````cpp

#pragma once
#include <boost/numeric/ublas/vector.hpp>
#include <boost/numeric/ublas/io.hpp>

#include <assert.h>

#include <sdm/utils/linear_algebra/vector_impl.hpp>

namespace sdm
{
  template <class I, class T, class TBaseVector>
  class sdmsVector : public TBaseVector, public VectorImpl<I, T>
  {
  protected:
    std::pair<I, T> getMin() const;
    std::pair<I, T> getMax() const;

  public:
    sdmsVector();
    sdmsVector(I);
    sdmsVector(I, T);
    sdmsVector(const sdmsVector &);

    void init(T);
    T at(I);

    T sum();
    T norm_1() const;
    T norm_2() const;

    T min() const;
    I argmin() const;
    T max() const;
    I argmax() const;

    bool operator<(const sdmsVector &) const;
    T operator^(const sdmsVector &) const;
    T dot(const sdmsVector &) const;

    bool operator==(const sdmsVector &) const;
    bool operator!=(const sdmsVector &) const;

    std::string str() const;
  };

  template <typename I, typename T>
  using SparseVector = sdmsVector<I, T, boost::numeric::ublas::mapped_vector<T>>;

  template <typename I, typename T>
  using DenseVector = sdmsVector<I, T, boost::numeric::ublas::vector<T>>;

} // namespace sdm

#include <sdm/utils/linear_algebra/sdms_vector.tpp>
````

