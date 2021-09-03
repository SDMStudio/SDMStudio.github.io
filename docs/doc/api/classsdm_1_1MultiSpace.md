
# Class sdm::MultiSpace

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MultiSpace**](classsdm_1_1MultiSpace.md)



_A multi-space is a set a spaces._ [More...](#detailed-description)

* `#include <multi_space.hpp>`



Inherits the following classes: [sdm::Space](classsdm_1_1Space.md)









## Public Types inherited from sdm::Space

See [sdm::Space](classsdm_1_1Space.md)

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**iterator\_type**](classsdm_1_1Space.md#typedef-iterator-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MultiSpace**](classsdm_1_1MultiSpace.md#function-multispace-1-2) () <br> |
|   | [**MultiSpace**](classsdm_1_1MultiSpace.md#function-multispace-2-2) (const std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt;&gt; &) <br> |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1MultiSpace.md#function-getdim) () const<br>_Get the dimension of the space._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumSpaces**](classsdm_1_1MultiSpace.md#function-getnumspaces) () const<br>_Get the number of sub-space._  |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getSpace**](classsdm_1_1MultiSpace.md#function-getspace) ([**number**](namespacesdm.md#typedef-number) index) const<br>_Get a specific subspace._  |
|  std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; &gt; | [**getSpaces**](classsdm_1_1MultiSpace.md#function-getspaces) () const<br>_Get all spaces._  |
| virtual bool | [**isDiscrete**](classsdm_1_1MultiSpace.md#function-isdiscrete) () const<br>_Check if the space is discrete._  |
|  bool | [**operator!=**](classsdm_1_1MultiSpace.md#function-operator) (const [**MultiSpace**](classsdm_1_1MultiSpace.md) &) const<br> |
|  [**MultiSpace**](classsdm_1_1MultiSpace.md) & | [**operator=**](classsdm_1_1MultiSpace.md#function-operator-2) (const [**MultiSpace**](classsdm_1_1MultiSpace.md) &) <br> |
|  bool | [**operator==**](classsdm_1_1MultiSpace.md#function-operator-3) (const [**MultiSpace**](classsdm_1_1MultiSpace.md) &) const<br> |
|  void | [**setSpaces**](classsdm_1_1MultiSpace.md#function-setspaces) (const std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt;&gt; &) <br>_Change the list of spaces. You may prefer build a new_ [_**MultiSpace**_](classsdm_1_1MultiSpace.md) _instead of changing values of existing one._ |
| virtual std::string | [**str**](classsdm_1_1MultiSpace.md#function-str) () const<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |

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







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; &gt; | [**spaces\_**](classsdm_1_1MultiSpace.md#variable-spaces-)  <br>_The list of spaces._  |








# Detailed Description


Each space can be of any derived class of [**Space**](classsdm_1_1Space.md) class. By default [**Space**](classsdm_1_1Space.md) is set to [**Space**](classsdm_1_1Space.md), which means that any space can be used (can be composed of both discrete and continuous spaces). [**MultiSpace**](classsdm_1_1MultiSpace.md) herites from [**Space**](classsdm_1_1Space.md) so you can even build hierarchical spaces like [**MultiSpace**](classsdm_1_1MultiSpace.md) of [**MultiSpace**](classsdm_1_1MultiSpace.md) ([**MultiSpace**](classsdm_1_1MultiSpace.md)&lt;MultiSpace&lt;Space&gt;&gt;&gt;).



**Template parameters:**


* [**Space**](classsdm_1_1Space.md) 



    
## Public Functions Documentation


### function MultiSpace [1/2]


```cpp
sdm::MultiSpace::MultiSpace () 
```



### function MultiSpace [2/2]


```cpp
sdm::MultiSpace::MultiSpace (
    const std::vector< std::shared_ptr< Space >> &
) 
```



### function getDim 


```cpp
virtual std::vector< number > sdm::MultiSpace::getDim () const
```


Implements [*sdm::Space::getDim*](classsdm_1_1Space.md#function-getdim)


### function getNumSpaces 


```cpp
number sdm::MultiSpace::getNumSpaces () const
```



### function getSpace 


```cpp
std::shared_ptr< Space > sdm::MultiSpace::getSpace (
    number index
) const
```




**Parameters:**


* `index` the index of the space 



**Returns:**

a shared pointer on a specific space 




        

### function getSpaces 


```cpp
std::vector< std::shared_ptr< Space > > sdm::MultiSpace::getSpaces () const
```




**Returns:**

the list of space pointers 




        

### function isDiscrete 


```cpp
virtual bool sdm::MultiSpace::isDiscrete () const
```


Implements [*sdm::Space::isDiscrete*](classsdm_1_1Space.md#function-isdiscrete)


### function operator!= 


```cpp
bool sdm::MultiSpace::operator!= (
    const MultiSpace &
) const
```



### function operator= 


```cpp
MultiSpace & sdm::MultiSpace::operator= (
    const MultiSpace &
) 
```



### function operator== 


```cpp
bool sdm::MultiSpace::operator== (
    const MultiSpace &
) const
```



### function setSpaces 


```cpp
void sdm::MultiSpace::setSpaces (
    const std::vector< std::shared_ptr< Space >> &
) 
```



### function str 


```cpp
virtual std::string sdm::MultiSpace::str () const
```


Implements [*sdm::Space::str*](classsdm_1_1Space.md#function-str)

## Protected Attributes Documentation


### variable spaces\_ 


```cpp
std::vector<std::shared_ptr<Space> > sdm::MultiSpace::spaces_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::MultiSpace::operator<< (
    std::ostream & os,
    const MultiSpace & sp
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/space/multi_space.hpp`