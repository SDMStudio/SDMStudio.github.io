
<NavBar active_item_id="2"/>

# Class sdm::NDPOMDP::Node


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**NDPOMDP**](classsdm_1_1NDPOMDP.md) **>** [**Node**](classsdm_1_1NDPOMDP_1_1Node.md)





* `#include <ndpomdp.hpp>`













## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::vector&lt; [**agent**](namespacesdm.md#typedef-agent) &gt; | [**children**](classsdm_1_1NDPOMDP_1_1Node.md#variable-children)  <br> |
|  [**agent**](namespacesdm.md#typedef-agent) | [**id**](classsdm_1_1NDPOMDP_1_1Node.md#variable-id)  <br> |
|  std::unordered\_set&lt; [**agent**](namespacesdm.md#typedef-agent) &gt; | [**neighbors**](classsdm_1_1NDPOMDP_1_1Node.md#variable-neighbors)  <br> |
|  std::map&lt; std::string, double &gt; | [**observationFunction**](classsdm_1_1NDPOMDP_1_1Node.md#variable-observationfunction)  <br> |
|  int | [**parent**](classsdm_1_1NDPOMDP_1_1Node.md#variable-parent)   = = -2<br> |
|  std::map&lt; std::string, double &gt; | [**rewardFunction**](classsdm_1_1NDPOMDP_1_1Node.md#variable-rewardfunction)  <br> |
|  std::map&lt; std::string, double &gt; | [**transitionFunction**](classsdm_1_1NDPOMDP_1_1Node.md#variable-transitionfunction)  <br> |
|  double \* | [**upperBounds**](classsdm_1_1NDPOMDP_1_1Node.md#variable-upperbounds)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Node**](classsdm_1_1NDPOMDP_1_1Node.md#function-node-1-2) () <br> |
|   | [**Node**](classsdm_1_1NDPOMDP_1_1Node.md#function-node-2-2) ([**agent**](namespacesdm.md#typedef-agent) id, std::unordered\_set&lt; [**agent**](namespacesdm.md#typedef-agent) &gt; neighbors) <br> |








## Public Attributes Documentation


### variable children 


```cpp
std::vector<agent> sdm::NDPOMDP::Node::children;
```



### variable id 


```cpp
agent sdm::NDPOMDP::Node::id;
```



### variable neighbors 


```cpp
std::unordered_set<agent> sdm::NDPOMDP::Node::neighbors;
```



### variable observationFunction 


```cpp
std::map<std::string, double> sdm::NDPOMDP::Node::observationFunction;
```



### variable parent 


```cpp
int sdm::NDPOMDP::Node::parent;
```



### variable rewardFunction 


```cpp
std::map<std::string, double> sdm::NDPOMDP::Node::rewardFunction;
```



### variable transitionFunction 


```cpp
std::map<std::string, double> sdm::NDPOMDP::Node::transitionFunction;
```



### variable upperBounds 


```cpp
double* sdm::NDPOMDP::Node::upperBounds;
```


## Public Functions Documentation


### function Node [1/2]


```cpp
sdm::NDPOMDP::Node::Node () 
```



### function Node [2/2]


```cpp
sdm::NDPOMDP::Node::Node (
    agent id,
    std::unordered_set< agent > neighbors
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/ndpomdp.hpp`