
<NavBar active_item_id="2"/>

# Struct std::hash&lt; sdm::BaseBeliefState&lt; TState &gt; &gt;

**template &lt;typename TState typename TState&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**hash&lt; sdm::BaseBeliefState&lt; TState &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md)





* `#include <belief_state.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**sdm::BaseBeliefState**](classsdm_1_1BaseBeliefState.md)&lt; TState &gt; | [**argument\_type**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md#typedef-argument-type)  <br> |
| typedef std::size\_t | [**result\_type**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md#typedef-result-type) | [**operator()**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md#function-operator()) (const [**argument\_type**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md#typedef-argument-type) & in) const<br> |








## Public Types Documentation


### typedef argument\_type 


```cpp
typedef sdm::BaseBeliefState<TState> std::hash< sdm::BaseBeliefState< TState > >::argument_type;
```



### typedef result\_type 


```cpp
typedef std::size_t std::hash< sdm::BaseBeliefState< TState > >::result_type;
```


## Public Functions Documentation


### function operator() 


```cpp
inline result_type std::hash< sdm::BaseBeliefState< TState > >::operator() (
    const argument_type & in
) const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/belief_state.hpp`