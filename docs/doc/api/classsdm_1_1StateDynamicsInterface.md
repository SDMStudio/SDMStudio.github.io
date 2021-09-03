
# Class sdm::StateDynamicsInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md)



_This class provides a common interface for every models of state dynamics._ [More...](#detailed-description)

* `#include <state_dynamics_interface.hpp>`





Inherited by the following classes: [sdm::TabularStateDynamics](classsdm_1_1TabularStateDynamics.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getNextStateDistribution**](classsdm_1_1StateDynamicsInterface.md#function-getnextstatedistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the distribution over next states._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1StateDynamicsInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states from a state given a specific action._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1StateDynamicsInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the state transition probability (i.e. p(s' | s, a))._  |








# Detailed Description


A model of state transition is well defined if it implements this interface. The state dynamics is required to define a [**MDP**](classsdm_1_1MDP.md) (see file MDP.hpp) and related problems. Usually state transitions depend on the time, the previous state and the action. However, in few situations the transition can only depend on one or two of these parameters. 

    
## Public Functions Documentation


### function getNextStateDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::StateDynamicsInterface::getNextStateDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the current action 
* `t` the timestep 



**Returns:**

the distribution over next states 




        

### function getReachableStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::StateDynamicsInterface::getReachableStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the current action 
* `t` the timestep 



**Returns:**

the list of next reachable states 




        

### function getTransitionProbability 


```cpp
virtual double sdm::StateDynamicsInterface::getTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

double the probability 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/dynamics/state_dynamics_interface.hpp`