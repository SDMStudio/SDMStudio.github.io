
# Class sdm::LPBase

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**LPBase**](classsdm_1_1LPBase.md)





* `#include <lp_problem.hpp>`



Inherits the following classes: [sdm::LPInterface](classsdm_1_1LPInterface.md)


Inherited by the following classes: [sdm::DecentralizedLP](classsdm_1_1DecentralizedLP.md)














## Public Functions

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







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; | [**tmp\_representation**](classsdm_1_1LPBase.md#variable-tmp-representation)  <br>_The temporary one-stage value function represention._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1LPBase.md#variable-world-)  <br> |








## Public Functions Documentation


### function LPBase [1/2]


```cpp
sdm::LPBase::LPBase () 
```



### function LPBase [2/2]


```cpp
sdm::LPBase::LPBase (
    const std::shared_ptr< SolvableByHSVI > &
) 
```



### function createLP 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::LPBase::createLP (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & occupancy_state,
    number t
) 
```




**Parameters:**


* `occupancy_state` 
* `t` 



**Returns:**

Pair&lt;std::shared\_ptr&lt;Action&gt;,double&gt; 




        
Implements [*sdm::LPInterface::createLP*](classsdm_1_1LPInterface.md#function-createlp)


### function ~LPBase 


```cpp
sdm::LPBase::~LPBase () 
```


## Protected Attributes Documentation


### variable tmp\_representation 


```cpp
std::shared_ptr<BeliefInterface> sdm::LPBase::tmp_representation;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::LPBase::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_programming/lp_problem.hpp`