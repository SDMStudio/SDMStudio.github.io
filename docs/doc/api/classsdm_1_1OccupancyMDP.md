
<NavBar active_item_id="2"/>

# Class sdm::OccupancyMDP

**template &lt;typename oState, typename oAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md)



_An occupancy MDP is a subclass of continuous state MDP where states are occupancy states. In the general case, an occupancy state refers to the whole knowledge that a central planner can have access to take decisions. But in this implementation we call occupancy state are distribution over state and joint histories ._ [More...](#detailed-description)

* `#include <occupancy_mdp.hpp>`



Inherits the following classes: [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef oAction | [**action\_type**](classsdm_1_1OccupancyMDP.md#typedef-action-type)  <br> |
| typedef oState | [**state\_type**](classsdm_1_1OccupancyMDP.md#typedef-state-type)  <br> |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md#function-occupancymdp-1-5) () <br> |
|   | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md#function-occupancymdp-2-5) (std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; underlying\_dpomdp) <br> |
|   | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md#function-occupancymdp-3-5) (std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; underlying\_dpomdp, [**number**](namespacesdm.md#typedef-number) hist\_length) <br> |
|   | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md#function-occupancymdp-4-5) (std::string underlying\_dpomdp) <br> |
|   | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md#function-occupancymdp-5-5) (std::string underlying\_dpomdp, [**number**](namespacesdm.md#typedef-number) hist\_length) <br> |
| virtual std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; oAction &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1OccupancyMDP.md#function-getactionspaceat) (const oState & state) <br>_Get the actions availables at a specific state._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1OccupancyMDP.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; oState, oAction &gt; \* value\_function, const oState & state, const oAction & action, int t=0) const<br>_Get the expected next value._  |
| virtual oState | [**getInitialState**](classsdm_1_1OccupancyMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
| virtual double | [**getReward**](classsdm_1_1OccupancyMDP.md#function-getreward) (const oState & state, const oAction & action) const<br>_Get the reward at a given occupancy state and occupancy action._  |
|  oState & | [**getState**](classsdm_1_1OccupancyMDP.md#function-getstate) () <br> |
| virtual [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) \* | [**getUnderlyingProblem**](classsdm_1_1OccupancyMDP.md#function-getunderlyingproblem) () <br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
| virtual bool | [**isSerialized**](classsdm_1_1OccupancyMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
| virtual oState | [**nextState**](classsdm_1_1OccupancyMDP.md#function-nextstate) (const oState & state, const oAction & action, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; oState, oAction &gt; \* hsvi=nullptr) const<br>_Get the next occupancy state._  |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1OccupancyMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. Unfortunately, in this situation it isn't possible to transform a MMDP to a belief MDP._  |
|  std::shared\_ptr&lt; [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**toMDP**](classsdm_1_1OccupancyMDP.md#function-tomdp) () <br> |

## Public Functions inherited from sdm::SolvableByHSVI

See [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md)

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







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  oState | [**cstate\_**](classsdm_1_1OccupancyMDP.md#variable-cstate-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**dpomdp\_**](classsdm_1_1OccupancyMDP.md#variable-dpomdp-)  <br> |
|  oState | [**istate\_**](classsdm_1_1OccupancyMDP.md#variable-istate-)  <br> |








# Detailed Description




**Template parameters:**


* `oState` the occupancy state type 
* `oAction` the occupancy action type 



    
## Public Types Documentation


### typedef action\_type 


```cpp
using sdm::OccupancyMDP< oState, oAction >::action_type =  oAction;
```



### typedef state\_type 


```cpp
using sdm::OccupancyMDP< oState, oAction >::state_type =  oState;
```


## Public Functions Documentation


### function OccupancyMDP [1/5]


```cpp
sdm::OccupancyMDP::OccupancyMDP () 
```



### function OccupancyMDP [2/5]


```cpp
sdm::OccupancyMDP::OccupancyMDP (
    std::shared_ptr< DiscreteDecPOMDP > underlying_dpomdp
) 
```



### function OccupancyMDP [3/5]


```cpp
sdm::OccupancyMDP::OccupancyMDP (
    std::shared_ptr< DiscreteDecPOMDP > underlying_dpomdp,
    number hist_length
) 
```



### function OccupancyMDP [4/5]


```cpp
sdm::OccupancyMDP::OccupancyMDP (
    std::string underlying_dpomdp
) 
```



### function OccupancyMDP [5/5]


```cpp
sdm::OccupancyMDP::OccupancyMDP (
    std::string underlying_dpomdp,
    number hist_length
) 
```



### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< DiscreteSpace < oAction > > sdm::OccupancyMDP::getActionSpaceAt (
    const oState & state
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the action space 




        
Implements [*sdm::SolvableByHSVI::getActionSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat)


### function getExpectedNextValue 


```cpp
virtual double sdm::OccupancyMDP::getExpectedNextValue (
    ValueFunction < oState, oAction > * value_function,
    const oState & state,
    const oAction & action,
    int t=0
) const
```




**Parameters:**


* `value_function` a pointer on the value function to use to perform the calculus. 
* `state` the state on which to evaluate the next expected value \* 
* `action` 
* `t` 



**Returns:**

double 




        
Implements [*sdm::SolvableByHSVI::getExpectedNextValue*](classsdm_1_1SolvableByHSVI.md#function-getexpectednextvalue)


### function getInitialState 


```cpp
virtual oState sdm::OccupancyMDP::getInitialState () 
```


Implements [*sdm::SolvableByHSVI::getInitialState*](classsdm_1_1SolvableByHSVI.md#function-getinitialstate)


### function getReward 


```cpp
virtual double sdm::OccupancyMDP::getReward (
    const oState & state,
    const oAction & action
) const
```


Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getState 


```cpp
oState & sdm::OccupancyMDP::getState () 
```



### function getUnderlyingProblem 


```cpp
virtual DiscreteDecPOMDP * sdm::OccupancyMDP::getUnderlyingProblem () 
```




**Returns:**

the underlying problem 




        
Implements [*sdm::SolvableByHSVI::getUnderlyingProblem*](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem)


### function isSerialized 


```cpp
virtual bool sdm::OccupancyMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::SolvableByHSVI::isSerialized*](classsdm_1_1SolvableByHSVI.md#function-isserialized)


### function nextState 


```cpp
virtual oState sdm::OccupancyMDP::nextState (
    const oState & state,
    const oAction & action,
    int t=0,
    HSVI < oState, oAction > * hsvi=nullptr
) const
```




**Parameters:**


* `state` the occupancy state 
* `action` the action state 
* `t` the timestep 
* `hsvi` a pointer on the algorithm that makes the call 



**Returns:**

the next occupancy state 




        
Implements [*sdm::SolvableByHSVI::nextState*](classsdm_1_1SolvableByHSVI.md#function-nextstate)


### function toBeliefMDP 


```cpp
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::OccupancyMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< DiscreteMDP > sdm::OccupancyMDP::toMDP () 
```


## Protected Attributes Documentation


### variable cstate\_ 


```cpp
oState sdm::OccupancyMDP< oState, oAction >::cstate_;
```



### variable dpomdp\_ 


```cpp
std::shared_ptr<DiscreteDecPOMDP> sdm::OccupancyMDP< oState, oAction >::dpomdp_;
```



### variable istate\_ 


```cpp
oState sdm::OccupancyMDP< oState, oAction >::istate_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/occupancy_mdp.hpp`