
# Class sdm::ExperienceMemoryInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md)





* `#include <experience_memory_interface.hpp>`





Inherited by the following classes: [sdm::ExperienceMemory](classsdm_1_1ExperienceMemory.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::tuple&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::shared\_ptr&lt; Action &gt;, double, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**sars\_transition**](classsdm_1_1ExperienceMemoryInterface.md#typedef-sars-transition)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**push**](classsdm_1_1ExperienceMemoryInterface.md#function-push) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, const std::shared\_ptr&lt; Action &gt; & action, const double reward, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & next\_observation, const std::shared\_ptr&lt; Action &gt; & next\_action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual std::vector&lt; [**sars\_transition**](classsdm_1_1ExperienceMemoryInterface.md#typedef-sars-transition) &gt; | [**sample**](classsdm_1_1ExperienceMemoryInterface.md#function-sample) ([**number**](namespacesdm.md#typedef-number) t, int n=1) = 0<br> |
| virtual int | [**size**](classsdm_1_1ExperienceMemoryInterface.md#function-size) () = 0<br> |
| virtual  | [**~ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md#function-experiencememoryinterface) () <br> |








## Public Types Documentation


### typedef sars\_transition 


```cpp
using sdm::ExperienceMemoryInterface::sars_transition =  std::tuple<std::shared_ptr<Observation>, std::shared_ptr<Action>, double, std::shared_ptr<Observation>, std::shared_ptr<Action> >;
```


## Public Functions Documentation


### function push 


```cpp
virtual void sdm::ExperienceMemoryInterface::push (
    const std::shared_ptr< Observation > & observation,
    const std::shared_ptr< Action > & action,
    const double reward,
    const std::shared_ptr< Observation > & next_observation,
    const std::shared_ptr< Action > & next_action,
    number t
) = 0
```



### function sample 


```cpp
virtual std::vector< sars_transition > sdm::ExperienceMemoryInterface::sample (
    number t,
    int n=1
) = 0
```



### function size 


```cpp
virtual int sdm::ExperienceMemoryInterface::size () = 0
```



### function ~ExperienceMemoryInterface 


```cpp
inline virtual sdm::ExperienceMemoryInterface::~ExperienceMemoryInterface () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/rl/experience_memory_interface.hpp`