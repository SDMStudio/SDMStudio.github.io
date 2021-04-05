
<NavBar active_item_id="2"/>

# Struct sdm::ast::joint\_element\_encoder


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**joint\_element\_encoder**](classsdm_1_1ast_1_1joint__element__encoder.md)



_encodes the input into a joint element (vector of number)_ 

* `#include <encoder.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::vector&lt; std::string &gt; &gt; | [**encode**](classsdm_1_1ast_1_1joint__element__encoder.md#function-encode) (const std::vector&lt; [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) &gt; & as) const<br> |
|   | [**joint\_element\_encoder**](classsdm_1_1ast_1_1joint__element__encoder.md#function-joint-element-encoder) (const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & element\_space, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & ag\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; | [**ag\_space\_**](classsdm_1_1ast_1_1joint__element__encoder.md#variable-ag-space-)  <br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; | [**element\_space\_**](classsdm_1_1ast_1_1joint__element__encoder.md#variable-element-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
inline std::vector< std::vector< std::string > > sdm::ast::joint_element_encoder::encode (
    const std::vector< identifier_t > & as
) const
```



### function joint\_element\_encoder 


```cpp
inline sdm::ast::joint_element_encoder::joint_element_encoder (
    const MultiDiscreteSpace < std::string > & element_space,
    const DiscreteSpace < std::string > & ag_space
) 
```


## Protected Attributes Documentation


### variable ag\_space\_ 


```cpp
DiscreteSpace<std::string> sdm::ast::joint_element_encoder::ag_space_;
```



### variable element\_space\_ 


```cpp
MultiDiscreteSpace<std::string> sdm::ast::joint_element_encoder::element_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoder.hpp`