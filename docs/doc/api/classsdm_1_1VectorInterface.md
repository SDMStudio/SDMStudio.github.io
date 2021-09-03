
# Class sdm::VectorInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename I, typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**VectorInterface**](classsdm_1_1VectorInterface.md)



_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the functions of the interface._ [More...](#detailed-description)

* `#include <vector_interface.hpp>`





Inherited by the following classes: [sdm::sdmsVector](classsdm_1_1sdmsVector.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**addValueAt**](classsdm_1_1VectorInterface.md#function-addvalueat) (const I & index, const T & value) = 0<br> |
| virtual I | [**argmax**](classsdm_1_1VectorInterface.md#function-argmax) () = 0<br> |
| virtual I | [**argmin**](classsdm_1_1VectorInterface.md#function-argmin) () = 0<br> |
| virtual T | [**at**](classsdm_1_1VectorInterface.md#function-at) (const I & index) const = 0<br> |
| virtual std::vector&lt; I &gt; | [**getIndexes**](classsdm_1_1VectorInterface.md#function-getindexes) () const = 0<br> |
| virtual T | [**getValueAt**](classsdm_1_1VectorInterface.md#function-getvalueat) (const I & index) const = 0<br> |
| virtual T | [**max**](classsdm_1_1VectorInterface.md#function-max) () = 0<br> |
| virtual T | [**min**](classsdm_1_1VectorInterface.md#function-min) () = 0<br> |
| virtual void | [**setValueAt**](classsdm_1_1VectorInterface.md#function-setvalueat) (const I & index, const T & value) = 0<br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1VectorInterface.md#function-size) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1VectorInterface.md#function-str) () const = 0<br> |








# Detailed Description




**Template parameters:**


* `I` Type of the index. 
* `T` Type of the values. 



    
## Public Functions Documentation


### function addValueAt 


```cpp
virtual void sdm::VectorInterface::addValueAt (
    const I & index,
    const T & value
) = 0
```



### function argmax 


```cpp
virtual I sdm::VectorInterface::argmax () = 0
```



### function argmin 


```cpp
virtual I sdm::VectorInterface::argmin () = 0
```



### function at 


```cpp
virtual T sdm::VectorInterface::at (
    const I & index
) const = 0
```



### function getIndexes 


```cpp
virtual std::vector< I > sdm::VectorInterface::getIndexes () const = 0
```



### function getValueAt 


```cpp
virtual T sdm::VectorInterface::getValueAt (
    const I & index
) const = 0
```



### function max 


```cpp
virtual T sdm::VectorInterface::max () = 0
```



### function min 


```cpp
virtual T sdm::VectorInterface::min () = 0
```



### function setValueAt 


```cpp
virtual void sdm::VectorInterface::setValueAt (
    const I & index,
    const T & value
) = 0
```



### function size 


```cpp
virtual size_t sdm::VectorInterface::size () const = 0
```



### function str 


```cpp
virtual std::string sdm::VectorInterface::str () const = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/vector_interface.hpp`