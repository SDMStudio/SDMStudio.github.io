
# Class sdm::ObservationDynamicsInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md)



_This class provides a common interface for every models of observation dynamics._ [More...](#detailed-description)

* `#include <observation_dynamics_interface.hpp>`





Inherited by the following classes: [sdm::TabularObservationDynamics](classsdm_1_1TabularObservationDynamics.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**getNextObservationDistribution**](classsdm_1_1ObservationDynamicsInterface.md#function-getnextobservationdistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the distribution over next observations._  |
| virtual double | [**getObservationProbability**](classsdm_1_1ObservationDynamicsInterface.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the the state / observation transition probability (i.e. p(o | s, a, s'))._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1ObservationDynamicsInterface.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable observations from a state, suppose a specific action was executed._  |








# Detailed Description


An model of observation dynamics is well defined if it implements this interface. The observation dynamics is required to define a [**POMDP**](classsdm_1_1POMDP.md) (see file POMDP.hpp) and related problems. Usually observation probabilities depend on the time, the state, the previous action and the previous state. However, in few situations the transition can only depend on some of these parameters. 

    
## Public Functions Documentation


### function getNextObservationDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< Observation > > > sdm::ObservationDynamicsInterface::getNextObservationDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

the distribution over observations 




        

### function getObservationProbability 


```cpp
virtual double sdm::ObservationDynamicsInterface::getObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t
) const = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `obs` the observation 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

double the probability 




        

### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::ObservationDynamicsInterface::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the current action 
* `next_state` the state at time t +1 
* `t` the timestep 



**Returns:**

the list of next reachable observations 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/dynamics/observation_dynamics_interface.hpp`