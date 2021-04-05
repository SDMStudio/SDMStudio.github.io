
<NavBar active_item_id="2"/>

# Class sdm::VectorImpl

**template &lt;typename I, typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**VectorImpl**](classsdm_1_1VectorImpl.md)



_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._ [More...](#detailed-description)

* `#include <vector_impl.hpp>`





Inherited by the following classes: [sdm::sdmsVector](classsdm_1_1sdmsVector.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual I | [**argmax**](classsdm_1_1VectorImpl.md#function-argmax) () const = 0<br> |
| virtual I | [**argmin**](classsdm_1_1VectorImpl.md#function-argmin) () const = 0<br> |
| virtual T | [**at**](classsdm_1_1VectorImpl.md#function-at) (const I &) const = 0<br> |
| virtual T | [**max**](classsdm_1_1VectorImpl.md#function-max) () const = 0<br> |
| virtual T | [**min**](classsdm_1_1VectorImpl.md#function-min) () const = 0<br> |
| virtual T | [**norm\_1**](classsdm_1_1VectorImpl.md#function-norm-1) () const = 0<br> |
| virtual T | [**norm\_2**](classsdm_1_1VectorImpl.md#function-norm-2) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1VectorImpl.md#function-str) () const = 0<br> |








# Detailed Description




**Template parameters:**


* `I` Type of the index. 
* `T` Type of the values. 



    
## Public Functions Documentation


### function argmax 


```cpp
virtual I sdm::VectorImpl::argmax () const = 0
```



### function argmin 


```cpp
virtual I sdm::VectorImpl::argmin () const = 0
```



### function at 


```cpp
virtual T sdm::VectorImpl::at (
    const I &
) const = 0
```



### function max 


```cpp
virtual T sdm::VectorImpl::max () const = 0
```



### function min 


```cpp
virtual T sdm::VectorImpl::min () const = 0
```



### function norm\_1 


```cpp
virtual T sdm::VectorImpl::norm_1 () const = 0
```



### function norm\_2 


```cpp
virtual T sdm::VectorImpl::norm_2 () const = 0
```



### function str 


```cpp
virtual std::string sdm::VectorImpl::str () const = 0
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/linear_algebra/vector_impl.hpp`