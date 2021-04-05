
<NavBar active_item_id="2"/>

# Struct sdm::ast::state\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md)



_encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< std::vector< std::string > >










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**state\_space\_**](structsdm_1_1ast_1_1state__encoder.md#variable-state-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::string &gt; | [**operator()**](structsdm_1_1ast_1_1state__encoder.md#function-operator()-1-2) ([**number**](namespacesdm.md#typedef-number) s) const<br> |
|  std::vector&lt; std::string &gt; | [**operator()**](structsdm_1_1ast_1_1state__encoder.md#function-operator()-2-2) (const std::string & s\_str) const<br> |
|   | [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md#function-state-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & state\_space) <br> |








## Public Attributes Documentation


### variable state\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::state_encoder::state_space_;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
inline std::vector< std::string > sdm::ast::state_encoder::operator() (
    number s
) const
```



### function operator() [2/2]


```cpp
inline std::vector< std::string > sdm::ast::state_encoder::operator() (
    const std::string & s_str
) const
```



### function state\_encoder 


```cpp
inline sdm::ast::state_encoder::state_encoder (
    const DiscreteSpace < std::string > & state_space
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`