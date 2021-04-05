
<NavBar active_item_id="2"/>

# Struct sdm::Item&lt; double &gt;

**template &lt;&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Item&lt; double &gt;**](structsdm_1_1Item_3_01double_01_4.md)





* `#include <item.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Item**](structsdm_1_1Item_3_01double_01_4.md#function-item-1-2) () <br> |
|   | [**Item**](structsdm_1_1Item_3_01double_01_4.md#function-item-2-2) (double item) <br> |
|   | [**operator double**](structsdm_1_1Item_3_01double_01_4.md#function-operator-double) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**item\_**](structsdm_1_1Item_3_01double_01_4.md#variable-item-)  <br> |




## Public Functions Documentation


### function Item [1/2]


```cpp
inline sdm::Item< double >::Item () 
```



### function Item [2/2]


```cpp
inline sdm::Item< double >::Item (
    double item
) 
```



### function operator double 


```cpp
inline sdm::Item< double >::operator double () 
```


## Protected Attributes Documentation


### variable item\_ 


```cpp
double sdm::Item< double >::item_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Item< double >::operator<< (
    std::ostream & os,
    const Item < double > & it
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/item.hpp`