
# Struct sdm::ast::dpomdp\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md)





* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor< sdm::DecPOMDP >












## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**sdm::DecPOMDP**](namespacesdm.md#typedef-decpomdp) &gt; | [**operator()**](structsdm_1_1ast_1_1dpomdp__encoder.md#function-operator()) ([**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) const & ast) <br> |








## Public Functions Documentation


### function operator() 


```cpp
inline std::shared_ptr< sdm::DecPOMDP > sdm::ast::dpomdp_encoder::operator() (
    dpomdp_t const & ast
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoder.hpp`