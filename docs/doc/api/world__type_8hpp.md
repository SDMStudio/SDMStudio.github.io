
<NavBar active_item_id="2"/>

# File world\_type.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**world\_type.hpp**](world__type_8hpp.md)

[Go to the source code of this file.](world__type_8hpp_source.md)



* `#include <sdm/types.hpp>`
* `#include <sdm/core/states.hpp>`
* `#include <sdm/utils/decision_rules/det_decision_rule.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**BeliefMDP**](classsdm_1_1BeliefMDP.md) &lt;typename TBelief, typename TAction, typename TObservation&gt;<br>_The_ [_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _class is the interface that enables solving Discret POMDP using_[_**HSVI**_](classsdm_1_1HSVI.md) _algorithm._ |
| class | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md) &lt;oState, oAction&gt;<br>_An occupancy MDP is a subclass of continuous state MDP where states are occupancy states. In the general case, an occupancy state refers to the whole knowledge that a central planner can have access to take decisions. But in this implementation we call occupancy state are distribution over state and joint histories ._  |
| class | [**SerializedMDP**](classsdm_1_1SerializedMDP.md) &lt;typename oState, typename oAction&gt;<br>_An Serialized MDP is a subclass of MDP where states are serialized states. In the general case, a serialized state refers to the whole knowledge that a central planner can have access to take decisions at the time step of an precise agent._  |
| class | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md) &lt;typename oState, typename oAction&gt;<br>_An Serialized occupancy MDP is a subclass of continuous state MDP where states are seriliazed occupancy states and the resolution is serialized. In the general case, a Serialized occupancy state refers to the knowledge that a central planner can have access to take decisions at a precise agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._  |
| struct | [**WorldType**](structsdm_1_1WorldType.md) &lt;TState, TAction&gt;<br>_Allows developers to get access to the type of underlying problem that is solved when dealing with a kind of state and action in_ [_**HSVI**_](classsdm_1_1HSVI.md) _. Usage Example :_`WorldType <BeliefState, number>::type` _will return the type_`DiscretePOMDP` _._ |














------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/world_type.hpp`