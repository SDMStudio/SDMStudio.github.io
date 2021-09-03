
# Class sdm::TabularObservationDynamics

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularObservationDynamics**](classsdm_1_1TabularObservationDynamics.md)



_Tabular observation dynamics._ [More...](#detailed-description)

* `#include <tabular_observation_dynamics.hpp>`



Inherits the following classes: [sdm::ObservationDynamicsInterface](classsdm_1_1ObservationDynamicsInterface.md)


Inherited by the following classes: [sdm::TabularObservationDynamicsAS](classsdm_1_1TabularObservationDynamicsAS.md),  [sdm::TabularObservationDynamicsS](classsdm_1_1TabularObservationDynamicsS.md),  [sdm::TabularObservationDynamicsSAS](classsdm_1_1TabularObservationDynamicsSAS.md)














## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**getNextObservationDistribution**](classsdm_1_1TabularObservationDynamics.md#function-getnextobservationdistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Get the distribution over next observations._  |
| virtual const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; & | [**getObservationProbabilities**](classsdm_1_1TabularObservationDynamics.md#function-getobservationprobabilities) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const = 0<br>_Get the observation vector for a given action and next state._  |
| virtual double | [**getObservationProbability**](classsdm_1_1TabularObservationDynamics.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) const = 0<br>_Get the observation probability._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1TabularObservationDynamics.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const = 0<br>_Get reachable observations from a state, suppose a specific action was executed._  |
| virtual void | [**setObservationProbabilities**](classsdm_1_1TabularObservationDynamics.md#function-setobservationprobabilities) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;&gt; & observation\_probas) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the observation probability._ |
| virtual void | [**setObservationProbability**](classsdm_1_1TabularObservationDynamics.md#function-setobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, double proba) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the observation probability._ |
| virtual void | [**setReachableObservations**](classsdm_1_1TabularObservationDynamics.md#function-setreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the the state / observation transition probability (i.e. p(s', o | s, a))._ |

## Public Functions inherited from sdm::ObservationDynamicsInterface

See [sdm::ObservationDynamicsInterface](classsdm_1_1ObservationDynamicsInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**getNextObservationDistribution**](classsdm_1_1ObservationDynamicsInterface.md#function-getnextobservationdistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the distribution over next observations._  |
| virtual double | [**getObservationProbability**](classsdm_1_1ObservationDynamicsInterface.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the the state / observation transition probability (i.e. p(o | s, a, s'))._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1ObservationDynamicsInterface.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable observations from a state, suppose a specific action was executed._  |















# Detailed Description


The class is optimized to provide a constant time access to all transition probabilities and reachable observations. 

    
## Public Functions Documentation


### function getNextObservationDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< Observation > > > sdm::TabularObservationDynamics::getNextObservationDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

the distribution over observations 




        
Implements [*sdm::ObservationDynamicsInterface::getNextObservationDistribution*](classsdm_1_1ObservationDynamicsInterface.md#function-getnextobservationdistribution)


### function getObservationProbabilities 


```cpp
virtual const MappedVector < std::shared_ptr< Observation > > & sdm::TabularObservationDynamics::getObservationProbabilities (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) const = 0
```




**Parameters:**


* `action` the action 



**Returns:**

the observation matrix 




        

### function getObservationProbability 


```cpp
virtual double sdm::TabularObservationDynamics::getObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t=0
) const = 0
```




**Parameters:**


* `state` a specific state (timestep t) 
* `action` a specific action 
* `obs` a specific observation 
* `next_state` a specific state (timestep t+1) 



**Returns:**

double a probability 




        
Implements [*sdm::ObservationDynamicsInterface::getObservationProbability*](classsdm_1_1ObservationDynamicsInterface.md#function-getobservationprobability)


### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::TabularObservationDynamics::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) const = 0
```




**Parameters:**


* `state` the current state 
* `action` the current action 
* `t` the timestep 



**Returns:**

the list of next reachable observations 




        
Implements [*sdm::ObservationDynamicsInterface::getReachableObservations*](classsdm_1_1ObservationDynamicsInterface.md#function-getreachableobservations)


### function setObservationProbabilities 


```cpp
virtual void sdm::TabularObservationDynamics::setObservationProbabilities (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const MappedVector < std::shared_ptr< Observation >> & observation_probas
) = 0
```




**Parameters:**


* `action` 
* `next_state` 
* `observation_probas` 



        

### function setObservationProbability 


```cpp
virtual void sdm::TabularObservationDynamics::setObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    double proba
) = 0
```




**Parameters:**


* `action` a specific action 
* `observation` a specific observation 
* `next_state` a specific state 
* `proba` a probability 



        

### function setReachableObservations 


```cpp
virtual void sdm::TabularObservationDynamics::setReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t=0
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `next_state` the next state 
* `observation` the observation 
* `proba` the probability 
* `t` the timestep 



**Returns:**

double the probability 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/dynamics/tabular_observation_dynamics.hpp`