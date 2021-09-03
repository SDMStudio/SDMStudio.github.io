
# Class sdm::DecisionRule

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DecisionRule**](classsdm_1_1DecisionRule.md)



_A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._ 

* `#include <decision_rule.hpp>`



Inherits the following classes: Action,  [sdm::Function](classsdm_1_1Function.md)


Inherited by the following classes: [sdm::DeterministicDecisionRule](classsdm_1_1DeterministicDecisionRule.md),  [sdm::StochasticDecisionRule](classsdm_1_1StochasticDecisionRule.md)







## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; Action &gt; | [**act**](classsdm_1_1DecisionRule.md#function-act) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const = 0<br>_Get the action deducted from a given state._  |
| virtual bool | [**elementExist**](classsdm_1_1DecisionRule.md#function-elementexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) = 0<br> |
| virtual double | [**getProbability**](classsdm_1_1DecisionRule.md#function-getprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action) const = 0<br>_Get the probability of action 'action' in state 'state'._  |
| virtual [**TypeAction**](namespacesdm.md#enum-typeaction) | [**getTypeAction**](classsdm_1_1DecisionRule.md#function-gettypeaction) () const<br> |
|  std::shared\_ptr&lt; Action &gt; | [**operator()**](classsdm_1_1DecisionRule.md#function-operator()) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s) <br> |
| virtual void | [**setProbability**](classsdm_1_1DecisionRule.md#function-setprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, double proba) = 0<br>_Sets the probability of selecting action a when observing state s._  |
| virtual std::string | [**str**](classsdm_1_1DecisionRule.md#function-str) () const = 0<br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |















## Public Functions Documentation


### function act 


```cpp
virtual std::shared_ptr< Action > sdm::DecisionRule::act (
    const std::shared_ptr< State > & state
) const = 0
```




**Parameters:**


* `state` the generic state 



**Returns:**

the corresponding action 




        

### function elementExist 


```cpp
virtual bool sdm::DecisionRule::elementExist (
    const std::shared_ptr< State > &
) = 0
```



### function getProbability 


```cpp
virtual double sdm::DecisionRule::getProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action
) const = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `proba` the probability 



        

### function getTypeAction 


```cpp
inline virtual TypeAction sdm::DecisionRule::getTypeAction () const
```



### function operator() 


```cpp
inline std::shared_ptr< Action > sdm::DecisionRule::operator() (
    const std::shared_ptr< State > & s
) 
```



### function setProbability 


```cpp
virtual void sdm::DecisionRule::setProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    double proba
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `proba` the probability 



        

### function str 


```cpp
virtual std::string sdm::DecisionRule::str () const = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/action/decision_rule.hpp`