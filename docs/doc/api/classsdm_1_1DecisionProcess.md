
<NavBar active_item_id="2"/>

# Class sdm::DecisionProcess


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DecisionProcess**](classsdm_1_1DecisionProcess.md)



_Decision process._ 

* `#include <decision_process.hpp>`



Inherits the following classes: [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md),  [sdm::World](classsdm_1_1World.md)


Inherited by the following classes: [sdm::POSG](classsdm_1_1POSG.md)


















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-1-4) () <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-2-4) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-3-4) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const Vector &) <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-4-4) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**StateDynamics**](classsdm_1_1StateDynamics.md) &, const std::vector&lt; [**Reward**](classsdm_1_1Reward.md) &gt; &, const Vector &) <br> |
|  const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getActionSpace**](classsdm_1_1DecisionProcess.md#function-getactionspace) () const<br>_Getter for the action spaces._  |
|  const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getAgentSpace**](classsdm_1_1DecisionProcess.md#function-getagentspace) () const<br>_Getter for the action spaces._  |
|  double | [**getBound**](classsdm_1_1DecisionProcess.md#function-getbound) () const<br>_Returns the bound._  |
|  std::vector&lt; double &gt; | [**getCost**](classsdm_1_1DecisionProcess.md#function-getcost-1-2) ([**number**](namespacesdm.md#typedef-number) state, [**number**](namespacesdm.md#typedef-number) jaction) const<br> |
|  std::vector&lt; double &gt; | [**getCost**](classsdm_1_1DecisionProcess.md#function-getcost-2-2) ([**number**](namespacesdm.md#typedef-number) state, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction) const<br> |
|  bool | [**getCriterion**](classsdm_1_1DecisionProcess.md#function-getcriterion) () const<br>_Returns the criterion._  |
|  double | [**getDiscount**](classsdm_1_1DecisionProcess.md#function-getdiscount) () const<br>_Returns the discount factor._  |
|  std::string | [**getFileName**](classsdm_1_1DecisionProcess.md#function-getfilename) () <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumActions**](classsdm_1_1DecisionProcess.md#function-getnumactions-1-2) ([**number**](namespacesdm.md#typedef-number)) const<br>_Get the number of actions for a specific agent._  |
|  std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getNumActions**](classsdm_1_1DecisionProcess.md#function-getnumactions-2-2) () const<br>_Get the number of actions for each agents._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1DecisionProcess.md#function-getnumagents) () const<br>_Get the number of agents._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumJActions**](classsdm_1_1DecisionProcess.md#function-getnumjactions) () const<br>_Get the number of joint actions._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getPlanningHorizon**](classsdm_1_1DecisionProcess.md#function-getplanninghorizon) () const<br>_Returns the planning horizon._  |
|  double | [**getReward**](classsdm_1_1DecisionProcess.md#function-getreward-1-2) ([**number**](namespacesdm.md#typedef-number) state, [**number**](namespacesdm.md#typedef-number) jaction, [**number**](namespacesdm.md#typedef-number) ag\_id) const<br> |
|  double | [**getReward**](classsdm_1_1DecisionProcess.md#function-getreward-2-2) ([**number**](namespacesdm.md#typedef-number) state, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction, [**number**](namespacesdm.md#typedef-number) ag\_id) const<br> |
|  const std::vector&lt; [**Reward**](classsdm_1_1Reward.md) &gt; & | [**getRewards**](classsdm_1_1DecisionProcess.md#function-getrewards-1-3) () const<br> |
|  std::vector&lt; double &gt; | [**getRewards**](classsdm_1_1DecisionProcess.md#function-getrewards-2-3) ([**number**](namespacesdm.md#typedef-number) state, [**number**](namespacesdm.md#typedef-number) jaction) const<br>_Get transition probability from joint action (as a single one) for all agents._  |
|  std::vector&lt; double &gt; | [**getRewards**](classsdm_1_1DecisionProcess.md#function-getrewards-3-3) ([**number**](namespacesdm.md#typedef-number) state, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction) const<br>_Get reward from joint action for all agents._  |
|  const [**StateDynamics**](classsdm_1_1StateDynamics.md) & | [**getStateDynamics**](classsdm_1_1DecisionProcess.md#function-getstatedynamics) () const<br>_Get the state dynamics._  |
|  double | [**getTransitionProba**](classsdm_1_1DecisionProcess.md#function-gettransitionproba-1-2) ([**number**](namespacesdm.md#typedef-number) cstate, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction, [**number**](namespacesdm.md#typedef-number) state) const<br>_Get transition probability from joint action._  |
|  double | [**getTransitionProba**](classsdm_1_1DecisionProcess.md#function-gettransitionproba-2-2) ([**number**](namespacesdm.md#typedef-number) cstate, [**number**](namespacesdm.md#typedef-number) jaction, [**number**](namespacesdm.md#typedef-number) state) const<br>_Get transition probability from joint action (as a single one)_  |
|  void | [**nextState**](classsdm_1_1DecisionProcess.md#function-nextstate-1-2) ([**number**](namespacesdm.md#typedef-number) jaction) <br>_Transit to next state given a joint action (as a single one)_  |
|  void | [**nextState**](classsdm_1_1DecisionProcess.md#function-nextstate-2-2) (std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction) <br>_Transit to next state given a joint action._  |
|  void | [**setBound**](classsdm_1_1DecisionProcess.md#function-setbound) (double) <br>_Set the bound._  |
|  void | [**setCriterion**](classsdm_1_1DecisionProcess.md#function-setcriterion) (bool) <br>_Sets the criterion._  |
|  void | [**setDiscount**](classsdm_1_1DecisionProcess.md#function-setdiscount) (double) <br>_Sets the discount factor._  |
|  void | [**setFileName**](classsdm_1_1DecisionProcess.md#function-setfilename) (std::string) <br> |
|  void | [**setPlanningHorizon**](classsdm_1_1DecisionProcess.md#function-setplanninghorizon) ([**number**](namespacesdm.md#typedef-number)) <br>_Sets the planning horizon._  |

## Public Functions inherited from sdm::StochasticProcess

See [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md)

| Type | Name |
| ---: | :--- |
|   | [**StochasticProcess**](classsdm_1_1StochasticProcess.md#function-stochasticprocess-1-3) () <br> |
|   | [**StochasticProcess**](classsdm_1_1StochasticProcess.md#function-stochasticprocess-2-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br> |
|   | [**StochasticProcess**](classsdm_1_1StochasticProcess.md#function-stochasticprocess-3-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const Vector &) <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getInternalState**](classsdm_1_1StochasticProcess.md#function-getinternalstate) () const<br>_Get the internal state._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumStates**](classsdm_1_1StochasticProcess.md#function-getnumstates) () const<br>_Returns the number of states._  |
|  const Vector & | [**getStartDistrib**](classsdm_1_1StochasticProcess.md#function-getstartdistrib) () const<br> |
|  const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getStateSpace**](classsdm_1_1StochasticProcess.md#function-getstatespace) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**init**](classsdm_1_1StochasticProcess.md#function-init) () <br>_Init processus and return initial sampled state._  |
|  void | [**setInternalState**](classsdm_1_1StochasticProcess.md#function-setinternalstate) ([**number**](namespacesdm.md#typedef-number)) <br>_Sets the internal state._  |
|  void | [**setStartDistrib**](classsdm_1_1StochasticProcess.md#function-setstartdistrib-1-2) (const std::vector&lt; double &gt; &) <br> |
|  void | [**setStartDistrib**](classsdm_1_1StochasticProcess.md#function-setstartdistrib-2-2) (const Vector &) <br> |
|  void | [**setupStartGenerator**](classsdm_1_1StochasticProcess.md#function-setupstartgenerator) () <br> |











## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**action\_space\_**](classsdm_1_1DecisionProcess.md#variable-action-space-)  <br>_Action space for each agent._  |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**agent\_space\_**](classsdm_1_1DecisionProcess.md#variable-agent-space-)  <br>[_**Space**_](classsdm_1_1Space.md) _of agents (contain number of agents and their names)._ |
|  double | [**bound**](classsdm_1_1DecisionProcess.md#variable-bound)  <br> |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**criterion**](classsdm_1_1DecisionProcess.md#variable-criterion)   = = Criterion::REW\_MAX<br>_type of optimization problem, e.g., reward maximazation or cost minimization._  |
|  double | [**discount**](classsdm_1_1DecisionProcess.md#variable-discount)   = = 1.0<br>_factor used to discount rewards (respectively costs) in the future._  |
|  std::string | [**filename**](classsdm_1_1DecisionProcess.md#variable-filename)  <br>_name of the file that generates the environment_  |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon**](classsdm_1_1DecisionProcess.md#variable-planning-horizon)   = = 0<br>_planning horizon_  |
|  std::vector&lt; [**Reward**](classsdm_1_1Reward.md) &gt; | [**rew\_**](classsdm_1_1DecisionProcess.md#variable-rew-)  <br>[_**Reward**_](classsdm_1_1Reward.md) _functions._ |
|  [**StateDynamics**](classsdm_1_1StateDynamics.md) | [**s\_dynamics\_**](classsdm_1_1DecisionProcess.md#variable-s-dynamics-)  <br>_State dynamics._  |

## Protected Attributes inherited from sdm::StochasticProcess

See [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md)

| Type | Name |
| ---: | :--- |
|  Vector | [**start\_distrib\_**](classsdm_1_1StochasticProcess.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**start\_generator**](classsdm_1_1StochasticProcess.md#variable-start-generator)  <br>_generator of starting state_  |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**state\_space\_**](classsdm_1_1StochasticProcess.md#variable-state-space-)  <br>_The state space._  |

## Protected Attributes inherited from sdm::World

See [sdm::World](classsdm_1_1World.md)

| Type | Name |
| ---: | :--- |
|  [**state**](namespacesdm.md#typedef-state) | [**internal**](classsdm_1_1World.md#variable-internal)   = = 0<br> |










## Public Functions Documentation


### function DecisionProcess [1/4]


```cpp
sdm::DecisionProcess::DecisionProcess () 
```



### function DecisionProcess [2/4]


```cpp
sdm::DecisionProcess::DecisionProcess (
    const DiscreteSpace < number > &,
    const DiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &
) 
```



### function DecisionProcess [3/4]


```cpp
sdm::DecisionProcess::DecisionProcess (
    const DiscreteSpace < number > &,
    const DiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &,
    const Vector &
) 
```



### function DecisionProcess [4/4]


```cpp
sdm::DecisionProcess::DecisionProcess (
    const DiscreteSpace < number > &,
    const DiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &,
    const StateDynamics &,
    const std::vector< Reward > &,
    const Vector &
) 
```



### function getActionSpace 


```cpp
const MultiDiscreteSpace < number > & sdm::DecisionProcess::getActionSpace () const
```



### function getAgentSpace 


```cpp
const DiscreteSpace < number > & sdm::DecisionProcess::getAgentSpace () const
```



### function getBound 


```cpp
double sdm::DecisionProcess::getBound () const
```




**Returns:**

the bound 




        

### function getCost [1/2]


```cpp
std::vector< double > sdm::DecisionProcess::getCost (
    number state,
    number jaction
) const
```



### function getCost [2/2]


```cpp
std::vector< double > sdm::DecisionProcess::getCost (
    number state,
    std::vector< number > jaction
) const
```



### function getCriterion 


```cpp
bool sdm::DecisionProcess::getCriterion () const
```




**Returns:**

bool 




        

### function getDiscount 


```cpp
double sdm::DecisionProcess::getDiscount () const
```




**Returns:**

value 




        

### function getFileName 


```cpp
std::string sdm::DecisionProcess::getFileName () 
```




**Returns:**

filename 




        

### function getNumActions [1/2]


```cpp
number sdm::DecisionProcess::getNumActions (
    number
) const
```



### function getNumActions [2/2]


```cpp
std::vector< number > sdm::DecisionProcess::getNumActions () const
```



### function getNumAgents 


```cpp
number sdm::DecisionProcess::getNumAgents () const
```



### function getNumJActions 


```cpp
number sdm::DecisionProcess::getNumJActions () const
```



### function getPlanningHorizon 


```cpp
number sdm::DecisionProcess::getPlanningHorizon () const
```




**Returns:**

the horizon 




        

### function getReward [1/2]


```cpp
double sdm::DecisionProcess::getReward (
    number state,
    number jaction,
    number ag_id
) const
```



### function getReward [2/2]


```cpp
double sdm::DecisionProcess::getReward (
    number state,
    std::vector< number > jaction,
    number ag_id
) const
```



### function getRewards [1/3]


```cpp
const std::vector< Reward > & sdm::DecisionProcess::getRewards () const
```



### function getRewards [2/3]


```cpp
std::vector< double > sdm::DecisionProcess::getRewards (
    number state,
    number jaction
) const
```



### function getRewards [3/3]


```cpp
std::vector< double > sdm::DecisionProcess::getRewards (
    number state,
    std::vector< number > jaction
) const
```



### function getStateDynamics 


```cpp
const StateDynamics & sdm::DecisionProcess::getStateDynamics () const
```



### function getTransitionProba [1/2]


```cpp
double sdm::DecisionProcess::getTransitionProba (
    number cstate,
    std::vector< number > jaction,
    number state
) const
```



### function getTransitionProba [2/2]


```cpp
double sdm::DecisionProcess::getTransitionProba (
    number cstate,
    number jaction,
    number state
) const
```



### function nextState [1/2]


```cpp
void sdm::DecisionProcess::nextState (
    number jaction
) 
```



### function nextState [2/2]


```cpp
void sdm::DecisionProcess::nextState (
    std::vector< number > jaction
) 
```



### function setBound 


```cpp
void sdm::DecisionProcess::setBound (
    double
) 
```




**Parameters:**


* `bound` the bound 



        

### function setCriterion 


```cpp
void sdm::DecisionProcess::setCriterion (
    bool
) 
```



### function setDiscount 


```cpp
void sdm::DecisionProcess::setDiscount (
    double
) 
```



### function setFileName 


```cpp
void sdm::DecisionProcess::setFileName (
    std::string
) 
```




**Parameters:**


* `filename` 



        

### function setPlanningHorizon 


```cpp
void sdm::DecisionProcess::setPlanningHorizon (
    number
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
MultiDiscreteSpace<number> sdm::DecisionProcess::action_space_;
```



### variable agent\_space\_ 


```cpp
DiscreteSpace<number> sdm::DecisionProcess::agent_space_;
```



### variable bound 


```cpp
double sdm::DecisionProcess::bound;
```



### variable criterion 


```cpp
Criterion sdm::DecisionProcess::criterion;
```



### variable discount 


```cpp
double sdm::DecisionProcess::discount;
```



### variable filename 


```cpp
std::string sdm::DecisionProcess::filename;
```



### variable planning\_horizon 


```cpp
number sdm::DecisionProcess::planning_horizon;
```



### variable rew\_ 


```cpp
std::vector<Reward> sdm::DecisionProcess::rew_;
```



### variable s\_dynamics\_ 


```cpp
StateDynamics sdm::DecisionProcess::s_dynamics_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/decision_process.hpp`