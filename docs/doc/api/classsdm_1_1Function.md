
# Class sdm::Function

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput, class TOutput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Function**](classsdm_1_1Function.md)





* `#include <function.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |








## Public Types Documentation


### typedef input\_type 


```cpp
using sdm::Function< TInput, TOutput >::input_type =  TInput;
```



### typedef output\_type 


```cpp
using sdm::Function< TInput, TOutput >::output_type =  TOutput;
```


## Public Functions Documentation


### function operator() 


```cpp
virtual output_type sdm::Function::operator() (
    const input_type &
) = 0
```



### function ~Function 


```cpp
inline virtual sdm::Function::~Function () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/function.hpp`