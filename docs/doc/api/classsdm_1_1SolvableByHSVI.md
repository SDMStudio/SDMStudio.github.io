
<NavBar active_item_id="2"/>

# Class sdm::SolvableByHSVI

**template &lt;typename TState, typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)



_Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._[More...](#detailed-description)

* `#include <types.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TAction &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat) (const TState & state) = 0<br>_Get the actions availables at a specific state._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SolvableByHSVI.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* value\_function, const TState & state, const TAction & action, int t=0) const = 0<br>_Get the expected next value._  |
| virtual TState | [**getInitialState**](classsdm_1_1SolvableByHSVI.md#function-getinitialstate) () = 0<br>_Get the initial state._  |
| virtual double | [**getReward**](classsdm_1_1SolvableByHSVI.md#function-getreward) (const TState & state, const TAction & action) const = 0<br>_Get the reward at a given occupancy state and occupancy action._  |
| virtual [**WorldType**](structsdm_1_1WorldType.md)&lt; TState, TAction &gt;::underlying\_problem\_type \* | [**getUnderlyingProblem**](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem) () = 0<br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
| virtual bool | [**isSerialized**](classsdm_1_1SolvableByHSVI.md#function-isserialized) () const = 0<br>_Check if the problem is serialized._  |
| virtual TState | [**nextState**](classsdm_1_1SolvableByHSVI.md#function-nextstate) (const TState & state, const TAction & action, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; TState, TAction &gt; \* hsvi=nullptr) const = 0<br>_Get the next occupancy state._  |
| virtual  | [**~SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md#function-solvablebyhsvi) () <br> |








# Detailed Description




**Template parameters:**


* `TState` The state type 
* `TAction` The action type 



    
## Public Functions Documentation


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< DiscreteSpace < TAction > > sdm::SolvableByHSVI::getActionSpaceAt (
    const TState & state
) = 0
```




**Parameters:**


* `state` the state 



**Returns:**

the action space 




        

### function getExpectedNextValue 


```cpp
virtual double sdm::SolvableByHSVI::getExpectedNextValue (
    ValueFunction < TState, TAction > * value_function,
    const TState & state,
    const TAction & action,
    int t=0
) const = 0
```




**Parameters:**


* `value_function` a pointer on the value function to use to perform the calculus. 
* `state` the state on which to evaluate the next expected value \* 
* `action` 
* `t` 



**Returns:**

double 




        

### function getInitialState 


```cpp
virtual TState sdm::SolvableByHSVI::getInitialState () = 0
```



### function getReward 


```cpp
virtual double sdm::SolvableByHSVI::getReward (
    const TState & state,
    const TAction & action
) const = 0
```



### function getUnderlyingProblem 


```cpp
virtual WorldType < TState, TAction >::underlying_problem_type * sdm::SolvableByHSVI::getUnderlyingProblem () = 0
```




**Returns:**

the underlying problem 




        

### function isSerialized 


```cpp
virtual bool sdm::SolvableByHSVI::isSerialized () const = 0
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        

### function nextState 


```cpp
virtual TState sdm::SolvableByHSVI::nextState (
    const TState & state,
    const TAction & action,
    int t=0,
    HSVI < TState, TAction > * hsvi=nullptr
) const = 0
```




**Parameters:**


* `state` the occupancy state 
* `action` the action state 
* `t` the timestep 
* `hsvi` a pointer on the algorithm that makes the call 



**Returns:**

the next occupancy state 




        

### function ~SolvableByHSVI 


```cpp
inline virtual sdm::SolvableByHSVI::~SolvableByHSVI () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/types.hpp`