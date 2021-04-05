
<NavBar active_item_id="2"/>

# File encoder.hpp


[**File List**](files.md) **>** [**parser**](dir_6daa6254ddefc40233dd42d3ed88a5a9.md) **>** [**encoder.hpp**](encoder_8hpp.md)

[Go to the source code of this file.](encoder_8hpp_source.md)



* `#include <sdm/parser/ast.hpp>`
* `#include <sdm/core/space/discrete_space.hpp>`
* `#include <sdm/core/space/multi_discrete_space.hpp>`
* `#include <sdm/world/decpomdp.hpp>`
* `#include <sdm/utils/linear_algebra/vector.hpp>`
* `#include <sdm/utils/linear_algebra/matrix.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |
| namespace | [**ast**](namespacesdm_1_1ast.md) <br> |

## Classes

| Type | Name |
| ---: | :--- |
| struct | [**discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) <br>_encodes the input into a discrete space class_  |
| struct | [**dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md) <br> |
| struct | [**element\_encoder**](structsdm_1_1ast_1_1element__encoder.md) <br>_encodes the input into a number (index)_  |
| struct | [**joint\_element\_encoder**](classsdm_1_1ast_1_1joint__element__encoder.md) <br>_encodes the input into a joint element (vector of number)_  |
| struct | [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) <br>_encodes the input into a matrix_  |
| struct | [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) <br>_encodes the input into a multi discrete space class_  |
| class | [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) <br> |
| struct | [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) <br>_encodes the input into a dynamic class_  |
| struct | [**reward\_encoder**](structsdm_1_1ast_1_1reward__encoder.md) <br> |
| class | [**rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md) <br> |
| class | [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) <br> |
| struct | [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) <br>_encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_  |
| struct | [**state\_transition\_encoder**](structsdm_1_1ast_1_1state__transition__encoder.md) <br>_used to encode state transition dynamics (i.e._ [_**StateDynamics**_](classsdm_1_1StateDynamics.md) _class)_ |
| struct | [**str\_visitor**](structsdm_1_1ast_1_1str__visitor.md) <br> |
| struct | [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) <br>_encodes the input into a vector_  |














------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/encoder.hpp`