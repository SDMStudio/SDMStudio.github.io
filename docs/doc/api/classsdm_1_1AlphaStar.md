
# Class sdm::AlphaStar

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**AlphaStar**](classsdm_1_1AlphaStar.md)



_The class for the algorithm_ [A\*](http://ai.stanford.edu/users/nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf) _._

* `#include <alpha_star.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md),  std::enable_shared_from_this< AlphaStar >














## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  double | [**TIME\_TO\_REMOVE**](classsdm_1_1AlphaStar.md#variable-time-to-remove)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**AlphaStar**](classsdm_1_1AlphaStar.md#function-alphastar) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world, std::string name="A\*") <br>_Construct the_ [_**AlphaStar**_](classsdm_1_1AlphaStar.md) _algorithm with custom paramters._ |
|  void | [**do\_explore**](classsdm_1_1AlphaStar.md#function-do-explore) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & s, double, [**number**](namespacesdm.md#typedef-number) h) <br>_Explore a state._  |
| virtual void | [**do\_initialize**](classsdm_1_1AlphaStar.md#function-do-initialize) () <br>_Initialize the algorithm._  |
| virtual void | [**do\_save**](classsdm_1_1AlphaStar.md#function-do-save) () <br>_Save the lower bound under "name\_lb.bin"._  |
| virtual void | [**do\_solve**](classsdm_1_1AlphaStar.md#function-do-solve) () <br>_Solve a problem with A\* algorithm._  |
|  bool | [**do\_stop**](classsdm_1_1AlphaStar.md#function-do-stop) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, double, [**number**](namespacesdm.md#typedef-number)) <br>_Check the end of_ [_**HSVI**_](classsdm_1_1HSVI.md) _algo._ |
| virtual void | [**do\_test**](classsdm_1_1AlphaStar.md#function-do-test) () <br>_Test the learnt value function on one episode._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getBound**](classsdm_1_1AlphaStar.md#function-getbound) () const<br>_Get the bound value function._  |
| virtual double | [**getResult**](classsdm_1_1AlphaStar.md#function-getresult) () <br> |
| virtual int | [**getTrial**](classsdm_1_1AlphaStar.md#function-gettrial) () <br> |
|  std::shared\_ptr&lt; [**AlphaStar**](classsdm_1_1AlphaStar.md) &gt; | [**getptr**](classsdm_1_1AlphaStar.md#function-getptr) () <br> |
|  void | [**initLogger**](classsdm_1_1AlphaStar.md#function-initlogger) () <br> |
|  void | [**saveResults**](classsdm_1_1AlphaStar.md#function-saveresults) (std::string filename, double other) <br> |
|  void | [**updateTime**](classsdm_1_1AlphaStar.md#function-updatetime) (std::chrono::high\_resolution\_clock::time\_point start\_time, std::string information) <br> |

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
|  bool | [**compare**](classsdm_1_1AlphaStar.md#function-compare) (const std::shared\_ptr&lt; [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) &gt; & item\_1, const std::shared\_ptr&lt; [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) &gt; & item\_2) <br>_Compare two A\* items._  |






## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::shared\_ptr&lt; [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) &gt; &gt; | [**FSet**](classsdm_1_1AlphaStar.md#variable-fset)  <br> |
|  std::shared\_ptr&lt; [**TabularValueFunction**](namespacesdm.md#typedef-tabularvaluefunction) &gt; | [**bound\_**](classsdm_1_1AlphaStar.md#variable-bound-)  <br>_The representation._  |
|  std::chrono::high\_resolution\_clock::time\_point | [**current\_time**](classsdm_1_1AlphaStar.md#variable-current-time)  <br> |
|  double | [**duration**](classsdm_1_1AlphaStar.md#variable-duration)  <br> |
|  std::shared\_ptr&lt; [**MultiLogger**](classsdm_1_1MultiLogger.md) &gt; | [**logger\_**](classsdm_1_1AlphaStar.md#variable-logger-)  <br>_The logger._  |
|  std::vector&lt; std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) &gt; &gt; &gt; | [**map\_element\_to\_alpha\_item**](classsdm_1_1AlphaStar.md#variable-map-element-to-alpha-item)  <br> |
|  std::string | [**name\_**](classsdm_1_1AlphaStar.md#variable-name-)   = = "backward\_induction"<br> |
|  std::vector&lt; std::shared\_ptr&lt; [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) &gt; &gt; | [**openSet**](classsdm_1_1AlphaStar.md#variable-openset)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1AlphaStar.md#variable-planning-horizon-)  <br>_Some hyperparameters for the algorithm._  |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**start\_state**](classsdm_1_1AlphaStar.md#variable-start-state)  <br> |
|  std::chrono::high\_resolution\_clock::time\_point | [**start\_time**](classsdm_1_1AlphaStar.md#variable-start-time)  <br> |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1AlphaStar.md#variable-world-)  <br>_The problem to be solved._  |








## Public Static Attributes Documentation


### variable TIME\_TO\_REMOVE 


```cpp
double sdm::AlphaStar::TIME_TO_REMOVE;
```


## Public Functions Documentation


### function AlphaStar 


```cpp
sdm::AlphaStar::AlphaStar (
    std::shared_ptr< SolvableByHSVI > & world,
    std::string name="A*"
) 
```




**Parameters:**


* `world` the problem to be solved by A\* 
* `name` the name of the algorithm (this name is used to save logs) 



        

### function do\_explore 


```cpp
void sdm::AlphaStar::do_explore (
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
virtual void sdm::AlphaStar::do_initialize () 
```


Implements [*sdm::Algorithm::do\_initialize*](classsdm_1_1Algorithm.md#function-do-initialize)


### function do\_save 


```cpp
virtual void sdm::AlphaStar::do_save () 
```


Implements [*sdm::Algorithm::do\_save*](classsdm_1_1Algorithm.md#function-do-save)


### function do\_solve 


```cpp
virtual void sdm::AlphaStar::do_solve () 
```


Implements [*sdm::Algorithm::do\_solve*](classsdm_1_1Algorithm.md#function-do-solve)


### function do\_stop 


```cpp
bool sdm::AlphaStar::do_stop (
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
virtual void sdm::AlphaStar::do_test () 
```


Implements [*sdm::Algorithm::do\_test*](classsdm_1_1Algorithm.md#function-do-test)


### function getBound 


```cpp
std::shared_ptr< ValueFunction > sdm::AlphaStar::getBound () const
```



### function getResult 


```cpp
virtual double sdm::AlphaStar::getResult () 
```


Implements [*sdm::Algorithm::getResult*](classsdm_1_1Algorithm.md#function-getresult)


### function getTrial 


```cpp
inline virtual int sdm::AlphaStar::getTrial () 
```


Implements [*sdm::Algorithm::getTrial*](classsdm_1_1Algorithm.md#function-gettrial)


### function getptr 


```cpp
std::shared_ptr< AlphaStar > sdm::AlphaStar::getptr () 
```



### function initLogger 


```cpp
void sdm::AlphaStar::initLogger () 
```



### function saveResults 


```cpp
void sdm::AlphaStar::saveResults (
    std::string filename,
    double other
) 
```



### function updateTime 


```cpp
void sdm::AlphaStar::updateTime (
    std::chrono::high_resolution_clock::time_point start_time,
    std::string information
) 
```


## Public Static Functions Documentation


### function compare 


```cpp
static inline bool sdm::AlphaStar::compare (
    const std::shared_ptr< AlphaStarItem > & item_1,
    const std::shared_ptr< AlphaStarItem > & item_2
) 
```




**Parameters:**


* `item_1` the first item 
* `item_2` the second item 



        
## Protected Attributes Documentation


### variable FSet 


```cpp
std::vector<std::shared_ptr<AlphaStarItem> > sdm::AlphaStar::FSet;
```



### variable bound\_ 


```cpp
std::shared_ptr<TabularValueFunction> sdm::AlphaStar::bound_;
```



### variable current\_time 


```cpp
std::chrono::high_resolution_clock::time_point sdm::AlphaStar::current_time;
```



### variable duration 


```cpp
double sdm::AlphaStar::duration;
```



### variable logger\_ 


```cpp
std::shared_ptr<MultiLogger> sdm::AlphaStar::logger_;
```



### variable map\_element\_to\_alpha\_item 


```cpp
std::vector<std::unordered_map<std::shared_ptr<State>,std::shared_ptr<AlphaStarItem> > > sdm::AlphaStar::map_element_to_alpha_item;
```



### variable name\_ 


```cpp
std::string sdm::AlphaStar::name_;
```



### variable openSet 


```cpp
std::vector<std::shared_ptr<AlphaStarItem> > sdm::AlphaStar::openSet;
```



### variable planning\_horizon\_ 


```cpp
number sdm::AlphaStar::planning_horizon_;
```



### variable start\_state 


```cpp
std::shared_ptr<State> sdm::AlphaStar::start_state;
```



### variable start\_time 


```cpp
std::chrono::high_resolution_clock::time_point sdm::AlphaStar::start_time;
```



### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::AlphaStar::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/alpha_star.hpp`