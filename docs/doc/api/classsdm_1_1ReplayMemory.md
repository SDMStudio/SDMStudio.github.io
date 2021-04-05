
<NavBar active_item_id="2"/>

# Class sdm::ReplayMemory


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ReplayMemory**](classsdm_1_1ReplayMemory.md)





* `#include <replay_memory.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ReplayMemory**](classsdm_1_1ReplayMemory.md#function-replaymemory) (int capacity) <br> |
|  void | [**push**](classsdm_1_1ReplayMemory.md#function-push) ([**sars\_transition**](namespacesdm.md#typedef-sars-transition) t) <br> |
|  std::vector&lt; [**sars\_transition**](namespacesdm.md#typedef-sars-transition) &gt; | [**sample**](classsdm_1_1ReplayMemory.md#function-sample) (int n) <br> |
|  int | [**size**](classsdm_1_1ReplayMemory.md#function-size) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**capacity**](classsdm_1_1ReplayMemory.md#variable-capacity)  <br> |
|  std::vector&lt; [**sars\_transition**](namespacesdm.md#typedef-sars-transition) &gt; | [**memory**](classsdm_1_1ReplayMemory.md#variable-memory)  <br> |
|  int | [**position**](classsdm_1_1ReplayMemory.md#variable-position)  <br> |




## Public Functions Documentation


### function ReplayMemory 


```cpp
inline sdm::ReplayMemory::ReplayMemory (
    int capacity
) 
```



### function push 


```cpp
inline void sdm::ReplayMemory::push (
    sars_transition t
) 
```



### function sample 


```cpp
inline std::vector< sars_transition > sdm::ReplayMemory::sample (
    int n
) 
```



### function size 


```cpp
inline int sdm::ReplayMemory::size () 
```


## Protected Attributes Documentation


### variable capacity 


```cpp
int sdm::ReplayMemory::capacity;
```



### variable memory 


```cpp
std::vector<sars_transition> sdm::ReplayMemory::memory;
```



### variable position 


```cpp
int sdm::ReplayMemory::position;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/rl/replay_memory.hpp`