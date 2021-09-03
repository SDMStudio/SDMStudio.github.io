
# Class sdm::SolvableByMDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md)



_The class for Markov Decision Processes._ 

* `#include <solvable_by_mdp.hpp>`



Inherits the following classes: [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md)


Inherited by the following classes: [sdm::BaseBeliefMDP](classsdm_1_1BaseBeliefMDP.md),  [sdm::BaseBeliefMDP](classsdm_1_1BaseBeliefMDP.md)














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md#function-solvablebymdp-1-2) () <br>_Default constructor._  |
|   | [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md#function-solvablebymdp-2-2) (const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & mdp) <br>_Construct a problem solvable by_ [_**HSVI**_](classsdm_1_1HSVI.md) _._ |
| virtual double | [**do\_excess**](classsdm_1_1SolvableByMDP.md#function-do-excess) (double incumbent, double lb\_value, double ub\_value, double cost\_so\_far, double error, [**number**](namespacesdm.md#typedef-number) horizon) <br>_Compute the excess of the_ [_**HSVI**_](classsdm_1_1HSVI.md) _paper. It refers to the termination condition._ |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1SolvableByMDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the action space at a specific state and timestep. The state dependency is required when the game forbid the usage of a number of actions in this state. It is also used in some reformulated problems where actions are decision rules. The time dependency is required in extensive-form games in which some agents have a different action space._  |
| virtual double | [**getDiscount**](classsdm_1_1SolvableByMDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the specific discount factor for the problem at hand._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SolvableByMDP.md#function-getexpectednextvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the expected next value._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getInitialState**](classsdm_1_1SolvableByMDP.md#function-getinitialstate) () <br>_Get the initial state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**getNextState**](classsdm_1_1SolvableByMDP.md#function-getnextstate) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getObservationSpaceAt**](classsdm_1_1SolvableByMDP.md#function-getobservationspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual double | [**getReward**](classsdm_1_1SolvableByMDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the reward of executing a specific action in an specific state at timestep t. The time dependency can be required in non-stationnary problems._  |
| virtual const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingProblem**](classsdm_1_1SolvableByMDP.md#function-getunderlyingproblem) () const<br>_Get the well defined underlying problem. Some problems are solvable by DP algorithms even if they are not well defined. Usually, they simply are reformulation of an underlying well defined problem. For instance, the underlying DecPOMDP of the OccupancyMDP or the underlying_ [_**POMDP**_](classsdm_1_1POMDP.md) _of the current BeliefMDP._ |
| virtual double | [**getWeightedDiscount**](classsdm_1_1SolvableByMDP.md#function-getweighteddiscount) ([**number**](namespacesdm.md#typedef-number) t) <br>_Get the specific weighted discount factor for the problem at hand._  |
| virtual bool | [**isSerialized**](classsdm_1_1SolvableByMDP.md#function-isserialized) () const<br>_Check if the problem is serialized._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**nextState**](classsdm_1_1SolvableByMDP.md#function-nextstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0, const std::shared\_ptr&lt; [**HSVI**](classsdm_1_1HSVI.md) &gt; & hsvi=nullptr) <br>_Select the next state._  |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**selectNextAction**](classsdm_1_1SolvableByMDP.md#function-selectnextaction) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & lb, const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & ub, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, [**number**](namespacesdm.md#typedef-number) h) <br>_Select the next action._  |
| virtual void | [**setInitialState**](classsdm_1_1SolvableByMDP.md#function-setinitialstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) <br> |

## Public Functions inherited from sdm::SolvableByHSVI

See [sdm::SolvableByHSVI](classsdm_1_1SolvableByHSVI.md)

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







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**initial\_state\_**](classsdm_1_1SolvableByMDP.md#variable-initial-state-)  <br>_The initial state._  |
|  std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; | [**underlying\_problem\_**](classsdm_1_1SolvableByMDP.md#variable-underlying-problem-)  <br>_The underlying well defined problem._  |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & | [**getUnderlyingMDP**](classsdm_1_1SolvableByMDP.md#function-getunderlyingmdp) () const<br>_Get the underlying mdp._  |




## Public Functions Documentation


### function SolvableByMDP [1/2]


```cpp
sdm::SolvableByMDP::SolvableByMDP () 
```



### function SolvableByMDP [2/2]


```cpp
sdm::SolvableByMDP::SolvableByMDP (
    const std::shared_ptr< MDPInterface > & mdp
) 
```




**Parameters:**


* `mdp` the underlying [**MDP**](classsdm_1_1MDP.md) 



        

### function do\_excess 


```cpp
virtual double sdm::SolvableByMDP::do_excess (
    double incumbent,
    double lb_value,
    double ub_value,
    double cost_so_far,
    double error,
    number horizon
) 
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




        
Implements [*sdm::SolvableByHSVI::do\_excess*](classsdm_1_1SolvableByHSVI.md#function-do-excess)


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::SolvableByMDP::getActionSpaceAt (
    const std::shared_ptr< State > & state,
    number t=0
) 
```




**Parameters:**


* `state` the state 
* `t` the timestep 



**Returns:**

the action space 




        
Implements [*sdm::SolvableByHSVI::getActionSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getactionspaceat)


### function getDiscount 


```cpp
virtual double sdm::SolvableByMDP::getDiscount (
    number t=0
) const
```




**Parameters:**


* `number` decision epoch or any other parameter 



**Returns:**

double discount factor 




        
Implements [*sdm::SolvableByHSVI::getDiscount*](classsdm_1_1SolvableByHSVI.md#function-getdiscount)


### function getExpectedNextValue 


```cpp
virtual double sdm::SolvableByMDP::getExpectedNextValue (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) 
```




**Parameters:**


* `value_function` a pointer on the value function to use to perform the calculus. 
* `state` the state on which to evaluate the next expected value \* 
* `action` 
* `t` 



**Returns:**

double 




        
Implements [*sdm::SolvableByHSVI::getExpectedNextValue*](classsdm_1_1SolvableByHSVI.md#function-getexpectednextvalue)


### function getInitialState 


```cpp
virtual std::shared_ptr< State > sdm::SolvableByMDP::getInitialState () 
```


Implements [*sdm::SolvableByHSVI::getInitialState*](classsdm_1_1SolvableByHSVI.md#function-getinitialstate)


### function getNextState 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::SolvableByMDP::getNextState (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & belief,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t
) 
```


Implements [*sdm::SolvableByHSVI::getNextState*](classsdm_1_1SolvableByHSVI.md#function-getnextstate)


### function getObservationSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::SolvableByMDP::getObservationSpaceAt (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```


Implements [*sdm::SolvableByHSVI::getObservationSpaceAt*](classsdm_1_1SolvableByHSVI.md#function-getobservationspaceat)


### function getReward 


```cpp
virtual double sdm::SolvableByMDP::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) 
```




**Parameters:**


* `state` the state 
* `action` the action 
* `t` the timestep 



**Returns:**

the reward 




        
Implements [*sdm::SolvableByHSVI::getReward*](classsdm_1_1SolvableByHSVI.md#function-getreward)


### function getUnderlyingProblem 


```cpp
virtual const std::shared_ptr< MDPInterface > & sdm::SolvableByMDP::getUnderlyingProblem () const
```




**Returns:**

the underlying problem 




        
Implements [*sdm::SolvableByHSVI::getUnderlyingProblem*](classsdm_1_1SolvableByHSVI.md#function-getunderlyingproblem)


### function getWeightedDiscount 


```cpp
virtual double sdm::SolvableByMDP::getWeightedDiscount (
    number t
) 
```




**Parameters:**


* `number` decision epoch or any other parameter 



**Returns:**

double discount factor 




        
Implements [*sdm::SolvableByHSVI::getWeightedDiscount*](classsdm_1_1SolvableByHSVI.md#function-getweighteddiscount)


### function isSerialized 


```cpp
virtual bool sdm::SolvableByMDP::isSerialized () const
```




**Returns:**

true if the problem is serialized. 




**Returns:**

false if the problem is not serialized. 




        
Implements [*sdm::SolvableByHSVI::isSerialized*](classsdm_1_1SolvableByHSVI.md#function-isserialized)


### function nextState 


```cpp
virtual std::shared_ptr< State > sdm::SolvableByMDP::nextState (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0,
    const std::shared_ptr< HSVI > & hsvi=nullptr
) 
```




**Parameters:**


* `state` the state 
* `action` the action 
* `t` the timestep 
* `hsvi` a pointer on the algorithm that makes the call 



**Returns:**

the next state 




        
Implements [*sdm::SolvableByHSVI::nextState*](classsdm_1_1SolvableByHSVI.md#function-nextstate)


### function selectNextAction 


```cpp
virtual Pair < std::shared_ptr< Action >, double > sdm::SolvableByMDP::selectNextAction (
    const std::shared_ptr< ValueFunction > & lb,
    const std::shared_ptr< ValueFunction > & ub,
    const std::shared_ptr< State > & s,
    number h
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&lt;TState, TAction&gt;&gt;& : the lower bound 
* `const` std::shared\_ptr&lt;ValueFunction&lt;TState, TAction&gt;&gt;& : the upper bound 
* `const` TState & s : current state 
* `number` h : horizon 



**Returns:**

TAction 




        
Implements [*sdm::SolvableByHSVI::selectNextAction*](classsdm_1_1SolvableByHSVI.md#function-selectnextaction)


### function setInitialState 


```cpp
virtual void sdm::SolvableByMDP::setInitialState (
    const std::shared_ptr< State > & state
) 
```


Implements [*sdm::SolvableByHSVI::setInitialState*](classsdm_1_1SolvableByHSVI.md#function-setinitialstate)

## Protected Attributes Documentation


### variable initial\_state\_ 


```cpp
std::shared_ptr<State> sdm::SolvableByMDP::initial_state_;
```



### variable underlying\_problem\_ 


```cpp
std::shared_ptr<MDPInterface> sdm::SolvableByMDP::underlying_problem_;
```


## Protected Functions Documentation


### function getUnderlyingMDP 


```cpp
const std::shared_ptr< MDPInterface > & sdm::SolvableByMDP::getUnderlyingMDP () const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/solvable_by_mdp.hpp`