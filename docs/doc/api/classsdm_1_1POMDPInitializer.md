
<NavBar active_item_id="2"/>

# Class sdm::POMDPInitializer

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md)



_The POMDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying POMDP optimal value function._[More...](#detailed-description)

* `#include <pomdp_initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)












## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**algo\_name\_**](classsdm_1_1POMDPInitializer.md#variable-algo-name-)  <br> |
|  double | [**error\_**](classsdm_1_1POMDPInitializer.md#variable-error-)  <br> |
|  double | [**trials\_**](classsdm_1_1POMDPInitializer.md#variable-trials-)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md#function-pomdpinitializer) (std::string algo\_name, double error=0.01, int trials=10000) <br> |
| virtual void | [**init**](classsdm_1_1POMDPInitializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |















# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



**Parameters:**


* `algo_name` the algorithm that will be used to solve the underlying POMDP. 
* `error` the maximal error 
* `trials` the maximal number of trials 



    
## Public Attributes Documentation


### variable algo\_name\_ 


```cpp
std::string sdm::POMDPInitializer< TState, TAction >::algo_name_;
```



### variable error\_ 


```cpp
double sdm::POMDPInitializer< TState, TAction >::error_;
```



### variable trials\_ 


```cpp
double sdm::POMDPInitializer< TState, TAction >::trials_;
```


## Public Functions Documentation


### function POMDPInitializer 


```cpp
sdm::POMDPInitializer::POMDPInitializer (
    std::string algo_name,
    double error=0.01,
    int trials=10000
) 
```



### function init 


```cpp
virtual void sdm::POMDPInitializer::init (
    ValueFunction < TState, TAction > * vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer/pomdp_initializer.hpp`