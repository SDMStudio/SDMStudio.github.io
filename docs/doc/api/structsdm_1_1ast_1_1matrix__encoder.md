
<NavBar active_item_id="2"/>

# Struct sdm::ast::matrix\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md)



_encodes the input into a matrix_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< Matrix >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**cols**](structsdm_1_1ast_1_1matrix__encoder.md#variable-cols)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**rows**](structsdm_1_1ast_1_1matrix__encoder.md#variable-rows)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md#function-matrix-encoder) ([**number**](namespacesdm.md#typedef-number) rows, [**number**](namespacesdm.md#typedef-number) cols) <br> |
|  Matrix | [**operator()**](structsdm_1_1ast_1_1matrix__encoder.md#function-operator()-1-2) (const std::string & str) const<br>_encodes a string into a matrix_  |
|  Matrix | [**operator()**](structsdm_1_1ast_1_1matrix__encoder.md#function-operator()-2-2) (const std::vector&lt; std::vector&lt; float &gt;&gt; & v) const<br>_encodes a matrix into a matrix_  |








## Public Attributes Documentation


### variable cols 


```cpp
number sdm::ast::matrix_encoder::cols;
```



### variable rows 


```cpp
number sdm::ast::matrix_encoder::rows;
```


## Public Functions Documentation


### function matrix\_encoder 


```cpp
inline sdm::ast::matrix_encoder::matrix_encoder (
    number rows,
    number cols
) 
```



### function operator() [1/2]


```cpp
inline Matrix sdm::ast::matrix_encoder::operator() (
    const std::string & str
) const
```




**Parameters:**


* `str` the way to encode the matrix 



        

### function operator() [2/2]


```cpp
inline Matrix sdm::ast::matrix_encoder::operator() (
    const std::vector< std::vector< float >> & v
) const
```




**Parameters:**


* `v` the matrix 



        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`