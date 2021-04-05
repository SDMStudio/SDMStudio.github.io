
<NavBar active_item_id="2"/>

# Class sdm::DiscreteSpace

**template &lt;typename TItem&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)



_The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ [More...](#detailed-description)

* `#include <discrete_space.hpp>`



Inherits the following classes: [sdm::Space](classsdm_1_1Space.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef TItem | [**value\_type**](classsdm_1_1DiscreteSpace.md#typedef-value-type)  <br> |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-1-5) () <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _object (default)_ |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-2-5) (const std::vector&lt; TItem &gt; & items) <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _object._ |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-3-5) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TItem &gt; & copy) <br>_Copy constructor._  |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-4-5) (std::initializer\_list&lt; TItem &gt; vals) <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _object from a list initializer._ |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-5-5) (std::enable\_if\_t&lt; TBool, int &gt; num\_items) <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _Base object._ |
|  std::vector&lt; TItem &gt; | [**getAll**](classsdm_1_1DiscreteSpace.md#function-getall) () <br>_Get all items in the space._  |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1DiscreteSpace.md#function-getdim) () const<br>_Get the dimension._  |
|  TItem | [**getItem**](classsdm_1_1DiscreteSpace.md#function-getitem) ([**number**](namespacesdm.md#typedef-number) index) const<br>_Get the item at a specific index._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getItemIndex**](classsdm_1_1DiscreteSpace.md#function-getitemindex) (const TItem & item) const<br>_Get the index of an item._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumItems**](classsdm_1_1DiscreteSpace.md#function-getnumitems) () const<br>_Get the Nummber of Items in the space._  |
| virtual bool | [**isDiscrete**](classsdm_1_1DiscreteSpace.md#function-isdiscrete) () const<br>_Return true because this is a discrete space._  |
|  bool | [**operator!=**](classsdm_1_1DiscreteSpace.md#function-operator) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & sp) const<br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & | [**operator=**](classsdm_1_1DiscreteSpace.md#function-operator-2) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & sp) <br> |
|  bool | [**operator==**](classsdm_1_1DiscreteSpace.md#function-operator-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & sp) const<br> |
|  TItem | [**sample**](classsdm_1_1DiscreteSpace.md#function-sample) () const<br>_Sample a random item from the space._  |
| virtual std::string | [**str**](classsdm_1_1DiscreteSpace.md#function-str) () const<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |

## Public Functions inherited from sdm::Space

See [sdm::Space](classsdm_1_1Space.md)

| Type | Name |
| ---: | :--- |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1Space.md#function-getdim) () const = 0<br>_Get the dimension of the space._  |
|  bool | [**isContinuous**](classsdm_1_1Space.md#function-iscontinuous) () const<br>_Check if the space is continous._  |
| virtual bool | [**isDiscrete**](classsdm_1_1Space.md#function-isdiscrete) () const = 0<br>_Check if the space is discrete._  |
|  bool | [**operator!=**](classsdm_1_1Space.md#function-operator) (const [**Space**](classsdm_1_1Space.md) & sp) const<br> |
|  bool | [**operator==**](classsdm_1_1Space.md#function-operator-2) (const [**Space**](classsdm_1_1Space.md) & sp) const<br> |
| virtual std::string | [**str**](classsdm_1_1Space.md#function-str) () const = 0<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |
| virtual  | [**~Space**](classsdm_1_1Space.md#function-space) () <br> |



## Protected Types

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), TItem &gt; | [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap)  <br> |
| typedef items\_bimap::value\_type | [**items\_bimap\_value**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap-value)  <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**all\_items\_**](classsdm_1_1DiscreteSpace.md#variable-all-items-)  <br>_the list of possible items in the space with their index_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_items\_**](classsdm_1_1DiscreteSpace.md#variable-num-items-)  <br>_number of possible items in the space (ex: [5, 12]_  _&gt; 8 items)_ |








# Detailed Description




**Template parameters:**


* `TItem` The type of each element in the space. 



    
## Public Types Documentation


### typedef value\_type 


```cpp
using sdm::DiscreteSpace< TItem >::value_type =  TItem;
```


## Public Functions Documentation


### function DiscreteSpace [1/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace () 
```



### function DiscreteSpace [2/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace (
    const std::vector< TItem > & items
) 
```




**Parameters:**


* `items` a list of possible items in the space 



        

### function DiscreteSpace [3/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace (
    const DiscreteSpace < TItem > & copy
) 
```



### function DiscreteSpace [4/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace (
    std::initializer_list< TItem > vals
) 
```



### function DiscreteSpace [5/5]


```cpp
template<bool TBool>
sdm::DiscreteSpace::DiscreteSpace (
    std::enable_if_t< TBool, int > num_items
) 
```



### function getAll 


```cpp
std::vector< TItem > sdm::DiscreteSpace::getAll () 
```



### function getDim 


```cpp
virtual std::vector< number > sdm::DiscreteSpace::getDim () const
```


Implements [*sdm::Space::getDim*](classsdm_1_1Space.md#function-getdim)


### function getItem 


```cpp
TItem sdm::DiscreteSpace::getItem (
    number index
) const
```



### function getItemIndex 


```cpp
number sdm::DiscreteSpace::getItemIndex (
    const TItem & item
) const
```



### function getNumItems 


```cpp
number sdm::DiscreteSpace::getNumItems () const
```



### function isDiscrete 


```cpp
virtual bool sdm::DiscreteSpace::isDiscrete () const
```


Implements [*sdm::Space::isDiscrete*](classsdm_1_1Space.md#function-isdiscrete)


### function operator!= 


```cpp
bool sdm::DiscreteSpace::operator!= (
    const DiscreteSpace & sp
) const
```



### function operator= 


```cpp
DiscreteSpace & sdm::DiscreteSpace::operator= (
    const DiscreteSpace & sp
) 
```



### function operator== 


```cpp
bool sdm::DiscreteSpace::operator== (
    const DiscreteSpace & sp
) const
```



### function sample 


```cpp
TItem sdm::DiscreteSpace::sample () const
```



### function str 


```cpp
virtual std::string sdm::DiscreteSpace::str () const
```


Implements [*sdm::Space::str*](classsdm_1_1Space.md#function-str)

## Protected Types Documentation


### typedef items\_bimap 


```cpp
typedef boost::bimaps::bimap<number, TItem> sdm::DiscreteSpace< TItem >::items_bimap;
```



### typedef items\_bimap\_value 


```cpp
typedef items_bimap::value_type sdm::DiscreteSpace< TItem >::items_bimap_value;
```


## Protected Attributes Documentation


### variable all\_items\_ 


```cpp
items_bimap sdm::DiscreteSpace< TItem >::all_items_;
```



### variable num\_items\_ 


```cpp
number sdm::DiscreteSpace< TItem >::num_items_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::DiscreteSpace::operator<< (
    std::ostream & os,
    const DiscreteSpace & sp
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/space/discrete_space.hpp`