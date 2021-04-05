
<NavBar active_item_id="2"/>

# Class sdm::MultiDiscreteSpace

**template &lt;typename TItem&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)



_This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ [More...](#detailed-description)

* `#include <multi_discrete_space.hpp>`



Inherits the following classes: [sdm::MultiSpace](classsdm_1_1MultiSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**Joint**](classsdm_1_1Joint.md)&lt; TItem &gt; | [**value\_type**](classsdm_1_1MultiDiscreteSpace.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::MultiSpace

See [sdm::MultiSpace](classsdm_1_1MultiSpace.md)

| Type | Name |
| ---: | :--- |
| typedef void | [**value\_type**](classsdm_1_1MultiSpace.md#typedef-value-type)  <br> |


## Public Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef TItem | [**value\_type**](classsdm_1_1DiscreteSpace.md#typedef-value-type)  <br> |

















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-1-6) () <br>_Instantiate a default discrete space (_ [_**MultiDiscreteSpace**_](classsdm_1_1MultiDiscreteSpace.md) _class)_ |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-2-6) (const std::vector&lt; std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TItem &gt;&gt;&gt; &) <br>_Instantiate a multi discrete space from the list its sub-spaces (as shared pointer)._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-3-6) (const std::vector&lt; std::vector&lt; TItem &gt;&gt; & values) <br>_Instantiate a multi discrete space from the list its sub-spaces (as shared pointer)._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-4-6) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; TItem &gt; & copy) <br>_Cpoy constructor._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-5-6) (const std::vector&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TItem &gt;&gt; &) <br>_Instantiate a multi discrete space from the list its sub-spaces (as objects)._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-6-6) (const std::enable\_if\_t&lt; TBool, std::vector&lt; TItem &gt;&gt; & num\_items) <br>_Instantiate a multi discrete space using a list of dimensions (one by single space). This constructor is only available for classes where TItem is an integer (long, int, short, etc)._  |
|  std::vector&lt; [**Joint**](classsdm_1_1Joint.md)&lt; TItem &gt; &gt; | [**getAll**](classsdm_1_1MultiDiscreteSpace.md#function-getall) () <br>_Get all the joint values._  |
|  TItem | [**getItem**](classsdm_1_1MultiDiscreteSpace.md#function-getitem-1-2) ([**number**](namespacesdm.md#typedef-number)) const<br> |
|  TItem | [**getItem**](classsdm_1_1MultiDiscreteSpace.md#function-getitem-2-2) ([**number**](namespacesdm.md#typedef-number) ag\_id, [**number**](namespacesdm.md#typedef-number) item\_index) const<br>_Get a specific item for a given agent (from its index)_  |
|  [**number**](namespacesdm.md#typedef-number) | [**getItemIndex**](classsdm_1_1MultiDiscreteSpace.md#function-getitemindex) ([**number**](namespacesdm.md#typedef-number) ag\_id, const TItem & item) const<br>_Get a specific index of an item for a given agent._  |
|  [**Joint**](classsdm_1_1Joint.md)&lt; TItem &gt; | [**getJointItem**](classsdm_1_1MultiDiscreteSpace.md#function-getjointitem) ([**number**](namespacesdm.md#typedef-number)) const<br>_Get the corresponding joint item from its index._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getJointItemIndex**](classsdm_1_1MultiDiscreteSpace.md#function-getjointitemindex-1-2) ([**Joint**](classsdm_1_1Joint.md)&lt; TItem &gt; & jitem) const<br>_Transform joint item to its index in the list of all joint items._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getJointItemIndex**](classsdm_1_1MultiDiscreteSpace.md#function-getjointitemindex-2-2) (const std::vector&lt; TItem &gt; &) const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumJointItems**](classsdm_1_1MultiDiscreteSpace.md#function-getnumjointitems) () const<br>_Get the number of joint items._  |
|  [**number**](namespacesdm.md#typedef-number) | [**joint2single**](classsdm_1_1MultiDiscreteSpace.md#function-joint2single) (const std::vector&lt; TItem &gt; & jitem) const<br>_Transform joint item to single one._  |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; TItem &gt; & | [**operator=**](classsdm_1_1MultiDiscreteSpace.md#function-operator) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; TItem &gt; &) <br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-1-4) (const std::enable\_if\_t&lt; TBool, std::vector&lt; TItem &gt;&gt; & num\_items) <br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-2-4) (const std::vector&lt; std::vector&lt; TItem &gt;&gt; &) <br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-3-4) (const std::vector&lt; std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TItem &gt;&gt;&gt; & spaces) <br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-4-4) (const std::vector&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TItem &gt;&gt; & spaces) <br> |
|  std::vector&lt; TItem &gt; | [**single2joint**](classsdm_1_1MultiDiscreteSpace.md#function-single2joint) ([**number**](namespacesdm.md#typedef-number) sitem) const<br>_Transform single item to joint one._  |
| virtual std::string | [**str**](classsdm_1_1MultiDiscreteSpace.md#function-str) () const<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |

## Public Functions inherited from sdm::MultiSpace

See [sdm::MultiSpace](classsdm_1_1MultiSpace.md)

| Type | Name |
| ---: | :--- |
|   | [**MultiSpace**](classsdm_1_1MultiSpace.md#function-multispace-1-2) () <br> |
|   | [**MultiSpace**](classsdm_1_1MultiSpace.md#function-multispace-2-2) (const std::vector&lt; std::shared\_ptr&lt; TSpace &gt;&gt; &) <br> |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1MultiSpace.md#function-getdim) () const<br>_Get the dimension of the space._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumSpaces**](classsdm_1_1MultiSpace.md#function-getnumspaces) () const<br>_Get the number of sub-space._  |
|  std::shared\_ptr&lt; TSpace &gt; | [**getSpace**](classsdm_1_1MultiSpace.md#function-getspace) ([**number**](namespacesdm.md#typedef-number) index) const<br>_Get a specific subspace._  |
|  std::vector&lt; std::shared\_ptr&lt; TSpace &gt; &gt; | [**getSpaces**](classsdm_1_1MultiSpace.md#function-getspaces) () const<br>_Get all spaces._  |
| virtual bool | [**isDiscrete**](classsdm_1_1MultiSpace.md#function-isdiscrete) () const<br>_Check if the space is discrete._  |
|  bool | [**operator!=**](classsdm_1_1MultiSpace.md#function-operator) (const [**MultiSpace**](classsdm_1_1MultiSpace.md) &) const<br> |
|  [**MultiSpace**](classsdm_1_1MultiSpace.md) & | [**operator=**](classsdm_1_1MultiSpace.md#function-operator-2) (const [**MultiSpace**](classsdm_1_1MultiSpace.md) &) <br> |
|  bool | [**operator==**](classsdm_1_1MultiSpace.md#function-operator-3) (const [**MultiSpace**](classsdm_1_1MultiSpace.md) &) const<br> |
|  void | [**setSpaces**](classsdm_1_1MultiSpace.md#function-setspaces) (const std::vector&lt; std::shared\_ptr&lt; TSpace &gt;&gt; &) <br>_Change the list of spaces. You may prefer build a new_ [_**MultiSpace**_](classsdm_1_1MultiSpace.md) _instead of changing values of existing one._ |
| virtual std::string | [**str**](classsdm_1_1MultiSpace.md#function-str) () const<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |

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

## Public Functions inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

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
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), [**Joint**](classsdm_1_1Joint.md)&lt; TItem &gt; &gt; | [**jitems\_bimap**](classsdm_1_1MultiDiscreteSpace.md#typedef-jitems-bimap)  <br> |
| typedef jitems\_bimap::value\_type | [**jitems\_bimap\_value**](classsdm_1_1MultiDiscreteSpace.md#typedef-jitems-bimap-value)  <br> |



## Protected Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), TItem &gt; | [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap)  <br> |
| typedef items\_bimap::value\_type | [**items\_bimap\_value**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap-value)  <br> |








## Protected Attributes inherited from sdm::MultiSpace

See [sdm::MultiSpace](classsdm_1_1MultiSpace.md)

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::shared\_ptr&lt; TSpace &gt; &gt; | [**spaces\_**](classsdm_1_1MultiSpace.md#variable-spaces-)  <br>_The list of spaces._  |


## Protected Attributes inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
|  [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**all\_items\_**](classsdm_1_1DiscreteSpace.md#variable-all-items-)  <br>_the list of possible items in the space with their index_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_items\_**](classsdm_1_1DiscreteSpace.md#variable-num-items-)  <br>_number of possible items in the space (ex: [5, 12]_  _&gt; 8 items)_ |







## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**generateJointItems**](classsdm_1_1MultiDiscreteSpace.md#function-generatejointitems) () <br>_Generates all joint items and maintains a bimap of indexes and corresponding pointers of joint items._  |
|  void | [**setNumJItems**](classsdm_1_1MultiDiscreteSpace.md#function-setnumjitems) ([**number**](namespacesdm.md#typedef-number)) <br>_Sets the number of joint items._  |










# Detailed Description




**Template parameters:**


* `TItem` The type of items in each sub-discrete space. 



    
## Public Types Documentation


### typedef value\_type 


```cpp
using sdm::MultiDiscreteSpace< TItem >::value_type =  Joint<TItem>;
```


## Public Functions Documentation


### function MultiDiscreteSpace [1/6]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace () 
```



### function MultiDiscreteSpace [2/6]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::vector< std::shared_ptr< DiscreteSpace < TItem >>> &
) 
```



### function MultiDiscreteSpace [3/6]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::vector< std::vector< TItem >> & values
) 
```



### function MultiDiscreteSpace [4/6]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const MultiDiscreteSpace < TItem > & copy
) 
```



### function MultiDiscreteSpace [5/6]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::vector< DiscreteSpace < TItem >> &
) 
```



### function MultiDiscreteSpace [6/6]


```cpp
template<bool TBool>
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::enable_if_t< TBool, std::vector< TItem >> & num_items
) 
```




**Parameters:**


* `num_items` the number of items in each spaces. If {k\_1, k\_2} then {0, 1, ..., k\_1 - 1} are possible items in first subspace and {0, 1, ..., k\_2 - 1} in the second subspace. 



        

### function getAll 


```cpp
std::vector< Joint < TItem > > sdm::MultiDiscreteSpace::getAll () 
```




**Returns:**

the list of all possible joint items 




        

### function getItem [1/2]


```cpp
TItem sdm::MultiDiscreteSpace::getItem (
    number
) const
```



### function getItem [2/2]


```cpp
TItem sdm::MultiDiscreteSpace::getItem (
    number ag_id,
    number item_index
) const
```




**Parameters:**


* `ag_id` index of the agent 
* `item_index` the index of the item we want to get 



        

### function getItemIndex 


```cpp
number sdm::MultiDiscreteSpace::getItemIndex (
    number ag_id,
    const TItem & item
) const
```




**Parameters:**


* `ag_id` index of the agent 
* `item` the item we want to get the index 



        

### function getJointItem 


```cpp
Joint < TItem > sdm::MultiDiscreteSpace::getJointItem (
    number
) const
```



### function getJointItemIndex [1/2]


```cpp
number sdm::MultiDiscreteSpace::getJointItemIndex (
    Joint < TItem > & jitem
) const
```




**Parameters:**


* `jitem` the joint item we want to get the index 



**Returns:**

the corresponding index 




        

### function getJointItemIndex [2/2]


```cpp
number sdm::MultiDiscreteSpace::getJointItemIndex (
    const std::vector< TItem > &
) const
```



### function getNumJointItems 


```cpp
number sdm::MultiDiscreteSpace::getNumJointItems () const
```



### function joint2single 


```cpp
number sdm::MultiDiscreteSpace::joint2single (
    const std::vector< TItem > & jitem
) const
```




**Parameters:**


* `jitem` the joint item as a list of single items 



**Returns:**

the same joint item (as a single index to refer it) 




        

### function operator= 


```cpp
MultiDiscreteSpace < TItem > & sdm::MultiDiscreteSpace::operator= (
    const MultiDiscreteSpace < TItem > &
) 
```



### function setSpaces [1/4]


```cpp
template<bool TBool>
void sdm::MultiDiscreteSpace::setSpaces (
    const std::enable_if_t< TBool, std::vector< TItem >> & num_items
) 
```



### function setSpaces [2/4]


```cpp
void sdm::MultiDiscreteSpace::setSpaces (
    const std::vector< std::vector< TItem >> &
) 
```



### function setSpaces [3/4]


```cpp
void sdm::MultiDiscreteSpace::setSpaces (
    const std::vector< std::shared_ptr< DiscreteSpace < TItem >>> & spaces
) 
```



### function setSpaces [4/4]


```cpp
void sdm::MultiDiscreteSpace::setSpaces (
    const std::vector< DiscreteSpace < TItem >> & spaces
) 
```



### function single2joint 


```cpp
std::vector< TItem > sdm::MultiDiscreteSpace::single2joint (
    number sitem
) const
```




**Parameters:**


* `sitem` the index of a specific joint item 



**Returns:**

the same joint item (as a list of single items) 




        

### function str 


```cpp
virtual std::string sdm::MultiDiscreteSpace::str () const
```


Implements [*sdm::Space::str*](classsdm_1_1Space.md#function-str)

## Protected Types Documentation


### typedef jitems\_bimap 


```cpp
typedef boost::bimaps::bimap<number, Joint<TItem> > sdm::MultiDiscreteSpace< TItem >::jitems_bimap;
```



### typedef jitems\_bimap\_value 


```cpp
typedef jitems_bimap::value_type sdm::MultiDiscreteSpace< TItem >::jitems_bimap_value;
```


## Protected Functions Documentation


### function generateJointItems 


```cpp
void sdm::MultiDiscreteSpace::generateJointItems () 
```



### function setNumJItems 


```cpp
void sdm::MultiDiscreteSpace::setNumJItems (
    number
) 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::MultiDiscreteSpace::operator<< (
    std::ostream & os,
    const MultiDiscreteSpace < TItem > & sp
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/space/multi_discrete_space.hpp`