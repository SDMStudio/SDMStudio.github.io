
<NavBar active_item_id="2"/>

# Struct std::hash&lt; sdm::OccupancyState&lt; S, V &gt; &gt;

**template &lt;typename S typename S, typename V typename V&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**hash&lt; sdm::OccupancyState&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md)





* `#include <occupancy_state.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**sdm::OccupancyState**](classsdm_1_1OccupancyState.md)&lt; S, V &gt; | [**argument\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md#typedef-argument-type)  <br> |
| typedef std::size\_t | [**result\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md#typedef-result-type) | [**operator()**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md#function-operator()) (const [**argument\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md#typedef-argument-type) & in) const<br> |








## Public Types Documentation


### typedef argument\_type 


```cpp
typedef sdm::OccupancyState<S, V> std::hash< sdm::OccupancyState< S, V > >::argument_type;
```



### typedef result\_type 


```cpp
typedef std::size_t std::hash< sdm::OccupancyState< S, V > >::result_type;
```


## Public Functions Documentation


### function operator() 


```cpp
inline result_type std::hash< sdm::OccupancyState< S, V > >::operator() (
    const argument_type & in
) const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/occupancy_state.hpp`