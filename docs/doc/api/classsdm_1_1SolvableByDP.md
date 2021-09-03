
# Class sdm::SolvableByDP

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SolvableByDP**](classsdm_1_1SolvableByDP.md)



_Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._[More...](#detailed-description)

* `#include <solvable_by_dp.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1SolvableByDP.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the actions availables at a specific state._  |
| virtual double | [**getDiscount**](classsdm_1_1SolvableByDP.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the specific discount factor for the problem at hand._  |
| virtual double | [**getExpectedNextValue**](classsdm_1_1SolvableByDP.md#function-getexpectednextvalue) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & value\_function, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the expected next value._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getNextStateDistribution**](classsdm_1_1SolvableByDP.md#function-getnextstatedistribution) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br>_Get the distribution over next states._  |
| virtual double | [**getReward**](classsdm_1_1SolvableByDP.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the reward at a given occupancy state and occupancy action._  |
| virtual std::shared\_ptr&lt; [**Distribution**](classsdm_1_1Distribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**getStartDistribution**](classsdm_1_1SolvableByDP.md#function-getstartdistribution) () const = 0<br> |
| virtual  | [**~SolvableByDP**](classsdm_1_1SolvableByDP.md#function-solvablebydp) () <br> |








# Detailed Description




**Template parameters:**


* `TState` The state type 
* `TAction` The action type 



    
## Public Functions Documentation


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::SolvableByDP::getActionSpaceAt (
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `state` the state 



**Returns:**

the action space 




        

### function getDiscount 


```cpp
virtual double sdm::SolvableByDP::getDiscount (
    number t
) = 0
```




**Parameters:**


* `number` decision epoch or any other parameter 



**Returns:**

double discount factor 




        

### function getExpectedNextValue 


```cpp
virtual double sdm::SolvableByDP::getExpectedNextValue (
    const std::shared_ptr< ValueFunction > & value_function,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```




**Parameters:**


* `value_function` a pointer on the value function to use to perform the calculus. 
* `state` the state on which to evaluate the next expected value \* 
* `action` 
* `t` 



**Returns:**

double 




        

### function getNextStateDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::SolvableByDP::getNextStateDistribution (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```




**Parameters:**


* `state` 
* `action` 
* `t` 



**Returns:**

std::shared\_ptr&lt;[**Distribution**](classsdm_1_1Distribution.md)&lt;std::shared\_ptr&lt;State&gt;&gt;&gt; 




        

### function getReward 


```cpp
virtual double sdm::SolvableByDP::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```



### function getStartDistribution 


```cpp
virtual std::shared_ptr< Distribution < std::shared_ptr< State > > > sdm::SolvableByDP::getStartDistribution () const = 0
```



### function ~SolvableByDP 


```cpp
inline virtual sdm::SolvableByDP::~SolvableByDP () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/solvable_by_dp.hpp`