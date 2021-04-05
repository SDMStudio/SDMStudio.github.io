
<NavBar active_item_id="2"/>

# File tabular\_value\_function.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**tabular\_value\_function.hpp**](tabular__value__function_8hpp.md)

[Go to the source code of this file.](tabular__value__function_8hpp_source.md)

_Tabular value function are functions of state and action that use a vector representation._ [More...](#detailed-description)

* `#include <map>`
* `#include <iostream>`
* `#include <type_traits>`
* `#include <sdm/utils/value_function/initializer.hpp>`
* `#include <sdm/utils/linear_algebra/mapped_vector.hpp>`
* `#include <sdm/utils/linear_algebra/sdms_vector.hpp>`
* `#include <sdm/utils/backup_operator/backup_operator.hpp>`
* `#include <sdm/core/state/state.hpp>`
* `#include <sdm/core/function.hpp>`
* `#include <sdm/world/solvable_by_hsvi.hpp>`
* `#include <sdm/utils/value_function/tabular_value_function.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md) &lt;typename TState, typename TAction, typename TValue, TBackupOperator, TStruct&gt;<br>_Tabular value function are functions of state and action that use a vector representation to store the values._  |













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
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/tabular_value_function.hpp`