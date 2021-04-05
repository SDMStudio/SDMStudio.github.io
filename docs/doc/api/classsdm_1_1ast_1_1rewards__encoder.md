
<NavBar active_item_id="2"/>

# Class sdm::ast::rewards\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md)





* `#include <encoder.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  [**Reward**](classsdm_1_1Reward.md) | [**encode**](classsdm_1_1ast_1_1rewards__encoder.md#function-encode) (const [**reward\_t**](namespacesdm_1_1ast.md#typedef-reward-t) & r) <br> |
|   | [**rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md#function-rewards-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & state\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & agent\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & action\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**action\_space\_**](classsdm_1_1ast_1_1rewards__encoder.md#variable-action-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**agent\_space\_**](classsdm_1_1ast_1_1rewards__encoder.md#variable-agent-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**state\_space\_**](classsdm_1_1ast_1_1rewards__encoder.md#variable-state-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
inline Reward sdm::ast::rewards_encoder::encode (
    const reward_t & r
) 
```



### function rewards\_encoder 


```cpp
inline sdm::ast::rewards_encoder::rewards_encoder (
    const DiscreteSpace < std::string > & state_space,
    const DiscreteSpace < std::string > & agent_space,
    const MultiDiscreteSpace < std::string > & action_space
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::rewards_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::rewards_encoder::agent_space_;
```



### variable state\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::rewards_encoder::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoder.hpp`