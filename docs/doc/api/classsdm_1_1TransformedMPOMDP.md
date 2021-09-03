
# Class sdm::TransformedMPOMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md)





* `#include <transformed_mpomdp.hpp>`



Inherits the following classes: [sdm::MPOMDPInterface](classsdm_1_1MPOMDPInterface.md)


Inherited by the following classes: [sdm::HierarchicalMPOMDP](classsdm_1_1HierarchicalMPOMDP.md)






































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md#function-transformedmpomdp) (const std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; & mpomdp) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1TransformedMPOMDP.md#function-getactionspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths action space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1TransformedMPOMDP.md#function-getactionspace-2-2) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths action space at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1TransformedMPOMDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the action space._  |
| virtual double | [**getDiscount**](classsdm_1_1TransformedMPOMDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get the discount factor at timestep t._  |
| virtual double | [**getDynamics**](classsdm_1_1TransformedMPOMDP.md#function-getdynamics) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the dynamics, i.e. p(s', o | s, a)_  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1TransformedMPOMDP.md#function-gethorizon) () const<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1TransformedMPOMDP.md#function-getinternalstate) () const<br> |
| virtual double | [**getMaxReward**](classsdm_1_1TransformedMPOMDP.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1TransformedMPOMDP.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1TransformedMPOMDP.md#function-getnumagents) () const<br>_Get the number of agents._  |
| virtual double | [**getObservationProbability**](classsdm_1_1TransformedMPOMDP.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the observation probability, i.e. p(o | s', a)_  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1TransformedMPOMDP.md#function-getobservationspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths observation space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1TransformedMPOMDP.md#function-getobservationspace-2-2) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths observation space at timestep t._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1TransformedMPOMDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1TransformedMPOMDP.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get reachable observations._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1TransformedMPOMDP.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1TransformedMPOMDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1TransformedMPOMDP.md#function-getstartdistribution) () const<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1TransformedMPOMDP.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1TransformedMPOMDP.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1TransformedMPOMDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual void | [**setInternalState**](classsdm_1_1TransformedMPOMDP.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) <br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1TransformedMPOMDP.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1TransformedMPOMDP.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) <br> |
| virtual  | [**~TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md#function-transformedmpomdp) () <br> |

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

























## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; | [**mpomdp\_**](classsdm_1_1TransformedMPOMDP.md#variable-mpomdp-)  <br>_The underlying_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _._ |
































## Public Functions Documentation


### function TransformedMPOMDP 


```cpp
sdm::TransformedMPOMDP::TransformedMPOMDP (
    const std::shared_ptr< MPOMDPInterface > & mpomdp
) 
```



### function getActionSpace [1/2]


```cpp
virtual std::shared_ptr< Space > sdm::TransformedMPOMDP::getActionSpace (
    number agent_id,
    number t
) const
```




**Parameters:**


* `agent_id` the identifier of the agent 
* `t` the timestep 



**Returns:**

the action space 




        
Implements [*sdm::MMDPInterface::getActionSpace*](classsdm_1_1MMDPInterface.md#function-getactionspace-1-2)


### function getActionSpace [2/2]


```cpp
virtual std::shared_ptr< Space > sdm::TransformedMPOMDP::getActionSpace (
    number t
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the action space 




        
Implements [*sdm::MMDPInterface::getActionSpace*](classsdm_1_1MMDPInterface.md#function-getactionspace-2-2)


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::TransformedMPOMDP::getActionSpaceAt (
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


### function getDiscount 


```cpp
virtual double sdm::TransformedMPOMDP::getDiscount (
    number t
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the discount factor 




        
Implements [*sdm::MDPInterface::getDiscount*](classsdm_1_1MDPInterface.md#function-getdiscount)


### function getDynamics 


```cpp
virtual double sdm::TransformedMPOMDP::getDynamics (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t
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


### function getHorizon 


```cpp
virtual number sdm::TransformedMPOMDP::getHorizon () const
```




**Returns:**

the number of agents 




        
Implements [*sdm::MDPInterface::getHorizon*](classsdm_1_1MDPInterface.md#function-gethorizon)


### function getInternalState 


```cpp
virtual std::shared_ptr< State > sdm::TransformedMPOMDP::getInternalState () const
```


Implements [*sdm::MDPInterface::getInternalState*](classsdm_1_1MDPInterface.md#function-getinternalstate)


### function getMaxReward 


```cpp
virtual double sdm::TransformedMPOMDP::getMaxReward (
    number t
) const
```


Implements [*sdm::MDPInterface::getMaxReward*](classsdm_1_1MDPInterface.md#function-getmaxreward)


### function getMinReward 


```cpp
virtual double sdm::TransformedMPOMDP::getMinReward (
    number t
) const
```


Implements [*sdm::MDPInterface::getMinReward*](classsdm_1_1MDPInterface.md#function-getminreward)


### function getNumAgents 


```cpp
virtual number sdm::TransformedMPOMDP::getNumAgents () const
```




**Returns:**

the number of agents 




        
Implements [*sdm::MDPInterface::getNumAgents*](classsdm_1_1MDPInterface.md#function-getnumagents)


### function getObservationProbability 


```cpp
virtual double sdm::TransformedMPOMDP::getObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t
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


### function getObservationSpace [1/2]


```cpp
virtual std::shared_ptr< Space > sdm::TransformedMPOMDP::getObservationSpace (
    number agent_id,
    number t
) const
```




**Parameters:**


* `agent_id` the identifier of the agent 
* `t` the timestep 



**Returns:**

the observation space 




        
Implements [*sdm::MPOMDPInterface::getObservationSpace*](classsdm_1_1MPOMDPInterface.md#function-getobservationspace-1-2)


### function getObservationSpace [2/2]


```cpp
virtual std::shared_ptr< Space > sdm::TransformedMPOMDP::getObservationSpace (
    number t
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the observation space 




        
Implements [*sdm::MPOMDPInterface::getObservationSpace*](classsdm_1_1MPOMDPInterface.md#function-getobservationspace-2-2)


### function getRandomAction 


```cpp
virtual std::shared_ptr< Action > sdm::TransformedMPOMDP::getRandomAction (
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


### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::TransformedMPOMDP::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const
```




**Parameters:**


* `state` the current state 
* `action` the current action 



**Returns:**

the set of reachable observations 




        
Implements [*sdm::POMDPInterface::getReachableObservations*](classsdm_1_1POMDPInterface.md#function-getreachableobservations)


### function getReachableStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::TransformedMPOMDP::getReachableStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const
```




**Parameters:**


* `state` the current state 
* `action` the current action 



**Returns:**

the set of reachable states 




        
Implements [*sdm::MDPInterface::getReachableStates*](classsdm_1_1MDPInterface.md#function-getreachablestates)


### function getReward 


```cpp
virtual double sdm::TransformedMPOMDP::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const
```




**Parameters:**


* `state` the current state 
* `action` the action 
* `t` the timestep 



**Returns:**

double the reward for each agent 




        
Implements [*sdm::MDPInterface::getReward*](classsdm_1_1MDPInterface.md#function-getreward)


### function getStartDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::TransformedMPOMDP::getStartDistribution () const
```




**Returns:**

the initial distribution over states 




        
Implements [*sdm::MDPInterface::getStartDistribution*](classsdm_1_1MDPInterface.md#function-getstartdistribution)


### function getStateSpace 


```cpp
virtual std::shared_ptr< Space > sdm::TransformedMPOMDP::getStateSpace (
    number t
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the state space 




        
Implements [*sdm::MDPInterface::getStateSpace*](classsdm_1_1MDPInterface.md#function-getstatespace)


### function getTransitionProbability 


```cpp
virtual double sdm::TransformedMPOMDP::getTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const
```




**Parameters:**


* `state` the current state 
* `action` the action 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

the probability 




        
Implements [*sdm::MDPInterface::getTransitionProbability*](classsdm_1_1MDPInterface.md#function-gettransitionprobability)


### function reset 


```cpp
virtual std::shared_ptr< Observation > sdm::TransformedMPOMDP::reset () 
```




**Returns:**

the initial observation 




        
Implements [*sdm::GymInterface::reset*](classsdm_1_1GymInterface.md#function-reset)


### function setInternalState 


```cpp
virtual void sdm::TransformedMPOMDP::setInternalState (
    std::shared_ptr< State > state
) 
```


Implements [*sdm::MDPInterface::setInternalState*](classsdm_1_1MDPInterface.md#function-setinternalstate)


### function step [1/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::TransformedMPOMDP::step (
    std::shared_ptr< Action > action
) 
```




**Parameters:**


* `action` the action to execute 



**Returns:**

the information produced. Include : next observation, rewards, episode done 




        
Implements [*sdm::MDPInterface::step*](classsdm_1_1MDPInterface.md#function-step-1-2)


### function step [2/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::TransformedMPOMDP::step (
    std::shared_ptr< Action > action,
    bool increment_timestep
) 
```


Implements [*sdm::MDPInterface::step*](classsdm_1_1MDPInterface.md#function-step-2-2)


### function ~TransformedMPOMDP 


```cpp
inline virtual sdm::TransformedMPOMDP::~TransformedMPOMDP () 
```


## Protected Attributes Documentation


### variable mpomdp\_ 


```cpp
std::shared_ptr<MPOMDPInterface> sdm::TransformedMPOMDP::mpomdp_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/transformed_mpomdp.hpp`