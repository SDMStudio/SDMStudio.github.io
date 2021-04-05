
<NavBar active_item_id="2"/>

# Class sdm::Function

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
|  TOutput | [**operator()**](classsdm_1_1Function.md#function-operator()) (const TInput &) <br> |








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
TOutput sdm::Function::operator() (
    const TInput &
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/function.hpp`