
<NavBar active_item_id="2"/>

# Class sdm::Initializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Initializer**](classsdm_1_1Initializer.md)





* `#include <initializer.hpp>`





Inherited by the following classes: [sdm::MaxInitializer](classsdm_1_1MaxInitializer.md),  [sdm::MinInitializer](classsdm_1_1MinInitializer.md),  [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |








## Public Functions Documentation


### function init 


```cpp
virtual void sdm::Initializer::init (
    ValueFunction < TState, TAction > * vf
) = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer.hpp`