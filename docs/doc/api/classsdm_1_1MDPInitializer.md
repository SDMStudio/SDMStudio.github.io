
# Class sdm::MDPInitializer

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MDPInitializer**](classsdm_1_1MDPInitializer.md)



_The_ [_**MDP**_](classsdm_1_1MDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**MDP**_](classsdm_1_1MDP.md) _optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._[More...](#detailed-description)

* `#include <mdp_initializer.hpp>`



Inherits the following classes: [sdm::Initializer](classsdm_1_1Initializer.md)












## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**algo\_name\_**](classsdm_1_1MDPInitializer.md#variable-algo-name-)  <br> |
|  double | [**error\_**](classsdm_1_1MDPInitializer.md#variable-error-)  <br> |
|  double | [**trials\_**](classsdm_1_1MDPInitializer.md#variable-trials-)  <br> |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1MDPInitializer.md#variable-world-)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MDPInitializer**](classsdm_1_1MDPInitializer.md#function-mdpinitializer) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world, std::string algo\_name, double error=0.01, int trials=10000) <br> |
| virtual void | [**init**](classsdm_1_1MDPInitializer.md#function-init) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; vf) <br> |

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



    
## Public Attributes Documentation


### variable algo\_name\_ 


```cpp
std::string sdm::MDPInitializer::algo_name_;
```



### variable error\_ 


```cpp
double sdm::MDPInitializer::error_;
```



### variable trials\_ 


```cpp
double sdm::MDPInitializer::trials_;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::MDPInitializer::world_;
```


## Public Functions Documentation


### function MDPInitializer 


```cpp
sdm::MDPInitializer::MDPInitializer (
    std::shared_ptr< SolvableByHSVI > world,
    std::string algo_name,
    double error=0.01,
    int trials=10000
) 
```



### function init 


```cpp
virtual void sdm::MDPInitializer::init (
    std::shared_ptr< ValueFunction > vf
) 
```


Implements [*sdm::Initializer::init*](classsdm_1_1Initializer.md#function-init)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/mdp_initializer.hpp`