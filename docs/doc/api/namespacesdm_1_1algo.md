
# Namespace sdm::algo

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**algo**](namespacesdm_1_1algo.md)



_Namespace grouping functions to manipulate algorithms._ 
















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::string &gt; | [**available**](namespacesdm_1_1algo.md#function-available) () <br>_Get the list of available algorithms._  |
|  std::shared\_ptr&lt; [**Algorithm**](classsdm_1_1Algorithm.md) &gt; | [**make**](namespacesdm_1_1algo.md#function-make) (std::string algo\_name, std::string problem\_path, std::string formalism, std::string upper\_bound, std::string lower\_bound, std::string ub\_init, std::string lb\_init, double discount=0.99, double error=0.001, [**number**](namespacesdm.md#typedef-number) horizon=0, int trials=1000, int truncation=-1, std::string name="", double time\_max=5000, std::string current\_type\_of\_resolution="BigM", [**number**](namespacesdm.md#typedef-number) BigM=100, std::string type\_sawtooth\_linear\_programming="Full", [**TypeOfMaxPlanPrunning**](namespacesdm.md#enum-typeofmaxplanprunning) type\_of\_maxplan\_prunning=TypeOfMaxPlanPrunning::PAIRWISE, int freq\_prunning\_lower\_bound=-1, [**TypeOfSawtoothPrunning**](namespacesdm.md#enum-typeofsawtoothprunning) type\_of\_sawtooth\_pruning=TypeOfSawtoothPrunning::NONE, int freq\_prunning\_upper\_bound=-1, bool compression=true, bool store\_action=true, bool store\_state=true, [**number**](namespacesdm.md#typedef-number) batch\_size=0) <br>_Build an algorithm given his name and the configurations required._  |
|  std::shared\_ptr&lt; [**Algorithm**](classsdm_1_1Algorithm.md) &gt; | [**makeAlgorithm**](namespacesdm_1_1algo.md#function-makealgorithm) (std::string algo\_name, std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; formalism\_problem, std::string formalism\_name, std::string upper\_bound, std::string lower\_bound, std::string ub\_init, std::string lb\_init, double discount, double error, int trials, std::string name, double time\_max, std::string current\_type\_of\_resolution, [**number**](namespacesdm.md#typedef-number) BigM, std::string type\_sawtooth\_linear\_programming, [**TypeOfMaxPlanPrunning**](namespacesdm.md#enum-typeofmaxplanprunning) type\_of\_maxplan\_prunning, int freq\_prunning\_lower\_bound, [**TypeOfSawtoothPrunning**](namespacesdm.md#enum-typeofsawtoothprunning) type\_of\_sawtooth\_pruning, int freq\_prunning\_upper\_bound, bool store\_action, bool store\_state) <br>_Build an algorithm._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**makeFormalism**](namespacesdm_1_1algo.md#function-makeformalism) (std::string problem\_path, std::string formalism, double discount, [**number**](namespacesdm.md#typedef-number) horizon, int truncation, bool compression, bool store\_action, bool store\_state, [**number**](namespacesdm.md#typedef-number) batch\_size) <br>_Build a problem._  |
|  std::shared\_ptr&lt; [**sdm::HSVI**](classsdm_1_1HSVI.md) &gt; | [**makeHSVI**](namespacesdm_1_1algo.md#function-makehsvi) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; problem, std::string upper\_bound\_name, std::string lower\_bound\_name, std::string ub\_init\_name, std::string lb\_init\_name, double discount=0.99, double error=0.01, [**number**](namespacesdm.md#typedef-number) horizon=0, int trials=1000, std::string name="", double time\_max=5000, std::string current\_type\_of\_resolution="BigM", [**number**](namespacesdm.md#typedef-number) BigM=100, std::string type\_sawtooth\_linear\_programming="Full", [**TypeOfMaxPlanPrunning**](namespacesdm.md#enum-typeofmaxplanprunning) type\_of\_maxplan\_prunning=TypeOfMaxPlanPrunning::PAIRWISE, int freq\_prunning\_lower\_bound=-1, [**TypeOfSawtoothPrunning**](namespacesdm.md#enum-typeofsawtoothprunning) type\_of\_sawtooth\_pruning=TypeOfSawtoothPrunning::NONE, int freq\_prunning\_upper\_bound=-1, bool store\_action=true, bool store\_state=true) <br>_Build_ [_**HSVI**_](classsdm_1_1HSVI.md) _algorithm._ |
|  std::shared\_ptr&lt; [**sdm::QLearning**](classsdm_1_1QLearning.md)&lt;&gt; &gt; | [**makeQLearning**](namespacesdm_1_1algo.md#function-makeqlearning) (std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; problem, [**number**](namespacesdm.md#typedef-number) horizon=0, double discount=0.9, double lr=0.01, double batch\_size=1, unsigned long num\_episodes=10000, std::string name="qlearning") <br>_Build_ [_**QLearning**_](classsdm_1_1QLearning.md) _algorithm._ |
|  std::shared\_ptr&lt; [**sdm::ValueIteration**](classsdm_1_1ValueIteration.md) &gt; | [**makeValueIteration**](namespacesdm_1_1algo.md#function-makevalueiteration) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; problem, double error, [**number**](namespacesdm.md#typedef-number) horizon) <br>_Build the_ [_**ValueIteration**_](classsdm_1_1ValueIteration.md) _version that use TabularValueFunction Representation._ |








## Public Functions Documentation


### function available 


```cpp
std::vector< std::string > sdm::algo::available () 
```


Usage: 
````cpp
#include <sdm/algorithms.hpp>

int main() 
{
    std::cout << sdm::algo::available() << std::endl;
    return 0;
}
````





**Returns:**

the list of available algorithms. 




        

### function make 


```cpp
std::shared_ptr< Algorithm > sdm::algo::make (
    std::string algo_name,
    std::string problem_path,
    std::string formalism,
    std::string upper_bound,
    std::string lower_bound,
    std::string ub_init,
    std::string lb_init,
    double discount=0.99,
    double error=0.001,
    number horizon=0,
    int trials=1000,
    int truncation=-1,
    std::string name="",
    double time_max=5000,
    std::string current_type_of_resolution="BigM",
    number BigM=100,
    std::string type_sawtooth_linear_programming="Full",
    TypeOfMaxPlanPrunning type_of_maxplan_prunning=TypeOfMaxPlanPrunning::PAIRWISE,
    int freq_prunning_lower_bound=-1,
    TypeOfSawtoothPrunning type_of_sawtooth_pruning=TypeOfSawtoothPrunning::NONE,
    int freq_prunning_upper_bound=-1,
    bool compression=true,
    bool store_action=true,
    bool store_state=true,
    number batch_size=0
) 
```




**Template parameters:**


* `TState` Type of the state. 
* `TAction` Type of the action. 



**Parameters:**


* `algo_name` the name of the algorithm to be built 
* `problem_path` the path to the problem to be solved 
* `formalism` the name of the formalism to consider to solve the problem 
* `upper_bound` a string describing the upper bound 
* `upper_bound` a string describing the lower bound 
* `ub_init` a string describing the way to initialize the upper bound 
* `lb_init` a string describing the way to initialize the lower bound 
* `discount` the discount factor 
* `error` the accuracy 
* `horizon` the planning horizon 
* `trials` the maximum number of trials 
* `truncation` if greater than 0, specify the max size of the history 
* `batch_size` for learning algorithms only 



**Returns:**

pointer on algorithm instance 




        

### function makeAlgorithm 


```cpp
std::shared_ptr< Algorithm > sdm::algo::makeAlgorithm (
    std::string algo_name,
    std::shared_ptr< SolvableByHSVI > formalism_problem,
    std::string formalism_name,
    std::string upper_bound,
    std::string lower_bound,
    std::string ub_init,
    std::string lb_init,
    double discount,
    double error,
    int trials,
    std::string name,
    double time_max,
    std::string current_type_of_resolution,
    number BigM,
    std::string type_sawtooth_linear_programming,
    TypeOfMaxPlanPrunning type_of_maxplan_prunning,
    int freq_prunning_lower_bound,
    TypeOfSawtoothPrunning type_of_sawtooth_pruning,
    int freq_prunning_upper_bound,
    bool store_action,
    bool store_state
) 
```



### function makeFormalism 


```cpp
std::shared_ptr< SolvableByHSVI > sdm::algo::makeFormalism (
    std::string problem_path,
    std::string formalism,
    double discount,
    number horizon,
    int truncation,
    bool compression,
    bool store_action,
    bool store_state,
    number batch_size
) 
```



### function makeHSVI 


```cpp
std::shared_ptr< sdm::HSVI > sdm::algo::makeHSVI (
    std::shared_ptr< SolvableByHSVI > problem,
    std::string upper_bound_name,
    std::string lower_bound_name,
    std::string ub_init_name,
    std::string lb_init_name,
    double discount=0.99,
    double error=0.01,
    number horizon=0,
    int trials=1000,
    std::string name="",
    double time_max=5000,
    std::string current_type_of_resolution="BigM",
    number BigM=100,
    std::string type_sawtooth_linear_programming="Full",
    TypeOfMaxPlanPrunning type_of_maxplan_prunning=TypeOfMaxPlanPrunning::PAIRWISE,
    int freq_prunning_lower_bound=-1,
    TypeOfSawtoothPrunning type_of_sawtooth_pruning=TypeOfSawtoothPrunning::NONE,
    int freq_prunning_upper_bound=-1,
    bool store_action=true,
    bool store_state=true
) 
```



### function makeQLearning 


```cpp
std::shared_ptr< sdm::QLearning <> > sdm::algo::makeQLearning (
    std::shared_ptr< GymInterface > problem,
    number horizon=0,
    double discount=0.9,
    double lr=0.01,
    double batch_size=1,
    unsigned long num_episodes=10000,
    std::string name="qlearning"
) 
```



### function makeValueIteration 


```cpp
std::shared_ptr< sdm::ValueIteration > sdm::algo::makeValueIteration (
    std::shared_ptr< SolvableByHSVI > problem,
    double error,
    number horizon
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms.hpp`