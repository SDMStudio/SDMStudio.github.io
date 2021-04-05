
<NavBar active_item_id="2"/>

# Class sdm::HSVI

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HSVI**](classsdm_1_1HSVI.md)



[More...](#detailed-description)

* `#include <hsvi.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**HSVI**](classsdm_1_1HSVI.md#function-hsvi) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt;&gt; & world, std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt;&gt; lower\_bound, std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt;&gt; upper\_bound, [**number**](namespacesdm.md#typedef-number) planning\_horizon, double epsilon, [**number**](namespacesdm.md#typedef-number) num\_max\_trials=10000, std::string name="hsvi") <br>_Construct the_ [_**HSVI**_](classsdm_1_1HSVI.md) _object._ |
|  double | [**do\_excess**](classsdm_1_1HSVI.md#function-do-excess) (const TState & s, [**number**](namespacesdm.md#typedef-number) h) <br>_Computes the error between bounds (or excess)._  |
|  void | [**do\_explore**](classsdm_1_1HSVI.md#function-do-explore) (const TState & s, [**number**](namespacesdm.md#typedef-number) h) <br>_Explore a state._  |
| virtual void | [**do\_initialize**](classsdm_1_1HSVI.md#function-do-initialize) () <br>_Initialize the algorithm._  |
| virtual void | [**do\_solve**](classsdm_1_1HSVI.md#function-do-solve) () <br>_Solve a problem solvable by_ [_**HSVI**_](classsdm_1_1HSVI.md) _._ |
|  bool | [**do\_stop**](classsdm_1_1HSVI.md#function-do-stop) (const TState & s, [**number**](namespacesdm.md#typedef-number) h) <br>_Check the end of_ [_**HSVI**_](classsdm_1_1HSVI.md) _algo._ |
| virtual void | [**do\_test**](classsdm_1_1HSVI.md#function-do-test) () <br>_Test the learnt value function on one episode._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**getLowerBound**](classsdm_1_1HSVI.md#function-getlowerbound) () const<br>_Get the lower bound value function._  |
|  int | [**getTrial**](classsdm_1_1HSVI.md#function-gettrial) () const<br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**getUpperBound**](classsdm_1_1HSVI.md#function-getupperbound) () const<br>_Get the upper bound value function._  |
|  TAction | [**selectNextAction**](classsdm_1_1HSVI.md#function-selectnextaction) (const TState & s, [**number**](namespacesdm.md#typedef-number) h) <br>_Select the next action._  |
|  TState | [**selectNextState**](classsdm_1_1HSVI.md#function-selectnextstate) (const TState & s, const TAction & a, [**number**](namespacesdm.md#typedef-number) h) <br>_Select the next state to explore._  |

## Public Functions inherited from sdm::Algorithm

See [sdm::Algorithm](classsdm_1_1Algorithm.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**do\_initialize**](classsdm_1_1Algorithm.md#function-do-initialize) () = 0<br>_Initialize the algorithm._  |
| virtual void | [**do\_solve**](classsdm_1_1Algorithm.md#function-do-solve) () = 0<br>_Solve the problem._  |
| virtual void | [**do\_test**](classsdm_1_1Algorithm.md#function-do-test) () = 0<br>_Test the result of the algorithm._  |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**MAX\_TRIALS**](classsdm_1_1HSVI.md#variable-max-trials)  <br> |
|  double | [**error\_**](classsdm_1_1HSVI.md#variable-error-)  <br> |
|  std::shared\_ptr&lt; [**MultiLogger**](classsdm_1_1MultiLogger.md) &gt; | [**logger\_**](classsdm_1_1HSVI.md#variable-logger-)  <br>[_**Logger**_](classsdm_1_1Logger.md) _._ |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**lower\_bound\_**](classsdm_1_1HSVI.md#variable-lower-bound-)  <br>_Lower Bound representation._  |
|  std::string | [**name\_**](classsdm_1_1HSVI.md#variable-name-)   = = "hsvi"<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1HSVI.md#variable-planning-horizon-)  <br> |
|  int | [**trial**](classsdm_1_1HSVI.md#variable-trial)  <br>_Some variables for the algorithm._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**upper\_bound\_**](classsdm_1_1HSVI.md#variable-upper-bound-)  <br>_Upper Bound representation._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt; &gt; | [**world\_**](classsdm_1_1HSVI.md#variable-world-)  <br>_The problem to be solved._  |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**initLogger**](classsdm_1_1HSVI.md#function-initlogger) () <br> |




# Detailed Description




**Template parameters:**


* `TState` 
* `TAction` 



    
## Public Functions Documentation


### function HSVI 


```cpp
sdm::HSVI::HSVI (
    std::shared_ptr< SolvableByHSVI < TState, TAction >> & world,
    std::shared_ptr< ValueFunction < TState, TAction >> lower_bound,
    std::shared_ptr< ValueFunction < TState, TAction >> upper_bound,
    number planning_horizon,
    double epsilon,
    number num_max_trials=10000,
    std::string name="hsvi"
) 
```




**Parameters:**


* `world` the problem to be solved by [**HSVI**](classsdm_1_1HSVI.md) 
* `lower_bound` the lower bound 
* `upper_bound` the upperbound 
* `planning_horizon` the planning horizon 
* `epsilon` the error 
* `num_max_trials` the maximum number of trials before stop 
* `name` the name of the algorithm (this name is used to save logs) 



        

### function do\_excess 


```cpp
double sdm::HSVI::do_excess (
    const TState & s,
    number h
) 
```




**Parameters:**


* `s` the state 
* `t` the timestep 



**Returns:**

the error 




        

### function do\_explore 


```cpp
void sdm::HSVI::do_explore (
    const TState & s,
    number h
) 
```




**Parameters:**


* `s` the state to explore 
* `h` the timestep of the exploration 



        

### function do\_initialize 


```cpp
virtual void sdm::HSVI::do_initialize () 
```


Implements [*sdm::Algorithm::do\_initialize*](classsdm_1_1Algorithm.md#function-do-initialize)


### function do\_solve 


```cpp
virtual void sdm::HSVI::do_solve () 
```


Implements [*sdm::Algorithm::do\_solve*](classsdm_1_1Algorithm.md#function-do-solve)


### function do\_stop 


```cpp
bool sdm::HSVI::do_stop (
    const TState & s,
    number h
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
virtual void sdm::HSVI::do_test () 
```


Implements [*sdm::Algorithm::do\_test*](classsdm_1_1Algorithm.md#function-do-test)


### function getLowerBound 


```cpp
std::shared_ptr< ValueFunction < TState, TAction > > sdm::HSVI::getLowerBound () const
```



### function getTrial 


```cpp
int sdm::HSVI::getTrial () const
```



### function getUpperBound 


```cpp
std::shared_ptr< ValueFunction < TState, TAction > > sdm::HSVI::getUpperBound () const
```



### function selectNextAction 


```cpp
TAction sdm::HSVI::selectNextAction (
    const TState & s,
    number h
) 
```




**Parameters:**


* `s` the current state 
* `h` the current timestep 



**Returns:**

TAction 




        

### function selectNextState 


```cpp
TState sdm::HSVI::selectNextState (
    const TState & s,
    const TAction & a,
    number h
) 
```




**Parameters:**


* `s` the current state 
* `a` the current action 
* `h` the current timestep 



**Returns:**

the next state 




        
## Protected Attributes Documentation


### variable MAX\_TRIALS 


```cpp
int sdm::HSVI< TState, TAction >::MAX_TRIALS;
```



### variable error\_ 


```cpp
double sdm::HSVI< TState, TAction >::error_;
```



### variable logger\_ 


```cpp
std::shared_ptr<MultiLogger> sdm::HSVI< TState, TAction >::logger_;
```



### variable lower\_bound\_ 


```cpp
std::shared_ptr<ValueFunction<TState, TAction> > sdm::HSVI< TState, TAction >::lower_bound_;
```



### variable name\_ 


```cpp
std::string sdm::HSVI< TState, TAction >::name_;
```



### variable planning\_horizon\_ 


```cpp
number sdm::HSVI< TState, TAction >::planning_horizon_;
```



### variable trial 


```cpp
int sdm::HSVI< TState, TAction >::trial;
```



### variable upper\_bound\_ 


```cpp
std::shared_ptr<ValueFunction<TState, TAction> > sdm::HSVI< TState, TAction >::upper_bound_;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI<TState, TAction> > sdm::HSVI< TState, TAction >::world_;
```


## Protected Functions Documentation


### function initLogger 


```cpp
void sdm::HSVI::initLogger () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/algorithms/hsvi.hpp`