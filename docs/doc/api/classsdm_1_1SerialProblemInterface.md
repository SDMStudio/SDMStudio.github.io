
# Class sdm::SerialProblemInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerialProblemInterface**](classsdm_1_1SerialProblemInterface.md)





* `#include <mmdp_interface.hpp>`





Inherited by the following classes: [sdm::SerialMMDPInterface](classsdm_1_1SerialMMDPInterface.md),  [sdm::SerialOccupancyMDP](classsdm_1_1SerialOccupancyMDP.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getAgentId**](classsdm_1_1SerialProblemInterface.md#function-getagentid) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the identifier of the current agent._  |
| virtual bool | [**isLastAgent**](classsdm_1_1SerialProblemInterface.md#function-islastagent) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br> |








## Public Functions Documentation


### function getAgentId 


```cpp
virtual number sdm::SerialProblemInterface::getAgentId (
    number t
) const = 0
```




**Parameters:**


* `t` the timestep 



**Returns:**

number the agent id 




        

### function isLastAgent 


```cpp
virtual bool sdm::SerialProblemInterface::isLastAgent (
    number t
) const = 0
```




**Parameters:**


* `t` 



**Returns:**

true 




**Returns:**

false 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/world/base/mmdp_interface.hpp`