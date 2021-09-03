
# Class sdm::DecisionProcessInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DecisionProcessInterface**](classsdm_1_1DecisionProcessInterface.md)



_The class for Discrete Markov Decision Processes._ 

* `#include <decision_process_interface.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::set&lt; std::shared\_ptr&lt; Action &gt; &gt; | [**getAllActions**](classsdm_1_1DecisionProcessInterface.md#function-getallactions) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get all actions._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getAllObservations**](classsdm_1_1DecisionProcessInterface.md#function-getallobservations) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reachable next states._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getAllStates**](classsdm_1_1DecisionProcessInterface.md#function-getallstates) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get all states._  |
| virtual double | [**getDiscount**](classsdm_1_1DecisionProcessInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual double | [**getDynamics**](classsdm_1_1DecisionProcessInterface.md#function-getdynamics) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the Dynamics object._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1DecisionProcessInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual double | [**getObsProbability**](classsdm_1_1DecisionProcessInterface.md#function-getobsprobability) (const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the Obs Probability object._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1DecisionProcessInterface.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the Reachablel Observations object._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1DecisionProcessInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reachable next states._  |
| virtual double | [**getReward**](classsdm_1_1DecisionProcessInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) const = 0<br>_Get the reward._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1DecisionProcessInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1DecisionProcessInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the Transition Probability object._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**nextState**](classsdm_1_1DecisionProcessInterface.md#function-nextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |








## Public Functions Documentation


### function getAllActions 


```cpp
virtual std::set< std::shared_ptr< Action > > sdm::DecisionProcessInterface::getAllActions (
    number t
) const = 0
```




**Returns:**

the set of actions 




        

### function getAllObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::DecisionProcessInterface::getAllObservations (
    number t
) const = 0
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the set of reachable states 




        

### function getAllStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::DecisionProcessInterface::getAllStates (
    number t
) const = 0
```




**Returns:**

the set of states 




        

### function getDiscount 


```cpp
virtual double sdm::DecisionProcessInterface::getDiscount (
    number t
) const = 0
```




**Parameters:**


* `t` the timestep 



**Returns:**

the discount factor 




        

### function getDynamics 


```cpp
virtual double sdm::DecisionProcessInterface::getDynamics (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t
) const = 0
```




**Parameters:**


* `state` 
* `action` 
* `next_state` 
* `observation` 
* `t` 



**Returns:**

double 




        

### function getNumAgents 


```cpp
virtual number sdm::DecisionProcessInterface::getNumAgents () const = 0
```




**Returns:**

the number of agents 




        

### function getObsProbability 


```cpp
virtual double sdm::DecisionProcessInterface::getObsProbability (
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t
) const = 0
```




**Parameters:**


* `action` 
* `next_state` 
* `observation` 
* `t` 



**Returns:**

double 




        

### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::DecisionProcessInterface::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `state` 
* `action` 
* `t` 



**Returns:**

std::set&lt;std::shared\_ptr&lt;Observation&gt;&gt; 




        

### function getReachableStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::DecisionProcessInterface::getReachableStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the set of reachable states 




        

### function getReward 


```cpp
virtual double sdm::DecisionProcessInterface::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t,
    number agent_id
) const = 0
```




**Parameters:**


* `state` 
* `action` 
* `t` 



**Returns:**

double 




        

### function getStartDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::DecisionProcessInterface::getStartDistribution () const = 0
```




**Returns:**

the initial distribution over states 




        

### function getTransitionProbability 


```cpp
virtual double sdm::DecisionProcessInterface::getTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t
) const = 0
```




**Parameters:**


* `state` 
* `action` 
* `next_state` 
* `t` 



**Returns:**

double 




        

### function nextState 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::DecisionProcessInterface::nextState (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```




**Parameters:**


* `state` 
* `action` 
* `t` 



**Returns:**

std::shared\_ptr&lt;[**Distribution**](classsdm_1_1Distribution.md)&lt;std::shared\_ptr&lt;State&gt;&gt;&gt; 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/world/base/decision_process_interface.hpp`