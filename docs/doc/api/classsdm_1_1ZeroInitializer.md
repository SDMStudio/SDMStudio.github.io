
<NavBar active_item_id="2"/>

# Class sdm::ZeroInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md)



_This initializer initializes a value function to zero._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md#function-zeroinitializer) () <br> |

## Public Functions inherited from sdm::ValueInitializer

See [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)

| Type | Name |
| ---: | :--- |
|   | [**ValueInitializer**](classsdm_1_1ValueInitializer.md#function-valueinitializer) (double v) <br> |
| virtual void | [**init**](classsdm_1_1ValueInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |











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
inline sdm::ZeroInitializer::ZeroInitializer () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer.hpp`