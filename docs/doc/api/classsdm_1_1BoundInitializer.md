
# Class sdm::BoundInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BoundInitializer**](classsdm_1_1BoundInitializer.md)



_This initializer initializes a value function to the estimation of the value if we get a constant reward at every timestep._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)


Inherited by the following classes: [sdm::BlindInitializer](classsdm_1_1BlindInitializer.md),  [sdm::MaxInitializer](classsdm_1_1MaxInitializer.md),  [sdm::MinInitializer](classsdm_1_1MinInitializer.md)














## Public Functions

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







## Protected Attributes

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


### function BoundInitializer [1/2]


```cpp
sdm::BoundInitializer::BoundInitializer () 
```



### function BoundInitializer [2/2]


```cpp
sdm::BoundInitializer::BoundInitializer (
    std::shared_ptr< SolvableByHSVI > world,
    double value
) 
```



### function computeValueInfiniteHorizon 


```cpp
double sdm::BoundInitializer::computeValueInfiniteHorizon (
    std::shared_ptr< ValueFunction > vf
) 
```



### function getValue 


```cpp
double sdm::BoundInitializer::getValue (
    std::shared_ptr< ValueFunction > vf,
    number t
) 
```



### function init 


```cpp
virtual void sdm::BoundInitializer::init (
    std::shared_ptr< ValueFunction > vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)

## Protected Attributes Documentation


### variable callback\_value 


```cpp
double(MDPInterface::* sdm::BoundInitializer::callback_value) (number) const;
```



### variable value\_ 


```cpp
double sdm::BoundInitializer::value_;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::BoundInitializer::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`