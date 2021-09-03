
# File logger.hpp

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**File List**](files.md) **>** [**logging**](dir_a755706b7eb45c402113f86d3477d08c.md) **>** [**logger.hpp**](logger_8hpp.md)

[Go to the source code of this file.](logger_8hpp_source.md)



* `#include <iostream>`
* `#include <locale>`
* `#include <fmt/format.h>`
* `#include <sdm/tools.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**BaseLogger**](classsdm_1_1BaseLogger.md) <br>_This class provide a common interface for all loggers._  |
| class | [**CSVLogger**](classsdm_1_1CSVLogger.md) <br>_The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._  |
| class | [**FileLogger**](classsdm_1_1FileLogger.md) <br>_The file logger will print logs/data in a file._  |
| class | [**Logger**](classsdm_1_1Logger.md) <br>_The main logger. This logger will print logs with a given format on the output stream._  |
| class | [**MultiLogger**](classsdm_1_1MultiLogger.md) <br>_The multi logger will print logs in several loggers._  |
| class | [**StdLogger**](classsdm_1_1StdLogger.md) <br>_The standard logger will print logs on the standard output stream._  |














------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/logging/logger.hpp`