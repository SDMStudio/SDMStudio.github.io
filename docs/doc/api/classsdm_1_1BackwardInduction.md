
# Class sdm::BackwardInduction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BackwardInduction**](classsdm_1_1BackwardInduction.md)



_The algorithm_ [Backward Induction](https://en.wikipedia.org/wiki/Backward_induction) _._

* `#include <backward_induction.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md),  std::enable_shared_from_this< BackwardInduction >
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BackwardInduction**](classsdm_1_1BackwardInduction.md#function-backwardinduction) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world, std::string name="backward induction") <br>_Construct the Backward Induction algorithm._  |
|  void | [**do\_explore**](classsdm_1_1BackwardInduction.md#function-do-explore) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, double, [**number**](namespacesdm.md#typedef-number) h) <br>_Explore a state._  |
| virtual void | [**do\_initialize**](classsdm_1_1BackwardInduction.md#function-do-initialize) () <br>_Initialize the algorithm._  |
| virtual void | [**do\_save**](classsdm_1_1BackwardInduction.md#function-do-save) () <br>_Save the lower bound under "name\_lb.bin"._  |
| virtual void | [**do\_solve**](classsdm_1_1BackwardInduction.md#function-do-solve) () <br>_Solve a problem with backward induction algorithm._  |
|  bool | [**do\_stop**](classsdm_1_1BackwardInduction.md#function-do-stop) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, double, [**number**](namespacesdm.md#typedef-number)) <br>_Check the end of_ [_**HSVI**_](classsdm_1_1HSVI.md) _algo._ |
| virtual void | [**do\_test**](classsdm_1_1BackwardInduction.md#function-do-test) () <br>_Test the learnt value function on one episode._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getBound**](classsdm_1_1BackwardInduction.md#function-getbound) () const<br>_Get the bound value function._  |
| virtual double | [**getResult**](classsdm_1_1BackwardInduction.md#function-getresult) () <br> |
| virtual int | [**getTrial**](classsdm_1_1BackwardInduction.md#function-gettrial) () <br> |
|  std::shared\_ptr&lt; [**BackwardInduction**](classsdm_1_1BackwardInduction.md) &gt; | [**getptr**](classsdm_1_1BackwardInduction.md#function-getptr) () <br> |
|  void | [**saveResults**](classsdm_1_1BackwardInduction.md#function-saveresults) (std::string filename, double other) <br> |

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
|  std::shared\_ptr&lt; [**TabularValueFunction**](namespacesdm.md#typedef-tabularvaluefunction) &gt; | [**bound\_**](classsdm_1_1BackwardInduction.md#variable-bound-)  <br>_representation._  |
|  std::shared\_ptr&lt; [**MultiLogger**](classsdm_1_1MultiLogger.md) &gt; | [**logger\_**](classsdm_1_1BackwardInduction.md#variable-logger-)  <br>[_**Logger**_](classsdm_1_1Logger.md) _._ |
|  std::string | [**name\_**](classsdm_1_1BackwardInduction.md#variable-name-)   = = "backward\_induction"<br>_Some variables for the algorithm._  |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**start\_state**](classsdm_1_1BackwardInduction.md#variable-start-state)  <br> |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1BackwardInduction.md#variable-world-)  <br>_The problem to be solved._  |








## Public Functions Documentation


### function BackwardInduction 


```cpp
sdm::BackwardInduction::BackwardInduction (
    std::shared_ptr< SolvableByHSVI > & world,
    std::string name="backward induction"
) 
```




**Parameters:**


* `world` the problem to be solved by Backward induction 
* `name` the name of the algorithm (this name is used to save logs) 



        

### function do\_explore 


```cpp
void sdm::BackwardInduction::do_explore (
    const std::shared_ptr< State > & s,
    double,
    number h
) 
```




**Parameters:**


* `s` the state to explore 
* `h` the timestep of the exploration 



        

### function do\_initialize 


```cpp
virtual void sdm::BackwardInduction::do_initialize () 
```


Implements [*sdm::Algorithm::do\_initialize*](classsdm_1_1Algorithm.md#function-do-initialize)


### function do\_save 


```cpp
virtual void sdm::BackwardInduction::do_save () 
```


Implements [*sdm::Algorithm::do\_save*](classsdm_1_1Algorithm.md#function-do-save)


### function do\_solve 


```cpp
virtual void sdm::BackwardInduction::do_solve () 
```


Implements [*sdm::Algorithm::do\_solve*](classsdm_1_1Algorithm.md#function-do-solve)


### function do\_stop 


```cpp
bool sdm::BackwardInduction::do_stop (
    const std::shared_ptr< State > &,
    double,
    number
) 
```




**Parameters:**


* `s` the current state 
* `h` the current timestep 



**Returns:**

true if optimal is reached or number of trials is bigger than maximal number of trials 




**Returns:**

false elsewhere 




        

### function do\_test 


```cpp
virtual void sdm::BackwardInduction::do_test () 
```


Implements [*sdm::Algorithm::do\_test*](classsdm_1_1Algorithm.md#function-do-test)


### function getBound 


```cpp
std::shared_ptr< ValueFunction > sdm::BackwardInduction::getBound () const
```



### function getResult 


```cpp
virtual double sdm::BackwardInduction::getResult () 
```


Implements [*sdm::Algorithm::getResult*](classsdm_1_1Algorithm.md#function-getresult)


### function getTrial 


```cpp
inline virtual int sdm::BackwardInduction::getTrial () 
```


Implements [*sdm::Algorithm::getTrial*](classsdm_1_1Algorithm.md#function-gettrial)


### function getptr 


```cpp
std::shared_ptr< BackwardInduction > sdm::BackwardInduction::getptr () 
```



### function saveResults 


```cpp
void sdm::BackwardInduction::saveResults (
    std::string filename,
    double other
) 
```


## Protected Attributes Documentation


### variable bound\_ 


```cpp
std::shared_ptr<TabularValueFunction> sdm::BackwardInduction::bound_;
```



### variable logger\_ 


```cpp
std::shared_ptr<MultiLogger> sdm::BackwardInduction::logger_;
```



### variable name\_ 


```cpp
std::string sdm::BackwardInduction::name_;
```



### variable start\_state 


```cpp
std::shared_ptr<State> sdm::BackwardInduction::start_state;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::BackwardInduction::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/backward_induction.hpp`