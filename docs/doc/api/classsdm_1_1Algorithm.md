
<NavBar active_item_id="2"/>

# Class sdm::Algorithm


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Algorithm**](classsdm_1_1Algorithm.md)





* `#include <algorithm.hpp>`





Inherited by the following classes: [sdm::DQNMDP](classsdm_1_1DQNMDP.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**solve**](classsdm_1_1Algorithm.md#function-solve) (const std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; &, [**horizon**](namespacesdm.md#typedef-horizon), double=0.001, double=1.0) = 0<br> |
| virtual  | [**~Algorithm**](classsdm_1_1Algorithm.md#function-algorithm) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**eps\_decay**](classsdm_1_1Algorithm.md#variable-eps-decay)   = = 100000<br> |
|  double | [**eps\_end**](classsdm_1_1Algorithm.md#variable-eps-end)   = = 0.0001<br> |
|  double | [**eps\_start**](classsdm_1_1Algorithm.md#variable-eps-start)   = = 1.0<br> |
|  double | [**epsilon**](classsdm_1_1Algorithm.md#variable-epsilon)  <br> |
|  double | [**rate\_decay**](classsdm_1_1Algorithm.md#variable-rate-decay)   = = 100000<br> |
|  double | [**rate\_end**](classsdm_1_1Algorithm.md#variable-rate-end)   = = 0.0001<br> |
|  double | [**rate\_start**](classsdm_1_1Algorithm.md#variable-rate-start)   = = 1.0<br> |




## Public Functions Documentation


### function solve 


```cpp
virtual void sdm::Algorithm::solve (
    const std::shared_ptr< POSG > &,
    horizon,
    double=0.001,
    double=1.0
) = 0
```



### function ~Algorithm 


```cpp
virtual sdm::Algorithm::~Algorithm () 
```


## Protected Attributes Documentation


### variable eps\_decay 


```cpp
double sdm::Algorithm::eps_decay;
```



### variable eps\_end 


```cpp
double sdm::Algorithm::eps_end;
```



### variable eps\_start 


```cpp
double sdm::Algorithm::eps_start;
```



### variable epsilon 


```cpp
double sdm::Algorithm::epsilon;
```



### variable rate\_decay 


```cpp
double sdm::Algorithm::rate_decay;
```



### variable rate\_end 


```cpp
double sdm::Algorithm::rate_end;
```



### variable rate\_start 


```cpp
double sdm::Algorithm::rate_start;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/public/algorithm.hpp`