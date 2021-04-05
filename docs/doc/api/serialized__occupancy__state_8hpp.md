
<NavBar active_item_id="2"/>

# File serialized\_occupancy\_state.hpp


[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**serialized\_occupancy\_state.hpp**](serialized__occupancy__state_8hpp.md)

[Go to the source code of this file.](serialized__occupancy__state_8hpp_source.md)



* `#include <string>`
* `#include <sdm/types.hpp>`
* `#include <sdm/utils/struct/pair.hpp>`
* `#include <sdm/core/state/state.hpp>`
* `#include <sdm/core/state/serialized_state.hpp>`
* `#include <sdm/core/state/serialized_occupancy_state.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |
| namespace | [**std**](namespacestd.md) <br> |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md) &lt;typename TState, typename TJointHistory\_p&gt;<br>_A serialized occupancy state refers to an occupancy state (i.e refers to the whole knowledge that a central planner can have access to take decisions) with a precise state for each agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._  |
| struct | [**hash&lt; sdm::SerializedOccupancyState&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedOccupancyState_3_01S_00_01V_01_4_01_4.md) &lt;typename S, typename V&gt;<br> |














------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/serialized_occupancy_state.hpp`