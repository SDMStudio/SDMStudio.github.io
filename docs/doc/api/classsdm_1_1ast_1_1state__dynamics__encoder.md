
# Class sdm::ast::state\_dynamics\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md)



_encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_

* `#include <dynamics_encoders.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) &gt; | [**encode**](classsdm_1_1ast_1_1state__dynamics__encoder.md#function-encode) (const [**transition\_t**](namespacesdm_1_1ast.md#typedef-transition-t) & transits) <br> |
|   | [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md#function-state-dynamics-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & state\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & agent\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & action\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**action\_space\_**](classsdm_1_1ast_1_1state__dynamics__encoder.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**agent\_space\_**](classsdm_1_1ast_1_1state__dynamics__encoder.md#variable-agent-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**state\_space\_**](classsdm_1_1ast_1_1state__dynamics__encoder.md#variable-state-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
std::shared_ptr< TabularStateDynamics > sdm::ast::state_dynamics_encoder::encode (
    const transition_t & transits
) 
```



### function state\_dynamics\_encoder 


```cpp
sdm::ast::state_dynamics_encoder::state_dynamics_encoder (
    const std::shared_ptr< DiscreteSpace > & state_space,
    const std::shared_ptr< DiscreteSpace > & agent_space,
    const std::shared_ptr< MultiDiscreteSpace > & action_space
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::state_dynamics_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::state_dynamics_encoder::agent_space_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::state_dynamics_encoder::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/dynamics_encoders.hpp`