
# Class sdm::ActionVFSawtoothLPSerial

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md)





* `#include <action_sawtooth_lp_serial.hpp>`



Inherits the following classes: [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**ActionVFSawtoothLP::TData**](classsdm_1_1ActionVFSawtoothLP.md#typedef-tdata) | [**TData**](classsdm_1_1ActionVFSawtoothLPSerial.md#typedef-tdata)  <br> |

## Public Types inherited from sdm::ActionVFSawtoothLP

See [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md)

| Type | Name |
| ---: | :--- |
| typedef double | [**TData**](classsdm_1_1ActionVFSawtoothLP.md#typedef-tdata)  <br> |































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-actionvfsawtoothlpserial-1-2) () <br> |
|   | [**ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-actionvfsawtoothlpserial-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world, [**TypeOfResolution**](namespacesdm.md#enum-typeofresolution) current\_type\_of\_resolution, [**number**](namespacesdm.md#typedef-number) bigM\_value, [**TypeSawtoothLinearProgram**](namespacesdm.md#enum-typesawtoothlinearprogram) type\_of\_linear\_program) <br> |
| virtual void | [**createDecentralizedConstraints**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-createdecentralizedconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>[_**Set**_](structsdm_1_1Set.md) _decentralized constraints._ |
| virtual void | [**createDecentralizedVariables**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-createdecentralizedvariables) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>[_**Set**_](structsdm_1_1Set.md) _decentralized variables._ |
| virtual void | [**createSawtoothBigM**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-createsawtoothbigm) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & next\_joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_one\_step\_uncompressed\_occupancy\_state, double probability, double difference, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create constraints with the Big M formalim._  |
| virtual void | [**createSawtoothIloIfThen**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-createsawtoothiloifthen) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & next\_joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, double probability, double difference, IloEnv & env, IloModel & model, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the constraints with IloIfThen formalim specialized._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getVariableResult**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-getvariableresult) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the result of the variable created._  |

## Public Functions inherited from sdm::ActionVFSawtoothLP

See [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md)

| Type | Name |
| ---: | :--- |
|   | [**ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md#function-actionvfsawtoothlp-1-2) () <br> |
|   | [**ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md#function-actionvfsawtoothlp-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world, [**TypeOfResolution**](namespacesdm.md#enum-typeofresolution) current\_type\_of\_resolution, [**number**](namespacesdm.md#typedef-number) bigM\_value, [**TypeSawtoothLinearProgram**](namespacesdm.md#enum-typesawtoothlinearprogram) type\_of\_linear\_program) <br> |
| virtual void | [**createConstraints**](classsdm_1_1ActionVFSawtoothLP.md#function-createconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloEnv & env, IloModel & model, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the constraints of the LP._  |
| virtual void | [**createObjectiveFunction**](classsdm_1_1ActionVFSawtoothLP.md#function-createobjectivefunction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloNumVarArray & var, IloObjective & obj, [**number**](namespacesdm.md#typedef-number) t) <br>_Create a Objective Constraint of the LP._  |
| virtual void | [**createVariables**](classsdm_1_1ActionVFSawtoothLP.md#function-createvariables) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the variable which will be used to resolve the LP._  |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**evaluate**](classsdm_1_1ActionVFSawtoothLP.md#function-evaluate) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state\_tmp, const std::shared\_ptr&lt; Action &gt; & decision\_rule, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFSawtoothLP.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best action and the hyperplan at t+1 associated for a state at a precise time._  |

## Public Functions inherited from sdm::ActionVFBase

See [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md)

| Type | Name |
| ---: | :--- |
|   | [**ActionVFBase**](classsdm_1_1ActionVFBase.md#function-actionvfbase-1-2) () <br> |
|   | [**ActionVFBase**](classsdm_1_1ActionVFBase.md#function-actionvfbase-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFBase.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Select the best action for a state at a precise time._  |
| virtual  | [**~ActionVFBase**](classsdm_1_1ActionVFBase.md#function-actionvfbase) () <br> |

## Public Functions inherited from sdm::ActionVFInterface

See [sdm::ActionVFInterface](classsdm_1_1ActionVFInterface.md)

| Type | Name |
| ---: | :--- |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFInterface.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Select the best action for a state at a precise time._  |

## Public Functions inherited from sdm::DecentralizedLP

See [sdm::DecentralizedLP](classsdm_1_1DecentralizedLP.md)

| Type | Name |
| ---: | :--- |
|   | [**DecentralizedLP**](classsdm_1_1DecentralizedLP.md#function-decentralizedlp-1-2) () <br> |
|   | [**DecentralizedLP**](classsdm_1_1DecentralizedLP.md#function-decentralizedlp-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; &) <br> |
| virtual void | [**createDecentralizedConstraints**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) = 0<br>[_**Set**_](structsdm_1_1Set.md) _decentralized constraints._ |
|  void | [**createDecentralizedConstraintsOccupancy**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraintsoccupancy) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**createDecentralizedConstraintsSerial**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraintsserial) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual void | [**createDecentralizedVariables**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariables) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) = 0<br>[_**Set**_](structsdm_1_1Set.md) _decentralized variables._ |
|  void | [**createDecentralizedVariablesOccupancy**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariablesoccupancy) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**createDecentralizedVariablesSerial**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariablesserial) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**getVariableResult**](classsdm_1_1DecentralizedLP.md#function-getvariableresult) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the result of the variable created._  |
|  std::shared\_ptr&lt; Action &gt; | [**getVariableResultOccupancy**](classsdm_1_1DecentralizedLP.md#function-getvariableresultoccupancy) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  std::shared\_ptr&lt; Action &gt; | [**getVariableResultSerial**](classsdm_1_1DecentralizedLP.md#function-getvariableresultserial) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) <br> |

## Public Functions inherited from sdm::VarNaming

See [sdm::VarNaming](classsdm_1_1VarNaming.md)

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumber**](classsdm_1_1VarNaming.md#function-getnumber) (const std::string &) <br>_Get the identifier associated with a given name._  |
|  std::string | [**getVarNameIndividualHistory**](classsdm_1_1VarNaming.md#function-getvarnameindividualhistory) (const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory, const [**number**](namespacesdm.md#typedef-number) agent) <br> |
|  std::string | [**getVarNameIndividualHistoryDecisionRule**](classsdm_1_1VarNaming.md#function-getvarnameindividualhistorydecisionrule) (const std::shared\_ptr&lt; Action &gt; &, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br>_Get the name associated with a pair of action and individual history._  |
|  std::string | [**getVarNameJointHistoryDecisionRule**](classsdm_1_1VarNaming.md#function-getvarnamejointhistorydecisionrule) (const std::shared\_ptr&lt; Action &gt; &, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) <br>_Get the name associated with a pair of action and joint history._  |
|  std::string | [**getVarNameWeight**](classsdm_1_1VarNaming.md#function-getvarnameweight) ([**number**](namespacesdm.md#typedef-number)) <br>_Get the name of a free variable._  |
|  std::string | [**getVarNameWeightedStateJointHistory**](classsdm_1_1VarNaming.md#function-getvarnameweightedstatejointhistory) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) <br>_Get the Var Name Weighted_ [_**State**_](classsdm_1_1State.md) __[_**Joint**_](classsdm_1_1Joint.md) _History object._ |
|  void | [**setNumber**](classsdm_1_1VarNaming.md#function-setnumber) (const std::string &, [**number**](namespacesdm.md#typedef-number)) <br>[_**Set**_](structsdm_1_1Set.md) _pair name identifier for a given variable._ |

## Public Functions inherited from sdm::LPBase

See [sdm::LPBase](classsdm_1_1LPBase.md)

| Type | Name |
| ---: | :--- |
|   | [**LPBase**](classsdm_1_1LPBase.md#function-lpbase-1-2) () <br> |
|   | [**LPBase**](classsdm_1_1LPBase.md#function-lpbase-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; &) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**createLP**](classsdm_1_1LPBase.md#function-createlp) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, [**number**](namespacesdm.md#typedef-number) t) <br>_Main function who is used to create the Linear program._  |
|   | [**~LPBase**](classsdm_1_1LPBase.md#function-lpbase) () <br> |

## Public Functions inherited from sdm::LPInterface

See [sdm::LPInterface](classsdm_1_1LPInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**createConstraints**](classsdm_1_1LPInterface.md#function-createconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloEnv & env, IloModel & model, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Create the constraints of the LP._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**createLP**](classsdm_1_1LPInterface.md#function-createlp) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Main function who is used to create the Linear program._  |
| virtual void | [**createObjectiveFunction**](classsdm_1_1LPInterface.md#function-createobjectivefunction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloNumVarArray & var, IloObjective & obj, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Create a Objective Constraint of the LP._  |
| virtual void | [**createVariables**](classsdm_1_1LPInterface.md#function-createvariables) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Create the variable which will be used to resolve the LP._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getVariableResult**](classsdm_1_1LPInterface.md#function-getvariableresult) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the result of the variable created._  |


























## Protected Attributes inherited from sdm::ActionVFSawtoothLP

See [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md)

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt;, std::unordered\_map&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; &gt; | [**all\_support**](classsdm_1_1ActionVFSawtoothLP.md#variable-all-support)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**bigM\_value\_**](classsdm_1_1ActionVFSawtoothLP.md#variable-bigm-value-)  <br> |
|  [**TypeOfResolution**](namespacesdm.md#enum-typeofresolution) | [**current\_type\_of\_resolution\_**](classsdm_1_1ActionVFSawtoothLP.md#variable-current-type-of-resolution-)  <br>_The type of resolution._  |
|  [**TypeSawtoothLinearProgram**](namespacesdm.md#enum-typesawtoothlinearprogram) | [**type\_of\_linear\_program\_**](classsdm_1_1ActionVFSawtoothLP.md#variable-type-of-linear-program-)   = = PLAIN\_SAWTOOTH\_LINER\_PROGRAMMING<br>_The type of linear program._  |

## Protected Attributes inherited from sdm::ActionVFBase

See [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1ActionVFBase.md#variable-world-)  <br> |



## Protected Attributes inherited from sdm::VarNaming

See [sdm::VarNaming](classsdm_1_1VarNaming.md)

| Type | Name |
| ---: | :--- |
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::string, [**number**](namespacesdm.md#typedef-number) &gt; | [**variables**](classsdm_1_1VarNaming.md#variable-variables)  <br>_mapping from variable names to variable identifiers_  |

## Protected Attributes inherited from sdm::LPBase

See [sdm::LPBase](classsdm_1_1LPBase.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; | [**tmp\_representation**](classsdm_1_1LPBase.md#variable-tmp-representation)  <br>_The temporary one-stage value function represention._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1LPBase.md#variable-world-)  <br> |










## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**createInitialConstraints**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-createinitialconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**determineNextJointObservation**](classsdm_1_1ActionVFSawtoothLPSerial.md#function-determinenextjointobservation) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the._  |

## Protected Functions inherited from sdm::ActionVFSawtoothLP

See [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md)

| Type | Name |
| ---: | :--- |
|  double | [**computeDifference**](classsdm_1_1ActionVFSawtoothLP.md#function-computedifference) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; & state\_AND\_value, [**number**](namespacesdm.md#typedef-number) t) <br>_Compute the difference v\_kappa - V\_kappa i.e. the value of point at t+1 minus the relaxation value of the point at t+1._  |
|  double | [**computeSawtooth**](classsdm_1_1ActionVFSawtoothLP.md#function-computesawtooth) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & next\_joint\_history, double denominator, double difference, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**createConstraintsKnowingInformation**](classsdm_1_1ActionVFSawtoothLP.md#function-createconstraintsknowinginformation) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & next\_joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, double denominator, double difference, IloEnv & env, IloModel & model, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual void | [**createDecentralizedConstraints**](classsdm_1_1ActionVFSawtoothLP.md#function-createdecentralizedconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>[_**Set**_](structsdm_1_1Set.md) _decentralized constraints._ |
| virtual void | [**createDecentralizedVariables**](classsdm_1_1ActionVFSawtoothLP.md#function-createdecentralizedvariables) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>[_**Set**_](structsdm_1_1Set.md) _decentralized variables._ |
|  void | [**createGlobalConstraint**](classsdm_1_1ActionVFSawtoothLP.md#function-createglobalconstraint) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual void | [**createInitialConstraints**](classsdm_1_1ActionVFSawtoothLP.md#function-createinitialconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**createObjectiveVariable**](classsdm_1_1ActionVFSawtoothLP.md#function-createobjectivevariable) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the objective variable._  |
|  void | [**createOmegaConstraints**](classsdm_1_1ActionVFSawtoothLP.md#function-createomegaconstraints) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index) <br> |
|  void | [**createOmegaVariable**](classsdm_1_1ActionVFSawtoothLP.md#function-createomegavariable) (IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index) <br>_Create all the Omega Variable i.e.  k, (o',x') (x',o')_  |
| virtual void | [**createSawtoothBigM**](classsdm_1_1ActionVFSawtoothLP.md#function-createsawtoothbigm) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & next\_joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_one\_step\_uncompressed\_occupancy\_state, double probability, double difference, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create constraints with the Big M formalim._  |
| virtual void | [**createSawtoothIloIfThen**](classsdm_1_1ActionVFSawtoothLP.md#function-createsawtoothiloifthen) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & next\_joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_state, double probability, double difference, IloEnv & env, IloModel & model, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the constraints with IloIfThen formalim specialized._  |
| virtual std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**determineNextJointObservation**](classsdm_1_1ActionVFSawtoothLP.md#function-determinenextjointobservation) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the._  |
| virtual double | [**getQValueRelaxation**](classsdm_1_1ActionVFSawtoothLP.md#function-getqvaluerelaxation) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br>_Calculate the Q Value Relaxation i.e. {o} a(u|o) {x} s(x,o) \* Q\_MDP(x,u)_  |
| virtual double | [**getSawtoothMinimumRatio**](classsdm_1_1ActionVFSawtoothLP.md#function-getsawtoothminimumratio) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hidden\_state, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, double denominator, [**number**](namespacesdm.md#typedef-number) t) <br>_Calculate the Ratio of Sawtooth._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getVariableResult**](classsdm_1_1ActionVFSawtoothLP.md#function-getvariableresult) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the result of the variable created._  |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestActionFull**](classsdm_1_1ActionVFSawtoothLP.md#function-selectbestactionfull) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestActionRelaxed**](classsdm_1_1ActionVFSawtoothLP.md#function-selectbestactionrelaxed) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestActionRelaxedV2**](classsdm_1_1ActionVFSawtoothLP.md#function-selectbestactionrelaxedv2) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |



## Protected Functions inherited from sdm::DecentralizedLP

See [sdm::DecentralizedLP](classsdm_1_1DecentralizedLP.md)

| Type | Name |
| ---: | :--- |
|  void | [**createDecentralizedConstraintsIndividual**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraintsindividual) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) <br>_Create the Individual Decentralized Constraints i.e. set constraint {u\_i} a\_i(u\_i|o\_i) = 1._  |
|  void | [**createDecentralizedConstraintsJoint**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraintsjoint) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the_ [_**Joint**_](classsdm_1_1Joint.md) _Decentralized Constraints i.e. set constraint a(u|o) &gt;=  a\_i(u\_i|o\_i) + 1 - n._ |
|  void | [**createDecentralizedControlConstraints**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedcontrolconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the Control Decentralized Constraints i.e. set constraint a(u|o) &lt;= a\_i(u\_i|o\_i)_  |
|  void | [**createDecentralizedVariablesIndividual**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariablesindividual) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) <br>_Create the Individual Decentralized Variable i.e. Build variables a\_i(u\_i|o\_i)_  |
|  void | [**createDecentralizedVariablesJoint**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariablesjoint) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the_ [_**Joint**_](classsdm_1_1Joint.md) _Decentralized Variable i.e. Build variables a(u|o)_ |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt;, std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; &gt; | [**getVariableResultIndividual**](classsdm_1_1DecentralizedLP.md#function-getvariableresultindividual) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) <br>_Get the Individual Variable Result i.e. return the result for the variable a(u|o) the first vector refers to the vector of discrete action and the second vector refers to the vector of individual history._  |












## Public Types Documentation


### typedef TData 


```cpp
using sdm::ActionVFSawtoothLPSerial::TData =  ActionVFSawtoothLP::TData;
```


## Public Functions Documentation


### function ActionVFSawtoothLPSerial [1/2]


```cpp
sdm::ActionVFSawtoothLPSerial::ActionVFSawtoothLPSerial () 
```



### function ActionVFSawtoothLPSerial [2/2]


```cpp
sdm::ActionVFSawtoothLPSerial::ActionVFSawtoothLPSerial (
    const std::shared_ptr< SolvableByHSVI > & world,
    TypeOfResolution current_type_of_resolution,
    number bigM_value,
    TypeSawtoothLinearProgram type_of_linear_program
) 
```



### function createDecentralizedConstraints 


```cpp
virtual void sdm::ActionVFSawtoothLPSerial::createDecentralizedConstraints (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& 
* `IloEnv&` 
* `IloRangeArray&` 
* `IloNumVarArray&` 
* `number&` 
* `number` : time step 



        
Implements [*sdm::ActionVFSawtoothLP::createDecentralizedConstraints*](classsdm_1_1ActionVFSawtoothLP.md#function-createdecentralizedconstraints)


### function createDecentralizedVariables 


```cpp
virtual void sdm::ActionVFSawtoothLPSerial::createDecentralizedVariables (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& : current state 
* `const` IloEnv& 
* `const` IloNumVarArray& 
* `const` number& : index variable 
* `number` : time step 



        
Implements [*sdm::ActionVFSawtoothLP::createDecentralizedVariables*](classsdm_1_1ActionVFSawtoothLP.md#function-createdecentralizedvariables)


### function createSawtoothBigM 


```cpp
virtual void sdm::ActionVFSawtoothLPSerial::createSawtoothBigM (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< JointHistoryInterface > & joint_history,
    const std::shared_ptr< State > & next_hidden_state,
    const std::shared_ptr< Observation > & next_observation,
    const std::shared_ptr< JointHistoryInterface > & next_joint_history,
    const std::shared_ptr< State > & next_one_step_uncompressed_occupancy_state,
    double probability,
    double difference,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt; & occupancy\_state : current state 
* `const` std::shared\_ptr&lt;JointHistoryInterface&gt;& joint\_history 
* `const` std::shared\_ptr&lt;State&gt; &next\_hidden\_state 
* `const` std::shared\_ptr&lt;Observation&gt; &next\_observation 
* `const` std::shared\_ptr&lt;JointHistoryInterface&gt; &next\_joint\_history 
* `const` std::shared\_ptr&lt;State&gt; &next\_one\_step\_uncompressed\_occupancy\_state 
* `double` probability 
* `double` difference 
* `IloEnv` & : env 
* `IloRangeArray` &con 
* `IloModel` & : var 
* `double&` index 
* `number` t : Time Step 



        
Implements [*sdm::ActionVFSawtoothLP::createSawtoothBigM*](classsdm_1_1ActionVFSawtoothLP.md#function-createsawtoothbigm)


### function createSawtoothIloIfThen 


```cpp
virtual void sdm::ActionVFSawtoothLPSerial::createSawtoothIloIfThen (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< JointHistoryInterface > & joint_history,
    const std::shared_ptr< State > & next_hidden_state,
    const std::shared_ptr< Observation > & next_observation,
    const std::shared_ptr< JointHistoryInterface > & next_joint_history,
    const std::shared_ptr< State > & next_state,
    double probability,
    double difference,
    IloEnv & env,
    IloModel & model,
    IloNumVarArray & var,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt; & occupancy\_state : current state 
* `IloEnv` & : env 
* `IloModel` & : var 
* `IloRangeArray&` : model 
* `IloRangeArray` &con 
* `IloNumVarArray` &var 
* `double&` index 
* `number` t : Time Step 



        
Implements [*sdm::ActionVFSawtoothLP::createSawtoothIloIfThen*](classsdm_1_1ActionVFSawtoothLP.md#function-createsawtoothiloifthen)


### function getVariableResult 


```cpp
virtual std::shared_ptr< Action > sdm::ActionVFSawtoothLPSerial::getVariableResult (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const IloCplex & cplex,
    const IloNumVarArray & var,
    number t
) 
```




**Parameters:**


* `state` 
* `cplex` 
* `var` 
* `t` 



**Returns:**

std::shared\_ptr&lt;Action&gt; 




        
Implements [*sdm::ActionVFSawtoothLP::getVariableResult*](classsdm_1_1ActionVFSawtoothLP.md#function-getvariableresult)

## Protected Functions Documentation


### function createInitialConstraints 


```cpp
virtual void sdm::ActionVFSawtoothLPSerial::createInitialConstraints (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) 
```


Implements [*sdm::ActionVFSawtoothLP::createInitialConstraints*](classsdm_1_1ActionVFSawtoothLP.md#function-createinitialconstraints)


### function determineNextJointObservation 


```cpp
virtual std::shared_ptr< Joint < std::shared_ptr< Observation > > > sdm::ActionVFSawtoothLPSerial::determineNextJointObservation (
    const std::shared_ptr< JointHistoryInterface > & joint_history,
    number t
) 
```




**Parameters:**


* `state` 
* `t` 



**Returns:**

std::shared\_ptr&lt;[**Joint**](classsdm_1_1Joint.md)&lt;std::shared\_ptr&lt;Observation&gt;&gt;&gt; 




        
Implements [*sdm::ActionVFSawtoothLP::determineNextJointObservation*](classsdm_1_1ActionVFSawtoothLP.md#function-determinenextjointobservation)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/action_vf/action_sawtooth_lp_serial.hpp`