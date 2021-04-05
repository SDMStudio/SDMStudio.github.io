
<NavBar active_item_id="2"/>

# Struct sdm::ast::state\_transition\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**state\_transition\_encoder**](structsdm_1_1ast_1_1state__transition__encoder.md)



_used to encode state transition dynamics (i.e._ [_**StateDynamics**_](classsdm_1_1StateDynamics.md) _class)_

* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor<>










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**act\_space\_**](structsdm_1_1ast_1_1state__transition__encoder.md#variable-act-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**ag\_space\_**](structsdm_1_1ast_1_1state__transition__encoder.md#variable-ag-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**st\_space\_**](structsdm_1_1ast_1_1state__transition__encoder.md#variable-st-space-)  <br> |
|  std::vector&lt; Matrix &gt; | [**t\_model**](structsdm_1_1ast_1_1state__transition__encoder.md#variable-t-model)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**operator()**](structsdm_1_1ast_1_1state__transition__encoder.md#function-operator()-1-3) (const [**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) & t3) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1state__transition__encoder.md#function-operator()-2-3) (const [**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) & t2) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1state__transition__encoder.md#function-operator()-3-3) (const [**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) & t1) <br> |
|   | [**state\_transition\_encoder**](structsdm_1_1ast_1_1state__transition__encoder.md#function-state-transition-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & st\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & ag\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & act\_space) <br> |








## Public Attributes Documentation


### variable act\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::state_transition_encoder::act_space_;
```



### variable ag\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::state_transition_encoder::ag_space_;
```



### variable st\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::state_transition_encoder::st_space_;
```



### variable t\_model 


```cpp
std::vector<Matrix> sdm::ast::state_transition_encoder::t_model;
```


## Public Functions Documentation


### function operator() [1/3]


```cpp
inline void sdm::ast::state_transition_encoder::operator() (
    const transition_entry_3_t & t3
) 
```



### function operator() [2/3]


```cpp
inline void sdm::ast::state_transition_encoder::operator() (
    const transition_entry_2_t & t2
) 
```



### function operator() [3/3]


```cpp
inline void sdm::ast::state_transition_encoder::operator() (
    const transition_entry_1_t & t1
) 
```



### function state\_transition\_encoder 


```cpp
inline sdm::ast::state_transition_encoder::state_transition_encoder (
    const DiscreteSpace < std::string > & st_space,
    const DiscreteSpace < std::string > & ag_space,
    const MultiDiscreteSpace < std::string > & act_space
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`