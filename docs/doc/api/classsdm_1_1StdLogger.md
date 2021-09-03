
# Class sdm::StdLogger

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StdLogger**](classsdm_1_1StdLogger.md)



_The standard logger will print logs on the standard output stream._ 

* `#include <logger.hpp>`



Inherits the following classes: [sdm::Logger](classsdm_1_1Logger.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StdLogger**](classsdm_1_1StdLogger.md#function-stdlogger) (const std::string & format="Not initialized formatter.") <br> |

## Public Functions inherited from sdm::Logger

See [sdm::Logger](classsdm_1_1Logger.md)

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











## Protected Attributes inherited from sdm::Logger

See [sdm::Logger](classsdm_1_1Logger.md)

| Type | Name |
| ---: | :--- |
|  std::string | [**format\_**](classsdm_1_1Logger.md#variable-format-)  <br>_the output format_  |
|  std::shared\_ptr&lt; std::ostream &gt; | [**output\_stream\_**](classsdm_1_1Logger.md#variable-output-stream-)  <br>_the output stream for logs._  |











## Public Functions Documentation


### function StdLogger 


```cpp
inline sdm::StdLogger::StdLogger (
    const std::string & format="Not initialized formatter."
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/logging/logger.hpp`