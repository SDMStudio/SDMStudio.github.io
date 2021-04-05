
<NavBar active_item_id="2"/>

# Class sdm::SerializedOccupancyState

**template &lt;typename TState typename TState, typename TJointHistory\_p typename TJointHistory\_p&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md)



_A serialized occupancy state refers to an occupancy state (i.e refers to the whole knowledge that a central planner can have access to take decisions) with a precise state for each agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._ [More...](#detailed-description)

* `#include <serialized_occupancy_state.hpp>`



Inherits the following classes: [sdm::OccupancyState](classsdm_1_1OccupancyState.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename [**OccupancyState**](classsdm_1_1OccupancyState.md)&lt; TState, TJointHistory\_p &gt;::[**jhistory\_type**](classsdm_1_1OccupancyState.md#typedef-jhistory-type) | [**jhistory\_type**](classsdm_1_1SerializedOccupancyState.md#typedef-jhistory-type)  <br> |
| typedef typename [**OccupancyState**](classsdm_1_1OccupancyState.md)&lt; TState, TJointHistory\_p &gt;::[**state\_type**](classsdm_1_1OccupancyState.md#typedef-state-type) | [**state\_type**](classsdm_1_1SerializedOccupancyState.md#typedef-state-type)  <br> |

## Public Types inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
| typedef TJointHistory\_p | [**jhistory\_type**](classsdm_1_1OccupancyState.md#typedef-jhistory-type)  <br> |
| typedef TState | [**state\_type**](classsdm_1_1OccupancyState.md#typedef-state-type)  <br> |















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md#function-serializedoccupancystate-1-4) () <br> |
|   | [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md#function-serializedoccupancystate-2-4) (double default\_value) <br> |
|   | [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md#function-serializedoccupancystate-3-4) (std::size\_t size, double default\_value) <br> |
|   | [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md#function-serializedoccupancystate-4-4) (const [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md) & v) <br> |
|  std::vector&lt; typename state\_type::action\_type &gt; | [**getAction**](classsdm_1_1SerializedOccupancyState.md#function-getaction) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; [**state\_type**](classsdm_1_1OccupancyState.md#typedef-state-type), [**jhistory\_type**](classsdm_1_1OccupancyState.md#typedef-jhistory-type) &gt; & state) const<br> |
|  std::set&lt; typename state\_type::action\_type &gt; | [**getActions**](classsdm_1_1SerializedOccupancyState.md#function-getactions) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerializedOccupancyState.md#function-getcurrentagentid) () const<br> |
|  state\_type::state\_type | [**getHiddenState**](classsdm_1_1SerializedOccupancyState.md#function-gethiddenstate) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; [**state\_type**](classsdm_1_1OccupancyState.md#typedef-state-type), [**jhistory\_type**](classsdm_1_1OccupancyState.md#typedef-jhistory-type) &gt; & state) const<br> |
|  std::set&lt; typename state\_type::state\_type &gt; | [**getHiddenStates**](classsdm_1_1SerializedOccupancyState.md#function-gethiddenstates) () const<br> |

## Public Functions inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-1-4) () <br> |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-2-4) (double default\_value) <br> |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-3-4) (std::size\_t size, double default\_value) <br> |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-4-4) (const [**OccupancyState**](classsdm_1_1OccupancyState.md) & v) <br> |
|  std::vector&lt; std::set&lt; typename jhistory\_type::element\_type::ihistory\_type &gt; &gt; | [**getAllIndividualHistories**](classsdm_1_1OccupancyState.md#function-getallindividualhistories) () const<br> |
|  std::set&lt; typename jhistory\_type::element\_type::ihistory\_type &gt; | [**getIndividualHistories**](classsdm_1_1OccupancyState.md#function-getindividualhistories) ([**number**](namespacesdm.md#typedef-number) ag\_id) const<br> |
|  std::set&lt; [**jhistory\_type**](classsdm_1_1OccupancyState.md#typedef-jhistory-type) &gt; | [**getJointHistories**](classsdm_1_1OccupancyState.md#function-getjointhistories) () const<br> |
|  double | [**getProbability**](classsdm_1_1OccupancyState.md#function-getprobability) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; TState, TJointHistory\_p &gt; & pair\_state\_hist) <br>_Return the probability of a precise occupancy state._  |
|  std::set&lt; [**state\_type**](classsdm_1_1OccupancyState.md#typedef-state-type) &gt; | [**getStates**](classsdm_1_1OccupancyState.md#function-getstates) () const<br> |

## Public Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-1-4) () <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-2-4) (T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-3-4) (std::size\_t size, T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-4-4) (const [**MappedVector**](classsdm_1_1MappedVector.md) & v) <br> |
| virtual TIndex | [**argmax**](classsdm_1_1MappedVector.md#function-argmax) () const<br> |
| virtual TIndex | [**argmin**](classsdm_1_1MappedVector.md#function-argmin) () const<br> |
| virtual T | [**at**](classsdm_1_1MappedVector.md#function-at) (const TIndex &) const<br> |
|  T | [**dot**](classsdm_1_1MappedVector.md#function-dot) (const [**MappedVector**](classsdm_1_1MappedVector.md) & v2) const<br> |
|  T | [**getDefault**](classsdm_1_1MappedVector.md#function-getdefault) () const<br> |
|  std::vector&lt; TIndex &gt; | [**getIndexes**](classsdm_1_1MappedVector.md#function-getindexes) () const<br> |
| virtual T | [**max**](classsdm_1_1MappedVector.md#function-max) () const<br> |
| virtual T | [**min**](classsdm_1_1MappedVector.md#function-min) () const<br> |
| virtual T | [**norm\_1**](classsdm_1_1MappedVector.md#function-norm-1) () const<br> |
| virtual T | [**norm\_2**](classsdm_1_1MappedVector.md#function-norm-2) () const<br> |
|  bool | [**operator&lt;**](classsdm_1_1MappedVector.md#function-operator) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  T | [**operator^**](classsdm_1_1MappedVector.md#function-operator-2) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  std::size\_t | [**size**](classsdm_1_1MappedVector.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1MappedVector.md#function-str) () const<br> |

## Public Functions inherited from sdm::VectorImpl

See [sdm::VectorImpl](classsdm_1_1VectorImpl.md)

| Type | Name |
| ---: | :--- |
| virtual I | [**argmax**](classsdm_1_1VectorImpl.md#function-argmax) () const = 0<br> |
| virtual I | [**argmin**](classsdm_1_1VectorImpl.md#function-argmin) () const = 0<br> |
| virtual T | [**at**](classsdm_1_1VectorImpl.md#function-at) (const I &) const = 0<br> |
| virtual T | [**max**](classsdm_1_1VectorImpl.md#function-max) () const = 0<br> |
| virtual T | [**min**](classsdm_1_1VectorImpl.md#function-min) () const = 0<br> |
| virtual T | [**norm\_1**](classsdm_1_1VectorImpl.md#function-norm-1) () const = 0<br> |
| virtual T | [**norm\_2**](classsdm_1_1VectorImpl.md#function-norm-2) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1VectorImpl.md#function-str) () const = 0<br> |


## Public Static Functions inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|  TJointHistory\_p | [**getHistory**](classsdm_1_1OccupancyState.md#function-gethistory) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; TState, TJointHistory\_p &gt; & pair\_state\_hist) <br>_Return the hidden_ [_**Joint**_](classsdm_1_1Joint.md) _history of a precise occupancy state._ |
|  TState | [**getState**](classsdm_1_1OccupancyState.md#function-getstate) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; TState, TJointHistory\_p &gt; & pair\_state\_hist) <br>_Return the hidden state of a precise occupancy state._  |













## Protected Attributes inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  T | [**default\_value\_**](classsdm_1_1MappedVector.md#variable-default-value-)  <br> |
|  std::size\_t | [**size\_**](classsdm_1_1MappedVector.md#variable-size-)   = = -1<br> |








## Protected Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  std::pair&lt; TIndex, T &gt; | [**getMax**](classsdm_1_1MappedVector.md#function-getmax) () const<br> |
|  std::pair&lt; TIndex, T &gt; | [**getMin**](classsdm_1_1MappedVector.md#function-getmin) () const<br> |






# Detailed Description




**Template parameters:**


* `TState` 
* `TJointHistory_p` 



    
## Public Types Documentation


### typedef jhistory\_type 


```cpp
using sdm::SerializedOccupancyState< TState, TJointHistory_p >::jhistory_type =  typename OccupancyState<TState, TJointHistory_p>::jhistory_type;
```



### typedef state\_type 


```cpp
using sdm::SerializedOccupancyState< TState, TJointHistory_p >::state_type =  typename OccupancyState<TState, TJointHistory_p>::state_type;
```


## Public Functions Documentation


### function SerializedOccupancyState [1/4]


```cpp
sdm::SerializedOccupancyState::SerializedOccupancyState () 
```



### function SerializedOccupancyState [2/4]


```cpp
sdm::SerializedOccupancyState::SerializedOccupancyState (
    double default_value
) 
```



### function SerializedOccupancyState [3/4]


```cpp
sdm::SerializedOccupancyState::SerializedOccupancyState (
    std::size_t size,
    double default_value
) 
```



### function SerializedOccupancyState [4/4]


```cpp
sdm::SerializedOccupancyState::SerializedOccupancyState (
    const SerializedOccupancyState & v
) 
```



### function getAction 


```cpp
std::vector< typename state_type::action_type > sdm::SerializedOccupancyState::getAction (
    const Pair < state_type , jhistory_type > & state
) const
```



### function getActions 


```cpp
std::set< typename state_type::action_type > sdm::SerializedOccupancyState::getActions () const
```



### function getCurrentAgentId 


```cpp
number sdm::SerializedOccupancyState::getCurrentAgentId () const
```



### function getHiddenState 


```cpp
state_type::state_type sdm::SerializedOccupancyState::getHiddenState (
    const Pair < state_type , jhistory_type > & state
) const
```



### function getHiddenStates 


```cpp
std::set< typename state_type::state_type > sdm::SerializedOccupancyState::getHiddenStates () const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/serialized_occupancy_state.hpp`