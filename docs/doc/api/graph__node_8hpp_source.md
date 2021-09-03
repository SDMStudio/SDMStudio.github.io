
# File graph\_node.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**graph\_node.hpp**](graph__node_8hpp.md)

[Go to the documentation of this file.](graph__node_8hpp.md) 


````cpp
#pragma once

#include <iostream>
#include <memory>
#include <unordered_set>
#include <unordered_map>
#include <boost/serialization/set.hpp>

#include <sdm/types.hpp>
#include <sdm/tools.hpp>
#include <sdm/public/boost_serializable.hpp>

namespace sdm
{

    template <typename TNode, typename TEdge>
    class GraphNode :   public std::enable_shared_from_this<GraphNode<TNode, TEdge>>,
                        public BoostSerializable<GraphNode<TNode, TEdge>>
    {
    public:
        GraphNode();

        GraphNode(const TNode &data);

        virtual ~GraphNode();

        TNode getData() const;

        TNode &&data() const;

        void setData(const TNode &data);

        number getNumSuccessors() const;

        number getNumPredecessors() const;

        std::shared_ptr<GraphNode> getSuccessor(const TEdge &edge) const;

        std::shared_ptr<GraphNode> getPredecessor(const TEdge &edge) const;

        void addSuccessor(const TEdge &edge_value, const std::shared_ptr<GraphNode> &node_value);

        void addPredecessor(const TEdge &edge_value, const std::shared_ptr<GraphNode> &node_value);

        std::string str() const;

        std::shared_ptr<GraphNode> getptr();

        template <class Archive>
        void serialize(Archive &archive, const unsigned int);

        friend std::ostream &operator<<(std::ostream &os, GraphNode &graph)
        {
            os << graph.str();
            return os;
        }

    public:
        TNode data_;

        std::unordered_map<TEdge, std::weak_ptr<GraphNode>> successors;

        std::unordered_map<TEdge, std::weak_ptr<GraphNode>> predecessors;
    };

} // namespace sdm

#include <sdm/utils/struct/graph_node.tpp>
````

