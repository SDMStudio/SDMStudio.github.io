
# Class sdm::IncrementalValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TState typename TState, typename TAction typename TAction, typename TValueFunction typename TValueFunction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md)



[More...](#detailed-description)

* `#include <incremental_value_function.hpp>`



Inherits the following classes: TValueFunction< TState, TAction, TValue >












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md#function-incrementalvaluefunction) (std::shared\_ptr&lt; POSG &gt; problem) <br>_The problem which incremental value function is evaluated._  |
|  std::shared\_ptr&lt; POSG &gt; | [**getWorld**](classsdm_1_1IncrementalValueFunction.md#function-getworld) () <br> |
|  void | [**updateValueAt**](classsdm_1_1IncrementalValueFunction.md#function-updatevalueat) (const TState & s, int t=0) <br> |








# Detailed Description




**Template parameters:**


* `TState` 
* `TAction` 



    
## Public Functions Documentation


### function IncrementalValueFunction 


```cpp
sdm::IncrementalValueFunction::IncrementalValueFunction (
    std::shared_ptr< POSG > problem
) 
```


Construct a new Incremental Value [**Function**](classsdm_1_1Function.md) object



**Parameters:**


* `problem` 
* `default_value` 



        

### function getWorld 


```cpp
std::shared_ptr< POSG > sdm::IncrementalValueFunction::getWorld () 
```



### function updateValueAt 


```cpp
inline void sdm::IncrementalValueFunction::updateValueAt (
    const TState & s,
    int t=0
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/incremental_value_function.hpp`