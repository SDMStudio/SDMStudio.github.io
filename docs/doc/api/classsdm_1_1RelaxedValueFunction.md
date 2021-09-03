
# Class sdm::RelaxedValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**RelaxedValueFunction**](classsdm_1_1RelaxedValueFunction.md)





* `#include <function.hpp>`



Inherits the following classes: [sdm::BaseRelaxedValueFunction](classsdm_1_1BaseRelaxedValueFunction.md)


Inherited by the following classes: [sdm::Belief2OccupancyValueFunction](classsdm_1_1Belief2OccupancyValueFunction.md),  [sdm::State2OccupancyValueFunction](classsdm_1_1State2OccupancyValueFunction.md)








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
| virtual std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getRelaxation**](classsdm_1_1RelaxedValueFunction.md#function-getrelaxation) () = 0<br> |
| virtual bool | [**isMdpAvailable**](classsdm_1_1RelaxedValueFunction.md#function-ismdpavailable) () = 0<br> |
| virtual bool | [**isPomdpAvailable**](classsdm_1_1RelaxedValueFunction.md#function-ispomdpavailable) () = 0<br> |
| virtual double | [**operator()**](classsdm_1_1RelaxedValueFunction.md#function-operator()-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) = 0<br> |
| virtual double | [**operator()**](classsdm_1_1RelaxedValueFunction.md#function-operator()-2-2) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt;&gt; & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) = 0<br> |
| virtual  | [**~RelaxedValueFunction**](classsdm_1_1RelaxedValueFunction.md#function-relaxedvaluefunction) () <br> |

## Public Functions inherited from sdm::BaseRelaxedValueFunction

See [sdm::BaseRelaxedValueFunction](classsdm_1_1BaseRelaxedValueFunction.md)

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


### function getRelaxation 


```cpp
virtual std::shared_ptr< ValueFunction > sdm::RelaxedValueFunction::getRelaxation () = 0
```



### function isMdpAvailable 


```cpp
virtual bool sdm::RelaxedValueFunction::isMdpAvailable () = 0
```


Implements [*sdm::BaseRelaxedValueFunction::isMdpAvailable*](classsdm_1_1BaseRelaxedValueFunction.md#function-ismdpavailable)


### function isPomdpAvailable 


```cpp
virtual bool sdm::RelaxedValueFunction::isPomdpAvailable () = 0
```


Implements [*sdm::BaseRelaxedValueFunction::isPomdpAvailable*](classsdm_1_1BaseRelaxedValueFunction.md#function-ispomdpavailable)


### function operator() [1/2]


```cpp
virtual double sdm::RelaxedValueFunction::operator() (
    const std::shared_ptr< State > & ostate,
    const number & tau
) = 0
```


Implements [*sdm::BaseRelaxedValueFunction::operator()*](classsdm_1_1BaseRelaxedValueFunction.md#function-operator())


### function operator() [2/2]


```cpp
virtual double sdm::RelaxedValueFunction::operator() (
    const Pair < std::shared_ptr< State >, std::shared_ptr< Action >> & ostate,
    const number & tau
) = 0
```



### function ~RelaxedValueFunction 


```cpp
inline virtual sdm::RelaxedValueFunction::~RelaxedValueFunction () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/function.hpp`