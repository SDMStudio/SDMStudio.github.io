
<NavBar active_item_id="2"/>

# Class sdm::DiscreteMDP


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md)



_The class for Discrete Markov Decision Processes._ 

* `#include <discrete_mdp.hpp>`



Inherits the following classes: [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md),  [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md),  std::enable_shared_from_this< DiscreteMDP >









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
|   | [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md#function-discretemdp-1-5) () <br> |
|   | [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md#function-discretemdp-2-5) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp) <br> |
|   | [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md#function-discretemdp-3-5) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; start\_distrib) <br> |
|   | [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md#function-discretemdp-4-5) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp, std::shared\_ptr&lt; [**StateDynamics**](classsdm_1_1StateDynamics.md) &gt; state\_dyn, std::shared\_ptr&lt; [**Reward**](classsdm_1_1Reward.md) &gt; rew, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|   | [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md#function-discretemdp-5-5) (std::string & filename) <br> |
| virtual std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**getActionSpaceAt**](classsdm_1_1DiscreteMDP.md#function-getactionspaceat) (const [**number**](namespacesdm.md#typedef-number) & state) <br>_Get the actions availables at a specific state._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1DiscreteMDP.md#function-getexpectednextvalue) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; \* value\_function, const [**number**](namespacesdm.md#typedef-number) & state, const [**number**](namespacesdm.md#typedef-number) & action, int t=0) const<br>_Get the expected next value._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getInitialState**](classsdm_1_1DiscreteMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
|  std::shared\_ptr&lt; [**Reward**](classsdm_1_1Reward.md) &gt; | [**getReward**](classsdm_1_1DiscreteMDP.md#function-getreward-1-2) () const<br> |
| virtual double | [**getReward**](classsdm_1_1DiscreteMDP.md#function-getreward-2-2) (const [**number**](namespacesdm.md#typedef-number) & state, const [**number**](namespacesdm.md#typedef-number) & action) const<br>_Get the reward at a given occupancy state and occupancy action._  |
| virtual [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) \* | [**getUnderlyingProblem**](classsdm_1_1DiscreteMDP.md#function-getunderlyingproblem) () <br>_Get the underlying problem. For instance the underlying DecPOMDP of the_ [_**OccupancyMDP**_](classsdm_1_1OccupancyMDP.md) _or the underlying POMDP of the current_[_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _._ |
|  std::shared\_ptr&lt; [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**getptr**](classsdm_1_1DiscreteMDP.md#function-getptr) () <br> |
| virtual bool | [**isSerialized**](classsdm_1_1DiscreteMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**nextState**](classsdm_1_1DiscreteMDP.md#function-nextstate) (const [**number**](namespacesdm.md#typedef-number) & state, const [**number**](namespacesdm.md#typedef-number) & action, int t=0, [**HSVI**](classsdm_1_1HSVI.md)&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; \* hsvi=nullptr) const<br>_Get the next occupancy state._  |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1DiscreteMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Belief Markov Decision Process. Unfortunately, in this situation it isn't possible to transform a MMDP to a belief MDP._  |
|  std::shared\_ptr&lt; [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**toMDP**](classsdm_1_1DiscreteMDP.md#function-tomdp) () <br> |

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


### function DiscreteMDP [1/5]


```cpp
sdm::DiscreteMDP::DiscreteMDP () 
```



### function DiscreteMDP [2/5]


```cpp
sdm::DiscreteMDP::DiscreteMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< DiscreteSpace < number >> action_sp
) 
```



### function DiscreteMDP [3/5]


```cpp
sdm::DiscreteMDP::DiscreteMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< DiscreteSpace < number >> action_sp,
    std::discrete_distribution< number > start_distrib
) 
```



### function DiscreteMDP [4/5]


```cpp
sdm::DiscreteMDP::DiscreteMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< DiscreteSpace < number >> action_sp,
    std::shared_ptr< StateDynamics > state_dyn,
    std::shared_ptr< Reward > rew,
    std::discrete_distribution< number > start_distrib,
    number planning_horizon=0,
    double discount=0.9,
    Criterion criterion=Criterion::REW_MAX
) 
```



### function DiscreteMDP [5/5]


```cpp
sdm::DiscreteMDP::DiscreteMDP (
    std::string & filename
) 
```



### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< DiscreteSpace < number > > sdm::DiscreteMDP::getActionSpaceAt (
    const number & state
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the action space 




        
Implements [*sdm::SolvableByHSVI::getActionSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat)


### function getExpectedNextValue 


```cpp
virtual double sdm::DiscreteMDP::getExpectedNextValue (
    ValueFunction < number , number > * value_function,
    const number & state,
    const number & action,
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
virtual number sdm::DiscreteMDP::getInitialState () 
```


Implements [*sdm::SolvableByHSVI::getInitialState*](classsdm_1_1SolvableByHSVI.md#function-getinitialstate)


### function getReward [1/2]


```cpp
std::shared_ptr< Reward > sdm::DiscreteMDP::getReward () const
```



### function getReward [2/2]


```cpp
virtual double sdm::DiscreteMDP::getReward (
    const number & state,
    const number & action
) const
```


Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getUnderlyingProblem 


```cpp
virtual DiscreteMDP * sdm::DiscreteMDP::getUnderlyingProblem () 
```




**Returns:**

the underlying problem 




        
Implements [*sdm::SolvableByHSVI::getUnderlyingProblem*](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem)


### function getptr 


```cpp
std::shared_ptr< DiscreteMDP > sdm::DiscreteMDP::getptr () 
```



### function isSerialized 


```cpp
virtual bool sdm::DiscreteMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::SolvableByHSVI::isSerialized*](classsdm_1_1SolvableByHSVI.md#function-isserialized)


### function nextState 


```cpp
virtual number sdm::DiscreteMDP::nextState (
    const number & state,
    const number & action,
    int t=0,
    HSVI < number , number > * hsvi=nullptr
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
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::DiscreteMDP::toBeliefMDP () 
```




**Returns:**

a belief MDP 




        

### function toMDP 


```cpp
std::shared_ptr< DiscreteMDP > sdm::DiscreteMDP::toMDP () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/discrete_mdp.hpp`