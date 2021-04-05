
<NavBar active_item_id="2"/>

# Class sdm::QLearning

**template &lt;typename TState typename TState, typename TAction typename TAction, typename TObservation typename TObservation&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**QLearning**](classsdm_1_1QLearning.md)



[More...](#detailed-description)

* `#include <q_learning.hpp>`



Inherits the following classes: [sdm::LearningAlgo](classsdm_1_1LearningAlgo.md)




















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**QLearning**](classsdm_1_1QLearning.md#function-qlearning-1-2) ([**number**](namespacesdm.md#typedef-number) trials, std::string results) <br>_Construct a new_ [_**QLearning**_](classsdm_1_1QLearning.md) _object._ |
|   | [**QLearning**](classsdm_1_1QLearning.md#function-qlearning-2-2) (std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; & env, std::shared\_ptr&lt; QValueFunction&lt; TState, TAction &gt;&gt; value, std::shared\_ptr&lt; QValueFunction&lt; TState, TAction &gt;&gt; target, [**number**](namespacesdm.md#typedef-number) planning\_horizon, double epsilon, [**number**](namespacesdm.md#typedef-number) num\_max\_trials=10000) <br>_Construct a new_ [_**QLearning**_](classsdm_1_1QLearning.md) _object._ |

## Public Functions inherited from sdm::LearningAlgo

See [sdm::LearningAlgo](classsdm_1_1LearningAlgo.md)

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
|  std::shared\_ptr&lt; QValueFunction&lt; TState, TAction &gt; &gt; | [**q\_target\_**](classsdm_1_1QLearning.md#variable-q-target-)  <br> |
|  std::shared\_ptr&lt; QValueFunction&lt; TState, TAction &gt; &gt; | [**q\_value\_**](classsdm_1_1QLearning.md#variable-q-value-)  <br>_Lower Bound representation._  |

## Protected Attributes inherited from sdm::LearningAlgo

See [sdm::LearningAlgo](classsdm_1_1LearningAlgo.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; | [**env\_**](classsdm_1_1LearningAlgo.md#variable-env-)  <br>_The problem to be solved._  |
|  [**number**](namespacesdm.md#typedef-number) | [**episode**](classsdm_1_1LearningAlgo.md#variable-episode)  <br> |
|  int | [**max\_trials**](classsdm_1_1LearningAlgo.md#variable-max-trials)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1LearningAlgo.md#variable-planning-horizon-)  <br> |
|  int | [**trial**](classsdm_1_1LearningAlgo.md#variable-trial)  <br>_Some variables for the algorithm._  |











# Detailed Description




**Template parameters:**


* `TState` 
* `TAction` 



    
## Public Functions Documentation


### function QLearning [1/2]


```cpp
sdm::QLearning::QLearning (
    number trials,
    std::string results
) 
```




**Parameters:**


* `trials` 
* `results` 



        

### function QLearning [2/2]


```cpp
sdm::QLearning::QLearning (
    std::shared_ptr< GymInterface > & env,
    std::shared_ptr< QValueFunction< TState, TAction >> value,
    std::shared_ptr< QValueFunction< TState, TAction >> target,
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



        
## Protected Attributes Documentation


### variable q\_target\_ 


```cpp
std::shared_ptr<QValueFunction<TState, TAction> > sdm::QLearning< TState, TAction, TObservation >::q_target_;
```



### variable q\_value\_ 


```cpp
std::shared_ptr<QValueFunction<TState, TAction> > sdm::QLearning< TState, TAction, TObservation >::q_value_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/algorithms/q_learning.hpp`