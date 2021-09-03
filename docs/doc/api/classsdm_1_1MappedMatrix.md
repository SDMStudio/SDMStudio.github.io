
# Class sdm::MappedMatrix

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TLig, typename TCol, typename TValue&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MappedMatrix**](classsdm_1_1MappedMatrix.md)



_Mapped matrices are matrices that use map to store values. Can be view as a sparse matrix with templated indexes._ [More...](#detailed-description)

* `#include <mapped_matrix.hpp>`



Inherits the following classes: [sdm::RecursiveMap](classsdm_1_1RecursiveMap.md),  [sdm::MatrixInterface](classsdm_1_1MatrixInterface.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TLig, [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; &gt;::[**type**](classsdm_1_1MappedMatrix.md#typedef-type) | [**type**](classsdm_1_1MappedMatrix.md#typedef-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TLig, [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; &gt;::[**value\_list\_type**](classsdm_1_1MappedMatrix.md#typedef-value-list-type) | [**value\_list\_type**](classsdm_1_1MappedMatrix.md#typedef-value-list-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TLig, [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; &gt;::[**value\_type**](classsdm_1_1MappedMatrix.md#typedef-value-type) | [**value\_type**](classsdm_1_1MappedMatrix.md#typedef-value-type)  <br> |
| typedef [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; | [**vector\_type**](classsdm_1_1MappedMatrix.md#typedef-vector-type)  <br> |












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MappedMatrix**](classsdm_1_1MappedMatrix.md#function-mappedmatrix-1-5) () <br> |
|   | [**MappedMatrix**](classsdm_1_1MappedMatrix.md#function-mappedmatrix-2-5) (TValue default\_value) <br> |
|   | [**MappedMatrix**](classsdm_1_1MappedMatrix.md#function-mappedmatrix-3-5) (std::vector&lt; long &gt; dim, TValue default\_value) <br> |
|   | [**MappedMatrix**](classsdm_1_1MappedMatrix.md#function-mappedmatrix-4-5) (const [**MappedMatrix**](classsdm_1_1MappedMatrix.md) & copy) <br> |
|   | [**MappedMatrix**](classsdm_1_1MappedMatrix.md#function-mappedmatrix-5-5) (std::initializer\_list&lt; [**value\_list\_type**](classsdm_1_1MappedMatrix.md#typedef-value-list-type) &gt; vals) <br> |
|  const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; & | [**at**](classsdm_1_1MappedMatrix.md#function-at-1-2) (const TLig & i) const<br> |
|  TValue | [**at**](classsdm_1_1MappedMatrix.md#function-at-2-2) (const TLig & i, const TCol & j) const<br> |
|  std::vector&lt; long &gt; | [**dim**](classsdm_1_1MappedMatrix.md#function-dim) () const<br> |
|  [**MappedMatrix**](classsdm_1_1MappedMatrix.md) | [**dot**](classsdm_1_1MappedMatrix.md#function-dot) (const [**MappedMatrix**](classsdm_1_1MappedMatrix.md) &) const<br> |
|  std::vector&lt; std::tuple&lt; TLig, TCol, TValue &gt; &gt; | [**getAllElement**](classsdm_1_1MappedMatrix.md#function-getallelement) () <br> |
|  TValue | [**getDefault**](classsdm_1_1MappedMatrix.md#function-getdefault) () const<br> |
|  std::vector&lt; [**Pair**](namespacesdm.md#typedef-pair)&lt; TLig, TCol &gt; &gt; | [**getIndexes**](classsdm_1_1MappedMatrix.md#function-getindexes) () <br> |
|  TValue | [**getValueAt**](classsdm_1_1MappedMatrix.md#function-getvalueat) (const TLig &, const TCol &) const<br> |
|  void | [**setValueAt**](classsdm_1_1MappedMatrix.md#function-setvalueat) (const TLig &, const TCol &, const TValue &) <br> |
|  void | [**setValuesAt**](classsdm_1_1MappedMatrix.md#function-setvaluesat) (const TLig & lig, const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; & vector) <br> |
|  std::string | [**str**](classsdm_1_1MappedMatrix.md#function-str) () const<br> |












## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**MappedVector**](classsdm_1_1MappedVector.md)&lt; TCol, TValue &gt; | [**default\_value\_**](classsdm_1_1MappedMatrix.md#variable-default-value-)  <br> |
|  std::vector&lt; long &gt; | [**dim\_**](classsdm_1_1MappedMatrix.md#variable-dim-)   = = {}<br> |












# Detailed Description




**Template parameters:**


* `TLig` the type of index for the lines 
* `TCol` the type of index for the colums 
* `TValue` the type of value (default : `double`) 



    
## Public Types Documentation


### typedef type 


```cpp
using sdm::MappedMatrix< TLig, TCol, TValue >::type =  typename RecursiveMap<TLig, MappedVector<TCol, TValue> >::type;
```



### typedef value\_list\_type 


```cpp
using sdm::MappedMatrix< TLig, TCol, TValue >::value_list_type =  typename RecursiveMap<TLig, MappedVector<TCol, TValue> >::value_list_type;
```



### typedef value\_type 


```cpp
using sdm::MappedMatrix< TLig, TCol, TValue >::value_type =  typename RecursiveMap<TLig, MappedVector<TCol, TValue> >::value_type;
```



### typedef vector\_type 


```cpp
using sdm::MappedMatrix< TLig, TCol, TValue >::vector_type =  MappedVector<TCol, TValue>;
```


## Public Functions Documentation


### function MappedMatrix [1/5]


```cpp
sdm::MappedMatrix::MappedMatrix () 
```



### function MappedMatrix [2/5]


```cpp
sdm::MappedMatrix::MappedMatrix (
    TValue default_value
) 
```



### function MappedMatrix [3/5]


```cpp
sdm::MappedMatrix::MappedMatrix (
    std::vector< long > dim,
    TValue default_value
) 
```



### function MappedMatrix [4/5]


```cpp
sdm::MappedMatrix::MappedMatrix (
    const MappedMatrix & copy
) 
```



### function MappedMatrix [5/5]


```cpp
sdm::MappedMatrix::MappedMatrix (
    std::initializer_list< value_list_type > vals
) 
```



### function at [1/2]


```cpp
const MappedVector < TCol, TValue > & sdm::MappedMatrix::at (
    const TLig & i
) const
```



### function at [2/2]


```cpp
TValue sdm::MappedMatrix::at (
    const TLig & i,
    const TCol & j
) const
```



### function dim 


```cpp
std::vector< long > sdm::MappedMatrix::dim () const
```



### function dot 


```cpp
MappedMatrix sdm::MappedMatrix::dot (
    const MappedMatrix &
) const
```



### function getAllElement 


```cpp
std::vector< std::tuple< TLig, TCol, TValue > > sdm::MappedMatrix::getAllElement () 
```



### function getDefault 


```cpp
TValue sdm::MappedMatrix::getDefault () const
```



### function getIndexes 


```cpp
std::vector< Pair < TLig, TCol > > sdm::MappedMatrix::getIndexes () 
```



### function getValueAt 


```cpp
TValue sdm::MappedMatrix::getValueAt (
    const TLig &,
    const TCol &
) const
```



### function setValueAt 


```cpp
void sdm::MappedMatrix::setValueAt (
    const TLig &,
    const TCol &,
    const TValue &
) 
```



### function setValuesAt 


```cpp
void sdm::MappedMatrix::setValuesAt (
    const TLig & lig,
    const MappedVector < TCol, TValue > & vector
) 
```



### function str 


```cpp
std::string sdm::MappedMatrix::str () const
```


## Protected Attributes Documentation


### variable default\_value\_ 


```cpp
MappedVector<TCol, TValue> sdm::MappedMatrix< TLig, TCol, TValue >::default_value_;
```



### variable dim\_ 


```cpp
std::vector<long> sdm::MappedMatrix< TLig, TCol, TValue >::dim_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/mapped_matrix.hpp`