
# File vector.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**vector.hpp**](struct_2vector_8hpp.md)

[Go to the documentation of this file.](struct_2vector_8hpp.md) 


````cpp
#pragma once

#include <iostream>
#include <vector>

namespace sdm
{
    // template <typename T>
    // using Vector = std::vector<T>;

    template <typename T>
    std::ostream &operator<<(std::ostream &os, const std::vector<T> &v)
    {
        os << "[";
        for (int i = 0; i < v.size(); ++i)
        {
            os << v[i];
            if (i != v.size() - 1)
                os << ", ";
        }
        os << "]";
        return os;
    }
}



namespace std
{
  template <typename T>
  struct hash<std::vector<T>>
  {
    typedef std::vector<T> argument_type;
    typedef std::size_t result_type;
    result_type operator()(argument_type const &in) const
    {
      size_t size = in.size();
      size_t seed = 0;
      for (size_t i = 0; i < size; i++)
        //Combine the hash of the current vector with the hashes of the previous ones
        sdm::hash_combine(seed, in[i]);
      return seed;
    }
  };
}

````

