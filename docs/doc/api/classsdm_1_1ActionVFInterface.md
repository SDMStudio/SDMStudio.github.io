
# Class sdm::ActionVFInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md)





* `#include <action_vf_interface.hpp>`





Inherited by the following classes: [sdm::ActionVFBase](classsdm_1_1ActionVFBase.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectBestAction**](classsdm_1_1ActionVFInterface.md#function-selectbestaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Select the best action for a state at a precise time._  |








## Public Functions Documentation


### function selectBestAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::ActionVFInterface::selectBestAction (
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




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/action_vf/action_vf_interface.hpp`