
# Class sdm::FunctionSpace

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TFunction typename TFunction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**FunctionSpace**](classsdm_1_1FunctionSpace.md)



_The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._[More...](#detailed-description)

* `#include <function_space.hpp>`



Inherits the following classes: [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**DiscreteSpace::iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**iterator\_type**](classsdm_1_1FunctionSpace.md#typedef-iterator-type)  <br> |

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










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-1-4) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & input\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & output\_space, bool store\_functions=false) <br> |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-2-4) (std::vector&lt; [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type) &gt; possible\_inputs, std::vector&lt; [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type) &gt; possible\_outputs, bool store\_functions=false) <br>_Construct a new_ [_**Function**_](classsdm_1_1Function.md) __[_**Space**_](classsdm_1_1Space.md) _object._ |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-3-4) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & input\_space, const std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt;&gt; & output\_spaces, bool store\_functions=false) <br>_Construct a new_ [_**Function**_](classsdm_1_1Function.md) __[_**Space**_](classsdm_1_1Space.md) _object._ |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-4-4) (std::vector&lt; [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type) &gt; possible\_inputs, std::vector&lt; std::vector&lt; [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type) &gt;&gt; possible\_outputs, bool store\_functions=false) <br> |
| virtual [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**begin**](classsdm_1_1FunctionSpace.md#function-begin) () <br> |
| virtual [**iterator\_type**](classsdm_1_1DiscreteSpace.md#typedef-iterator-type) | [**end**](classsdm_1_1FunctionSpace.md#function-end) () <br> |

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




## Protected Types

| Type | Name |
| ---: | :--- |
| typedef typename TFunction::input\_type | [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type)  <br> |
| typedef typename TFunction::output\_type | [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type)  <br> |
| typedef TFunction | [**value\_type**](classsdm_1_1FunctionSpace.md#typedef-value-type)  <br> |

## Protected Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap)  <br> |
| typedef items\_bimap::value\_type | [**items\_bimap\_value**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap-value)  <br> |





## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**input\_space\_**](classsdm_1_1FunctionSpace.md#variable-input-space-)  <br>_The input space._  |
|  std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; &gt; | [**output\_space\_**](classsdm_1_1FunctionSpace.md#variable-output-space-)  <br>_The vector of output spaces (possibly one output space for each input space). In case output space are similar for all input, use the adequate constructor._  |

## Protected Attributes inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
|  [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**all\_items\_**](classsdm_1_1DiscreteSpace.md#variable-all-items-)  <br>_the list of possible items in the space with their index_  |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**list\_items\_**](classsdm_1_1DiscreteSpace.md#variable-list-items-)  <br>_the list of possible items without their index_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_items\_**](classsdm_1_1DiscreteSpace.md#variable-num-items-)  <br>_number of possible items in the space (ex: [5, 12]_  _&gt; 8 items)_ |
|  bool | [**store\_items\_**](classsdm_1_1DiscreteSpace.md#variable-store-items-)   = = true<br> |






## Protected Functions inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
|  void | [**generateItems**](classsdm_1_1DiscreteSpace.md#function-generateitems) () <br>_Generates all joint items and maintains a bimap of indexes and corresponding pointers of joint items._  |
|  bool | [**isGenerated**](classsdm_1_1DiscreteSpace.md#function-isgenerated) () <br> |





# Detailed Description




**Template parameters:**


* `TFunction` The type of function to generate. 



    
## Public Types Documentation


### typedef iterator\_type 


```cpp
using sdm::FunctionSpace< TFunction >::iterator_type =  DiscreteSpace::iterator_type;
```


## Public Functions Documentation


### function FunctionSpace [1/4]


```cpp
sdm::FunctionSpace::FunctionSpace (
    const std::shared_ptr< Space > & input_space,
    const std::shared_ptr< Space > & output_space,
    bool store_functions=false
) 
```



### function FunctionSpace [2/4]


```cpp
sdm::FunctionSpace::FunctionSpace (
    std::vector< input_type > possible_inputs,
    std::vector< output_type > possible_outputs,
    bool store_functions=false
) 
```




**Parameters:**


* `possible_inputs` possible inputs 
* `possible_outputs` possible ouputs 



        

### function FunctionSpace [3/4]


```cpp
sdm::FunctionSpace::FunctionSpace (
    const std::shared_ptr< Space > & input_space,
    const std::vector< std::shared_ptr< Space >> & output_spaces,
    bool store_functions=false
) 
```




**Parameters:**


* `input_space` 
* `output_sps` output spaces, one for each input value (requirements : input\_space-&gt;size() == output\_spaces.size() or output\_spaces.size()==1). 



        

### function FunctionSpace [4/4]


```cpp
sdm::FunctionSpace::FunctionSpace (
    std::vector< input_type > possible_inputs,
    std::vector< std::vector< output_type >> possible_outputs,
    bool store_functions=false
) 
```



### function begin 


```cpp
virtual iterator_type sdm::FunctionSpace::begin () 
```


Implements [*sdm::DiscreteSpace::begin*](classsdm_1_1DiscreteSpace.md#function-begin)


### function end 


```cpp
virtual iterator_type sdm::FunctionSpace::end () 
```


Implements [*sdm::DiscreteSpace::end*](classsdm_1_1DiscreteSpace.md#function-end)

## Protected Types Documentation


### typedef input\_type 


```cpp
using sdm::FunctionSpace< TFunction >::input_type =  typename TFunction::input_type;
```



### typedef output\_type 


```cpp
using sdm::FunctionSpace< TFunction >::output_type =  typename TFunction::output_type;
```



### typedef value\_type 


```cpp
using sdm::FunctionSpace< TFunction >::value_type =  TFunction;
```


## Protected Attributes Documentation


### variable input\_space\_ 


```cpp
std::shared_ptr<Space> sdm::FunctionSpace< TFunction >::input_space_;
```



### variable output\_space\_ 


```cpp
std::vector<std::shared_ptr<Space> > sdm::FunctionSpace< TFunction >::output_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/space/function_space.hpp`