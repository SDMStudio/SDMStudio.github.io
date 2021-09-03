
# Class sdm::MDPInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MDPInterface**](classsdm_1_1MDPInterface.md)



_The class for Discrete Markov Decision Processes._ 

* `#include <mdp_interface.hpp>`



Inherits the following classes: [sdm::GymInterface](classsdm_1_1GymInterface.md)


Inherited by the following classes: [sdm::MDP](classsdm_1_1MDP.md),  [sdm::MMDPInterface](classsdm_1_1MMDPInterface.md),  [sdm::POMDPInterface](classsdm_1_1POMDPInterface.md)














## Public Functions

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


### function getActionSpace 


```cpp
virtual std::shared_ptr< Space > sdm::MDPInterface::getActionSpace (
    number t
) const = 0
```




**Parameters:**


* `t` the timestep 



**Returns:**

the action space 




        

### function getDiscount 


```cpp
virtual double sdm::MDPInterface::getDiscount (
    number t
) const = 0
```




**Parameters:**


* `t` the timestep 



**Returns:**

the discount factor 




        

### function getHorizon 


```cpp
virtual number sdm::MDPInterface::getHorizon () const = 0
```




**Returns:**

the number of agents 




        

### function getInternalState 


```cpp
virtual std::shared_ptr< State > sdm::MDPInterface::getInternalState () const = 0
```



### function getMaxReward 


```cpp
virtual double sdm::MDPInterface::getMaxReward (
    number t
) const = 0
```



### function getMinReward 


```cpp
virtual double sdm::MDPInterface::getMinReward (
    number t
) const = 0
```



### function getNumAgents 


```cpp
virtual number sdm::MDPInterface::getNumAgents () const = 0
```




**Returns:**

the number of agents 




        

### function getReachableStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::MDPInterface::getReachableStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the current action 



**Returns:**

the set of reachable states 




        

### function getReward 


```cpp
virtual double sdm::MDPInterface::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the action 
* `t` the timestep 



**Returns:**

double the reward for each agent 




        

### function getStartDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::MDPInterface::getStartDistribution () const = 0
```




**Returns:**

the initial distribution over states 




        

### function getStateSpace 


```cpp
virtual std::shared_ptr< Space > sdm::MDPInterface::getStateSpace (
    number t
) const = 0
```




**Parameters:**


* `t` the timestep 



**Returns:**

the state space 




        

### function getTransitionProbability 


```cpp
virtual double sdm::MDPInterface::getTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the action 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

the probability 




        

### function setInternalState 


```cpp
virtual void sdm::MDPInterface::setInternalState (
    std::shared_ptr< State > state
) = 0
```



### function step [1/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::MDPInterface::step (
    std::shared_ptr< Action > action
) = 0
```




**Parameters:**


* `action` the action to execute 



**Returns:**

the information produced. Include : next observation, rewards, episode done 




        
Implements [*sdm::GymInterface::step*](classsdm_1_1GymInterface.md#function-step)


### function step [2/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::MDPInterface::step (
    std::shared_ptr< Action > action,
    bool increment_timestep
) = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/base/mdp_interface.hpp`