
# Class sdm::Initializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Initializer**](classsdm_1_1Initializer.md)



_Abstract class for initializer._ [More...](#detailed-description)

* `#include <initializer.hpp>`





Inherited by the following classes: [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md),  [sdm::MDPInitializer](classsdm_1_1MDPInitializer.md),  [sdm::POMDPInitializer](classsdm_1_1POMDPInitializer.md),  [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |








# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function init 


```cpp
virtual void sdm::Initializer::init (
    std::shared_ptr< ValueFunction > vf
) = 0
```



### function ~Initializer 


```cpp
inline virtual sdm::Initializer::~Initializer () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`