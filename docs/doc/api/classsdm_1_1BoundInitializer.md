
<NavBar active_item_id="2"/>

# Class sdm::BoundInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BoundInitializer**](classsdm_1_1BoundInitializer.md)



_This initializer initializes a value function to the estimation of the value if if we get a constant reward at every timestep._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)


Inherited by the following classes: [sdm::MaxInitializer](classsdm_1_1MaxInitializer.md),  [sdm::MinInitializer](classsdm_1_1MinInitializer.md)














## Public Functions

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







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**value\_**](classsdm_1_1BoundInitializer.md#variable-value-)  <br> |








# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function BoundInitializer [1/2]


```cpp
inline sdm::BoundInitializer::BoundInitializer () 
```



### function BoundInitializer [2/2]


```cpp
inline sdm::BoundInitializer::BoundInitializer (
    double value
) 
```



### function init 


```cpp
inline virtual void sdm::BoundInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)

## Protected Attributes Documentation


### variable value\_ 


```cpp
double sdm::BoundInitializer< TState, TAction >::value_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer.hpp`