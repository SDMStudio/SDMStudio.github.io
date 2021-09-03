
# Class sdm::NetworkedDistributedPOMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md)





* `#include <networked_distributed_pomdp.hpp>`



Inherits the following classes: [sdm::MPOMDP](classsdm_1_1MPOMDP.md)







## Classes

| Type | Name |
| ---: | :--- |
| class | [**Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md) <br> |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**number**](namespacesdm.md#typedef-number) | [**action**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-action)  <br> |
| typedef [**number**](namespacesdm.md#typedef-number) | [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent)  <br> |
| typedef [**number**](namespacesdm.md#typedef-number) | [**observation**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-observation)  <br> |
| typedef [**number**](namespacesdm.md#typedef-number) | [**state**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-state)  <br> |


















































## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::ifstream | [**input\_file**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-input-file)  <br> |
|  [**Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md) \* | [**n**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-n)  <br> |
|  std::unordered\_map&lt; std::string, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**ndpomdp\_dynamics\_generator**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-ndpomdp-dynamics-generator)  <br>_dynamics generator_  |
|  [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) \* | [**nodes**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-nodes)  <br> |
|  std::map&lt; std::string, std::unordered\_set&lt; [**observation**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-observation) &gt; &gt; | [**observationSuccessor**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-observationsuccessor)  <br> |
|  std::map&lt; std::string, double &gt; | [**observationsmatrix**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-observationsmatrix)  <br> |
|  double | [**rMax**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-rmax)   = = 45<br> |
|  [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent) | [**root**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-root)  <br> |
|  std::unordered\_set&lt; [**state**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-state) &gt; \* | [**stateSuccessor**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-statesuccessor)  <br> |
|  std::map&lt; int, int &gt; | [**transitionmatrix**](classsdm_1_1NetworkedDistributedPOMDP.md#variable-transitionmatrix)  <br> |


















































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md#function-networkeddistributedpomdp) (std::string) <br> |
|  void | [**createDAG**](classsdm_1_1NetworkedDistributedPOMDP.md#function-createdag) () <br> |
|  void | [**getData**](classsdm_1_1NetworkedDistributedPOMDP.md#function-getdata) (std::string) <br> |
|  std::tuple&lt; std::vector&lt; double &gt;, [**observation**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-observation), [**state**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-state) &gt; | [**getDynamicsGenerator**](classsdm_1_1NetworkedDistributedPOMDP.md#function-getdynamicsgenerator) ([**number**](namespacesdm.md#typedef-number) x, [**number**](namespacesdm.md#typedef-number) a) <br> |
|  double | [**getInitialBelief**](classsdm_1_1NetworkedDistributedPOMDP.md#function-getinitialbelief) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;) <br> |
|  double | [**getObservation**](classsdm_1_1NetworkedDistributedPOMDP.md#function-getobservation) ([**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent), [**action**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-action), [**state**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-state), [**observation**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-observation)) <br> |
|  double | [**getRewardF**](classsdm_1_1NetworkedDistributedPOMDP.md#function-getrewardf) ([**state**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-state), [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent), [**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent), [**action**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-action), [**action**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-action)) <br> |
|  std::vector&lt; std::pair&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**getUniqueValidNeighbors**](classsdm_1_1NetworkedDistributedPOMDP.md#function-getuniquevalidneighbors) () <br> |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**init**](classsdm_1_1NetworkedDistributedPOMDP.md#function-init) () <br> |
|  void | [**printDAG**](classsdm_1_1NetworkedDistributedPOMDP.md#function-printdag) ([**agent**](classsdm_1_1NetworkedDistributedPOMDP.md#typedef-agent)) <br> |
|  void | [**setupDynamicsGenerator**](classsdm_1_1NetworkedDistributedPOMDP.md#function-setupdynamicsgenerator) () <br>_Get the number of observations for a specific agent._  |

## Public Functions inherited from sdm::MPOMDP

See [sdm::MPOMDP](classsdm_1_1MPOMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**MPOMDP**](classsdm_1_1MPOMDP.md#function-mpomdp-1-2) () <br> |
|   | [**MPOMDP**](classsdm_1_1MPOMDP.md#function-mpomdp-2-2) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & state\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & action\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & obs\_space, const std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; & reward, const std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; & state\_dynamics, const std::shared\_ptr&lt; [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) &gt; & obs\_dynamics, const std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt;&gt; & start\_distrib, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.99, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1MPOMDP.md#function-getobservationspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths observation space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1MPOMDP.md#function-getobservationspace-2-2) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths observation space at timestep t._  |
| virtual std::string | [**toStdFormat**](classsdm_1_1MPOMDP.md#function-tostdformat) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |
| virtual  | [**~MPOMDP**](classsdm_1_1MPOMDP.md#function-mpomdp) () <br> |

## Public Functions inherited from sdm::MPOMDPInterface

See [sdm::MPOMDPInterface](classsdm_1_1MPOMDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1MPOMDPInterface.md#function-getobservationspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths observation space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1MPOMDPInterface.md#function-getobservationspace-2-2) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths observation space at timestep t._  |

## Public Functions inherited from sdm::MMDPInterface

See [sdm::MMDPInterface](classsdm_1_1MMDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDPInterface.md#function-getactionspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDPInterface.md#function-getactionspace-2-2) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::POMDPInterface

See [sdm::POMDPInterface](classsdm_1_1POMDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual double | [**getDynamics**](classsdm_1_1POMDPInterface.md#function-getdynamics) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the dynamics, i.e. p(s', o | s, a)_  |
| virtual double | [**getObservationProbability**](classsdm_1_1POMDPInterface.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the observation probability, i.e. p(o | s', a)_  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1POMDPInterface.md#function-getobservationspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths observation space at timestep t._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1POMDPInterface.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable observations._  |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::POMDP

See [sdm::POMDP](classsdm_1_1POMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**POMDP**](classsdm_1_1POMDP.md#function-pomdp-1-2) () <br> |
|   | [**POMDP**](classsdm_1_1POMDP.md#function-pomdp-2-2) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & state\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & action\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & obs\_space, const std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; & reward, const std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; & state\_dynamics, const std::shared\_ptr&lt; [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) &gt; & obs\_dynamics, const std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt;&gt; & start\_distrib, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.99, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
| virtual double | [**getDynamics**](classsdm_1_1POMDP.md#function-getdynamics) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the dynamics, i.e. p(s', o | s, a)_  |
|  std::shared\_ptr&lt; [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) &gt; | [**getObservationDynamics**](classsdm_1_1POMDP.md#function-getobservationdynamics) () const<br> |
| virtual double | [**getObservationProbability**](classsdm_1_1POMDP.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the observation probability, i.e. p(o | s', a)_  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1POMDP.md#function-getobservationspace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths observation space at timestep t._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1POMDP.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get reachable observations._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**sampleNextObservation**](classsdm_1_1POMDP.md#function-samplenextobservation) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |

## Public Functions inherited from sdm::MDP

See [sdm::MDP](classsdm_1_1MDP.md)

| Type | Name |
| ---: | :--- |
|   | [**MDP**](classsdm_1_1MDP.md#function-mdp-1-2) () <br> |
|   | [**MDP**](classsdm_1_1MDP.md#function-mdp-2-2) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & state\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & action\_space, const std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; & reward\_space, const std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; & state\_dynamics, const std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt;&gt; & start\_distribution, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.99, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  void | [**generateFile**](classsdm_1_1MDP.md#function-generatefile) (std::string) <br>_Save problem in file with given format (.xml, .json or .{dpomdp, posg, zsposg})._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDP.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths action space at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1MDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the action space._  |
| virtual double | [**getDiscount**](classsdm_1_1MDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDP.md#function-gethorizon) () const<br>_Get the planning horizon._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDP.md#function-getinternalstate) () const<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDP.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDP.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDP.md#function-getnumagents) () const<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1MDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDP.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reachable next states._  |
| virtual double | [**getReward**](classsdm_1_1MDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reward of executing action a in state s at timestep t._  |
| virtual std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; | [**getRewardSpace**](classsdm_1_1MDP.md#function-getrewardspace) () const<br>_Get the reward function._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDP.md#function-getstartdistribution) () const<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**getStateDynamics**](classsdm_1_1MDP.md#function-getstatedynamics) () const<br>_Get the state dynamics._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDP.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDP.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the Transition Probability object._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1MDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**sampleNextObservation**](classsdm_1_1MDP.md#function-samplenextobservation) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**setDiscount**](classsdm_1_1MDP.md#function-setdiscount) (double discount) <br>[_**Set**_](structsdm_1_1Set.md) _the discount factor._ |
|  void | [**setHorizon**](classsdm_1_1MDP.md#function-sethorizon) ([**number**](namespacesdm.md#typedef-number) horizon) <br>[_**Set**_](structsdm_1_1Set.md) _the planning horizon._ |
| virtual void | [**setInternalState**](classsdm_1_1MDP.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;) <br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDP.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDP.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) <br> |
| virtual std::string | [**toJSON**](classsdm_1_1MDP.md#function-tojson) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (JSON format)._ |
| virtual std::string | [**toStdFormat**](classsdm_1_1MDP.md#function-tostdformat) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |
| virtual std::string | [**toXML**](classsdm_1_1MDP.md#function-toxml) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (XML format)._ |
| virtual  | [**~MDP**](classsdm_1_1MDP.md#function-mdp) () <br> |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::POMDPInterface

See [sdm::POMDPInterface](classsdm_1_1POMDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual double | [**getDynamics**](classsdm_1_1POMDPInterface.md#function-getdynamics) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the dynamics, i.e. p(s', o | s, a)_  |
| virtual double | [**getObservationProbability**](classsdm_1_1POMDPInterface.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the observation probability, i.e. p(o | s', a)_  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1POMDPInterface.md#function-getobservationspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths observation space at timestep t._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1POMDPInterface.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable observations._  |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::MMDP

See [sdm::MMDP](classsdm_1_1MMDP.md)

| Type | Name |
| ---: | :--- |
|   | [**MMDP**](classsdm_1_1MMDP.md#function-mmdp-1-2) () <br> |
|   | [**MMDP**](classsdm_1_1MMDP.md#function-mmdp-2-2) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & state\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & action\_space, const std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; & reward, const std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; & state\_dynamics, const std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt;&gt; & start\_distrib, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.99, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDP.md#function-getactionspace-1-2) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths action space at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDP.md#function-getactionspace-2-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths action space of agent i at timestep t._  |
| virtual std::string | [**toStdFormat**](classsdm_1_1MMDP.md#function-tostdformat) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |

## Public Functions inherited from sdm::MDP

See [sdm::MDP](classsdm_1_1MDP.md)

| Type | Name |
| ---: | :--- |
|   | [**MDP**](classsdm_1_1MDP.md#function-mdp-1-2) () <br> |
|   | [**MDP**](classsdm_1_1MDP.md#function-mdp-2-2) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & state\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & action\_space, const std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; & reward\_space, const std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; & state\_dynamics, const std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt;&gt; & start\_distribution, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.99, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  void | [**generateFile**](classsdm_1_1MDP.md#function-generatefile) (std::string) <br>_Save problem in file with given format (.xml, .json or .{dpomdp, posg, zsposg})._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDP.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths action space at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1MDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the action space._  |
| virtual double | [**getDiscount**](classsdm_1_1MDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDP.md#function-gethorizon) () const<br>_Get the planning horizon._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDP.md#function-getinternalstate) () const<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDP.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDP.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDP.md#function-getnumagents) () const<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1MDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDP.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reachable next states._  |
| virtual double | [**getReward**](classsdm_1_1MDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reward of executing action a in state s at timestep t._  |
| virtual std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; | [**getRewardSpace**](classsdm_1_1MDP.md#function-getrewardspace) () const<br>_Get the reward function._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDP.md#function-getstartdistribution) () const<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**getStateDynamics**](classsdm_1_1MDP.md#function-getstatedynamics) () const<br>_Get the state dynamics._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDP.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDP.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the Transition Probability object._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1MDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**sampleNextObservation**](classsdm_1_1MDP.md#function-samplenextobservation) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**setDiscount**](classsdm_1_1MDP.md#function-setdiscount) (double discount) <br>[_**Set**_](structsdm_1_1Set.md) _the discount factor._ |
|  void | [**setHorizon**](classsdm_1_1MDP.md#function-sethorizon) ([**number**](namespacesdm.md#typedef-number) horizon) <br>[_**Set**_](structsdm_1_1Set.md) _the planning horizon._ |
| virtual void | [**setInternalState**](classsdm_1_1MDP.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;) <br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDP.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDP.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) <br> |
| virtual std::string | [**toJSON**](classsdm_1_1MDP.md#function-tojson) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (JSON format)._ |
| virtual std::string | [**toStdFormat**](classsdm_1_1MDP.md#function-tostdformat) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |
| virtual std::string | [**toXML**](classsdm_1_1MDP.md#function-toxml) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (XML format)._ |
| virtual  | [**~MDP**](classsdm_1_1MDP.md#function-mdp) () <br> |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::MMDPInterface

See [sdm::MMDPInterface](classsdm_1_1MMDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDPInterface.md#function-getactionspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDPInterface.md#function-getactionspace-2-2) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |





















































































## Protected Attributes inherited from sdm::POMDP

See [sdm::POMDP](classsdm_1_1POMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) &gt; | [**observation\_dynamics\_**](classsdm_1_1POMDP.md#variable-observation-dynamics-)  <br> |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**observation\_space\_**](classsdm_1_1POMDP.md#variable-observation-space-)  <br> |

## Protected Attributes inherited from sdm::MDP

See [sdm::MDP](classsdm_1_1MDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**action\_space\_**](classsdm_1_1MDP.md#variable-action-space-)  <br> |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**criterion\_**](classsdm_1_1MDP.md#variable-criterion-)  <br> |
|  int | [**current\_timestep\_**](classsdm_1_1MDP.md#variable-current-timestep-)  <br> |
|  double | [**discount\_**](classsdm_1_1MDP.md#variable-discount-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1MDP.md#variable-horizon-)  <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**internal\_state\_**](classsdm_1_1MDP.md#variable-internal-state-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_agents\_**](classsdm_1_1MDP.md#variable-num-agents-)  <br> |
|  std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; | [**reward\_space\_**](classsdm_1_1MDP.md#variable-reward-space-)  <br> |
|  std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**start\_distribution\_**](classsdm_1_1MDP.md#variable-start-distribution-)  <br> |
|  std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**state\_dynamics\_**](classsdm_1_1MDP.md#variable-state-dynamics-)  <br> |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**state\_space\_**](classsdm_1_1MDP.md#variable-state-space-)  <br> |








## Protected Attributes inherited from sdm::MDP

See [sdm::MDP](classsdm_1_1MDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**action\_space\_**](classsdm_1_1MDP.md#variable-action-space-)  <br> |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**criterion\_**](classsdm_1_1MDP.md#variable-criterion-)  <br> |
|  int | [**current\_timestep\_**](classsdm_1_1MDP.md#variable-current-timestep-)  <br> |
|  double | [**discount\_**](classsdm_1_1MDP.md#variable-discount-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1MDP.md#variable-horizon-)  <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**internal\_state\_**](classsdm_1_1MDP.md#variable-internal-state-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_agents\_**](classsdm_1_1MDP.md#variable-num-agents-)  <br> |
|  std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; | [**reward\_space\_**](classsdm_1_1MDP.md#variable-reward-space-)  <br> |
|  std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**start\_distribution\_**](classsdm_1_1MDP.md#variable-start-distribution-)  <br> |
|  std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**state\_dynamics\_**](classsdm_1_1MDP.md#variable-state-dynamics-)  <br> |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**state\_space\_**](classsdm_1_1MDP.md#variable-state-space-)  <br> |


















































































## Public Types Documentation


### typedef action 


```cpp
using sdm::NetworkedDistributedPOMDP::action =  number;
```



### typedef agent 


```cpp
using sdm::NetworkedDistributedPOMDP::agent =  number;
```



### typedef observation 


```cpp
using sdm::NetworkedDistributedPOMDP::observation =  number;
```



### typedef state 


```cpp
using sdm::NetworkedDistributedPOMDP::state =  number;
```


## Public Attributes Documentation


### variable input\_file 


```cpp
std::ifstream sdm::NetworkedDistributedPOMDP::input_file;
```



### variable n 


```cpp
Node* sdm::NetworkedDistributedPOMDP::n;
```



### variable ndpomdp\_dynamics\_generator 


```cpp
std::unordered_map<std::string, std::discrete_distribution<number> > sdm::NetworkedDistributedPOMDP::ndpomdp_dynamics_generator;
```



### variable nodes 


```cpp
agent* sdm::NetworkedDistributedPOMDP::nodes;
```



### variable observationSuccessor 


```cpp
std::map<std::string, std::unordered_set<observation> > sdm::NetworkedDistributedPOMDP::observationSuccessor;
```



### variable observationsmatrix 


```cpp
std::map<std::string, double> sdm::NetworkedDistributedPOMDP::observationsmatrix;
```



### variable rMax 


```cpp
double sdm::NetworkedDistributedPOMDP::rMax;
```



### variable root 


```cpp
agent sdm::NetworkedDistributedPOMDP::root;
```



### variable stateSuccessor 


```cpp
std::unordered_set<state>* sdm::NetworkedDistributedPOMDP::stateSuccessor;
```



### variable transitionmatrix 


```cpp
std::map<int, int> sdm::NetworkedDistributedPOMDP::transitionmatrix;
```


## Public Functions Documentation


### function NetworkedDistributedPOMDP 


```cpp
sdm::NetworkedDistributedPOMDP::NetworkedDistributedPOMDP (
    std::string
) 
```



### function createDAG 


```cpp
void sdm::NetworkedDistributedPOMDP::createDAG () 
```



### function getData 


```cpp
void sdm::NetworkedDistributedPOMDP::getData (
    std::string
) 
```



### function getDynamicsGenerator 


```cpp
std::tuple< std::vector< double >, observation , state > sdm::NetworkedDistributedPOMDP::getDynamicsGenerator (
    number x,
    number a
) 
```




**Parameters:**


* `state` the current state 
* `jaction` the joint action 



**Returns:**

a tuple containing reward, next\_osbservation and next\_state 




        

### function getInitialBelief 


```cpp
double sdm::NetworkedDistributedPOMDP::getInitialBelief (
    std::shared_ptr< State >
) 
```



### function getObservation 


```cpp
double sdm::NetworkedDistributedPOMDP::getObservation (
    agent,
    action,
    state,
    observation
) 
```



### function getRewardF 


```cpp
double sdm::NetworkedDistributedPOMDP::getRewardF (
    state,
    agent,
    agent,
    action,
    action
) 
```



### function getUniqueValidNeighbors 


```cpp
std::vector< std::pair< number , number > > sdm::NetworkedDistributedPOMDP::getUniqueValidNeighbors () 
```



### function init 


```cpp
virtual std::shared_ptr< State > sdm::NetworkedDistributedPOMDP::init () 
```



### function printDAG 


```cpp
void sdm::NetworkedDistributedPOMDP::printDAG (
    agent
) 
```



### function setupDynamicsGenerator 


```cpp
void sdm::NetworkedDistributedPOMDP::setupDynamicsGenerator () 
```




**Returns:**

number Get the number of Actions for a specific agent Get the number of Action for every agents 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/world/networked_distributed_pomdp.hpp`