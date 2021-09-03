
# Class sdm::JointDeterministicDecisionRule

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md)



_This class provide a way to manipulate a function that maps joint histories to joint actions._ 

* `#include <joint_det_decision_rule.hpp>`



Inherits the following classes: [sdm::Joint](classsdm_1_1Joint.md),  [sdm::DeterministicDecisionRule](classsdm_1_1DeterministicDecisionRule.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename [**DeterministicDecisionRule::input\_type**](classsdm_1_1Function.md#typedef-input-type) | [**input\_type**](classsdm_1_1JointDeterministicDecisionRule.md#typedef-input-type)  <br> |
| typedef typename [**DeterministicDecisionRule::output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**output\_type**](classsdm_1_1JointDeterministicDecisionRule.md#typedef-output-type)  <br> |

## Public Types inherited from sdm::Joint

See [sdm::Joint](classsdm_1_1Joint.md)

| Type | Name |
| ---: | :--- |
| typedef T | [**value\_type**](classsdm_1_1Joint.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |



## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |



















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md#function-jointdeterministicdecisionrule-1-4) () <br> |
|   | [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md#function-jointdeterministicdecisionrule-2-4) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) &gt;&gt; & individual\_decision\_rules) <br> |
|   | [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md#function-jointdeterministicdecisionrule-3-4) (std::vector&lt; std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; acc\_states, std::vector&lt; std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt;&gt; actions) <br> |
|   | [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md#function-jointdeterministicdecisionrule-4-4) (const std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; &, const std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; & list\_indiv\_dr) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**act**](classsdm_1_1JointDeterministicDecisionRule.md#function-act) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const<br>_Get the action deducted from a given state._  |
| virtual bool | [**elementExist**](classsdm_1_1JointDeterministicDecisionRule.md#function-elementexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) <br> |
|  double | [**getProbability**](classsdm_1_1JointDeterministicDecisionRule.md#function-getprobability-1-3) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt; & state, const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt;&gt; & action) const<br>_Get the probability of joint action 'action' in joint state 'state'._  |
| virtual double | [**getProbability**](classsdm_1_1JointDeterministicDecisionRule.md#function-getprobability-2-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action) const<br>_Get the probability of selecting action a in state s. This should return 0 if the action that corresponds to the state is a._  |
|  double | [**getProbability**](classsdm_1_1JointDeterministicDecisionRule.md#function-getprobability-3-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, const [**number**](namespacesdm.md#typedef-number) & agent\_id) const<br>_Get the probability of action 'action' in state 'state' for agent id._  |
|  void | [**setProbability**](classsdm_1_1JointDeterministicDecisionRule.md#function-setprobability-1-2) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt; & state, const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt;&gt; & action, double proba=0) <br>_Sets the probability of selecting action a when observing state s._  |
| virtual void | [**setProbability**](classsdm_1_1JointDeterministicDecisionRule.md#function-setprobability-2-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, double proba=1) <br>[_**Set**_](structsdm_1_1Set.md) _the probability of selecting action a in state s._ |
| virtual std::string | [**str**](classsdm_1_1JointDeterministicDecisionRule.md#function-str) () const<br> |

## Public Functions inherited from sdm::Joint

See [sdm::Joint](classsdm_1_1Joint.md)

| Type | Name |
| ---: | :--- |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-1-4) () <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-2-4) (const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-3-4) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-4-4) (std::initializer\_list&lt; T &gt; list\_values) <br> |
|  const T & | [**get**](classsdm_1_1Joint.md#function-get) (const [**number**](namespacesdm.md#typedef-number) &) const<br>_Get the element for agent i._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1Joint.md#function-getnumagents) () const<br>_Get the number of agents (i.e. the size of the joint element)_  |
| virtual T | [**operator()**](classsdm_1_1Joint.md#function-operator()) (const [**number**](namespacesdm.md#typedef-number) &) <br>_Get the element for agent i._  |
|  void | [**serialize**](classsdm_1_1Joint.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  std::string | [**str**](classsdm_1_1Joint.md#function-str) () const<br> |
|  std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; TOutput &gt; &gt; &gt; | [**toJoint**](classsdm_1_1Joint.md#function-tojoint) () <br> |
| virtual  | [**~Joint**](classsdm_1_1Joint.md#function-joint) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |

## Public Functions inherited from sdm::DeterministicDecisionRule

See [sdm::DeterministicDecisionRule](classsdm_1_1DeterministicDecisionRule.md)

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






















## Protected Attributes inherited from sdm::DeterministicDecisionRule

See [sdm::DeterministicDecisionRule](classsdm_1_1DeterministicDecisionRule.md)

| Type | Name |
| ---: | :--- |
|  std::map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**map\_state\_to\_action\_**](classsdm_1_1DeterministicDecisionRule.md#variable-map-state-to-action-)  <br> |





















## Public Types Documentation


### typedef input\_type 


```cpp
using sdm::JointDeterministicDecisionRule::input_type =  typename DeterministicDecisionRule::input_type;
```



### typedef output\_type 


```cpp
using sdm::JointDeterministicDecisionRule::output_type =  typename DeterministicDecisionRule::output_type;
```


## Public Functions Documentation


### function JointDeterministicDecisionRule [1/4]


```cpp
sdm::JointDeterministicDecisionRule::JointDeterministicDecisionRule () 
```



### function JointDeterministicDecisionRule [2/4]


```cpp
sdm::JointDeterministicDecisionRule::JointDeterministicDecisionRule (
    const Joint < std::shared_ptr< DeterministicDecisionRule >> & individual_decision_rules
) 
```



### function JointDeterministicDecisionRule [3/4]


```cpp
sdm::JointDeterministicDecisionRule::JointDeterministicDecisionRule (
    std::vector< std::vector< std::shared_ptr< Item >>> acc_states,
    std::vector< std::vector< std::shared_ptr< Item >>> actions
) 
```



### function JointDeterministicDecisionRule [4/4]


```cpp
sdm::JointDeterministicDecisionRule::JointDeterministicDecisionRule (
    const std::vector< std::shared_ptr< Item >> &,
    const std::vector< std::shared_ptr< Item >> & list_indiv_dr
) 
```



### function act 


```cpp
virtual std::shared_ptr< Action > sdm::JointDeterministicDecisionRule::act (
    const std::shared_ptr< State > & state
) const
```




**Parameters:**


* `state` the generic state 



**Returns:**

the corresponding action 




        
Implements [*sdm::DeterministicDecisionRule::act*](classsdm_1_1DeterministicDecisionRule.md#function-act)


### function elementExist 


```cpp
virtual bool sdm::JointDeterministicDecisionRule::elementExist (
    const std::shared_ptr< State > &
) 
```


Implements [*sdm::DeterministicDecisionRule::elementExist*](classsdm_1_1DeterministicDecisionRule.md#function-elementexist)


### function getProbability [1/3]


```cpp
double sdm::JointDeterministicDecisionRule::getProbability (
    const Joint < std::shared_ptr< State >> & state,
    const Joint < std::shared_ptr< Action >> & action
) const
```




**Parameters:**


* `state` the joint state 
* `action` the joint action 
* `proba` the probability 



        

### function getProbability [2/3]


```cpp
virtual double sdm::JointDeterministicDecisionRule::getProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action
) const
```




**Parameters:**


* `s` the state 
* `a` the action 



**Returns:**

the probability 




        
Implements [*sdm::DeterministicDecisionRule::getProbability*](classsdm_1_1DeterministicDecisionRule.md#function-getprobability)


### function getProbability [3/3]


```cpp
double sdm::JointDeterministicDecisionRule::getProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    const number & agent_id
) const
```




**Parameters:**


* `agent_id` the agent identifier 
* `state` the state 
* `action` the action 



**Returns:**

the probability selecting action 'action' in state 'state' 




        

### function setProbability [1/2]


```cpp
void sdm::JointDeterministicDecisionRule::setProbability (
    const Joint < std::shared_ptr< State >> & state,
    const Joint < std::shared_ptr< Action >> & action,
    double proba=0
) 
```




**Parameters:**


* `state` the joint state 
* `action` the joint action 
* `proba` the probability 



        

### function setProbability [2/2]


```cpp
virtual void sdm::JointDeterministicDecisionRule::setProbability (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    double proba=1
) 
```




**Parameters:**


* `s` the state 
* `a` the action 
* `proba` the probability 



        
Implements [*sdm::DeterministicDecisionRule::setProbability*](classsdm_1_1DeterministicDecisionRule.md#function-setprobability)


### function str 


```cpp
virtual std::string sdm::JointDeterministicDecisionRule::str () const
```


Implements [*sdm::DeterministicDecisionRule::str*](classsdm_1_1DeterministicDecisionRule.md#function-str)
## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::JointDeterministicDecisionRule::operator<< (
    std::ostream & os,
    const JointDeterministicDecisionRule & joint_dr
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/action/joint_det_decision_rule.hpp`