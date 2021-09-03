
# File iterator.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**iterator.hpp**](iterator_8hpp.md)

[Go to the documentation of this file.](iterator_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/item.hpp>

namespace sdm
{
    template <typename TItem>
    class Iterator
    {
    public:
        using item_type = TItem;

        virtual ~Iterator() {}

        virtual std::shared_ptr<Iterator<TItem>> copy() const = 0;

        virtual std::shared_ptr<Iterator> operator++() = 0;

        virtual std::shared_ptr<Iterator<TItem>> operator+=(number n) = 0;

        virtual std::shared_ptr<Iterator<TItem>> operator+(number n) const = 0;

        virtual bool operator==(const std::shared_ptr<Iterator> &other) const = 0;

        virtual bool operator!=(const std::shared_ptr<Iterator> &other) const = 0;

        virtual TItem &operator*() = 0;

        virtual TItem *operator->() = 0;

        friend bool operator==(const std::shared_ptr<Iterator> &iterator1, const std::shared_ptr<Iterator> &iterator2)
        {
            return iterator1->operator==(iterator2);
        }

        friend bool operator!=(const std::shared_ptr<Iterator> &iterator1, const std::shared_ptr<Iterator> &iterator2)
        {
            return iterator1->operator!=(iterator2);
        }

        friend std::shared_ptr<Iterator> operator++(const std::shared_ptr<Iterator> &iterator)
        {
            return iterator->operator++();
        }

        friend TItem &operator*(const std::shared_ptr<Iterator> &iterator)
        {
            return iterator->operator*();
        }

        // friend TItem *operator->(const std::shared_ptr<iterator> &iterator)
        // {
        //     return iterator->operator->();
        // }
    };

    using ItemIterator = Iterator<std::shared_ptr<Item>>;
} // namespace sdm
````

