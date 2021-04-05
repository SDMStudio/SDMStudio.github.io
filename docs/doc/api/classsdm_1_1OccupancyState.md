
<NavBar active_item_id="2"/>

# Class sdm::OccupancyState

**template &lt;typename TState, typename TJointHistory\_p&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**OccupancyState**](classsdm_1_1OccupancyState.md)



_A state of occupancy refers to a state in which all the knowledge is known by a central planner and which it relies on to make a decision._ [More...](#detailed-description)

* `#include <occupancy_state.hpp>`



Inherits the following classes: [sdm::MappedVector](classsdm_1_1MappedVector.md)


Inherited by the following classes: [sdm::SerializedOccupancyState](classsdm_1_1SerializedOccupancyState.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef TJointHistory\_p | [**jhistory\_type**](classsdm_1_1OccupancyState.md#typedef-jhistory-type)  <br> |
| typedef TState | [**state\_type**](classsdm_1_1OccupancyState.md#typedef-state-type)  <br> |












## Public Functions

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

## Public Static Functions

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


* `TState` refers to a number 
* `TJointHistory_p` refers to a joint histories 



    
## Public Types Documentation


### typedef jhistory\_type 


```cpp
using sdm::OccupancyState< TState, TJointHistory_p >::jhistory_type =  TJointHistory_p;
```



### typedef state\_type 


```cpp
using sdm::OccupancyState< TState, TJointHistory_p >::state_type =  TState;
```


## Public Functions Documentation


### function OccupancyState [1/4]


```cpp
sdm::OccupancyState::OccupancyState () 
```



### function OccupancyState [2/4]


```cpp
sdm::OccupancyState::OccupancyState (
    double default_value
) 
```



### function OccupancyState [3/4]


```cpp
sdm::OccupancyState::OccupancyState (
    std::size_t size,
    double default_value
) 
```



### function OccupancyState [4/4]


```cpp
sdm::OccupancyState::OccupancyState (
    const OccupancyState & v
) 
```



### function getAllIndividualHistories 


```cpp
std::vector< std::set< typename jhistory_type::element_type::ihistory_type > > sdm::OccupancyState::getAllIndividualHistories () const
```



### function getIndividualHistories 


```cpp
std::set< typename jhistory_type::element_type::ihistory_type > sdm::OccupancyState::getIndividualHistories (
    number ag_id
) const
```



### function getJointHistories 


```cpp
std::set< jhistory_type > sdm::OccupancyState::getJointHistories () const
```



### function getProbability 


```cpp
double sdm::OccupancyState::getProbability (
    const Pair < TState, TJointHistory_p > & pair_state_hist
) 
```




**Parameters:**


* `pair_state_hist` refers to a precise occupancy state 



**Returns:**

double refers to the probability returned 




        

### function getStates 


```cpp
std::set< state_type > sdm::OccupancyState::getStates () const
```


## Public Static Functions Documentation


### function getHistory 


```cpp
static TJointHistory_p sdm::OccupancyState::getHistory (
    const Pair < TState, TJointHistory_p > & pair_state_hist
) 
```




**Parameters:**


* `pair_state_hist` refers to a precise occupancy state 



**Returns:**

TJointHistory\_p refers to the hidden [**Joint**](classsdm_1_1Joint.md) history returned 




        

### function getState 


```cpp
static TState sdm::OccupancyState::getState (
    const Pair < TState, TJointHistory_p > & pair_state_hist
) 
```




**Parameters:**


* `pair_state_hist` refers to a precise occupancy state 



**Returns:**

TState refers to the hidden state returned 




        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/occupancy_state.hpp`