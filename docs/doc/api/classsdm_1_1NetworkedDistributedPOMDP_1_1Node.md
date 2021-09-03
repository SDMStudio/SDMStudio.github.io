
# Class sdm::NetworkedDistributedPOMDP::Node

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) **>** [**Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md)





* `#include <networked_distributed_pomdp.hpp>`













## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::vector&lt; [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) &gt; | [**children**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-children)  <br> |
|  [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) | [**id**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-id)  <br> |
|  std::unordered\_set&lt; [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) &gt; | [**neighbors**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-neighbors)  <br> |
|  std::map&lt; std::string, double &gt; | [**observationFunction**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-observationfunction)  <br> |
|  int | [**parent**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-parent)   = = -2<br> |
|  std::map&lt; std::string, double &gt; | [**rewardFunction**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-rewardfunction)  <br> |
|  std::map&lt; std::string, double &gt; | [**transitionFunction**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-transitionfunction)  <br> |
|  double \* | [**upperBounds**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#variable-upperbounds)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#function-node-1-2) () <br> |
|   | [**Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md#function-node-2-2) ([**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) id, std::unordered\_set&lt; [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) &gt;) <br> |








## Public Attributes Documentation


### variable children 


```cpp
std::vector<agent> sdm::NetworkedDistributedPOMDP::Node::children;
```



### variable id 


```cpp
agent sdm::NetworkedDistributedPOMDP::Node::id;
```



### variable neighbors 


```cpp
std::unordered_set<agent> sdm::NetworkedDistributedPOMDP::Node::neighbors;
```



### variable observationFunction 


```cpp
std::map<std::string, double> sdm::NetworkedDistributedPOMDP::Node::observationFunction;
```



### variable parent 


```cpp
int sdm::NetworkedDistributedPOMDP::Node::parent;
```



### variable rewardFunction 


```cpp
std::map<std::string, double> sdm::NetworkedDistributedPOMDP::Node::rewardFunction;
```



### variable transitionFunction 


```cpp
std::map<std::string, double> sdm::NetworkedDistributedPOMDP::Node::transitionFunction;
```



### variable upperBounds 


```cpp
double* sdm::NetworkedDistributedPOMDP::Node::upperBounds;
```


## Public Functions Documentation


### function Node [1/2]


```cpp
sdm::NetworkedDistributedPOMDP::Node::Node () 
```



### function Node [2/2]


```cpp
sdm::NetworkedDistributedPOMDP::Node::Node (
    agent id,
    std::unordered_set< agent >
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/networked_distributed_pomdp.hpp`