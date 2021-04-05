
<NavBar active_item_id="2"/>

# Class sdm::MaxInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MaxInitializer**](classsdm_1_1MaxInitializer.md)





* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1MaxInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |















## Public Functions Documentation


### function init 


```cpp
inline virtual void sdm::MaxInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer.hpp`