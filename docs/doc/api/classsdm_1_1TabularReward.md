
# Class sdm::TabularReward

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularReward**](classsdm_1_1TabularReward.md)



_This class provide a way to represent the reward model with a tabular representation._ 

* `#include <tabular_reward.hpp>`



Inherits the following classes: [sdm::RewardInterface](classsdm_1_1RewardInterface.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**MappedMatrix**](classsdm_1_1MappedMatrix.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt;, [**value\_type**](classsdm_1_1TabularReward.md#typedef-value-type) &gt; | [**matrix\_type**](classsdm_1_1TabularReward.md#typedef-matrix-type)  <br> |
| typedef double | [**value\_type**](classsdm_1_1TabularReward.md#typedef-value-type)  <br> |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularReward**](classsdm_1_1TabularReward.md#function-tabularreward-1-2) () <br> |
|   | [**TabularReward**](classsdm_1_1TabularReward.md#function-tabularreward-2-2) (const [**TabularReward**](classsdm_1_1TabularReward.md) & copy) <br> |
| virtual double | [**getMaxReward**](classsdm_1_1TabularReward.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1TabularReward.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t=0) const<br> |
| virtual double | [**getReward**](classsdm_1_1TabularReward.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) const<br> |
|  void | [**initReward**](classsdm_1_1TabularReward.md#function-initreward) ([**number**](namespacesdm.md#typedef-number) num\_states, [**number**](namespacesdm.md#typedef-number) num\_actions) <br> |
|  void | [**setReward**](classsdm_1_1TabularReward.md#function-setreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & acction, double reward, [**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual  | [**~TabularReward**](classsdm_1_1TabularReward.md#function-tabularreward) () <br> |

## Public Functions inherited from sdm::RewardInterface

See [sdm::RewardInterface](classsdm_1_1RewardInterface.md)

| Type | Name |
| ---: | :--- |
| virtual double | [**getMaxReward**](classsdm_1_1RewardInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1RewardInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getReward**](classsdm_1_1RewardInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**max**](classsdm_1_1TabularReward.md#variable-max)   = = -std::numeric\_limits&lt;[**value\_type**](classsdm_1_1TabularReward.md#typedef-value-type)&gt;::max()<br> |
|  double | [**min**](classsdm_1_1TabularReward.md#variable-min)   = = std::numeric\_limits&lt;[**value\_type**](classsdm_1_1TabularReward.md#typedef-value-type)&gt;::[**max**](classsdm_1_1TabularReward.md#variable-max)()<br> |
|  [**matrix\_type**](classsdm_1_1TabularReward.md#typedef-matrix-type) | [**rewards\_**](classsdm_1_1TabularReward.md#variable-rewards-)  <br>_model of the outcomes of the entire team of collaborative agents involved in the system._  |








## Public Types Documentation


### typedef matrix\_type 


```cpp
using sdm::TabularReward::matrix_type =  MappedMatrix<std::shared_ptr<State>, std::shared_ptr<Action>, value_type>;
```



### typedef value\_type 


```cpp
using sdm::TabularReward::value_type =  double;
```


## Public Functions Documentation


### function TabularReward [1/2]


```cpp
sdm::TabularReward::TabularReward () 
```



### function TabularReward [2/2]


```cpp
sdm::TabularReward::TabularReward (
    const TabularReward & copy
) 
```



### function getMaxReward 


```cpp
virtual double sdm::TabularReward::getMaxReward (
    number t=0
) const
```


Implements [*sdm::RewardInterface::getMaxReward*](classsdm_1_1RewardInterface.md#function-getmaxreward)


### function getMinReward 


```cpp
virtual double sdm::TabularReward::getMinReward (
    number t=0
) const
```


Implements [*sdm::RewardInterface::getMinReward*](classsdm_1_1RewardInterface.md#function-getminreward)


### function getReward 


```cpp
virtual double sdm::TabularReward::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) const
```


Implements [*sdm::RewardInterface::getReward*](classsdm_1_1RewardInterface.md#function-getreward)


### function initReward 


```cpp
void sdm::TabularReward::initReward (
    number num_states,
    number num_actions
) 
```



### function setReward 


```cpp
void sdm::TabularReward::setReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & acction,
    double reward,
    number t=0
) 
```



### function ~TabularReward 


```cpp
virtual sdm::TabularReward::~TabularReward () 
```


## Protected Attributes Documentation


### variable max 


```cpp
double sdm::TabularReward::max;
```



### variable min 


```cpp
double sdm::TabularReward::min;
```



### variable rewards\_ 


```cpp
matrix_type sdm::TabularReward::rewards_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::TabularReward::operator<< (
    std::ostream & os,
    const TabularReward & reward_fct
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/reward/tabular_reward.hpp`