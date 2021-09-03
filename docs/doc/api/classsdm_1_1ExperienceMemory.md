
# Class sdm::ExperienceMemory

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ExperienceMemory**](classsdm_1_1ExperienceMemory.md)





* `#include <experience_memory.hpp>`



Inherits the following classes: [sdm::ExperienceMemoryInterface](classsdm_1_1ExperienceMemoryInterface.md)









## Public Types inherited from sdm::ExperienceMemoryInterface

See [sdm::ExperienceMemoryInterface](classsdm_1_1ExperienceMemoryInterface.md)

| Type | Name |
| ---: | :--- |
| typedef std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::shared\_ptr&lt; Action &gt;, double, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**sars\_transition**](classsdm_1_1ExperienceMemoryInterface.md#typedef-sars-transition)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ExperienceMemory**](classsdm_1_1ExperienceMemory.md#function-experiencememory) ([**number**](namespacesdm.md#typedef-number) horizon, int capacity=1) <br> |
| virtual void | [**push**](classsdm_1_1ExperienceMemory.md#function-push) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, const std::shared\_ptr&lt; Action &gt; & action, const double reward, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; Action &gt; & next\_action, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual std::vector&lt; [**sars\_transition**](namespacesdm.md#typedef-sars-transition) &gt; | [**sample**](classsdm_1_1ExperienceMemory.md#function-sample) ([**number**](namespacesdm.md#typedef-number) t, int n=1) <br> |
| virtual int | [**size**](classsdm_1_1ExperienceMemory.md#function-size) () <br> |

## Public Functions inherited from sdm::ExperienceMemoryInterface

See [sdm::ExperienceMemoryInterface](classsdm_1_1ExperienceMemoryInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**push**](classsdm_1_1ExperienceMemoryInterface.md#function-push) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, const std::shared\_ptr&lt; Action &gt; & action, const double reward, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; Action &gt; & next\_action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual std::vector&lt; [**sars\_transition**](classsdm_1_1ExperienceMemoryInterface.md#typedef-sars-transition) &gt; | [**sample**](classsdm_1_1ExperienceMemoryInterface.md#function-sample) ([**number**](namespacesdm.md#typedef-number) t, int n=1) = 0<br> |
| virtual int | [**size**](classsdm_1_1ExperienceMemoryInterface.md#function-size) () = 0<br> |
| virtual  | [**~ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md#function-experiencememoryinterface) () <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**capacity\_**](classsdm_1_1ExperienceMemory.md#variable-capacity-)  <br> |
|  std::vector&lt; std::vector&lt; [**sars\_transition**](namespacesdm.md#typedef-sars-transition) &gt; &gt; | [**experience\_memory\_**](classsdm_1_1ExperienceMemory.md#variable-experience-memory-)  <br> |
|  int | [**position**](classsdm_1_1ExperienceMemory.md#variable-position)  <br> |








## Public Functions Documentation


### function ExperienceMemory 


```cpp
sdm::ExperienceMemory::ExperienceMemory (
    number horizon,
    int capacity=1
) 
```



### function push 


```cpp
virtual void sdm::ExperienceMemory::push (
    const std::shared_ptr< Observation > & observation,
    const std::shared_ptr< Action > & action,
    const double reward,
    const std::shared_ptr< Observation > & next_observation,
    const std::shared_ptr< Action > & next_action,
    number t
) 
```


Implements [*sdm::ExperienceMemoryInterface::push*](classsdm_1_1ExperienceMemoryInterface.md#function-push)


### function sample 


```cpp
virtual std::vector< sars_transition > sdm::ExperienceMemory::sample (
    number t,
    int n=1
) 
```


Implements [*sdm::ExperienceMemoryInterface::sample*](classsdm_1_1ExperienceMemoryInterface.md#function-sample)


### function size 


```cpp
virtual int sdm::ExperienceMemory::size () 
```


Implements [*sdm::ExperienceMemoryInterface::size*](classsdm_1_1ExperienceMemoryInterface.md#function-size)

## Protected Attributes Documentation


### variable capacity\_ 


```cpp
int sdm::ExperienceMemory::capacity_;
```



### variable experience\_memory\_ 


```cpp
std::vector<std::vector<sars_transition> > sdm::ExperienceMemory::experience_memory_;
```



### variable position 


```cpp
int sdm::ExperienceMemory::position;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/rl/experience_memory.hpp`