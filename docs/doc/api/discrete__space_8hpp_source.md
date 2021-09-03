
# File discrete\_space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**discrete\_space.hpp**](discrete__space_8hpp.md)

[Go to the documentation of this file.](discrete__space_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <boost/bimap.hpp>

#include <sdm/types.hpp>
#include <sdm/core/joint.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/utils/struct/iterator/super_iterator.hpp>

namespace sdm
{
    class DiscreteSpace : public Space
    {
    public:
        using value_type = std::shared_ptr<Item>;
        using iterator_type = Space::iterator_type;

        DiscreteSpace();

        DiscreteSpace(const std::vector<std::shared_ptr<Item>> &items);

        template <typename T>
        DiscreteSpace(const std::vector<T> &items)
        {
            std::vector<std::shared_ptr<Item>> titems(items.begin(), items.end());
            *this = DiscreteSpace(titems);
        }

        DiscreteSpace(std::initializer_list<std::shared_ptr<Item>> vals);

        DiscreteSpace(const DiscreteSpace &copy);

        bool isDiscrete() const;
        bool isStoringItems() const;
        void storeItems(bool store_items);

        std::shared_ptr<Item> sample() const;

        std::vector<number> getDim() const;

        number getNumItems() const;

        std::vector<std::shared_ptr<Item>> getAll();

        virtual iterator_type begin();
        virtual iterator_type end();

        number getItemIndex(const std::shared_ptr<Item> &item) const;

        std::shared_ptr<Item> getItem(number index) const;

        template <typename T>
        std::shared_ptr<Item> getItemAddress(const T &item_value)
        {
            for (const auto &item : *this)
            {
                if (item_value == *std::static_pointer_cast<T>(item))
                {
                    return item;
                }
            }
            return nullptr;
        }

        bool contains(const std::shared_ptr<Item> &) const;

        int find(const std::shared_ptr<Item> &item) const;

        std::string str() const;
        std::string short_str() const;

        bool operator==(const DiscreteSpace &sp) const;
        bool operator!=(const DiscreteSpace &sp) const;

        friend std::ostream &operator<<(std::ostream &os, const DiscreteSpace &sp)
        {
            os << sp.str();
            return os;
        }

    protected:
        using items_bimap = boost::bimaps::bimap<number, std::shared_ptr<Item>>;
        using items_bimap_value = items_bimap::value_type;

        number num_items_;

        items_bimap all_items_;

        std::vector<std::shared_ptr<Item>> list_items_;

        void generateItems();
        bool isGenerated();

        bool store_items_ = true;
    };

} // namespace sdm
````

