
<NavBar active_item_id="2"/>

# Class sdm::Reward


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Reward**](classsdm_1_1Reward.md)





* `#include <reward.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Reward**](classsdm_1_1Reward.md#function-reward-1-2) () <br> |
|   | [**Reward**](classsdm_1_1Reward.md#function-reward-2-2) ([**number**](namespacesdm.md#typedef-number) num\_jactions, [**number**](namespacesdm.md#typedef-number) num\_states) <br>[_**Reward**_](classsdm_1_1Reward.md) _constructor._ |
|  double | [**getMaxReward**](classsdm_1_1Reward.md#function-getmaxreward) () const<br> |
|  double | [**getMinReward**](classsdm_1_1Reward.md#function-getminreward) () const<br> |
|  double | [**getReward**](classsdm_1_1Reward.md#function-getreward-1-3) ([**number**](namespacesdm.md#typedef-number) s, [**number**](namespacesdm.md#typedef-number) a) const<br>_Returns reward._  |
|  const Vector & | [**getReward**](classsdm_1_1Reward.md#function-getreward-2-3) ([**number**](namespacesdm.md#typedef-number)) const<br> |
|  const std::vector&lt; Vector &gt; & | [**getReward**](classsdm_1_1Reward.md#function-getreward-3-3) () const<br>_Returns list of reward vectors._  |
|  void | [**initReward**](classsdm_1_1Reward.md#function-initreward) ([**number**](namespacesdm.md#typedef-number) num\_jactions, [**number**](namespacesdm.md#typedef-number) num\_states) <br>_Inits the reward model._  |
|  void | [**setReward**](classsdm_1_1Reward.md#function-setreward-1-2) ([**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number), double) <br> |
|  void | [**setReward**](classsdm_1_1Reward.md#function-setreward-2-2) ([**number**](namespacesdm.md#typedef-number), const Vector &) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**max**](classsdm_1_1Reward.md#variable-max)   = = -999999<br> |
|  double | [**min**](classsdm_1_1Reward.md#variable-min)   = = +999999<br> |
|  std::vector&lt; Vector &gt; | [**rewards**](classsdm_1_1Reward.md#variable-rewards)  <br>_model of the outcomes of the entire team of collaborative agents involved in the system._  |




## Public Functions Documentation


### function Reward [1/2]


```cpp
sdm::Reward::Reward () 
```



### function Reward [2/2]


```cpp
sdm::Reward::Reward (
    number num_jactions,
    number num_states
) 
```




**Parameters:**


* `num_jactions` Number of joint actions 
* `num_states` Number of states 



        

### function getMaxReward 


```cpp
double sdm::Reward::getMaxReward () const
```



### function getMinReward 


```cpp
double sdm::Reward::getMinReward () const
```



### function getReward [1/3]


```cpp
double sdm::Reward::getReward (
    number s,
    number a
) const
```




**Parameters:**


* `s` A specific state 
* `a` A specific joint action 



**Returns:**

reward at state s and jaction a 




        

### function getReward [2/3]


```cpp
const Vector & sdm::Reward::getReward (
    number
) const
```



### function getReward [3/3]


```cpp
const std::vector< Vector > & sdm::Reward::getReward () const
```




**Returns:**

the entire reward function 




        

### function initReward 


```cpp
void sdm::Reward::initReward (
    number num_jactions,
    number num_states
) 
```




**Parameters:**


* `num_jactions` Number of joint actions 
* `num_states` Number of states 



        

### function setReward [1/2]


```cpp
void sdm::Reward::setReward (
    number,
    number,
    double
) 
```



### function setReward [2/2]


```cpp
void sdm::Reward::setReward (
    number,
    const Vector &
) 
```


## Protected Attributes Documentation


### variable max 


```cpp
double sdm::Reward::max;
```



### variable min 


```cpp
double sdm::Reward::min;
```



### variable rewards 


```cpp
std::vector<Vector> sdm::Reward::rewards;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Reward::operator<< (
    std::ostream & os,
    const Reward & reward_fct
) 
```




**Parameters:**


* `std::ostream&` 
* `const` dpomdp& the individual decision rule to be printed 



**Returns:**

std::ostream&


This method should produce an output of this form: 

        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/reward.hpp`