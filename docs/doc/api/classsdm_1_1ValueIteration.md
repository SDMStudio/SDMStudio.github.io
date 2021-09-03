
# Class sdm::ValueIteration

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueIteration**](classsdm_1_1ValueIteration.md)



[Value Iteration](https://www.jstor.org/stable/24900506) _for_[_**MDP**_](classsdm_1_1MDP.md) _._

* `#include <value_iteration.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ValueIteration**](classsdm_1_1ValueIteration.md#function-valueiteration) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; problem, double error, int horizon) <br> |
|  void | [**determinedAllNextState**](classsdm_1_1ValueIteration.md#function-determinedallnextstate) () <br> |
|  void | [**determinedAllNextStateRecursive**](classsdm_1_1ValueIteration.md#function-determinedallnextstaterecursive) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual void | [**do\_initialize**](classsdm_1_1ValueIteration.md#function-do-initialize) () <br>_Initialize the algorithm._  |
| virtual void | [**do\_save**](classsdm_1_1ValueIteration.md#function-do-save) () <br>_Save the value function._  |
| virtual void | [**do\_solve**](classsdm_1_1ValueIteration.md#function-do-solve) () <br>_Solve a problem solvable by_ [_**HSVI**_](classsdm_1_1HSVI.md) _._ |
| virtual void | [**do\_test**](classsdm_1_1ValueIteration.md#function-do-test) () <br>_Test the learnt value function on one episode._  |
| virtual double | [**getResult**](classsdm_1_1ValueIteration.md#function-getresult) () <br> |
| virtual int | [**getTrial**](classsdm_1_1ValueIteration.md#function-gettrial) () <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getValueFunction**](classsdm_1_1ValueIteration.md#function-getvaluefunction) () <br> |

## Public Functions inherited from sdm::Algorithm

See [sdm::Algorithm](classsdm_1_1Algorithm.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**do\_initialize**](classsdm_1_1Algorithm.md#function-do-initialize) () = 0<br>_Initialize the algorithm._  |
| virtual void | [**do\_save**](classsdm_1_1Algorithm.md#function-do-save) () = 0<br>_Save the policy in a file._  |
| virtual void | [**do\_solve**](classsdm_1_1Algorithm.md#function-do-solve) () = 0<br>_Solve the problem._  |
| virtual void | [**do\_test**](classsdm_1_1Algorithm.md#function-do-test) () = 0<br>_Test the result of the algorithm._  |
| virtual double | [**getResult**](classsdm_1_1Algorithm.md#function-getresult) () = 0<br> |
| virtual int | [**getTrial**](classsdm_1_1Algorithm.md#function-gettrial) () = 0<br> |
| virtual  | [**~Algorithm**](classsdm_1_1Algorithm.md#function-algorithm) () <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; &gt; | [**all\_state**](classsdm_1_1ValueIteration.md#variable-all-state)  <br> |
|  double | [**error\_**](classsdm_1_1ValueIteration.md#variable-error-)  <br> |
|  int | [**horizon\_**](classsdm_1_1ValueIteration.md#variable-horizon-)  <br> |
|  std::shared\_ptr&lt; [**sdm::TabularValueFunction**](namespacesdm.md#typedef-tabularvaluefunction) &gt; | [**policy\_evaluation\_1\_**](classsdm_1_1ValueIteration.md#variable-policy-evaluation-1-)  <br>_The value function._  |
|  std::shared\_ptr&lt; [**sdm::TabularValueFunction**](namespacesdm.md#typedef-tabularvaluefunction) &gt; | [**policy\_evaluation\_2\_**](classsdm_1_1ValueIteration.md#variable-policy-evaluation-2-)  <br>_The copy of the value function._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**problem\_**](classsdm_1_1ValueIteration.md#variable-problem-)  <br>_The problem to be solved._  |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  bool | [**borne**](classsdm_1_1ValueIteration.md#function-borne) () <br> |




## Public Functions Documentation


### function ValueIteration 


```cpp
sdm::ValueIteration::ValueIteration (
    std::shared_ptr< SolvableByHSVI > problem,
    double error,
    int horizon
) 
```



### function determinedAllNextState 


```cpp
void sdm::ValueIteration::determinedAllNextState () 
```



### function determinedAllNextStateRecursive 


```cpp
void sdm::ValueIteration::determinedAllNextStateRecursive (
    const std::shared_ptr< State > &,
    number t
) 
```



### function do\_initialize 


```cpp
virtual void sdm::ValueIteration::do_initialize () 
```


Implements [*sdm::Algorithm::do\_initialize*](classsdm_1_1Algorithm.md#function-do-initialize)


### function do\_save 


```cpp
inline virtual void sdm::ValueIteration::do_save () 
```


Implements [*sdm::Algorithm::do\_save*](classsdm_1_1Algorithm.md#function-do-save)


### function do\_solve 


```cpp
virtual void sdm::ValueIteration::do_solve () 
```


Implements [*sdm::Algorithm::do\_solve*](classsdm_1_1Algorithm.md#function-do-solve)


### function do\_test 


```cpp
virtual void sdm::ValueIteration::do_test () 
```


Implements [*sdm::Algorithm::do\_test*](classsdm_1_1Algorithm.md#function-do-test)


### function getResult 


```cpp
virtual double sdm::ValueIteration::getResult () 
```


Implements [*sdm::Algorithm::getResult*](classsdm_1_1Algorithm.md#function-getresult)


### function getTrial 


```cpp
inline virtual int sdm::ValueIteration::getTrial () 
```


Implements [*sdm::Algorithm::getTrial*](classsdm_1_1Algorithm.md#function-gettrial)


### function getValueFunction 


```cpp
std::shared_ptr< ValueFunction > sdm::ValueIteration::getValueFunction () 
```


## Protected Attributes Documentation


### variable all\_state 


```cpp
std::vector<std::vector<std::shared_ptr<State> > > sdm::ValueIteration::all_state;
```



### variable error\_ 


```cpp
double sdm::ValueIteration::error_;
```



### variable horizon\_ 


```cpp
int sdm::ValueIteration::horizon_;
```



### variable policy\_evaluation\_1\_ 


```cpp
std::shared_ptr<sdm::TabularValueFunction> sdm::ValueIteration::policy_evaluation_1_;
```



### variable policy\_evaluation\_2\_ 


```cpp
std::shared_ptr<sdm::TabularValueFunction> sdm::ValueIteration::policy_evaluation_2_;
```



### variable problem\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::ValueIteration::problem_;
```


## Protected Functions Documentation


### function borne 


```cpp
bool sdm::ValueIteration::borne () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/value_iteration.hpp`