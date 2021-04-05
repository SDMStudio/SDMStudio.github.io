
<NavBar active_item_id="2"/>

# File value\_function.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**value\_function.hpp**](value__function_8hpp.md)

[Go to the source code of this file.](value__function_8hpp_source.md)

_Defines the value function interface._ [More...](#detailed-description)

* `#include <memory>`
* `#include <sdm/core/function.hpp>`
* `#include <sdm/utils/linear_algebra/vector_impl.hpp>`
* `#include <sdm/utils/value_function/value_function.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &lt;TState, TAction&gt;<br>_Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._ |
| class | [**ValueFunction**](classsdm_1_1ValueFunction.md) &lt;TState, TAction, TValue&gt;<br>_This class is the abstract class of value function. All value function must derived this class._  |













# Detailed Description




**Author:**

David Albert ([david.albert@insa-lyon.fr](mailto:david.albert@insa-lyon.fr)) 




**Version:**

0.1 




**Date:**

16/12/2020




**Copyright:**

Copyright (c) 2020 




    

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/value_function.hpp`