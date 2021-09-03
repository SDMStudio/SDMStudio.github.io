
# Struct sdm::ast::dpomdp\_printer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md)





* `#include <printer.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef void | [**result\_type**](structsdm_1_1ast_1_1dpomdp__printer.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-1-13) (unsigned short short\_) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-2-13) (std::string const & string\_) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-3-13) (std::vector&lt; type &gt; const & vector\_type) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-4-13) (std::vector&lt; std::vector&lt; type &gt;&gt; const & vector\_type) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-5-13) ([**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) const & tr) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-6-13) ([**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) const & tr) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-7-13) ([**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) const & tr) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-8-13) ([**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) const & obs) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-9-13) ([**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) const & obs) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-10-13) ([**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) const & obs) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-11-13) ([**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) const & rew) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-12-13) ([**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) const & rew) const<br> |
|  void | [**operator()**](structsdm_1_1ast_1_1dpomdp__printer.md#function-operator()-13-13) ([**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) const & ast) <br> |








## Public Types Documentation


### typedef result\_type 


```cpp
typedef void sdm::ast::dpomdp_printer::result_type;
```


## Public Functions Documentation


### function operator() [1/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    unsigned short short_
) const
```



### function operator() [2/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    std::string const & string_
) const
```



### function operator() [3/13]


```cpp
template<typename type typename type>
inline void sdm::ast::dpomdp_printer::operator() (
    std::vector< type > const & vector_type
) const
```



### function operator() [4/13]


```cpp
template<typename type typename type>
inline void sdm::ast::dpomdp_printer::operator() (
    std::vector< std::vector< type >> const & vector_type
) const
```



### function operator() [5/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    transition_entry_1_t const & tr
) const
```



### function operator() [6/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    transition_entry_2_t const & tr
) const
```



### function operator() [7/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    transition_entry_3_t const & tr
) const
```



### function operator() [8/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    observation_entry_1_t const & obs
) const
```



### function operator() [9/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    observation_entry_2_t const & obs
) const
```



### function operator() [10/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    observation_entry_3_t const & obs
) const
```



### function operator() [11/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    reward_entry_1_t const & rew
) const
```



### function operator() [12/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    reward_entry_2_t const & rew
) const
```



### function operator() [13/13]


```cpp
inline void sdm::ast::dpomdp_printer::operator() (
    dpomdp_t const & ast
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/printer.hpp`