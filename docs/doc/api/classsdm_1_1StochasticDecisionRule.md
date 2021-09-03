
# Class sdm::StochasticDecisionRule

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md)



_The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._ [More...](#detailed-description)

* `#include <stochastic_decision_rule.hpp>`



Inherits the following classes: [sdm::DecisionRule](classsdm_1_1DecisionRule.md),  [sdm::RecursiveMap](classsdm_1_1RecursiveMap.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename [**DecisionRule::input\_type**](classsdm_1_1Function.md#typedef-input-type) | [**input\_type**](classsdm_1_1StochasticDecisionRule.md#typedef-input-type)  <br> |
| typedef typename [**DecisionRule::output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**output\_type**](classsdm_1_1StochasticDecisionRule.md#typedef-output-type)  <br> |


## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md#function-stochasticdecisionrule) () <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**act**](classsdm_1_1StochasticDecisionRule.md#function-act) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s) const<br>_Get the action deducted from a given state._  |
| virtual bool | [**elementExist**](classsdm_1_1StochasticDecisionRule.md#function-elementexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & joint\_state) <br> |
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**getProbabilities**](classsdm_1_1StochasticDecisionRule.md#function-getprobabilities) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const<br>_Apply the DetDecisionRule function (similar to_ `act` _or even_`at` _)_ |
| virtual double | [**getProbability**](classsdm_1_1StochasticDecisionRule.md#function-getprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action) const<br>_Get the probability of action 'action' in state 'state'._  |
| virtual void | [**setProbability**](classsdm_1_1StochasticDecisionRule.md#function-setprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, double proba) <br>_Sets the probability of selecting action a when observing state s._  |
| virtual std::string | [**str**](classsdm_1_1StochasticDecisionRule.md#function-str) () const<br> |

## Public Functions inherited from sdm::DecisionRule

See [sdm::DecisionRule](classsdm_1_1DecisionRule.md)

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






























# Detailed Description




**Template parameters:**


* `std::shared_ptr<State>` the state type 
* `std::shared_ptr<Action>` the action type 



    
## Public Types Documentation


### typedef input\_type 


```cpp
using sdm::StochasticDecisionRule::input_type =  typename DecisionRule::input_type;
```



### typedef output\_type 


```cpp
using sdm::StochasticDecisionRule::output_type =  typename DecisionRule::output_type;
```


## Public Functions Documentation


### function StochasticDecisionRule 


```cpp
sdm::StochasticDecisionRule::StochasticDecisionRule () 
```



### function act 


```cpp
virtual std::shared_ptr< Action > sdm::StochasticDecisionRule::act (
    const std::shared_ptr< State > & s
) const
```




**Parameters:**


* `s` the generic state 



**Returns:**

the corresponding action 




        
Implements [*sdm::DecisionRule::act*](classsdm_1_1DecisionRule.md#function-act)


### function elementExist 


```cpp
virtual bool sdm::StochasticDecisionRule::elementExist (
    const std::shared_ptr< State > & joint_state
) 
```


Implements [*sdm::DecisionRule::elementExist*](classsdm_1_1DecisionRule.md#function-elementexist)


### function getProbabilities 


```cpp
RecursiveMap < std::shared_ptr< Action >, double > sdm::StochasticDecisionRule::getProbabilities (
    const std::shared_ptr< State > & state
) const
```




**Parameters:**


* `s` the generic state 



**Returns:**

the corresponding action 




        

### function getProbability 


```cpp
virtual double sdm::StochasticDecisionRule::getProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action
) const
```




**Parameters:**


* `state` the state 
* `action` the action 
* `proba` the probability 



        
Implements [*sdm::DecisionRule::getProbability*](classsdm_1_1DecisionRule.md#function-getprobability)


### function setProbability 


```cpp
virtual void sdm::StochasticDecisionRule::setProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    double proba
) 
```




**Parameters:**


* `state` the state 
* `action` the action 
* `proba` the probability 



        
Implements [*sdm::DecisionRule::setProbability*](classsdm_1_1DecisionRule.md#function-setprobability)


### function str 


```cpp
virtual std::string sdm::StochasticDecisionRule::str () const
```


Implements [*sdm::DecisionRule::str*](classsdm_1_1DecisionRule.md#function-str)
## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::StochasticDecisionRule::operator<< (
    std::ostream & os,
    const StochasticDecisionRule & stoch_decision_rule
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/action/stochastic_decision_rule.hpp`