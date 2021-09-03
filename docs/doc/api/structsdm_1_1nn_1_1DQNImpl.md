
# Struct sdm::nn::DQNImpl

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**nn**](namespacesdm_1_1nn.md) **>** [**DQNImpl**](structsdm_1_1nn_1_1DQNImpl.md)





* `#include <mlpnet.hpp>`



Inherits the following classes: Module










## Public Attributes

| Type | Name |
| ---: | :--- |
|  torch::nn::Linear | [**fc1**](structsdm_1_1nn_1_1DQNImpl.md#variable-fc1)  <br> |
|  torch::nn::Linear | [**fc2**](structsdm_1_1nn_1_1DQNImpl.md#variable-fc2)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DQNImpl**](structsdm_1_1nn_1_1DQNImpl.md#function-dqnimpl) ([**sdm::number**](namespacesdm.md#typedef-number) num\_states, [**sdm::number**](namespacesdm.md#typedef-number) num\_actions) <br> |
|  torch::Tensor | [**forward**](structsdm_1_1nn_1_1DQNImpl.md#function-forward) (torch::Tensor x) <br> |








## Public Attributes Documentation


### variable fc1 


```cpp
torch::nn::Linear sdm::nn::DQNImpl::fc1;
```



### variable fc2 


```cpp
torch::nn::Linear sdm::nn::DQNImpl::fc2;
```


## Public Functions Documentation


### function DQNImpl 


```cpp
inline sdm::nn::DQNImpl::DQNImpl (
    sdm::number num_states,
    sdm::number num_actions
) 
```



### function forward 


```cpp
inline torch::Tensor sdm::nn::DQNImpl::forward (
    torch::Tensor x
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/nn/mlpnet.hpp`