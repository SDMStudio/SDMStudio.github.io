
# Class sdm::ast::obs\_dynamics\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md)





* `#include <dynamics_encoders.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**TabularObservationDynamicsAS**](classsdm_1_1TabularObservationDynamicsAS.md) &gt; | [**encode**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#function-encode) (const [**observation\_t**](namespacesdm_1_1ast.md#typedef-observation-t) & observs, std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; state\_dynamics) <br> |
|   | [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#function-obs-dynamics-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & state\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & agent\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & action\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & obs\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**action\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**agent\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-agent-space-)  <br> |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**obs\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-obs-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**state\_space\_**](classsdm_1_1ast_1_1obs__dynamics__encoder.md#variable-state-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
std::shared_ptr< TabularObservationDynamicsAS > sdm::ast::obs_dynamics_encoder::encode (
    const observation_t & observs,
    std::shared_ptr< StateDynamicsInterface > state_dynamics
) 
```



### function obs\_dynamics\_encoder 


```cpp
sdm::ast::obs_dynamics_encoder::obs_dynamics_encoder (
    const std::shared_ptr< DiscreteSpace > & state_space,
    const std::shared_ptr< DiscreteSpace > & agent_space,
    const std::shared_ptr< MultiDiscreteSpace > & action_space,
    const std::shared_ptr< MultiDiscreteSpace > & obs_space
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::obs_dynamics_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::obs_dynamics_encoder::agent_space_;
```



### variable obs\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::obs_dynamics_encoder::obs_space_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::obs_dynamics_encoder::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/dynamics_encoders.hpp`