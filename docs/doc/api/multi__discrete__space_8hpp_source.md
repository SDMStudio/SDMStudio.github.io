
# File multi\_discrete\_space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**multi\_discrete\_space.hpp**](multi__discrete__space_8hpp.md)

[Go to the documentation of this file.](multi__discrete__space_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <assert.h>
#include <boost/bimap.hpp>

#include <sdm/types.hpp>
#include <sdm/core/space/multi_space.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{
    template <typename TItem>
    class MultiDiscreteSpace : public virtual MultiSpace<DiscreteSpace<TItem>>, public DiscreteSpace<Joint<TItem>>
    {
    protected:
        typedef boost::bimaps::bimap<number, Joint<TItem>> jitems_bimap;
        typedef typename jitems_bimap::value_type jitems_bimap_value;

        void generateJointItems();

        void setNumJItems(number);

    public:
        using value_type = Joint<TItem>;

        MultiDiscreteSpace();
        
        MultiDiscreteSpace(const std::vector<std::shared_ptr<DiscreteSpace<TItem>>> &);

        MultiDiscreteSpace(const std::vector<std::vector<TItem>> &values);

        MultiDiscreteSpace(const MultiDiscreteSpace<TItem> &copy);

        MultiDiscreteSpace(const std::vector<DiscreteSpace<TItem>> &);

        template <bool TBool = std::is_integral<TItem>::value>
        MultiDiscreteSpace(const std::enable_if_t<TBool, std::vector<TItem>> &num_items);

        number joint2single(const std::vector<TItem> &jitem) const;

        std::vector<TItem> single2joint(number sitem) const;

        number getNumJointItems() const;

        number getItemIndex(number ag_id, const TItem &item) const;

        TItem getItem(number) const;

        TItem getItem(number ag_id, number item_index) const;

        template <bool TBool = std::is_integral<TItem>::value>
        void setSpaces(const std::enable_if_t<TBool, std::vector<TItem>> &num_items);
        void setSpaces(const std::vector<std::vector<TItem>> &);
        void setSpaces(const std::vector<std::shared_ptr<DiscreteSpace<TItem>>> &spaces);
        void setSpaces(const std::vector<DiscreteSpace<TItem>> &spaces);


        number getJointItemIndex(Joint<TItem> &jitem) const;
        number getJointItemIndex(const std::vector<TItem> &) const;

        Joint<TItem> getJointItem(number) const;

        std::vector<Joint<TItem>> getAll();

        std::string str() const;

        MultiDiscreteSpace<TItem> &operator=(const MultiDiscreteSpace<TItem> &);

        friend std::ostream &operator<<(std::ostream &os, const MultiDiscreteSpace<TItem> &sp)
        {
            os << sp.str();
            return os;
        }
    };

} // namespace sdm

#include <sdm/core/space/multi_discrete_space.tpp>
````

