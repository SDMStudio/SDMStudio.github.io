
# Class sdm::Algorithm

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Algorithm**](classsdm_1_1Algorithm.md)



_The public interface common to all algorithms in_ **SDM'Studio** _._[More...](#detailed-description)

* `#include <algorithm.hpp>`





Inherited by the following classes: [sdm::AlphaStar](classsdm_1_1AlphaStar.md),  [sdm::BackwardInduction](classsdm_1_1BackwardInduction.md),  [sdm::HSVI](classsdm_1_1HSVI.md),  [sdm::QLearning](classsdm_1_1QLearning.md),  [sdm::ValueIteration](classsdm_1_1ValueIteration.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**do\_initialize**](classsdm_1_1Algorithm.md#function-do-initialize) () = 0<br>_Initialize the algorithm._  |
| virtual void | [**do\_save**](classsdm_1_1Algorithm.md#function-do-save) () = 0<br>_Save the policy in a file._  |
| virtual void | [**do\_solve**](classsdm_1_1Algorithm.md#function-do-solve) () = 0<br>_Solve the problem._  |
| virtual void | [**do\_test**](classsdm_1_1Algorithm.md#function-do-test) () = 0<br>_Test the result of the algorithm._  |
| virtual double | [**getResult**](classsdm_1_1Algorithm.md#function-getresult) () = 0<br> |
| virtual int | [**getTrial**](classsdm_1_1Algorithm.md#function-gettrial) () = 0<br> |
| virtual  | [**~Algorithm**](classsdm_1_1Algorithm.md#function-algorithm) () <br> |








# Detailed Description


Basic usage:


````cpp
std::shared_ptr<Algorithm> algo = std::make_shared<AlgoName>(params...);
algo->do_initialize();
algo->do_solve();
````

 

    
## Public Functions Documentation


### function do\_initialize 


```cpp
virtual void sdm::Algorithm::do_initialize () = 0
```



### function do\_save 


```cpp
virtual void sdm::Algorithm::do_save () = 0
```



### function do\_solve 


```cpp
virtual void sdm::Algorithm::do_solve () = 0
```



### function do\_test 


```cpp
virtual void sdm::Algorithm::do_test () = 0
```



### function getResult 


```cpp
virtual double sdm::Algorithm::getResult () = 0
```



### function getTrial 


```cpp
virtual int sdm::Algorithm::getTrial () = 0
```



### function ~Algorithm 


```cpp
inline virtual sdm::Algorithm::~Algorithm () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/public/algorithm.hpp`