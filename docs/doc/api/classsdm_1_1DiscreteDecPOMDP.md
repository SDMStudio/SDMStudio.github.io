
<NavBar active_item_id="2"/>

# Class sdm::DiscreteDecPOMDP


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md)



_The class for Discrete Decentralized Partially Observable Markov Decision Processes. This class is central in SDMS since the actual parser can only parse files that are conform to the .dpomdp format (see_ [masplan page](http://masplan.org/problem_domains) _)._

* `#include <discrete_decpomdp.hpp>`



Inherits the following classes: [sdm::PartiallyObservableDecisionProcess](classsdm_1_1PartiallyObservableDecisionProcess.md),  std::enable_shared_from_this< DiscreteDecPOMDP >








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md)&lt; [**OccupancyState**](classsdm_1_1OccupancyState.md)&lt; [**number**](namespacesdm.md#typedef-number), [**JointHistoryTree\_p**](namespacesdm.md#typedef-jointhistorytree-p)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt;, [**Joint**](classsdm_1_1Joint.md)&lt; [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)&lt; [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**number**](namespacesdm.md#typedef-number) &gt; &gt;&gt; | [**occupancy\_mdp**](classsdm_1_1DiscreteDecPOMDP.md#typedef-occupancy-mdp)  <br> |

## Public Types inherited from sdm::PartiallyObservableDecisionProcess

See [sdm::PartiallyObservableDecisionProcess](classsdm_1_1PartiallyObservableDecisionProcess.md)

| Type | Name |
| ---: | :--- |
| typedef typename [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md)&lt; TStateSpace, TActionSpace, TDistrib &gt;::[**action\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-type) | [**action\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-action-type)  <br> |
| typedef typename [**DecisionProcess**](classsdm_1_1DecisionProcess.md)&lt; TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TReward, TDistrib &gt;::[**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type) | [**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type)  <br> |
| typedef typename [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md)&lt; TStateSpace, TActionSpace, TDistrib &gt;::[**state\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-state-type) | [**state\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-state-type)  <br> |

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


## Public Types inherited from sdm::PartiallyObservableProcessBase

See [sdm::PartiallyObservableProcessBase](classsdm_1_1PartiallyObservableProcessBase.md)

| Type | Name |
| ---: | :--- |
| typedef TObsSpace | [**observation\_space\_type**](classsdm_1_1PartiallyObservableProcessBase.md#typedef-observation-space-type)  <br> |
| typedef typename TObsSpace::value\_type | [**observation\_type**](classsdm_1_1PartiallyObservableProcessBase.md#typedef-observation-type)  <br> |

## Public Types inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
| typedef TStateSpace | [**state\_space\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-space-type)  <br> |
| typedef typename TStateSpace::value\_type | [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type)  <br> |

























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-discretedecpomdp-1-4) () <br> |
|   | [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-discretedecpomdp-2-4) (std::string & filename) <br> |
|   | [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-discretedecpomdp-3-4) ([**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) & copy) <br> |
|   | [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-discretedecpomdp-4-4) (std::shared\_ptr&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; state\_sp, std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; action\_sp, std::shared\_ptr&lt; [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;&gt; obs\_sp, std::shared\_ptr&lt; [**StateDynamics**](classsdm_1_1StateDynamics.md) &gt; state\_dyn, std::shared\_ptr&lt; [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) &gt; obs\_dyn, std::shared\_ptr&lt; [**Reward**](classsdm_1_1Reward.md) &gt; rew\_f, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  void | [**generateFile**](classsdm_1_1DiscreteDecPOMDP.md#function-generatefile) (std::string filename) <br>_Save problem in file with given format (.xml, .json or .{dpomdp, posg, zsposg})._  |
|  std::shared\_ptr&lt; [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**getptr**](classsdm_1_1DiscreteDecPOMDP.md#function-getptr) () <br> |
|  std::shared\_ptr&lt; [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**toBeliefMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-tobeliefmdp) () <br>_Get the corresponding Partially Observable Markov Decision Process. The induced POMDP is the DecPOMP problem transformed as it was a single agent problem. The joint actions and observations are represented as single actions._  |
|  std::string | [**toJSON**](classsdm_1_1DiscreteDecPOMDP.md#function-tojson) () <br>_Encodes_ [_**DiscreteDecPOMDP**_](classsdm_1_1DiscreteDecPOMDP.md) _class into a string (JSON format)._ |
|  std::shared\_ptr&lt; [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**toMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-tomdp) () <br>_Get the corresponding Markov Decision Process. The induced MDP is the DecPOMP problem transformed as it was a single agent and fully observable problem. The joint actions are represented as single actions._  |
|  std::shared\_ptr&lt; [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) &gt; | [**toMMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-tommdp) () <br>_Get the corresponding Multi-agent Markov Decision Process. It corresponds to the relaxation of the original DecPOMP assuming that all agents can observation the entire state of the environment._  |
|  std::shared\_ptr&lt; [**occupancy\_mdp**](classsdm_1_1DiscreteDecPOMDP.md#typedef-occupancy-mdp) &gt; | [**toOccupancyMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-tooccupancymdp) () <br>_Get the corresponding Occupancy Markov Decision Process. It corresponds to the reformulation of the original DecPOMP in MDP where the state space is the space of occupancy simplex and the action space is a set of separable joint deterministic decision rules._  |
|  std::shared\_ptr&lt; [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) &gt; | [**toPOMDP**](classsdm_1_1DiscreteDecPOMDP.md#function-topomdp) () <br>_Get the corresponding Partially Observable Markov Decision Process. The induced POMDP is the DecPOMP problem transformed as it was a single agent problem. The joint actions and observations are represented as single actions._  |
|  std::string | [**toStdFormat**](classsdm_1_1DiscreteDecPOMDP.md#function-tostdformat) () <br>_Encodes_ [_**DiscreteDecPOMDP**_](classsdm_1_1DiscreteDecPOMDP.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |
|  std::string | [**toXML**](classsdm_1_1DiscreteDecPOMDP.md#function-toxml) () <br>_Encodes_ [_**DiscreteDecPOMDP**_](classsdm_1_1DiscreteDecPOMDP.md) _class into a string (XML format)._ |

## Public Functions inherited from sdm::PartiallyObservableDecisionProcess

See [sdm::PartiallyObservableDecisionProcess](classsdm_1_1PartiallyObservableDecisionProcess.md)

| Type | Name |
| ---: | :--- |
|   | [**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-partiallyobservabledecisionprocess-1-3) () <br> |
|   | [**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-partiallyobservabledecisionprocess-2-3) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp, std::shared\_ptr&lt; TObsSpace &gt; obs\_sp, std::shared\_ptr&lt; TStateDynamics &gt; state\_dyn, std::shared\_ptr&lt; TObsDynamics &gt; obs\_dyn, std::shared\_ptr&lt; TReward &gt;, TDistrib start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|   | [**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-partiallyobservabledecisionprocess-3-3) ([**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md) & copy) <br> |
|  std::shared\_ptr&lt; TObsDynamics &gt; | [**getObsDynamics**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-getobsdynamics) () const<br>_Get the observation dynamics._  |
|  void | [**setObsDynamics**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-setobsdynamics) (std::shared\_ptr&lt; TObsDynamics &gt; obs\_dyn) <br>_Set the observation dynamics._  |
|  std::enable\_if\_t&lt; TBool &gt; | [**setupDynamicsGenerator**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-setupdynamicsgenerator-1-2) () <br>_Setup the dynamics generator for discrete problems. The dynamics generator allows to efficiently interact with the environment without recomputing transition probabilities at each timestep._  |
|  std::enable\_if\_t&lt;!TBool &gt; | [**setupDynamicsGenerator**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-setupdynamicsgenerator-2-2) () <br>_Setup the dynamics generator for constinuous problems. The dynamics generator allows to efficiently interact with the environment without recomputing transition probabilities at each timestep._  |
|  std::tuple&lt; [**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type), std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-step) ([**action\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-type) a) <br> |
|  [**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type) | [**updateState\_getObs**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-updatestate-getobs) ([**action\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-type) a) <br> |
| virtual  | [**~PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-partiallyobservabledecisionprocess) () <br> |

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

## Public Functions inherited from sdm::PartiallyObservableProcessBase

See [sdm::PartiallyObservableProcessBase](classsdm_1_1PartiallyObservableProcessBase.md)

| Type | Name |
| ---: | :--- |
|   | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md#function-partiallyobservableprocessbase-1-3) () <br> |
|   | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md#function-partiallyobservableprocessbase-2-3) (std::shared\_ptr&lt; TStateSpace &gt;, std::shared\_ptr&lt; TObsSpace &gt;) <br> |
|   | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md#function-partiallyobservableprocessbase-3-3) (std::shared\_ptr&lt; TStateSpace &gt;, std::shared\_ptr&lt; TObsSpace &gt;, TDistrib) <br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**getObsSpace**](classsdm_1_1PartiallyObservableProcessBase.md#function-getobsspace) () const<br>_Getter for the observation space._  |
|  void | [**setObsSpace**](classsdm_1_1PartiallyObservableProcessBase.md#function-setobsspace) (std::shared\_ptr&lt; TObsSpace &gt;) <br>_Set the observation space._  |

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














## Protected Types inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| typedef typename TActSpace::value\_type | [**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type)  <br> |
| typedef typename TObsSpace::value\_type | [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type)  <br> |












## Protected Attributes inherited from sdm::PartiallyObservableDecisionProcess

See [sdm::PartiallyObservableDecisionProcess](classsdm_1_1PartiallyObservableDecisionProcess.md)

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::pair&lt; [**state\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-state-type), [**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type) &gt; &gt; | [**encoding**](classsdm_1_1PartiallyObservableDecisionProcess.md#variable-encoding)  <br>_map integer representing joint state/observation to this couple (state, observation)_  |
|  std::shared\_ptr&lt; TObsDynamics &gt; | [**obs\_dynamics\_**](classsdm_1_1PartiallyObservableDecisionProcess.md#variable-obs-dynamics-)  <br>_State dynamics._  |

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

## Protected Attributes inherited from sdm::PartiallyObservableProcessBase

See [sdm::PartiallyObservableProcessBase](classsdm_1_1PartiallyObservableProcessBase.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**obs\_space\_**](classsdm_1_1PartiallyObservableProcessBase.md#variable-obs-space-)  <br>_The obervation space._  |

## Protected Attributes inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
|  TDistrib | [**start\_distrib\_**](classsdm_1_1StochasticProcessBase.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**state\_space\_**](classsdm_1_1StochasticProcessBase.md#variable-state-space-)  <br>_The state space._  |










## Protected Functions inherited from sdm::PartiallyObservableDecisionProcess

See [sdm::PartiallyObservableDecisionProcess](classsdm_1_1PartiallyObservableDecisionProcess.md)

| Type | Name |
| ---: | :--- |
|  std::enable\_if\_t&lt; TBool, [**number**](namespacesdm.md#typedef-number) &gt; | [**getObservation**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-getobservation-1-2) ([**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type) o) <br> |
|  std::enable\_if\_t&lt;!TBool, [**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type) &gt; | [**getObservation**](classsdm_1_1PartiallyObservableDecisionProcess.md#function-getobservation-2-2) ([**observation\_type**](classsdm_1_1PartiallyObservableDecisionProcess.md#typedef-observation-type) o) <br> |

## Protected Functions inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

| Type | Name |
| ---: | :--- |
|  std::enable\_if\_t&lt; TBool, [**number**](namespacesdm.md#typedef-number) &gt; | [**getAction**](classsdm_1_1DecisionProcess.md#function-getaction-1-2) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
|  std::enable\_if\_t&lt;!TBool, [**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) &gt; | [**getAction**](classsdm_1_1DecisionProcess.md#function-getaction-2-2) ([**action\_type**](classsdm_1_1DecisionProcess.md#typedef-action-type) a) <br> |
|  std::enable\_if\_t&lt; TBool, [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) &gt; | [**resetProcess**](classsdm_1_1DecisionProcess.md#function-resetprocess-1-2) () <br> |
|  std::enable\_if\_t&lt;!TBool, [**observation\_type**](classsdm_1_1DecisionProcess.md#typedef-observation-type) &gt; | [**resetProcess**](classsdm_1_1DecisionProcess.md#function-resetprocess-2-2) () <br> |














## Public Types Documentation


### typedef occupancy\_mdp 


```cpp
using sdm::DiscreteDecPOMDP::occupancy_mdp =  OccupancyMDP<OccupancyState<number, JointHistoryTree_p<number> >, Joint<DeterministicDecisionRule<HistoryTree_p<number>, number> >>;
```


## Public Functions Documentation


### function DiscreteDecPOMDP [1/4]


```cpp
sdm::DiscreteDecPOMDP::DiscreteDecPOMDP () 
```



### function DiscreteDecPOMDP [2/4]


```cpp
sdm::DiscreteDecPOMDP::DiscreteDecPOMDP (
    std::string & filename
) 
```



### function DiscreteDecPOMDP [3/4]


```cpp
sdm::DiscreteDecPOMDP::DiscreteDecPOMDP (
    DiscreteDecPOMDP & copy
) 
```



### function DiscreteDecPOMDP [4/4]


```cpp
sdm::DiscreteDecPOMDP::DiscreteDecPOMDP (
    std::shared_ptr< DiscreteSpace < number >> state_sp,
    std::shared_ptr< MultiDiscreteSpace < number >> action_sp,
    std::shared_ptr< MultiDiscreteSpace < number >> obs_sp,
    std::shared_ptr< StateDynamics > state_dyn,
    std::shared_ptr< ObservationDynamics > obs_dyn,
    std::shared_ptr< Reward > rew_f,
    std::discrete_distribution< number > start_distrib,
    number planning_horizon=0,
    double discount=0.9,
    Criterion criterion=Criterion::REW_MAX
) 
```



### function generateFile 


```cpp
void sdm::DiscreteDecPOMDP::generateFile (
    std::string filename
) 
```




**Parameters:**


* `filename` the file name 



        

### function getptr 


```cpp
std::shared_ptr< DiscreteDecPOMDP > sdm::DiscreteDecPOMDP::getptr () 
```



### function toBeliefMDP 


```cpp
std::shared_ptr< BeliefMDP < BeliefState , number , number > > sdm::DiscreteDecPOMDP::toBeliefMDP () 
```




**Returns:**

The corresponding POMDP. 




        

### function toJSON 


```cpp
std::string sdm::DiscreteDecPOMDP::toJSON () 
```



### function toMDP 


```cpp
std::shared_ptr< DiscreteMDP > sdm::DiscreteDecPOMDP::toMDP () 
```




**Returns:**

The corresponding MDP. 




        

### function toMMDP 


```cpp
std::shared_ptr< DiscreteMMDP > sdm::DiscreteDecPOMDP::toMMDP () 
```




**Returns:**

a MMDP. 




        

### function toOccupancyMDP 


```cpp
std::shared_ptr< occupancy_mdp > sdm::DiscreteDecPOMDP::toOccupancyMDP () 
```




**Returns:**

an occupancy state MDP 




        

### function toPOMDP 


```cpp
std::shared_ptr< DiscretePOMDP > sdm::DiscreteDecPOMDP::toPOMDP () 
```




**Returns:**

The corresponding POMDP. 




        

### function toStdFormat 


```cpp
std::string sdm::DiscreteDecPOMDP::toStdFormat () 
```




**Returns:**

the process as XML 




        

### function toXML 


```cpp
std::string sdm::DiscreteDecPOMDP::toXML () 
```




**Returns:**

the process as XML 




        ## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::DiscreteDecPOMDP::operator<< (
    std::ostream & os,
    DiscreteDecPOMDP & model
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/discrete_decpomdp.hpp`