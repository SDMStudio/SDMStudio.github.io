
<NavBar active_item_id="2"/>

# Struct sdm::EpsGreedy


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**EpsGreedy**](structsdm_1_1EpsGreedy.md)





* `#include <eps_greedy.hpp>`













## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::uniform\_real\_distribution&lt; double &gt; | [**eps\_distrib**](structsdm_1_1EpsGreedy.md#variable-eps-distrib)   = = std::uniform\_real\_distribution&lt;double&gt;(0.0, 1.0)<br> |
|  float | [**epsilon\_decay**](structsdm_1_1EpsGreedy.md#variable-epsilon-decay)  <br> |
|  float | [**epsilon\_end**](structsdm_1_1EpsGreedy.md#variable-epsilon-end)  <br> |
|  float | [**epsilon\_start**](structsdm_1_1EpsGreedy.md#variable-epsilon-start)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**EpsGreedy**](structsdm_1_1EpsGreedy.md#function-epsgreedy) ([**number**](namespacesdm.md#typedef-number) eps\_start, [**number**](namespacesdm.md#typedef-number) eps\_end, [**number**](namespacesdm.md#typedef-number) eps\_decay) <br> |








## Public Attributes Documentation


### variable eps\_distrib 


```cpp
std::uniform_real_distribution<double> sdm::EpsGreedy::eps_distrib;
```



### variable epsilon\_decay 


```cpp
float sdm::EpsGreedy::epsilon_decay;
```



### variable epsilon\_end 


```cpp
float sdm::EpsGreedy::epsilon_end;
```



### variable epsilon\_start 


```cpp
float sdm::EpsGreedy::epsilon_start;
```


## Public Functions Documentation


### function EpsGreedy 


```cpp
inline sdm::EpsGreedy::EpsGreedy (
    number eps_start,
    number eps_end,
    number eps_decay
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/rl/eps_greedy.hpp`