
# File graph.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**graph.hpp**](graph_8hpp.md)

[Go to the documentation of this file.](graph_8hpp.md) 


````cpp
#pragma once

#include <unordered_set>
#include <unordered_map>
#include <memory>
#include <iostream>
#include <boost/serialization/set.hpp>

// #include <sdm/utils/struct/node.hpp>
#include <sdm/types.hpp>
#include <sdm/tools.hpp>
#include <sdm/utils/struct/graph_node.hpp>
#include <sdm/public/boost_serializable.hpp>

namespace sdm
{

    template <typename TNode, typename TEdge>
    class Graph : public std::enable_shared_from_this<Graph<TNode, TEdge>>,
                   public BoostSerializable<Graph<TNode, TEdge>>
    {
    public:
        Graph();

        virtual ~Graph();

        std::shared_ptr<GraphNode<TNode, TEdge>> getNode(const TNode &belief) const;

        void addNode(const TNode &node_value);

        number getNumNodes() const;

        std::shared_ptr<GraphNode<TNode, TEdge>> getSuccessor(const TNode &node, const TEdge &edge) const;
        std::shared_ptr<GraphNode<TNode, TEdge>> getPredecessor(const TNode &node, const TEdge &edge) const;

        void addSuccessor(const TNode &node_value, const TEdge &edge_value, const TNode &succ_node_value);

        std::string str() const;
        std::string node_str() const;

        std::shared_ptr<Graph> getptr();

        template <class Archive>
        void serialize(Archive &archive, const unsigned int);

        friend std::ostream &operator<<(std::ostream &os, Graph &graph)
        {
            os << graph.str();
            return os;
        }

        bool contains(const TNode &node_value) const;

    public:
        std::unordered_map<TNode, std::shared_ptr<GraphNode<TNode, TEdge>>> node_space_;
    };

} // namespace sdm

#include <sdm/utils/struct/graph.tpp>
````

