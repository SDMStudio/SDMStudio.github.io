
<NavBar active_item_id="2"/>

# Class sdm::MappedDisreteDistrib

**template &lt;typename TSupport typename TSupport&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MappedDisreteDistrib**](classsdm_1_1MappedDisreteDistrib.md)





* `#include <base_occupancy_state.hpp>`



Inherits the following classes: [sdm::MappedVector](classsdm_1_1MappedVector.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MappedDisreteDistrib**](classsdm_1_1MappedDisreteDistrib.md#function-mappeddisretedistrib) () <br> |
|  TSupport | [**sample**](classsdm_1_1MappedDisreteDistrib.md#function-sample) () <br> |

## Public Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-1-4) () <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-2-4) (T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-3-4) (std::size\_t size, T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-4-4) (const [**MappedVector**](classsdm_1_1MappedVector.md) & v) <br> |
| virtual TIndex | [**argmax**](classsdm_1_1MappedVector.md#function-argmax) () const<br> |
| virtual TIndex | [**argmin**](classsdm_1_1MappedVector.md#function-argmin) () const<br> |
| virtual T | [**at**](classsdm_1_1MappedVector.md#function-at) (const TIndex &) const<br> |
|  T | [**dot**](classsdm_1_1MappedVector.md#function-dot) (const [**MappedVector**](classsdm_1_1MappedVector.md) & v2) const<br> |
|  T | [**getDefault**](classsdm_1_1MappedVector.md#function-getdefault) () const<br> |
|  std::vector&lt; TIndex &gt; | [**getIndexes**](classsdm_1_1MappedVector.md#function-getindexes) () const<br> |
| virtual T | [**max**](classsdm_1_1MappedVector.md#function-max) () const<br> |
| virtual T | [**min**](classsdm_1_1MappedVector.md#function-min) () const<br> |
| virtual T | [**norm\_1**](classsdm_1_1MappedVector.md#function-norm-1) () const<br> |
| virtual T | [**norm\_2**](classsdm_1_1MappedVector.md#function-norm-2) () const<br> |
|  bool | [**operator&lt;**](classsdm_1_1MappedVector.md#function-operator) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  T | [**operator^**](classsdm_1_1MappedVector.md#function-operator-2) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  std::size\_t | [**size**](classsdm_1_1MappedVector.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1MappedVector.md#function-str) () const<br> |

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











## Protected Attributes inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  T | [**default\_value\_**](classsdm_1_1MappedVector.md#variable-default-value-)  <br> |
|  std::size\_t | [**size\_**](classsdm_1_1MappedVector.md#variable-size-)   = = -1<br> |






## Protected Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  std::pair&lt; TIndex, T &gt; | [**getMax**](classsdm_1_1MappedVector.md#function-getmax) () const<br> |
|  std::pair&lt; TIndex, T &gt; | [**getMin**](classsdm_1_1MappedVector.md#function-getmin) () const<br> |





## Public Functions Documentation


### function MappedDisreteDistrib 


```cpp
sdm::MappedDisreteDistrib::MappedDisreteDistrib () 
```



### function sample 


```cpp
TSupport sdm::MappedDisreteDistrib::sample () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/base_occupancy_state.hpp`