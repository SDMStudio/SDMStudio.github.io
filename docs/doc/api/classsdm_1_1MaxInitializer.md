
# Class sdm::MaxInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MaxInitializer**](classsdm_1_1MaxInitializer.md)



_This initializer initializes a value function to the best value. This is an optimistic initialization._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MaxInitializer**](classsdm_1_1MaxInitializer.md#function-maxinitializer) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |
| virtual void | [**init**](classsdm_1_1MaxInitializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |

## Public Functions inherited from sdm::BoundInitializer

See [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md)

| Type | Name |
| ---: | :--- |
|   | [**BoundInitializer**](classsdm_1_1BoundInitializer.md#function-boundinitializer-1-2) () <br> |
|   | [**BoundInitializer**](classsdm_1_1BoundInitializer.md#function-boundinitializer-2-2) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world, double value) <br> |
|  double | [**computeValueInfiniteHorizon**](classsdm_1_1BoundInitializer.md#function-computevalueinfinitehorizon) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |
|  double | [**getValue**](classsdm_1_1BoundInitializer.md#function-getvalue) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual void | [**init**](classsdm_1_1BoundInitializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |











## Protected Attributes inherited from sdm::BoundInitializer

See [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md)

| Type | Name |
| ---: | :--- |
|  double(MDPInterface::\* | [**callback\_value**](classsdm_1_1BoundInitializer.md#variable-callback-value)   = = nullptr<br> |
|  double | [**value\_**](classsdm_1_1BoundInitializer.md#variable-value-)  <br> |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1BoundInitializer.md#variable-world-)  <br> |











# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function MaxInitializer 


```cpp
sdm::MaxInitializer::MaxInitializer (
    std::shared_ptr< SolvableByHSVI > world
) 
```



### function init 


```cpp
virtual void sdm::MaxInitializer::init (
    std::shared_ptr< ValueFunction > vf
) 
```


Implements [*sdm::BoundInitializer::init*](classsdm_1_1BoundInitializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`