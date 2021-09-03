
# Class sdm::BaseBeliefMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TBelief&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md)



_This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._[More...](#detailed-description)

* `#include <belief_mdp.hpp>`



Inherits the following classes: [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md),  [sdm::GymInterface](classsdm_1_1GymInterface.md)
















## Public Attributes

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








## Public Functions

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














## Protected Attributes inherited from sdm::SolvableByMDP

See [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**initial\_state\_**](classsdm_1_1SolvableByMDP.md#variable-initial-state-)  <br>_The initial state._  |
|  std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; | [**underlying\_problem\_**](classsdm_1_1SolvableByMDP.md#variable-underlying-problem-)  <br>_The underlying well defined problem._  |








## Protected Functions inherited from sdm::SolvableByMDP

See [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md)

| Type | Name |
| ---: | :--- |
|  const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingMDP**](classsdm_1_1SolvableByMDP.md#function-getunderlyingmdp) () const<br>_Get the underlying mdp._  |







# Detailed Description


This problem reformulation can be used to solve the underlying [**POMDP**](classsdm_1_1POMDP.md) thanks to standard dynamic programming algorithms. 

    
## Public Attributes Documentation


### variable batch\_size\_ 


```cpp
int sdm::BaseBeliefMDP< TBelief >::batch_size_;
```



### variable current\_state\_ 


```cpp
std::shared_ptr<State> sdm::BaseBeliefMDP< TBelief >::current_state_;
```



### variable mdp\_graph\_ 


```cpp
std::shared_ptr<Graph<std::shared_ptr<State>, Pair<std::shared_ptr<Action>, std::shared_ptr<Observation> > > > sdm::BaseBeliefMDP< TBelief >::mdp_graph_;
```



### variable reward\_graph\_ 


```cpp
std::shared_ptr<Graph<double, Pair<std::shared_ptr<State>, std::shared_ptr<Action> > > > sdm::BaseBeliefMDP< TBelief >::reward_graph_;
```



### variable state\_space\_ 


```cpp
RecursiveMap<TBelief, std::shared_ptr<State> > sdm::BaseBeliefMDP< TBelief >::state_space_;
```



### variable step\_ 


```cpp
int sdm::BaseBeliefMDP< TBelief >::step_;
```



### variable store\_actions\_ 


```cpp
bool sdm::BaseBeliefMDP< TBelief >::store_actions_;
```



### variable store\_states\_ 


```cpp
bool sdm::BaseBeliefMDP< TBelief >::store_states_;
```



### variable transition\_probability 


```cpp
RecursiveMap<std::shared_ptr<State>, std::shared_ptr<Action>, std::shared_ptr<Observation>, double> sdm::BaseBeliefMDP< TBelief >::transition_probability;
```


## Public Functions Documentation


### function BaseBeliefMDP [1/2]


```cpp
sdm::BaseBeliefMDP::BaseBeliefMDP () 
```



### function BaseBeliefMDP [2/2]


```cpp
sdm::BaseBeliefMDP::BaseBeliefMDP (
    const std::shared_ptr< POMDPInterface > & pomdp,
    int batch_size=0
) 
```



### function computeExactNextState 


```cpp
virtual Pair < std::shared_ptr< State >, std::shared_ptr< State > > sdm::BaseBeliefMDP::computeExactNextState (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
```



### function computeNextState 


```cpp
virtual std::shared_ptr< State > sdm::BaseBeliefMDP::computeNextState (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
```



### function computeNextStateAndProbability 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::BaseBeliefMDP::computeNextStateAndProbability (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
```




**Parameters:**


* `belief` the belief 
* `action` the action 
* `observation` the observation 
* `t` the timestep 



**Returns:**

the couple (next state, transition probability in the next state)


This function can be modify in an inherited class to define a belief [**MDP**](classsdm_1_1MDP.md) with a different representation of the belief state. (i.e. OccupancyMDP inherit from [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) with TBelief = [**OccupancyState**](classsdm_1_1OccupancyState.md)) 

        

### function computeSampledNextState 


```cpp
virtual Pair < std::shared_ptr< State >, std::shared_ptr< State > > sdm::BaseBeliefMDP::computeSampledNextState (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
```



### function getActionSpaceAt [1/2]


```cpp
virtual std::shared_ptr< Space > sdm::BaseBeliefMDP::getActionSpaceAt (
    const std::shared_ptr< State > & belief,
    number t=0
) 
```




**Parameters:**


* `belief` the belief 
* `t` the timestep 



**Returns:**

the action space


The time dependency is required in extensive-form games in which some agents have a different action space. 

        
Implements [*sdm::SolvableByHSVI::getActionSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat)


### function getActionSpaceAt [2/2]


```cpp
virtual std::shared_ptr< Space > sdm::BaseBeliefMDP::getActionSpaceAt (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```




**Parameters:**


* `observation` the observation in consideration 
* `t` time step 



**Returns:**

the action space. 




        
Implements [*sdm::GymInterface::getActionSpaceAt*](classsdm_1_1GymInterface.md#function-getactionspaceat)


### function getExpectedNextValue 


```cpp
virtual double sdm::BaseBeliefMDP::getExpectedNextValue (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    number t=0
) 
```




**Parameters:**


* `value_function` a pointer on the value function to use to perform the calculus. 
* `state` the state on which to evaluate the next expected value \* 
* `action` 
* `t` 



**Returns:**

double 




        
Implements [*sdm::SolvableByHSVI::getExpectedNextValue*](classsdm_1_1SolvableByHSVI.md#function-getexpectednextvalue)


### function getMDPGraph 


```cpp
std::shared_ptr< Graph < std::shared_ptr< State >, Pair < std::shared_ptr< Action >, std::shared_ptr< Observation > > > > sdm::BaseBeliefMDP::getMDPGraph () 
```




**Returns:**

std::shared\_ptr&lt;[**Graph**](classsdm_1_1Graph.md)&lt;std::shared\_ptr&lt;State&gt;, Pair&lt;std::shared\_ptr&lt;Action&gt;, std::shared\_ptr&lt;Observation&gt;&gt;&gt;&gt; 




        

### function getNextState 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::BaseBeliefMDP::getNextState (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t
) 
```


Implements [*sdm::SolvableByMDP::getNextState*](classsdm_1_1SolvableByMDP.md#function-getnextstate)


### function getObservationProbability 


```cpp
virtual double sdm::BaseBeliefMDP::getObservationProbability (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_belief,
    const std::shared_ptr< Observation > & obs,
    number t=0
) const
```



### function getObservationSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::BaseBeliefMDP::getObservationSpaceAt (
    const std::shared_ptr< State > &,
    const std::shared_ptr< Action > &,
    number t
) 
```


Implements [*sdm::SolvableByMDP::getObservationSpaceAt*](classsdm_1_1SolvableByMDP.md#function-getobservationspaceat)


### function getRandomAction 


```cpp
virtual std::shared_ptr< Action > sdm::BaseBeliefMDP::getRandomAction (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```




**Parameters:**


* `observation` the observation in consideration. 
* `t` time step. 



**Returns:**

the random action. 




        
Implements [*sdm::GymInterface::getRandomAction*](classsdm_1_1GymInterface.md#function-getrandomaction)


### function getReward 


```cpp
virtual double sdm::BaseBeliefMDP::getReward (
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

        
Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getStoredStates 


```cpp
std::vector< std::shared_ptr< State > > sdm::BaseBeliefMDP::getStoredStates () const
```



### function getUnderlyingPOMDP 


```cpp
virtual std::shared_ptr< POMDPInterface > sdm::BaseBeliefMDP::getUnderlyingPOMDP () const
```



### function nextBelief 


```cpp
virtual std::shared_ptr< State > sdm::BaseBeliefMDP::nextBelief (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
```



### function nextBeliefAndProba 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::BaseBeliefMDP::nextBeliefAndProba (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
```




**Parameters:**


* `belief` the belief 
* `action` the action 
* `observation` the observation 
* `t` the timestep 



**Returns:**

the next belief


This function returns the next belief. To do so, we check in the [**MDP**](classsdm_1_1MDP.md) graph the existance of an edge (action / observation) starting from the current belief. If exists, we return the associated next belief. Otherwise, we compute the next belief using "computeNextStateAndProba" function and add the edge from the current belief to the next belief in the graph. 

        

### function nextState 


```cpp
virtual std::shared_ptr< State > sdm::BaseBeliefMDP::nextState (
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    number t=0,
    const std::shared_ptr< HSVI > & hsvi=nullptr
) 
```




**Parameters:**


* `belief` the current belief 
* `action` the action 
* `t` the timestep 
* `hsvi` a pointer on the algorithm that makes the call 



**Returns:**

the next state 




        
Implements [*sdm::SolvableByMDP::nextState*](classsdm_1_1SolvableByMDP.md#function-nextstate)


### function reset 


```cpp
virtual std::shared_ptr< Observation > sdm::BaseBeliefMDP::reset () 
```




**Returns:**

the initial observation 




        
Implements [*sdm::GymInterface::reset*](classsdm_1_1GymInterface.md#function-reset)


### function step 


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::BaseBeliefMDP::step (
    std::shared_ptr< Action > action
) 
```




**Parameters:**


* `action` the action to execute 



**Returns:**

the information produced. Include : next observation, rewards, episode done 




        
Implements [*sdm::GymInterface::step*](classsdm_1_1GymInterface.md#function-step)


### function ~BaseBeliefMDP 


```cpp
sdm::BaseBeliefMDP::~BaseBeliefMDP () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/belief_mdp.hpp`