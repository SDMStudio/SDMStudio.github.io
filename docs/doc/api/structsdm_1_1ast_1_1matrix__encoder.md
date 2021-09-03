
# Struct sdm::ast::matrix\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md)



_encodes the input into a mapped matrix_ 

* `#include <struct_encoders.hpp>`



Inherits the following classes: boost::static_visitor< std::shared_ptr< MappedMatrix< number, number > > >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**cols**](structsdm_1_1ast_1_1matrix__encoder.md#variable-cols)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**rows**](structsdm_1_1ast_1_1matrix__encoder.md#variable-rows)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md#function-matrix-encoder) ([**number**](namespacesdm.md#typedef-number) rows, [**number**](namespacesdm.md#typedef-number) cols) <br> |
|  std::shared\_ptr&lt; [**MappedMatrix**](classsdm_1_1MappedMatrix.md)&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**operator()**](structsdm_1_1ast_1_1matrix__encoder.md#function-operator()-1-2) (const std::string & str) const<br>_encodes a string into a mapped matrix_  |
|  std::shared\_ptr&lt; [**MappedMatrix**](classsdm_1_1MappedMatrix.md)&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**operator()**](structsdm_1_1ast_1_1matrix__encoder.md#function-operator()-2-2) (const std::vector&lt; std::vector&lt; float &gt;&gt; & v) const<br>_encodes a vector of vector of real values into a mapped matrix_  |








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
sdm::ast::matrix_encoder::matrix_encoder (
    number rows,
    number cols
) 
```



### function operator() [1/2]


```cpp
std::shared_ptr< MappedMatrix < number , number > > sdm::ast::matrix_encoder::operator() (
    const std::string & str
) const
```




**Parameters:**


* `str` a string describing the matrix (i.e. "uniform", "identity", etc) 



**Returns:**

the corresponding mapped matrix 




        

### function operator() [2/2]


```cpp
std::shared_ptr< MappedMatrix < number , number > > sdm::ast::matrix_encoder::operator() (
    const std::vector< std::vector< float >> & v
) const
```




**Parameters:**


* `v` a vector of vector of real values 



**Returns:**

the corresponding mapped matrix 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/struct_encoders.hpp`