
# Class sdm::ActionVFSawtoothWCSP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md)





* `#include <action_sawtooth_wcsp.hpp>`



Inherits the following classes: [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md),  [sdm::VarNaming](classsdm_1_1VarNaming.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**TData**](classsdm_1_1ActionVFSawtoothWCSP.md#typedef-tdata)  <br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md#function-actionvfsawtoothwcsp-1-2) () <br> |
|   | [**ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md#function-actionvfsawtoothwcsp-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world) <br> |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**createWCSPProblem**](classsdm_1_1ActionVFSawtoothWCSP.md#function-createwcspproblem) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFSawtoothWCSP.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best action and the hyperplan at t+1 associated for a state at a precise time._  |

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













## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**max**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-max)  <br>_defines the maximum value in the domain of the payoff function_  |
|  long | [**offset**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-offset)   = = 1000000000000<br>_factor used to convert real values into integer costs_  |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**representation**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-representation)  <br> |
|  std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**state\_linked\_to\_decision\_rule**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-state-linked-to-decision-rule)  <br> |
|  bool | [**support\_empty**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-support-empty)  <br> |
|  std::shared\_ptr&lt; Action &gt; | [**support\_of\_the\_next\_action**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-support-of-the-next-action)  <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**support\_of\_the\_next\_hidden\_state**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-support-of-the-next-hidden-state)  <br> |
|  std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**support\_of\_the\_next\_history**](classsdm_1_1ActionVFSawtoothWCSP.md#variable-support-of-the-next-history)  <br> |

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





## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**createWCSPCostGraph**](classsdm_1_1ActionVFSawtoothWCSP.md#function-createwcspcostgraph) (std::shared\_ptr&lt; WeightedCSPSolver &gt; & wcsp\_solver, const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;&gt; & set\_joint\_history, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**createWCSPVariable**](classsdm_1_1ActionVFSawtoothWCSP.md#function-createwcspvariable) (std::shared\_ptr&lt; WeightedCSPSolver &gt; &, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**determineJointHistory**](classsdm_1_1ActionVFSawtoothWCSP.md#function-determinejointhistory) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) <br> |
|  void | [**determineMaxValue**](classsdm_1_1ActionVFSawtoothWCSP.md#function-determinemaxvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  Cost | [**getCost**](classsdm_1_1ActionVFSawtoothWCSP.md#function-getcost) (double) <br>_Returns a cost value._  |
|  double | [**getValueAt**](classsdm_1_1ActionVFSawtoothWCSP.md#function-getvalueat) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hyperplan, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**getWSCPResult**](classsdm_1_1ActionVFSawtoothWCSP.md#function-getwscpresult) (std::shared\_ptr&lt; WeightedCSPSolver &gt; & wcsp\_solver, const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;&gt; & set\_joint\_history, [**number**](namespacesdm.md#typedef-number) t) <br> |








## Public Types Documentation


### typedef TData 


```cpp
using sdm::ActionVFSawtoothWCSP::TData =  std::shared_ptr<State>;
```


## Public Functions Documentation


### function ActionVFSawtoothWCSP [1/2]


```cpp
sdm::ActionVFSawtoothWCSP::ActionVFSawtoothWCSP () 
```



### function ActionVFSawtoothWCSP [2/2]


```cpp
sdm::ActionVFSawtoothWCSP::ActionVFSawtoothWCSP (
    const std::shared_ptr< SolvableByHSVI > & world
) 
```



### function createWCSPProblem 


```cpp
Pair < std::shared_ptr< Action >, double > sdm::ActionVFSawtoothWCSP::createWCSPProblem (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    number t
) 
```



### function selectBestAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::ActionVFSawtoothWCSP::selectBestAction (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `number` t : time step 



**Returns:**

Pair&lt;std::shared\_ptr&lt;Action&gt;,TData&gt; : best action and the hyperplan at t+1 associated 




        
Implements [*sdm::ActionVFBase::selectBestAction*](classsdm_1_1ActionVFBase.md#function-selectbestaction)

## Protected Attributes Documentation


### variable max 


```cpp
double sdm::ActionVFSawtoothWCSP::max;
```



### variable offset 


```cpp
long sdm::ActionVFSawtoothWCSP::offset;
```



### variable representation 


```cpp
Pair<std::shared_ptr<State>,double> sdm::ActionVFSawtoothWCSP::representation;
```



### variable state\_linked\_to\_decision\_rule 


```cpp
std::unordered_map<std::shared_ptr<State>,std::shared_ptr<Action> > sdm::ActionVFSawtoothWCSP::state_linked_to_decision_rule;
```



### variable support\_empty 


```cpp
bool sdm::ActionVFSawtoothWCSP::support_empty;
```



### variable support\_of\_the\_next\_action 


```cpp
std::shared_ptr<Action> sdm::ActionVFSawtoothWCSP::support_of_the_next_action;
```



### variable support\_of\_the\_next\_hidden\_state 


```cpp
std::shared_ptr<State> sdm::ActionVFSawtoothWCSP::support_of_the_next_hidden_state;
```



### variable support\_of\_the\_next\_history 


```cpp
std::shared_ptr<HistoryInterface> sdm::ActionVFSawtoothWCSP::support_of_the_next_history;
```


## Protected Functions Documentation


### function createWCSPCostGraph 


```cpp
void sdm::ActionVFSawtoothWCSP::createWCSPCostGraph (
    std::shared_ptr< WeightedCSPSolver > & wcsp_solver,
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::set< std::shared_ptr< JointHistoryInterface >> & set_joint_history,
    number t
) 
```



### function createWCSPVariable 


```cpp
void sdm::ActionVFSawtoothWCSP::createWCSPVariable (
    std::shared_ptr< WeightedCSPSolver > &,
    const std::shared_ptr< State > & state,
    number t
) 
```



### function determineJointHistory 


```cpp
std::set< std::shared_ptr< JointHistoryInterface > > sdm::ActionVFSawtoothWCSP::determineJointHistory (
    const std::shared_ptr< State > & state
) 
```



### function determineMaxValue 


```cpp
void sdm::ActionVFSawtoothWCSP::determineMaxValue (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    number t
) 
```



### function getCost 


```cpp
Cost sdm::ActionVFSawtoothWCSP::getCost (
    double
) 
```




**Parameters:**


* `double` defines a real value 



        

### function getValueAt 


```cpp
double sdm::ActionVFSawtoothWCSP::getValueAt (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< OccupancyStateInterface > & occupancy_state,
    const std::shared_ptr< JointHistoryInterface > & joint_history,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_hyperplan,
    number t
) 
```



### function getWSCPResult 


```cpp
Pair < std::shared_ptr< Action >, double > sdm::ActionVFSawtoothWCSP::getWSCPResult (
    std::shared_ptr< WeightedCSPSolver > & wcsp_solver,
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::set< std::shared_ptr< JointHistoryInterface >> & set_joint_history,
    number t
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/action_vf/action_sawtooth_wcsp.hpp`