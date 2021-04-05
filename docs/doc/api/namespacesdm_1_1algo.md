
<NavBar active_item_id="2"/>

# Namespace sdm::algo


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**algo**](namespacesdm_1_1algo.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::string &gt; | [**available**](namespacesdm_1_1algo.md#function-available) () <br>_Get all available algorithms._  |
|  std::shared\_ptr&lt; [**Algorithm**](classsdm_1_1Algorithm.md) &gt; | [**make**](namespacesdm_1_1algo.md#function-make) (std::string algo\_name, std::string problem\_path, std::string formalism, std::string ub\_init, std::string lb\_init, double discount=0.99, double error=0.001, int horizon=0, int trials=1000, std::string name="") <br>_Build an algorithm given his name and the configurations required._  |
|  std::shared\_ptr&lt; [**sdm::HSVI**](classsdm_1_1HSVI.md)&lt; TState, TAction &gt; &gt; | [**makeMappedHSVI**](namespacesdm_1_1algo.md#function-makemappedhsvi) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt;&gt; problem, std::string ub\_init\_name, std::string lb\_init\_name, double discount, double error, int horizon, int trials, std::string name) <br>_Build the_ [_**HSVI**_](classsdm_1_1HSVI.md) _version that use_[_**TabularValueFunction**_](classsdm_1_1TabularValueFunction.md) _Representation._ |








## Public Functions Documentation


### function available 


```cpp
std::vector< std::string > sdm::algo::available () 
```




**Returns:**

the list of available algorithms. 




        

### function make 


```cpp
std::shared_ptr< Algorithm > sdm::algo::make (
    std::string algo_name,
    std::string problem_path,
    std::string formalism,
    std::string ub_init,
    std::string lb_init,
    double discount=0.99,
    double error=0.001,
    int horizon=0,
    int trials=1000,
    std::string name=""
) 
```




**Template parameters:**


* `TState` 
* `TAction` 



**Parameters:**


* `problem` 
* `discount` 
* `error` 
* `horizon` 
* `trials` 



**Returns:**

std::shared\_ptr&lt;sdm::HSVI&lt;TState, TAction&gt;&gt; 




**Template parameters:**


* `TState` Type of the state. 
* `TAction` Type of the action. 



**Parameters:**


* `algo_name` the name of the algorithm to be built\* 
* `problem` the problem to be solved 
* `discount` the discount factor 
* `error` the accuracy 
* `horizon` the planning horizon 
* `trials` the maximum number of trials 



**Returns:**

auto pointer on algorithm instance 




        

### function makeMappedHSVI 


```cpp
template<typename TState typename TState, typename TAction typename TAction>
std::shared_ptr< sdm::HSVI < TState, TAction > > sdm::algo::makeMappedHSVI (
    std::shared_ptr< SolvableByHSVI < TState, TAction >> problem,
    std::string ub_init_name,
    std::string lb_init_name,
    double discount,
    double error,
    int horizon,
    int trials,
    std::string name
) 
```




**Template parameters:**


* `TState` Type of the state. 
* `TAction` Type of the action. 



**Parameters:**


* `problem` the problem to be solved 
* `discount` the discount factor 
* `error` the accuracy 
* `horizon` the planning horizon 



**Returns:**

pointer on [**HSVI**](classsdm_1_1HSVI.md) instance 




        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/algorithms.hpp`