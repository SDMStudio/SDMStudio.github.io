
<NavBar active_item_id="2"/>

# Class sdm::SerializedMDP

**template &lt;typename oState typename oState, typename oAction typename oAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedMDP**](classsdm_1_1SerializedMDP.md)



_An Serialized MDP is a subclass of MDP where states are serialized states. In the general case, a serialized state refers to the whole knowledge that a central planner can have access to take decisions at the time step of an precise agent._ [More...](#detailed-description)

* `#include <serialized_mdp.hpp>`



Inherits the following classes: [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md),  std::enable_shared_from_this< SerializedMDP< oState, oAction > >








## Public Types

| Type | Name |
| ---: | :--- |
| typedef oAction | [**action\_type**](classsdm_1_1SerializedMDP.md#typedef-action-type)  <br> |
| typedef oState | [**state\_type**](classsdm_1_1SerializedMDP.md#typedef-state-type)  <br> |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedMDP**](classsdm_1_1SerializedMDP.md#function-serializedmdp-1-2) (std::shared\_ptr&lt; [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) &gt; underlying\_mmdp) <br> |
|   | [**SerializedMDP**](classsdm_1_1SerializedMDP.md#function-serializedmdp-2-2) (std::string underlying\_mmdp) <br> |
| virtual std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; oAction &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1SerializedMDP.md#function-getactionspaceat) (const oState & state) <br>_Get the actions availables at a specific state._  |
|  double | [**getDiscount**](classsdm_1_1SerializedMDP.md#function-getdiscount) (int t) const<br> |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SerializedMDP.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; oState, oAction &gt; \* value\_function, const oState & state, const oAction & action, int t=0) const<br>_Get the expected next value._  |
| virtual oState | [**getInitialState**](classsdm_1_1SerializedMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
| virtual double | [**getReward**](classsdm_1_1SerializedMDP.md#function-getreward) (const oState & state, const oAction & action) const<br>_Get the reward at a given occupancy state and occupancy action._  |
|  oState & | [**getState**](classsdm_1_1SerializedMDP.md#function-getstate) () <br> |
| virtual [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) \* | [**getUnderlyingProblem**](classsdm_1_1SerializedMDP.md#function-getunderlyingproblem) () <br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
|  std::shared\_ptr&lt; [**SerializedMDP**](classsdm_1_1SerializedMDP.md) &gt; | [**getptr**](classsdm_1_1SerializedMDP.md#function-getptr) () <br> |
| virtual bool | [**isSerialized**](classsdm_1_1SerializedMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
| virtual oState | [**nextState**](classsdm_1_1SerializedMDP.md#function-nextstate) (const oState & state, const oAction & action, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; oState, oAction &gt; \* hsvi=nullptr) const<br>_Get the next occupancy state._  |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1SerializedMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. Unfortunately, in this situation it isn't possible to transform a MMDP to a belief MDP._  |
|  std::shared\_ptr&lt; [**SerializedMDP**](classsdm_1_1SerializedMDP.md) &gt; | [**toMDP**](classsdm_1_1SerializedMDP.md#function-tomdp) () <br> |

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
|  std::shared\_ptr&lt; [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) &gt; | [**mmdp\_**](classsdm_1_1SerializedMDP.md#variable-mmdp-)  <br> |








# Detailed Description




**Template parameters:**


* `oState` refer to the serialized state type 
* `oAction` refer to the number type 



    
## Public Types Documentation


### typedef action\_type 


```cpp
using sdm::SerializedMDP< oState, oAction >::action_type =  oAction;
```



### typedef state\_type 


```cpp
using sdm::SerializedMDP< oState, oAction >::state_type =  oState;
```


## Public Functions Documentation


### function SerializedMDP [1/2]


```cpp
sdm::SerializedMDP::SerializedMDP (
    std::shared_ptr< DiscreteMMDP > underlying_mmdp
) 
```



### function SerializedMDP [2/2]


```cpp
sdm::SerializedMDP::SerializedMDP (
    std::string underlying_mmdp
) 
```



### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< DiscreteSpace < oAction > > sdm::SerializedMDP::getActionSpaceAt (
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
double sdm::SerializedMDP::getDiscount (
    int t
) const
```



### function getExpectedNextValue 


```cpp
virtual double sdm::SerializedMDP::getExpectedNextValue (
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
virtual oState sdm::SerializedMDP::getInitialState () 
```


Implements [*sdm::SolvableByHSVI::getInitialState*](classsdm_1_1SolvableByHSVI.md#function-getinitialstate)


### function getReward 


```cpp
virtual double sdm::SerializedMDP::getReward (
    const oState & state,
    const oAction & action
) const
```


Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getState 


```cpp
oState & sdm::SerializedMDP::getState () 
```



### function getUnderlyingProblem 


```cpp
virtual DiscreteMMDP * sdm::SerializedMDP::getUnderlyingProblem () 
```




**Returns:**

the underlying problem 




        
Implements [*sdm::SolvableByHSVI::getUnderlyingProblem*](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem)


### function getptr 


```cpp
std::shared_ptr< SerializedMDP > sdm::SerializedMDP::getptr () 
```



### function isSerialized 


```cpp
virtual bool sdm::SerializedMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::SolvableByHSVI::isSerialized*](classsdm_1_1SolvableByHSVI.md#function-isserialized)


### function nextState 


```cpp
virtual oState sdm::SerializedMDP::nextState (
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
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::SerializedMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< SerializedMDP > sdm::SerializedMDP::toMDP () 
```


## Protected Attributes Documentation


### variable mmdp\_ 


```cpp
std::shared_ptr<DiscreteMMDP> sdm::SerializedMDP< oState, oAction >::mmdp_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/serialized_mdp.hpp`