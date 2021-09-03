
# Struct sdm::ast::observation\_transition\_encoder

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md)



_encodes the input into an observation dynamic class_ 

* `#include <dynamics_encoders.hpp>`



Inherits the following classes: boost::static_visitor<>










## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**action\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**agent\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-agent-space-)  <br> |
|  std::shared\_ptr&lt; [**TabularObservationDynamicsAS**](classsdm_1_1TabularObservationDynamicsAS.md) &gt; | [**obs\_dynamics\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-obs-dynamics-)  <br> |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**obs\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-obs-space-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**state\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-state-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-observation-transition-encoder) (const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & st\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & ag\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & act\_space, const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & obs\_space, const std::shared\_ptr&lt; [**TabularObservationDynamicsAS**](classsdm_1_1TabularObservationDynamicsAS.md) &gt; & dynamics) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-operator()-1-3) (const [**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) & z1) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-operator()-2-3) (const [**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) & z3) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-operator()-3-3) (const [**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) & z2) <br> |








## Public Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::observation_transition_encoder::action_space_;
```



### variable agent\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::observation_transition_encoder::agent_space_;
```



### variable obs\_dynamics\_ 


```cpp
std::shared_ptr<TabularObservationDynamicsAS> sdm::ast::observation_transition_encoder::obs_dynamics_;
```



### variable obs\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::observation_transition_encoder::obs_space_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::observation_transition_encoder::state_space_;
```


## Public Functions Documentation


### function observation\_transition\_encoder 


```cpp
sdm::ast::observation_transition_encoder::observation_transition_encoder (
    const std::shared_ptr< DiscreteSpace > & st_space,
    const std::shared_ptr< DiscreteSpace > & ag_space,
    const std::shared_ptr< MultiDiscreteSpace > & act_space,
    const std::shared_ptr< MultiDiscreteSpace > & obs_space,
    const std::shared_ptr< TabularObservationDynamicsAS > & dynamics
) 
```



### function operator() [1/3]


```cpp
void sdm::ast::observation_transition_encoder::operator() (
    const observation_entry_1_t & z1
) 
```



### function operator() [2/3]


```cpp
void sdm::ast::observation_transition_encoder::operator() (
    const observation_entry_3_t & z3
) 
```



### function operator() [3/3]


```cpp
void sdm::ast::observation_transition_encoder::operator() (
    const observation_entry_2_t & z2
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/dynamics_encoders.hpp`