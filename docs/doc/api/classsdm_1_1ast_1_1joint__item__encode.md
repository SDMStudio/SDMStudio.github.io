
# Struct sdm::ast::joint\_item\_encode

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md) **>** [**joint\_item\_encode**](classsdm_1_1ast_1_1joint__item__encode.md)



_encodes the input into a joint element (vector of number)_ 

* `#include <item_encoders.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**encode**](classsdm_1_1ast_1_1joint__item__encode.md#function-encode) (const std::vector&lt; [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) &gt; & list\_items) const<br> |
|   | [**joint\_item\_encode**](classsdm_1_1ast_1_1joint__item__encode.md#function-joint-item-encode) (const std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; & joint\_item\_space, const std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; & ag\_space) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**ag\_space\_**](classsdm_1_1ast_1_1joint__item__encode.md#variable-ag-space-)  <br> |
|  std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &gt; | [**joint\_item\_space\_**](classsdm_1_1ast_1_1joint__item__encode.md#variable-joint-item-space-)  <br> |




## Public Functions Documentation


### function encode 


```cpp
inline std::vector< std::shared_ptr< Item > > sdm::ast::joint_item_encode::encode (
    const std::vector< identifier_t > & list_items
) const
```



### function joint\_item\_encode 


```cpp
inline sdm::ast::joint_item_encode::joint_item_encode (
    const std::shared_ptr< MultiDiscreteSpace > & joint_item_space,
    const std::shared_ptr< DiscreteSpace > & ag_space
) 
```


## Protected Attributes Documentation


### variable ag\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::ast::joint_item_encode::ag_space_;
```



### variable joint\_item\_space\_ 


```cpp
std::shared_ptr<MultiDiscreteSpace> sdm::ast::joint_item_encode::joint_item_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/item_encoders.hpp`