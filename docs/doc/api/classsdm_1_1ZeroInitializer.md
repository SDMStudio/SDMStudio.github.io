
# Class sdm::ZeroInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput class TInput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md)



_This initializer initializes a value function to zero._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)
























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md#function-zeroinitializer) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt;=nullptr) <br> |

## Public Functions inherited from sdm::ValueInitializer

See [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)

| Type | Name |
| ---: | :--- |
|   | [**ValueInitializer**](classsdm_1_1ValueInitializer.md#function-valueinitializer) (double v) <br> |
| virtual void | [**init**](classsdm_1_1ValueInitializer.md#function-init-1-2) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |
| virtual void | [**init**](classsdm_1_1ValueInitializer.md#function-init-2-2) (std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; vf) <br> |
|  void | [**initBase**](classsdm_1_1ValueInitializer.md#function-initbase) (std::shared\_ptr&lt; [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md)&lt; TGlobalInput &gt;&gt; vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |

## Public Functions inherited from sdm::QInitializer

See [sdm::QInitializer](classsdm_1_1QInitializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1QInitializer.md#function-init) (std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; vf) = 0<br> |
| virtual  | [**~QInitializer**](classsdm_1_1QInitializer.md#function-qinitializer) () <br> |














## Protected Attributes inherited from sdm::ValueInitializer

See [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)

| Type | Name |
| ---: | :--- |
|  double | [**value**](classsdm_1_1ValueInitializer.md#variable-value)  <br> |















# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function ZeroInitializer 


```cpp
inline sdm::ZeroInitializer::ZeroInitializer (
    std::shared_ptr< SolvableByHSVI >=nullptr
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`