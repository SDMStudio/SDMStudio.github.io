
# Class sdm::MMDPInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MMDPInterface**](classsdm_1_1MMDPInterface.md)



_The class for Discrete Markov Decision Processes._ 

* `#include <mmdp_interface.hpp>`



Inherits the following classes: [sdm::MDPInterface](classsdm_1_1MDPInterface.md)


Inherited by the following classes: [sdm::MMDP](classsdm_1_1MMDP.md),  [sdm::MPOMDPInterface](classsdm_1_1MPOMDPInterface.md),  [sdm::SerialMMDPInterface](classsdm_1_1SerialMMDPInterface.md)


















## Public Functions

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






















## Public Functions Documentation


### function getActionSpace [1/2]


```cpp
virtual std::shared_ptr< Space > sdm::MMDPInterface::getActionSpace (
    number agent_id,
    number t
) const = 0
```




**Parameters:**


* `agent_id` the identifier of the agent 
* `t` the timestep 



**Returns:**

the action space 




        

### function getActionSpace [2/2]


```cpp
virtual std::shared_ptr< Space > sdm::MMDPInterface::getActionSpace (
    number t
) const = 0
```




**Parameters:**


* `t` the timestep 



**Returns:**

the action space 




        
Implements [*sdm::MDPInterface::getActionSpace*](classsdm_1_1MDPInterface.md#function-getactionspace)


------------------------------
The documentation for this class was generated from the following file `src/sdm/world/base/mmdp_interface.hpp`