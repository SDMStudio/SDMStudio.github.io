
<NavBar active_item_id="2"/>

# Struct sdm::ast::discrete\_space\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md)



_encodes the input into a discrete space class_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< DiscreteSpace< std::string > >












## Public Functions

| Type | Name |
| ---: | :--- |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**operator()**](structsdm_1_1ast_1_1discrete__space__encoder.md#function-operator()-1-2) ([**number**](namespacesdm.md#typedef-number) ag) const<br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**operator()**](structsdm_1_1ast_1_1discrete__space__encoder.md#function-operator()-2-2) (const std::vector&lt; std::string &gt; & ags) const<br> |








## Public Functions Documentation


### function operator() [1/2]


```cpp
inline DiscreteSpace < std::string > sdm::ast::discrete_space_encoder::operator() (
    number ag
) const
```



### function operator() [2/2]


```cpp
inline DiscreteSpace < std::string > sdm::ast::discrete_space_encoder::operator() (
    const std::vector< std::string > & ags
) const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`