
# File sdms\_vector.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**sdms\_vector.hpp**](sdms__vector_8hpp.md)

[Go to the documentation of this file.](sdms__vector_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <boost/numeric/ublas/vector.hpp>
#include <boost/numeric/ublas/vector_sparse.hpp>
#include <boost/numeric/ublas/io.hpp>

#include <assert.h>

#include <sdm/utils/linear_algebra/vector_interface.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>

namespace sdm
{
  template <class I, class T, class TBaseVector>
  class sdmsVector : public VectorInterface<I, T>
  {
  public:
    // using array_type = typename TBaseVector::array_type;
    // using value_type = typename array_type::value_type;

    static double PRECISION;

    sdmsVector();

    sdmsVector(std::shared_ptr<std::unordered_map<I, size_t>>, std::shared_ptr<std::unordered_map<I, T>>, double = 0);

    sdmsVector(std::vector<I>, std::vector<T>, double = 0);

    virtual ~sdmsVector() {}

    T at(const I &) const;
    T getValueAt(const I &) const;
    void setValueAt(const I &, const T &value);
    void addValueAt(const I &, const T &value); // ps: added by baris, not tested.

    T sum() const;
    T norm_1() const;
    T norm_2() const;

    T min();
    I argmin();
    T max();
    I argmax();

    // sdmsVector transpose() const;

    const std::vector<I> &getIndexes() const;

    bool operator<=(const sdmsVector &) const;
    bool operator==(const sdmsVector &) const;
    bool operator!=(const sdmsVector &) const;
    bool is_equal(const sdmsVector &other, double precision) const;

    // template <class AE>
    T dot(const sdmsVector &v2) const;

    // template <class AE>
    T operator^(const sdmsVector &v2) const;

    std::string str() const;

    auto begin() const { return this->iterator_.begin(); }
    auto end() const { return this->iterator_.end(); }

    template <class Archive>
    void serialize(Archive &archive, const unsigned int);

    size_t size() const;
    std::shared_ptr<std::unordered_map<I, size_t>> getMapElementToIndex() const;

  protected:
    std::vector<I> vector_element_;
    // std::shared_ptr<std::unordered_map<I, size_t>> map_index_to_value_;
    std::shared_ptr<std::unordered_map<I, size_t>> map_element_to_index_;

    // std::map<I, T> iterator_;

    TBaseVector tbasevector_;

    std::pair<I, T> getMin() const;
    std::pair<I, T> getMax() const;

    // friend sdmsVector operator*(const T &arg1, const sdmsVector &arg2)
    // {
    //   sdmsVector vnew = arg1 * static_cast<TBaseVector>(arg2);
    //   vnew.setIndexes(arg2.getIndexes());
    //   return vnew;
    // }
  };

  template <typename I = size_t, typename T = double>
  using SparseVector = sdmsVector<I, T, boost::numeric::ublas::mapped_vector<T>>;

  template <typename I = size_t, typename T = double>
  using DenseVector = sdmsVector<I, T, boost::numeric::ublas::vector<T>>;

} // namespace sdm

#include <sdm/utils/linear_algebra/sdms_vector.tpp>
````

