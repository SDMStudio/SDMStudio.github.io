
# Struct sdm::ast::tabular\_rewards\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**tabular\_rewards\_encoder**](structsdm_1_1ast_1_1tabular__rewards__encoder.md)





* `#include <reward_encoders.hpp>`













## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**action\_space\_**](structsdm_1_1ast_1_1tabular__rewards__encoder.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**agent\_space\_**](structsdm_1_1ast_1_1tabular__rewards__encoder.md#variable-agent-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**state\_space\_**](structsdm_1_1ast_1_1tabular__rewards__encoder.md#variable-state-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**TabularReward**](classsdm_1_1TabularReward.md) &gt; | [**encode**](structsdm_1_1ast_1_1tabular__rewards__encoder.md#function-encode) (const [**reward\_t**](namespacesdm_1_1ast.md#typedef-reward-t) & r) <br> |
|   | [**tabular\_rewards\_encoder**](structsdm_1_1ast_1_1tabular__rewards__encoder.md#function-tabular-rewards-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & state\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & agent\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & action\_space) <br> |








## Public Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::tabular_rewards_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::tabular_rewards_encoder::agent_space_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::tabular_rewards_encoder::state_space_;
```


## Public Functions Documentation


### function encode 


```cpp
std::shared_ptr< TabularReward > sdm::ast::tabular_rewards_encoder::encode (
    const reward_t & r
) 
```



### function tabular\_rewards\_encoder 


```cpp
sdm::ast::tabular_rewards_encoder::tabular_rewards_encoder (
    const std::shared_ptr< DiscreteSpace > & state_space,
    const std::shared_ptr< DiscreteSpace > & agent_space,
    const std::shared_ptr< MultiDiscreteSpace > & action_space
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/reward_encoders.hpp`