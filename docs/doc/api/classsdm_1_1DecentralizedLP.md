
# Class sdm::DecentralizedLP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DecentralizedLP**](classsdm_1_1DecentralizedLP.md)





* `#include <decentralized_lp_problem.hpp>`



Inherits the following classes: [sdm::VarNaming](classsdm_1_1VarNaming.md),  [sdm::LPBase](classsdm_1_1LPBase.md)


Inherited by the following classes: [sdm::ActionVFMaxplanLP](classsdm_1_1ActionVFMaxplanLP.md),  [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md)






















## Public Functions

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
|  void | [**createDecentralizedConstraintsIndividual**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraintsindividual) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) <br>_Create the Individual Decentralized Constraints i.e. set constraint {u\_i} a\_i(u\_i|o\_i) = 1._  |
|  void | [**createDecentralizedConstraintsJoint**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedconstraintsjoint) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the_ [_**Joint**_](classsdm_1_1Joint.md) _Decentralized Constraints i.e. set constraint a(u|o) &gt;=  a\_i(u\_i|o\_i) + 1 - n._ |
|  void | [**createDecentralizedControlConstraints**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedcontrolconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the Control Decentralized Constraints i.e. set constraint a(u|o) &lt;= a\_i(u\_i|o\_i)_  |
|  void | [**createDecentralizedVariablesIndividual**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariablesindividual) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) <br>_Create the Individual Decentralized Variable i.e. Build variables a\_i(u\_i|o\_i)_  |
|  void | [**createDecentralizedVariablesJoint**](classsdm_1_1DecentralizedLP.md#function-createdecentralizedvariablesjoint) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) <br>_Create the_ [_**Joint**_](classsdm_1_1Joint.md) _Decentralized Variable i.e. Build variables a(u|o)_ |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt;, std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; &gt; | [**getVariableResultIndividual**](classsdm_1_1DecentralizedLP.md#function-getvariableresultindividual) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent\_id) <br>_Get the Individual Variable Result i.e. return the result for the variable a(u|o) the first vector refers to the vector of discrete action and the second vector refers to the vector of individual history._  |








## Public Functions Documentation


### function DecentralizedLP [1/2]


```cpp
sdm::DecentralizedLP::DecentralizedLP () 
```



### function DecentralizedLP [2/2]


```cpp
sdm::DecentralizedLP::DecentralizedLP (
    const std::shared_ptr< SolvableByHSVI > &
) 
```



### function createDecentralizedConstraints 


```cpp
virtual void sdm::DecentralizedLP::createDecentralizedConstraints (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) = 0
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& 
* `IloEnv&` 
* `IloRangeArray&` 
* `IloNumVarArray&` 
* `number&` 
* `number` : time step 



        

### function createDecentralizedConstraintsOccupancy 


```cpp
void sdm::DecentralizedLP::createDecentralizedConstraintsOccupancy (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) 
```



### function createDecentralizedConstraintsSerial 


```cpp
void sdm::DecentralizedLP::createDecentralizedConstraintsSerial (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) 
```



### function createDecentralizedVariables 


```cpp
virtual void sdm::DecentralizedLP::createDecentralizedVariables (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t
) = 0
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& : current state 
* `const` IloEnv& 
* `const` IloNumVarArray& 
* `const` number& : index variable 
* `number` : time step 



        

### function createDecentralizedVariablesOccupancy 


```cpp
void sdm::DecentralizedLP::createDecentralizedVariablesOccupancy (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t
) 
```



### function createDecentralizedVariablesSerial 


```cpp
void sdm::DecentralizedLP::createDecentralizedVariablesSerial (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t
) 
```



### function getVariableResult 


```cpp
virtual std::shared_ptr< Action > sdm::DecentralizedLP::getVariableResult (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const IloCplex & cplex,
    const IloNumVarArray & var,
    number t
) = 0
```




**Parameters:**


* `state` 
* `cplex` 
* `var` 
* `t` 



**Returns:**

std::shared\_ptr&lt;Action&gt; 




        
Implements [*sdm::LPInterface::getVariableResult*](classsdm_1_1LPInterface.md#function-getvariableresult)


### function getVariableResultOccupancy 


```cpp
std::shared_ptr< Action > sdm::DecentralizedLP::getVariableResultOccupancy (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const IloCplex & cplex,
    const IloNumVarArray & var,
    number t
) 
```



### function getVariableResultSerial 


```cpp
std::shared_ptr< Action > sdm::DecentralizedLP::getVariableResultSerial (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const IloCplex & cplex,
    const IloNumVarArray & var,
    number t
) 
```


## Protected Functions Documentation


### function createDecentralizedConstraintsIndividual 


```cpp
void sdm::DecentralizedLP::createDecentralizedConstraintsIndividual (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t,
    number agent_id
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : state : 
* `IloEnv` & : env 
* `IloRangeArray` & : con 
* `IloNumVarArray` & : var 
* `number` & : index variable 
* `number` : timestep 
* `number` : agent\_id 



        

### function createDecentralizedConstraintsJoint 


```cpp
void sdm::DecentralizedLP::createDecentralizedConstraintsJoint (
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


* `const` std::shared\_ptr&lt;State&gt; & : state : 
* `IloEnv` & : env 
* `IloRangeArray` & : con 
* `IloNumVarArray` & : var 
* `number` & : index variable 
* `number` : timestep 



        

### function createDecentralizedControlConstraints 


```cpp
void sdm::DecentralizedLP::createDecentralizedControlConstraints (
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


* `const` std::shared\_ptr&lt;State&gt; & : state : 
* `IloEnv` & : env 
* `IloRangeArray` & : con 
* `IloNumVarArray` & : var 
* `number` & : index variable 
* `number` : timestep 



        

### function createDecentralizedVariablesIndividual 


```cpp
void sdm::DecentralizedLP::createDecentralizedVariablesIndividual (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t,
    number agent_id
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : state : 
* `IloEnv` & : env 
* `IloNumVarArray` & : var 
* `number` & : index variable 
* `number` : timestep 
* `number` : agent\_id 



        

### function createDecentralizedVariablesJoint 


```cpp
void sdm::DecentralizedLP::createDecentralizedVariablesJoint (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : state : 
* `IloEnv` & : env 
* `IloNumVarArray` & : var 
* `number` & : index variable 
* `number` : timestep 



        

### function getVariableResultIndividual 


```cpp
Pair < std::vector< std::shared_ptr< Item > >, std::vector< std::shared_ptr< Item > > > sdm::DecentralizedLP::getVariableResultIndividual (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const IloCplex & cplex,
    const IloNumVarArray & var,
    number t,
    number agent_id
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : state : 
* `const` IloCplex & : cplex 
* `IloNumVarArray` & : var 
* `number` : timestep 
* `number` : agent\_id



**Returns:**

Pair&lt;std::vector&lt;std::shared\_ptr&lt;Item&gt;&gt;,std::vector&lt;std::shared\_ptr&lt;Item&gt;&gt;&gt; , the first vector refers to the vector of discrete action and the second vector refers to the vector of individual history 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_programming/decentralized_lp_problem.hpp`