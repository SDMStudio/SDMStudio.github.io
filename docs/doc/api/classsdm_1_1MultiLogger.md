
# Class sdm::MultiLogger

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MultiLogger**](classsdm_1_1MultiLogger.md)



_The multi logger will print logs in several loggers._ 

* `#include <logger.hpp>`



Inherits the following classes: [sdm::BaseLogger](classsdm_1_1BaseLogger.md),  std::vector< std::shared_ptr< Logger > >
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MultiLogger**](classsdm_1_1MultiLogger.md#function-multilogger-1-2) (const std::vector&lt; std::shared\_ptr&lt; [**Logger**](classsdm_1_1Logger.md) &gt;&gt; & loggers) <br> |
|   | [**MultiLogger**](classsdm_1_1MultiLogger.md#function-multilogger-2-2) (const std::initializer\_list&lt; std::shared\_ptr&lt; [**Logger**](classsdm_1_1Logger.md) &gt;&gt; & loggers) <br> |
|  void | [**log**](classsdm_1_1MultiLogger.md#function-log) (TData... vals) <br>_Record values in each loggers._  |

## Public Functions inherited from sdm::BaseLogger

See [sdm::BaseLogger](classsdm_1_1BaseLogger.md)

| Type | Name |
| ---: | :--- |
|  void | [**log**](classsdm_1_1BaseLogger.md#function-log) (TData... vals) <br>_Record values._  |















## Public Functions Documentation


### function MultiLogger [1/2]


```cpp
inline sdm::MultiLogger::MultiLogger (
    const std::vector< std::shared_ptr< Logger >> & loggers
) 
```



### function MultiLogger [2/2]


```cpp
inline sdm::MultiLogger::MultiLogger (
    const std::initializer_list< std::shared_ptr< Logger >> & loggers
) 
```



### function log 


```cpp
template<class... TData>
inline void sdm::MultiLogger::log (
    TData... vals
) 
```


Go over all sub-loggers and record input values in each of them.



**Template parameters:**


* `TData...` the types of input values 



**Parameters:**


* `vals` the values to log 



        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/logging/logger.hpp`