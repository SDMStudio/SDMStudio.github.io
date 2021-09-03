
# Class sdm::SolvableByHSVI

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)



_Public interface for problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._[_**HSVI**_](classsdm_1_1HSVI.md) _can be used to solve the problem that implement this interface._

* `#include <solvable_by_hsvi.hpp>`





Inherited by the following classes: [sdm::SolvableByMDP](classsdm_1_1SolvableByMDP.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual double | [**do\_excess**](classsdm_1_1SolvableByHSVI.md#function-do-excess) (double incumbent, double lb\_value, double ub\_value, double cost\_so\_far, double error, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Compute the excess of the_ [_**HSVI**_](classsdm_1_1HSVI.md) _paper. It refers to the termination condition._ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space at a specific state and timestep. The state dependency is required when the game forbid the usage of a number of actions in this state. It is also used in some reformulated problems where actions are decision rules. The time dependency is required in extensive-form games in which some agents have a different action space._  |
| virtual double | [**getDiscount**](classsdm_1_1SolvableByHSVI.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the specific discount factor for the problem at hand._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SolvableByHSVI.md#function-getexpectednextvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the expected next value._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInitialState**](classsdm_1_1SolvableByHSVI.md#function-getinitialstate) () = 0<br>_Get the initial state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**getNextState**](classsdm_1_1SolvableByHSVI.md#function-getnextstate) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpaceAt**](classsdm_1_1SolvableByHSVI.md#function-getobservationspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**getReward**](classsdm_1_1SolvableByHSVI.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the reward of executing a specific action in an specific state at timestep t. The time dependency can be required in non-stationnary problems._  |
| virtual const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingProblem**](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem) () const = 0<br>_Get the well defined underlying problem. Some problems are solvable by DP algorithms even if they are not well defined. Usually, they simply are reformulation of an underlying well defined problem. For instance, the underlying DecPOMDP of the OccupancyMDP or the underlying_ [_**POMDP**_](classsdm_1_1POMDP.md) _of the current BeliefMDP._ |
| virtual double | [**getWeightedDiscount**](classsdm_1_1SolvableByHSVI.md#function-getweighteddiscount) ([**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the specific weighted discount factor for the problem at hand._  |
| virtual bool | [**isSerialized**](classsdm_1_1SolvableByHSVI.md#function-isserialized) () const = 0<br>_Check if the problem is serialized._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextState**](classsdm_1_1SolvableByHSVI.md#function-nextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0, const std::shared\_ptr&lt; [**HSVI**](classsdm_1_1HSVI.md) &gt; & hsvi=nullptr) = 0<br>_Select the next state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectNextAction**](classsdm_1_1SolvableByHSVI.md#function-selectnextaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & lb, const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & ub, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Select the next action._  |
| virtual void | [**setInitialState**](classsdm_1_1SolvableByHSVI.md#function-setinitialstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) = 0<br> |
| virtual  | [**~SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md#function-solvablebyhsvi) () <br> |








## Public Functions Documentation


### function do\_excess 


```cpp
virtual double sdm::SolvableByHSVI::do_excess (
    double incumbent,
    double lb_value,
    double ub_value,
    double cost_so_far,
    double error,
    number t
) = 0
```




**Parameters:**


* `double` : incumbent 
* `double` : lb value 
* `double` : ub value 
* `double` : cost\_so\_far 
* `double` : error 
* `number` : horizon 



**Returns:**

double 




        

### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::SolvableByHSVI::getActionSpaceAt (
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `state` the state 
* `t` the timestep 



**Returns:**

the action space 




        

### function getDiscount 


```cpp
virtual double sdm::SolvableByHSVI::getDiscount (
    number t
) const = 0
```




**Parameters:**


* `number` decision epoch or any other parameter 



**Returns:**

double discount factor 




        

### function getExpectedNextValue 


```cpp
virtual double sdm::SolvableByHSVI::getExpectedNextValue (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```




**Parameters:**


* `value_function` a pointer on the value function to use to perform the calculus. 
* `state` the state on which to evaluate the next expected value. 
* `action` 
* `t` 



**Returns:**

the expected next value 




        

### function getInitialState 


```cpp
virtual std::shared_ptr< State > sdm::SolvableByHSVI::getInitialState () = 0
```



### function getNextState 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::SolvableByHSVI::getNextState (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t
) = 0
```



### function getObservationSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::SolvableByHSVI::getObservationSpaceAt (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```



### function getReward 


```cpp
virtual double sdm::SolvableByHSVI::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `t` the timestep 



**Returns:**

the reward 




        

### function getUnderlyingProblem 


```cpp
virtual const std::shared_ptr< MDPInterface > & sdm::SolvableByHSVI::getUnderlyingProblem () const = 0
```




**Returns:**

the underlying problem 




        

### function getWeightedDiscount 


```cpp
virtual double sdm::SolvableByHSVI::getWeightedDiscount (
    number t
) = 0
```




**Parameters:**


* `number` decision epoch or any other parameter 



**Returns:**

double discount factor 




        

### function isSerialized 


```cpp
virtual bool sdm::SolvableByHSVI::isSerialized () const = 0
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        

### function nextState 


```cpp
virtual std::shared_ptr< State > sdm::SolvableByHSVI::nextState (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0,
    const std::shared_ptr< HSVI > & hsvi=nullptr
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 
* `t` the timestep 
* `hsvi` a pointer on the algorithm that makes the call 



**Returns:**

the next state 




        

### function selectNextAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::SolvableByHSVI::selectNextAction (
    const std::shared_ptr< ValueFunction > & lb,
    const std::shared_ptr< ValueFunction > & ub,
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `lb` the lower bound 
* `ub` the upper bound 
* `state` the current state 
* `t` the timestep 



**Returns:**

the selected action 




        

### function setInitialState 


```cpp
virtual void sdm::SolvableByHSVI::setInitialState (
    const std::shared_ptr< State > &
) = 0
```



### function ~SolvableByHSVI 


```cpp
inline virtual sdm::SolvableByHSVI::~SolvableByHSVI () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/solvable_by_hsvi.hpp`