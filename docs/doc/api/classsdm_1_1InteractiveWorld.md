
# Class sdm::InteractiveWorld

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md)





* `#include <interactive_world_base.hpp>`



Inherits the following classes: [sdm::GymInterface](classsdm_1_1GymInterface.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md#function-interactiveworld) (const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & world) <br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1GymInterface.md#function-getactionspaceat) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the action space._  |
| virtual std::shared\_ptr&lt; Action &gt; | [**getRandomAction**](classsdm_1_1GymInterface.md#function-getrandomaction) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get random action._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br>_Reset the environment and return initial observation._  |
| virtual std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) (std::shared\_ptr&lt; Action &gt; action) = 0<br>_Do a step on the environment._  |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; | [**world**](classsdm_1_1InteractiveWorld.md#variable-world)  <br> |








## Public Functions Documentation


### function InteractiveWorld 


```cpp
sdm::InteractiveWorld::InteractiveWorld (
    const std::shared_ptr< MDPInterface > & world
) 
```


## Protected Attributes Documentation


### variable world 


```cpp
std::shared_ptr<MDPInterface> sdm::InteractiveWorld::world;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/base/interactive_world_base.hpp`