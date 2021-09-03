
# File set.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**set.hpp**](set_8hpp.md)

[Go to the documentation of this file.](set_8hpp.md) 


````cpp
#include <sdm/types.hpp>

#include <functional>
#include <unordered_set>

namespace sdm
{
    template <class T>
    struct equal_container
    {
        virtual bool operator()(const std::shared_ptr<T> &, const std::shared_ptr<T> &) const;
    };

    template <class T>
    struct hash_container
    {
        virtual size_t operator()(const std::shared_ptr<T> &) const;
    };

    template <class T>
    struct Set : public std::unordered_set<std::shared_ptr<T>, hash_container<T>, equal_container<T>>
    {
        Set();
        bool contains(std::shared_ptr<T> &);

        friend std::ostream &operator<<(std::ostream &os, const vector_container &container)
        {
            os << "<vector_container size=" << container.size() << ">" << std::endl;
            for (const auto &entry : container)
                os << "\t"
                   << "<belief values=" << *entry << " @=" << entry << ">" << std::endl;
            os << "</vector_container>" << std::endl;
            return os;
        }
    };
} // namespace sdm

#include <sdm/utils/struct/set.tpp>
````

