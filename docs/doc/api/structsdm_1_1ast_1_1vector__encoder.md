
# Struct sdm::ast::vector\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md)



_encodes the input into a mapped vector_ 

* `#include <struct_encoders.hpp>`



Inherits the following classes: boost::static_visitor< std::shared_ptr< MappedVector< number, double > > >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**size\_**](structsdm_1_1ast_1_1vector__encoder.md#variable-size-)  <br>_the size of the vector vector_  |


## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MappedVector**](classsdm_1_1MappedVector.md)&lt; [**number**](namespacesdm.md#typedef-number), double &gt; &gt; | [**operator()**](structsdm_1_1ast_1_1vector__encoder.md#function-operator()-1-2) (const std::string & name) const<br>_encodes a string into a mapped vector of probabilities_  |
|  std::shared\_ptr&lt; [**MappedVector**](classsdm_1_1MappedVector.md)&lt; [**number**](namespacesdm.md#typedef-number), double &gt; &gt; | [**operator()**](structsdm_1_1ast_1_1vector__encoder.md#function-operator()-2-2) (const std::vector&lt; float &gt; & vector) const<br>_encodes a vector into a mapped vector_  |
|   | [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md#function-vector-encoder) (const [**number**](namespacesdm.md#typedef-number) size) <br> |








## Public Attributes Documentation


### variable size\_ 


```cpp
number sdm::ast::vector_encoder::size_;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
std::shared_ptr< MappedVector < number , double > > sdm::ast::vector_encoder::operator() (
    const std::string & name
) const
```




**Parameters:**


* `name` a string describing the vector (i.e. "uniform") 



**Returns:**

the corresponding mapped vector 




        

### function operator() [2/2]


```cpp
std::shared_ptr< MappedVector < number , double > > sdm::ast::vector_encoder::operator() (
    const std::vector< float > & vector
) const
```




**Parameters:**


* `vector` a vector of real values 



**Returns:**

the corresponding mapped vector 




        

### function vector\_encoder 


```cpp
sdm::ast::vector_encoder::vector_encoder (
    const number size
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/struct_encoders.hpp`