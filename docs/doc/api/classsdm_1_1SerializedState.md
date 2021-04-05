
<NavBar active_item_id="2"/>

# Class sdm::SerializedState


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedState**](classsdm_1_1SerializedState.md)





* `#include <serialized_state.hpp>`



Inherits the following classes: Pair< number, std::vector< number > >








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**number**](namespacesdm.md#typedef-number) | [**action\_type**](classsdm_1_1SerializedState.md#typedef-action-type)  <br> |
| typedef [**number**](namespacesdm.md#typedef-number) | [**state\_type**](classsdm_1_1SerializedState.md#typedef-state-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-1-4) () <br> |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-2-4) ([**number**](namespacesdm.md#typedef-number) state) <br> |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-3-4) ([**number**](namespacesdm.md#typedef-number) state, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; actions) <br> |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-4-4) (const [**SerializedState**](classsdm_1_1SerializedState.md) & v) <br> |
|  std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getAction**](classsdm_1_1SerializedState.md#function-getaction) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerializedState.md#function-getcurrentagentid) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getState**](classsdm_1_1SerializedState.md#function-getstate) () const<br> |








## Public Types Documentation


### typedef action\_type 


```cpp
using sdm::SerializedState::action_type =  number;
```



### typedef state\_type 


```cpp
using sdm::SerializedState::state_type =  number;
```


## Public Functions Documentation


### function SerializedState [1/4]


```cpp
sdm::SerializedState::SerializedState () 
```



### function SerializedState [2/4]


```cpp
sdm::SerializedState::SerializedState (
    number state
) 
```



### function SerializedState [3/4]


```cpp
sdm::SerializedState::SerializedState (
    number state,
    std::vector< number > actions
) 
```



### function SerializedState [4/4]


```cpp
sdm::SerializedState::SerializedState (
    const SerializedState & v
) 
```



### function getAction 


```cpp
std::vector< number > sdm::SerializedState::getAction () const
```



### function getCurrentAgentId 


```cpp
number sdm::SerializedState::getCurrentAgentId () const
```



### function getState 


```cpp
number sdm::SerializedState::getState () const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/serialized_state.hpp`