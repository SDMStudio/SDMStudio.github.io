
<NavBar active_item_id="2"/>

# Struct sdm::ast::multi\_discrete\_space\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md)



_encodes the input into a multi discrete space class_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< MultiDiscreteSpace< std::string > >












## Public Functions

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**operator()**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md#function-operator()-1-2) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; & dim\_spaces) const<br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**operator()**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md#function-operator()-2-2) (const std::vector&lt; std::vector&lt; std::string &gt;&gt; & names) const<br> |








## Public Functions Documentation


### function operator() [1/2]


```cpp
inline MultiDiscreteSpace < std::string > sdm::ast::multi_discrete_space_encoder::operator() (
    const std::vector< number > & dim_spaces
) const
```



### function operator() [2/2]


```cpp
inline MultiDiscreteSpace < std::string > sdm::ast::multi_discrete_space_encoder::operator() (
    const std::vector< std::vector< std::string >> & names
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoder.hpp`