
<NavBar active_item_id="2"/>

# Class sdm::SerializedOccupancyMDP

**template &lt;typename oState typename oState, typename oAction typename oAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md)



_An Serialized occupancy MDP is a subclass of continuous state MDP where states are seriliazed occupancy states and the resolution is serialized. In the general case, a Serialized occupancy state refers to the knowledge that a central planner can have access to take decisions at a precise agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._ [More...](#detailed-description)

* `#include <serialized_occupancy_mdp.hpp>`



Inherits the following classes: [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef oAction | [**action\_type**](classsdm_1_1SerializedOccupancyMDP.md#typedef-action-type)  <br> |
| typedef oState | [**state\_type**](classsdm_1_1SerializedOccupancyMDP.md#typedef-state-type)  <br> |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-serializedoccupancymdp-1-5) () <br> |
|   | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-serializedoccupancymdp-2-5) (std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; underlying\_dpomdp) <br> |
|   | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-serializedoccupancymdp-3-5) (std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; underlying\_dpomdp, [**number**](namespacesdm.md#typedef-number) hist\_length) <br> |
|   | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-serializedoccupancymdp-4-5) (std::string underlying\_dpomdp) <br> |
|   | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-serializedoccupancymdp-5-5) (std::string underlying\_dpomdp, [**number**](namespacesdm.md#typedef-number) hist\_length) <br> |
| virtual std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; oAction &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1SerializedOccupancyMDP.md#function-getactionspaceat) (const oState & state) <br>_Get the actions availables at a specific state._  |
|  double | [**getDiscount**](classsdm_1_1SerializedOccupancyMDP.md#function-getdiscount) (int t) const<br> |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SerializedOccupancyMDP.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; oState, oAction &gt; \* value\_function, const oState & state, const oAction & action, int t=0) const<br>_Get the expected next value._  |
| virtual oState | [**getInitialState**](classsdm_1_1SerializedOccupancyMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
| virtual double | [**getReward**](classsdm_1_1SerializedOccupancyMDP.md#function-getreward) (const oState & state, const oAction & action) const<br>_Get the reward at a given occupancy state and occupancy action._  |
|  oState & | [**getState**](classsdm_1_1SerializedOccupancyMDP.md#function-getstate) () <br> |
| virtual [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) \* | [**getUnderlyingProblem**](classsdm_1_1SerializedOccupancyMDP.md#function-getunderlyingproblem) () <br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
| virtual bool | [**isSerialized**](classsdm_1_1SerializedOccupancyMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
| virtual oState | [**nextState**](classsdm_1_1SerializedOccupancyMDP.md#function-nextstate) (const oState & state, const oAction & action, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; oState, oAction &gt; \* hsvi=nullptr) const<br>_Get the next occupancy state._  |
|  std::shared\_ptr&lt; [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md)&lt; [**SerializedBeliefState**](classsdm_1_1SerializedBeliefState.md), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. It corresponds to the reformulation of the original POMP in a MDP where the state space is the space of beliefs._  |
|  std::shared\_ptr&lt; [**SerializedMDP**](classsdm_1_1SerializedMDP.md)&lt;&gt; &gt; | [**toMDP**](classsdm_1_1SerializedOccupancyMDP.md#function-tomdp) () <br> |

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
|  oState | [**cstate\_**](classsdm_1_1SerializedOccupancyMDP.md#variable-cstate-)  <br> |
|  std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**dpomdp\_**](classsdm_1_1SerializedOccupancyMDP.md#variable-dpomdp-)  <br> |
|  oState | [**istate\_**](classsdm_1_1SerializedOccupancyMDP.md#variable-istate-)  <br> |








# Detailed Description




**Template parameters:**


* `oState` refers to an serialized occupancy state type 
* `oAction` refers to a occupancy action type 



    
## Public Types Documentation


### typedef action\_type 


```cpp
using sdm::SerializedOccupancyMDP< oState, oAction >::action_type =  oAction;
```



### typedef state\_type 


```cpp
using sdm::SerializedOccupancyMDP< oState, oAction >::state_type =  oState;
```


## Public Functions Documentation


### function SerializedOccupancyMDP [1/5]


```cpp
sdm::SerializedOccupancyMDP::SerializedOccupancyMDP () 
```



### function SerializedOccupancyMDP [2/5]


```cpp
sdm::SerializedOccupancyMDP::SerializedOccupancyMDP (
    std::shared_ptr< DiscreteDecPOMDP > underlying_dpomdp
) 
```



### function SerializedOccupancyMDP [3/5]


```cpp
sdm::SerializedOccupancyMDP::SerializedOccupancyMDP (
    std::shared_ptr< DiscreteDecPOMDP > underlying_dpomdp,
    number hist_length
) 
```



### function SerializedOccupancyMDP [4/5]


```cpp
sdm::SerializedOccupancyMDP::SerializedOccupancyMDP (
    std::string underlying_dpomdp
) 
```



### function SerializedOccupancyMDP [5/5]


```cpp
sdm::SerializedOccupancyMDP::SerializedOccupancyMDP (
    std::string underlying_dpomdp,
    number hist_length
) 
```



### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< DiscreteSpace < oAction > > sdm::SerializedOccupancyMDP::getActionSpaceAt (
    const oState & state
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the action space 




        
Implements [*sdm::SolvableByHSVI::getActionSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat)


### function getDiscount 


```cpp
double sdm::SerializedOccupancyMDP::getDiscount (
    int t
) const
```



### function getExpectedNextValue 


```cpp
virtual double sdm::SerializedOccupancyMDP::getExpectedNextValue (
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
virtual oState sdm::SerializedOccupancyMDP::getInitialState () 
```


Implements [*sdm::SolvableByHSVI::getInitialState*](classsdm_1_1SolvableByHSVI.md#function-getinitialstate)


### function getReward 


```cpp
virtual double sdm::SerializedOccupancyMDP::getReward (
    const oState & state,
    const oAction & action
) const
```


Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getState 


```cpp
oState & sdm::SerializedOccupancyMDP::getState () 
```



### function getUnderlyingProblem 


```cpp
virtual DiscreteDecPOMDP * sdm::SerializedOccupancyMDP::getUnderlyingProblem () 
```




**Returns:**

the underlying problem 




        
Implements [*sdm::SolvableByHSVI::getUnderlyingProblem*](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem)


### function isSerialized 


```cpp
virtual bool sdm::SerializedOccupancyMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::SolvableByHSVI::isSerialized*](classsdm_1_1SolvableByHSVI.md#function-isserialized)


### function nextState 


```cpp
virtual oState sdm::SerializedOccupancyMDP::nextState (
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
std::shared_ptr< SerializedBeliefMDP < SerializedBeliefState , number , number > > sdm::SerializedOccupancyMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< SerializedMDP <> > sdm::SerializedOccupancyMDP::toMDP () 
```


## Protected Attributes Documentation


### variable cstate\_ 


```cpp
oState sdm::SerializedOccupancyMDP< oState, oAction >::cstate_;
```



### variable dpomdp\_ 


```cpp
std::shared_ptr<DiscreteDecPOMDP> sdm::SerializedOccupancyMDP< oState, oAction >::dpomdp_;
```



### variable istate\_ 


```cpp
oState sdm::SerializedOccupancyMDP< oState, oAction >::istate_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/serialized_occupancy_mdp.hpp`