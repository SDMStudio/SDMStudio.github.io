
<NavBar active_item_id="2"/>

# Class sdm::ZeroInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md)





* `#include <initializer.hpp>`



Inherits the following classes: [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)





















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











## Protected Attributes inherited from sdm::ValueInitializer

See [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)

| Type | Name |
| ---: | :--- |
|  double | [**value**](classsdm_1_1ValueInitializer.md#variable-value)  <br> |












------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer.hpp`