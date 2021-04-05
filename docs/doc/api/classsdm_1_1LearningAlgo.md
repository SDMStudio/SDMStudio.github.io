
<NavBar active_item_id="2"/>

# Class sdm::LearningAlgo

**template &lt;typename TState typename TState, typename TAction typename TAction, typename TObservation typename TObservation&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**LearningAlgo**](classsdm_1_1LearningAlgo.md)





* `#include <learning_algo.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md)


Inherited by the following classes: [sdm::QLearning](classsdm_1_1QLearning.md)














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**LearningAlgo**](classsdm_1_1LearningAlgo.md#function-learningalgo-1-2) ([**number**](namespacesdm.md#typedef-number) trials, std::string results) <br> |
|   | [**LearningAlgo**](classsdm_1_1LearningAlgo.md#function-learningalgo-2-2) (std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; env, [**number**](namespacesdm.md#typedef-number) planning\_horizon, [**number**](namespacesdm.md#typedef-number) num\_max\_trials=10000) <br> |

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
|  std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; | [**env\_**](classsdm_1_1LearningAlgo.md#variable-env-)  <br>_The problem to be solved._  |
|  [**number**](namespacesdm.md#typedef-number) | [**episode**](classsdm_1_1LearningAlgo.md#variable-episode)  <br> |
|  int | [**max\_trials**](classsdm_1_1LearningAlgo.md#variable-max-trials)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1LearningAlgo.md#variable-planning-horizon-)  <br> |
|  int | [**trial**](classsdm_1_1LearningAlgo.md#variable-trial)  <br>_Some variables for the algorithm._  |








## Public Functions Documentation


### function LearningAlgo [1/2]


```cpp
sdm::LearningAlgo::LearningAlgo (
    number trials,
    std::string results
) 
```



### function LearningAlgo [2/2]


```cpp
sdm::LearningAlgo::LearningAlgo (
    std::shared_ptr< GymInterface > env,
    number planning_horizon,
    number num_max_trials=10000
) 
```


## Protected Attributes Documentation


### variable env\_ 


```cpp
std::shared_ptr<GymInterface> sdm::LearningAlgo< TState, TAction, TObservation >::env_;
```



### variable episode 


```cpp
number sdm::LearningAlgo< TState, TAction, TObservation >::episode;
```



### variable max\_trials 


```cpp
int sdm::LearningAlgo< TState, TAction, TObservation >::max_trials;
```



### variable planning\_horizon\_ 


```cpp
number sdm::LearningAlgo< TState, TAction, TObservation >::planning_horizon_;
```



### variable trial 


```cpp
int sdm::LearningAlgo< TState, TAction, TObservation >::trial;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/algorithms/learning_algo.hpp`