
# Class sdm::CSVLogger

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**CSVLogger**](classsdm_1_1CSVLogger.md)



_The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._ 

* `#include <logger.hpp>`



Inherits the following classes: [sdm::FileLogger](classsdm_1_1FileLogger.md)
























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**CSVLogger**](classsdm_1_1CSVLogger.md#function-csvlogger-1-2) (const std::string & filename="out") <br> |
|   | [**CSVLogger**](classsdm_1_1CSVLogger.md#function-csvlogger-2-2) (const std::string & filename, const std::vector&lt; std::string &gt; & col\_names, const std::string & separator=",") <br> |

## Public Functions inherited from sdm::FileLogger

See [sdm::FileLogger](classsdm_1_1FileLogger.md)

| Type | Name |
| ---: | :--- |
|   | [**FileLogger**](classsdm_1_1FileLogger.md#function-filelogger-1-2) () <br> |
|   | [**FileLogger**](classsdm_1_1FileLogger.md#function-filelogger-2-2) (const std::string & filename, const std::string & format="") <br> |
|  void | [**close**](classsdm_1_1FileLogger.md#function-close) () <br>_Close the output file stream._  |

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


### function CSVLogger [1/2]


```cpp
inline sdm::CSVLogger::CSVLogger (
    const std::string & filename="out"
) 
```



### function CSVLogger [2/2]


```cpp
inline sdm::CSVLogger::CSVLogger (
    const std::string & filename,
    const std::vector< std::string > & col_names,
    const std::string & separator=","
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/logging/logger.hpp`