
<NavBar active_item_id="2"/>

# Class sdm::MultiLogger


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MultiLogger**](classsdm_1_1MultiLogger.md)



_The multi logger will print logs from several loggers._ 

* `#include <logger.hpp>`



Inherits the following classes: [sdm::BaseLogger](classsdm_1_1BaseLogger.md),  std::vector< std::shared_ptr< Logger > >
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MultiLogger**](classsdm_1_1MultiLogger.md#function-multilogger-1-2) (const std::vector&lt; std::shared\_ptr&lt; [**Logger**](classsdm_1_1Logger.md) &gt;&gt; & loggers) <br> |
|   | [**MultiLogger**](classsdm_1_1MultiLogger.md#function-multilogger-2-2) (const std::initializer\_list&lt; std::shared\_ptr&lt; [**Logger**](classsdm_1_1Logger.md) &gt;&gt; & loggers) <br> |
|  void | [**log**](classsdm_1_1MultiLogger.md#function-log) (TData... vals) <br> |

## Public Functions inherited from sdm::BaseLogger

See [sdm::BaseLogger](classsdm_1_1BaseLogger.md)

| Type | Name |
| ---: | :--- |
|  void | [**log**](classsdm_1_1BaseLogger.md#function-log) (TData... vals) <br> |















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



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/logging/logger.hpp`