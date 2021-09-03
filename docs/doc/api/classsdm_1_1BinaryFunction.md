
# Class sdm::BinaryFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput1, class TInput2, class TOutput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BinaryFunction**](classsdm_1_1BinaryFunction.md)





* `#include <function.hpp>`



Inherits the following classes: [sdm::Function](classsdm_1_1Function.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::pair&lt; TInput1, TInput2 &gt; | [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-1-2) (const TInput1 &, const TInput2 &) = 0<br> |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-2-2) (const [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type) & p\_input) <br> |
| virtual  | [**~BinaryFunction**](classsdm_1_1BinaryFunction.md#function-binaryfunction) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |















## Public Types Documentation


### typedef input\_type 


```cpp
using sdm::BinaryFunction< TInput1, TInput2, TOutput >::input_type =  std::pair<TInput1, TInput2>;
```



### typedef output\_type 


```cpp
using sdm::BinaryFunction< TInput1, TInput2, TOutput >::output_type =  TOutput;
```


## Public Functions Documentation


### function operator() [1/2]


```cpp
virtual output_type sdm::BinaryFunction::operator() (
    const TInput1 &,
    const TInput2 &
) = 0
```



### function operator() [2/2]


```cpp
inline virtual output_type sdm::BinaryFunction::operator() (
    const input_type & p_input
) 
```


Implements [*sdm::Function::operator()*](classsdm_1_1Function.md#function-operator())


### function ~BinaryFunction 


```cpp
inline virtual sdm::BinaryFunction::~BinaryFunction () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/function.hpp`