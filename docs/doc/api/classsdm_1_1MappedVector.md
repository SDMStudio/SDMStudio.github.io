
<NavBar active_item_id="2"/>

# Class sdm::MappedVector

**template &lt;typename TIndex typename TIndex, typename T typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MappedVector**](classsdm_1_1MappedVector.md)



_Mapped vectors are vectors that use map to store values of a vector._ [More...](#detailed-description)

* `#include <mapped_vector.hpp>`



Inherits the following classes: std::map< TIndex, T >,  [sdm::VectorImpl](classsdm_1_1VectorImpl.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-1-4) () <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-2-4) (T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-3-4) (TIndex size, T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-4-4) (const [**MappedVector**](classsdm_1_1MappedVector.md) & v) <br> |
| virtual TIndex | [**argmax**](classsdm_1_1MappedVector.md#function-argmax) () const<br> |
| virtual TIndex | [**argmin**](classsdm_1_1MappedVector.md#function-argmin) () const<br> |
| virtual T | [**at**](classsdm_1_1MappedVector.md#function-at) (TIndex) <br> |
|  T | [**dot**](classsdm_1_1MappedVector.md#function-dot) (const [**MappedVector**](classsdm_1_1MappedVector.md) & v2) const<br> |
|  T | [**getDefault**](classsdm_1_1MappedVector.md#function-getdefault) () const<br> |
| virtual T | [**max**](classsdm_1_1MappedVector.md#function-max) () const<br> |
| virtual T | [**min**](classsdm_1_1MappedVector.md#function-min) () const<br> |
| virtual T | [**norm\_1**](classsdm_1_1MappedVector.md#function-norm-1) () const<br> |
| virtual T | [**norm\_2**](classsdm_1_1MappedVector.md#function-norm-2) () const<br> |
|  bool | [**operator&lt;**](classsdm_1_1MappedVector.md#function-operator) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) <br> |
|  T | [**operator^**](classsdm_1_1MappedVector.md#function-operator-2) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  std::size\_t | [**size**](classsdm_1_1MappedVector.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1MappedVector.md#function-str) () const<br> |

## Public Functions inherited from sdm::VectorImpl

See [sdm::VectorImpl](classsdm_1_1VectorImpl.md)

| Type | Name |
| ---: | :--- |
| virtual I | [**argmax**](classsdm_1_1VectorImpl.md#function-argmax) () const = 0<br> |
| virtual I | [**argmin**](classsdm_1_1VectorImpl.md#function-argmin) () const = 0<br> |
| virtual T | [**at**](classsdm_1_1VectorImpl.md#function-at) (I) = 0<br> |
| virtual T | [**max**](classsdm_1_1VectorImpl.md#function-max) () const = 0<br> |
| virtual T | [**min**](classsdm_1_1VectorImpl.md#function-min) () const = 0<br> |
| virtual T | [**norm\_1**](classsdm_1_1VectorImpl.md#function-norm-1) () const = 0<br> |
| virtual T | [**norm\_2**](classsdm_1_1VectorImpl.md#function-norm-2) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1VectorImpl.md#function-str) () const = 0<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  T | [**default\_value\_**](classsdm_1_1MappedVector.md#variable-default-value-)  <br> |
|  std::size\_t | [**size\_**](classsdm_1_1MappedVector.md#variable-size-)  <br> |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  std::pair&lt; TIndex, T &gt; | [**getMax**](classsdm_1_1MappedVector.md#function-getmax) () const<br> |
|  std::pair&lt; TIndex, T &gt; | [**getMin**](classsdm_1_1MappedVector.md#function-getmin) () const<br> |




# Detailed Description


Using map structure allow to store only necessary values. Moreover, it allows to see vector in another way that is not more only a mapping from integer to value but can map any type of index to values.



**Template parameters:**


* `TIndex` Type of index 
* `T` Type of value 



    
## Public Functions Documentation


### function MappedVector [1/4]


```cpp
sdm::MappedVector::MappedVector () 
```



### function MappedVector [2/4]


```cpp
sdm::MappedVector::MappedVector (
    T default_value
) 
```



### function MappedVector [3/4]


```cpp
sdm::MappedVector::MappedVector (
    TIndex size,
    T default_value
) 
```



### function MappedVector [4/4]


```cpp
sdm::MappedVector::MappedVector (
    const MappedVector & v
) 
```



### function argmax 


```cpp
virtual TIndex sdm::MappedVector::argmax () const
```


Implements [*sdm::VectorImpl::argmax*](classsdm_1_1VectorImpl.md#function-argmax)


### function argmin 


```cpp
virtual TIndex sdm::MappedVector::argmin () const
```


Implements [*sdm::VectorImpl::argmin*](classsdm_1_1VectorImpl.md#function-argmin)


### function at 


```cpp
virtual T sdm::MappedVector::at (
    TIndex
) 
```


Implements [*sdm::VectorImpl::at*](classsdm_1_1VectorImpl.md#function-at)


### function dot 


```cpp
T sdm::MappedVector::dot (
    const MappedVector & v2
) const
```



### function getDefault 


```cpp
T sdm::MappedVector::getDefault () const
```



### function max 


```cpp
virtual T sdm::MappedVector::max () const
```


Implements [*sdm::VectorImpl::max*](classsdm_1_1VectorImpl.md#function-max)


### function min 


```cpp
virtual T sdm::MappedVector::min () const
```


Implements [*sdm::VectorImpl::min*](classsdm_1_1VectorImpl.md#function-min)


### function norm\_1 


```cpp
virtual T sdm::MappedVector::norm_1 () const
```


Implements [*sdm::VectorImpl::norm\_1*](classsdm_1_1VectorImpl.md#function-norm-1)


### function norm\_2 


```cpp
virtual T sdm::MappedVector::norm_2 () const
```


Implements [*sdm::VectorImpl::norm\_2*](classsdm_1_1VectorImpl.md#function-norm-2)


### function operator&lt; 


```cpp
bool sdm::MappedVector::operator< (
    const MappedVector &
) 
```



### function operator^ 


```cpp
T sdm::MappedVector::operator^ (
    const MappedVector &
) const
```



### function size 


```cpp
std::size_t sdm::MappedVector::size () const
```



### function str 


```cpp
virtual std::string sdm::MappedVector::str () const
```


Implements [*sdm::VectorImpl::str*](classsdm_1_1VectorImpl.md#function-str)

## Protected Attributes Documentation


### variable default\_value\_ 


```cpp
T sdm::MappedVector< TIndex, T >::default_value_;
```



### variable size\_ 


```cpp
std::size_t sdm::MappedVector< TIndex, T >::size_;
```


## Protected Functions Documentation


### function getMax 


```cpp
std::pair< TIndex, T > sdm::MappedVector::getMax () const
```



### function getMin 


```cpp
std::pair< TIndex, T > sdm::MappedVector::getMin () const
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::MappedVector::operator<< (
    std::ostream & os,
    const MappedVector & vect
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/mapped_vector.hpp`