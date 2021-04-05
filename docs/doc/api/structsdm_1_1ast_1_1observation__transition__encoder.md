
<NavBar active_item_id="2"/>

# Struct sdm::ast::observation\_transition\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md)



_encodes the input into a dynamic class_ 

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor<>










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**act\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-act-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**ag\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-ag-space-)  <br> |
|  std::vector&lt; Matrix &gt; | [**o\_model**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-o-model)  <br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**obs\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-obs-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**st\_space\_**](structsdm_1_1ast_1_1observation__transition__encoder.md#variable-st-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-observation-transition-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & st\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & ag\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & act\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & obs\_space) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-operator()-1-3) (const [**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) & z3) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-operator()-2-3) (const [**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) & z2) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1observation__transition__encoder.md#function-operator()-3-3) (const [**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) & z1) <br> |








## Public Attributes Documentation


### variable act\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::observation_transition_encoder::act_space_;
```



### variable ag\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::observation_transition_encoder::ag_space_;
```



### variable o\_model 


```cpp
std::vector<Matrix> sdm::ast::observation_transition_encoder::o_model;
```



### variable obs\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::observation_transition_encoder::obs_space_;
```



### variable st\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::observation_transition_encoder::st_space_;
```


## Public Functions Documentation


### function observation\_transition\_encoder 


```cpp
inline sdm::ast::observation_transition_encoder::observation_transition_encoder (
    const DiscreteSpace < std::string > & st_space,
    const DiscreteSpace < std::string > & ag_space,
    const MultiDiscreteSpace < std::string > & act_space,
    const MultiDiscreteSpace < std::string > & obs_space
) 
```



### function operator() [1/3]


```cpp
inline void sdm::ast::observation_transition_encoder::operator() (
    const observation_entry_3_t & z3
) 
```



### function operator() [2/3]


```cpp
inline void sdm::ast::observation_transition_encoder::operator() (
    const observation_entry_2_t & z2
) 
```



### function operator() [3/3]


```cpp
inline void sdm::ast::observation_transition_encoder::operator() (
    const observation_entry_1_t & z1
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`