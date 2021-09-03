
# Struct std::hash&lt; sdm::OccupancyState &gt;

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**hash&lt; sdm::OccupancyState &gt;**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md)





* `#include <occupancy_state.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**sdm::OccupancyState**](classsdm_1_1OccupancyState.md) | [**argument\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md#typedef-argument-type)  <br> |
| typedef std::size\_t | [**result\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md#typedef-result-type) | [**operator()**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md#function-operator()) (const [**argument\_type**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md#typedef-argument-type) & in) const<br> |








## Public Types Documentation


### typedef argument\_type 


```cpp
typedef sdm::OccupancyState std::hash< sdm::OccupancyState >::argument_type;
```



### typedef result\_type 


```cpp
typedef std::size_t std::hash< sdm::OccupancyState >::result_type;
```


## Public Functions Documentation


### function operator() 


```cpp
inline result_type std::hash< sdm::OccupancyState >::operator() (
    const argument_type & in
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/occupancy_state.hpp`