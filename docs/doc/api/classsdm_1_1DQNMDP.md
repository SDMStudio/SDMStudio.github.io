
<NavBar active_item_id="2"/>

# Class sdm::DQNMDP


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DQNMDP**](classsdm_1_1DQNMDP.md)





* `#include <dqn_mdp.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DQNMDP**](classsdm_1_1DQNMDP.md#function-dqnmdp) (DQN, DQN, [**ReplayMemory**](classsdm_1_1ReplayMemory.md), [**EpsGreedy**](structsdm_1_1EpsGreedy.md), int, int, torch::Device=torch::kCPU) <br> |
| virtual void | [**solve**](classsdm_1_1DQNMDP.md#function-solve) (const std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; &, [**horizon**](namespacesdm.md#typedef-horizon), double=0.001, double=1.0) <br> |
|  void | [**to**](classsdm_1_1DQNMDP.md#function-to) (torch::Device) <br> |

## Public Functions inherited from sdm::Algorithm

See [sdm::Algorithm](classsdm_1_1Algorithm.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**solve**](classsdm_1_1Algorithm.md#function-solve) (const std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; &, [**horizon**](namespacesdm.md#typedef-horizon), double=0.001, double=1.0) = 0<br> |
| virtual  | [**~Algorithm**](classsdm_1_1Algorithm.md#function-algorithm) () <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**batch\_size\_**](classsdm_1_1DQNMDP.md#variable-batch-size-)  <br>_The batch size._  |
|  torch::Device | [**device\_**](classsdm_1_1DQNMDP.md#variable-device-)  <br>_The current number of steps done._  |
|  [**EpsGreedy**](structsdm_1_1EpsGreedy.md) | [**eps\_greedy\_**](classsdm_1_1DQNMDP.md#variable-eps-greedy-)  <br>_The eps-greedy exploration process._  |
|  torch::optim::Adam | [**optimizer**](classsdm_1_1DQNMDP.md#variable-optimizer)  <br>_The optimizer._  |
|  DQN | [**policy\_net\_**](classsdm_1_1DQNMDP.md#variable-policy-net-)  <br>_Policy model._  |
|  [**ReplayMemory**](classsdm_1_1ReplayMemory.md) | [**replay\_memory\_**](classsdm_1_1DQNMDP.md#variable-replay-memory-)  <br>_The replay memory._  |
|  [**number**](namespacesdm.md#typedef-number) | [**step\_done\_**](classsdm_1_1DQNMDP.md#variable-step-done-)   = = 0<br>_The current number of steps done._  |
|  DQN | [**target\_net\_**](classsdm_1_1DQNMDP.md#variable-target-net-)  <br>_Target model._  |
|  [**number**](namespacesdm.md#typedef-number) | [**target\_update\_**](classsdm_1_1DQNMDP.md#variable-target-update-)   = = 1<br>_target update frequency_  |

## Protected Attributes inherited from sdm::Algorithm

See [sdm::Algorithm](classsdm_1_1Algorithm.md)

| Type | Name |
| ---: | :--- |
|  double | [**eps\_decay**](classsdm_1_1Algorithm.md#variable-eps-decay)   = = 100000<br> |
|  double | [**eps\_end**](classsdm_1_1Algorithm.md#variable-eps-end)   = = 0.0001<br> |
|  double | [**eps\_start**](classsdm_1_1Algorithm.md#variable-eps-start)   = = 1.0<br> |
|  double | [**epsilon**](classsdm_1_1Algorithm.md#variable-epsilon)  <br> |
|  double | [**rate\_decay**](classsdm_1_1Algorithm.md#variable-rate-decay)   = = 100000<br> |
|  double | [**rate\_end**](classsdm_1_1Algorithm.md#variable-rate-end)   = = 0.0001<br> |
|  double | [**rate\_start**](classsdm_1_1Algorithm.md#variable-rate-start)   = = 1.0<br> |



## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**optimize\_dqn**](classsdm_1_1DQNMDP.md#function-optimize-dqn) (const std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; &, bool=false) <br> |
|  [**action**](namespacesdm.md#typedef-action) | [**select\_action**](classsdm_1_1DQNMDP.md#function-select-action) (const std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; &, [**state**](namespacesdm.md#typedef-state), std::uniform\_int\_distribution&lt; int &gt; &) <br> |




## Public Functions Documentation


### function DQNMDP 


```cpp
sdm::DQNMDP::DQNMDP (
    DQN,
    DQN,
    ReplayMemory,
    EpsGreedy,
    int,
    int,
    torch::Device=torch::kCPU
) 
```



### function solve 


```cpp
virtual void sdm::DQNMDP::solve (
    const std::shared_ptr< POSG > &,
    horizon,
    double=0.001,
    double=1.0
) 
```


Implements [*sdm::Algorithm::solve*](classsdm_1_1Algorithm.md#function-solve)


### function to 


```cpp
void sdm::DQNMDP::to (
    torch::Device
) 
```


## Protected Attributes Documentation


### variable batch\_size\_ 


```cpp
number sdm::DQNMDP::batch_size_;
```



### variable device\_ 


```cpp
torch::Device sdm::DQNMDP::device_;
```



### variable eps\_greedy\_ 


```cpp
EpsGreedy sdm::DQNMDP::eps_greedy_;
```



### variable optimizer 


```cpp
torch::optim::Adam sdm::DQNMDP::optimizer;
```



### variable policy\_net\_ 


```cpp
DQN sdm::DQNMDP::policy_net_;
```



### variable replay\_memory\_ 


```cpp
ReplayMemory sdm::DQNMDP::replay_memory_;
```



### variable step\_done\_ 


```cpp
number sdm::DQNMDP::step_done_;
```



### variable target\_net\_ 


```cpp
DQN sdm::DQNMDP::target_net_;
```



### variable target\_update\_ 


```cpp
number sdm::DQNMDP::target_update_;
```


## Protected Functions Documentation


### function optimize\_dqn 


```cpp
void sdm::DQNMDP::optimize_dqn (
    const std::shared_ptr< POSG > &,
    bool=false
) 
```



### function select\_action 


```cpp
action sdm::DQNMDP::select_action (
    const std::shared_ptr< POSG > &,
    state,
    std::uniform_int_distribution< int > &
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/dqn_mdp.hpp`