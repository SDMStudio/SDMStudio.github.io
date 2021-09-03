
# Class sdm::BaseLogger

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseLogger**](classsdm_1_1BaseLogger.md)



_This class provide a common interface for all loggers._ 

* `#include <logger.hpp>`





Inherited by the following classes: [sdm::Logger](classsdm_1_1Logger.md),  [sdm::MultiLogger](classsdm_1_1MultiLogger.md)










## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**log**](classsdm_1_1BaseLogger.md#function-log) (TData... vals) <br>_Record values._  |








## Public Functions Documentation


### function log 


```cpp
template<class... TData>
void sdm::BaseLogger::log (
    TData... vals
) 
```




**Template parameters:**


* `TData...` the types of input values 



**Parameters:**


* `vals` the values to log 



        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/logging/logger.hpp`