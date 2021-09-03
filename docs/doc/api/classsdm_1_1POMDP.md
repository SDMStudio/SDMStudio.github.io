
# Class sdm::POMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**POMDP**](classsdm_1_1POMDP.md)



_The class for Discrete Partially Observable Markov Decision Processes._ 

* `#include <pomdp.hpp>`



Inherits the following classes: [sdm::MDP](classsdm_1_1MDP.md),  [sdm::POMDPInterface](classsdm_1_1POMDPInterface.md)


Inherited by the following classes: [sdm::MPOMDP](classsdm_1_1MPOMDP.md)






































## Public Functions

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

























## Protected Attributes

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































## Public Functions Documentation


### function POMDP [1/2]


```cpp
sdm::POMDP::POMDP () 
```



### function POMDP [2/2]


```cpp
sdm::POMDP::POMDP (
    const std::shared_ptr< Space > & state_space,
    const std::shared_ptr< Space > & action_space,
    const std::shared_ptr< Space > & obs_space,
    const std::shared_ptr< RewardInterface > & reward,
    const std::shared_ptr< StateDynamicsInterface > & state_dynamics,
    const std::shared_ptr< ObservationDynamicsInterface > & obs_dynamics,
    const std::shared_ptr< Distribution < std::shared_ptr< State >>> & start_distrib,
    number horizon=0,
    double discount=0.99,
    Criterion criterion=Criterion::REW_MAX
) 
```



### function getDynamics 


```cpp
virtual double sdm::POMDP::getDynamics (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t=0
) const
```




**Parameters:**


* `state` the state at timestep t 
* `action` the action 
* `next_state` the next state, i.e. timestep t+1 
* `observation` the observation 
* `t` the timestep 



**Returns:**

the probability 




        
Implements [*sdm::POMDPInterface::getDynamics*](classsdm_1_1POMDPInterface.md#function-getdynamics)


### function getObservationDynamics 


```cpp
std::shared_ptr< ObservationDynamicsInterface > sdm::POMDP::getObservationDynamics () const
```



### function getObservationProbability 


```cpp
virtual double sdm::POMDP::getObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t=0
) const
```




**Parameters:**


* `action` the action 
* `next_state` the next state 
* `observation` the observation 
* `t` the timestep 



**Returns:**

the probability 




        
Implements [*sdm::POMDPInterface::getObservationProbability*](classsdm_1_1POMDPInterface.md#function-getobservationprobability)


### function getObservationSpace 


```cpp
virtual std::shared_ptr< Space > sdm::POMDP::getObservationSpace (
    number t=0
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the observation space 




        
Implements [*sdm::POMDPInterface::getObservationSpace*](classsdm_1_1POMDPInterface.md#function-getobservationspace)


### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::POMDP::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const
```




**Parameters:**


* `state` the current state 
* `action` the current action 
* `next_state` the next state 



**Returns:**

the set of reachable observations 




        
Implements [*sdm::POMDPInterface::getReachableObservations*](classsdm_1_1POMDPInterface.md#function-getreachableobservations)


### function sampleNextObservation 


```cpp
virtual std::shared_ptr< Observation > sdm::POMDP::sampleNextObservation (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```


Implements [*sdm::MDP::sampleNextObservation*](classsdm_1_1MDP.md#function-samplenextobservation)

## Protected Attributes Documentation


### variable observation\_dynamics\_ 


```cpp
std::shared_ptr<ObservationDynamicsInterface> sdm::POMDP::observation_dynamics_;
```



### variable observation\_space\_ 


```cpp
std::shared_ptr<Space> sdm::POMDP::observation_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/pomdp.hpp`