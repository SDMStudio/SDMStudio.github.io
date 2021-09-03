
# Struct sdm::parser::error\_handler\_base

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**parser**](namespacesdm_1_1parser.md) **>** [**error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md)





* `#include <error_handler.hpp>`













## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::map&lt; std::string, std::string &gt; | [**id\_map**](structsdm_1_1parser_1_1error__handler__base.md#variable-id-map)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md#function-error-handler-base) () <br> |
|  x3::error\_handler\_result | [**on\_error**](structsdm_1_1parser_1_1error__handler__base.md#function-on-error) ([**Iterator**](classsdm_1_1Iterator.md) &, [**Iterator**](classsdm_1_1Iterator.md) const &, Exception const & x, Context const &) <br> |








## Public Attributes Documentation


### variable id\_map 


```cpp
std::map<std::string, std::string> sdm::parser::error_handler_base::id_map;
```


## Public Functions Documentation


### function error\_handler\_base 


```cpp
inline sdm::parser::error_handler_base::error_handler_base () 
```



### function on\_error 


```cpp
template<typename Iterator typename Iterator, typename Exception typename Exception, typename Context typename Context>
inline x3::error_handler_result sdm::parser::error_handler_base::on_error (
    Iterator &,
    Iterator const &,
    Exception const & x,
    Context const &
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/error_handler.hpp`