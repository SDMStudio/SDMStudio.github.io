
# File function\_iterator.hpp

[**File List**](files.md) **>** [**iterator**](dir_60a0a37fb281f3cd280189dcd0add656.md) **>** [**function\_iterator.hpp**](function__iterator_8hpp.md)

[Go to the documentation of this file.](function__iterator_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/joint.hpp>
#include <sdm/core/item.hpp>
#include <sdm/utils/struct/iterator.hpp>
#include <sdm/utils/struct/iterator/combination_iterator.hpp>

namespace sdm
{
    namespace iterator
    {
        template <typename TFunction>
        class FunctionIterator : public ItemIterator,
                                 public std::enable_shared_from_this<FunctionIterator<TFunction>>
        {
        public:
            using single_iterator_type = std::shared_ptr<ItemIterator>;

            FunctionIterator();

            FunctionIterator(const std::vector<std::shared_ptr<Item>> &possible_inputs,
                             const std::vector<std::shared_ptr<ItemIterator>> &output_begin_iterators,
                             const std::vector<std::shared_ptr<ItemIterator>> &output_end_iterators);

            std::shared_ptr<ItemIterator> operator++();
            std::shared_ptr<ItemIterator> operator+=(number n);
            std::shared_ptr<ItemIterator> operator+(number n) const;
            bool operator==(const std::shared_ptr<ItemIterator> &other) const;
            bool operator!=(const std::shared_ptr<ItemIterator> &other) const;
            std::shared_ptr<Item> &operator*();
            std::shared_ptr<Item> *operator->();
            std::shared_ptr<ItemIterator> copy() const;

        protected:
            std::shared_ptr<ItemIterator> output_iterator_;

            std::vector<std::shared_ptr<Item>> possible_inputs_;
            
            std::shared_ptr<Item> temporary_item;
        };
    } // namespace iterator

} // namespace sdm
#include <sdm/utils/struct/iterator/function_iterator.tpp>
````

