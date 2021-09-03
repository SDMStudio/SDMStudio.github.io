
# File value\_function.hpp

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**value\_function.hpp**](value__function_8hpp.md)

[Go to the source code of this file.](value__function_8hpp_source.md)

_Defines the value function interface._ [More...](#detailed-description)

* `#include <sdm/types.hpp>`
* `#include <sdm/core/function.hpp>`
* `#include <sdm/utils/value_function/base_value_function.hpp>`
* `#include <sdm/utils/value_function/action_vf/action_vf_interface.hpp>`
* `#include <sdm/utils/value_function/backup/backup_interface.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**ValueFunction**](classsdm_1_1ValueFunction.md) <br>_This class is the abstract class of value function. All value function must derived this class._  |












## Macros

| Type | Name |
| ---: | :--- |
| define  | [**LOGTIME**](value__function_8hpp.md#define-logtime)  <br> |

# Detailed Description


Defines the Tabular Qvalue function conditioning interface.

Defines the Qvalue function conditioning interface.



**Author:**

David Albert ([david.albert@insa-lyon.fr](mailto:david.albert@insa-lyon.fr)) 




**Version:**

0.1 




**Date:**

16/12/2020




**Copyright:**

Copyright (c) 2020




**Author:**

Jérôme ARJONILLA 




**Version:**

0.1 




**Date:**

17/08/2021




**Copyright:**

Copyright (c) 2021 




    
## Macro Definition Documentation



### define LOGTIME 


```cpp
#define LOGTIME 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/value_function.hpp`