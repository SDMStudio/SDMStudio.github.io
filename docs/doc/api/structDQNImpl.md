
<NavBar active_item_id="2"/>

# Struct DQNImpl


[**Class List**](annotated.md) **>** [**DQNImpl**](structDQNImpl.md)





* `#include <mlpnet.hpp>`



Inherits the following classes: Module










## Public Attributes

| Type | Name |
| ---: | :--- |
|  torch::nn::Linear | [**fc1**](structDQNImpl.md#variable-fc1)  <br> |
|  torch::nn::Linear | [**fc2**](structDQNImpl.md#variable-fc2)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DQNImpl**](structDQNImpl.md#function-dqnimpl) ([**sdm::number**](namespacesdm.md#typedef-number) num\_states, [**sdm::number**](namespacesdm.md#typedef-number) num\_actions) <br> |
|  torch::Tensor | [**forward**](structDQNImpl.md#function-forward) (torch::Tensor x) <br> |








## Public Attributes Documentation


### variable fc1 


```cpp
torch::nn::Linear DQNImpl::fc1;
```



### variable fc2 


```cpp
torch::nn::Linear DQNImpl::fc2;
```


## Public Functions Documentation


### function DQNImpl 


```cpp
inline DQNImpl::DQNImpl (
    sdm::number num_states,
    sdm::number num_actions
) 
```



### function forward 


```cpp
inline torch::Tensor DQNImpl::forward (
    torch::Tensor x
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/nn/mlpnet.hpp`