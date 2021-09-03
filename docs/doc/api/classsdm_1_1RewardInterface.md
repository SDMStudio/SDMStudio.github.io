
# Class sdm::RewardInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**RewardInterface**](classsdm_1_1RewardInterface.md)



_This class provides a common interface for every models of reward._ [More...](#detailed-description)

* `#include <reward_interface.hpp>`





Inherited by the following classes: [sdm::FunctionReward](classsdm_1_1FunctionReward.md),  [sdm::TabularReward](classsdm_1_1TabularReward.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual double | [**getMaxReward**](classsdm_1_1RewardInterface.md#function-getmaxreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getMinReward**](classsdm_1_1RewardInterface.md#function-getminreward) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |
| virtual double | [**getReward**](classsdm_1_1RewardInterface.md#function-getreward) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) const = 0<br> |








# Detailed Description


A model of reward is well defined if it implements this interface. A reward model is required to define a [**MDP**](classsdm_1_1MDP.md) (see file MDP.hpp) and related problems. Basically, there is two types of reward models : the tabular model ([**tabular\_reward.hpp**](tabular__reward_8hpp.md)) and the function based model ([**function\_reward.hpp**](function__reward_8hpp.md)). 

    
## Public Functions Documentation


### function getMaxReward 


```cpp
virtual double sdm::RewardInterface::getMaxReward (
    number t
) const = 0
```



### function getMinReward 


```cpp
virtual double sdm::RewardInterface::getMinReward (
    number t
) const = 0
```



### function getReward 


```cpp
virtual double sdm::RewardInterface::getReward (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) const = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/reward/reward_interface.hpp`