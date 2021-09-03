
# File tree.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**tree.hpp**](tree_8hpp.md)

[Go to the documentation of this file.](tree_8hpp.md) 


````cpp

#pragma once

#include <memory>
#include <iostream>
#include <unordered_set>
#include <unordered_map>
#include <boost/serialization/shared_ptr.hpp>
#include <boost/serialization/weak_ptr.hpp>

#include <sdm/types.hpp>
#include <sdm/tools.hpp>
#include <sdm/public/boost_serializable.hpp>

namespace sdm
{

    template <typename T>
    class Tree : public std::inheritable_enable_shared_from_this<Tree<T>>
    //public BoostSerializable<Tree<T>>
    {
    public:
        using value_type = T;
        Tree();

        Tree(number max_depth);

        Tree(std::shared_ptr<Tree<T>> parent, const T &data);

        virtual ~Tree();

        bool isOrigin() const;

        const T &getData() const;

        number getNumChildren() const;

        std::shared_ptr<Tree<T>> getChild(const T &child_item) const;

        std::vector<std::shared_ptr<Tree<T>>> getChildren() const;

        void addChild(const T &child_item);

        void addChildren(const std::vector<T> &child_items);

        std::shared_ptr<Tree<T>> getParent() const;

        std::shared_ptr<Tree<T>> getOrigin();

        number getDepth() const;

        number getMaxDepth() const;

        void setMaxDepth(number) const;

        std::string str() const;

        std::shared_ptr<Tree<T>> getptr();

        template <class Archive>
        void serialize(Archive &archive, const unsigned int);

        friend std::ostream &operator<<(std::ostream &os, Tree<T> &tree)
        {
            os << tree.str();
            return os;
        }

    protected:
        number depth_ = 0;

        number max_depth_ = std::numeric_limits<number>::max();

        T data_;

        std::weak_ptr<Tree<T>> origin_;

        std::weak_ptr<Tree<T>> parent_;

        std::map<T, std::shared_ptr<Tree<T>>> children_;

        bool is_origin = false;
    };

} // namespace sdm

#include <sdm/utils/struct/tree.tpp>
````

