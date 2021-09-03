
# Class sdm::TabularObservationDynamicsS

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md)



_Tabular representation for the observation dynamics p(o' | s')._ [More...](#detailed-description)

* `#include <tabular_observation_dynamics_S.hpp>`



Inherits the following classes: [sdm::TabularObservationDynamics](classsdm_1_1TabularObservationDynamics.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md#function-tabularobservationdynamicss-1-2) () <br> |
|   | [**TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md#function-tabularobservationdynamicss-2-2) (const [**TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md) & copy) <br> |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**getNextObservationDistribution**](classsdm_1_1TabularObservationDynamicsS.md#function-getnextobservationdistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the distribution over next observations._  |
| virtual const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; & | [**getObservationProbabilities**](classsdm_1_1TabularObservationDynamicsS.md#function-getobservationprobabilities) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the observation vector for a given action and next state._  |
| virtual double | [**getObservationProbability**](classsdm_1_1TabularObservationDynamicsS.md#function-getobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the observation probability._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**getReachableObservations**](classsdm_1_1TabularObservationDynamicsS.md#function-getreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get reachable observations from a state, suppose a specific action was executed._  |
|  void | [**setObservationModel**](classsdm_1_1TabularObservationDynamicsS.md#function-setobservationmodel) (const [**MappedMatrix**](classsdm_1_1MappedMatrix.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;&gt; & o\_model) <br> |
| virtual void | [**setObservationProbabilities**](classsdm_1_1TabularObservationDynamicsS.md#function-setobservationprobabilities) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;&gt; & observation\_probas) <br>[_**Set**_](structsdm_1_1Set.md) _the observation probability._ |
| virtual void | [**setObservationProbability**](classsdm_1_1TabularObservationDynamicsS.md#function-setobservationprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, double proba) <br>[_**Set**_](structsdm_1_1Set.md) _the observation probability._ |
| virtual void | [**setReachableObservations**](classsdm_1_1TabularObservationDynamicsS.md#function-setreachableobservations) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t=0) <br>[_**Set**_](structsdm_1_1Set.md) _the the state / observation transition probability (i.e. p(s', o | s, a))._ |
| virtual  | [**~TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md#function-tabularobservationdynamicss) () <br> |

## Public Functions inherited from sdm::TabularObservationDynamics

See [sdm::TabularObservationDynamics](classsdm_1_1TabularObservationDynamics.md)

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










## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; &gt; | [**next\_observations\_distrib\_**](classsdm_1_1TabularObservationDynamicsS.md#variable-next-observations-distrib-)  <br>_map from state, current action pairs to the distribution over next states_  |
|  [**MappedMatrix**](classsdm_1_1MappedMatrix.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; | [**observation\_model\_**](classsdm_1_1TabularObservationDynamicsS.md#variable-observation-model-)  <br>_transition and observation matrices_  |
|  std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::set&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**successor\_observations\_**](classsdm_1_1TabularObservationDynamicsS.md#variable-successor-observations-)  <br>_map from next-state to set of next observations_  |






## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**updateNextObsDistribution**](classsdm_1_1TabularObservationDynamicsS.md#function-updatenextobsdistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, double proba) <br> |






# Detailed Description


The class is optimized to provide a constant time access to all transition probabilities and reachable observations. The representation used is an array containing probabilities p(o' | s'). 

    
## Public Functions Documentation


### function TabularObservationDynamicsS [1/2]


```cpp
sdm::TabularObservationDynamicsS::TabularObservationDynamicsS () 
```



### function TabularObservationDynamicsS [2/2]


```cpp
sdm::TabularObservationDynamicsS::TabularObservationDynamicsS (
    const TabularObservationDynamicsS & copy
) 
```



### function getNextObservationDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< Observation > > > sdm::TabularObservationDynamicsS::getNextObservationDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) 
```




**Parameters:**


* `state` the state 
* `action` the action 
* `next_state` the next state 
* `t` the timestep 



**Returns:**

the distribution over observations 




        
Implements [*sdm::TabularObservationDynamics::getNextObservationDistribution*](classsdm_1_1TabularObservationDynamics.md#function-getnextobservationdistribution)


### function getObservationProbabilities 


```cpp
virtual const MappedVector < std::shared_ptr< Observation > > & sdm::TabularObservationDynamicsS::getObservationProbabilities (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) const
```




**Parameters:**


* `action` the action 



**Returns:**

the observation matrix 




        
Implements [*sdm::TabularObservationDynamics::getObservationProbabilities*](classsdm_1_1TabularObservationDynamics.md#function-getobservationprobabilities)


### function getObservationProbability 


```cpp
virtual double sdm::TabularObservationDynamicsS::getObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t=0
) const
```




**Parameters:**


* `state` a specific state (timestep t) 
* `action` a specific action 
* `obs` a specific observation 
* `next_state` a specific state (timestep t+1) 



**Returns:**

double a probability 




        
Implements [*sdm::TabularObservationDynamics::getObservationProbability*](classsdm_1_1TabularObservationDynamics.md#function-getobservationprobability)


### function getReachableObservations 


```cpp
virtual std::set< std::shared_ptr< Observation > > sdm::TabularObservationDynamicsS::getReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) const
```




**Parameters:**


* `state` the current state 
* `action` the current action 
* `t` the timestep 



**Returns:**

the list of next reachable observations 




        
Implements [*sdm::TabularObservationDynamics::getReachableObservations*](classsdm_1_1TabularObservationDynamics.md#function-getreachableobservations)


### function setObservationModel 


```cpp
void sdm::TabularObservationDynamicsS::setObservationModel (
    const MappedMatrix < std::shared_ptr< State >, std::shared_ptr< Observation >> & o_model
) 
```



### function setObservationProbabilities 


```cpp
virtual void sdm::TabularObservationDynamicsS::setObservationProbabilities (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const MappedVector < std::shared_ptr< Observation >> & observation_probas
) 
```




**Parameters:**


* `action` 
* `next_state` 
* `observation_probas` 



        
Implements [*sdm::TabularObservationDynamics::setObservationProbabilities*](classsdm_1_1TabularObservationDynamics.md#function-setobservationprobabilities)


### function setObservationProbability 


```cpp
virtual void sdm::TabularObservationDynamicsS::setObservationProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    double proba
) 
```




**Parameters:**


* `action` a specific action 
* `observation` a specific observation 
* `next_state` a specific state 
* `proba` a probability 



        
Implements [*sdm::TabularObservationDynamics::setObservationProbability*](classsdm_1_1TabularObservationDynamics.md#function-setobservationprobability)


### function setReachableObservations 


```cpp
virtual void sdm::TabularObservationDynamicsS::setReachableObservations (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    number t=0
) 
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




        
Implements [*sdm::TabularObservationDynamics::setReachableObservations*](classsdm_1_1TabularObservationDynamics.md#function-setreachableobservations)


### function ~TabularObservationDynamicsS 


```cpp
virtual sdm::TabularObservationDynamicsS::~TabularObservationDynamicsS () 
```


## Protected Attributes Documentation


### variable next\_observations\_distrib\_ 


```cpp
std::unordered_map<std::shared_ptr<State>, std::shared_ptr<DiscreteDistribution<std::shared_ptr<Observation> > > > sdm::TabularObservationDynamicsS::next_observations_distrib_;
```



### variable observation\_model\_ 


```cpp
MappedMatrix<std::shared_ptr<State>, std::shared_ptr<Observation> > sdm::TabularObservationDynamicsS::observation_model_;
```



### variable successor\_observations\_ 


```cpp
std::unordered_map<std::shared_ptr<State>, std::set<std::shared_ptr<Observation> > > sdm::TabularObservationDynamicsS::successor_observations_;
```


## Protected Functions Documentation


### function updateNextObsDistribution 


```cpp
void sdm::TabularObservationDynamicsS::updateNextObsDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    const std::shared_ptr< Observation > & observation,
    double proba
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/dynamics/tabular_observation_dynamics_S.hpp`