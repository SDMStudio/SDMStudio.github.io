
# Class sdm::MultiDiscreteSpace

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)



_This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ [More...](#detailed-description)

* `#include <multi_discrete_space.hpp>`



Inherits the following classes: [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::Joint](classsdm_1_1Joint.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**DiscreteSpace::iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**iterator\_type**](classsdm_1_1MultiDiscreteSpace.md#typedef-iterator-type)  <br> |
| typedef [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**value\_type**](classsdm_1_1MultiDiscreteSpace.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef [**Space::iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type) | [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type)  <br> |
| typedef std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**value\_type**](classsdm_1_1DiscreteSpace.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Space

See [sdm::Space](classsdm_1_1Space.md)

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type)  <br> |

## Public Types inherited from sdm::Joint

See [sdm::Joint](classsdm_1_1Joint.md)

| Type | Name |
| ---: | :--- |
| typedef T | [**value\_type**](classsdm_1_1Joint.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-1-5) () <br>_Instantiate a default discrete space (_ [_**MultiDiscreteSpace**_](classsdm_1_1MultiDiscreteSpace.md) _class)_ |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-2-5) (const std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt;&gt; & sub\_spaces, bool store\_items=true) <br>_Instantiate a multi discrete space from the list its sub-spaces (as shared pointer)._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-3-5) (const std::vector&lt; std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; & values, bool store\_items=true) <br>_Instantiate a multi discrete space from the list its sub-spaces (as shared pointer)._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-4-5) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) & copy) <br>_Copy constructor._  |
|   | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md#function-multidiscretespace-5-5) (const std::enable\_if\_t&lt; TBool, std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; & num\_items) <br>_Instantiate a multi discrete space using a list of dimensions (one by single space). This constructor is only available for classes where std::shared\_ptr&lt;Item&gt; is an integer (long, int, short, etc)._  |
| virtual [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**begin**](classsdm_1_1MultiDiscreteSpace.md#function-begin) () <br> |
|  bool | [**contains**](classsdm_1_1MultiDiscreteSpace.md#function-contains) (const std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &) const<br>_Verify is the multi discrete space contains the_ [_**Joint**_](classsdm_1_1Joint.md) _&lt;std::shared\_ptr&lt;Item&gt;&gt;;._ |
| virtual [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**end**](classsdm_1_1MultiDiscreteSpace.md#function-end) () <br> |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**getAll**](classsdm_1_1MultiDiscreteSpace.md#function-getall) () <br>_Get all the joint values._  |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getItem**](classsdm_1_1MultiDiscreteSpace.md#function-getitem-1-2) ([**number**](namespacesdm.md#typedef-number) index) const<br>_Get a specific item from its index._  |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getItem**](classsdm_1_1MultiDiscreteSpace.md#function-getitem-2-2) ([**number**](namespacesdm.md#typedef-number) ag\_id, [**number**](namespacesdm.md#typedef-number) item\_index) const<br>_Get a specific item for a given agent (from its index)_  |
|  [**number**](namespacesdm.md#typedef-number) | [**getItemIndex**](classsdm_1_1MultiDiscreteSpace.md#function-getitemindex) ([**number**](namespacesdm.md#typedef-number) ag\_id, const std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; & item) const<br>_Get a specific index of an item for a given agent._  |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getJointItem**](classsdm_1_1MultiDiscreteSpace.md#function-getjointitem) ([**number**](namespacesdm.md#typedef-number)) const<br>_Get the corresponding joint item from its index._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getJointItemIndex**](classsdm_1_1MultiDiscreteSpace.md#function-getjointitemindex) (std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; & jitem) const<br>_Transform joint item to its index in the list of all joint items._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-getnumspaces) () const<br>_Get the number of sub-space._  |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getSpace**](classsdm_1_1MultiDiscreteSpace.md#function-getspace) ([**number**](namespacesdm.md#typedef-number) index) const<br>_Get a specific subspace._  |
|  bool | [**operator!=**](classsdm_1_1MultiDiscreteSpace.md#function-operator) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) & other) const<br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) & | [**operator=**](classsdm_1_1MultiDiscreteSpace.md#function-operator-2) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &) <br> |
|  bool | [**operator==**](classsdm_1_1MultiDiscreteSpace.md#function-operator-3) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) & other) const<br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-1-3) (const std::enable\_if\_t&lt; TBool, std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; & num\_items) <br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-2-3) (const std::vector&lt; std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; &) <br> |
|  void | [**setSpaces**](classsdm_1_1MultiDiscreteSpace.md#function-setspaces-3-3) (const std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt;&gt; & spaces) <br> |
| virtual std::string | [**str**](classsdm_1_1MultiDiscreteSpace.md#function-str) () const<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |

## Public Functions inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

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

## Public Functions inherited from sdm::Joint

See [sdm::Joint](classsdm_1_1Joint.md)

| Type | Name |
| ---: | :--- |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-1-4) () <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-2-4) (const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-3-4) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-4-4) (std::initializer\_list&lt; T &gt; list\_values) <br> |
|  const T & | [**get**](classsdm_1_1Joint.md#function-get) (const [**number**](namespacesdm.md#typedef-number) &) const<br>_Get the element for agent i._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1Joint.md#function-getnumagents) () const<br>_Get the number of agents (i.e. the size of the joint element)_  |
| virtual T | [**operator()**](classsdm_1_1Joint.md#function-operator()) (const [**number**](namespacesdm.md#typedef-number) &) <br>_Get the element for agent i._  |
|  void | [**serialize**](classsdm_1_1Joint.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  std::string | [**str**](classsdm_1_1Joint.md#function-str) () const<br> |
|  std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; TOutput &gt; &gt; &gt; | [**toJoint**](classsdm_1_1Joint.md#function-tojoint) () <br> |
| virtual  | [**~Joint**](classsdm_1_1Joint.md#function-joint) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |






## Protected Types

| Type | Name |
| ---: | :--- |
| typedef [**DiscreteSpace::items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**jitems\_bimap**](classsdm_1_1MultiDiscreteSpace.md#typedef-jitems-bimap)  <br> |
| typedef jitems\_bimap::value\_type | [**jitems\_bimap\_value**](classsdm_1_1MultiDiscreteSpace.md#typedef-jitems-bimap-value)  <br> |

## Protected Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap)  <br> |
| typedef items\_bimap::value\_type | [**items\_bimap\_value**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap-value)  <br> |










## Protected Attributes inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
|  [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**all\_items\_**](classsdm_1_1DiscreteSpace.md#variable-all-items-)  <br>_the list of possible items in the space with their index_  |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**list\_items\_**](classsdm_1_1DiscreteSpace.md#variable-list-items-)  <br>_the list of possible items without their index_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_items\_**](classsdm_1_1DiscreteSpace.md#variable-num-items-)  <br>_number of possible items in the space (ex: [5, 12]_  _&gt; 8 items)_ |
|  bool | [**store\_items\_**](classsdm_1_1DiscreteSpace.md#variable-store-items-)   = = true<br> |









## Protected Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**cast**](classsdm_1_1MultiDiscreteSpace.md#function-cast) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & space) const<br> |
|  void | [**setNumJItems**](classsdm_1_1MultiDiscreteSpace.md#function-setnumjitems) ([**number**](namespacesdm.md#typedef-number)) <br>_Sets the number of joint items._  |

## Protected Functions inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
|  void | [**generateItems**](classsdm_1_1DiscreteSpace.md#function-generateitems) () <br>_Generates all joint items and maintains a bimap of indexes and corresponding pointers of joint items._  |
|  bool | [**isGenerated**](classsdm_1_1DiscreteSpace.md#function-isgenerated) () <br> |









# Detailed Description




**Template parameters:**


* `std::shared_ptr<Item>` The type of items in each sub-discrete space. 



    
## Public Types Documentation


### typedef iterator\_type 


```cpp
using sdm::MultiDiscreteSpace::iterator_type =  DiscreteSpace::iterator_type;
```



### typedef value\_type 


```cpp
using sdm::MultiDiscreteSpace::value_type =  Joint<std::shared_ptr<Item> >;
```


## Public Functions Documentation


### function MultiDiscreteSpace [1/5]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace () 
```



### function MultiDiscreteSpace [2/5]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::vector< std::shared_ptr< Space >> & sub_spaces,
    bool store_items=true
) 
```



### function MultiDiscreteSpace [3/5]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::vector< std::vector< std::shared_ptr< Item >>> & values,
    bool store_items=true
) 
```



### function MultiDiscreteSpace [4/5]


```cpp
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const MultiDiscreteSpace & copy
) 
```




**Parameters:**


* `copy` the space to be copied 



        

### function MultiDiscreteSpace [5/5]


```cpp
template<bool TBool>
sdm::MultiDiscreteSpace::MultiDiscreteSpace (
    const std::enable_if_t< TBool, std::vector< std::shared_ptr< Item >>> & num_items
) 
```




**Parameters:**


* `num_items` the number of items in each spaces. If {k\_1, k\_2} then {0, 1, ..., k\_1 - 1} are possible items in first subspace and {0, 1, ..., k\_2 - 1} in the second subspace. 



        

### function begin 


```cpp
virtual iterator_type sdm::MultiDiscreteSpace::begin () 
```


Implements [*sdm::DiscreteSpace::begin*](classsdm_1_1DiscreteSpace.md#function-begin)


### function contains 


```cpp
bool sdm::MultiDiscreteSpace::contains (
    const std::shared_ptr< Item > &
) const
```




**Returns:**

true 




**Returns:**

false 




        

### function end 


```cpp
virtual iterator_type sdm::MultiDiscreteSpace::end () 
```


Implements [*sdm::DiscreteSpace::end*](classsdm_1_1DiscreteSpace.md#function-end)


### function getAll 


```cpp
std::vector< std::shared_ptr< Item > > sdm::MultiDiscreteSpace::getAll () 
```




**Returns:**

the list of all possible joint items 




        

### function getItem [1/2]


```cpp
std::shared_ptr< Item > sdm::MultiDiscreteSpace::getItem (
    number index
) const
```




**Parameters:**


* `index` the index 



**Returns:**

a pointer on the item 




        

### function getItem [2/2]


```cpp
std::shared_ptr< Item > sdm::MultiDiscreteSpace::getItem (
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
    const std::shared_ptr< Item > & item
) const
```




**Parameters:**


* `ag_id` index of the agent 
* `item` the item we want to get the index 



        

### function getJointItem 


```cpp
std::shared_ptr< Item > sdm::MultiDiscreteSpace::getJointItem (
    number
) const
```



### function getJointItemIndex 


```cpp
number sdm::MultiDiscreteSpace::getJointItemIndex (
    std::shared_ptr< Joint < std::shared_ptr< Item >>> & jitem
) const
```




**Parameters:**


* `jitem` the joint item we want to get the index 



**Returns:**

the corresponding index 




        

### function getNumSpaces 


```cpp
number sdm::MultiDiscreteSpace::getNumSpaces () const
```



### function getSpace 


```cpp
std::shared_ptr< Space > sdm::MultiDiscreteSpace::getSpace (
    number index
) const
```




**Parameters:**


* `index` the index of the space 



**Returns:**

a shared pointer on a specific space 




        

### function operator!= 


```cpp
bool sdm::MultiDiscreteSpace::operator!= (
    const MultiDiscreteSpace & other
) const
```



### function operator= 


```cpp
MultiDiscreteSpace & sdm::MultiDiscreteSpace::operator= (
    const MultiDiscreteSpace &
) 
```



### function operator== 


```cpp
bool sdm::MultiDiscreteSpace::operator== (
    const MultiDiscreteSpace & other
) const
```



### function setSpaces [1/3]


```cpp
template<bool TBool>
void sdm::MultiDiscreteSpace::setSpaces (
    const std::enable_if_t< TBool, std::vector< std::shared_ptr< Item >>> & num_items
) 
```



### function setSpaces [2/3]


```cpp
void sdm::MultiDiscreteSpace::setSpaces (
    const std::vector< std::vector< std::shared_ptr< Item >>> &
) 
```



### function setSpaces [3/3]


```cpp
void sdm::MultiDiscreteSpace::setSpaces (
    const std::vector< std::shared_ptr< Space >> & spaces
) 
```



### function str 


```cpp
virtual std::string sdm::MultiDiscreteSpace::str () const
```


Implements [*sdm::DiscreteSpace::str*](classsdm_1_1DiscreteSpace.md#function-str)

## Protected Types Documentation


### typedef jitems\_bimap 


```cpp
using sdm::MultiDiscreteSpace::jitems_bimap =  DiscreteSpace::items_bimap;
```



### typedef jitems\_bimap\_value 


```cpp
using sdm::MultiDiscreteSpace::jitems_bimap_value =  jitems_bimap::value_type;
```


## Protected Functions Documentation


### function cast 


```cpp
inline std::shared_ptr< DiscreteSpace > sdm::MultiDiscreteSpace::cast (
    const std::shared_ptr< Space > & space
) const
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
    const MultiDiscreteSpace & sp
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/space/multi_discrete_space.hpp`