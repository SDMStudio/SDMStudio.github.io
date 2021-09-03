
# File recursive\_map.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**recursive\_map.hpp**](recursive__map_8hpp.md)

[Go to the documentation of this file.](recursive__map_8hpp.md) 


````cpp

#pragma once

#include <boost/serialization/base_object.hpp>
#include <boost/serialization/unordered_map.hpp>
#include <unordered_map>
// #include <map>
#include <vector>

// To be modified to change the map representation to store data.
template <typename K, typename V>
using map_t = std::unordered_map<K, V>;

namespace sdm
{

    template <class T0, class T1, class... Ts>
    class RecursiveMap;

    template <class T0, class T1, class... Ts>
    using RecursiveMap_t = typename RecursiveMap<T0, T1, Ts...>::type;

    template <class T0, class T1, class... Ts>
    using value_t = typename RecursiveMap<T0, T1, Ts...>::value_type;

    template <class T0, class T1>
    class RecursiveMap<T0, T1> : public map_t<T0, T1>
    {
    public:
        using type = RecursiveMap<T0, T1>;
        using value_type = std::pair<const T0, T1>;
        using value_list_type = value_type;

        RecursiveMap() : map_t<T0, T1>() {}
        RecursiveMap(const map_t<T0, T1> &x) : map_t<T0, T1>(x) {}
        RecursiveMap(const RecursiveMap &rmap) : map_t<T0, T1>(rmap) {}
        RecursiveMap(std::initializer_list<value_type> vals) : map_t<T0, T1>(vals) {}

        void recursive_emplace(T0 v0, T1 v1);

        T1 operator()(T0 v0);

        friend std::ostream &
        operator<<(std::ostream &os, RecursiveMap<T0, T1> rmap)
        {
            os << "{ ";
            for (auto it = rmap.begin(); it != rmap.end(); ++it)
            {
                os << it->first << " : " << it->second;
                os << ((std::next(it) != rmap.end()) ? ", " : "");
            }
            os << " }";
            return os;
        }

    protected:
        friend class boost::serialization::access;

        template <class Archive>
        void serialize(Archive &archive, const unsigned int)
        {
            archive &boost::serialization::base_object<map_t<T0, T1>>(*this);
        }
    };

    template <class T0, class T1, class T2, class... Ts>
    class RecursiveMap<T0, T1, T2, Ts...> : public map_t<T0, RecursiveMap_t<T1, T2, Ts...>>
    {
    public:
        using type = RecursiveMap<T0, RecursiveMap_t<T1, T2, Ts...>>;
        using value_type = std::pair<const T0, value_t<T1, T2, Ts...>>;
        using value_list_type = std::pair<const T0, std::initializer_list<value_t<T1, T2, Ts...>>>;

        RecursiveMap() : map_t<T0, RecursiveMap_t<T1, T2, Ts...>>() {}
        RecursiveMap(const map_t<T0, RecursiveMap_t<T1, T2, Ts...>> &x) : map_t<T0, RecursiveMap_t<T1, T2, Ts...>>(x) {}
        RecursiveMap(const RecursiveMap &rmap) : map_t<T0, RecursiveMap_t<T1, T2, Ts...>>(rmap) {}
        RecursiveMap(std::initializer_list<value_list_type> vals) : map_t<T0, RecursiveMap_t<T1, T2, Ts...>>()
        {
            for (const auto &v : vals)
            {
                RecursiveMap_t<T1, T2, Ts...> tmp(v.second);
                this->emplace(v.first, tmp);
            }
        }

        void recursive_emplace(T0 v0, T1 v1, T2 v2, Ts... vs);

        RecursiveMap<T1, T2, Ts...> operator()(T0 v0);

        auto operator()(T0 v0, T1 v1, Ts... vs);

        friend std::ostream &operator<<(std::ostream &os, RecursiveMap<T0, T1, T2, Ts...> rmap)
        {
            os << "{ ";
            for (auto it = rmap.begin(); it != rmap.end(); ++it)
            {
                os << it->first << " : " << it->second;
                os << ((std::next(it) != rmap.end()) ? ", " : "");
            }
            os << " }";
            return os;
        }

    protected:
        friend class boost::serialization::access;

        template <class Archive>
        void serialize(Archive &archive, const unsigned int)
        {
            archive &boost::serialization::base_object<map_t<T0, RecursiveMap_t<T1, T2, Ts...>>>(*this);
        }
    };

} // namespace sdm

#include <sdm/utils/struct/recursive_map.tpp>
````

