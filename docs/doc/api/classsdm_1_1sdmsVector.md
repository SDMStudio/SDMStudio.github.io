
<NavBar active_item_id="2"/>

# Class sdm::sdmsVector

**template &lt;class I class I, class T class T, class TBaseVector class TBaseVector&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**sdmsVector**](classsdm_1_1sdmsVector.md)



_Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._[More...](#detailed-description)

* `#include <sdms_vector.hpp>`



Inherits the following classes: TBaseVector,  [sdm::VectorImpl](classsdm_1_1VectorImpl.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual I | [**argmax**](classsdm_1_1sdmsVector.md#function-argmax) () const<br> |
| virtual I | [**argmin**](classsdm_1_1sdmsVector.md#function-argmin) () const<br> |
| virtual T | [**at**](classsdm_1_1sdmsVector.md#function-at) (const I &) const<br> |
|  T | [**dot**](classsdm_1_1sdmsVector.md#function-dot) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|  void | [**init**](classsdm_1_1sdmsVector.md#function-init) (T) <br> |
| virtual T | [**max**](classsdm_1_1sdmsVector.md#function-max) () const<br> |
| virtual T | [**min**](classsdm_1_1sdmsVector.md#function-min) () const<br> |
| virtual T | [**norm\_1**](classsdm_1_1sdmsVector.md#function-norm-1) () const<br> |
| virtual T | [**norm\_2**](classsdm_1_1sdmsVector.md#function-norm-2) () const<br> |
|  bool | [**operator!=**](classsdm_1_1sdmsVector.md#function-operator) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|  bool | [**operator&lt;**](classsdm_1_1sdmsVector.md#function-operator-2) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|  bool | [**operator==**](classsdm_1_1sdmsVector.md#function-operator-3) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|  T | [**operator^**](classsdm_1_1sdmsVector.md#function-operator-4) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-1-4) () <br> |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-2-4) (I) <br> |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-3-4) (I, T) <br> |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-4-4) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) <br> |
| virtual std::string | [**str**](classsdm_1_1sdmsVector.md#function-str) () const<br> |
|  T | [**sum**](classsdm_1_1sdmsVector.md#function-sum) () <br> |

## Public Functions inherited from sdm::VectorImpl

See [sdm::VectorImpl](classsdm_1_1VectorImpl.md)

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











## Protected Functions

| Type | Name |
| ---: | :--- |
|  std::pair&lt; I, T &gt; | [**getMax**](classsdm_1_1sdmsVector.md#function-getmax) () const<br> |
|  std::pair&lt; I, T &gt; | [**getMin**](classsdm_1_1sdmsVector.md#function-getmin) () const<br> |




# Detailed Description




**Template parameters:**


* `I` Type of index 
* `T` Type of value 
* `TBaseVector` Type of the base structure 



    
## Public Functions Documentation


### function argmax 


```cpp
virtual I sdm::sdmsVector::argmax () const
```


Implements [*sdm::VectorImpl::argmax*](classsdm_1_1VectorImpl.md#function-argmax)


### function argmin 


```cpp
virtual I sdm::sdmsVector::argmin () const
```


Implements [*sdm::VectorImpl::argmin*](classsdm_1_1VectorImpl.md#function-argmin)


### function at 


```cpp
virtual T sdm::sdmsVector::at (
    const I &
) const
```


Implements [*sdm::VectorImpl::at*](classsdm_1_1VectorImpl.md#function-at)


### function dot 


```cpp
T sdm::sdmsVector::dot (
    const sdmsVector &
) const
```



### function init 


```cpp
void sdm::sdmsVector::init (
    T
) 
```



### function max 


```cpp
virtual T sdm::sdmsVector::max () const
```


Implements [*sdm::VectorImpl::max*](classsdm_1_1VectorImpl.md#function-max)


### function min 


```cpp
virtual T sdm::sdmsVector::min () const
```


Implements [*sdm::VectorImpl::min*](classsdm_1_1VectorImpl.md#function-min)


### function norm\_1 


```cpp
virtual T sdm::sdmsVector::norm_1 () const
```


Implements [*sdm::VectorImpl::norm\_1*](classsdm_1_1VectorImpl.md#function-norm-1)


### function norm\_2 


```cpp
virtual T sdm::sdmsVector::norm_2 () const
```


Implements [*sdm::VectorImpl::norm\_2*](classsdm_1_1VectorImpl.md#function-norm-2)


### function operator!= 


```cpp
bool sdm::sdmsVector::operator!= (
    const sdmsVector &
) const
```



### function operator&lt; 


```cpp
bool sdm::sdmsVector::operator< (
    const sdmsVector &
) const
```



### function operator== 


```cpp
bool sdm::sdmsVector::operator== (
    const sdmsVector &
) const
```



### function operator^ 


```cpp
T sdm::sdmsVector::operator^ (
    const sdmsVector &
) const
```



### function sdmsVector [1/4]


```cpp
sdm::sdmsVector::sdmsVector () 
```



### function sdmsVector [2/4]


```cpp
sdm::sdmsVector::sdmsVector (
    I
) 
```



### function sdmsVector [3/4]


```cpp
sdm::sdmsVector::sdmsVector (
    I,
    T
) 
```



### function sdmsVector [4/4]


```cpp
sdm::sdmsVector::sdmsVector (
    const sdmsVector &
) 
```



### function str 


```cpp
virtual std::string sdm::sdmsVector::str () const
```


Implements [*sdm::VectorImpl::str*](classsdm_1_1VectorImpl.md#function-str)


### function sum 


```cpp
T sdm::sdmsVector::sum () 
```


## Protected Functions Documentation


### function getMax 


```cpp
std::pair< I, T > sdm::sdmsVector::getMax () const
```



### function getMin 


```cpp
std::pair< I, T > sdm::sdmsVector::getMin () const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/linear_algebra/sdms_vector.hpp`