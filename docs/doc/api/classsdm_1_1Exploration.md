
# Class sdm::Exploration

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Exploration**](classsdm_1_1Exploration.md)





* `#include <exploration.hpp>`





Inherited by the following classes: [sdm::EpsGreedy](classsdm_1_1EpsGreedy.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**reset**](classsdm_1_1Exploration.md#function-reset) (unsigned long) = 0<br> |
| virtual void | [**update**](classsdm_1_1Exploration.md#function-update) (unsigned long) = 0<br> |
| virtual  | [**~Exploration**](classsdm_1_1Exploration.md#function-exploration) () <br> |








## Public Functions Documentation


### function reset 


```cpp
virtual void sdm::Exploration::reset (
    unsigned long
) = 0
```



### function update 


```cpp
virtual void sdm::Exploration::update (
    unsigned long
) = 0
```



### function ~Exploration 


```cpp
inline virtual sdm::Exploration::~Exploration () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/rl/exploration.hpp`