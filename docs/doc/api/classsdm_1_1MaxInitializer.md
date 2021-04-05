
<NavBar active_item_id="2"/>

# Class sdm::MaxInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MaxInitializer**](classsdm_1_1MaxInitializer.md)



_This initializer initializes a value function to the best value. This is an optimistic initialization._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MaxInitializer**](classsdm_1_1MaxInitializer.md#function-maxinitializer) () <br> |
| virtual void | [**init**](classsdm_1_1MaxInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::BoundInitializer

See [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md)

| Type | Name |
| ---: | :--- |
|   | [**BoundInitializer**](classsdm_1_1BoundInitializer.md#function-boundinitializer-1-2) () <br> |
|   | [**BoundInitializer**](classsdm_1_1BoundInitializer.md#function-boundinitializer-2-2) (double value) <br> |
| virtual void | [**init**](classsdm_1_1BoundInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |











## Protected Attributes inherited from sdm::BoundInitializer

See [sdm::BoundInitializer](classsdm_1_1BoundInitializer.md)

| Type | Name |
| ---: | :--- |
|  double | [**value\_**](classsdm_1_1BoundInitializer.md#variable-value-)  <br> |











# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function MaxInitializer 


```cpp
inline sdm::MaxInitializer::MaxInitializer () 
```



### function init 


```cpp
inline virtual void sdm::MaxInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::BoundInitializer::init*](classsdm_1_1BoundInitializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer.hpp`