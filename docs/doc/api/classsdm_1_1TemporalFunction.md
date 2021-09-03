
# Class sdm::TemporalFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TFunction typename TFunction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TemporalFunction**](classsdm_1_1TemporalFunction.md)





* `#include <temporal_function.hpp>`



Inherits the following classes: [sdm::Function](classsdm_1_1Function.md)









## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TemporalFunction**](classsdm_1_1TemporalFunction.md#function-temporalfunction) (const [**number**](namespacesdm.md#typedef-number) horizon=0) <br> |
|  TFunction && | [**getFunction**](classsdm_1_1TemporalFunction.md#function-getfunction) (const [**number**](namespacesdm.md#typedef-number) & t) const<br> |
| virtual const TFunction & | [**operator()**](classsdm_1_1TemporalFunction.md#function-operator()) (const [**number**](namespacesdm.md#typedef-number) & t) <br> |
|  void | [**setFunction**](classsdm_1_1TemporalFunction.md#function-setfunction) (const TFunction & function, [**number**](namespacesdm.md#typedef-number) t) const<br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1TemporalFunction.md#variable-horizon-)  <br> |
|  std::vector&lt; TFunction &gt; | [**temporal\_function\_**](classsdm_1_1TemporalFunction.md#variable-temporal-function-)  <br> |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**getIndex**](classsdm_1_1TemporalFunction.md#function-getindex) ([**number**](namespacesdm.md#typedef-number) t) const<br> |




## Public Functions Documentation


### function TemporalFunction 


```cpp
sdm::TemporalFunction::TemporalFunction (
    const number horizon=0
) 
```



### function getFunction 


```cpp
TFunction && sdm::TemporalFunction::getFunction (
    const number & t
) const
```



### function operator() 


```cpp
virtual const TFunction & sdm::TemporalFunction::operator() (
    const number & t
) 
```


Implements [*sdm::Function::operator()*](classsdm_1_1Function.md#function-operator())


### function setFunction 


```cpp
void sdm::TemporalFunction::setFunction (
    const TFunction & function,
    number t
) const
```


## Protected Attributes Documentation


### variable horizon\_ 


```cpp
number sdm::TemporalFunction< TFunction >::horizon_;
```



### variable temporal\_function\_ 


```cpp
std::vector<TFunction> sdm::TemporalFunction< TFunction >::temporal_function_;
```


## Protected Functions Documentation


### function getIndex 


```cpp
number sdm::TemporalFunction::getIndex (
    number t
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/temporal_function.hpp`