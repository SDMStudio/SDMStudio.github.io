
# Class sdm::TabularStateDynamics

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md)



_Tabular representation for the state dynamics._ [More...](#detailed-description)

* `#include <tabular_state_dynamics.hpp>`



Inherits the following classes: [sdm::StateDynamicsInterface](classsdm_1_1StateDynamicsInterface.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**MappedMatrix**](classsdm_1_1MappedMatrix.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**value\_type**](classsdm_1_1TabularStateDynamics.md#typedef-value-type) &gt; | [**matrix\_type**](classsdm_1_1TabularStateDynamics.md#typedef-matrix-type)  <br> |
| typedef double | [**value\_type**](classsdm_1_1TabularStateDynamics.md#typedef-value-type)  <br> |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md#function-tabularstatedynamics-1-2) () <br> |
|   | [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md#function-tabularstatedynamics-2-2) (const [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) & copy) <br> |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getNextStateDistribution**](classsdm_1_1TabularStateDynamics.md#function-getnextstatedistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the distribution over next state (given current state and action)_  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1TabularStateDynamics.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the list of all reachable states._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1TabularStateDynamics.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the transition probability on one point._  |
|  void | [**setReachablesStates**](classsdm_1_1TabularStateDynamics.md#function-setreachablesstates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Create the Reachable_ [_**State**_](classsdm_1_1State.md) _, i.e. a state and an action will be associated with a next\_state._ |
|  void | [**setTransitionProbability**](classsdm_1_1TabularStateDynamics.md#function-settransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, double proba, [**number**](namespacesdm.md#typedef-number) t=0, bool cumul=false) <br>[_**Set**_](structsdm_1_1Set.md) _the transition probability on one point._ |
| virtual  | [**~TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md#function-tabularstatedynamics) () <br> |

## Public Functions inherited from sdm::StateDynamicsInterface

See [sdm::StateDynamicsInterface](classsdm_1_1StateDynamicsInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getNextStateDistribution**](classsdm_1_1StateDynamicsInterface.md#function-getnextstatedistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the distribution over next states._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1StateDynamicsInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states from a state given a specific action._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1StateDynamicsInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the state transition probability (i.e. p(s' | s, a))._  |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::unordered\_map&lt; std::shared\_ptr&lt; Action &gt;, std::shared\_ptr&lt; [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; &gt; &gt; | [**next\_states\_distrib**](classsdm_1_1TabularStateDynamics.md#variable-next-states-distrib)  <br>_map from state, action pairs to the distribution over next states_  |
|  std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::unordered\_map&lt; std::shared\_ptr&lt; Action &gt;, std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; &gt; | [**successor\_states**](classsdm_1_1TabularStateDynamics.md#variable-successor-states)  <br>_map from state, action pairs to set of next states_  |
|  std::unordered\_map&lt; std::shared\_ptr&lt; Action &gt;, [**matrix\_type**](classsdm_1_1TabularStateDynamics.md#typedef-matrix-type) &gt; | [**t\_model**](classsdm_1_1TabularStateDynamics.md#variable-t-model)  <br>_transition and observation matrices_  |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**updateNextStateDistribution**](classsdm_1_1TabularStateDynamics.md#function-updatenextstatedistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, double proba) <br> |




# Detailed Description


The class is optimized to provide a constant time access to all transition probabilities and reachable states. 

    
## Public Types Documentation


### typedef matrix\_type 


```cpp
using sdm::TabularStateDynamics::matrix_type =  MappedMatrix<std::shared_ptr<State>, std::shared_ptr<State>, value_type>;
```



### typedef value\_type 


```cpp
using sdm::TabularStateDynamics::value_type =  double;
```


## Public Functions Documentation


### function TabularStateDynamics [1/2]


```cpp
sdm::TabularStateDynamics::TabularStateDynamics () 
```



### function TabularStateDynamics [2/2]


```cpp
sdm::TabularStateDynamics::TabularStateDynamics (
    const TabularStateDynamics & copy
) 
```



### function getNextStateDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::TabularStateDynamics::getNextStateDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```




**Parameters:**


* `state` the current state 
* `action` the action 
* `t` the timestep 



**Returns:**

std::shared\_ptr&lt;[**Distribution**](classsdm_1_1Distribution.md)&lt;std::shared\_ptr&lt;State&gt;&gt;&gt; 




        
Implements [*sdm::StateDynamicsInterface::getNextStateDistribution*](classsdm_1_1StateDynamicsInterface.md#function-getnextstatedistribution)


### function getReachableStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::TabularStateDynamics::getReachableStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```




**Parameters:**


* `state` the current state 
* `action` the current action 



**Returns:**

the list of accessible states 




        
Implements [*sdm::StateDynamicsInterface::getReachableStates*](classsdm_1_1StateDynamicsInterface.md#function-getreachablestates)


### function getTransitionProbability 


```cpp
virtual double sdm::TabularStateDynamics::getTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) const
```




**Parameters:**


* `state` A specific state (the state at timestep t) 
* `action` A specific (joint) action 
* `next_state` A specific state (the state at timestep t+1) 



**Returns:**

the transition probability 




        
Implements [*sdm::StateDynamicsInterface::getTransitionProbability*](classsdm_1_1StateDynamicsInterface.md#function-gettransitionprobability)


### function setReachablesStates 


```cpp
void sdm::TabularStateDynamics::setReachablesStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) 
```




**Parameters:**


* `state` A specific state (the state at timestep t) 
* `action` A specific action 
* `next_state` A specific state (the state at timestep t+1) 
* `t` Timestep t 



        

### function setTransitionProbability 


```cpp
void sdm::TabularStateDynamics::setTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    double proba,
    number t=0,
    bool cumul=false
) 
```




**Parameters:**


* `state` A specific state (the state at timestep t) 
* `action` A specific (joint) action 
* `next_state` A specific state (the state at timestep t+1) 
* `proba` probability of the transition 
* `cumul` whether or not we cumulate probabilities. 



        

### function ~TabularStateDynamics 


```cpp
virtual sdm::TabularStateDynamics::~TabularStateDynamics () 
```


## Protected Attributes Documentation


### variable next\_states\_distrib 


```cpp
std::unordered_map<std::shared_ptr<State>, std::unordered_map<std::shared_ptr<Action>, std::shared_ptr<DiscreteDistribution<std::shared_ptr<State> > > > > sdm::TabularStateDynamics::next_states_distrib;
```



### variable successor\_states 


```cpp
std::unordered_map<std::shared_ptr<State>, std::unordered_map<std::shared_ptr<Action>, std::set<std::shared_ptr<State> > > > sdm::TabularStateDynamics::successor_states;
```



### variable t\_model 


```cpp
std::unordered_map<std::shared_ptr<Action>, matrix_type> sdm::TabularStateDynamics::t_model;
```


## Protected Functions Documentation


### function updateNextStateDistribution 


```cpp
void sdm::TabularStateDynamics::updateNextStateDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    double proba
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/dynamics/tabular_state_dynamics.hpp`