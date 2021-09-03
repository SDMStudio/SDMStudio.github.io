
# Class sdm::POMDPInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md)



_The_ [_**POMDP**_](classsdm_1_1POMDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**POMDP**_](classsdm_1_1POMDP.md) _optimal value function._[More...](#detailed-description)

* `#include <pomdp_initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)












## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**algo\_name\_**](classsdm_1_1POMDPInitializer.md#variable-algo-name-)  <br> |
|  double | [**error\_**](classsdm_1_1POMDPInitializer.md#variable-error-)  <br> |
|  double | [**trials\_**](classsdm_1_1POMDPInitializer.md#variable-trials-)  <br> |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1POMDPInitializer.md#variable-world-)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md#function-pomdpinitializer) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world, std::string algo\_name, double error=0.01, int trials=10000) <br> |
| virtual void | [**init**](classsdm_1_1POMDPInitializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |

## Public Functions inherited from sdm::Initializer

See [sdm::Initializer](classsdm_1_1Initializer.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**init**](classsdm_1_1Initializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) = 0<br> |
| virtual  | [**~Initializer**](classsdm_1_1Initializer.md#function-initializer) () <br> |















# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



**Parameters:**


* `algo_name` the algorithm that will be used to solve the underlying [**POMDP**](classsdm_1_1POMDP.md). 
* `error` the maximal error 
* `trials` the maximal number of trials 



    
## Public Attributes Documentation


### variable algo\_name\_ 


```cpp
std::string sdm::POMDPInitializer::algo_name_;
```



### variable error\_ 


```cpp
double sdm::POMDPInitializer::error_;
```



### variable trials\_ 


```cpp
double sdm::POMDPInitializer::trials_;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::POMDPInitializer::world_;
```


## Public Functions Documentation


### function POMDPInitializer 


```cpp
sdm::POMDPInitializer::POMDPInitializer (
    std::shared_ptr< SolvableByHSVI > world,
    std::string algo_name,
    double error=0.01,
    int trials=10000
) 
```



### function init 


```cpp
virtual void sdm::POMDPInitializer::init (
    std::shared_ptr< ValueFunction > vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/pomdp_initializer.hpp`