
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

namespace sdm
{
    template <typename TItem>
    class DiscreteSpace : public Space
    {
    protected:
        typedef boost::bimaps::bimap<number, TItem> items_bimap;
        typedef typename items_bimap::value_type items_bimap_value;

        number num_items_;

        items_bimap all_items_;

    public:
        using value_type = TItem;

        DiscreteSpace();

        // DiscreteSpace(number num_items);

        DiscreteSpace(const std::vector<TItem> &items);

        DiscreteSpace(const DiscreteSpace<TItem> &copy);
        
        DiscreteSpace(std::initializer_list<TItem> vals);

        bool isDiscrete() const;

        TItem sample() const;

        std::vector<number> getDim() const;

        number getNumItems() const;

        std::vector<TItem> getAll();

        number getItemIndex(const TItem &item) const;

        TItem getItem(number index) const;

        std::string str() const;

        DiscreteSpace &operator=(const DiscreteSpace &sp);

        bool operator==(const DiscreteSpace &sp) const;
        bool operator!=(const DiscreteSpace &sp) const;

        friend std::ostream &operator<<(std::ostream &os, const DiscreteSpace &sp)
        {
            os << sp.str();
            return os;
        }
    };
} // namespace sdm

#include <sdm/core/space/discrete_space.tpp>
````

