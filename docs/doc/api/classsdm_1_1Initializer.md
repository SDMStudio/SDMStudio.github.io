
<NavBar active_item_id="2"/>

# Class sdm::Initializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Initializer**](classsdm_1_1Initializer.md)



_Abstract class for initializer._ [More...](#detailed-description)

* `#include <initializer.hpp>`





Inherited by the following classes: [sdm::BlindInitializer](classsdm_1_1BlindInitializer.md),  [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md),  [sdm::MDPInitializer](classsdm_1_1MDPInitializer.md),  [sdm::POMDPInitializer](classsdm_1_1POMDPInitializer.md),  [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |








# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function init 


```cpp
virtual void sdm::Initializer::init (
    ValueFunction < TState, TAction > * vf
) = 0
```



### function ~Initializer 


```cpp
inline virtual sdm::Initializer::~Initializer () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer.hpp`