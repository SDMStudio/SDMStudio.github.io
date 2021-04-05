
<NavBar active_item_id="2"/>

# Class sdm::FileLogger


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**FileLogger**](classsdm_1_1FileLogger.md)



_The file logger will print logs/data in a file._ 

* `#include <logger.hpp>`



Inherits the following classes: [sdm::Logger](classsdm_1_1Logger.md)


Inherited by the following classes: [sdm::CSVLogger](classsdm_1_1CSVLogger.md)


















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FileLogger**](classsdm_1_1FileLogger.md#function-filelogger-1-2) () <br> |
|   | [**FileLogger**](classsdm_1_1FileLogger.md#function-filelogger-2-2) (const std::string & filename, const std::string & format="") <br> |
|  void | [**close**](classsdm_1_1FileLogger.md#function-close) () <br> |

## Public Functions inherited from sdm::Logger

See [sdm::Logger](classsdm_1_1Logger.md)

| Type | Name |
| ---: | :--- |
|   | [**Logger**](classsdm_1_1Logger.md#function-logger-1-3) () <br> |
|   | [**Logger**](classsdm_1_1Logger.md#function-logger-2-3) (std::ostream \* os, const std::string & format="") <br> |
|   | [**Logger**](classsdm_1_1Logger.md#function-logger-3-3) (std::shared\_ptr&lt; std::ostream &gt; os, const std::string & format="") <br> |
|  void | [**log**](classsdm_1_1Logger.md#function-log) (TData... vals) <br> |
|  void | [**setFormat**](classsdm_1_1Logger.md#function-setformat) (const std::string & format) <br> |

## Public Functions inherited from sdm::BaseLogger

See [sdm::BaseLogger](classsdm_1_1BaseLogger.md)

| Type | Name |
| ---: | :--- |
|  void | [**log**](classsdm_1_1BaseLogger.md#function-log) (TData... vals) <br> |











## Protected Attributes inherited from sdm::Logger

See [sdm::Logger](classsdm_1_1Logger.md)

| Type | Name |
| ---: | :--- |
|  std::string | [**format\_**](classsdm_1_1Logger.md#variable-format-)  <br> |
|  std::shared\_ptr&lt; std::ostream &gt; | [**output\_stream\_**](classsdm_1_1Logger.md#variable-output-stream-)  <br> |











## Public Functions Documentation


### function FileLogger [1/2]


```cpp
inline sdm::FileLogger::FileLogger () 
```



### function FileLogger [2/2]


```cpp
inline sdm::FileLogger::FileLogger (
    const std::string & filename,
    const std::string & format=""
) 
```



### function close 


```cpp
inline void sdm::FileLogger::close () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/logging/logger.hpp`