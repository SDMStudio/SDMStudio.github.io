
<NavBar active_item_id="2"/>

# Class sdm::matrix

**template &lt;typename mtype, typename vtype, typename value&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**matrix**](classsdm_1_1matrix.md)





* `#include <matrix.hpp>`













## Public Attributes

| Type | Name |
| ---: | :--- |
|  mtype | [**container**](classsdm_1_1matrix.md#variable-container)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  [**size\_t**](namespacesdm.md#typedef-size-t) | [**cols**](classsdm_1_1matrix.md#function-cols) () <br>_Returns the size\_t of cols._  |
|  void | [**compress**](classsdm_1_1matrix.md#function-compress) () <br>_Compress the matrix if possible._  |
|   | [**matrix**](classsdm_1_1matrix.md#function-matrix-1-2) () <br>_This constructor allocates an uninitialized matrix that holds zero elements._  |
|   | [**matrix**](classsdm_1_1matrix.md#function-matrix-2-2) ([**size\_t**](namespacesdm.md#typedef-size-t) rows, [**size\_t**](namespacesdm.md#typedef-size-t) cols) <br>_This constructor Allocates an uninitialized matrix that holds @param1 rows of @param2 elements._  |
|  value & | [**operator()**](classsdm_1_1matrix.md#function-operator()-1-2) ([**size\_t**](namespacesdm.md#typedef-size-t) row, [**size\_t**](namespacesdm.md#typedef-size-t) col) <br>_Returns a reference of the @param1-th element in the @param2-th row._  |
|  value | [**operator()**](classsdm_1_1matrix.md#function-operator()-2-2) ([**size\_t**](namespacesdm.md#typedef-size-t) row, [**size\_t**](namespacesdm.md#typedef-size-t) col) const<br>_Returns a value of the @param1-th element in the @param2-th row._  |
|  void | [**resize**](classsdm_1_1matrix.md#function-resize) ([**size\_t**](namespacesdm.md#typedef-size-t) rows, [**size\_t**](namespacesdm.md#typedef-size-t) cols) <br>_Reallocates a matrix to hold @param1 rows of @param2 elements. The existing elements of the matrix are preseved when specified._  |
|  [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; | [**row**](classsdm_1_1matrix.md#function-row) ([**size\_t**](namespacesdm.md#typedef-size-t) i) <br> |
|  [**size\_t**](namespacesdm.md#typedef-size-t) | [**rows**](classsdm_1_1matrix.md#function-rows) () <br>_Returns the size\_t of rows._  |
|  [**matrix**](classsdm_1_1matrix.md) | [**transpose**](classsdm_1_1matrix.md#function-transpose) () const<br> |
|   | [**~matrix**](classsdm_1_1matrix.md#function-matrix) () <br>_This destructor destroies the matrix._  |








## Public Attributes Documentation


### variable container 


```cpp
mtype sdm::matrix< mtype, vtype, value >::container;
```


TODO Make this attribute private, be aware that it might have been used somewhere else as a public attribute. 

        
## Public Functions Documentation


### function cols 


```cpp
size_t sdm::matrix::cols () 
```


Get Matrix size\_t of columns



**Returns:**

size\_t 




        

### function compress 


```cpp
void sdm::matrix::compress () 
```



### function matrix [1/2]


```cpp
sdm::matrix::matrix () 
```



### function matrix [2/2]


```cpp
sdm::matrix::matrix (
    size_t rows,
    size_t cols
) 
```




**Parameters:**


* `size_t` 
* `size_t` 



        

### function operator() [1/2]


```cpp
value & sdm::matrix::operator() (
    size_t row,
    size_t col
) 
```


Specialization of operator '()'



**Parameters:**


* `size_t` 
* `size_t` 



**Returns:**

value& 




        

### function operator() [2/2]


```cpp
value sdm::matrix::operator() (
    size_t row,
    size_t col
) const
```




**Parameters:**


* `size_t` 
* `size_t` 



**Returns:**

value 




        

### function resize 


```cpp
void sdm::matrix::resize (
    size_t rows,
    size_t cols
) 
```




**Parameters:**


* `size_t` 
* `size_t` 



        

### function row 


```cpp
vector < vtype, value > sdm::matrix::row (
    size_t i
) 
```



### function rows 


```cpp
size_t sdm::matrix::rows () 
```


Returns the row at a specified index.

Get Matrix size\_t of rows



**Returns:**

size\_t




**Returns:**

vector&lt;vtype, value&gt; : the row vector. 




        

### function transpose 


```cpp
matrix sdm::matrix::transpose () const
```



### function ~matrix 


```cpp
sdm::matrix::~matrix () 
```

## Friends Documentation



### friend operator+= 


```cpp
inline friend const matrix & sdm::matrix::operator+= (
    matrix & arg1,
    const matrix & arg2
) 
```




**Parameters:**


* `matrix&` 
* `matrix&` 



**Returns:**

matrix 




        

### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::matrix::operator<< (
    std::ostream & os,
    const matrix & arg
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/linear_algebra/matrix.hpp`