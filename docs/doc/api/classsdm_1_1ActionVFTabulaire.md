
# Class sdm::ActionVFTabulaire

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ActionVFTabulaire**](classsdm_1_1ActionVFTabulaire.md)





* `#include <action_tabulaire.hpp>`



Inherits the following classes: [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef double | [**TData**](classsdm_1_1ActionVFTabulaire.md#typedef-tdata)  <br> |












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ActionVFTabulaire**](classsdm_1_1ActionVFTabulaire.md#function-actionvftabulaire-1-2) () <br> |
|   | [**ActionVFTabulaire**](classsdm_1_1ActionVFTabulaire.md#function-actionvftabulaire-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFTabulaire.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best action for a state at a precise time._  |

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
using sdm::ActionVFTabulaire::TData =  double;
```


## Public Functions Documentation


### function ActionVFTabulaire [1/2]


```cpp
sdm::ActionVFTabulaire::ActionVFTabulaire () 
```



### function ActionVFTabulaire [2/2]


```cpp
sdm::ActionVFTabulaire::ActionVFTabulaire (
    const std::shared_ptr< SolvableByHSVI > & world
) 
```



### function selectBestAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::ActionVFTabulaire::selectBestAction (
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

std::shared\_ptr&lt;Action&gt; : Action 




        
Implements [*sdm::ActionVFBase::selectBestAction*](classsdm_1_1ActionVFBase.md#function-selectbestaction)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/action_vf/action_tabulaire.hpp`