
# Class sdm::PrivateHierarchicalOccupancyMDPWithHistory

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**PrivateHierarchicalOccupancyMDPWithHistory**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md)





* `#include <private_hierarchical_occupancy_mdp_with_history.hpp>`



Inherits the following classes: [sdm::PrivateHierarchicalOccupancyMDP](classsdm_1_1PrivateHierarchicalOccupancyMDP.md)
























## Public Attributes inherited from sdm::BaseOccupancyMDP

See [sdm::BaseOccupancyMDP](classsdm_1_1BaseOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**current\_history\_**](classsdm_1_1BaseOccupancyMDP.md#variable-current-history-)  <br> |
|  std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**initial\_history\_**](classsdm_1_1BaseOccupancyMDP.md#variable-initial-history-)  <br>_Initial and current histories._  |

## Public Attributes inherited from sdm::BaseBeliefMDP

See [sdm::BaseBeliefMDP](classsdm_1_1BaseBeliefMDP.md)

| Type | Name |
| ---: | :--- |
|  int | [**batch\_size\_**](classsdm_1_1BaseBeliefMDP.md#variable-batch-size-)  <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**current\_state\_**](classsdm_1_1BaseBeliefMDP.md#variable-current-state-)  <br>_The current state (used in RL)._  |
|  std::shared\_ptr&lt; [**Graph**](classsdm_1_1Graph.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; &gt; | [**mdp\_graph\_**](classsdm_1_1BaseBeliefMDP.md#variable-mdp-graph-)  <br>_the_ [_**MDP**_](classsdm_1_1MDP.md) __[_**Graph**_](classsdm_1_1Graph.md) _(graph of state transition)_ |
|  std::shared\_ptr&lt; [**Graph**](classsdm_1_1Graph.md)&lt; double, [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; &gt; &gt; | [**reward\_graph\_**](classsdm_1_1BaseBeliefMDP.md#variable-reward-graph-)  <br> |
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TBelief, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**state\_space\_**](classsdm_1_1BaseBeliefMDP.md#variable-state-space-)  <br>_A pointer on the bag containing all states._  |
|  int | [**step\_**](classsdm_1_1BaseBeliefMDP.md#variable-step-)  <br>_The current timestep (used in RL)._  |
|  bool | [**store\_actions\_**](classsdm_1_1BaseBeliefMDP.md#variable-store-actions-)   = = true<br> |
|  bool | [**store\_states\_**](classsdm_1_1BaseBeliefMDP.md#variable-store-states-)   = = true<br>_Hyperparameters._  |
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, double &gt; | [**transition\_probability**](classsdm_1_1BaseBeliefMDP.md#variable-transition-probability)  <br>_The probability transition. (i.e. p(o | b, a)_  |






## Public Static Attributes inherited from sdm::BaseOccupancyMDP

See [sdm::BaseOccupancyMDP](classsdm_1_1BaseOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
|  unsigned long | [**MEAN\_SIZE\_STATE**](classsdm_1_1BaseOccupancyMDP.md#variable-mean-size-state)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**PASSAGE\_IN\_NEXT\_STATE**](classsdm_1_1BaseOccupancyMDP.md#variable-passage-in-next-state)  <br> |
|  double | [**TIME\_IN\_APPLY\_DR**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-apply-dr)  <br> |
|  double | [**TIME\_IN\_COMPRESS**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-compress)  <br> |
|  double | [**TIME\_IN\_EXP\_NEXT**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-exp-next)  <br> |
|  double | [**TIME\_IN\_GET\_ACTION**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-get-action)  <br> |
|  double | [**TIME\_IN\_GET\_REWARD**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-get-reward)  <br> |
|  double | [**TIME\_IN\_NEXT\_OSTATE**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-next-ostate)  <br> |
|  double | [**TIME\_IN\_NEXT\_STATE**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-next-state)  <br> |
|  double | [**TIME\_IN\_STEP**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-step)  <br> |
|  double | [**TIME\_IN\_UNDER\_STEP**](classsdm_1_1BaseOccupancyMDP.md#variable-time-in-under-step)  <br> |





## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**PrivateHierarchicalOccupancyMDPWithHistory**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-privatehierarchicaloccupancymdpwithhistory-1-2) () <br> |
|   | [**PrivateHierarchicalOccupancyMDPWithHistory**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-privatehierarchicaloccupancymdpwithhistory-2-2) (const std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; & dpomdp, [**number**](namespacesdm.md#typedef-number) memory=-1, bool compression=true, bool store\_states=true, bool store\_actions=true, int batch\_size=0) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual double | [**getReward**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the expected reward of executing a specific action in a specific belief at timestep t._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-step) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |

## Public Functions inherited from sdm::PrivateHierarchicalOccupancyMDP

See [sdm::PrivateHierarchicalOccupancyMDP](classsdm_1_1PrivateHierarchicalOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**PrivateHierarchicalOccupancyMDP**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-privatehierarchicaloccupancymdp-1-2) () <br> |
|   | [**PrivateHierarchicalOccupancyMDP**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-privatehierarchicaloccupancymdp-2-2) (const std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; & dpomdp, [**number**](namespacesdm.md#typedef-number) memory=-1, bool compression=true, bool store\_states=true, bool store\_actions=true, int batch\_size=0) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**applyDecisionRule**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-applydecisionrule) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & ostate, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; Action &gt; & decision\_rule, [**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**computeActionSpaceAt**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-computeactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**computeRandomAction**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-computerandomaction) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & ostate, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getJointHierarchicalLabels**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-getjointhierarchicallabels) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & joint\_labels, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & ostate) const<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-step) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |

## Public Functions inherited from sdm::BaseOccupancyMDP

See [sdm::BaseOccupancyMDP](classsdm_1_1BaseOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**BaseOccupancyMDP**](classsdm_1_1BaseOccupancyMDP.md#function-baseoccupancymdp-1-2) () <br> |
|   | [**BaseOccupancyMDP**](classsdm_1_1BaseOccupancyMDP.md#function-baseoccupancymdp-2-2) (const std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; & dpomdp, [**number**](namespacesdm.md#typedef-number) memory=-1, bool compression=true, bool store\_states=true, bool store\_actions=true, int batch\_size=0) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**applyDecisionRule**](classsdm_1_1BaseOccupancyMDP.md#function-applydecisionrule) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & ostate, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; Action &gt; & decision\_rule, [**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual bool | [**checkCompatibility**](classsdm_1_1BaseOccupancyMDP.md#function-checkcompatibility) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & joint\_observation, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**computeRandomAction**](classsdm_1_1BaseOccupancyMDP.md#function-computerandomaction) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & ostate, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual double | [**do\_excess**](classsdm_1_1BaseOccupancyMDP.md#function-do-excess) (double incumbent, double lb\_value, double ub\_value, double cost\_so\_far, double error, [**number**](namespacesdm.md#typedef-number) t) <br>_Compute the excess of the_ [_**HSVI**_](classsdm_1_1HSVI.md) _paper. It refers to the termination condition._ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1BaseOccupancyMDP.md#function-getactionspaceat-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the action space at a specific belief and timestep._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1BaseOccupancyMDP.md#function-getactionspaceat-2-2) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the action space._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpaceAt**](classsdm_1_1BaseOccupancyMDP.md#function-getobservationspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; Action &gt; &, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the observation space of the central planner._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1BaseOccupancyMDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual double | [**getReward**](classsdm_1_1BaseOccupancyMDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the expected reward of executing a specific action in a specific belief at timestep t._  |
|  double | [**getRewardBelief**](classsdm_1_1BaseOccupancyMDP.md#function-getrewardbelief) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::shared\_ptr&lt; [**BeliefMDP**](namespacesdm.md#typedef-beliefmdp) &gt; | [**getUnderlyingBeliefMDP**](classsdm_1_1BaseOccupancyMDP.md#function-getunderlyingbeliefmdp) () const<br>_Get the address of the underlying BeliefMDP._  |
| virtual std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; | [**getUnderlyingMPOMDP**](classsdm_1_1BaseOccupancyMDP.md#function-getunderlyingmpomdp) () const<br>_Get the address of the underlying_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _._ |
|  void | [**initialize**](classsdm_1_1BaseOccupancyMDP.md#function-initialize) ([**number**](namespacesdm.md#typedef-number) memory) <br> |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextOccupancyState**](classsdm_1_1BaseOccupancyMDP.md#function-nextoccupancystate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & decision\_rule, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the next occupancy state._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1BaseOccupancyMDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1BaseOccupancyMDP.md#function-step) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
|   | [**~BaseOccupancyMDP**](classsdm_1_1BaseOccupancyMDP.md#function-baseoccupancymdp) () <br> |

## Public Functions inherited from sdm::BaseBeliefMDP

See [sdm::BaseBeliefMDP](classsdm_1_1BaseBeliefMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md#function-basebeliefmdp-1-2) () <br> |
|   | [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md#function-basebeliefmdp-2-2) (const std::shared\_ptr&lt; [**POMDPInterface**](classsdm_1_1POMDPInterface.md) &gt; & pomdp, int batch\_size=0) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**computeExactNextState**](classsdm_1_1BaseBeliefMDP.md#function-computeexactnextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**computeNextState**](classsdm_1_1BaseBeliefMDP.md#function-computenextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**computeNextStateAndProbability**](classsdm_1_1BaseBeliefMDP.md#function-computenextstateandprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Compute the state transition in order to return next state and associated probability._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**computeSampledNextState**](classsdm_1_1BaseBeliefMDP.md#function-computesamplednextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1BaseBeliefMDP.md#function-getactionspaceat-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the action space at a specific belief and timestep._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1BaseBeliefMDP.md#function-getactionspaceat-2-2) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the action space._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1BaseBeliefMDP.md#function-getexpectednextvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the expected next value._  |
|  std::shared\_ptr&lt; [**Graph**](classsdm_1_1Graph.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; &gt; | [**getMDPGraph**](classsdm_1_1BaseBeliefMDP.md#function-getmdpgraph) () <br>_Get the graph of._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**getNextState**](classsdm_1_1BaseBeliefMDP.md#function-getnextstate) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual double | [**getObservationProbability**](classsdm_1_1BaseBeliefMDP.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_belief, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & obs, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the_ [_**Observation**_](classsdm_1_1Observation.md) _Probability p(o | b', a)_ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpaceAt**](classsdm_1_1BaseBeliefMDP.md#function-getobservationspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; Action &gt; &, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1BaseBeliefMDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual double | [**getReward**](classsdm_1_1BaseBeliefMDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the expected reward of executing a specific action in a specific belief at timestep t._  |
|  std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getStoredStates**](classsdm_1_1BaseBeliefMDP.md#function-getstoredstates) () const<br> |
| virtual std::shared\_ptr&lt; [**POMDPInterface**](classsdm_1_1POMDPInterface.md) &gt; | [**getUnderlyingPOMDP**](classsdm_1_1BaseBeliefMDP.md#function-getunderlyingpomdp) () const<br>_Get the address of the underlying_ [_**POMDP**_](classsdm_1_1POMDP.md) _._ |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextBelief**](classsdm_1_1BaseBeliefMDP.md#function-nextbelief) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**nextBeliefAndProba**](classsdm_1_1BaseBeliefMDP.md#function-nextbeliefandproba) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the next belief._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextState**](classsdm_1_1BaseBeliefMDP.md#function-nextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0, const std::shared\_ptr&lt; [**HSVI**](classsdm_1_1HSVI.md) &gt; & hsvi=nullptr) <br>_Select the next belief._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1BaseBeliefMDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1BaseBeliefMDP.md#function-step) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
|   | [**~BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md#function-basebeliefmdp) () <br> |

## Public Functions inherited from sdm::SolvableByMDP

See [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md#function-solvablebymdp-1-2) () <br>_Default constructor._  |
|   | [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md#function-solvablebymdp-2-2) (const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & mdp) <br>_Construct a problem solvable by_ [_**HSVI**_](classsdm_1_1HSVI.md) _._ |
| virtual double | [**do\_excess**](classsdm_1_1SolvableByMDP.md#function-do-excess) (double incumbent, double lb\_value, double ub\_value, double cost\_so\_far, double error, [**number**](namespacesdm.md#typedef-number) horizon) <br>_Compute the excess of the_ [_**HSVI**_](classsdm_1_1HSVI.md) _paper. It refers to the termination condition._ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1SolvableByMDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the action space at a specific state and timestep. The state dependency is required when the game forbid the usage of a number of actions in this state. It is also used in some reformulated problems where actions are decision rules. The time dependency is required in extensive-form games in which some agents have a different action space._  |
| virtual double | [**getDiscount**](classsdm_1_1SolvableByMDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the specific discount factor for the problem at hand._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SolvableByMDP.md#function-getexpectednextvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the expected next value._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInitialState**](classsdm_1_1SolvableByMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**getNextState**](classsdm_1_1SolvableByMDP.md#function-getnextstate) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpaceAt**](classsdm_1_1SolvableByMDP.md#function-getobservationspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual double | [**getReward**](classsdm_1_1SolvableByMDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the reward of executing a specific action in an specific state at timestep t. The time dependency can be required in non-stationnary problems._  |
| virtual const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingProblem**](classsdm_1_1SolvableByMDP.md#function-getunderlyingproblem) () const<br>_Get the well defined underlying problem. Some problems are solvable by DP algorithms even if they are not well defined. Usually, they simply are reformulation of an underlying well defined problem. For instance, the underlying DecPOMDP of the OccupancyMDP or the underlying_ [_**POMDP**_](classsdm_1_1POMDP.md) _of the current BeliefMDP._ |
| virtual double | [**getWeightedDiscount**](classsdm_1_1SolvableByMDP.md#function-getweighteddiscount) ([**number**](namespacesdm.md#typedef-number) t) <br>_Get the specific weighted discount factor for the problem at hand._  |
| virtual bool | [**isSerialized**](classsdm_1_1SolvableByMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextState**](classsdm_1_1SolvableByMDP.md#function-nextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0, const std::shared\_ptr&lt; [**HSVI**](classsdm_1_1HSVI.md) &gt; & hsvi=nullptr) <br>_Select the next state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectNextAction**](classsdm_1_1SolvableByMDP.md#function-selectnextaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & lb, const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & ub, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, [**number**](namespacesdm.md#typedef-number) h) <br>_Select the next action._  |
| virtual void | [**setInitialState**](classsdm_1_1SolvableByMDP.md#function-setinitialstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) <br> |

## Public Functions inherited from sdm::SolvableByHSVI

See [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md)

| Type | Name |
| ---: | :--- |
| virtual double | [**do\_excess**](classsdm_1_1SolvableByHSVI.md#function-do-excess) (double incumbent, double lb\_value, double ub\_value, double cost\_so\_far, double error, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Compute the excess of the_ [_**HSVI**_](classsdm_1_1HSVI.md) _paper. It refers to the termination condition._ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space at a specific state and timestep. The state dependency is required when the game forbid the usage of a number of actions in this state. It is also used in some reformulated problems where actions are decision rules. The time dependency is required in extensive-form games in which some agents have a different action space._  |
| virtual double | [**getDiscount**](classsdm_1_1SolvableByHSVI.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the specific discount factor for the problem at hand._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SolvableByHSVI.md#function-getexpectednextvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the expected next value._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInitialState**](classsdm_1_1SolvableByHSVI.md#function-getinitialstate) () = 0<br>_Get the initial state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**getNextState**](classsdm_1_1SolvableByHSVI.md#function-getnextstate) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpaceAt**](classsdm_1_1SolvableByHSVI.md#function-getobservationspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**getReward**](classsdm_1_1SolvableByHSVI.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the reward of executing a specific action in an specific state at timestep t. The time dependency can be required in non-stationnary problems._  |
| virtual const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingProblem**](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem) () const = 0<br>_Get the well defined underlying problem. Some problems are solvable by DP algorithms even if they are not well defined. Usually, they simply are reformulation of an underlying well defined problem. For instance, the underlying DecPOMDP of the OccupancyMDP or the underlying_ [_**POMDP**_](classsdm_1_1POMDP.md) _of the current BeliefMDP._ |
| virtual double | [**getWeightedDiscount**](classsdm_1_1SolvableByHSVI.md#function-getweighteddiscount) ([**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the specific weighted discount factor for the problem at hand._  |
| virtual bool | [**isSerialized**](classsdm_1_1SolvableByHSVI.md#function-isserialized) () const = 0<br>_Check if the problem is serialized._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextState**](classsdm_1_1SolvableByHSVI.md#function-nextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0, const std::shared\_ptr&lt; [**HSVI**](classsdm_1_1HSVI.md) &gt; & hsvi=nullptr) = 0<br>_Select the next state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectNextAction**](classsdm_1_1SolvableByHSVI.md#function-selectnextaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & lb, const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & ub, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Select the next action._  |
| virtual void | [**setInitialState**](classsdm_1_1SolvableByHSVI.md#function-setinitialstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) = 0<br> |
| virtual  | [**~SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md#function-solvablebyhsvi) () <br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |























## Protected Attributes inherited from sdm::PrivateHierarchicalOccupancyMDP

See [sdm::PrivateHierarchicalOccupancyMDP](classsdm_1_1PrivateHierarchicalOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; Action &gt; | [**current\_action\_**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#variable-current-action-)  <br> |

## Protected Attributes inherited from sdm::BaseOccupancyMDP

See [sdm::BaseOccupancyMDP](classsdm_1_1BaseOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**BeliefMDP**](namespacesdm.md#typedef-beliefmdp) &gt; | [**belief\_mdp\_**](classsdm_1_1BaseOccupancyMDP.md#variable-belief-mdp-)  <br>_Keep a pointer on the associated belief mdp that is used to compute next beliefs._  |
|  bool | [**compression\_**](classsdm_1_1BaseOccupancyMDP.md#variable-compression-)   = = true<br>_Hyperparameters._  |


## Protected Attributes inherited from sdm::SolvableByMDP

See [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**initial\_state\_**](classsdm_1_1SolvableByMDP.md#variable-initial-state-)  <br>_The initial state._  |
|  std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; | [**underlying\_problem\_**](classsdm_1_1SolvableByMDP.md#variable-underlying-problem-)  <br>_The underlying well defined problem._  |










## Protected Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getJointLabel**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md#function-getjointlabel) (const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state) <br> |

## Protected Functions inherited from sdm::PrivateHierarchicalOccupancyMDP

See [sdm::PrivateHierarchicalOccupancyMDP](classsdm_1_1PrivateHierarchicalOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**computeExactNextState**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-computeexactnextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**computeNextStateAndProbability**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-computenextstateandprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Compute the state transition in order to return next state and associated probability._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**computeSampledNextState**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-computesamplednextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |

## Protected Functions inherited from sdm::BaseOccupancyMDP

See [sdm::BaseOccupancyMDP](classsdm_1_1BaseOccupancyMDP.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**computeActionSpaceAt**](classsdm_1_1BaseOccupancyMDP.md#function-computeactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**computeExactNextState**](classsdm_1_1BaseOccupancyMDP.md#function-computeexactnextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**computeNextState**](classsdm_1_1BaseOccupancyMDP.md#function-computenextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**computeNextStateAndProbability**](classsdm_1_1BaseOccupancyMDP.md#function-computenextstateandprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Compute the state transition in order to return next state and associated probability._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**computeSampledNextState**](classsdm_1_1BaseOccupancyMDP.md#function-computesamplednextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual bool | [**do\_compression**](classsdm_1_1BaseOccupancyMDP.md#function-do-compression) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Return true if compression must be done._  |
|  std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getNextHistory**](classsdm_1_1BaseOccupancyMDP.md#function-getnexthistory) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation) <br> |
| virtual void | [**update\_occupancy\_state\_proba**](classsdm_1_1BaseOccupancyMDP.md#function-update-occupancy-state-proba) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & belief, double probability) <br> |


## Protected Functions inherited from sdm::SolvableByMDP

See [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md)

| Type | Name |
| ---: | :--- |
|  const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingMDP**](classsdm_1_1SolvableByMDP.md#function-getunderlyingmdp) () const<br>_Get the underlying mdp._  |










## Public Functions Documentation


### function PrivateHierarchicalOccupancyMDPWithHistory [1/2]


```cpp
sdm::PrivateHierarchicalOccupancyMDPWithHistory::PrivateHierarchicalOccupancyMDPWithHistory () 
```



### function PrivateHierarchicalOccupancyMDPWithHistory [2/2]


```cpp
sdm::PrivateHierarchicalOccupancyMDPWithHistory::PrivateHierarchicalOccupancyMDPWithHistory (
    const std::shared_ptr< MPOMDPInterface > & dpomdp,
    number memory=-1,
    bool compression=true,
    bool store_states=true,
    bool store_actions=true,
    int batch_size=0
) 
```



### function getRandomAction 


```cpp
virtual std::shared_ptr< Action > sdm::PrivateHierarchicalOccupancyMDPWithHistory::getRandomAction (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```




**Parameters:**


* `observation` the observation in consideration. 
* `t` time step. 



**Returns:**

the random action. 




        
Implements [*sdm::BaseOccupancyMDP::getRandomAction*](classsdm_1_1BaseOccupancyMDP.md#function-getrandomaction)


### function getReward 


```cpp
virtual double sdm::PrivateHierarchicalOccupancyMDPWithHistory::getReward (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    number t=0
) 
```




**Parameters:**


* `belief` the belief 
* `action` the action 
* `t` the timestep 



**Returns:**

the reward


The time dependency can be required in non-stationnary problems. 

        
Implements [*sdm::BaseOccupancyMDP::getReward*](classsdm_1_1BaseOccupancyMDP.md#function-getreward)


### function reset 


```cpp
virtual std::shared_ptr< Observation > sdm::PrivateHierarchicalOccupancyMDPWithHistory::reset () 
```




**Returns:**

the initial observation 




        
Implements [*sdm::BaseOccupancyMDP::reset*](classsdm_1_1BaseOccupancyMDP.md#function-reset)


### function step 


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::PrivateHierarchicalOccupancyMDPWithHistory::step (
    std::shared_ptr< Action > action
) 
```




**Parameters:**


* `action` the action to execute 



**Returns:**

the information produced. Include : next observation, rewards, episode done 




        
Implements [*sdm::PrivateHierarchicalOccupancyMDP::step*](classsdm_1_1PrivateHierarchicalOccupancyMDP.md#function-step)

## Protected Functions Documentation


### function getJointLabel 


```cpp
std::shared_ptr< HistoryInterface > sdm::PrivateHierarchicalOccupancyMDPWithHistory::getJointLabel (
    const std::shared_ptr< HistoryInterface > & joint_history,
    const std::shared_ptr< State > & occupancy_state
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/private_hierarchical_occupancy_mdp_with_history.hpp`