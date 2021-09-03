
# Class sdm::BaseRelaxedValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseRelaxedValueFunction**](classsdm_1_1BaseRelaxedValueFunction.md)





* `#include <function.hpp>`



Inherits the following classes: [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)


Inherited by the following classes: [sdm::RelaxedValueFunction](classsdm_1_1RelaxedValueFunction.md)







## Public Types inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

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
| virtual bool | [**isMdpAvailable**](classsdm_1_1BaseRelaxedValueFunction.md#function-ismdpavailable) () = 0<br> |
| virtual bool | [**isPomdpAvailable**](classsdm_1_1BaseRelaxedValueFunction.md#function-ispomdpavailable) () = 0<br> |
| virtual double | [**operator()**](classsdm_1_1BaseRelaxedValueFunction.md#function-operator()) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) = 0<br> |
| virtual  | [**~BaseRelaxedValueFunction**](classsdm_1_1BaseRelaxedValueFunction.md#function-baserelaxedvaluefunction) () <br> |

## Public Functions inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

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






















## Public Functions Documentation


### function isMdpAvailable 


```cpp
virtual bool sdm::BaseRelaxedValueFunction::isMdpAvailable () = 0
```



### function isPomdpAvailable 


```cpp
virtual bool sdm::BaseRelaxedValueFunction::isPomdpAvailable () = 0
```



### function operator() 


```cpp
virtual double sdm::BaseRelaxedValueFunction::operator() (
    const std::shared_ptr< State > & ostate,
    const number & tau
) = 0
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function ~BaseRelaxedValueFunction 


```cpp
inline virtual sdm::BaseRelaxedValueFunction::~BaseRelaxedValueFunction () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/function.hpp`