
# Class sdm::ItemPair

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TItem\_1, typename TItem\_2, class SuperClass&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ItemPair**](classsdm_1_1ItemPair.md)





* `#include <state.hpp>`



Inherits the following classes: SuperClass,  Pair< TItem_1, TItem_2 >












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ItemPair**](classsdm_1_1ItemPair.md#function-itempair-1-2) (const TItem\_1 & first\_item, const TItem\_2 & second\_item) <br> |
|   | [**ItemPair**](classsdm_1_1ItemPair.md#function-itempair-2-2) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; TItem\_1, TItem\_2 &gt; & copy) <br> |
|  std::string | [**str**](classsdm_1_1ItemPair.md#function-str) () const<br> |








## Public Functions Documentation


### function ItemPair [1/2]


```cpp
inline sdm::ItemPair::ItemPair (
    const TItem_1 & first_item,
    const TItem_2 & second_item
) 
```



### function ItemPair [2/2]


```cpp
inline sdm::ItemPair::ItemPair (
    const Pair < TItem_1, TItem_2 > & copy
) 
```



### function str 


```cpp
inline std::string sdm::ItemPair::str () const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/state.hpp`