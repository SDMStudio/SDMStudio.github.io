
<NavBar active_item_id="2"/>

# Class sdm::BeliefMDP

**template &lt;typename TBelief typename TBelief, typename TAction typename TAction, typename TObservation typename TObservation&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BeliefMDP**](classsdm_1_1BeliefMDP.md)



_The_ [_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _class is the interface that enables solving Discret POMDP using_[_**HSVI**_](classsdm_1_1HSVI.md) _algorithm._[More...](#detailed-description)

* `#include <belief_mdp.hpp>`



Inherits the following classes: [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md),  [sdm::GymInterface](classsdm_1_1GymInterface.md)


Inherited by the following classes: [sdm::SerializedBeliefMDP](classsdm_1_1SerializedBeliefMDP.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef TAction | [**action\_type**](classsdm_1_1BeliefMDP.md#typedef-action-type)  <br> |
| typedef TObservation | [**observation\_type**](classsdm_1_1BeliefMDP.md#typedef-observation-type)  <br> |
| typedef TBelief | [**state\_type**](classsdm_1_1BeliefMDP.md#typedef-state-type)  <br> |












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BeliefMDP**](classsdm_1_1BeliefMDP.md#function-beliefmdp-1-3) () <br> |
|   | [**BeliefMDP**](classsdm_1_1BeliefMDP.md#function-beliefmdp-2-3) (std::shared\_ptr&lt; [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) &gt; underlying\_pomdp) <br> |
|   | [**BeliefMDP**](classsdm_1_1BeliefMDP.md#function-beliefmdp-3-3) (std::string underlying\_pomdp) <br> |
| virtual std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; TAction &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1BeliefMDP.md#function-getactionspaceat) (const TBelief & state=TBelief()) <br>_Get the actions availables at a specific state._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1BeliefMDP.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TBelief, TAction &gt; \* value\_function, const TBelief & state, const TAction & action, int t) const<br>_Get the expected next value._  |
| virtual TBelief | [**getInitialState**](classsdm_1_1BeliefMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
|  double | [**getObservationProbability**](classsdm_1_1BeliefMDP.md#function-getobservationprobability) (const TAction & action, const TObservation & obs, const TBelief & belief) const<br>_Get the Observation Probability p(o | b, a)_  |
| virtual double | [**getReward**](classsdm_1_1BeliefMDP.md#function-getreward) (const TBelief & state, const TAction & action) const<br>_Get the reward at a given occupancy state and occupancy action._  |
|  TBelief & | [**getState**](classsdm_1_1BeliefMDP.md#function-getstate) () <br> |
| virtual [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) \* | [**getUnderlyingProblem**](classsdm_1_1BeliefMDP.md#function-getunderlyingproblem) () <br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
| virtual bool | [**isSerialized**](classsdm_1_1BeliefMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
|  TBelief | [**nextState**](classsdm_1_1BeliefMDP.md#function-nextstate-1-2) (const TBelief & belief, const TAction & action, const TObservation & obs) const<br> |
| virtual TBelief | [**nextState**](classsdm_1_1BeliefMDP.md#function-nextstate-2-2) (const TBelief & state, const TAction & action, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; TBelief, TAction &gt; \* hsvi=nullptr) const<br>_Get the next occupancy state._  |
| virtual TBelief | [**reset**](classsdm_1_1BeliefMDP.md#function-reset) () <br> |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1BeliefMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. In this particular case, it will return the current MDP._  |
|  std::shared\_ptr&lt; [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**toMDP**](classsdm_1_1BeliefMDP.md#function-tomdp) () <br>_Get the corresponding Markov Decision Process. It corresponds to the reformulation of the Belief MDP in a MDP where the blief state space is the state space._  |

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

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
|   | [**GymInterface**](classsdm_1_1GymInterface.md#function-gyminterface-1-2) () <br> |
|   | [**GymInterface**](classsdm_1_1GymInterface.md#function-gyminterface-2-2) (std::shared\_ptr&lt; TObsSpace &gt;, std::shared\_ptr&lt; TActSpace &gt;) <br> |
|  std::shared\_ptr&lt; TActSpace &gt; | [**getActionSpace**](classsdm_1_1GymInterface.md#function-getactionspace) () const<br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**getObsSpace**](classsdm_1_1GymInterface.md#function-getobsspace) () const<br> |
| virtual [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type) | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br> |
|  std::tuple&lt; [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type), std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) ([**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type)) <br> |






## Protected Types inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| typedef typename TActSpace::value\_type | [**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type)  <br> |
| typedef typename TObsSpace::value\_type | [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type)  <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  TBelief | [**cstate\_**](classsdm_1_1BeliefMDP.md#variable-cstate-)  <br> |
|  TBelief | [**istate\_**](classsdm_1_1BeliefMDP.md#variable-istate-)  <br> |
|  std::shared\_ptr&lt; [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) &gt; | [**pomdp\_**](classsdm_1_1BeliefMDP.md#variable-pomdp-)  <br> |


## Protected Attributes inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; TActSpace &gt; | [**action\_space\_**](classsdm_1_1GymInterface.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**observation\_space\_**](classsdm_1_1GymInterface.md#variable-observation-space-)  <br> |










# Detailed Description




**Template parameters:**


* `TBelief` the belief type 
* `TAction` the action type 



    
## Public Types Documentation


### typedef action\_type 


```cpp
using sdm::BeliefMDP< TBelief, TAction, TObservation >::action_type =  TAction;
```



### typedef observation\_type 


```cpp
using sdm::BeliefMDP< TBelief, TAction, TObservation >::observation_type =  TObservation;
```



### typedef state\_type 


```cpp
using sdm::BeliefMDP< TBelief, TAction, TObservation >::state_type =  TBelief;
```


## Public Functions Documentation


### function BeliefMDP [1/3]


```cpp
sdm::BeliefMDP::BeliefMDP () 
```



### function BeliefMDP [2/3]


```cpp
sdm::BeliefMDP::BeliefMDP (
    std::shared_ptr< DiscretePOMDP > underlying_pomdp
) 
```



### function BeliefMDP [3/3]


```cpp
sdm::BeliefMDP::BeliefMDP (
    std::string underlying_pomdp
) 
```



### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< DiscreteSpace < TAction > > sdm::BeliefMDP::getActionSpaceAt (
    const TBelief & state=TBelief()
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the action space 




        
Implements [*sdm::SolvableByHSVI::getActionSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat)


### function getExpectedNextValue 


```cpp
virtual double sdm::BeliefMDP::getExpectedNextValue (
    ValueFunction < TBelief, TAction > * value_function,
    const TBelief & state,
    const TAction & action,
    int t
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
virtual TBelief sdm::BeliefMDP::getInitialState () 
```


Implements [*sdm::SolvableByHSVI::getInitialState*](classsdm_1_1SolvableByHSVI.md#function-getinitialstate)


### function getObservationProbability 


```cpp
double sdm::BeliefMDP::getObservationProbability (
    const TAction & action,
    const TObservation & obs,
    const TBelief & belief
) const
```



### function getReward 


```cpp
virtual double sdm::BeliefMDP::getReward (
    const TBelief & state,
    const TAction & action
) const
```


Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getState 


```cpp
TBelief & sdm::BeliefMDP::getState () 
```



### function getUnderlyingProblem 


```cpp
virtual DiscretePOMDP * sdm::BeliefMDP::getUnderlyingProblem () 
```




**Returns:**

the underlying problem 




        
Implements [*sdm::SolvableByHSVI::getUnderlyingProblem*](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem)


### function isSerialized 


```cpp
virtual bool sdm::BeliefMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::SolvableByHSVI::isSerialized*](classsdm_1_1SolvableByHSVI.md#function-isserialized)


### function nextState [1/2]


```cpp
TBelief sdm::BeliefMDP::nextState (
    const TBelief & belief,
    const TAction & action,
    const TObservation & obs
) const
```



### function nextState [2/2]


```cpp
virtual TBelief sdm::BeliefMDP::nextState (
    const TBelief & state,
    const TAction & action,
    int t=0,
    HSVI < TBelief, TAction > * hsvi=nullptr
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


### function reset 


```cpp
virtual TBelief sdm::BeliefMDP::reset () 
```


Implements [*sdm::GymInterface::reset*](classsdm_1_1GymInterface.md#function-reset)


### function toBeliefMDP 


```cpp
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::BeliefMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< DiscreteMDP > sdm::BeliefMDP::toMDP () 
```




**Returns:**

a belief MDP 




        
## Protected Attributes Documentation


### variable cstate\_ 


```cpp
TBelief sdm::BeliefMDP< TBelief, TAction, TObservation >::cstate_;
```



### variable istate\_ 


```cpp
TBelief sdm::BeliefMDP< TBelief, TAction, TObservation >::istate_;
```



### variable pomdp\_ 


```cpp
std::shared_ptr<DiscretePOMDP> sdm::BeliefMDP< TBelief, TAction, TObservation >::pomdp_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/belief_mdp.hpp`