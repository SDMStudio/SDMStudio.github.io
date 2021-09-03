
# File base\_item.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**base\_item.hpp**](base__item_8hpp.md)

[Go to the documentation of this file.](base__item_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/item.hpp>

namespace sdm
{

    template <class TItem>
    struct BaseItem : public TItem, public Item
    {
    public:
        BaseItem();
        BaseItem(TItem item);
        virtual ~BaseItem();


        bool isBaseItem();
        std::string str() const;

        friend class boost::serialization::access;

        template <class Archive>
        void serialize(Archive &archive, const unsigned int)
        {
            using boost::serialization::make_nvp;

            archive &boost::serialization::base_object<TItem>(*this);
        }

    };

    using StringItem = BaseItem<std::string>;
    using NumberItem = BaseItem<number>;
} // namespace sdm


#include <sdm/core/base_item.tpp>
````

