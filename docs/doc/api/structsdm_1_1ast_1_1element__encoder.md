
<NavBar active_item_id="2"/>

# Struct sdm::ast::element\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**element\_encoder**](structsdm_1_1ast_1_1element__encoder.md)



_encodes the input into a number (index)_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< std::string >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**ag**](structsdm_1_1ast_1_1element__encoder.md#variable-ag)  <br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**md\_space\_**](structsdm_1_1ast_1_1element__encoder.md#variable-md-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**element\_encoder**](structsdm_1_1ast_1_1element__encoder.md#function-element-encoder) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & md\_space, [**number**](namespacesdm.md#typedef-number) ag) <br> |
|  std::string | [**operator()**](structsdm_1_1ast_1_1element__encoder.md#function-operator()-1-2) ([**number**](namespacesdm.md#typedef-number) a) const<br> |
|  std::string | [**operator()**](structsdm_1_1ast_1_1element__encoder.md#function-operator()-2-2) (const std::string & a\_str) const<br> |








## Public Attributes Documentation


### variable ag 


```cpp
number sdm::ast::element_encoder::ag;
```



### variable md\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::element_encoder::md_space_;
```


## Public Functions Documentation


### function element\_encoder 


```cpp
inline sdm::ast::element_encoder::element_encoder (
    const MultiDiscreteSpace < std::string > & md_space,
    number ag
) 
```



### function operator() [1/2]


```cpp
inline std::string sdm::ast::element_encoder::operator() (
    number a
) const
```



### function operator() [2/2]


```cpp
inline std::string sdm::ast::element_encoder::operator() (
    const std::string & a_str
) const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`