
# Class sdm::HSVI

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HSVI**](classsdm_1_1HSVI.md)



[Heuristic Search Value Iteration (HSVI)](https://arxiv.org/abs/1207.4166) _and its extensions (FB-HSVI, one-sided_[_**HSVI**_](classsdm_1_1HSVI.md) _)._

* `#include <hsvi.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md),  std::enable_shared_from_this< HSVI >












## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MultiLogger**](classsdm_1_1MultiLogger.md) &gt; | [**logger\_**](classsdm_1_1HSVI.md#variable-logger-)  <br>[_**Logger**_](classsdm_1_1Logger.md) _._ |
|  std::shared\_ptr&lt; [**MultiLogger**](classsdm_1_1MultiLogger.md) &gt; | [**logger\_precise\_**](classsdm_1_1HSVI.md#variable-logger-precise-)  <br> |


## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  double | [**TIME\_BEST\_ACTION\_LB**](classsdm_1_1HSVI.md#variable-time-best-action-lb)  <br> |
|  double | [**TIME\_BEST\_ACTION\_UB**](classsdm_1_1HSVI.md#variable-time-best-action-ub)  <br> |
|  double | [**TIME\_EVALUATE\_LB**](classsdm_1_1HSVI.md#variable-time-evaluate-lb)  <br> |
|  double | [**TIME\_EVALUATE\_UB**](classsdm_1_1HSVI.md#variable-time-evaluate-ub)  <br> |
|  double | [**TIME\_GET\_VALUE\_AT\_LB**](classsdm_1_1HSVI.md#variable-time-get-value-at-lb)  <br> |
|  double | [**TIME\_GET\_VALUE\_AT\_UB**](classsdm_1_1HSVI.md#variable-time-get-value-at-ub)  <br> |
|  double | [**TIME\_INITIALIZATION**](classsdm_1_1HSVI.md#variable-time-initialization)  <br> |
|  double | [**TIME\_IN\_DO\_EXCESS**](classsdm_1_1HSVI.md#variable-time-in-do-excess)  <br> |
|  double | [**TIME\_IN\_PRUNING\_LB**](classsdm_1_1HSVI.md#variable-time-in-pruning-lb)  <br> |
|  double | [**TIME\_IN\_PRUNING\_UB**](classsdm_1_1HSVI.md#variable-time-in-pruning-ub)  <br> |
|  double | [**TIME\_IN\_SELECT\_ACTION**](classsdm_1_1HSVI.md#variable-time-in-select-action)  <br> |
|  double | [**TIME\_IN\_SELECT\_STATE**](classsdm_1_1HSVI.md#variable-time-in-select-state)  <br> |
|  double | [**TIME\_IN\_UPDATE\_LB**](classsdm_1_1HSVI.md#variable-time-in-update-lb)  <br> |
|  double | [**TIME\_IN\_UPDATE\_UB**](classsdm_1_1HSVI.md#variable-time-in-update-ub)  <br> |
|  double | [**TIME\_TO\_REMOVE**](classsdm_1_1HSVI.md#variable-time-to-remove)  <br> |
|  double | [**TIME\_UPDATE\_BACKUP\_LB**](classsdm_1_1HSVI.md#variable-time-update-backup-lb)  <br> |
|  double | [**TIME\_UPDATE\_BACKUP\_UB**](classsdm_1_1HSVI.md#variable-time-update-backup-ub)  <br> |
|  double | [**TOTAL\_TIME\_LB**](classsdm_1_1HSVI.md#variable-total-time-lb)  <br> |
|  double | [**TOTAL\_TIME\_UB**](classsdm_1_1HSVI.md#variable-total-time-ub)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**HSVI**](classsdm_1_1HSVI.md#function-hsvi) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world, std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; lower\_bound, std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; upper\_bound, [**number**](namespacesdm.md#typedef-number) planning\_horizon, double epsilon, [**number**](namespacesdm.md#typedef-number) num\_max\_trials=10000, std::string name="hsvi", [**number**](namespacesdm.md#typedef-number) lb\_update\_frequency=1, [**number**](namespacesdm.md#typedef-number) ub\_update\_frequency=1, double time\_max=1000, bool keep\_same\_action\_forward\_backward=false) <br>_Construct the_ [_**HSVI**_](classsdm_1_1HSVI.md) _algorithm._ |
|  double | [**do\_excess**](classsdm_1_1HSVI.md#function-do-excess) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, double, [**number**](namespacesdm.md#typedef-number)) <br>_Computes the error between bounds (or excess)._  |
|  void | [**do\_explore**](classsdm_1_1HSVI.md#function-do-explore) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, double, [**number**](namespacesdm.md#typedef-number) h) <br>_Explore a state._  |
| virtual void | [**do\_initialize**](classsdm_1_1HSVI.md#function-do-initialize) () <br>_Initialize the algorithm. It will initialize the lower bound and the upper bound._  |
| virtual void | [**do\_save**](classsdm_1_1HSVI.md#function-do-save) () <br>_Save the lower bound under "name\_lb.bin"._  |
| virtual void | [**do\_solve**](classsdm_1_1HSVI.md#function-do-solve) () <br>_Solve a problem that is solvable by_ [_**HSVI**_](classsdm_1_1HSVI.md) _._ |
|  bool | [**do\_stop**](classsdm_1_1HSVI.md#function-do-stop) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, double, [**number**](namespacesdm.md#typedef-number)) <br>_Check the end of_ [_**HSVI**_](classsdm_1_1HSVI.md) _algo._ |
| virtual void | [**do\_test**](classsdm_1_1HSVI.md#function-do-test) () <br>_Test the learnt value function on one episode._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getLowerBound**](classsdm_1_1HSVI.md#function-getlowerbound) () const<br>_Get the lower bound value function._  |
| virtual double | [**getResult**](classsdm_1_1HSVI.md#function-getresult) () <br> |
| virtual int | [**getTrial**](classsdm_1_1HSVI.md#function-gettrial) () <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getUpperBound**](classsdm_1_1HSVI.md#function-getupperbound) () const<br>_Get the upper bound value function._  |
|  std::shared\_ptr&lt; [**HSVI**](classsdm_1_1HSVI.md) &gt; | [**getptr**](classsdm_1_1HSVI.md#function-getptr) () <br> |
|  void | [**initLogger**](classsdm_1_1HSVI.md#function-initlogger) () <br>_Initialize the logger._  |
|  void | [**saveResults**](classsdm_1_1HSVI.md#function-saveresults) (std::string filename, double other) <br> |
|  void | [**updateTime**](classsdm_1_1HSVI.md#function-updatetime) (std::chrono::high\_resolution\_clock::time\_point start\_time, std::string information) <br>_Update the function associate with the time._  |

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

## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**cleanTIME**](classsdm_1_1HSVI.md#function-cleantime) () <br>_Clean all the data Time._  |






## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**MAX\_TRIALS**](classsdm_1_1HSVI.md#variable-max-trials)  <br> |
|  std::chrono::high\_resolution\_clock::time\_point | [**current\_time**](classsdm_1_1HSVI.md#variable-current-time)  <br> |
|  double | [**duration**](classsdm_1_1HSVI.md#variable-duration)  <br> |
|  double | [**error\_**](classsdm_1_1HSVI.md#variable-error-)  <br> |
|  bool | [**keep\_same\_action\_forward\_backward\_**](classsdm_1_1HSVI.md#variable-keep-same-action-forward-backward-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**lb\_update\_frequency\_**](classsdm_1_1HSVI.md#variable-lb-update-frequency-)  <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**lower\_bound\_**](classsdm_1_1HSVI.md#variable-lower-bound-)  <br>_Lower Bound representation._  |
|  std::string | [**name\_**](classsdm_1_1HSVI.md#variable-name-)   = = "hsvi"<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1HSVI.md#variable-planning-horizon-)  <br> |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**start\_state**](classsdm_1_1HSVI.md#variable-start-state)  <br> |
|  std::chrono::high\_resolution\_clock::time\_point | [**start\_time**](classsdm_1_1HSVI.md#variable-start-time)  <br> |
|  double | [**time\_max\_**](classsdm_1_1HSVI.md#variable-time-max-)  <br> |
|  int | [**trial**](classsdm_1_1HSVI.md#variable-trial)  <br>_Some variables for the algorithm._  |
|  [**number**](namespacesdm.md#typedef-number) | [**ub\_update\_frequency\_**](classsdm_1_1HSVI.md#variable-ub-update-frequency-)  <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**upper\_bound\_**](classsdm_1_1HSVI.md#variable-upper-bound-)  <br>_Upper Bound representation._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1HSVI.md#variable-world-)  <br>_The problem to be solved._  |








## Public Attributes Documentation


### variable logger\_ 


```cpp
std::shared_ptr<MultiLogger> sdm::HSVI::logger_;
```



### variable logger\_precise\_ 


```cpp
std::shared_ptr<MultiLogger> sdm::HSVI::logger_precise_;
```


## Public Static Attributes Documentation


### variable TIME\_BEST\_ACTION\_LB 


```cpp
double sdm::HSVI::TIME_BEST_ACTION_LB;
```



### variable TIME\_BEST\_ACTION\_UB 


```cpp
double sdm::HSVI::TIME_BEST_ACTION_UB;
```



### variable TIME\_EVALUATE\_LB 


```cpp
double sdm::HSVI::TIME_EVALUATE_LB;
```



### variable TIME\_EVALUATE\_UB 


```cpp
double sdm::HSVI::TIME_EVALUATE_UB;
```



### variable TIME\_GET\_VALUE\_AT\_LB 


```cpp
double sdm::HSVI::TIME_GET_VALUE_AT_LB;
```



### variable TIME\_GET\_VALUE\_AT\_UB 


```cpp
double sdm::HSVI::TIME_GET_VALUE_AT_UB;
```



### variable TIME\_INITIALIZATION 


```cpp
double sdm::HSVI::TIME_INITIALIZATION;
```



### variable TIME\_IN\_DO\_EXCESS 


```cpp
double sdm::HSVI::TIME_IN_DO_EXCESS;
```



### variable TIME\_IN\_PRUNING\_LB 


```cpp
double sdm::HSVI::TIME_IN_PRUNING_LB;
```



### variable TIME\_IN\_PRUNING\_UB 


```cpp
double sdm::HSVI::TIME_IN_PRUNING_UB;
```



### variable TIME\_IN\_SELECT\_ACTION 


```cpp
double sdm::HSVI::TIME_IN_SELECT_ACTION;
```



### variable TIME\_IN\_SELECT\_STATE 


```cpp
double sdm::HSVI::TIME_IN_SELECT_STATE;
```



### variable TIME\_IN\_UPDATE\_LB 


```cpp
double sdm::HSVI::TIME_IN_UPDATE_LB;
```



### variable TIME\_IN\_UPDATE\_UB 


```cpp
double sdm::HSVI::TIME_IN_UPDATE_UB;
```



### variable TIME\_TO\_REMOVE 


```cpp
double sdm::HSVI::TIME_TO_REMOVE;
```



### variable TIME\_UPDATE\_BACKUP\_LB 


```cpp
double sdm::HSVI::TIME_UPDATE_BACKUP_LB;
```



### variable TIME\_UPDATE\_BACKUP\_UB 


```cpp
double sdm::HSVI::TIME_UPDATE_BACKUP_UB;
```



### variable TOTAL\_TIME\_LB 


```cpp
double sdm::HSVI::TOTAL_TIME_LB;
```



### variable TOTAL\_TIME\_UB 


```cpp
double sdm::HSVI::TOTAL_TIME_UB;
```


## Public Functions Documentation


### function HSVI 


```cpp
sdm::HSVI::HSVI (
    std::shared_ptr< SolvableByHSVI > & world,
    std::shared_ptr< ValueFunction > lower_bound,
    std::shared_ptr< ValueFunction > upper_bound,
    number planning_horizon,
    double epsilon,
    number num_max_trials=10000,
    std::string name="hsvi",
    number lb_update_frequency=1,
    number ub_update_frequency=1,
    double time_max=1000,
    bool keep_same_action_forward_backward=false
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
    const std::shared_ptr< State > &,
    double,
    number
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : the state 
* `double` cost so far 
* `number` the timestep 



**Returns:**

the error 




        

### function do\_explore 


```cpp
void sdm::HSVI::do_explore (
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
virtual void sdm::HSVI::do_initialize () 
```


Implements [*sdm::Algorithm::do\_initialize*](classsdm_1_1Algorithm.md#function-do-initialize)


### function do\_save 


```cpp
virtual void sdm::HSVI::do_save () 
```


Implements [*sdm::Algorithm::do\_save*](classsdm_1_1Algorithm.md#function-do-save)


### function do\_solve 


```cpp
virtual void sdm::HSVI::do_solve () 
```


Implements [*sdm::Algorithm::do\_solve*](classsdm_1_1Algorithm.md#function-do-solve)


### function do\_stop 


```cpp
bool sdm::HSVI::do_stop (
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
virtual void sdm::HSVI::do_test () 
```


Implements [*sdm::Algorithm::do\_test*](classsdm_1_1Algorithm.md#function-do-test)


### function getLowerBound 


```cpp
std::shared_ptr< ValueFunction > sdm::HSVI::getLowerBound () const
```



### function getResult 


```cpp
virtual double sdm::HSVI::getResult () 
```


Implements [*sdm::Algorithm::getResult*](classsdm_1_1Algorithm.md#function-getresult)


### function getTrial 


```cpp
virtual int sdm::HSVI::getTrial () 
```


Implements [*sdm::Algorithm::getTrial*](classsdm_1_1Algorithm.md#function-gettrial)


### function getUpperBound 


```cpp
std::shared_ptr< ValueFunction > sdm::HSVI::getUpperBound () const
```



### function getptr 


```cpp
std::shared_ptr< HSVI > sdm::HSVI::getptr () 
```



### function initLogger 


```cpp
void sdm::HSVI::initLogger () 
```



### function saveResults 


```cpp
void sdm::HSVI::saveResults (
    std::string filename,
    double other
) 
```



### function updateTime 


```cpp
void sdm::HSVI::updateTime (
    std::chrono::high_resolution_clock::time_point start_time,
    std::string information
) 
```




**Parameters:**


* `start_time` 
* `information` 



        
## Public Static Functions Documentation


### function cleanTIME 


```cpp
static void sdm::HSVI::cleanTIME () 
```


## Protected Attributes Documentation


### variable MAX\_TRIALS 


```cpp
int sdm::HSVI::MAX_TRIALS;
```



### variable current\_time 


```cpp
std::chrono::high_resolution_clock::time_point sdm::HSVI::current_time;
```



### variable duration 


```cpp
double sdm::HSVI::duration;
```



### variable error\_ 


```cpp
double sdm::HSVI::error_;
```



### variable keep\_same\_action\_forward\_backward\_ 


```cpp
bool sdm::HSVI::keep_same_action_forward_backward_;
```



### variable lb\_update\_frequency\_ 


```cpp
number sdm::HSVI::lb_update_frequency_;
```



### variable lower\_bound\_ 


```cpp
std::shared_ptr<ValueFunction> sdm::HSVI::lower_bound_;
```



### variable name\_ 


```cpp
std::string sdm::HSVI::name_;
```



### variable planning\_horizon\_ 


```cpp
number sdm::HSVI::planning_horizon_;
```



### variable start\_state 


```cpp
std::shared_ptr<State> sdm::HSVI::start_state;
```



### variable start\_time 


```cpp
std::chrono::high_resolution_clock::time_point sdm::HSVI::start_time;
```



### variable time\_max\_ 


```cpp
double sdm::HSVI::time_max_;
```



### variable trial 


```cpp
int sdm::HSVI::trial;
```



### variable ub\_update\_frequency\_ 


```cpp
number sdm::HSVI::ub_update_frequency_;
```



### variable upper\_bound\_ 


```cpp
std::shared_ptr<ValueFunction> sdm::HSVI::upper_bound_;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::HSVI::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/hsvi.hpp`