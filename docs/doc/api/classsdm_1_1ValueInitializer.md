
# Class sdm::ValueInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput class TInput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueInitializer**](classsdm_1_1ValueInitializer.md)



_This initializer initializes a value function to a constant value._ [More...](#detailed-description)

* `#include <initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md),  [sdm::QInitializer](classsdm_1_1QInitializer.md)


Inherited by the following classes: [sdm::ZeroInitializer](classsdm_1_1ZeroInitializer.md)


















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ValueInitializer**](classsdm_1_1ValueInitializer.md#function-valueinitializer) (double v) <br> |
| virtual void | [**init**](classsdm_1_1ValueInitializer.md#function-init-1-2) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |
| virtual void | [**init**](classsdm_1_1ValueInitializer.md#function-init-2-2) (std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; vf) <br> |
|  void | [**initBase**](classsdm_1_1ValueInitializer.md#function-initbase) (std::shared\_ptr&lt; [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md)&lt; TGlobalInput &gt;&gt; vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |

## Public Functions inherited from sdm::QInitializer

See [sdm::QInitializer](classsdm_1_1QInitializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1QInitializer.md#function-init) (std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; vf) = 0<br> |
| virtual  | [**~QInitializer**](classsdm_1_1QInitializer.md#function-qinitializer) () <br> |










## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**value**](classsdm_1_1ValueInitializer.md#variable-value)  <br> |












# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function ValueInitializer 


```cpp
inline sdm::ValueInitializer::ValueInitializer (
    double v
) 
```



### function init [1/2]


```cpp
inline virtual void sdm::ValueInitializer::init (
    std::shared_ptr< ValueFunction > vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


### function init [2/2]


```cpp
inline virtual void sdm::ValueInitializer::init (
    std::shared_ptr< QValueFunction < TInput >> vf
) 
```


Implements [*sdm::QInitializer::init*](classsdm_1_1QInitializer.md#function-init)


### function initBase 


```cpp
template<class TGlobalInput class TGlobalInput>
inline void sdm::ValueInitializer::initBase (
    std::shared_ptr< BaseValueFunction < TGlobalInput >> vf
) 
```


## Protected Attributes Documentation


### variable value 


```cpp
double sdm::ValueInitializer< TInput >::value;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`