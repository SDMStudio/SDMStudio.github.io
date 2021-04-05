
<NavBar active_item_id="2"/>

# Class sdm::HSVI

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HSVI**](classsdm_1_1HSVI.md)



[More...](#detailed-description)

* `#include <hsvi.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**HSVI**](classsdm_1_1HSVI.md#function-hsvi-1-2) ([**number**](namespacesdm.md#typedef-number) trials, std::string results) <br>_Construct a new_ [_**HSVI**_](classsdm_1_1HSVI.md) _object._ |
|   | [**HSVI**](classsdm_1_1HSVI.md#function-hsvi-2-2) (std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; & world, std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt;&gt; lower\_bound, std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt;&gt; upper\_bound, [**number**](namespacesdm.md#typedef-number) planning\_horizon, double epsilon, [**number**](namespacesdm.md#typedef-number) num\_max\_trials=10000) <br>_Construct a new_ [_**HSVI**_](classsdm_1_1HSVI.md) _object._ |
|  double | [**do\_excess**](classsdm_1_1HSVI.md#function-do-excess) (TState s, [**number**](namespacesdm.md#typedef-number) h) <br> |
|  void | [**do\_explore**](classsdm_1_1HSVI.md#function-do-explore) (TState s, [**number**](namespacesdm.md#typedef-number) h) <br>_Explore state._  |
|  void | [**do\_initialize**](classsdm_1_1HSVI.md#function-do-initialize) () <br>_Initialize the algorithm._  |
|  void | [**do\_solve**](classsdm_1_1HSVI.md#function-do-solve) () <br>_Solve the transformed problem._  |
|  bool | [**do\_stop**](classsdm_1_1HSVI.md#function-do-stop) (TState s, [**number**](namespacesdm.md#typedef-number) h) <br>_Check the end of_ [_**HSVI**_](classsdm_1_1HSVI.md) _algo._ |
|  TState | [**getInitialState**](classsdm_1_1HSVI.md#function-getinitialstate) () <br> |
|  TAction | [**selectNextAction**](classsdm_1_1HSVI.md#function-selectnextaction) (TState s, [**number**](namespacesdm.md#typedef-number) h) <br>_Select the greedy action._  |
|  TState | [**selectNextState**](classsdm_1_1HSVI.md#function-selectnextstate) (TState s, TAction a, [**number**](namespacesdm.md#typedef-number) d) <br>_Select the next state to explore._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**MAX\_TRIALS**](classsdm_1_1HSVI.md#variable-max-trials)  <br> |
|  double | [**error\_**](classsdm_1_1HSVI.md#variable-error-)  <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**lower\_bound\_**](classsdm_1_1HSVI.md#variable-lower-bound-)  <br>_Lower Bound representation._  |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1HSVI.md#variable-planning-horizon-)  <br> |
|  int | [**trial**](classsdm_1_1HSVI.md#variable-trial)  <br>_Some variables for the algorithm._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**upper\_bound\_**](classsdm_1_1HSVI.md#variable-upper-bound-)  <br>_Upper Bound representation._  |
|  std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; | [**world\_**](classsdm_1_1HSVI.md#variable-world-)  <br>_Heuristic search for_ [_**HSVI**_](classsdm_1_1HSVI.md) _._ |


## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**initLogger**](classsdm_1_1HSVI.md#function-initlogger) () <br> |
|  void | [**updateValueFunction**](classsdm_1_1HSVI.md#function-updatevaluefunction) (TState s, [**number**](namespacesdm.md#typedef-number) h) <br> |


# Detailed Description




**Template parameters:**


* `TState` 
* `TAction` 



    
## Public Functions Documentation


### function HSVI [1/2]


```cpp
sdm::HSVI::HSVI (
    number trials,
    std::string results
) 
```




**Parameters:**


* `trials` 
* `results` 



        

### function HSVI [2/2]


```cpp
sdm::HSVI::HSVI (
    std::shared_ptr< POSG > & world,
    std::shared_ptr< ValueFunction < TState, TAction >> lower_bound,
    std::shared_ptr< ValueFunction < TState, TAction >> upper_bound,
    number planning_horizon,
    double epsilon,
    number num_max_trials=10000
) 
```




**Parameters:**


* `world` the problem we want to solve 
* `lb` 
* `ub` 
* `trials` 
* `results` 



        

### function do\_excess 


```cpp
double sdm::HSVI::do_excess (
    TState s,
    number h
) 
```




**Parameters:**


* `s` 



**Returns:**

double 




        

### function do\_explore 


```cpp
void sdm::HSVI::do_explore (
    TState s,
    number h
) 
```




**Parameters:**


* `s` 
* `h` 



        

### function do\_initialize 


```cpp
void sdm::HSVI::do_initialize () 
```




**Parameters:**


* `tr_problem` 



        

### function do\_solve 


```cpp
void sdm::HSVI::do_solve () 
```




**Parameters:**


* `tr_problem` 
* `planning_horizon` 
* `epsilon` 
* `discount` 



        

### function do\_stop 


```cpp
bool sdm::HSVI::do_stop (
    TState s,
    number h
) 
```




**Parameters:**


* `h` 



**Returns:**

true if optimal is reached or number of trials is bigger than maximal number of trials 




**Returns:**

false 




        

### function getInitialState 


```cpp
TState sdm::HSVI::getInitialState () 
```



### function selectNextAction 


```cpp
TAction sdm::HSVI::selectNextAction (
    TState s,
    number h
) 
```




**Parameters:**


* `s` 



**Returns:**

TAction 




        

### function selectNextState 


```cpp
TState sdm::HSVI::selectNextState (
    TState s,
    TAction a,
    number d
) 
```




**Parameters:**


* `s` 
* `a` 



**Returns:**

TState 




        
## Protected Attributes Documentation


### variable MAX\_TRIALS 


```cpp
int sdm::HSVI< TState, TAction >::MAX_TRIALS;
```



### variable error\_ 


```cpp
double sdm::HSVI< TState, TAction >::error_;
```



### variable lower\_bound\_ 


```cpp
std::shared_ptr<ValueFunction<TState, TAction> > sdm::HSVI< TState, TAction >::lower_bound_;
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
std::shared_ptr<POSG> sdm::HSVI< TState, TAction >::world_;
```


The problem to be solved. 

        
## Protected Functions Documentation


### function initLogger 


```cpp
void sdm::HSVI::initLogger () 
```



### function updateValueFunction 


```cpp
void sdm::HSVI::updateValueFunction (
    TState s,
    number h
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/hsvi.hpp`