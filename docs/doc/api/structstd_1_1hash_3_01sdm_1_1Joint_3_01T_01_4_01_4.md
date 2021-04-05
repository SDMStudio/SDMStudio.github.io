
<NavBar active_item_id="2"/>

# Struct std::hash&lt; sdm::Joint&lt; T &gt; &gt;

**template &lt;typename T typename T&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**hash&lt; sdm::Joint&lt; T &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md)





* `#include <joint.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**sdm::Joint**](classsdm_1_1Joint.md)&lt; T &gt; | [**argument\_type**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md#typedef-argument-type)  <br> |
| typedef std::size\_t | [**result\_type**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md#typedef-result-type) | [**operator()**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md#function-operator()) ([**argument\_type**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md#typedef-argument-type) const & in) const<br> |








## Public Types Documentation


### typedef argument\_type 


```cpp
typedef sdm::Joint<T> std::hash< sdm::Joint< T > >::argument_type;
```



### typedef result\_type 


```cpp
typedef std::size_t std::hash< sdm::Joint< T > >::result_type;
```


## Public Functions Documentation


### function operator() 


```cpp
inline result_type std::hash< sdm::Joint< T > >::operator() (
    argument_type const & in
) const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/joint.hpp`