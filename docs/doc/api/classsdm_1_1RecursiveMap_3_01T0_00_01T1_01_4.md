
<NavBar active_item_id="2"/>

# Class sdm::RecursiveMap&lt; T0, T1 &gt;

**template &lt;class T0 class T0, class T1 class T1&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md)



[_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._[More...](#detailed-description)

* `#include <recursive_map.hpp>`



Inherits the following classes: map_t< T0, T1 >








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; T0, T1 &gt; | [**type**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#typedef-type)  <br> |
| typedef std::pair&lt; const T0, T1 &gt; | [**value\_type**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#typedef-value-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**RecursiveMap**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#function-recursivemap-1-3) () <br> |
|   | [**RecursiveMap**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#function-recursivemap-2-3) (const [**map\_t**](recursive__map_8hpp.md#typedef-map-t)&lt; T0, T1 &gt; & x) <br> |
|   | [**RecursiveMap**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#function-recursivemap-3-3) (std::initializer\_list&lt; [**value\_type**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#typedef-value-type) &gt; vals) <br> |
|  T1 | [**operator()**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#function-operator()) (T0 v0) <br>_Get a specific item._  |
|  void | [**recursive\_emplace**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md#function-recursive-emplace) (T0 v0, T1 v1) <br>_Emplace a specific element._  |








# Detailed Description




**Template parameters:**


* `T0` the type of the first map item 
* `T1` the type of the second map item 



    
## Public Types Documentation


### typedef type 


```cpp
using sdm::RecursiveMap< T0, T1 >::type =  RecursiveMap<T0, T1>;
```



### typedef value\_type 


```cpp
using sdm::RecursiveMap< T0, T1 >::value_type =  std::pair<const T0, T1>;
```


## Public Functions Documentation


### function RecursiveMap [1/3]


```cpp
inline sdm::RecursiveMap< T0, T1 >::RecursiveMap () 
```



### function RecursiveMap [2/3]


```cpp
inline sdm::RecursiveMap< T0, T1 >::RecursiveMap (
    const map_t < T0, T1 > & x
) 
```



### function RecursiveMap [3/3]


```cpp
inline sdm::RecursiveMap< T0, T1 >::RecursiveMap (
    std::initializer_list< value_type > vals
) 
```



### function operator() 


```cpp
T1 sdm::RecursiveMap< T0, T1 >::operator() (
    T0 v0
) 
```



### function recursive\_emplace 


```cpp
void sdm::RecursiveMap< T0, T1 >::recursive_emplace (
    T0 v0,
    T1 v1
) 
```




**Parameters:**


* `v0` the key 
* `v1` the value 



        ## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::RecursiveMap< T0, T1 >::operator<< (
    std::ostream & os,
    RecursiveMap < T0, T1 > rmap
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/struct/recursive_map.hpp`