
<NavBar active_item_id="2"/>

# Class sdm::ast::state\_dynamics\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md)





* `#include <encoder.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  [**StateDynamics**](classsdm_1_1StateDynamics.md) | [**encode**](classsdm_1_1ast_1_1state__dynamics__encoder.md#function-encode) (const [**transition\_t**](namespacesdm_1_1ast.md#typedef-transition-t) & transits) <br> |
|   | [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md#function-state-dynamics-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & state\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & agent\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & action\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**action\_space\_**](classsdm_1_1ast_1_1state__dynamics__encoder.md#variable-action-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**agent\_space\_**](classsdm_1_1ast_1_1state__dynamics__encoder.md#variable-agent-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**state\_space\_**](classsdm_1_1ast_1_1state__dynamics__encoder.md#variable-state-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
inline StateDynamics sdm::ast::state_dynamics_encoder::encode (
    const transition_t & transits
) 
```



### function state\_dynamics\_encoder 


```cpp
inline sdm::ast::state_dynamics_encoder::state_dynamics_encoder (
    const DiscreteSpace < std::string > & state_space,
    const DiscreteSpace < std::string > & agent_space,
    const MultiDiscreteSpace < std::string > & action_space
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::state_dynamics_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::state_dynamics_encoder::agent_space_;
```



### variable state\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::state_dynamics_encoder::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`