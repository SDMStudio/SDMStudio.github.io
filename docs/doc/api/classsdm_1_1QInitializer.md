
# Class sdm::QInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput class TInput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**QInitializer**](classsdm_1_1QInitializer.md)



_Abstract class for initializer._ [More...](#detailed-description)

* `#include <initializer.hpp>`





Inherited by the following classes: [sdm::ValueInitializer](classsdm_1_1ValueInitializer.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1QInitializer.md#function-init) (std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; vf) = 0<br> |
| virtual  | [**~QInitializer**](classsdm_1_1QInitializer.md#function-qinitializer) () <br> |








# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Functions Documentation


### function init 


```cpp
virtual void sdm::QInitializer::init (
    std::shared_ptr< QValueFunction < TInput >> vf
) = 0
```



### function ~QInitializer 


```cpp
inline virtual sdm::QInitializer::~QInitializer () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`