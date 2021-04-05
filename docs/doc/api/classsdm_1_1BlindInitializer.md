
<NavBar active_item_id="2"/>

# Class sdm::BlindInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BlindInitializer**](classsdm_1_1BlindInitializer.md)



_This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BlindInitializer**](classsdm_1_1BlindInitializer.md#function-blindinitializer) () <br> |
| virtual void | [**init**](classsdm_1_1BlindInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |















## Public Functions Documentation


### function BlindInitializer 


```cpp
inline sdm::BlindInitializer::BlindInitializer () 
```



### function init 


```cpp
inline virtual void sdm::BlindInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer.hpp`