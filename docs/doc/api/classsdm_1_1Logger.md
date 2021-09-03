
# Class sdm::Logger

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Logger**](classsdm_1_1Logger.md)



_The main logger. This logger will print logs with a given format on the output stream._ 

* `#include <logger.hpp>`



Inherits the following classes: [sdm::BaseLogger](classsdm_1_1BaseLogger.md)


Inherited by the following classes: [sdm::FileLogger](classsdm_1_1FileLogger.md),  [sdm::StdLogger](classsdm_1_1StdLogger.md)














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Logger**](classsdm_1_1Logger.md#function-logger-1-3) () <br> |
|   | [**Logger**](classsdm_1_1Logger.md#function-logger-2-3) (std::ostream \* os, const std::string & format="") <br> |
|   | [**Logger**](classsdm_1_1Logger.md#function-logger-3-3) (std::shared\_ptr&lt; std::ostream &gt; os, const std::string & format="") <br> |
|  void | [**log**](classsdm_1_1Logger.md#function-log) (TData... vals) <br>_Record values._  |
|  void | [**setFormat**](classsdm_1_1Logger.md#function-setformat) (const std::string & format) <br>[_**Set**_](structsdm_1_1Set.md) _the format of logs._ |

## Public Functions inherited from sdm::BaseLogger

See [sdm::BaseLogger](classsdm_1_1BaseLogger.md)

| Type | Name |
| ---: | :--- |
|  void | [**log**](classsdm_1_1BaseLogger.md#function-log) (TData... vals) <br>_Record values._  |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**format\_**](classsdm_1_1Logger.md#variable-format-)  <br>_the output format_  |
|  std::shared\_ptr&lt; std::ostream &gt; | [**output\_stream\_**](classsdm_1_1Logger.md#variable-output-stream-)  <br>_the output stream for logs._  |








## Public Functions Documentation


### function Logger [1/3]


```cpp
inline sdm::Logger::Logger () 
```



### function Logger [2/3]


```cpp
inline sdm::Logger::Logger (
    std::ostream * os,
    const std::string & format=""
) 
```



### function Logger [3/3]


```cpp
inline sdm::Logger::Logger (
    std::shared_ptr< std::ostream > os,
    const std::string & format=""
) 
```



### function log 


```cpp
template<class... TData>
inline void sdm::Logger::log (
    TData... vals
) 
```




**Template parameters:**


* `TData...` the types of input values 



**Parameters:**


* `vals` the values to log 



        

### function setFormat 


```cpp
inline void sdm::Logger::setFormat (
    const std::string & format
) 
```


Use `{}` each time a value must be added.

Example:


````cpp
Logger logger;
logger.setFormat("#> Here, I print my results : result1={}, result2={}");
````





**Parameters:**


* `format` the format as a string. 



        
## Protected Attributes Documentation


### variable format\_ 


```cpp
std::string sdm::Logger::format_;
```



### variable output\_stream\_ 


```cpp
std::shared_ptr<std::ostream> sdm::Logger::output_stream_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/logging/logger.hpp`