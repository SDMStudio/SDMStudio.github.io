
<NavBar active_item_id="2"/>

# Class sdm::DeterministicDecisionRule

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)





* `#include <det_decision_rule.hpp>`



Inherits the following classes: [sdm::Function](classsdm_1_1Function.md)









## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md#function-deterministicdecisionrule) (std::vector&lt; TState &gt; acc\_states, std::vector&lt; TAction &gt; n\_actions) <br> |
|  TAction | [**act**](classsdm_1_1DeterministicDecisionRule.md#function-act) (const TState & s) <br> |
|  TAction | [**operator()**](classsdm_1_1DeterministicDecisionRule.md#function-operator()) (const TState & s) <br> |
|  bool | [**operator&lt;**](classsdm_1_1DeterministicDecisionRule.md#function-operator) (const [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) & v2) const<br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
|  TOutput | [**operator()**](classsdm_1_1Function.md#function-operator()) (const TInput &) <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::map&lt; TState, TAction &gt; | [**container\_**](classsdm_1_1DeterministicDecisionRule.md#variable-container-)  <br> |








## Public Functions Documentation


### function DeterministicDecisionRule 


```cpp
inline sdm::DeterministicDecisionRule::DeterministicDecisionRule (
    std::vector< TState > acc_states,
    std::vector< TAction > n_actions
) 
```



### function act 


```cpp
inline TAction sdm::DeterministicDecisionRule::act (
    const TState & s
) 
```



### function operator() 


```cpp
inline TAction sdm::DeterministicDecisionRule::operator() (
    const TState & s
) 
```



### function operator&lt; 


```cpp
inline bool sdm::DeterministicDecisionRule::operator< (
    const DeterministicDecisionRule & v2
) const
```


## Protected Attributes Documentation


### variable container\_ 


```cpp
std::map<TState, TAction> sdm::DeterministicDecisionRule< TState, TAction >::container_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::DeterministicDecisionRule::operator<< (
    std::ostream & os,
    const DeterministicDecisionRule < TState, TAction > & dr
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/decision_rules/det_decision_rule.hpp`