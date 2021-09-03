
# Class sdm::Graph

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TNode, typename TEdge&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Graph**](classsdm_1_1Graph.md)



_A structure to manipulate graphs._ [More...](#detailed-description)

* `#include <graph.hpp>`



Inherits the following classes: std::enable_shared_from_this< Graph< TNode, TEdge > >,  [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)












## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; TNode, std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; &gt; | [**node\_space\_**](classsdm_1_1Graph.md#variable-node-space-)  <br>[_**Space**_](classsdm_1_1Space.md) _of nodes._ |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Graph**](classsdm_1_1Graph.md#function-graph) () <br>_Default constructor object._  |
|  void | [**addNode**](classsdm_1_1Graph.md#function-addnode) (const TNode & node\_value) <br>_Add a node in the graph._  |
|  void | [**addSuccessor**](classsdm_1_1Graph.md#function-addsuccessor) (const TNode & node\_value, const TEdge & edge\_value, const TNode & succ\_node\_value) <br> |
|  bool | [**contains**](classsdm_1_1Graph.md#function-contains) (const TNode & node\_value) const<br> |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; | [**getNode**](classsdm_1_1Graph.md#function-getnode) (const TNode & belief) const<br>_Get the node associated to a given node's value ._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumNodes**](classsdm_1_1Graph.md#function-getnumnodes) () const<br>_Get the number of node._  |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; | [**getPredecessor**](classsdm_1_1Graph.md#function-getpredecessor) (const TNode & node, const TEdge & edge) const<br> |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; | [**getSuccessor**](classsdm_1_1Graph.md#function-getsuccessor) (const TNode & node, const TEdge & edge) const<br> |
|  std::shared\_ptr&lt; [**Graph**](classsdm_1_1Graph.md) &gt; | [**getptr**](classsdm_1_1Graph.md#function-getptr) () <br> |
|  std::string | [**node\_str**](classsdm_1_1Graph.md#function-node-str) () const<br> |
|  void | [**serialize**](classsdm_1_1Graph.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  std::string | [**str**](classsdm_1_1Graph.md#function-str) () const<br> |
| virtual  | [**~Graph**](classsdm_1_1Graph.md#function-graph) () <br>_Destructor of_ [_**Graph**_](classsdm_1_1Graph.md) _(that's bad)._ |

## Public Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|   | [**BoostSerializable**](classsdm_1_1BoostSerializable.md#function-boostserializable) () <br> |
|  void | [**load**](classsdm_1_1BoostSerializable.md#function-load) (std::string filename) <br>_Load a value function from a file. The extension of the file will indicate the type of formatage for reading (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
|  void | [**save**](classsdm_1_1BoostSerializable.md#function-save) (std::string filename) <br>_Save a value function into a file. The extension of the file will indicate the type of formatage for recording (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |












## Protected Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|  void | [**serialize**](classsdm_1_1BoostSerializable.md#function-serialize) (Archive & archive, const unsigned int version) <br> |



# Detailed Description




**Template parameters:**


* `TNode` the type of the data contains in each node 
* `TEdge` the type of the edges between two nodes 



    
## Public Attributes Documentation


### variable node\_space\_ 


```cpp
std::unordered_map<TNode, std::shared_ptr<GraphNode<TNode, TEdge> > > sdm::Graph< TNode, TEdge >::node_space_;
```


## Public Functions Documentation


### function Graph 


```cpp
sdm::Graph::Graph () 
```



### function addNode 


```cpp
void sdm::Graph::addNode (
    const TNode & node_value
) 
```




**Parameters:**


* `node_value` the value of the node 



        

### function addSuccessor 


```cpp
void sdm::Graph::addSuccessor (
    const TNode & node_value,
    const TEdge & edge_value,
    const TNode & succ_node_value
) 
```



### function contains 


```cpp
bool sdm::Graph::contains (
    const TNode & node_value
) const
```



### function getNode 


```cpp
std::shared_ptr< GraphNode < TNode, TEdge > > sdm::Graph::getNode (
    const TNode & belief
) const
```




**Parameters:**


* `node_value` a specific node value 



**Returns:**

the address of the node 




        

### function getNumNodes 


```cpp
number sdm::Graph::getNumNodes () const
```



### function getPredecessor 


```cpp
std::shared_ptr< GraphNode < TNode, TEdge > > sdm::Graph::getPredecessor (
    const TNode & node,
    const TEdge & edge
) const
```



### function getSuccessor 


```cpp
std::shared_ptr< GraphNode < TNode, TEdge > > sdm::Graph::getSuccessor (
    const TNode & node,
    const TEdge & edge
) const
```



### function getptr 


```cpp
std::shared_ptr< Graph > sdm::Graph::getptr () 
```



### function node\_str 


```cpp
std::string sdm::Graph::node_str () const
```



### function serialize 


```cpp
template<class Archive class Archive>
void sdm::Graph::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function str 


```cpp
std::string sdm::Graph::str () const
```



### function ~Graph 


```cpp
virtual sdm::Graph::~Graph () 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Graph::operator<< (
    std::ostream & os,
    Graph & graph
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/graph.hpp`