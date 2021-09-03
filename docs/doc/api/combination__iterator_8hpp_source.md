
# File combination\_iterator.hpp

[**File List**](files.md) **>** [**iterator**](dir_60a0a37fb281f3cd280189dcd0add656.md) **>** [**combination\_iterator.hpp**](combination__iterator_8hpp.md)

[Go to the documentation of this file.](combination__iterator_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/joint.hpp>
#include <sdm/core/item.hpp>
#include <sdm/utils/struct/iterator.hpp>

namespace sdm
{
    namespace iterator
    {
        class CombinationIterator : public ItemIterator,
                                    public std::enable_shared_from_this<CombinationIterator>
        {
        public:
            using single_iterator_type = std::shared_ptr<ItemIterator>;

            CombinationIterator();

            CombinationIterator(const std::vector<single_iterator_type> &begin_iterators,
                                const std::vector<single_iterator_type> &end_iterators);

            std::shared_ptr<ItemIterator> operator++();
            std::shared_ptr<ItemIterator> operator+=(number n);
            std::shared_ptr<ItemIterator> operator+(number n) const;
            bool operator==(const std::shared_ptr<ItemIterator> &other) const;
            bool operator!=(const std::shared_ptr<ItemIterator> &other) const;
            std::shared_ptr<Item> &operator*();
            std::shared_ptr<Item> *operator->();

            std::shared_ptr<ItemIterator> copy() const;

        protected:
            std::vector<single_iterator_type> begin_iterators_, current_iterators_, end_iterators_;
            std::shared_ptr<Item> temporary_item;
            
            void debug();
        };
    } // namespace iterator

} // namespace sdm
````

