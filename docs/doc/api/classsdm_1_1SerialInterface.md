
# Class sdm::SerialInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerialInterface**](classsdm_1_1SerialInterface.md)



_A common interface for objects that are serialized._ 

* `#include <serial_interface.hpp>`





Inherited by the following classes: [sdm::BaseSerialInterface](classsdm_1_1BaseSerialInterface.md),  [sdm::SerialOccupancyInterface](classsdm_1_1SerialOccupancyInterface.md),  [sdm::SerialOccupancyState](classsdm_1_1SerialOccupancyState.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerialInterface.md#function-getcurrentagentid) () const = 0<br>_Get the current Agent Id of the object._  |








## Public Functions Documentation


### function getCurrentAgentId 


```cpp
virtual number sdm::SerialInterface::getCurrentAgentId () const = 0
```




**Returns:**

number the current agent id 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/interface/serial_interface.hpp`