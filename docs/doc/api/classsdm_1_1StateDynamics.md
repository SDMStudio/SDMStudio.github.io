
<NavBar active_item_id="2"/>

# Class sdm::StateDynamics


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StateDynamics**](classsdm_1_1StateDynamics.md)





* `#include <state_dynamics.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StateDynamics**](classsdm_1_1StateDynamics.md#function-statedynamics-1-2) () <br> |
|   | [**StateDynamics**](classsdm_1_1StateDynamics.md#function-statedynamics-2-2) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number)) <br>_Instantiate a transition model._  |
|  const std::unordered\_set&lt; [**state**](namespacesdm.md#typedef-state) &gt; & | [**getStateSuccessors**](classsdm_1_1StateDynamics.md#function-getstatesuccessors) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number)) <br>_Returns set of possible next states._  |
|  double | [**getTransitionProbability**](classsdm_1_1StateDynamics.md#function-gettransitionprobability) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number)) const<br>_Get transition probability._  |
|  const Matrix & | [**getTransitions**](classsdm_1_1StateDynamics.md#function-gettransitions) ([**number**](namespacesdm.md#typedef-number)) <br>_Returns matrix of probability transitions for the pre-defined action._  |
|  void | [**initDynamics**](classsdm_1_1StateDynamics.md#function-initdynamics) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number)) <br>_Inits the dynamics model._  |
|  void | [**setTransitionProbability**](classsdm_1_1StateDynamics.md#function-settransitionprobability) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number), double, bool=false) <br> |
|  void | [**setTransitions**](classsdm_1_1StateDynamics.md#function-settransitions) (const std::vector&lt; Matrix &gt; &) <br>_Sets probability transitions._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; [**state**](namespacesdm.md#typedef-state), std::unordered\_map&lt; [**action**](namespacesdm.md#typedef-action), std::unordered\_set&lt; [**state**](namespacesdm.md#typedef-state) &gt; &gt; &gt; | [**successor\_states**](classsdm_1_1StateDynamics.md#variable-successor-states)  <br>_map from state, action pairs to set of next states_  |
|  std::vector&lt; Matrix &gt; | [**t\_model**](classsdm_1_1StateDynamics.md#variable-t-model)  <br>_transition and observation matrices_  |




## Public Functions Documentation


### function StateDynamics [1/2]


```cpp
sdm::StateDynamics::StateDynamics () 
```



### function StateDynamics [2/2]


```cpp
sdm::StateDynamics::StateDynamics (
    number,
    number
) 
```




**Parameters:**


* `num_jactions` Number of joint actions 
* `num_states` Number of states 



        

### function getStateSuccessors 


```cpp
const std::unordered_set< state > & sdm::StateDynamics::getStateSuccessors (
    number,
    number
) 
```




**Parameters:**


* `x` A specific state 
* `jaction` A specific joint actioon 



**Returns:**

const std::unordered\_set&lt;state&gt;& 




        

### function getTransitionProbability 


```cpp
double sdm::StateDynamics::getTransitionProbability (
    number,
    number,
    number
) const
```




**Parameters:**


* `x` A specific state (the state at timestep t) 
* `jaction` A specific joint actioon 
* `y` A specific state (the state at timestep t+1) 



**Returns:**

the transition probability 




        

### function getTransitions 


```cpp
const Matrix & sdm::StateDynamics::getTransitions (
    number
) 
```




**Parameters:**


* `jaction` A specific joint action 



        

### function initDynamics 


```cpp
void sdm::StateDynamics::initDynamics (
    number,
    number
) 
```




**Parameters:**


* `num_jactions` Number of joint actions 
* `num_states` Number of states 



        

### function setTransitionProbability 


```cpp
void sdm::StateDynamics::setTransitionProbability (
    number,
    number,
    number,
    double,
    bool=false
) 
```




**Parameters:**


* `x` A specific state (the state at timestep t) 
* `jaction` A specific joint action 
* `y` A specific state (the state at timestep t+1) 
* `double` probability of the transition 
* `bool` whether or not we cumulate probabilities. 



        

### function setTransitions 


```cpp
void sdm::StateDynamics::setTransitions (
    const std::vector< Matrix > &
) 
```




**Parameters:**


* `t_model` matrices of transitions, one for each action. 



        
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
The documentation for this class was generated from the following file `src/sdm/core/state_dynamics.hpp`