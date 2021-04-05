
<NavBar active_item_id="2"/>

# Class sdm::DiscreteMMDP


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md)



_The class for Discrete Multi-agent Markov Decision Processes._ 

* `#include <discrete_mmdp.hpp>`



Inherits the following classes: [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)









## Public Types inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

| Type | Name |
| ---: | :--- |
| typedef typename [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md)&lt; TStateSpace, TActionSpace, TDistrib &gt;::[**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) | [**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type)  <br> |
| typedef typename [**GymInterface**](classsdm_1_1GymInterface.md)&lt; TObsSpace, TActionSpace &gt;::[**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) | [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type)  <br> |
| typedef typename [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md)&lt; TStateSpace, TActionSpace, TDistrib &gt;::[**state\_type**](classsdm_1_1DecisionProcess.md#typedef-state-type) | [**state\_type**](classsdm_1_1DecisionProcess.md#typedef-state-type)  <br> |

## Public Types inherited from sdm::DecisionProcessBase

See [sdm::DecisionProcessBase](classsdm_1_1DecisionProcessBase.md)

| Type | Name |
| ---: | :--- |
| typedef TActionSpace | [**action\_space\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-space-type)  <br> |
| typedef typename TActionSpace::value\_type | [**action\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-type)  <br> |

## Public Types inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
| typedef TStateSpace | [**state\_space\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-space-type)  <br> |
| typedef typename TStateSpace::value\_type | [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type)  <br> |

















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md#function-discretemmdp-1-5) () <br> |
|   | [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md#function-discretemmdp-2-5) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp) <br> |
|   | [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md#function-discretemmdp-3-5) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; start\_distrib) <br> |
|   | [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md#function-discretemmdp-4-5) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp, std::shared\_ptr&lt; [**StateDynamics**](classsdm_1_1StateDynamics.md) &gt; state\_dyn, std::shared\_ptr&lt; [**Reward**](classsdm_1_1Reward.md) &gt; rew, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|   | [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md#function-discretemmdp-5-5) (std::string & filename) <br> |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1DiscreteMMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. Unfortunately, in this situation it isn't possible to transform a MMDP to a belief MDP._  |
|  std::shared\_ptr&lt; [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**toMDP**](classsdm_1_1DiscreteMMDP.md#function-tomdp) () <br>_Get the corresponding Markov Decision Process. It corresponds to the reformulation of the MMDP in a MDP where the_ [_**Joint**_](classsdm_1_1Joint.md) _discrete action space becOme a discrete action_[_**Space**_](classsdm_1_1Space.md) _._ |

## Public Functions inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

| Type | Name |
| ---: | :--- |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-1-5) () <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-2-5) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp) <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-3-5) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp, TDistrib) <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-4-5) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp, std::shared\_ptr&lt; TStateDynamics &gt;, std::shared\_ptr&lt; TReward &gt;, TDistrib start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|   | [**DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess-5-5) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp, std::shared\_ptr&lt; TObsSpace &gt; obs\_sp, std::shared\_ptr&lt; TStateDynamics &gt;, std::shared\_ptr&lt; TReward &gt;, TDistrib start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  std::shared\_ptr&lt; TActionSpace &gt; | [**getActionSpace**](classsdm_1_1DecisionProcess.md#function-getactionspace) () const<br> |
|  TDistrib | [**getNextStateDistrib**](classsdm_1_1DecisionProcess.md#function-getnextstatedistrib-1-2) ([**state\_type**](classsdm_1_1DecisionProcess.md#typedef-state-type) cstate, [**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) caction) <br>_Get the distribution over next states._  |
|  TDistrib | [**getNextStateDistrib**](classsdm_1_1DecisionProcess.md#function-getnextstatedistrib-2-2) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) caction) <br>_Get the distribution over next states._  |
|  std::enable\_if\_t&lt; TBool, [**number**](namespacesdm.md#typedef-number) &gt; | [**getNumAgents**](classsdm_1_1DecisionProcess.md#function-getnumagents-1-2) () <br> |
|  std::enable\_if\_t&lt;!TBool, [**number**](namespacesdm.md#typedef-number) &gt; | [**getNumAgents**](classsdm_1_1DecisionProcess.md#function-getnumagents-2-2) () <br> |
|  std::shared\_ptr&lt; TReward &gt; | [**getReward**](classsdm_1_1DecisionProcess.md#function-getreward-1-2) () const<br>_Get the reward function._  |
|  double | [**getReward**](classsdm_1_1DecisionProcess.md#function-getreward-2-2) ([**state\_type**](classsdm_1_1DecisionProcess.md#typedef-state-type) s, [**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
|  std::shared\_ptr&lt; TStateDynamics &gt; | [**getStateDynamics**](classsdm_1_1DecisionProcess.md#function-getstatedynamics) () const<br>_Get the state dynamics._  |
| virtual [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) | [**reset**](classsdm_1_1DecisionProcess.md#function-reset) () <br>_Reset the process to initial settings._  |
|  void | [**setReward**](classsdm_1_1DecisionProcess.md#function-setreward) (std::shared\_ptr&lt; TReward &gt; reward\_function) <br>_Set the reward function._  |
|  void | [**setStateDynamics**](classsdm_1_1DecisionProcess.md#function-setstatedynamics) (std::shared\_ptr&lt; TStateDynamics &gt; state\_dyn) <br>_Set the state dynamics._  |
|  std::enable\_if\_t&lt; TBool &gt; | [**setupDynamicsGenerator**](classsdm_1_1DecisionProcess.md#function-setupdynamicsgenerator-1-2) () <br> |
|  std::enable\_if\_t&lt;!TBool &gt; | [**setupDynamicsGenerator**](classsdm_1_1DecisionProcess.md#function-setupdynamicsgenerator-2-2) () <br> |
|  std::enable\_if\_t&lt; TBool, std::tuple&lt; [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type), std::vector&lt; double &gt;, bool &gt; &gt; | [**step**](classsdm_1_1DecisionProcess.md#function-step) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
|  std::enable\_if\_t&lt; TBool, [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) &gt; | [**updateState\_getObs**](classsdm_1_1DecisionProcess.md#function-updatestate-getobs) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
| virtual  | [**~DecisionProcess**](classsdm_1_1DecisionProcess.md#function-decisionprocess) () <br> |

## Public Functions inherited from sdm::DecisionProcessBase

See [sdm::DecisionProcessBase](classsdm_1_1DecisionProcessBase.md)

| Type | Name |
| ---: | :--- |
|   | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md#function-decisionprocessbase-1-3) () <br> |
|   | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md#function-decisionprocessbase-2-3) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp) <br> |
|   | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md#function-decisionprocessbase-3-3) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp, TDistrib start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  std::shared\_ptr&lt; TActionSpace &gt; | [**getActionSpace**](classsdm_1_1DecisionProcessBase.md#function-getactionspace) () const<br>_Getter for the action space._  |
|  double | [**getBound**](classsdm_1_1DecisionProcessBase.md#function-getbound) () <br>_Get the bound._  |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**getCriterion**](classsdm_1_1DecisionProcessBase.md#function-getcriterion) () <br>_Get the criterion. Can be of two types : REW\_MAX (reward maximisation) or COST\_MIN (cost minimization)._  |
|  double | [**getDiscount**](classsdm_1_1DecisionProcessBase.md#function-getdiscount) () <br>_Get the discount factor._  |
|  std::string | [**getFileName**](classsdm_1_1DecisionProcessBase.md#function-getfilename) () <br>_Get the filename._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getPlanningHorizon**](classsdm_1_1DecisionProcessBase.md#function-getplanninghorizon) () <br>_Get the planning horizon._  |
|  void | [**setActionSpace**](classsdm_1_1DecisionProcessBase.md#function-setactionspace) (std::shared\_ptr&lt; TActionSpace &gt;) <br>_Set the action space._  |
|  void | [**setBound**](classsdm_1_1DecisionProcessBase.md#function-setbound) (double bound) <br>_Set the bound._  |
|  void | [**setCriterion**](classsdm_1_1DecisionProcessBase.md#function-setcriterion) ([**Criterion**](namespacesdm.md#enum-criterion)) <br>_Set the criterion._  |
|  void | [**setDiscount**](classsdm_1_1DecisionProcessBase.md#function-setdiscount) (double) <br>_Set the discount factor._  |
|  void | [**setFileName**](classsdm_1_1DecisionProcessBase.md#function-setfilename) (std::string filename) <br>_Set the filename._  |
|  void | [**setPlanningHorizon**](classsdm_1_1DecisionProcessBase.md#function-setplanninghorizon) ([**number**](namespacesdm.md#typedef-number)) <br>_Set the planning horizon._  |

## Public Functions inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
|   | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md#function-stochasticprocessbase-1-3) () <br> |
|   | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md#function-stochasticprocessbase-2-3) (std::shared\_ptr&lt; TStateSpace &gt;) <br> |
|   | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md#function-stochasticprocessbase-3-3) (std::shared\_ptr&lt; TStateSpace &gt;, TDistrib) <br> |
|  [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type) | [**getInternalState**](classsdm_1_1StochasticProcessBase.md#function-getinternalstate) () const<br> |
|  TDistrib | [**getStartDistrib**](classsdm_1_1StochasticProcessBase.md#function-getstartdistrib) () const<br> |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**getStateSpace**](classsdm_1_1StochasticProcessBase.md#function-getstatespace) () const<br> |
|  void | [**setInternalState**](classsdm_1_1StochasticProcessBase.md#function-setinternalstate) ([**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type) new\_i\_state) <br> |
|  void | [**setStartDistrib**](classsdm_1_1StochasticProcessBase.md#function-setstartdistrib) (TDistrib) <br> |
|  void | [**setStateSpace**](classsdm_1_1StochasticProcessBase.md#function-setstatespace) (std::shared\_ptr&lt; TStateSpace &gt;) <br> |

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







## Protected Attributes inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

| Type | Name |
| ---: | :--- |
|  long | [**ctimestep\_**](classsdm_1_1DecisionProcess.md#variable-ctimestep-)   = = 0<br> |
|  std::unordered\_map&lt; [**state\_type**](classsdm_1_1DecisionProcess.md#typedef-state-type), std::unordered\_map&lt; [**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type), TDistrib &gt; &gt; | [**dynamics\_generator**](classsdm_1_1DecisionProcess.md#variable-dynamics-generator)  <br>_Map (state, jaction) to probability of (next\_state, next\_observation)_  _&gt; i.e. s\_{t+1}, o\_{t+1} ~ P(S\_{t+1}, O\_{t+1} | S\_t = s, A\_t = a )_ |
|  std::shared\_ptr&lt; TReward &gt; | [**reward\_function\_**](classsdm_1_1DecisionProcess.md#variable-reward-function-)  <br>[_**Reward**_](classsdm_1_1Reward.md) _functions._ |
|  std::shared\_ptr&lt; TStateDynamics &gt; | [**state\_dynamics\_**](classsdm_1_1DecisionProcess.md#variable-state-dynamics-)  <br>_State dynamics._  |

## Protected Attributes inherited from sdm::DecisionProcessBase

See [sdm::DecisionProcessBase](classsdm_1_1DecisionProcessBase.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; TActionSpace &gt; | [**action\_space\_**](classsdm_1_1DecisionProcessBase.md#variable-action-space-)  <br>_Action space for each agent._  |
|  double | [**bound\_**](classsdm_1_1DecisionProcessBase.md#variable-bound-)  <br> |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**criterion\_**](classsdm_1_1DecisionProcessBase.md#variable-criterion-)   = = Criterion::REW\_MAX<br>_type of optimization problem, e.g., reward maximazation or cost minimization._  |
|  double | [**discount\_**](classsdm_1_1DecisionProcessBase.md#variable-discount-)   = = 1.0<br>_factor used to discount rewards (respectively costs) in the future._  |
|  std::string | [**filename\_**](classsdm_1_1DecisionProcessBase.md#variable-filename-)  <br>_name of the file that generates the environment_  |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1DecisionProcessBase.md#variable-planning-horizon-)   = = 0<br>_planning horizon_  |

## Protected Attributes inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
|  TDistrib | [**start\_distrib\_**](classsdm_1_1StochasticProcessBase.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**state\_space\_**](classsdm_1_1StochasticProcessBase.md#variable-state-space-)  <br>_The state space._  |

## Protected Attributes inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; TActSpace &gt; | [**action\_space\_**](classsdm_1_1GymInterface.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**observation\_space\_**](classsdm_1_1GymInterface.md#variable-observation-space-)  <br> |







## Protected Functions inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

| Type | Name |
| ---: | :--- |
|  std::enable\_if\_t&lt; TBool, [**number**](namespacesdm.md#typedef-number) &gt; | [**getAction**](classsdm_1_1DecisionProcess.md#function-getaction-1-2) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
|  std::enable\_if\_t&lt;!TBool, [**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) &gt; | [**getAction**](classsdm_1_1DecisionProcess.md#function-getaction-2-2) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
|  std::enable\_if\_t&lt; TBool, [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) &gt; | [**resetProcess**](classsdm_1_1DecisionProcess.md#function-resetprocess-1-2) () <br> |
|  std::enable\_if\_t&lt;!TBool, [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) &gt; | [**resetProcess**](classsdm_1_1DecisionProcess.md#function-resetprocess-2-2) () <br> |









## Public Functions Documentation


### function DiscreteMMDP [1/5]


```cpp
sdm::DiscreteMMDP::DiscreteMMDP () 
```



### function DiscreteMMDP [2/5]


```cpp
sdm::DiscreteMMDP::DiscreteMMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< MultiDiscreteSpace < number >> action_sp
) 
```



### function DiscreteMMDP [3/5]


```cpp
sdm::DiscreteMMDP::DiscreteMMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< MultiDiscreteSpace < number >> action_sp,
    std::discrete_distribution< number > start_distrib
) 
```



### function DiscreteMMDP [4/5]


```cpp
sdm::DiscreteMMDP::DiscreteMMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< MultiDiscreteSpace < number >> action_sp,
    std::shared_ptr< StateDynamics > state_dyn,
    std::shared_ptr< Reward > rew,
    std::discrete_distribution< number > start_distrib,
    number planning_horizon=0,
    double discount=0.9,
    Criterion criterion=Criterion::REW_MAX
) 
```



### function DiscreteMMDP [5/5]


```cpp
sdm::DiscreteMMDP::DiscreteMMDP (
    std::string & filename
) 
```



### function toBeliefMDP 


```cpp
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::DiscreteMMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< DiscreteMDP > sdm::DiscreteMMDP::toMDP () 
```




**Returns:**

a belief MDP 




        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/discrete_mmdp.hpp`