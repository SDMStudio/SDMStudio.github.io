
<NavBar active_item_id="2"/>

# Struct sdm::ast::dpomdp\_t


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md)





* `#include <ast.hpp>`



Inherits the following classes: position_tagged










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**values\_t**](structsdm_1_1ast_1_1values__t.md) | [**action\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-action-param)  <br> |
|  [**value\_t**](structsdm_1_1ast_1_1value__t.md) | [**agent\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-agent-param)  <br> |
|  float | [**discount\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-discount-param)  <br> |
|  [**values\_t**](structsdm_1_1ast_1_1values__t.md) | [**observation\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-observation-param)  <br> |
|  [**observation\_t**](namespacesdm_1_1ast.md#typedef-observation-t) | [**observation\_spec**](structsdm_1_1ast_1_1dpomdp__t.md#variable-observation-spec)  <br> |
|  [**reward\_t**](namespacesdm_1_1ast.md#typedef-reward-t) | [**reward\_spec**](structsdm_1_1ast_1_1dpomdp__t.md#variable-reward-spec)  <br> |
|  [**real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) | [**start\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-start-param)  <br> |
|  [**value\_t**](structsdm_1_1ast_1_1value__t.md) | [**state\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-state-param)  <br> |
|  [**transition\_t**](namespacesdm_1_1ast.md#typedef-transition-t) | [**transition\_spec**](structsdm_1_1ast_1_1dpomdp__t.md#variable-transition-spec)  <br> |
|  std::string | [**value\_param**](structsdm_1_1ast_1_1dpomdp__t.md#variable-value-param)  <br> |










## Public Attributes Documentation


### variable action\_param 


```cpp
values_t sdm::ast::dpomdp_t::action_param;
```



### variable agent\_param 


```cpp
value_t sdm::ast::dpomdp_t::agent_param;
```



### variable discount\_param 


```cpp
float sdm::ast::dpomdp_t::discount_param;
```



### variable observation\_param 


```cpp
values_t sdm::ast::dpomdp_t::observation_param;
```



### variable observation\_spec 


```cpp
observation_t sdm::ast::dpomdp_t::observation_spec;
```



### variable reward\_spec 


```cpp
reward_t sdm::ast::dpomdp_t::reward_spec;
```



### variable start\_param 


```cpp
real_vector_t sdm::ast::dpomdp_t::start_param;
```



### variable state\_param 


```cpp
value_t sdm::ast::dpomdp_t::state_param;
```



### variable transition\_spec 


```cpp
transition_t sdm::ast::dpomdp_t::transition_spec;
```



### variable value\_param 


```cpp
std::string sdm::ast::dpomdp_t::value_param;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/ast.hpp`