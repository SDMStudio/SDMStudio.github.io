
<NavBar active_item_id="2"/>

# Class sdm::MinInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MinInitializer**](classsdm_1_1MinInitializer.md)





* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1MinInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |















## Public Functions Documentation


### function init 


```cpp
inline virtual void sdm::MinInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer.hpp`