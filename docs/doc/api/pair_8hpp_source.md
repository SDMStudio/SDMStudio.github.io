
# File pair.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**pair.hpp**](pair_8hpp.md)

[Go to the documentation of this file.](pair_8hpp.md) 


````cpp
#pragma once

#include <iostream>
#include <sdm/utils/struct/vector.hpp>

namespace sdm
{
    template <typename T, typename U>
    using Pair = std::pair<T, U>;

    template <typename T, typename U>
    std::ostream &operator<<(std::ostream &os, const sdm::Pair<T, U> &pair)
    {
        os << "Pair{" << pair.first << ", " << pair.second << "}";
        return os;
    }
}

namespace std
{
    template <typename T, typename U>
    struct hash<sdm::Pair<T, U>>
    {
        typedef sdm::Pair<T, U> argument_type;
        typedef std::size_t result_type;
        inline result_type operator()(const argument_type &in) const
        {
            size_t seed = 0;
            sdm::hash_combine(seed, in.first);
            sdm::hash_combine(seed, in.second);
            return seed;
        }
    };
}
````

