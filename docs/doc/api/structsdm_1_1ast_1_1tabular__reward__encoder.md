
# Struct sdm::ast::tabular\_reward\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**tabular\_reward\_encoder**](structsdm_1_1ast_1_1tabular__reward__encoder.md)





* `#include <reward_encoders.hpp>`



Inherits the following classes: boost::static_visitor<>










## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**action\_space\_**](structsdm_1_1ast_1_1tabular__reward__encoder.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**ag\_space\_**](structsdm_1_1ast_1_1tabular__reward__encoder.md#variable-ag-space-)  <br> |
|  std::shared\_ptr&lt; [**TabularReward**](classsdm_1_1TabularReward.md) &gt; | [**rewards\_**](structsdm_1_1ast_1_1tabular__reward__encoder.md#variable-rewards-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**state\_space\_**](structsdm_1_1ast_1_1tabular__reward__encoder.md#variable-state-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**operator()**](structsdm_1_1ast_1_1tabular__reward__encoder.md#function-operator()-1-2) (const [**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) & r1) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1tabular__reward__encoder.md#function-operator()-2-2) (const [**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) & r2) <br> |
|   | [**tabular\_reward\_encoder**](structsdm_1_1ast_1_1tabular__reward__encoder.md#function-tabular-reward-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & state\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & ag\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & action\_space, std::shared\_ptr&lt; [**TabularReward**](classsdm_1_1TabularReward.md) &gt; rewards) <br> |








## Public Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::tabular_reward_encoder::action_space_;
```



### variable ag\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::tabular_reward_encoder::ag_space_;
```



### variable rewards\_ 


```cpp
std::shared_ptr<TabularReward> sdm::ast::tabular_reward_encoder::rewards_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::tabular_reward_encoder::state_space_;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
void sdm::ast::tabular_reward_encoder::operator() (
    const reward_entry_1_t & r1
) 
```



### function operator() [2/2]


```cpp
void sdm::ast::tabular_reward_encoder::operator() (
    const reward_entry_2_t & r2
) 
```



### function tabular\_reward\_encoder 


```cpp
sdm::ast::tabular_reward_encoder::tabular_reward_encoder (
    const std::shared_ptr< DiscreteSpace > & state_space,
    const std::shared_ptr< DiscreteSpace > & ag_space,
    const std::shared_ptr< MultiDiscreteSpace > & action_space,
    std::shared_ptr< TabularReward > rewards
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/reward_encoders.hpp`