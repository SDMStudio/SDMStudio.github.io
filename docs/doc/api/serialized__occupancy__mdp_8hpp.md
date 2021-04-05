
<NavBar active_item_id="2"/>

# File serialized\_occupancy\_mdp.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**serialized\_occupancy\_mdp.hpp**](serialized__occupancy__mdp_8hpp.md)

[Go to the source code of this file.](serialized__occupancy__mdp_8hpp_source.md)



* `#include <sdm/types.hpp>`
* `#include <sdm/world/solvable_by_hsvi.hpp>`
* `#include <sdm/world/discrete_mdp.hpp>`
* `#include <sdm/world/discrete_pomdp.hpp>`
* `#include <sdm/world/belief_mdp.hpp>`
* `#include <sdm/core/space/discrete_space.hpp>`
* `#include <sdm/core/state/serialized_occupancy_state.hpp>`
* `#include <sdm/core/state/serialized_state.hpp>`
* `#include <sdm/utils/linear_algebra/vector.hpp>`
* `#include <sdm/utils/decision_rules/det_decision_rule.hpp>`
* `#include <sdm/world/serialized_occupancy_mdp.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md) &lt;typename oState, typename oAction&gt;<br>_An Serialized occupancy MDP is a subclass of continuous state MDP where states are seriliazed occupancy states and the resolution is serialized. In the general case, a Serialized occupancy state refers to the knowledge that a central planner can have access to take decisions at a precise agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._  |














------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/serialized_occupancy_mdp.hpp`