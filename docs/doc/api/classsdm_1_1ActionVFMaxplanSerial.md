
# Class sdm::ActionVFMaxplanSerial

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ActionVFMaxplanSerial**](classsdm_1_1ActionVFMaxplanSerial.md)





* `#include <action_maxplan_serial.hpp>`



Inherits the following classes: [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**TData**](classsdm_1_1ActionVFMaxplanSerial.md#typedef-tdata)  <br> |












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ActionVFMaxplanSerial**](classsdm_1_1ActionVFMaxplanSerial.md#function-actionvfmaxplanserial-1-2) () <br> |
|   | [**ActionVFMaxplanSerial**](classsdm_1_1ActionVFMaxplanSerial.md#function-actionvfmaxplanserial-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world) <br> |
|  double | [**evaluateNextExpectedValueAt**](classsdm_1_1ActionVFMaxplanSerial.md#function-evaluatenextexpectedvalueat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & hyperplan, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  double | [**evaluationOfHyperplanKnowingNextHyperplanAndDiscreteAction**](classsdm_1_1ActionVFMaxplanSerial.md#function-evaluationofhyperplanknowingnexthyperplananddiscreteaction) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & occupancy\_state, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_step\_hyperplan, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFMaxplanSerial.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best action and the hyperplan at t+1 associated for a state at a precise time._  |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestActionKnowingNextHyperplanAndHistory**](classsdm_1_1ActionVFMaxplanSerial.md#function-selectbestactionknowingnexthyperplanandhistory) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hyperplan, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestDecisionRuleKnowingNextHyperplan**](classsdm_1_1ActionVFMaxplanSerial.md#function-selectbestdecisionruleknowingnexthyperplan) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & next\_hyperplan, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best action and value associated for a state at a precise time and a precise next hyperplan at t +1._  |

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











## Protected Attributes inherited from sdm::ActionVFBase

See [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1ActionVFBase.md#variable-world-)  <br> |











## Public Types Documentation


### typedef TData 


```cpp
using sdm::ActionVFMaxplanSerial::TData =  std::shared_ptr<State>;
```


## Public Functions Documentation


### function ActionVFMaxplanSerial [1/2]


```cpp
sdm::ActionVFMaxplanSerial::ActionVFMaxplanSerial () 
```



### function ActionVFMaxplanSerial [2/2]


```cpp
sdm::ActionVFMaxplanSerial::ActionVFMaxplanSerial (
    const std::shared_ptr< SolvableByHSVI > & world
) 
```



### function evaluateNextExpectedValueAt 


```cpp
double sdm::ActionVFMaxplanSerial::evaluateNextExpectedValueAt (
    const std::shared_ptr< State > & hyperplan,
    const std::shared_ptr< HistoryInterface > & joint_history,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```



### function evaluationOfHyperplanKnowingNextHyperplanAndDiscreteAction 


```cpp
double sdm::ActionVFMaxplanSerial::evaluationOfHyperplanKnowingNextHyperplanAndDiscreteAction (
    const std::shared_ptr< State > & occupancy_state,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< State > & next_step_hyperplan,
    number t
) 
```



### function selectBestAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::ActionVFMaxplanSerial::selectBestAction (
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


### function selectBestActionKnowingNextHyperplanAndHistory 


```cpp
Pair < std::shared_ptr< Action >, double > sdm::ActionVFMaxplanSerial::selectBestActionKnowingNextHyperplanAndHistory (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< State > & next_hyperplan,
    const std::shared_ptr< HistoryInterface > & ihistory,
    number t
) 
```



### function selectBestDecisionRuleKnowingNextHyperplan 


```cpp
Pair < std::shared_ptr< Action >, double > sdm::ActionVFMaxplanSerial::selectBestDecisionRuleKnowingNextHyperplan (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< State > & next_hyperplan,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `const` std::shared\_ptr&lt;BeliefInterface&gt;& 
* `number` t : time step



**Returns:**

Pair&lt;std::shared\_ptr&lt;Action&gt;,double&gt; : best action and the value associated 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/action_vf/action_maxplan_serial.hpp`