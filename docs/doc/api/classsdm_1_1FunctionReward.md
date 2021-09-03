
# Class sdm::FunctionReward

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**FunctionReward**](classsdm_1_1FunctionReward.md)



_This class provides getters and setters for the reward model._ 

* `#include <function_reward.hpp>`



Inherits the following classes: [sdm::RewardInterface](classsdm_1_1RewardInterface.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FunctionReward**](classsdm_1_1FunctionReward.md#function-functionreward-1-3) () <br> |
|   | [**FunctionReward**](classsdm_1_1FunctionReward.md#function-functionreward-2-3) (const std::string & expression) <br> |
|   | [**FunctionReward**](classsdm_1_1FunctionReward.md#function-functionreward-3-3) (const [**FunctionReward**](classsdm_1_1FunctionReward.md) & copy) <br> |
| virtual double | [**getMaxReward**](classsdm_1_1FunctionReward.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual double | [**getMinReward**](classsdm_1_1FunctionReward.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const<br> |
| virtual double | [**getReward**](classsdm_1_1FunctionReward.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const<br> |
|  void | [**setMaxReward**](classsdm_1_1FunctionReward.md#function-setmaxreward) ([**number**](namespacesdm.md#typedef-number) t, double max\_value) <br> |
|  void | [**setMinReward**](classsdm_1_1FunctionReward.md#function-setminreward) ([**number**](namespacesdm.md#typedef-number) t, double min\_value) <br> |

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
|  std::string | [**expression**](classsdm_1_1FunctionReward.md#variable-expression)  <br> |
|  double | [**max**](classsdm_1_1FunctionReward.md#variable-max)   = = -999999<br> |
|  double | [**min**](classsdm_1_1FunctionReward.md#variable-min)   = = +999999<br> |








## Public Functions Documentation


### function FunctionReward [1/3]


```cpp
sdm::FunctionReward::FunctionReward () 
```



### function FunctionReward [2/3]


```cpp
sdm::FunctionReward::FunctionReward (
    const std::string & expression
) 
```



### function FunctionReward [3/3]


```cpp
sdm::FunctionReward::FunctionReward (
    const FunctionReward & copy
) 
```



### function getMaxReward 


```cpp
virtual double sdm::FunctionReward::getMaxReward (
    number t
) const
```


Implements [*sdm::RewardInterface::getMaxReward*](classsdm_1_1RewardInterface.md#function-getmaxreward)


### function getMinReward 


```cpp
virtual double sdm::FunctionReward::getMinReward (
    number t
) const
```


Implements [*sdm::RewardInterface::getMinReward*](classsdm_1_1RewardInterface.md#function-getminreward)


### function getReward 


```cpp
virtual double sdm::FunctionReward::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const
```


Implements [*sdm::RewardInterface::getReward*](classsdm_1_1RewardInterface.md#function-getreward)


### function setMaxReward 


```cpp
void sdm::FunctionReward::setMaxReward (
    number t,
    double max_value
) 
```



### function setMinReward 


```cpp
void sdm::FunctionReward::setMinReward (
    number t,
    double min_value
) 
```


## Protected Attributes Documentation


### variable expression 


```cpp
std::string sdm::FunctionReward::expression;
```



### variable max 


```cpp
double sdm::FunctionReward::max;
```



### variable min 


```cpp
double sdm::FunctionReward::min;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/reward/function_reward.hpp`