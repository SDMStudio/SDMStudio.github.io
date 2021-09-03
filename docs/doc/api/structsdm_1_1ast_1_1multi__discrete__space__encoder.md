
# Struct sdm::ast::multi\_discrete\_space\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md)



_encodes the input into a multi discrete space class_ 

* `#include <space_encoders.hpp>`



Inherits the following classes: boost::static_visitor< std::shared_ptr< MultiDiscreteSpace > >












## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**operator()**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md#function-operator()-1-2) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; & dim\_spaces) const<br> |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**operator()**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md#function-operator()-2-2) (const std::vector&lt; std::vector&lt; std::string &gt;&gt; & all\_list\_names) const<br> |








## Public Functions Documentation


### function operator() [1/2]


```cpp
std::shared_ptr< MultiDiscreteSpace > sdm::ast::multi_discrete_space_encoder::operator() (
    const std::vector< number > & dim_spaces
) const
```



### function operator() [2/2]


```cpp
std::shared_ptr< MultiDiscreteSpace > sdm::ast::multi_discrete_space_encoder::operator() (
    const std::vector< std::vector< std::string >> & all_list_names
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/space_encoders.hpp`