
# File dynamics\_encoders.hpp

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**File List**](files.md) **>** [**encoders**](dir_26a62d7ea2bd3315be1d2a3057f158c4.md) **>** [**dynamics\_encoders.hpp**](dynamics__encoders_8hpp.md)

[Go to the source code of this file.](dynamics__encoders_8hpp_source.md)



* `#include <sdm/parser/ast.hpp>`
* `#include <sdm/core/item.hpp>`
* `#include <sdm/core/space/discrete_space.hpp>`
* `#include <sdm/core/space/multi_discrete_space.hpp>`
* `#include <sdm/core/dynamics/tabular_state_dynamics.hpp>`
* `#include <sdm/core/dynamics/tabular_observation_dynamics_AS.hpp>`
* `#include <sdm/parser/encoders/item_encoders.hpp>`
* `#include <sdm/parser/encoders/struct_encoders.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |
| namespace | [**ast**](namespacesdm_1_1ast.md) <br>_Namespace that is used by the parser._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) <br> |
| struct | [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) <br>_encodes the input into an observation dynamic class_  |
| class | [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) <br>_encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_ |
| class | [**state\_transition\_encoder**](classsdm_1_1ast_1_1state__transition__encoder.md) <br>_encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_ |














------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoders/dynamics_encoders.hpp`