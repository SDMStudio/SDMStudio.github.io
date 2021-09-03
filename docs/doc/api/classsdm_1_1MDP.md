
# Class sdm::MDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MDP**](classsdm_1_1MDP.md)



_The class for Discrete Markov Decision Processes._ 

* `#include <mdp.hpp>`



Inherits the following classes: [sdm::MDPInterface](classsdm_1_1MDPInterface.md),  [sdm::GymInterface](classsdm_1_1GymInterface.md)


Inherited by the following classes: [sdm::MMDP](classsdm_1_1MMDP.md),  [sdm::POMDP](classsdm_1_1POMDP.md)






















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MDP**](classsdm_1_1MDP.md#function-mdp-1-2) () <br> |
|   | [**MDP**](classsdm_1_1MDP.md#function-mdp-2-2) (const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & state\_space, const std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; & action\_space, const std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; & reward\_space, const std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; & state\_dynamics, const std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt;&gt; & start\_distribution, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.99, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  void | [**generateFile**](classsdm_1_1MDP.md#function-generatefile) (std::string) <br>_Save problem in file with given format (.xml, .json or .{dpomdp, posg, zsposg})._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpace**](classsdm_1_1MDP.md#function-getactionspace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths action space at timestep t._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1MDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the action space._  |
| virtual double | [**getDiscount**](classsdm_1_1MDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the discount factor at timestep t._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1MDP.md#function-gethorizon) () const<br>_Get the planning horizon._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInternalState**](classsdm_1_1MDP.md#function-getinternalstate) () const<br> |
| virtual double | [**getMaxReward**](classsdm_1_1MDP.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1MDP.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1MDP.md#function-getnumagents) () const<br>_Get the number of agents._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1MDP.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br>_Get random action._  |
| virtual std::set&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getReachableStates**](classsdm_1_1MDP.md#function-getreachablestates) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reachable next states._  |
| virtual double | [**getReward**](classsdm_1_1MDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the reward of executing action a in state s at timestep t._  |
| virtual std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; | [**getRewardSpace**](classsdm_1_1MDP.md#function-getrewardspace) () const<br>_Get the reward function._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1MDP.md#function-getstartdistribution) () const<br>_Get the initial distribution over states._  |
| virtual std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**getStateDynamics**](classsdm_1_1MDP.md#function-getstatedynamics) () const<br>_Get the state dynamics._  |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getStateSpace**](classsdm_1_1MDP.md#function-getstatespace) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get ths state space at timestep t._  |
| virtual double | [**getTransitionProbability**](classsdm_1_1MDP.md#function-gettransitionprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the Transition Probability object._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1MDP.md#function-reset) () <br>_Reset the environment and return initial observation._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**sampleNextObservation**](classsdm_1_1MDP.md#function-samplenextobservation) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**setDiscount**](classsdm_1_1MDP.md#function-setdiscount) (double discount) <br>[_**Set**_](structsdm_1_1Set.md) _the discount factor._ |
|  void | [**setHorizon**](classsdm_1_1MDP.md#function-sethorizon) ([**number**](namespacesdm.md#typedef-number) horizon) <br>[_**Set**_](structsdm_1_1Set.md) _the planning horizon._ |
| virtual void | [**setInternalState**](classsdm_1_1MDP.md#function-setinternalstate) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;) <br> |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDP.md#function-step-1-2) (std::shared\_ptr&lt; Action &gt; action) <br>_Do a step on the environment._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1MDP.md#function-step-2-2) (std::shared\_ptr&lt; Action &gt; action, bool increment\_timestep) <br> |
| virtual std::string | [**toJSON**](classsdm_1_1MDP.md#function-tojson) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (JSON format)._ |
| virtual std::string | [**toStdFormat**](classsdm_1_1MDP.md#function-tostdformat) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |
| virtual std::string | [**toXML**](classsdm_1_1MDP.md#function-toxml) () <br>_Encodes_ [_**MDP**_](classsdm_1_1MDP.md) _class into a string (XML format)._ |
| virtual  | [**~MDP**](classsdm_1_1MDP.md#function-mdp) () <br> |

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

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |













## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**action\_space\_**](classsdm_1_1MDP.md#variable-action-space-)  <br> |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**criterion\_**](classsdm_1_1MDP.md#variable-criterion-)  <br> |
|  int | [**current\_timestep\_**](classsdm_1_1MDP.md#variable-current-timestep-)  <br> |
|  double | [**discount\_**](classsdm_1_1MDP.md#variable-discount-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1MDP.md#variable-horizon-)  <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**internal\_state\_**](classsdm_1_1MDP.md#variable-internal-state-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_agents\_**](classsdm_1_1MDP.md#variable-num-agents-)  <br> |
|  std::shared\_ptr&lt; [**RewardInterface**](classsdm_1_1RewardInterface.md) &gt; | [**reward\_space\_**](classsdm_1_1MDP.md#variable-reward-space-)  <br> |
|  std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**start\_distribution\_**](classsdm_1_1MDP.md#variable-start-distribution-)  <br> |
|  std::shared\_ptr&lt; [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) &gt; | [**state\_dynamics\_**](classsdm_1_1MDP.md#variable-state-dynamics-)  <br> |
|  std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**state\_space\_**](classsdm_1_1MDP.md#variable-state-space-)  <br> |
















## Public Functions Documentation


### function MDP [1/2]


```cpp
sdm::MDP::MDP () 
```



### function MDP [2/2]


```cpp
sdm::MDP::MDP (
    const std::shared_ptr< Space > & state_space,
    const std::shared_ptr< Space > & action_space,
    const std::shared_ptr< RewardInterface > & reward_space,
    const std::shared_ptr< StateDynamicsInterface > & state_dynamics,
    const std::shared_ptr< Distribution < std::shared_ptr< State >>> & start_distribution,
    number horizon=0,
    double discount=0.99,
    Criterion criterion=Criterion::REW_MAX
) 
```



### function generateFile 


```cpp
void sdm::MDP::generateFile (
    std::string
) 
```




**Parameters:**


* `filename` the file name 



        

### function getActionSpace 


```cpp
virtual std::shared_ptr< Space > sdm::MDP::getActionSpace (
    number t=0
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the action space 




        
Implements [*sdm::MDPInterface::getActionSpace*](classsdm_1_1MDPInterface.md#function-getactionspace)


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::MDP::getActionSpaceAt (
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


### function getDiscount 


```cpp
virtual double sdm::MDP::getDiscount (
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
virtual number sdm::MDP::getHorizon () const
```




**Returns:**

the planning horizon 




        
Implements [*sdm::MDPInterface::getHorizon*](classsdm_1_1MDPInterface.md#function-gethorizon)


### function getInternalState 


```cpp
virtual std::shared_ptr< State > sdm::MDP::getInternalState () const
```


Implements [*sdm::MDPInterface::getInternalState*](classsdm_1_1MDPInterface.md#function-getinternalstate)


### function getMaxReward 


```cpp
virtual double sdm::MDP::getMaxReward (
    number t=0
) const
```


Implements [*sdm::MDPInterface::getMaxReward*](classsdm_1_1MDPInterface.md#function-getmaxreward)


### function getMinReward 


```cpp
virtual double sdm::MDP::getMinReward (
    number t=0
) const
```


Implements [*sdm::MDPInterface::getMinReward*](classsdm_1_1MDPInterface.md#function-getminreward)


### function getNumAgents 


```cpp
virtual number sdm::MDP::getNumAgents () const
```




**Returns:**

the number of agents 




        
Implements [*sdm::MDPInterface::getNumAgents*](classsdm_1_1MDPInterface.md#function-getnumagents)


### function getRandomAction 


```cpp
virtual std::shared_ptr< Action > sdm::MDP::getRandomAction (
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
virtual std::set< std::shared_ptr< State > > sdm::MDP::getReachableStates (
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
virtual double sdm::MDP::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```




**Parameters:**


* `state` the state 
* `action` the action 
* `t` the timestep 



**Returns:**

the value of the reward 




        
Implements [*sdm::MDPInterface::getReward*](classsdm_1_1MDPInterface.md#function-getreward)


### function getRewardSpace 


```cpp
virtual std::shared_ptr< RewardInterface > sdm::MDP::getRewardSpace () const
```




**Returns:**

the reward function 




        

### function getStartDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::MDP::getStartDistribution () const
```




**Returns:**

the initial distribution over states 




        
Implements [*sdm::MDPInterface::getStartDistribution*](classsdm_1_1MDPInterface.md#function-getstartdistribution)


### function getStateDynamics 


```cpp
virtual std::shared_ptr< StateDynamicsInterface > sdm::MDP::getStateDynamics () const
```




**Returns:**

the state dynamics interface 




        

### function getStateSpace 


```cpp
virtual std::shared_ptr< Space > sdm::MDP::getStateSpace (
    number t=0
) const
```




**Parameters:**


* `t` the timestep 



**Returns:**

the state space 




        
Implements [*sdm::MDPInterface::getStateSpace*](classsdm_1_1MDPInterface.md#function-getstatespace)


### function getTransitionProbability 


```cpp
virtual double sdm::MDP::getTransitionProbability (
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


### function reset 


```cpp
virtual std::shared_ptr< Observation > sdm::MDP::reset () 
```




**Returns:**

the initial observation 




        
Implements [*sdm::GymInterface::reset*](classsdm_1_1GymInterface.md#function-reset)


### function sampleNextObservation 


```cpp
virtual std::shared_ptr< Observation > sdm::MDP::sampleNextObservation (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```



### function setDiscount 


```cpp
void sdm::MDP::setDiscount (
    double discount
) 
```




**Parameters:**


* `discount` the discount factor 



        

### function setHorizon 


```cpp
void sdm::MDP::setHorizon (
    number horizon
) 
```




**Parameters:**


* `horizon` the planning horizon 



        

### function setInternalState 


```cpp
virtual void sdm::MDP::setInternalState (
    std::shared_ptr< State >
) 
```


Implements [*sdm::MDPInterface::setInternalState*](classsdm_1_1MDPInterface.md#function-setinternalstate)


### function step [1/2]


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::MDP::step (
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
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::MDP::step (
    std::shared_ptr< Action > action,
    bool increment_timestep
) 
```


Implements [*sdm::MDPInterface::step*](classsdm_1_1MDPInterface.md#function-step-2-2)


### function toJSON 


```cpp
virtual std::string sdm::MDP::toJSON () 
```



### function toStdFormat 


```cpp
virtual std::string sdm::MDP::toStdFormat () 
```




**Returns:**

the process as XML 




        

### function toXML 


```cpp
virtual std::string sdm::MDP::toXML () 
```




**Returns:**

the process as XML 




        

### function ~MDP 


```cpp
virtual sdm::MDP::~MDP () 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<Space> sdm::MDP::action_space_;
```



### variable criterion\_ 


```cpp
Criterion sdm::MDP::criterion_;
```



### variable current\_timestep\_ 


```cpp
int sdm::MDP::current_timestep_;
```



### variable discount\_ 


```cpp
double sdm::MDP::discount_;
```



### variable horizon\_ 


```cpp
number sdm::MDP::horizon_;
```



### variable internal\_state\_ 


```cpp
std::shared_ptr<State> sdm::MDP::internal_state_;
```



### variable num\_agents\_ 


```cpp
number sdm::MDP::num_agents_;
```



### variable reward\_space\_ 


```cpp
std::shared_ptr<RewardInterface> sdm::MDP::reward_space_;
```



### variable start\_distribution\_ 


```cpp
std::shared_ptr<Distribution<std::shared_ptr<State> > > sdm::MDP::start_distribution_;
```



### variable state\_dynamics\_ 


```cpp
std::shared_ptr<StateDynamicsInterface> sdm::MDP::state_dynamics_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<Space> sdm::MDP::state_space_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::MDP::operator<< (
    std::ostream & os,
    MDP & model
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/mdp.hpp`