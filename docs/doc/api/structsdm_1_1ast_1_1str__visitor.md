
<NavBar active_item_id="2"/>

# Struct sdm::ast::str\_visitor


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**str\_visitor**](structsdm_1_1ast_1_1str__visitor.md)





* `#include <encoder.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::string | [**result\_type**](structsdm_1_1ast_1_1str__visitor.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structsdm_1_1ast_1_1str__visitor.md#typedef-result-type) | [**operator()**](structsdm_1_1ast_1_1str__visitor.md#function-operator()-1-2) ([**number**](namespacesdm.md#typedef-number) v) const<br> |
|  [**result\_type**](structsdm_1_1ast_1_1str__visitor.md#typedef-result-type) | [**operator()**](structsdm_1_1ast_1_1str__visitor.md#function-operator()-2-2) (const std::string & v) <br> |








## Public Types Documentation


### typedef result\_type 


```cpp
using sdm::ast::str_visitor::result_type =  std::string;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
inline result_type sdm::ast::str_visitor::operator() (
    number v
) const
```



### function operator() [2/2]


```cpp
inline result_type sdm::ast::str_visitor::operator() (
    const std::string & v
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoder.hpp`