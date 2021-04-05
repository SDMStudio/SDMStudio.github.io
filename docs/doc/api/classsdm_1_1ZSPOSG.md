
<NavBar active_item_id="2"/>

# Class sdm::ZSPOSG


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ZSPOSG**](classsdm_1_1ZSPOSG.md)





* `#include <zsposg.hpp>`



Inherits the following classes: [sdm::POSG](classsdm_1_1POSG.md)




































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ZSPOSG**](classsdm_1_1ZSPOSG.md#function-zsposg-1-3) () <br> |
|   | [**ZSPOSG**](classsdm_1_1ZSPOSG.md#function-zsposg-2-3) (const [**DecPOMDP**](classsdm_1_1DecPOMDP.md) &) <br> |
|   | [**ZSPOSG**](classsdm_1_1ZSPOSG.md#function-zsposg-3-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**StateDynamics**](classsdm_1_1StateDynamics.md) &, const [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) &, const [**Reward**](classsdm_1_1Reward.md) &, const Vector &) <br> |
|  double | [**getReward**](classsdm_1_1ZSPOSG.md#function-getreward-1-2) ([**number**](namespacesdm.md#typedef-number) state, [**number**](namespacesdm.md#typedef-number) jaction, [**number**](namespacesdm.md#typedef-number) ag\_id) const<br> |
|  double | [**getReward**](classsdm_1_1ZSPOSG.md#function-getreward-2-2) ([**number**](namespacesdm.md#typedef-number) state, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction, [**number**](namespacesdm.md#typedef-number) ag\_id) const<br> |
|  std::vector&lt; double &gt; | [**getRewards**](classsdm_1_1ZSPOSG.md#function-getrewards-1-2) ([**number**](namespacesdm.md#typedef-number) state, [**number**](namespacesdm.md#typedef-number) jaction) const<br>_Get transition probability from joint action (as a single one) for all agents._  |
|  std::vector&lt; double &gt; | [**getRewards**](classsdm_1_1ZSPOSG.md#function-getrewards-2-2) ([**number**](namespacesdm.md#typedef-number) state, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction) const<br>_Get reward from joint action for all agents._  |

## Public Functions inherited from sdm::POSG

See [sdm::POSG](classsdm_1_1POSG.md)

| Type | Name |
| ---: | :--- |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-1-8) () <br> |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-2-8) (const [**POSG**](classsdm_1_1POSG.md) & posg) <br> |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-3-8) (const [**SG**](namespacesdm.md#typedef-sg) & stochastic\_game) <br>_Construct a_ [_**POSG**_](classsdm_1_1POSG.md) _from a SG (i.e. build observation function as identity)._ |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-4-8) (const std::string & filename) <br>_Construct a_ [_**POSG**_](classsdm_1_1POSG.md) _from a file describing the problem._ |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-5-8) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number)) <br>_Construct a_ [_**POSG**_](classsdm_1_1POSG.md) _._ |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-6-8) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number), const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br>_Construct a_ [_**POSG**_](classsdm_1_1POSG.md) _._ |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-7-8) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br>_Construct a_ [_**POSG**_](classsdm_1_1POSG.md) _._ |
|   | [**POSG**](classsdm_1_1POSG.md#function-posg-8-8) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**StateDynamics**](classsdm_1_1StateDynamics.md) &, const [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) &, const std::vector&lt; [**Reward**](classsdm_1_1Reward.md) &gt; &, const Vector &) <br>_Construct a_ [_**POSG**_](classsdm_1_1POSG.md) _._ |
|  void | [**generateFile**](classsdm_1_1POSG.md#function-generatefile) (std::string) const<br>_Save problem in file with given format (.xml, .json or .{dpomdp, posg, zsposg})._  |
|  double | [**getDynamics**](classsdm_1_1POSG.md#function-getdynamics-1-2) ([**number**](namespacesdm.md#typedef-number) cstate, [**number**](namespacesdm.md#typedef-number) jaction, [**number**](namespacesdm.md#typedef-number) jobservation, [**number**](namespacesdm.md#typedef-number) nstate) const<br> |
|  const Matrix & | [**getDynamics**](classsdm_1_1POSG.md#function-getdynamics-2-2) ([**number**](namespacesdm.md#typedef-number) jaction, [**number**](namespacesdm.md#typedef-number) jobservation) const<br> |
|  std::tuple&lt; std::vector&lt; double &gt;, [**observation**](namespacesdm.md#typedef-observation), [**state**](namespacesdm.md#typedef-state) &gt; | [**getDynamicsGenerator**](classsdm_1_1POSG.md#function-getdynamicsgenerator) ([**number**](namespacesdm.md#typedef-number) x, [**number**](namespacesdm.md#typedef-number) a) const<br> |
|  const [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) & | [**getObsDynamics**](classsdm_1_1POSG.md#function-getobsdynamics) () const<br> |
|  double | [**getObservationProbability**](classsdm_1_1POSG.md#function-getobservationprobability-1-2) ([**number**](namespacesdm.md#typedef-number) jaction, [**number**](namespacesdm.md#typedef-number) jobservation, [**number**](namespacesdm.md#typedef-number) state) const<br>_Getter for observation probability._  |
|  double | [**getObservationProbability**](classsdm_1_1POSG.md#function-getobservationprobability-2-2) (std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jobservation, [**number**](namespacesdm.md#typedef-number) state) const<br>_Getter for observation probability._  |
|  const Matrix & | [**getObservations**](classsdm_1_1POSG.md#function-getobservations-1-2) ([**number**](namespacesdm.md#typedef-number) jaction) const<br> |
|  const Matrix & | [**getObservations**](classsdm_1_1POSG.md#function-getobservations-2-2) (std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; jaction) const<br> |
|  std::string | [**toJSON**](classsdm_1_1POSG.md#function-tojson) () const<br>_Encodes_ [_**POSG**_](classsdm_1_1POSG.md) _class into a string (JSON format)._ |
|  std::string | [**toStdFormat**](classsdm_1_1POSG.md#function-tostdformat) () const<br>_Encodes_ [_**POSG**_](classsdm_1_1POSG.md) _class into a string (standard .posg or .dpomdp or .zsposg format)._ |
|  std::string | [**toXML**](classsdm_1_1POSG.md#function-toxml) () const<br>_Encodes_ [_**POSG**_](classsdm_1_1POSG.md) _class into a string (XML format)._ |

## Public Functions inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

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


## Public Functions inherited from sdm::PartiallyObservableProcess

See [sdm::PartiallyObservableProcess](classsdm_1_1PartiallyObservableProcess.md)

| Type | Name |
| ---: | :--- |
|   | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md#function-partiallyobservableprocess-1-3) () <br> |
|   | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md#function-partiallyobservableprocess-2-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br> |
|   | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md#function-partiallyobservableprocess-3-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const Vector &) <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumJObservations**](classsdm_1_1PartiallyObservableProcess.md#function-getnumjobservations) () const<br>_Get the number of joint observations._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumObservations**](classsdm_1_1PartiallyObservableProcess.md#function-getnumobservations-1-2) ([**number**](namespacesdm.md#typedef-number)) const<br>_Get the number of observations for a specific agent._  |
|  std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getNumObservations**](classsdm_1_1PartiallyObservableProcess.md#function-getnumobservations-2-2) () const<br>_Get the number of observation for every agents._  |
|  const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getObsSpace**](classsdm_1_1PartiallyObservableProcess.md#function-getobsspace) () const<br>_Getter for the observation spaces._  |

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























## Protected Attributes inherited from sdm::POSG

See [sdm::POSG](classsdm_1_1POSG.md)

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::discrete\_distribution&lt; std::size\_t &gt; &gt; &gt; | [**dynamics\_generator**](classsdm_1_1POSG.md#variable-dynamics-generator)  <br>_Map (state, jaction) to probability of (next\_state, next\_observation)_  _&gt; i.e. s\_{t+1}, o\_{t+1} ~ P(S\_{t+1}, O\_{t+1} | S\_t = s, A\_t = a )_ |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::pair&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**encoding**](classsdm_1_1POSG.md#variable-encoding)  <br>_map integer representing joint state/observation to this couple (state, observation)_  |
|  [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) | [**o\_dynamics\_**](classsdm_1_1POSG.md#variable-o-dynamics-)  <br> |

## Protected Attributes inherited from sdm::DecisionProcess

See [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)

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

## Protected Attributes inherited from sdm::PartiallyObservableProcess

See [sdm::PartiallyObservableProcess](classsdm_1_1PartiallyObservableProcess.md)

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**obs\_spaces\_**](classsdm_1_1PartiallyObservableProcess.md#variable-obs-spaces-)  <br>_The state space._  |

## Protected Attributes inherited from sdm::StochasticProcess

See [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md)

| Type | Name |
| ---: | :--- |
|  Vector | [**start\_distrib\_**](classsdm_1_1StochasticProcess.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**start\_generator**](classsdm_1_1StochasticProcess.md#variable-start-generator)  <br>_generator of starting state_  |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**state\_space\_**](classsdm_1_1StochasticProcess.md#variable-state-space-)  <br>_The state space._  |









## Protected Functions inherited from sdm::POSG

See [sdm::POSG](classsdm_1_1POSG.md)

| Type | Name |
| ---: | :--- |
|  void | [**setupDynamicsGenerator**](classsdm_1_1POSG.md#function-setupdynamicsgenerator) () <br>_Setup de dynamics generator._  |













## Public Functions Documentation


### function ZSPOSG [1/3]


```cpp
sdm::ZSPOSG::ZSPOSG () 
```



### function ZSPOSG [2/3]


```cpp
sdm::ZSPOSG::ZSPOSG (
    const DecPOMDP &
) 
```



### function ZSPOSG [3/3]


```cpp
sdm::ZSPOSG::ZSPOSG (
    const DiscreteSpace < number > &,
    const DiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &,
    const StateDynamics &,
    const ObservationDynamics &,
    const Reward &,
    const Vector &
) 
```




**Parameters:**


* `state_sp` the state space 
* `agent_sp` the agent space 
* `action_sp` the multi action space 
* `obs_sp` the multi observation space 
* `s_dyn` state dynamics 
* `o_dyn` observation dynamics 
* `rew` reward function common to all agents 
* `start_distrib` start distribution (optional) 



        

### function getReward [1/2]


```cpp
double sdm::ZSPOSG::getReward (
    number state,
    number jaction,
    number ag_id
) const
```



### function getReward [2/2]


```cpp
double sdm::ZSPOSG::getReward (
    number state,
    std::vector< number > jaction,
    number ag_id
) const
```



### function getRewards [1/2]


```cpp
std::vector< double > sdm::ZSPOSG::getRewards (
    number state,
    number jaction
) const
```



### function getRewards [2/2]


```cpp
std::vector< double > sdm::ZSPOSG::getRewards (
    number state,
    std::vector< number > jaction
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/zsposg.hpp`