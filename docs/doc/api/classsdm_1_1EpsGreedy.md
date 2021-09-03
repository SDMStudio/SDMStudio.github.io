
# Class sdm::EpsGreedy

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**EpsGreedy**](classsdm_1_1EpsGreedy.md)





* `#include <exploration.hpp>`



Inherits the following classes: [sdm::Exploration](classsdm_1_1Exploration.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**EpsGreedy**](classsdm_1_1EpsGreedy.md#function-epsgreedy) (double eps\_deb=1.0, double eps\_fin=0.1, double deb\_expl=0.1, double fin\_expl=0.9) <br> |
|  double | [**getEpsilon**](classsdm_1_1EpsGreedy.md#function-getepsilon) () <br> |
| virtual void | [**reset**](classsdm_1_1EpsGreedy.md#function-reset) (unsigned long nb\_timesteps) <br> |
| virtual void | [**update**](classsdm_1_1EpsGreedy.md#function-update) (unsigned long t) <br> |

## Public Functions inherited from sdm::Exploration

See [sdm::Exploration](classsdm_1_1Exploration.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**reset**](classsdm_1_1Exploration.md#function-reset) (unsigned long) = 0<br> |
| virtual void | [**update**](classsdm_1_1Exploration.md#function-update) (unsigned long) = 0<br> |
| virtual  | [**~Exploration**](classsdm_1_1Exploration.md#function-exploration) () <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**deb\_expl\_**](classsdm_1_1EpsGreedy.md#variable-deb-expl-)  <br> |
|  double | [**eps\_**](classsdm_1_1EpsGreedy.md#variable-eps-)  <br> |
|  double | [**eps\_deb\_**](classsdm_1_1EpsGreedy.md#variable-eps-deb-)  <br> |
|  double | [**eps\_fin\_**](classsdm_1_1EpsGreedy.md#variable-eps-fin-)  <br> |
|  double | [**fin\_expl\_**](classsdm_1_1EpsGreedy.md#variable-fin-expl-)  <br> |
|  unsigned long | [**final\_expl\_step**](classsdm_1_1EpsGreedy.md#variable-final-expl-step)  <br> |
|  unsigned long | [**init\_expl\_step**](classsdm_1_1EpsGreedy.md#variable-init-expl-step)  <br> |








## Public Functions Documentation


### function EpsGreedy 


```cpp
inline sdm::EpsGreedy::EpsGreedy (
    double eps_deb=1.0,
    double eps_fin=0.1,
    double deb_expl=0.1,
    double fin_expl=0.9
) 
```



### function getEpsilon 


```cpp
inline double sdm::EpsGreedy::getEpsilon () 
```



### function reset 


```cpp
inline virtual void sdm::EpsGreedy::reset (
    unsigned long nb_timesteps
) 
```


Implements [*sdm::Exploration::reset*](classsdm_1_1Exploration.md#function-reset)


### function update 


```cpp
inline virtual void sdm::EpsGreedy::update (
    unsigned long t
) 
```


Implements [*sdm::Exploration::update*](classsdm_1_1Exploration.md#function-update)

## Protected Attributes Documentation


### variable deb\_expl\_ 


```cpp
double sdm::EpsGreedy::deb_expl_;
```



### variable eps\_ 


```cpp
double sdm::EpsGreedy::eps_;
```



### variable eps\_deb\_ 


```cpp
double sdm::EpsGreedy::eps_deb_;
```



### variable eps\_fin\_ 


```cpp
double sdm::EpsGreedy::eps_fin_;
```



### variable fin\_expl\_ 


```cpp
double sdm::EpsGreedy::fin_expl_;
```



### variable final\_expl\_step 


```cpp
unsigned long sdm::EpsGreedy::final_expl_step;
```



### variable init\_expl\_step 


```cpp
unsigned long sdm::EpsGreedy::init_expl_step;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/rl/exploration.hpp`