
<NavBar active_item_id="2"/>

# Class sdm::StateDynamics


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StateDynamics**](classsdm_1_1StateDynamics.md)



_This class provide quick accessors to transition probability distributions._ 

* `#include <state_dynamics.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StateDynamics**](classsdm_1_1StateDynamics.md#function-statedynamics-1-3) () <br> |
|   | [**StateDynamics**](classsdm_1_1StateDynamics.md#function-statedynamics-2-3) ([**StateDynamics**](classsdm_1_1StateDynamics.md) & copy) <br> |
|   | [**StateDynamics**](classsdm_1_1StateDynamics.md#function-statedynamics-3-3) ([**number**](namespacesdm.md#typedef-number) num\_actions, [**number**](namespacesdm.md#typedef-number) num\_states) <br>_Construct a new State Dynamics object._  |
|  const std::unordered\_set&lt; [**state**](namespacesdm.md#typedef-state) &gt; & | [**getStateSuccessors**](classsdm_1_1StateDynamics.md#function-getstatesuccessors) ([**number**](namespacesdm.md#typedef-number) x, [**number**](namespacesdm.md#typedef-number) u) <br> |
|  double | [**getTransitionProbability**](classsdm_1_1StateDynamics.md#function-gettransitionprobability) ([**number**](namespacesdm.md#typedef-number) x, [**number**](namespacesdm.md#typedef-number) u, [**number**](namespacesdm.md#typedef-number) y) const<br>_Get the transition probability on one point._  |
|  std::vector&lt; Matrix &gt; | [**getTransitions**](classsdm_1_1StateDynamics.md#function-gettransitions-1-2) () <br>_Sets probability transitions._  |
|  const Matrix & | [**getTransitions**](classsdm_1_1StateDynamics.md#function-gettransitions-2-2) ([**number**](namespacesdm.md#typedef-number) u) <br>_Returns matrix of probability transitions for the pre-defined action._  |
|  void | [**initDynamics**](classsdm_1_1StateDynamics.md#function-initdynamics) ([**number**](namespacesdm.md#typedef-number) num\_actions, [**number**](namespacesdm.md#typedef-number) num\_states) <br>_Initialize the dynamics model._  |
|  void | [**setTransitionProbability**](classsdm_1_1StateDynamics.md#function-settransitionprobability) ([**number**](namespacesdm.md#typedef-number) x, [**number**](namespacesdm.md#typedef-number) u, [**number**](namespacesdm.md#typedef-number) y, double p, bool cumul=false) <br>_Set the transition probability on one point._  |
|  void | [**setTransitions**](classsdm_1_1StateDynamics.md#function-settransitions) (const std::vector&lt; Matrix &gt; & t\_model) <br>_Sets probability transitions._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; [**state**](namespacesdm.md#typedef-state), std::unordered\_map&lt; [**action**](namespacesdm.md#typedef-action), std::unordered\_set&lt; [**state**](namespacesdm.md#typedef-state) &gt; &gt; &gt; | [**successor\_states**](classsdm_1_1StateDynamics.md#variable-successor-states)  <br>_map from state, action pairs to set of next states_  |
|  std::vector&lt; Matrix &gt; | [**t\_model**](classsdm_1_1StateDynamics.md#variable-t-model)  <br>_transition and observation matrices_  |




## Public Functions Documentation


### function StateDynamics [1/3]


```cpp
sdm::StateDynamics::StateDynamics () 
```



### function StateDynamics [2/3]


```cpp
sdm::StateDynamics::StateDynamics (
    StateDynamics & copy
) 
```



### function StateDynamics [3/3]


```cpp
sdm::StateDynamics::StateDynamics (
    number num_actions,
    number num_states
) 
```




**Parameters:**


* `num_actions` Number of (joint) action 
* `num_states` Number of states 



        

### function getStateSuccessors 


```cpp
const std::unordered_set< state > & sdm::StateDynamics::getStateSuccessors (
    number x,
    number u
) 
```




**Parameters:**


* `x` 
* `u` 



**Returns:**

const std::unordered\_set&lt;state&gt;& 




        

### function getTransitionProbability 


```cpp
double sdm::StateDynamics::getTransitionProbability (
    number x,
    number u,
    number y
) const
```




**Parameters:**


* `x` A specific state (the state at timestep t) 
* `u` A specific (joint) action 
* `y` A specific state (the state at timestep t+1) 



**Returns:**

the transition probability 




        

### function getTransitions [1/2]


```cpp
std::vector< Matrix > sdm::StateDynamics::getTransitions () 
```




**Parameters:**


* `t_model` matrices of transitions, one for each (joint) action. 



        

### function getTransitions [2/2]


```cpp
const Matrix & sdm::StateDynamics::getTransitions (
    number u
) 
```




**Parameters:**


* `u` A specific (joint) action 



        

### function initDynamics 


```cpp
void sdm::StateDynamics::initDynamics (
    number num_actions,
    number num_states
) 
```




**Parameters:**


* `num_actions` Number of (joint) actions 
* `num_states` Number of states 



        

### function setTransitionProbability 


```cpp
void sdm::StateDynamics::setTransitionProbability (
    number x,
    number u,
    number y,
    double p,
    bool cumul=false
) 
```




**Parameters:**


* `x` A specific state (the state at timestep t) 
* `u` A specific (joint) action 
* `y` A specific state (the state at timestep t+1) 
* `double` probability of the transition 
* `bool` whether or not we cumulate probabilities. 



        

### function setTransitions 


```cpp
void sdm::StateDynamics::setTransitions (
    const std::vector< Matrix > & t_model
) 
```




**Parameters:**


* `t_model` matrices of transitions, one for each (joint) action. 



        
## Protected Attributes Documentation


### variable successor\_states 


```cpp
std::unordered_map<state, std::unordered_map<action, std::unordered_set<state> > > sdm::StateDynamics::successor_states;
```



### variable t\_model 


```cpp
std::vector<Matrix> sdm::StateDynamics::t_model;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state_dynamics.hpp`