
# Class sdm::LPInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**LPInterface**](classsdm_1_1LPInterface.md)





* `#include <lp_problem_interface.hpp>`





Inherited by the following classes: [sdm::LPBase](classsdm_1_1LPBase.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**createConstraints**](classsdm_1_1LPInterface.md#function-createconstraints) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloEnv & env, IloModel & model, IloRangeArray & con, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Create the constraints of the LP._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**createLP**](classsdm_1_1LPInterface.md#function-createlp) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Main function who is used to create the Linear program._  |
| virtual void | [**createObjectiveFunction**](classsdm_1_1LPInterface.md#function-createobjectivefunction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloNumVarArray & var, IloObjective & obj, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Create a Objective Constraint of the LP._  |
| virtual void | [**createVariables**](classsdm_1_1LPInterface.md#function-createvariables) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, IloEnv & env, IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) & index, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Create the variable which will be used to resolve the LP._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getVariableResult**](classsdm_1_1LPInterface.md#function-getvariableresult) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const IloCplex & cplex, const IloNumVarArray & var, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the result of the variable created._  |








## Public Functions Documentation


### function createConstraints 


```cpp
virtual void sdm::LPInterface::createConstraints (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & occupancy_state,
    IloEnv & env,
    IloModel & model,
    IloRangeArray & con,
    IloNumVarArray & var,
    number & index,
    number t
) = 0
```




**Parameters:**


* `occupancy_state` 
* `env` 
* `con` 
* `var` 
* `index` 
* `t` 



        

### function createLP 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::LPInterface::createLP (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & occupancy_state,
    number t
) = 0
```




**Parameters:**


* `occupancy_state` 
* `t` 



**Returns:**

Pair&lt;std::shared\_ptr&lt;Action&gt;,double&gt; 




        

### function createObjectiveFunction 


```cpp
virtual void sdm::LPInterface::createObjectiveFunction (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & occupancy_state,
    IloNumVarArray & var,
    IloObjective & obj,
    number t
) = 0
```




**Parameters:**


* `occupancy_state` 
* `var` 
* `obj` 
* `t` 



        

### function createVariables 


```cpp
virtual void sdm::LPInterface::createVariables (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & occupancy_state,
    IloEnv & env,
    IloNumVarArray & var,
    number & index,
    number t
) = 0
```




**Parameters:**


* `occupancy_state` 
* `env` 
* `var` 
* `t` 



        

### function getVariableResult 


```cpp
virtual std::shared_ptr< Action > sdm::LPInterface::getVariableResult (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & occupancy_state,
    const IloCplex & cplex,
    const IloNumVarArray & var,
    number t
) = 0
```




**Parameters:**


* `occupancy_state` 
* `cplex` 
* `var` 
* `t` 



**Returns:**

std::shared\_ptr&lt;Action&gt; 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_programming/lp_problem_interface.hpp`