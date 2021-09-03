
# File multi\_discrete\_space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**multi\_discrete\_space.hpp**](multi__discrete__space_8hpp.md)

[Go to the documentation of this file.](multi__discrete__space_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <assert.h>
#include <boost/bimap.hpp>

#include <sdm/types.hpp>
#include <sdm/core/item.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{
    class MultiDiscreteSpace : public DiscreteSpace,
                               public Joint<std::shared_ptr<Space>>
    {
    public:
        using value_type = Joint<std::shared_ptr<Item>>;
        using iterator_type = DiscreteSpace::iterator_type;

        MultiDiscreteSpace();

        MultiDiscreteSpace(const std::vector<std::shared_ptr<Space>> &sub_spaces, bool store_items = true);

        MultiDiscreteSpace(const std::vector<std::vector<std::shared_ptr<Item>>> &values, bool store_items = true);

        MultiDiscreteSpace(const MultiDiscreteSpace &copy);

        template <bool TBool = std::is_integral<std::shared_ptr<Item>>::value>
        MultiDiscreteSpace(const std::enable_if_t<TBool, std::vector<std::shared_ptr<Item>>> &num_items);

        number getItemIndex(number ag_id, const std::shared_ptr<Item> &item) const;

        std::shared_ptr<Item> getItem(number index) const;

        std::shared_ptr<Item> getItem(number ag_id, number item_index) const;

        number getNumSpaces() const;

        std::shared_ptr<Space> getSpace(number index) const;

        template <bool TBool = std::is_integral<std::shared_ptr<Item>>::value>
        void setSpaces(const std::enable_if_t<TBool, std::vector<std::shared_ptr<Item>>> &num_items);
        void setSpaces(const std::vector<std::vector<std::shared_ptr<Item>>> &);
        void setSpaces(const std::vector<std::shared_ptr<Space>> &spaces);

        number getJointItemIndex(std::shared_ptr<Joint<std::shared_ptr<Item>>> &jitem) const;
        // number getJointItemIndex(const std::vector<std::shared_ptr<Item>> &) const;

        std::shared_ptr<Item> getJointItem(number) const;

        std::vector<std::shared_ptr<Item>> getAll();

        std::string str() const;

        virtual iterator_type begin();
        virtual iterator_type end();

        MultiDiscreteSpace &operator=(const MultiDiscreteSpace &);
        bool operator==(const MultiDiscreteSpace &other) const;
        bool operator!=(const MultiDiscreteSpace &other) const;

        bool contains(const std::shared_ptr<Item> &) const;

        friend std::ostream &operator<<(std::ostream &os, const MultiDiscreteSpace &sp)
        {
            os << sp.str();
            return os;
        }

    protected:
        using jitems_bimap = DiscreteSpace::items_bimap;
        using jitems_bimap_value = jitems_bimap::value_type;

        void setNumJItems(number);

        inline std::shared_ptr<DiscreteSpace> cast(const std::shared_ptr<Space> &space) const;

    };

} // namespace sdm
````

