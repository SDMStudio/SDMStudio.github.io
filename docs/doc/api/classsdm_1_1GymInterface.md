
# Class sdm::GymInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**GymInterface**](classsdm_1_1GymInterface.md)





* `#include <gym_interface.hpp>`





Inherited by the following classes: [sdm::BaseBeliefMDP](classsdm_1_1BaseBeliefMDP.md),  [sdm::BaseBeliefMDP](classsdm_1_1BaseBeliefMDP.md),  [sdm::InteractiveWorld](classsdm_1_1InteractiveWorld.md),  [sdm::MDP](classsdm_1_1MDP.md),  [sdm::MDPInterface](classsdm_1_1MDPInterface.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |








## Public Functions Documentation


### function getActionSpaceAt 


```cpp
virtual std::shared_ptr< Space > sdm::GymInterface::getActionSpaceAt (
    const std::shared_ptr< Observation > & observation,
    number t
) = 0
```




**Parameters:**


* `observation` the observation in consideration 
* `t` time step 



**Returns:**

the action space. 




        

### function getRandomAction 


```cpp
virtual std::shared_ptr< Action > sdm::GymInterface::getRandomAction (
    const std::shared_ptr< Observation > & observation,
    number t
) = 0
```




**Parameters:**


* `observation` the observation in consideration. 
* `t` time step. 



**Returns:**

the random action. 




        

### function reset 


```cpp
virtual std::shared_ptr< Observation > sdm::GymInterface::reset () = 0
```




**Returns:**

the initial observation 




        

### function step 


```cpp
virtual std::tuple< std::shared_ptr< Observation >, std::vector< double >, bool > sdm::GymInterface::step (
    std::shared_ptr< Action > action
) = 0
```




**Parameters:**


* `action` the action to execute 



**Returns:**

the information produced. Include : next observation, rewards, episode done 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/world/gym_interface.hpp`