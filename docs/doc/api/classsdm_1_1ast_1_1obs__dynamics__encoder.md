
<NavBar active_item_id="2"/>

# Class sdm::ast::obs\_dynamics\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md)





* `#include <encoder.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) | [**encode**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#function-encode) (const [**observation\_t**](namespacesdm_1_1ast.md#typedef-observation-t) & observs, [**StateDynamics**](classsdm_1_1StateDynamics.md) st\_dyn) <br> |
|   | [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#function-obs-dynamics-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & state\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & agent\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & action\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & obs\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**action\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-action-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**agent\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-agent-space-)  <br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**obs\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-obs-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**state\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-state-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
inline ObservationDynamics sdm::ast::obs_dynamics_encoder::encode (
    const observation_t & observs,
    StateDynamics st_dyn
) 
```



### function obs\_dynamics\_encoder 


```cpp
inline sdm::ast::obs_dynamics_encoder::obs_dynamics_encoder (
    const DiscreteSpace < std::string > & state_space,
    const DiscreteSpace < std::string > & agent_space,
    const MultiDiscreteSpace < std::string > & action_space,
    const MultiDiscreteSpace < std::string > & obs_space
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::obs_dynamics_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::obs_dynamics_encoder::agent_space_;
```



### variable obs\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::obs_dynamics_encoder::obs_space_;
```



### variable state\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::obs_dynamics_encoder::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`