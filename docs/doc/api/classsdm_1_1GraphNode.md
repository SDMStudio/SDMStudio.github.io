
# Class sdm::GraphNode

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TNode typename TNode, typename TEdge typename TEdge&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**GraphNode**](classsdm_1_1GraphNode.md)



_Node of graphs._ [More...](#detailed-description)

* `#include <graph_node.hpp>`



Inherits the following classes: std::enable_shared_from_this< GraphNode< TNode, TEdge > >,  [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)












## Public Attributes

| Type | Name |
| ---: | :--- |
|  TNode | [**data\_**](classsdm_1_1GraphNode.md#variable-data-)  <br>_data of the current node_  |
|  std::unordered\_map&lt; TEdge, std::weak\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; &gt; | [**predecessors**](classsdm_1_1GraphNode.md#variable-predecessors)  <br>_List of predecessors._  |
|  std::unordered\_map&lt; TEdge, std::weak\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; &gt; | [**successors**](classsdm_1_1GraphNode.md#variable-successors)  <br>_The map from edge value to successor._  |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**GraphNode**](classsdm_1_1GraphNode.md#function-graphnode-1-2) () <br>_Default constructor object._  |
|   | [**GraphNode**](classsdm_1_1GraphNode.md#function-graphnode-2-2) (const TNode & data) <br>_Construct a graph with an initial node\*._  |
|  void | [**addPredecessor**](classsdm_1_1GraphNode.md#function-addpredecessor) (const TEdge & edge\_value, const std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; & node\_value) <br>_Add a predecessor to the current node._  |
|  void | [**addSuccessor**](classsdm_1_1GraphNode.md#function-addsuccessor) (const TEdge & edge\_value, const std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; & node\_value) <br>_Add a successor node._  |
|  TNode && | [**data**](classsdm_1_1GraphNode.md#function-data) () const<br> |
|  TNode | [**getData**](classsdm_1_1GraphNode.md#function-getdata) () const<br>_Get the value of the current node._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumPredecessors**](classsdm_1_1GraphNode.md#function-getnumpredecessors) () const<br>_Get the number of predecessors._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumSuccessors**](classsdm_1_1GraphNode.md#function-getnumsuccessors) () const<br>_Get the number of successors._  |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; | [**getPredecessor**](classsdm_1_1GraphNode.md#function-getpredecessor) (const TEdge & edge) const<br>_Get the set of all predecessors._  |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; | [**getSuccessor**](classsdm_1_1GraphNode.md#function-getsuccessor) (const TEdge & edge) const<br>_Get the successor following a given edge._  |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md) &gt; | [**getptr**](classsdm_1_1GraphNode.md#function-getptr) () <br> |
|  void | [**serialize**](classsdm_1_1GraphNode.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  void | [**setData**](classsdm_1_1GraphNode.md#function-setdata) (const TNode & data) <br> |
|  std::string | [**str**](classsdm_1_1GraphNode.md#function-str) () const<br> |
| virtual  | [**~GraphNode**](classsdm_1_1GraphNode.md#function-graphnode) () <br>_Destructor of_ [_**GraphNode**_](classsdm_1_1GraphNode.md) _._ |

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


[**GraphNode**](classsdm_1_1GraphNode.md) class is provide to give the user the possibility to transit directly on them. In fact, the class keep all the successors of a node in its attribute.



**Template parameters:**


* `TNode` the type of the data contains in each node 
* `TEdge` the type of the edges between two nodes 



    
## Public Attributes Documentation


### variable data\_ 


```cpp
TNode sdm::GraphNode< TNode, TEdge >::data_;
```



### variable predecessors 


```cpp
std::unordered_map<TEdge, std::weak_ptr<GraphNode> > sdm::GraphNode< TNode, TEdge >::predecessors;
```



### variable successors 


```cpp
std::unordered_map<TEdge, std::weak_ptr<GraphNode> > sdm::GraphNode< TNode, TEdge >::successors;
```


## Public Functions Documentation


### function GraphNode [1/2]


```cpp
sdm::GraphNode::GraphNode () 
```



### function GraphNode [2/2]


```cpp
sdm::GraphNode::GraphNode (
    const TNode & data
) 
```




**Parameters:**


* `data` 



        

### function addPredecessor 


```cpp
void sdm::GraphNode::addPredecessor (
    const TEdge & edge_value,
    const std::shared_ptr< GraphNode > & node_value
) 
```




**Parameters:**


* `node_value` the predecessor node value 



        

### function addSuccessor 


```cpp
void sdm::GraphNode::addSuccessor (
    const TEdge & edge_value,
    const std::shared_ptr< GraphNode > & node_value
) 
```




**Parameters:**


* `edge` the edge 
* `node` the successor node value 



        

### function data 


```cpp
TNode && sdm::GraphNode::data () const
```



### function getData 


```cpp
TNode sdm::GraphNode::getData () const
```




**Returns:**

the address of the value 




        

### function getNumPredecessors 


```cpp
number sdm::GraphNode::getNumPredecessors () const
```



### function getNumSuccessors 


```cpp
number sdm::GraphNode::getNumSuccessors () const
```



### function getPredecessor 


```cpp
std::shared_ptr< GraphNode > sdm::GraphNode::getPredecessor (
    const TEdge & edge
) const
```




**Returns:**

the set of predecessors 




        

### function getSuccessor 


```cpp
std::shared_ptr< GraphNode > sdm::GraphNode::getSuccessor (
    const TEdge & edge
) const
```




**Parameters:**


* `edge` a specific edge 



**Returns:**

the address of the successor's node 




        

### function getptr 


```cpp
std::shared_ptr< GraphNode > sdm::GraphNode::getptr () 
```



### function serialize 


```cpp
template<class Archive class Archive>
void sdm::GraphNode::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function setData 


```cpp
void sdm::GraphNode::setData (
    const TNode & data
) 
```



### function str 


```cpp
std::string sdm::GraphNode::str () const
```



### function ~GraphNode 


```cpp
virtual sdm::GraphNode::~GraphNode () 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::GraphNode::operator<< (
    std::ostream & os,
    GraphNode & graph
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/graph_node.hpp`