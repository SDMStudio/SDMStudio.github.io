
# Class sdm::ast::state\_transition\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**state\_transition\_encoder**](classsdm_1_1ast_1_1state__transition__encoder.md)



_encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_

* `#include <dynamics_encoders.hpp>`



Inherits the following classes: boost::static_visitor<>












## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**operator()**](classsdm_1_1ast_1_1state__transition__encoder.md#function-operator()-1-3) (const [**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) & t1) <br> |
|  void | [**operator()**](classsdm_1_1ast_1_1state__transition__encoder.md#function-operator()-2-3) (const [**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) & t2) <br> |
|  void | [**operator()**](classsdm_1_1ast_1_1state__transition__encoder.md#function-operator()-3-3) (const [**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) & t3) <br> |
|   | [**state\_transition\_encoder**](classsdm_1_1ast_1_1state__transition__encoder.md#function-state-transition-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & st\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & ag\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & act\_space, const std::shared\_ptr&lt; [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) &gt; & state\_dynamics) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**action\_space\_**](classsdm_1_1ast_1_1state__transition__encoder.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**agent\_space\_**](classsdm_1_1ast_1_1state__transition__encoder.md#variable-agent-space-)  <br> |
|  std::shared\_ptr&lt; [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) &gt; | [**state\_dynamics\_**](classsdm_1_1ast_1_1state__transition__encoder.md#variable-state-dynamics-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**state\_space\_**](classsdm_1_1ast_1_1state__transition__encoder.md#variable-state-space-)  <br> |




## Public Functions Documentation


### function operator() [1/3]


```cpp
void sdm::ast::state_transition_encoder::operator() (
    const transition_entry_1_t & t1
) 
```



### function operator() [2/3]


```cpp
void sdm::ast::state_transition_encoder::operator() (
    const transition_entry_2_t & t2
) 
```



### function operator() [3/3]


```cpp
void sdm::ast::state_transition_encoder::operator() (
    const transition_entry_3_t & t3
) 
```



### function state\_transition\_encoder 


```cpp
sdm::ast::state_transition_encoder::state_transition_encoder (
    const std::shared_ptr< DiscreteSpace > & st_space,
    const std::shared_ptr< DiscreteSpace > & ag_space,
    const std::shared_ptr< MultiDiscreteSpace > & act_space,
    const std::shared_ptr< TabularStateDynamics > & state_dynamics
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::state_transition_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::state_transition_encoder::agent_space_;
```



### variable state\_dynamics\_ 


```cpp
std::shared_ptr<TabularStateDynamics> sdm::ast::state_transition_encoder::state_dynamics_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::state_transition_encoder::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/dynamics_encoders.hpp`