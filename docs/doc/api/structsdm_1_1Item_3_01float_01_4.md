
<NavBar active_item_id="2"/>

# Struct sdm::Item&lt; float &gt;

**template &lt;&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Item&lt; float &gt;**](structsdm_1_1Item_3_01float_01_4.md)





* `#include <item.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Item**](structsdm_1_1Item_3_01float_01_4.md#function-item-1-2) () <br> |
|   | [**Item**](structsdm_1_1Item_3_01float_01_4.md#function-item-2-2) (float item) <br> |
|   | [**operator float**](structsdm_1_1Item_3_01float_01_4.md#function-operator-float) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  float | [**item\_**](structsdm_1_1Item_3_01float_01_4.md#variable-item-)  <br> |




## Public Functions Documentation


### function Item [1/2]


```cpp
inline sdm::Item< float >::Item () 
```



### function Item [2/2]


```cpp
inline sdm::Item< float >::Item (
    float item
) 
```



### function operator float 


```cpp
inline sdm::Item< float >::operator float () 
```


## Protected Attributes Documentation


### variable item\_ 


```cpp
float sdm::Item< float >::item_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Item< float >::operator<< (
    std::ostream & os,
    const Item < float > & it
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/item.hpp`