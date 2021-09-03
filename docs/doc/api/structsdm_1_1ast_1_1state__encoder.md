
# Struct sdm::ast::state\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md)



_encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_ 

* `#include <item_encoders.hpp>`



Inherits the following classes: boost::static_visitor< std::vector< std::shared_ptr< Item > > >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**space\_**](structsdm_1_1ast_1_1state__encoder.md#variable-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**operator()**](structsdm_1_1ast_1_1state__encoder.md#function-operator()-1-2) ([**number**](namespacesdm.md#typedef-number) s) const<br> |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**operator()**](structsdm_1_1ast_1_1state__encoder.md#function-operator()-2-2) (const std::string & s\_str) const<br> |
|   | [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md#function-state-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & space) <br> |








## Public Attributes Documentation


### variable space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::state_encoder::space_;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
inline std::vector< std::shared_ptr< Item > > sdm::ast::state_encoder::operator() (
    number s
) const
```



### function operator() [2/2]


```cpp
inline std::vector< std::shared_ptr< Item > > sdm::ast::state_encoder::operator() (
    const std::string & s_str
) const
```



### function state\_encoder 


```cpp
inline sdm::ast::state_encoder::state_encoder (
    const std::shared_ptr< DiscreteSpace > & space
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/item_encoders.hpp`