
<NavBar active_item_id="2"/>

# File occupancy\_mdp.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**occupancy\_mdp.hpp**](occupancy__mdp_8hpp.md)

[Go to the source code of this file.](occupancy__mdp_8hpp_source.md)

[More...](#detailed-description)

* `#include <sdm/types.hpp>`
* `#include <sdm/core/joint.hpp>`
* `#include <sdm/core/space/discrete_space.hpp>`
* `#include <sdm/core/state/state.hpp>`
* `#include <sdm/core/state/occupancy_state.hpp>`
* `#include <sdm/world/solvable_by_hsvi.hpp>`
* `#include <sdm/world/discrete_mdp.hpp>`
* `#include <sdm/world/discrete_pomdp.hpp>`
* `#include <sdm/world/belief_mdp.hpp>`
* `#include <sdm/utils/linear_algebra/vector.hpp>`
* `#include <sdm/utils/decision_rules/det_decision_rule.hpp>`
* `#include <sdm/world/occupancy_mdp.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md) &lt;oState, oAction&gt;<br>_An occupancy MDP is a subclass of continuous state MDP where states are occupancy states. In the general case, an occupancy state refers to the whole knowledge that a central planner can have access to take decisions. But in this implementation we call occupancy state are distribution over state and joint histories ._  |













# Detailed Description




**Author:**

David Albert ([david.albert@insa-lyon.fr](mailto:david.albert@insa-lyon.fr)) 




**Version:**

1.0 




**Date:**

03/02/2021




**Copyright:**

Copyright (c) 2021 




    

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/occupancy_mdp.hpp`