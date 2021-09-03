
# Struct sdm::ast::item\_encode

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**item\_encode**](structsdm_1_1ast_1_1item__encode.md)



_encodes the input into a item index (string))_ 

* `#include <item_encoders.hpp>`



Inherits the following classes: boost::static_visitor< std::shared_ptr< Item > >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**ag**](structsdm_1_1ast_1_1item__encode.md#variable-ag)  <br> |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**md\_space\_**](structsdm_1_1ast_1_1item__encode.md#variable-md-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**item\_encode**](structsdm_1_1ast_1_1item__encode.md#function-item-encode) (const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & md\_space, [**number**](namespacesdm.md#typedef-number) ag) <br> |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**operator()**](structsdm_1_1ast_1_1item__encode.md#function-operator()-1-2) ([**number**](namespacesdm.md#typedef-number) a) const<br> |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**operator()**](structsdm_1_1ast_1_1item__encode.md#function-operator()-2-2) (const std::string & a\_str) const<br> |








## Public Attributes Documentation


### variable ag 


```cpp
number sdm::ast::item_encode::ag;
```



### variable md\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::item_encode::md_space_;
```


## Public Functions Documentation


### function item\_encode 


```cpp
inline sdm::ast::item_encode::item_encode (
    const std::shared_ptr< MultiDiscreteSpace > & md_space,
    number ag
) 
```



### function operator() [1/2]


```cpp
inline std::shared_ptr< Item > sdm::ast::item_encode::operator() (
    number a
) const
```



### function operator() [2/2]


```cpp
inline std::shared_ptr< Item > sdm::ast::item_encode::operator() (
    const std::string & a_str
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/item_encoders.hpp`