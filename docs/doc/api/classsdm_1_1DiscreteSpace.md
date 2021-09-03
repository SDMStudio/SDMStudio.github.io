
# Class sdm::DiscreteSpace

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)



_The discrete space class give a way to keep all possible values of a finite space._ [More...](#detailed-description)

* `#include <discrete_space.hpp>`



Inherits the following classes: [sdm::Space](classsdm_1_1Space.md)


Inherited by the following classes: [sdm::FunctionSpace](classsdm_1_1FunctionSpace.md),  [sdm::MultiDiscreteSpace](classsdm_1_1MultiDiscreteSpace.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**Space::iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type) | [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type)  <br> |
| typedef std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**value\_type**](classsdm_1_1DiscreteSpace.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Space

See [sdm::Space](classsdm_1_1Space.md)

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-1-5) () <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _object (default)_ |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-2-5) (const std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; & items) <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _object._ |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-3-5) (const std::vector&lt; T &gt; & items) <br> |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-4-5) (std::initializer\_list&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; vals) <br>_Construct a new Discrete_ [_**Space**_](classsdm_1_1Space.md) _object from a list initializer._ |
|   | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md#function-discretespace-5-5) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & copy) <br>_Copy constructor._  |
| virtual [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**begin**](classsdm_1_1DiscreteSpace.md#function-begin) () <br> |
|  bool | [**contains**](classsdm_1_1DiscreteSpace.md#function-contains) (const std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &) const<br>_Verify is the discrete space contains the std::shared\_ptr&lt;Item&gt;;._  |
| virtual [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**end**](classsdm_1_1DiscreteSpace.md#function-end) () <br> |
|  int | [**find**](classsdm_1_1DiscreteSpace.md#function-find) (const std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; & item) const<br> |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**getAll**](classsdm_1_1DiscreteSpace.md#function-getall) () <br>_Get all possible items in the space._  |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1DiscreteSpace.md#function-getdim) () const<br>_Get the dimension._  |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getItem**](classsdm_1_1DiscreteSpace.md#function-getitem) ([**number**](namespacesdm.md#typedef-number) index) const<br>_Get the item at a specific index._  |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getItemAddress**](classsdm_1_1DiscreteSpace.md#function-getitemaddress) (const T & item\_value) <br>_Get the item at a specific index._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getItemIndex**](classsdm_1_1DiscreteSpace.md#function-getitemindex) (const std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; & item) const<br>_Get the index of an item._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumItems**](classsdm_1_1DiscreteSpace.md#function-getnumitems) () const<br>_Get the number of items in the space._  |
| virtual bool | [**isDiscrete**](classsdm_1_1DiscreteSpace.md#function-isdiscrete) () const<br>_Return true because this is a discrete space._  |
|  bool | [**isStoringItems**](classsdm_1_1DiscreteSpace.md#function-isstoringitems) () const<br> |
|  bool | [**operator!=**](classsdm_1_1DiscreteSpace.md#function-operator) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & sp) const<br> |
|  bool | [**operator==**](classsdm_1_1DiscreteSpace.md#function-operator-2) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) & sp) const<br> |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**sample**](classsdm_1_1DiscreteSpace.md#function-sample) () const<br>_Sample a random item from the space._  |
|  std::string | [**short\_str**](classsdm_1_1DiscreteSpace.md#function-short-str) () const<br> |
|  void | [**storeItems**](classsdm_1_1DiscreteSpace.md#function-storeitems) (bool store\_items) <br> |
| virtual std::string | [**str**](classsdm_1_1DiscreteSpace.md#function-str) () const<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |

## Public Functions inherited from sdm::Space

See [sdm::Space](classsdm_1_1Space.md)

| Type | Name |
| ---: | :--- |
| virtual [**iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type) | [**begin**](classsdm_1_1Space.md#function-begin) () = 0<br> |
| virtual [**iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type) | [**end**](classsdm_1_1Space.md#function-end) () = 0<br> |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1Space.md#function-getdim) () const = 0<br>_Get the dimension of the space._  |
|  bool | [**isContinuous**](classsdm_1_1Space.md#function-iscontinuous) () const<br>_Check if the space is continous._  |
| virtual bool | [**isDiscrete**](classsdm_1_1Space.md#function-isdiscrete) () const = 0<br>_Check if the space is discrete._  |
|  bool | [**operator!=**](classsdm_1_1Space.md#function-operator) (const [**Space**](classsdm_1_1Space.md) & sp) const<br> |
|  bool | [**operator==**](classsdm_1_1Space.md#function-operator-2) (const [**Space**](classsdm_1_1Space.md) & sp) const<br> |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**sample**](classsdm_1_1Space.md#function-sample) () const<br>_Sample a random item from the space._  |
| virtual std::string | [**str**](classsdm_1_1Space.md#function-str) () const = 0<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**toDiscreteSpace**](classsdm_1_1Space.md#function-todiscretespace) () <br> |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**toMultiDiscreteSpace**](classsdm_1_1Space.md#function-tomultidiscretespace) () <br> |
| virtual  | [**~Space**](classsdm_1_1Space.md#function-space) () <br> |



## Protected Types

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap)  <br> |
| typedef items\_bimap::value\_type | [**items\_bimap\_value**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap-value)  <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**all\_items\_**](classsdm_1_1DiscreteSpace.md#variable-all-items-)  <br>_the list of possible items in the space with their index_  |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**list\_items\_**](classsdm_1_1DiscreteSpace.md#variable-list-items-)  <br>_the list of possible items without their index_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_items\_**](classsdm_1_1DiscreteSpace.md#variable-num-items-)  <br>_number of possible items in the space (ex: [5, 12]_  _&gt; 8 items)_ |
|  bool | [**store\_items\_**](classsdm_1_1DiscreteSpace.md#variable-store-items-)   = = true<br> |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**generateItems**](classsdm_1_1DiscreteSpace.md#function-generateitems) () <br>_Generates all joint items and maintains a bimap of indexes and corresponding pointers of joint items._  |
|  bool | [**isGenerated**](classsdm_1_1DiscreteSpace.md#function-isgenerated) () <br> |




# Detailed Description


In order to instantiate an object of this class, you must provide the constructor method a the list of all available values.



**Template parameters:**


* `std::shared_ptr<Item>` The type of each element in the space. 



    
## Public Types Documentation


### typedef iterator\_type 


```cpp
using sdm::DiscreteSpace::iterator_type =  Space::iterator_type;
```



### typedef value\_type 


```cpp
using sdm::DiscreteSpace::value_type =  std::shared_ptr<Item>;
```


## Public Functions Documentation


### function DiscreteSpace [1/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace () 
```



### function DiscreteSpace [2/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace (
    const std::vector< std::shared_ptr< Item >> & items
) 
```




**Parameters:**


* `items` a list of possible items in the space 



        

### function DiscreteSpace [3/5]


```cpp
template<typename T typename T>
inline sdm::DiscreteSpace::DiscreteSpace (
    const std::vector< T > & items
) 
```



### function DiscreteSpace [4/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace (
    std::initializer_list< std::shared_ptr< Item >> vals
) 
```



### function DiscreteSpace [5/5]


```cpp
sdm::DiscreteSpace::DiscreteSpace (
    const DiscreteSpace & copy
) 
```



### function begin 


```cpp
virtual iterator_type sdm::DiscreteSpace::begin () 
```


Implements [*sdm::Space::begin*](classsdm_1_1Space.md#function-begin)


### function contains 


```cpp
bool sdm::DiscreteSpace::contains (
    const std::shared_ptr< Item > &
) const
```




**Returns:**

true 




**Returns:**

false 




        

### function end 


```cpp
virtual iterator_type sdm::DiscreteSpace::end () 
```


Implements [*sdm::Space::end*](classsdm_1_1Space.md#function-end)


### function find 


```cpp
int sdm::DiscreteSpace::find (
    const std::shared_ptr< Item > & item
) const
```



### function getAll 


```cpp
std::vector< std::shared_ptr< Item > > sdm::DiscreteSpace::getAll () 
```



### function getDim 


```cpp
virtual std::vector< number > sdm::DiscreteSpace::getDim () const
```


Implements [*sdm::Space::getDim*](classsdm_1_1Space.md#function-getdim)


### function getItem 


```cpp
std::shared_ptr< Item > sdm::DiscreteSpace::getItem (
    number index
) const
```



### function getItemAddress 


```cpp
template<typename T typename T>
inline std::shared_ptr< Item > sdm::DiscreteSpace::getItemAddress (
    const T & item_value
) 
```



### function getItemIndex 


```cpp
number sdm::DiscreteSpace::getItemIndex (
    const std::shared_ptr< Item > & item
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


### function isStoringItems 


```cpp
bool sdm::DiscreteSpace::isStoringItems () const
```



### function operator!= 


```cpp
bool sdm::DiscreteSpace::operator!= (
    const DiscreteSpace & sp
) const
```



### function operator== 


```cpp
bool sdm::DiscreteSpace::operator== (
    const DiscreteSpace & sp
) const
```



### function sample 


```cpp
virtual std::shared_ptr< Item > sdm::DiscreteSpace::sample () const
```


Implements [*sdm::Space::sample*](classsdm_1_1Space.md#function-sample)


### function short\_str 


```cpp
std::string sdm::DiscreteSpace::short_str () const
```



### function storeItems 


```cpp
void sdm::DiscreteSpace::storeItems (
    bool store_items
) 
```



### function str 


```cpp
virtual std::string sdm::DiscreteSpace::str () const
```


Implements [*sdm::Space::str*](classsdm_1_1Space.md#function-str)

## Protected Types Documentation


### typedef items\_bimap 


```cpp
using sdm::DiscreteSpace::items_bimap =  boost::bimaps::bimap<number, std::shared_ptr<Item> >;
```



### typedef items\_bimap\_value 


```cpp
using sdm::DiscreteSpace::items_bimap_value =  items_bimap::value_type;
```


## Protected Attributes Documentation


### variable all\_items\_ 


```cpp
items_bimap sdm::DiscreteSpace::all_items_;
```



### variable list\_items\_ 


```cpp
std::vector<std::shared_ptr<Item> > sdm::DiscreteSpace::list_items_;
```



### variable num\_items\_ 


```cpp
number sdm::DiscreteSpace::num_items_;
```



### variable store\_items\_ 


```cpp
bool sdm::DiscreteSpace::store_items_;
```


## Protected Functions Documentation


### function generateItems 


```cpp
void sdm::DiscreteSpace::generateItems () 
```



### function isGenerated 


```cpp
bool sdm::DiscreteSpace::isGenerated () 
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
The documentation for this class was generated from the following file `src/sdm/core/space/discrete_space.hpp`