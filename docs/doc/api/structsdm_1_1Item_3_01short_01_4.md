
<NavBar active_item_id="2"/>

# Struct sdm::Item&lt; short &gt;

**template &lt;&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Item&lt; short &gt;**](structsdm_1_1Item_3_01short_01_4.md)





* `#include <item.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Item**](structsdm_1_1Item_3_01short_01_4.md#function-item-1-2) () <br> |
|   | [**Item**](structsdm_1_1Item_3_01short_01_4.md#function-item-2-2) (short item) <br> |
|   | [**operator short**](structsdm_1_1Item_3_01short_01_4.md#function-operator-short) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  short | [**item\_**](structsdm_1_1Item_3_01short_01_4.md#variable-item-)  <br> |




## Public Functions Documentation


### function Item [1/2]


```cpp
inline sdm::Item< short >::Item () 
```



### function Item [2/2]


```cpp
inline sdm::Item< short >::Item (
    short item
) 
```



### function operator short 


```cpp
inline sdm::Item< short >::operator short () 
```


## Protected Attributes Documentation


### variable item\_ 


```cpp
short sdm::Item< short >::item_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Item< short >::operator<< (
    std::ostream & os,
    const Item < short > & it
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/item.hpp`