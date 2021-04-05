
<NavBar active_item_id="2"/>

# Class sdm::AbstractVector

**template &lt;typename I typename I, typename T typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**AbstractVector**](classsdm_1_1AbstractVector.md)



_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._ [More...](#detailed-description)

* `#include <abstract_vector.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual I | [**argmax**](classsdm_1_1AbstractVector.md#function-argmax) () const = 0<br> |
| virtual I | [**argmin**](classsdm_1_1AbstractVector.md#function-argmin) () const = 0<br> |
| virtual T | [**at**](classsdm_1_1AbstractVector.md#function-at) (I) = 0<br> |
| virtual T | [**max**](classsdm_1_1AbstractVector.md#function-max) () const = 0<br> |
| virtual T | [**min**](classsdm_1_1AbstractVector.md#function-min) () const = 0<br> |
| virtual T | [**norm\_1**](classsdm_1_1AbstractVector.md#function-norm-1) () const = 0<br> |
| virtual T | [**norm\_2**](classsdm_1_1AbstractVector.md#function-norm-2) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1AbstractVector.md#function-str) () const = 0<br> |








# Detailed Description




**Template parameters:**


* `I` Type of the index. 
* `T` Type of the values. 



    
## Public Functions Documentation


### function argmax 


```cpp
virtual I sdm::AbstractVector::argmax () const = 0
```



### function argmin 


```cpp
virtual I sdm::AbstractVector::argmin () const = 0
```



### function at 


```cpp
virtual T sdm::AbstractVector::at (
    I
) = 0
```



### function max 


```cpp
virtual T sdm::AbstractVector::max () const = 0
```



### function min 


```cpp
virtual T sdm::AbstractVector::min () const = 0
```



### function norm\_1 


```cpp
virtual T sdm::AbstractVector::norm_1 () const = 0
```



### function norm\_2 


```cpp
virtual T sdm::AbstractVector::norm_2 () const = 0
```



### function str 


```cpp
virtual std::string sdm::AbstractVector::str () const = 0
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/linear_algebra/abstract_vector.hpp`