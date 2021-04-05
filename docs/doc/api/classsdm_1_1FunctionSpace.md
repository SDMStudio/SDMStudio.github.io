
<NavBar active_item_id="2"/>

# Class sdm::FunctionSpace

**template &lt;typename TFunction typename TFunction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**FunctionSpace**](classsdm_1_1FunctionSpace.md)



_The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._[More...](#detailed-description)

* `#include <function_space.hpp>`



Inherits the following classes: [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)









## Public Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef TItem | [**value\_type**](classsdm_1_1DiscreteSpace.md#typedef-value-type)  <br> |











## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-1-4) ([**input\_space**](classsdm_1_1FunctionSpace.md#typedef-input-space) input\_sp, [**output\_space**](classsdm_1_1FunctionSpace.md#typedef-output-space) output\_sp) <br> |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-2-4) (std::vector&lt; [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type) &gt; possible\_inputs, std::vector&lt; [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type) &gt; possible\_outputs) <br> |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-3-4) ([**input\_space**](classsdm_1_1FunctionSpace.md#typedef-input-space) input\_sp, std::vector&lt; [**output\_space**](classsdm_1_1FunctionSpace.md#typedef-output-space) &gt; output\_sps) <br> |
|   | [**FunctionSpace**](classsdm_1_1FunctionSpace.md#function-functionspace-4-4) (std::vector&lt; [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type) &gt; possible\_inputs, std::vector&lt; std::vector&lt; [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type) &gt;&gt; possible\_outputs) <br> |
|  std::vector&lt; TFunction &gt; | [**getAll**](classsdm_1_1FunctionSpace.md#function-getall) () <br>_Get all the possible function in this space._  |

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
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), TFunction &gt; | [**funct\_bimap**](classsdm_1_1FunctionSpace.md#typedef-funct-bimap)  <br> |
| typedef funct\_bimap::value\_type | [**funct\_bimap\_value**](classsdm_1_1FunctionSpace.md#typedef-funct-bimap-value)  <br> |
| typedef [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type) &gt; | [**input\_space**](classsdm_1_1FunctionSpace.md#typedef-input-space)  <br> |
| typedef typename TFunction::input\_type | [**input\_type**](classsdm_1_1FunctionSpace.md#typedef-input-type)  <br> |
| typedef [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type) &gt; | [**output\_space**](classsdm_1_1FunctionSpace.md#typedef-output-space)  <br> |
| typedef typename TFunction::output\_type | [**output\_type**](classsdm_1_1FunctionSpace.md#typedef-output-type)  <br> |
| typedef TFunction | [**value\_type**](classsdm_1_1FunctionSpace.md#typedef-value-type)  <br> |

## Protected Types inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; [**number**](namespacesdm.md#typedef-number), TItem &gt; | [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap)  <br> |
| typedef items\_bimap::value\_type | [**items\_bimap\_value**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap-value)  <br> |





## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**input\_space**](classsdm_1_1FunctionSpace.md#typedef-input-space) | [**input\_space\_**](classsdm_1_1FunctionSpace.md#variable-input-space-)  <br>_The input space._  |
|  std::vector&lt; [**output\_space**](classsdm_1_1FunctionSpace.md#typedef-output-space) &gt; | [**output\_space\_**](classsdm_1_1FunctionSpace.md#variable-output-space-)  <br>_The vector of output spaces (possibly one output space for each input space). In case output space are similar for all input, use the adequate constructor._  |

## Protected Attributes inherited from sdm::DiscreteSpace

See [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md)

| Type | Name |
| ---: | :--- |
|  [**items\_bimap**](classsdm_1_1DiscreteSpace.md#typedef-items-bimap) | [**all\_items\_**](classsdm_1_1DiscreteSpace.md#variable-all-items-)  <br>_the list of possible items in the space with their index_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_items\_**](classsdm_1_1DiscreteSpace.md#variable-num-items-)  <br>_number of possible items in the space (ex: [5, 12]_  _&gt; 8 items)_ |











# Detailed Description




**Template parameters:**


* `TFunction` The type of function to generate. 



    
## Public Functions Documentation


### function FunctionSpace [1/4]


```cpp
inline sdm::FunctionSpace::FunctionSpace (
    input_space input_sp,
    output_space output_sp
) 
```



### function FunctionSpace [2/4]


```cpp
inline sdm::FunctionSpace::FunctionSpace (
    std::vector< input_type > possible_inputs,
    std::vector< output_type > possible_outputs
) 
```



### function FunctionSpace [3/4]


```cpp
inline sdm::FunctionSpace::FunctionSpace (
    input_space input_sp,
    std::vector< output_space > output_sps
) 
```



### function FunctionSpace [4/4]


```cpp
inline sdm::FunctionSpace::FunctionSpace (
    std::vector< input_type > possible_inputs,
    std::vector< std::vector< output_type >> possible_outputs
) 
```



### function getAll 


```cpp
inline std::vector< TFunction > sdm::FunctionSpace::getAll () 
```




**Returns:**

the list of all possible functions 




        
## Protected Types Documentation


### typedef funct\_bimap 


```cpp
typedef boost::bimaps::bimap<number, TFunction> sdm::FunctionSpace< TFunction >::funct_bimap;
```



### typedef funct\_bimap\_value 


```cpp
typedef funct_bimap::value_type sdm::FunctionSpace< TFunction >::funct_bimap_value;
```



### typedef input\_space 


```cpp
using sdm::FunctionSpace< TFunction >::input_space =  DiscreteSpace<input_type>;
```



### typedef input\_type 


```cpp
using sdm::FunctionSpace< TFunction >::input_type =  typename TFunction::input_type;
```



### typedef output\_space 


```cpp
using sdm::FunctionSpace< TFunction >::output_space =  DiscreteSpace<output_type>;
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
input_space sdm::FunctionSpace< TFunction >::input_space_;
```



### variable output\_space\_ 


```cpp
std::vector<output_space> sdm::FunctionSpace< TFunction >::output_space_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/space/function_space.hpp`