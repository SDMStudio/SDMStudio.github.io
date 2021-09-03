
# Class sdm::SerializedMMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedMMDP**](classsdm_1_1SerializedMMDP.md)





* `#include <serialized_mmdp.hpp>`



Inherits the following classes: [sdm::SerialMMDPInterface](classsdm_1_1SerialMMDPInterface.md)


Inherited by the following classes: [sdm::SerializedMPOMDP](classsdm_1_1SerializedMPOMDP.md)






























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedMMDP**](classsdm_1_1SerializedMMDP.md#function-serializedmmdp) (const std::shared\_ptr&lt; [**MMDPInterface**](classsdm_1_1MMDPInterface.md) &gt; & mmdp) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1SerializedMMDP.md#function-getactionspace-1-2) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get all actions at a specific time step._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1SerializedMMDP.md#function-getactionspace-2-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const<br>_Get the Action_ [_**Space**_](classsdm_1_1Space.md) _at a specific time step and a precise agent._ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1SerializedMMDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the action space._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getAgentId**](classsdm_1_1SerializedMMDP.md#function-getagentid) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get the identifier of the current agent._  |
| virtual double | [**getDiscount**](classsdm_1_1SerializedMMDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1SerializedMMDP.md#function-gethorizon) () const<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1SerializedMMDP.md#function-getinternalstate) () const<br> |
| virtual double | [**getMaxReward**](classsdm_1_1SerializedMMDP.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1SerializedMMDP.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1SerializedMMDP.md#function-getnumagents) () const<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1SerializedMMDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1SerializedMMDP.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reachable next states._  |
| virtual double | [**getReward**](classsdm_1_1SerializedMMDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reward._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1SerializedMMDP.md#function-getstartdistribution) () const<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1SerializedMMDP.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get all states._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1SerializedMMDP.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the Transition Probability object._  |
| virtual bool | [**isLastAgent**](classsdm_1_1SerializedMMDP.md#function-islastagent) ([**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1SerializedMMDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual void | [**setInternalState**](classsdm_1_1SerializedMMDP.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) <br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1SerializedMMDP.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1SerializedMMDP.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) <br> |
| virtual  | [**~SerializedMMDP**](classsdm_1_1SerializedMMDP.md#function-serializedmmdp) () <br> |


## Public Functions inherited from sdm::MMDPInterface

See [sdm::MMDPInterface](classsdm_1_1MMDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDPInterface.md#function-getactionspace-1-2) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space of agent i at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MMDPInterface.md#function-getactionspace-2-2) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |

## Public Functions inherited from sdm::MDPInterface

See [sdm::MDPInterface](classsdm_1_1MDPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDPInterface.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths action space at timestep t._  |
| virtual double | [**getDiscount**](classsdm_1_1MDPInterface.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDPInterface.md#function-gethorizon) () const = 0<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDPInterface.md#function-getinternalstate) () const = 0<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDPInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDPInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDPInterface.md#function-getnumagents) () const = 0<br>_Get the number of agents._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDPInterface.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get reachable states._  |
| virtual double | [**getReward**](classsdm_1_1MDPInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at timestep t when executing an action in a specific state._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDPInterface.md#function-getstartdistribution) () const = 0<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDPInterface.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDPInterface.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the transition probability, i.e. p(s' | s, a)._  |
| virtual void | [**setInternalState**](classsdm_1_1MDPInterface.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state) = 0<br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDPInterface.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) = 0<br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |

## Public Functions inherited from sdm::SerialProblemInterface

See [sdm::SerialProblemInterface](classsdm_1_1SerialProblemInterface.md)

| Type | Name |
| ---: | :--- |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getAgentId**](classsdm_1_1SerialProblemInterface.md#function-getagentid) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the identifier of the current agent._  |
| virtual bool | [**isLastAgent**](classsdm_1_1SerialProblemInterface.md#function-islastagent) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |



















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**distribution\_serial**](classsdm_1_1SerializedMMDP.md#variable-distribution-serial)  <br> |
|  std::unordered\_map&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt; &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**map\_joint\_action\_to\_pointeur**](classsdm_1_1SerializedMMDP.md#variable-map-joint-action-to-pointeur)  <br>_Map the joint\_action to a precise pointeur of Action._  |
|  std::unordered\_map&lt; [**SerializedState**](classsdm_1_1SerializedState.md), std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**map\_serialized\_state\_to\_pointeur**](classsdm_1_1SerializedMMDP.md#variable-map-serialized-state-to-pointeur)  <br>_Map the serialState to a precise pointeur of_ [_**State**_](classsdm_1_1State.md) _._ |
|  std::shared\_ptr&lt; [**MMDPInterface**](classsdm_1_1MMDPInterface.md) &gt; | [**mmdp\_**](classsdm_1_1SerializedMMDP.md#variable-mmdp-)  <br>_The mmpdp associated to the problem._  |
|  [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &gt; &gt; | [**serialized\_state\_space\_**](classsdm_1_1SerializedMMDP.md#variable-serialized-state-space-)  <br>_Refer to the Serialized_ [_**State**_](classsdm_1_1State.md) __[_**Space**_](classsdm_1_1Space.md) _._ |
|  std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**state\_dynamics\_**](classsdm_1_1SerializedMMDP.md#variable-state-dynamics-)  <br>_Map (serial state, seial action) to_ [_**Set**_](structsdm_1_1Set.md) _of reachable seial states._ |












## Protected Functions

| Type | Name |
| ---: | :--- |
|  [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt; &gt; | [**addNewAction**](classsdm_1_1SerializedMMDP.md#function-addnewaction) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & new\_action) const<br>_A serial state is composed by a vector of action, in this function, we add a new action to the current vector of action/._  |
|  void | [**createDistribution**](classsdm_1_1SerializedMMDP.md#function-createdistribution) () <br> |
|  void | [**createInitReachableStateSpace**](classsdm_1_1SerializedMMDP.md#function-createinitreachablestatespace) () <br>_Initialize "serialized\_state\_space\_"._  |
|  void | [**createInitSerializedStateSpace**](classsdm_1_1SerializedMMDP.md#function-createinitserializedstatespace) () <br>_Initialize Serial_ [_**State**_](classsdm_1_1State.md) __[_**Space**_](classsdm_1_1Space.md) _._ |
|  const std::shared\_ptr&lt; Action &gt; | [**getPointeurJointAction**](classsdm_1_1SerializedMMDP.md#function-getpointeurjointaction) ([**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt;&gt; &) const<br>_Get the Pointeur object of a precise_ [_**Joint**_](classsdm_1_1Joint.md) _Action._ |
|  const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getPointeurState**](classsdm_1_1SerializedMMDP.md#function-getpointeurstate) ([**SerializedState**](classsdm_1_1SerializedState.md) &) const<br>_Get the Pointeur object of a precise_ [_**Joint**_](classsdm_1_1Joint.md) _Action._ |
|  void | [**setJointActionToPointeur**](classsdm_1_1SerializedMMDP.md#function-setjointactiontopointeur) (std::vector&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt;&gt;&gt;) <br> |












## Public Functions Documentation


### function SerializedMMDP 


```cpp
sdm::SerializedMMDP::SerializedMMDP (
    const std::shared_ptr< MMDPInterface > & mmdp
) 
```



### function getActionSpace [1/2]


```cpp
virtual std::shared_ptr< Space > sdm::SerializedMMDP::getActionSpace (
    number t=0
) const
```




**Returns:**

the set of actions 




        
Implements [*sdm::MMDPInterface::getActionSpace*](classsdm_1_1MMDPInterface.md#function-getactionspace-2-2)


### function getActionSpace [2/2]


```cpp
virtual std::shared_ptr< Space > sdm::SerializedMMDP::getActionSpace (
    number agent_id,
    number t
) const
```




**Parameters:**


* `agent_id` 
* `t` 



**Returns:**

std::shared\_ptr&lt;Space&gt; 




        
Implements [*sdm::MMDPInterface::getActionSpace*](classsdm_1_1MMDPInterface.md#function-getactionspace-1-2)


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::SerializedMMDP::getActionSpaceAt (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```




**Parameters:**


* `observation` the observation in consideration 
* `t` time step 



**Returns:**

the action space. 




        
Implements [*sdm::GymInterface::getActionSpaceAt*](classsdm_1_1GymInterface.md#function-getactionspaceat)


### function getAgentId 


```cpp
virtual number sdm::SerializedMMDP::getAgentId (
    number t
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

number the agent id 




        
Implements [*sdm::SerialProblemInterface::getAgentId*](classsdm_1_1SerialProblemInterface.md#function-getagentid)


### function getDiscount 


```cpp
virtual double sdm::SerializedMMDP::getDiscount (
    number t=0
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the discount factor 




        
Implements [*sdm::MDPInterface::getDiscount*](classsdm_1_1MDPInterface.md#function-getdiscount)


### function getHorizon 


```cpp
virtual number sdm::SerializedMMDP::getHorizon () const
```




**Returns:**

the number of agents 




        
Implements [*sdm::MDPInterface::getHorizon*](classsdm_1_1MDPInterface.md#function-gethorizon)


### function getInternalState 


```cpp
virtual std::shared_ptr< State > sdm::SerializedMMDP::getInternalState () const
```


Implements [*sdm::MDPInterface::getInternalState*](classsdm_1_1MDPInterface.md#function-getinternalstate)


### function getMaxReward 


```cpp
virtual double sdm::SerializedMMDP::getMaxReward (
    number t=0
) const
```


Implements [*sdm::MDPInterface::getMaxReward*](classsdm_1_1MDPInterface.md#function-getmaxreward)


### function getMinReward 


```cpp
virtual double sdm::SerializedMMDP::getMinReward (
    number t=0
) const
```


Implements [*sdm::MDPInterface::getMinReward*](classsdm_1_1MDPInterface.md#function-getminreward)


### function getNumAgents 


```cpp
virtual number sdm::SerializedMMDP::getNumAgents () const
```




**Returns:**

the number of agents 




        
Implements [*sdm::MDPInterface::getNumAgents*](classsdm_1_1MDPInterface.md#function-getnumagents)


### function getRandomAction 


```cpp
virtual std::shared_ptr< Action > sdm::SerializedMMDP::getRandomAction (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```




**Parameters:**


* `observation` the observation in consideration. 
* `t` time step. 



**Returns:**

the random action. 




        
Implements [*sdm::GymInterface::getRandomAction*](classsdm_1_1GymInterface.md#function-getrandomaction)


### function getReachableStates 


```cpp
virtual std::set< std::shared_ptr< State > > sdm::SerializedMMDP::getReachableStates (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the set of reachable states 




        
Implements [*sdm::MDPInterface::getReachableStates*](classsdm_1_1MDPInterface.md#function-getreachablestates)


### function getReward 


```cpp
virtual double sdm::SerializedMMDP::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```




**Parameters:**


* `state` 
* `action` 
* `t` 



**Returns:**

double 




        
Implements [*sdm::MDPInterface::getReward*](classsdm_1_1MDPInterface.md#function-getreward)


### function getStartDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::SerializedMMDP::getStartDistribution () const
```




**Returns:**

the initial distribution over states 




        
Implements [*sdm::MDPInterface::getStartDistribution*](classsdm_1_1MDPInterface.md#function-getstartdistribution)


### function getStateSpace 


```cpp
virtual std::shared_ptr< Space > sdm::SerializedMMDP::getStateSpace (
    number t=0
) const
```




**Returns:**

the set of states 




        
Implements [*sdm::MDPInterface::getStateSpace*](classsdm_1_1MDPInterface.md#function-getstatespace)


### function getTransitionProbability 


```cpp
virtual double sdm::SerializedMMDP::getTransitionProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_state,
    number t=0
) const
```




**Parameters:**


* `state` 
* `action` 
* `next_state` 
* `t` 



**Returns:**

double 




        
Implements [*sdm::MDPInterface::getTransitionProbability*](classsdm_1_1MDPInterface.md#function-gettransitionprobability)


### function isLastAgent 


```cpp
virtual bool sdm::SerializedMMDP::isLastAgent (
    number t
) const
```




**Parameters:**


* `t` 



**Returns:**

true 




**Returns:**

false 




        
Implements [*sdm::SerialProblemInterface::isLastAgent*](classsdm_1_1SerialProblemInterface.md#function-islastagent)


### function reset 


```cpp
virtual std::shared_ptr< Observation > sdm::SerializedMMDP::reset () 
```




**Returns:**

the initial observation 




        
Implements [*sdm::GymInterface::reset*](classsdm_1_1GymInterface.md#function-reset)


### function setInternalState 


```cpp
virtual void sdm::SerializedMMDP::setInternalState (
    std::shared_ptr< State > state
) 
```


Implements [*sdm::MDPInterface::setInternalState*](classsdm_1_1MDPInterface.md#function-setinternalstate)


### function step [1/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::SerializedMMDP::step (
    std::shared_ptr< Action > action
) 
```




**Parameters:**


* `action` the action to execute 



**Returns:**

the information produced. Include : next observation, rewards, episode done 




        
Implements [*sdm::MDPInterface::step*](classsdm_1_1MDPInterface.md#function-step-1-2)


### function step [2/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::SerializedMMDP::step (
    std::shared_ptr< Action > action,
    bool increment_timestep
) 
```


Implements [*sdm::MDPInterface::step*](classsdm_1_1MDPInterface.md#function-step-2-2)


### function ~SerializedMMDP 


```cpp
virtual sdm::SerializedMMDP::~SerializedMMDP () 
```


## Protected Attributes Documentation


### variable distribution\_serial 


```cpp
std::shared_ptr<Distribution<std::shared_ptr<State> > > sdm::SerializedMMDP::distribution_serial;
```



### variable map\_joint\_action\_to\_pointeur 


```cpp
std::unordered_map<Joint<std::shared_ptr<Action> >, std::shared_ptr<Action> > sdm::SerializedMMDP::map_joint_action_to_pointeur;
```



### variable map\_serialized\_state\_to\_pointeur 


```cpp
std::unordered_map<SerializedState, std::shared_ptr<State> > sdm::SerializedMMDP::map_serialized_state_to_pointeur;
```



### variable mmdp\_ 


```cpp
std::shared_ptr<MMDPInterface> sdm::SerializedMMDP::mmdp_;
```



### variable serialized\_state\_space\_ 


```cpp
Joint<std::shared_ptr<DiscreteSpace> > sdm::SerializedMMDP::serialized_state_space_;
```



### variable state\_dynamics\_ 


```cpp
std::shared_ptr<StateDynamicsInterface> sdm::SerializedMMDP::state_dynamics_;
```


## Protected Functions Documentation


### function addNewAction 


```cpp
Joint < std::shared_ptr< Action > > sdm::SerializedMMDP::addNewAction (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & new_action
) const
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& : current serial state 
* `const` std::shared\_ptr&lt;Action&gt;& : action to add 



**Returns:**

[**Joint**](classsdm_1_1Joint.md)&lt;std::shared\_ptr&lt;Action&gt;&gt; : vector of action of the current serial state + the action to add 




        

### function createDistribution 


```cpp
void sdm::SerializedMMDP::createDistribution () 
```



### function createInitReachableStateSpace 


```cpp
void sdm::SerializedMMDP::createInitReachableStateSpace () 
```



### function createInitSerializedStateSpace 


```cpp
void sdm::SerializedMMDP::createInitSerializedStateSpace () 
```



### function getPointeurJointAction 


```cpp
const std::shared_ptr< Action > sdm::SerializedMMDP::getPointeurJointAction (
    Joint < std::shared_ptr< Action >> &
) const
```




**Returns:**

std::shared\_ptr&lt;[**Joint**](classsdm_1_1Joint.md)&lt;std::shared\_ptr&lt;Action&gt;&gt;&gt; 




        

### function getPointeurState 


```cpp
const std::shared_ptr< State > sdm::SerializedMMDP::getPointeurState (
    SerializedState &
) const
```




**Returns:**

std::shared\_ptr&lt;[**Joint**](classsdm_1_1Joint.md)&lt;std::shared\_ptr&lt;Action&gt;&gt;&gt; 




        

### function setJointActionToPointeur 


```cpp
void sdm::SerializedMMDP::setJointActionToPointeur (
    std::vector< Joint < std::shared_ptr< Action >>>
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/serialized_mmdp.hpp`