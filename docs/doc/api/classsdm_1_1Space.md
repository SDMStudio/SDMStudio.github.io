
# Class sdm::Space

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Space**](classsdm_1_1Space.md)



_This class is an abstract interface that all spaces should inherite._ [More...](#detailed-description)

* `#include <space.hpp>`



Inherits the following classes: std::enable_shared_from_this< Space >


Inherited by the following classes: [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::MultiSpace](classsdm_1_1MultiSpace.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type)  <br> |




## Public Functions

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








# Detailed Description


It gives some useful general methods to use generic spaces in your algorithms. 

    
## Public Types Documentation


### typedef iterator\_type 


```cpp
using sdm::Space::iterator_type =  std::shared_ptr<ItemIterator>;
```


## Public Functions Documentation


### function begin 


```cpp
virtual iterator_type sdm::Space::begin () = 0
```



### function end 


```cpp
virtual iterator_type sdm::Space::end () = 0
```



### function getDim 


```cpp
virtual std::vector< number > sdm::Space::getDim () const = 0
```



### function isContinuous 


```cpp
bool sdm::Space::isContinuous () const
```



### function isDiscrete 


```cpp
virtual bool sdm::Space::isDiscrete () const = 0
```



### function operator!= 


```cpp
bool sdm::Space::operator!= (
    const Space & sp
) const
```



### function operator== 


```cpp
bool sdm::Space::operator== (
    const Space & sp
) const
```



### function sample 


```cpp
inline virtual std::shared_ptr< Item > sdm::Space::sample () const
```



### function str 


```cpp
virtual std::string sdm::Space::str () const = 0
```



### function toDiscreteSpace 


```cpp
std::shared_ptr< DiscreteSpace > sdm::Space::toDiscreteSpace () 
```



### function toMultiDiscreteSpace 


```cpp
std::shared_ptr< MultiDiscreteSpace > sdm::Space::toMultiDiscreteSpace () 
```



### function ~Space 


```cpp
inline virtual sdm::Space::~Space () 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Space::operator<< (
    std::ostream & os,
    const Space & sp
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/space/space.hpp`