
# Class sdm::QLearning

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput class TInput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**QLearning**](classsdm_1_1QLearning.md)



_Q-Learning and its extensions (DQN, etc)._ 

* `#include <q_learning.hpp>`



Inherits the following classes: [sdm::Algorithm](classsdm_1_1Algorithm.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**QLearning**](classsdm_1_1QLearning.md#function-qlearning) (std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; & env, std::shared\_ptr&lt; [**ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md) &gt; experience\_memory, std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; q\_value\_table, std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt;&gt; q\_value\_table\_target, std::shared\_ptr&lt; [**QValueBackupInterface**](classsdm_1_1QValueBackupInterface.md) &gt; backup, std::shared\_ptr&lt; [**EpsGreedy**](classsdm_1_1EpsGreedy.md) &gt; exploration, [**number**](namespacesdm.md#typedef-number) horizon, double discount=0.9, double lr=0.001, double smooth=0.99, unsigned long num\_episodes=10000, std::string name="qlearning") <br> |
|  void | [**do\_episode**](classsdm_1_1QLearning.md#function-do-episode) () <br>_Execute an episode._  |
| virtual void | [**do\_initialize**](classsdm_1_1QLearning.md#function-do-initialize) () <br>_Initialize the algorithm. Initialize the Q-Value function._  |
| virtual void | [**do\_save**](classsdm_1_1QLearning.md#function-do-save) () <br>_Save the value function._  |
| virtual void | [**do\_solve**](classsdm_1_1QLearning.md#function-do-solve) () <br>_Learning procedure. Will attempt to solve the problem._  |
|  void | [**do\_step**](classsdm_1_1QLearning.md#function-do-step) () <br>_Execute a step._  |
| virtual void | [**do\_test**](classsdm_1_1QLearning.md#function-do-test) () <br>_Test the result of a problem._  |
| virtual double | [**getResult**](classsdm_1_1QLearning.md#function-getresult) () <br> |
|  double | [**getResultOpti**](classsdm_1_1QLearning.md#function-getresultopti) () <br> |
| virtual int | [**getTrial**](classsdm_1_1QLearning.md#function-gettrial) () <br> |
|  void | [**initLogger**](classsdm_1_1QLearning.md#function-initlogger) () <br> |
|  std::shared\_ptr&lt; Action &gt; | [**select\_action**](classsdm_1_1QLearning.md#function-select-action) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  std::shared\_ptr&lt; Action &gt; | [**select\_greedy\_action**](classsdm_1_1QLearning.md#function-select-greedy-action) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  void | [**update\_model**](classsdm_1_1QLearning.md#function-update-model) () <br>_Update the q-value functions based on the memory/experience._  |
|  void | [**update\_target**](classsdm_1_1QLearning.md#function-update-target) () <br>_Update the target model._  |

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
|  double | [**E\_R**](classsdm_1_1QLearning.md#variable-e-r)  <br> |
|  double | [**R**](classsdm_1_1QLearning.md#variable-r)  <br> |
|  std::shared\_ptr&lt; [**QValueBackupInterface**](classsdm_1_1QValueBackupInterface.md) &gt; | [**backup\_**](classsdm_1_1QLearning.md#variable-backup-)  <br> |
|  double | [**discount\_**](classsdm_1_1QLearning.md#variable-discount-)  <br> |
|  std::shared\_ptr&lt; [**GymInterface**](classsdm_1_1GymInterface.md) &gt; | [**env\_**](classsdm_1_1QLearning.md#variable-env-)  <br>_The problem to be solved._  |
|  unsigned long | [**episode**](classsdm_1_1QLearning.md#variable-episode)  <br> |
|  std::shared\_ptr&lt; [**ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md) &gt; | [**experience\_memory\_**](classsdm_1_1QLearning.md#variable-experience-memory-)  <br>_The experience memory._  |
|  std::shared\_ptr&lt; [**EpsGreedy**](classsdm_1_1EpsGreedy.md) &gt; | [**exploration\_process**](classsdm_1_1QLearning.md#variable-exploration-process)  <br>_The exploration process._  |
|  unsigned long | [**global\_step**](classsdm_1_1QLearning.md#variable-global-step)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1QLearning.md#variable-horizon-)  <br>_Some hyperparameters for the algorithm._  |
|  std::shared\_ptr&lt; [**MultiLogger**](classsdm_1_1MultiLogger.md) &gt; | [**logger\_**](classsdm_1_1QLearning.md#variable-logger-)  <br>_The logger._  |
|  double | [**lr\_**](classsdm_1_1QLearning.md#variable-lr-)  <br> |
|  std::string | [**name\_**](classsdm_1_1QLearning.md#variable-name-)   = = "qlearning"<br> |
|  unsigned long | [**num\_episodes\_**](classsdm_1_1QLearning.md#variable-num-episodes-)  <br> |
|  std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt; &gt; | [**q\_value\_table\_**](classsdm_1_1QLearning.md#variable-q-value-table-)  <br>_Q-value function._  |
|  std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt; TInput &gt; &gt; | [**q\_value\_table\_target\_**](classsdm_1_1QLearning.md#variable-q-value-table-target-)  <br>_Q-value target function._  |
|  std::vector&lt; double &gt; | [**rewards\_**](classsdm_1_1QLearning.md#variable-rewards-)  <br> |
|  double | [**smooth\_**](classsdm_1_1QLearning.md#variable-smooth-)  <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**step**](classsdm_1_1QLearning.md#variable-step)  <br> |








## Public Functions Documentation


### function QLearning 


```cpp
sdm::QLearning::QLearning (
    std::shared_ptr< GymInterface > & env,
    std::shared_ptr< ExperienceMemoryInterface > experience_memory,
    std::shared_ptr< QValueFunction < TInput >> q_value_table,
    std::shared_ptr< QValueFunction < TInput >> q_value_table_target,
    std::shared_ptr< QValueBackupInterface > backup,
    std::shared_ptr< EpsGreedy > exploration,
    number horizon,
    double discount=0.9,
    double lr=0.001,
    double smooth=0.99,
    unsigned long num_episodes=10000,
    std::string name="qlearning"
) 
```



### function do\_episode 


```cpp
void sdm::QLearning::do_episode () 
```



### function do\_initialize 


```cpp
virtual void sdm::QLearning::do_initialize () 
```


Implements [*sdm::Algorithm::do\_initialize*](classsdm_1_1Algorithm.md#function-do-initialize)


### function do\_save 


```cpp
virtual void sdm::QLearning::do_save () 
```


Implements [*sdm::Algorithm::do\_save*](classsdm_1_1Algorithm.md#function-do-save)


### function do\_solve 


```cpp
virtual void sdm::QLearning::do_solve () 
```


Implements [*sdm::Algorithm::do\_solve*](classsdm_1_1Algorithm.md#function-do-solve)


### function do\_step 


```cpp
void sdm::QLearning::do_step () 
```



### function do\_test 


```cpp
virtual void sdm::QLearning::do_test () 
```


Implements [*sdm::Algorithm::do\_test*](classsdm_1_1Algorithm.md#function-do-test)


### function getResult 


```cpp
inline virtual double sdm::QLearning::getResult () 
```


Implements [*sdm::Algorithm::getResult*](classsdm_1_1Algorithm.md#function-getresult)


### function getResultOpti 


```cpp
inline double sdm::QLearning::getResultOpti () 
```



### function getTrial 


```cpp
inline virtual int sdm::QLearning::getTrial () 
```


Implements [*sdm::Algorithm::getTrial*](classsdm_1_1Algorithm.md#function-gettrial)


### function initLogger 


```cpp
void sdm::QLearning::initLogger () 
```



### function select\_action 


```cpp
std::shared_ptr< Action > sdm::QLearning::select_action (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```



### function select\_greedy\_action 


```cpp
std::shared_ptr< Action > sdm::QLearning::select_greedy_action (
    const std::shared_ptr< Observation > & observation,
    number t
) 
```



### function update\_model 


```cpp
void sdm::QLearning::update_model () 
```



### function update\_target 


```cpp
void sdm::QLearning::update_target () 
```


## Protected Attributes Documentation


### variable E\_R 


```cpp
double sdm::QLearning< TInput >::E_R;
```



### variable R 


```cpp
double sdm::QLearning< TInput >::R;
```



### variable backup\_ 


```cpp
std::shared_ptr<QValueBackupInterface> sdm::QLearning< TInput >::backup_;
```



### variable discount\_ 


```cpp
double sdm::QLearning< TInput >::discount_;
```



### variable env\_ 


```cpp
std::shared_ptr<GymInterface> sdm::QLearning< TInput >::env_;
```



### variable episode 


```cpp
unsigned long sdm::QLearning< TInput >::episode;
```



### variable experience\_memory\_ 


```cpp
std::shared_ptr<ExperienceMemoryInterface> sdm::QLearning< TInput >::experience_memory_;
```



### variable exploration\_process 


```cpp
std::shared_ptr<EpsGreedy> sdm::QLearning< TInput >::exploration_process;
```



### variable global\_step 


```cpp
unsigned long sdm::QLearning< TInput >::global_step;
```



### variable horizon\_ 


```cpp
number sdm::QLearning< TInput >::horizon_;
```



### variable logger\_ 


```cpp
std::shared_ptr<MultiLogger> sdm::QLearning< TInput >::logger_;
```



### variable lr\_ 


```cpp
double sdm::QLearning< TInput >::lr_;
```



### variable name\_ 


```cpp
std::string sdm::QLearning< TInput >::name_;
```



### variable num\_episodes\_ 


```cpp
unsigned long sdm::QLearning< TInput >::num_episodes_;
```



### variable q\_value\_table\_ 


```cpp
std::shared_ptr<QValueFunction<TInput> > sdm::QLearning< TInput >::q_value_table_;
```



### variable q\_value\_table\_target\_ 


```cpp
std::shared_ptr<QValueFunction<TInput> > sdm::QLearning< TInput >::q_value_table_target_;
```



### variable rewards\_ 


```cpp
std::vector<double> sdm::QLearning< TInput >::rewards_;
```



### variable smooth\_ 


```cpp
double sdm::QLearning< TInput >::smooth_;
```



### variable step 


```cpp
number sdm::QLearning< TInput >::step;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/q_learning.hpp`