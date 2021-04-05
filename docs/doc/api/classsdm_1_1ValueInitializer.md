
<NavBar active_item_id="2"/>

# Class sdm::ValueInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueInitializer**](classsdm_1_1ValueInitializer.md)





* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)


Inherited by the following classes: [sdm::ZeroInitializer](classsdm_1_1ZeroInitializer.md)














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ValueInitializer**](classsdm_1_1ValueInitializer.md#function-valueinitializer) (double v) <br> |
| virtual void | [**init**](classsdm_1_1ValueInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**value**](classsdm_1_1ValueInitializer.md#variable-value)  <br> |








## Public Functions Documentation


### function ValueInitializer 


```cpp
inline sdm::ValueInitializer::ValueInitializer (
    double v
) 
```



### function init 


```cpp
inline virtual void sdm::ValueInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)

## Protected Attributes Documentation


### variable value 


```cpp
double sdm::ValueInitializer< TState, TAction >::value;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer.hpp`