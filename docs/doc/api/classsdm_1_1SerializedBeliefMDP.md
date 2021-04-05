
<NavBar active_item_id="2"/>

# Class sdm::SerializedBeliefMDP

**template &lt;typename TBelief typename TBelief, typename TAction typename TAction, typename TObservation typename TObservation&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md)



_An Serialized MDP is a subclass of POMDP where belief are serialized beliefs. In the general case, a serialized belief refers to the whole knowledge that a central planner can have access to take decisions at the time step of a precise agent._ [More...](#detailed-description)

* `#include <serialized_belief_mdp.hpp>`



Inherits the following classes: [sdm::BeliefMDP](classsdm_1_1BeliefMDP.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef oAction | [**action\_type**](classsdm_1_1SerializedBeliefMDP.md#typedef-action-type)  <br> |
| typedef oState | [**state\_type**](classsdm_1_1SerializedBeliefMDP.md#typedef-state-type)  <br> |

## Public Types inherited from sdm::BeliefMDP

See [sdm::BeliefMDP](classsdm_1_1BeliefMDP.md)

| Type | Name |
| ---: | :--- |
| typedef TAction | [**action\_type**](classsdm_1_1BeliefMDP.md#typedef-action-type)  <br> |
| typedef TObservation | [**observation\_type**](classsdm_1_1BeliefMDP.md#typedef-observation-type)  <br> |
| typedef TBelief | [**state\_type**](classsdm_1_1BeliefMDP.md#typedef-state-type)  <br> |















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md#function-serializedbeliefmdp-1-2) (std::shared\_ptr&lt; [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) &gt; underlying\_mmdp) <br> |
|   | [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md#function-serializedbeliefmdp-2-2) (std::string underlying\_mmdp) <br> |
|  std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; oAction &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1SerializedBeliefMDP.md#function-getactionspaceat) (const oState &) <br> |
|  double | [**getDiscount**](classsdm_1_1SerializedBeliefMDP.md#function-getdiscount) (int t) const<br> |
|  double | [**getExpectedNextValue**](classsdm_1_1SerializedBeliefMDP.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; oState, oAction &gt; \* value\_function, const oState & ostate, const oAction & oaction, int t=0) const<br> |
| virtual oState | [**getInitialState**](classsdm_1_1SerializedBeliefMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
|  double | [**getReward**](classsdm_1_1SerializedBeliefMDP.md#function-getreward) (const oState & ostate, const oAction & oaction) const<br> |
|  oState & | [**getState**](classsdm_1_1SerializedBeliefMDP.md#function-getstate) () <br> |
| virtual [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) \* | [**getUnderlyingProblem**](classsdm_1_1SerializedBeliefMDP.md#function-getunderlyingproblem) () <br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
|  std::shared\_ptr&lt; [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md) &gt; | [**getptr**](classsdm_1_1SerializedBeliefMDP.md#function-getptr) () <br> |
| virtual bool | [**isSerialized**](classsdm_1_1SerializedBeliefMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
|  oState | [**nextState**](classsdm_1_1SerializedBeliefMDP.md#function-nextstate) (const oState & ostate, const oAction & oaction, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; oState, oAction &gt; \* hsvi=nullptr) const<br> |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. Unfortunately, in this situation it isn't possible to transform a MMDP to a belief MDP._  |
|  std::shared\_ptr&lt; [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md) &gt; | [**toMDP**](classsdm_1_1SerializedBeliefMDP.md#function-tomdp) () <br> |

## Public Functions inherited from sdm::BeliefMDP

See [sdm::BeliefMDP](classsdm_1_1BeliefMDP.md)

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
|  std::shared\_ptr&lt; [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) &gt; | [**mpomdp\_**](classsdm_1_1SerializedBeliefMDP.md#variable-mpomdp-)  <br> |

## Protected Attributes inherited from sdm::BeliefMDP

See [sdm::BeliefMDP](classsdm_1_1BeliefMDP.md)

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


* `oState` refer to the serialized state type 
* `oAction` refer to the number type 



    
## Public Types Documentation


### typedef action\_type 


```cpp
using sdm::SerializedBeliefMDP< TBelief, TAction, TObservation >::action_type =  oAction;
```



### typedef state\_type 


```cpp
using sdm::SerializedBeliefMDP< TBelief, TAction, TObservation >::state_type =  oState;
```


## Public Functions Documentation


### function SerializedBeliefMDP [1/2]


```cpp
sdm::SerializedBeliefMDP::SerializedBeliefMDP (
    std::shared_ptr< DiscretePOMDP > underlying_mmdp
) 
```



### function SerializedBeliefMDP [2/2]


```cpp
sdm::SerializedBeliefMDP::SerializedBeliefMDP (
    std::string underlying_mmdp
) 
```



### function getActionSpaceAt 


```cpp
std::shared_ptr< DiscreteSpace < oAction > > sdm::SerializedBeliefMDP::getActionSpaceAt (
    const oState &
) 
```



### function getDiscount 


```cpp
double sdm::SerializedBeliefMDP::getDiscount (
    int t
) const
```



### function getExpectedNextValue 


```cpp
double sdm::SerializedBeliefMDP::getExpectedNextValue (
    ValueFunction < oState, oAction > * value_function,
    const oState & ostate,
    const oAction & oaction,
    int t=0
) const
```



### function getInitialState 


```cpp
virtual oState sdm::SerializedBeliefMDP::getInitialState () 
```


Implements [*sdm::BeliefMDP::getInitialState*](classsdm_1_1BeliefMDP.md#function-getinitialstate)


### function getReward 


```cpp
double sdm::SerializedBeliefMDP::getReward (
    const oState & ostate,
    const oAction & oaction
) const
```



### function getState 


```cpp
oState & sdm::SerializedBeliefMDP::getState () 
```



### function getUnderlyingProblem 


```cpp
virtual DiscreteMMDP * sdm::SerializedBeliefMDP::getUnderlyingProblem () 
```




**Returns:**

the underlying problem 




        
Implements [*sdm::BeliefMDP::getUnderlyingProblem*](classsdm_1_1BeliefMDP.md#function-getunderlyingproblem)


### function getptr 


```cpp
std::shared_ptr< SerializedBeliefMDP > sdm::SerializedBeliefMDP::getptr () 
```



### function isSerialized 


```cpp
virtual bool sdm::SerializedBeliefMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::BeliefMDP::isSerialized*](classsdm_1_1BeliefMDP.md#function-isserialized)


### function nextState 


```cpp
oState sdm::SerializedBeliefMDP::nextState (
    const oState & ostate,
    const oAction & oaction,
    int t=0,
    HSVI < oState, oAction > * hsvi=nullptr
) const
```



### function toBeliefMDP 


```cpp
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::SerializedBeliefMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< SerializedBeliefMDP > sdm::SerializedBeliefMDP::toMDP () 
```


## Protected Attributes Documentation


### variable mpomdp\_ 


```cpp
std::shared_ptr<DiscretePOMDP> sdm::SerializedBeliefMDP< TBelief, TAction, TObservation >::mpomdp_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/serialized_belief_mdp.hpp`