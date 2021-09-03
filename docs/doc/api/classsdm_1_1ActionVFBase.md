
# Class sdm::ActionVFBase

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ActionVFBase**](classsdm_1_1ActionVFBase.md)





* `#include <action_vf_base.hpp>`



Inherits the following classes: [sdm::ActionVFInterface](classsdm_1_1ActionVFInterface.md)


Inherited by the following classes: [sdm::ActionVFMaxplan](classsdm_1_1ActionVFMaxplan.md),  [sdm::ActionVFMaxplanLP](classsdm_1_1ActionVFMaxplanLP.md),  [sdm::ActionVFMaxplanSerial](classsdm_1_1ActionVFMaxplanSerial.md),  [sdm::ActionVFMaxplanWCSP](classsdm_1_1ActionVFMaxplanWCSP.md),  [sdm::ActionVFSawtoothLP](classsdm_1_1ActionVFSawtoothLP.md),  [sdm::ActionVFSawtoothWCSP](classsdm_1_1ActionVFSawtoothWCSP.md),  [sdm::ActionVFTabulaire](classsdm_1_1ActionVFTabulaire.md)














## Public Functions

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







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1ActionVFBase.md#variable-world-)  <br> |








## Public Functions Documentation


### function ActionVFBase [1/2]


```cpp
sdm::ActionVFBase::ActionVFBase () 
```



### function ActionVFBase [2/2]


```cpp
sdm::ActionVFBase::ActionVFBase (
    const std::shared_ptr< SolvableByHSVI > & world
) 
```



### function selectBestAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::ActionVFBase::selectBestAction (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `number` t : time step 



**Returns:**

std::shared\_ptr&lt;Action&gt; : Action 




        
Implements [*sdm::ActionVFInterface::selectBestAction*](classsdm_1_1ActionVFInterface.md#function-selectbestaction)


### function ~ActionVFBase 


```cpp
virtual sdm::ActionVFBase::~ActionVFBase () 
```


## Protected Attributes Documentation


### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::ActionVFBase::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/action_vf/action_vf_base.hpp`