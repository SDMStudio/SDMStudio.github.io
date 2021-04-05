
<NavBar active_item_id="2"/>

# Struct sdm::ast::reward\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**reward\_encoder**](structsdm_1_1ast_1_1reward__encoder.md)





* `#include <encoder.hpp>`



Inherits the following classes: boost::static_visitor<>










## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**action\_space\_**](structsdm_1_1ast_1_1reward__encoder.md#variable-action-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**ag\_space\_**](structsdm_1_1ast_1_1reward__encoder.md#variable-ag-space-)  <br> |
|  [**Reward**](classsdm_1_1Reward.md) \* | [**rewards\_**](structsdm_1_1ast_1_1reward__encoder.md#variable-rewards-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**state\_space\_**](structsdm_1_1ast_1_1reward__encoder.md#variable-state-space-)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**operator()**](structsdm_1_1ast_1_1reward__encoder.md#function-operator()-1-2) (const [**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) & r1) <br> |
|  void | [**operator()**](structsdm_1_1ast_1_1reward__encoder.md#function-operator()-2-2) (const [**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) & r2) <br> |
|   | [**reward\_encoder**](structsdm_1_1ast_1_1reward__encoder.md#function-reward-encoder) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & state\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & ag\_space, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & action\_space, [**Reward**](classsdm_1_1Reward.md) \* rewards) <br> |








## Public Attributes Documentation


### variable action\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::reward_encoder::action_space_;
```



### variable ag\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::reward_encoder::ag_space_;
```



### variable rewards\_ 


```cpp
Reward* sdm::ast::reward_encoder::rewards_;
```



### variable state\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::reward_encoder::state_space_;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
inline void sdm::ast::reward_encoder::operator() (
    const reward_entry_1_t & r1
) 
```



### function operator() [2/2]


```cpp
inline void sdm::ast::reward_encoder::operator() (
    const reward_entry_2_t & r2
) 
```



### function reward\_encoder 


```cpp
inline sdm::ast::reward_encoder::reward_encoder (
    const DiscreteSpace < std::string > & state_space,
    const DiscreteSpace < std::string > & ag_space,
    const MultiDiscreteSpace < std::string > & action_space,
    Reward * rewards
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/encoder.hpp`