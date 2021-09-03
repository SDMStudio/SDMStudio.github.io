
# Namespace sdm::common

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**common**](namespacesdm_1_1common.md)



_Namespace grouping all common functions to the whole project._ 
















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::string | [**getAgentActionState**](namespacesdm_1_1common.md#function-getagentactionstate) ([**number**](namespacesdm.md#typedef-number) agent\_id, [**number**](namespacesdm.md#typedef-number) action, [**number**](namespacesdm.md#typedef-number) state) <br> |
|  std::string | [**getState**](namespacesdm_1_1common.md#function-getstate) ([**number**](namespacesdm.md#typedef-number) state) <br> |
|  std::default\_random\_engine & | [**global\_urng**](namespacesdm_1_1common.md#function-global-urng) () <br>_Get the random engine._  |
|  void | [**logo**](namespacesdm_1_1common.md#function-logo) () <br>_Display the logo of SDM'Studio._  |








## Public Functions Documentation


### function getAgentActionState 


```cpp
std::string sdm::common::getAgentActionState (
    number agent_id,
    number action,
    number state
) 
```



### function getState 


```cpp
std::string sdm::common::getState (
    number state
) 
```



### function global\_urng 


```cpp
std::default_random_engine & sdm::common::global_urng () 
```



### function logo 


```cpp
void sdm::common::logo () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/common.hpp`