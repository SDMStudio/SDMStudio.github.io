
# Class sdm::DeterministicDecisionRule

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)



_This class provide a way to manipulate data relative to a deterministic decision rule._ [More...](#detailed-description)

* `#include <det_decision_rule.hpp>`



Inherits the following classes: [sdm::DecisionRule](classsdm_1_1DecisionRule.md)


Inherited by the following classes: [sdm::JointDeterministicDecisionRule](classsdm_1_1JointDeterministicDecisionRule.md)








## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md#function-deterministicdecisionrule-1-3) () <br> |
|   | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md#function-deterministicdecisionrule-2-3) (const [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) & copy) <br> |
|   | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md#function-deterministicdecisionrule-3-3) (const std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; & acc\_states, const std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; & n\_actions) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**act**](classsdm_1_1DeterministicDecisionRule.md#function-act) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const<br>_Get the action deducted from a given state._  |
| virtual bool | [**elementExist**](classsdm_1_1DeterministicDecisionRule.md#function-elementexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) <br> |
|  std::map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**getMap**](classsdm_1_1DeterministicDecisionRule.md#function-getmap) () const<br> |
| virtual double | [**getProbability**](classsdm_1_1DeterministicDecisionRule.md#function-getprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, const std::shared\_ptr&lt; Action &gt; & a) const<br>_Get the probability of selecting action a in state s. This should return 0 if the action that corresponds to the state is a._  |
| virtual void | [**setProbability**](classsdm_1_1DeterministicDecisionRule.md#function-setprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, const std::shared\_ptr&lt; Action &gt; & a, double proba=1) <br>[_**Set**_](structsdm_1_1Set.md) _the probability of selecting action a in state s._ |
| virtual std::string | [**str**](classsdm_1_1DeterministicDecisionRule.md#function-str) () const<br> |

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










## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**map\_state\_to\_action\_**](classsdm_1_1DeterministicDecisionRule.md#variable-map-state-to-action-)  <br> |












# Detailed Description


To represent a deterministic decision rule, we simply use a structure that map histories to actions. 

    
## Public Functions Documentation


### function DeterministicDecisionRule [1/3]


```cpp
sdm::DeterministicDecisionRule::DeterministicDecisionRule () 
```



### function DeterministicDecisionRule [2/3]


```cpp
sdm::DeterministicDecisionRule::DeterministicDecisionRule (
    const DeterministicDecisionRule & copy
) 
```



### function DeterministicDecisionRule [3/3]


```cpp
sdm::DeterministicDecisionRule::DeterministicDecisionRule (
    const std::vector< std::shared_ptr< Item >> & acc_states,
    const std::vector< std::shared_ptr< Item >> & n_actions
) 
```



### function act 


```cpp
virtual std::shared_ptr< Action > sdm::DeterministicDecisionRule::act (
    const std::shared_ptr< State > & state
) const
```




**Parameters:**


* `state` the generic state 



**Returns:**

the corresponding action 




        
Implements [*sdm::DecisionRule::act*](classsdm_1_1DecisionRule.md#function-act)


### function elementExist 


```cpp
virtual bool sdm::DeterministicDecisionRule::elementExist (
    const std::shared_ptr< State > &
) 
```


Implements [*sdm::DecisionRule::elementExist*](classsdm_1_1DecisionRule.md#function-elementexist)


### function getMap 


```cpp
std::map< std::shared_ptr< State >, std::shared_ptr< Action > > sdm::DeterministicDecisionRule::getMap () const
```



### function getProbability 


```cpp
virtual double sdm::DeterministicDecisionRule::getProbability (
    const std::shared_ptr< State > & s,
    const std::shared_ptr< Action > & a
) const
```




**Parameters:**


* `s` the state 
* `a` the action 



**Returns:**

the probability 




        
Implements [*sdm::DecisionRule::getProbability*](classsdm_1_1DecisionRule.md#function-getprobability)


### function setProbability 


```cpp
virtual void sdm::DeterministicDecisionRule::setProbability (
    const std::shared_ptr< State > & s,
    const std::shared_ptr< Action > & a,
    double proba=1
) 
```




**Parameters:**


* `s` the state 
* `a` the action 
* `proba` the probability 



        
Implements [*sdm::DecisionRule::setProbability*](classsdm_1_1DecisionRule.md#function-setprobability)


### function str 


```cpp
virtual std::string sdm::DeterministicDecisionRule::str () const
```


Implements [*sdm::DecisionRule::str*](classsdm_1_1DecisionRule.md#function-str)

## Protected Attributes Documentation


### variable map\_state\_to\_action\_ 


```cpp
std::map<std::shared_ptr<State>, std::shared_ptr<Action> > sdm::DeterministicDecisionRule::map_state_to_action_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::DeterministicDecisionRule::operator<< (
    std::ostream & os,
    const DeterministicDecisionRule & dr
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/action/det_decision_rule.hpp`