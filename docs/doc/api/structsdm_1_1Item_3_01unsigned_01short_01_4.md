
<NavBar active_item_id="2"/>

# Struct sdm::Item&lt; unsigned short &gt;

**template &lt;&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Item&lt; unsigned short &gt;**](structsdm_1_1Item_3_01unsigned_01short_01_4.md)





* `#include <item.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Item**](structsdm_1_1Item_3_01unsigned_01short_01_4.md#function-item-1-2) () <br> |
|   | [**Item**](structsdm_1_1Item_3_01unsigned_01short_01_4.md#function-item-2-2) (unsigned short item) <br> |
|   | [**operator unsigned short**](structsdm_1_1Item_3_01unsigned_01short_01_4.md#function-operator-unsigned-short) () <br> |
|  bool | [**operator&lt;**](structsdm_1_1Item_3_01unsigned_01short_01_4.md#function-operator) (const [**Item**](structsdm_1_1Item.md) & v2) const<br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  unsigned short | [**item\_**](structsdm_1_1Item_3_01unsigned_01short_01_4.md#variable-item-)  <br> |




## Public Functions Documentation


### function Item [1/2]


```cpp
inline sdm::Item< unsigned short >::Item () 
```



### function Item [2/2]


```cpp
inline sdm::Item< unsigned short >::Item (
    unsigned short item
) 
```



### function operator unsigned short 


```cpp
inline sdm::Item< unsigned short >::operator unsigned short () 
```



### function operator&lt; 


```cpp
inline bool sdm::Item< unsigned short >::operator< (
    const Item & v2
) const
```


## Protected Attributes Documentation


### variable item\_ 


```cpp
unsigned short sdm::Item< unsigned short >::item_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Item< unsigned short >::operator<< (
    std::ostream & os,
    const Item < unsigned short > & it
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/item.hpp`