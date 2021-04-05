
# File mapped\_vector.hpp

[**File List**](files.md) **>** [**linear\_algebra**](dir_f6794c324212297d566732725cbf26ea.md) **>** [**mapped\_vector.hpp**](mapped__vector_8hpp.md)

[Go to the documentation of this file.](mapped__vector_8hpp.md) 


````cpp

#pragma once

#include <unordered_map>
#include <cmath>
#include <string>
#include <vector>

#include <iostream>
#include <assert.h>

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/vector_impl.hpp>

namespace sdm
{
    template <typename TIndex, typename T = double>
    class MappedVector : public std::unordered_map<TIndex, T>, public VectorImpl<TIndex, T>
    {
    protected:
        T default_value_;
        std::size_t size_ = -1;

        std::pair<TIndex, T> getMin() const;
        std::pair<TIndex, T> getMax() const;

    public:
        MappedVector();
        MappedVector(T default_value);
        MappedVector(std::size_t size, T default_value);
        MappedVector(const MappedVector &v);

        T norm_1() const;
        T norm_2() const;

        T min() const;
        TIndex argmin() const;

        T max() const;
        TIndex argmax() const;

        T at(const TIndex &) const;
        T operator^(const MappedVector &) const;
        bool operator<(const MappedVector &) const;

        T dot(const MappedVector &v2) const;

        std::size_t size() const;

        T getDefault() const;

        std::vector<TIndex> getIndexes() const;

        std::string str() const;

        friend std::ostream &operator<<(std::ostream &os, const MappedVector &vect)
        {
            os << vect.str();
            return os;
        }
    };
} // namespace sdm
#include <sdm/utils/linear_algebra/mapped_vector.tpp>

namespace std
{
    template <typename S, typename V>
    struct hash<sdm::MappedVector<S, V>>
    {
        typedef sdm::MappedVector<S, V> argument_type;
        typedef std::size_t result_type;
        inline result_type operator()(const argument_type &in) const
        {
            size_t seed = 0;
            for (auto &v : in)
            {
                //Combine the hash of the current vector with the hashes of the previous ones
                sdm::hash_combine(seed, v);
            }
            return seed;
        }
    };
}
````

