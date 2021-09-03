
# Class sdm::sdmsMatrix

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TLig, class TCol, class TValue, class TBaseMatrix, class TBaseVector&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md)





* `#include <sdms_matrix.hpp>`



Inherits the following classes: TBaseMatrix








## Public Types

| Type | Name |
| ---: | :--- |
| typedef TBaseVector | [**vector\_type**](classsdm_1_1sdmsMatrix.md#typedef-vector-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  TBaseVector | [**operator^**](classsdm_1_1sdmsMatrix.md#function-operator) (const TBaseVector &) const<br> |
|   | [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md#function-sdmsmatrix-1-5) () <br> |
|   | [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md#function-sdmsmatrix-2-5) (std::size\_t n\_lig, std::size\_t n\_col) <br> |
|   | [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md#function-sdmsmatrix-3-5) (const Matrix & m) <br> |
|   | [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md#function-sdmsmatrix-4-5) (const [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md) & m) <br> |
|   | [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md#function-sdmsmatrix-5-5) (const boost::numeric::ublas::matrix\_expression&lt; AE &gt; & ae) <br> |
|  [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md) | [**transpose**](classsdm_1_1sdmsMatrix.md#function-transpose) () const<br> |








## Public Types Documentation


### typedef vector\_type 


```cpp
using sdm::sdmsMatrix< TLig, TCol, TValue, TBaseMatrix, TBaseVector >::vector_type =  TBaseVector;
```


## Public Functions Documentation


### function operator^ 


```cpp
TBaseVector sdm::sdmsMatrix::operator^ (
    const TBaseVector &
) const
```



### function sdmsMatrix [1/5]


```cpp
sdm::sdmsMatrix::sdmsMatrix () 
```



### function sdmsMatrix [2/5]


```cpp
sdm::sdmsMatrix::sdmsMatrix (
    std::size_t n_lig,
    std::size_t n_col
) 
```



### function sdmsMatrix [3/5]


```cpp
sdm::sdmsMatrix::sdmsMatrix (
    const Matrix & m
) 
```



### function sdmsMatrix [4/5]


```cpp
sdm::sdmsMatrix::sdmsMatrix (
    const sdmsMatrix & m
) 
```



### function sdmsMatrix [5/5]


```cpp
template<class AE class AE>
sdm::sdmsMatrix::sdmsMatrix (
    const boost::numeric::ublas::matrix_expression< AE > & ae
) 
```



### function transpose 


```cpp
sdmsMatrix sdm::sdmsMatrix::transpose () const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/sdms_matrix.hpp`