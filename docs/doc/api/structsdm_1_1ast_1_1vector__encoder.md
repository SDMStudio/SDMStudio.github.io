
<NavBar active_item_id="2"/>

# Struct sdm::ast::vector\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md)



_encodes the input into a vector_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< Vector >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**size**](structsdm_1_1ast_1_1vector__encoder.md#variable-size)  <br>_the size of the vector vector_  |


## Public Functions

| Type | Name |
| ---: | :--- |
|  Vector | [**operator()**](structsdm_1_1ast_1_1vector__encoder.md#function-operator()-1-2) (const std::string & name) const<br>_encodes a string into a vector of probabilities_  |
|  Vector | [**operator()**](structsdm_1_1ast_1_1vector__encoder.md#function-operator()-2-2) (const std::vector&lt; float &gt; & vector) const<br>_encodes a vector into a vector vector_  |
|   | [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md#function-vector-encoder) (const [**number**](namespacesdm.md#typedef-number) size) <br> |








## Public Attributes Documentation


### variable size 


```cpp
number sdm::ast::vector_encoder::size;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
inline Vector sdm::ast::vector_encoder::operator() (
    const std::string & name
) const
```




**Parameters:**


* `name` the way to encode the vector 



        

### function operator() [2/2]


```cpp
inline Vector sdm::ast::vector_encoder::operator() (
    const std::vector< float > & vector
) const
```




**Parameters:**


* `vector` the vector 



        

### function vector\_encoder 


```cpp
inline sdm::ast::vector_encoder::vector_encoder (
    const number size
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`