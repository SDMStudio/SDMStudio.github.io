
# Class sdm::HierarchicalMPOMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HierarchicalMPOMDP**](classsdm_1_1HierarchicalMPOMDP.md)



_The Hierarchical_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _is a transformation of a standard_[_**MPOMDP**_](classsdm_1_1MPOMDP.md) _assuming there exists a hierarchy among agents._[More...](#detailed-description)

* `#include <hierarchical_mpomdp.hpp>`



Inherits the following classes: [sdm::TransformedMPOMDP](classsdm_1_1TransformedMPOMDP.md)












































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**HierarchicalMPOMDP**](classsdm_1_1HierarchicalMPOMDP.md#function-hierarchicalmpomdp) (const std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; & mpomdp) <br> |
|  std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**getClassicObservation**](classsdm_1_1HierarchicalMPOMDP.md#function-getclassicobservation) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & hierarchical\_joint\_observation) const<br>_Get ths action space at timestep t._  |
|  std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**getHierarchicalObservation**](classsdm_1_1HierarchicalMPOMDP.md#function-gethierarchicalobservation) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & classic\_joint\_observation) const<br> |
| virtual double | [**getObservationProbability**](classsdm_1_1HierarchicalMPOMDP.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the Obs Probability object._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1HierarchicalMPOMDP.md#function-getobservationspace-1-2) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get the reachable next states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpace**](classsdm_1_1HierarchicalMPOMDP.md#function-getobservationspace-2-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get ths observation space of agent i at timestep t._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1HierarchicalMPOMDP.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the Reachablel Observations object._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1HierarchicalMPOMDP.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1HierarchicalMPOMDP.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) <br> |

## Public Functions inherited from sdm::TransformedMPOMDP

See [sdm::TransformedMPOMDP](classsdm_1_1TransformedMPOMDP.md)

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










## Protected Types

| Type | Name |
| ---: | :--- |
| typedef boost::bimaps::bimap&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**obs\_bimap**](classsdm_1_1HierarchicalMPOMDP.md#typedef-obs-bimap)  <br> |
| typedef obs\_bimap::value\_type | [**obs\_bimap\_value**](classsdm_1_1HierarchicalMPOMDP.md#typedef-obs-bimap-value)  <br> |


















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**obs\_bimap**](classsdm_1_1HierarchicalMPOMDP.md#typedef-obs-bimap) | [**bimap\_classic\_to\_hierarchical\_obs**](classsdm_1_1HierarchicalMPOMDP.md#variable-bimap-classic-to-hierarchical-obs)  <br>_The mapping from joint observation to hierarchical observation._  |
|  [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; &gt; | [**indiv\_observation\_spaces\_**](classsdm_1_1HierarchicalMPOMDP.md#variable-indiv-observation-spaces-)  <br>_Keep transformed individual observation space for each agent._  |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; | [**joint\_observation\_space\_**](classsdm_1_1HierarchicalMPOMDP.md#variable-joint-observation-space-)  <br>_The transformed joint observation space._  |

## Protected Attributes inherited from sdm::TransformedMPOMDP

See [sdm::TransformedMPOMDP](classsdm_1_1TransformedMPOMDP.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) &gt; | [**mpomdp\_**](classsdm_1_1TransformedMPOMDP.md#variable-mpomdp-)  <br>_The underlying_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _._ |

















## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**setupObservationSpace**](classsdm_1_1HierarchicalMPOMDP.md#function-setupobservationspace) () <br>_This function will transform the observation space of the_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _as if it was a hierarchical problem._ |


















# Detailed Description


More precisely, each agent receive observations of its surbordinates in addition to its own observation.

Example - tiger problem :

(hear-left, hear-left) &gt; ((hear-left), (hear-left, hear-left)) (hear-left, hear-right) &gt; ((hear-left), (hear-left, hear-right)) (hear-right, hear-left) &gt; ((hear-right), (hear-right, hear-left)) (hear-right, hear-right) &gt; ((hear-right), (hear-right, hear-right)) 

    
## Public Functions Documentation


### function HierarchicalMPOMDP 


```cpp
sdm::HierarchicalMPOMDP::HierarchicalMPOMDP (
    const std::shared_ptr< MPOMDPInterface > & mpomdp
) 
```



### function getClassicObservation 


```cpp
std::shared_ptr< Observation > sdm::HierarchicalMPOMDP::getClassicObservation (
    const std::shared_ptr< Observation > & hierarchical_joint_observation
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the action space 




        

### function getHierarchicalObservation 


```cpp
std::shared_ptr< Observation > sdm::HierarchicalMPOMDP::getHierarchicalObservation (
    const std::shared_ptr< Observation > & classic_joint_observation
) const
```



### function getObservationProbability 


```cpp
virtual double sdm::HierarchicalMPOMDP::getObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t
) const
```




**Parameters:**


* `state` 
* `action` 
* `next_state` 
* `observation` 
* `t` 



**Returns:**

double 




        
Implements [*sdm::POMDPInterface::getObservationProbability*](classsdm_1_1POMDPInterface.md#function-getobservationprobability)


### function getObservationSpace [1/2]


```cpp
virtual std::shared_ptr< Space > sdm::HierarchicalMPOMDP::getObservationSpace (
    number t
) const
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the set of reachable states 




        
Implements [*sdm::MPOMDPInterface::getObservationSpace*](classsdm_1_1MPOMDPInterface.md#function-getobservationspace-2-2)


### function getObservationSpace [2/2]


```cpp
virtual std::shared_ptr< Space > sdm::HierarchicalMPOMDP::getObservationSpace (
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


### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::HierarchicalMPOMDP::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const
```




**Parameters:**


* `state` 
* `action` 
* `next_state` 
* `t` 



**Returns:**

std::set&lt;std::shared\_ptr&lt;Observation&gt;&gt; 




        
Implements [*sdm::POMDPInterface::getReachableObservations*](classsdm_1_1POMDPInterface.md#function-getreachableobservations)


### function step [1/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::HierarchicalMPOMDP::step (
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
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::HierarchicalMPOMDP::step (
    std::shared_ptr< Action > action,
    bool increment_timestep
) 
```


Implements [*sdm::MDPInterface::step*](classsdm_1_1MDPInterface.md#function-step-2-2)

## Protected Types Documentation


### typedef obs\_bimap 


```cpp
using sdm::HierarchicalMPOMDP::obs_bimap =  boost::bimaps::bimap<std::shared_ptr<Observation>, std::shared_ptr<Observation> >;
```



### typedef obs\_bimap\_value 


```cpp
using sdm::HierarchicalMPOMDP::obs_bimap_value =  obs_bimap::value_type;
```


## Protected Attributes Documentation


### variable bimap\_classic\_to\_hierarchical\_obs 


```cpp
obs_bimap sdm::HierarchicalMPOMDP::bimap_classic_to_hierarchical_obs;
```



### variable indiv\_observation\_spaces\_ 


```cpp
Joint<std::shared_ptr<DiscreteSpace> > sdm::HierarchicalMPOMDP::indiv_observation_spaces_;
```



### variable joint\_observation\_space\_ 


```cpp
std::shared_ptr<DiscreteSpace> sdm::HierarchicalMPOMDP::joint_observation_space_;
```


## Protected Functions Documentation


### function setupObservationSpace 


```cpp
void sdm::HierarchicalMPOMDP::setupObservationSpace () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/hierarchical_mpomdp.hpp`