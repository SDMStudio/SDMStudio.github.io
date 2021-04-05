
<NavBar active_item_id="2"/>

# Class sdm::InteractiveWorldBase

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**InteractiveWorldBase**](classsdm_1_1InteractiveWorldBase.md)





* `#include <interactive_world_base.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  TObservation | [**getInitialObservation**](classsdm_1_1InteractiveWorldBase.md#function-getinitialobservation) () <br> |
|  TObservation | [**nextObservation**](classsdm_1_1InteractiveWorldBase.md#function-nextobservation) () <br> |
|  void | [**setupDynamicsGenerator**](classsdm_1_1InteractiveWorldBase.md#function-setupdynamicsgenerator) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; TState, std::unordered\_map&lt; TAction, std::discrete\_distribution&lt; std::size\_t &gt; &gt; &gt; | [**dynamics\_generator**](classsdm_1_1InteractiveWorldBase.md#variable-dynamics-generator)  <br> |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::pair&lt; TState, TObservation &gt; &gt; | [**encoding**](classsdm_1_1InteractiveWorldBase.md#variable-encoding)  <br> |




## Public Functions Documentation


### function getInitialObservation 


```cpp
TObservation sdm::InteractiveWorldBase::getInitialObservation () 
```



### function nextObservation 


```cpp
TObservation sdm::InteractiveWorldBase::nextObservation () 
```



### function setupDynamicsGenerator 


```cpp
void sdm::InteractiveWorldBase::setupDynamicsGenerator () 
```


## Protected Attributes Documentation


### variable dynamics\_generator 


```cpp
std::unordered_map<TState, std::unordered_map<TAction, std::discrete_distribution<std::size_t> > > sdm::InteractiveWorldBase< TState, TAction >::dynamics_generator;
```



### variable encoding 


```cpp
std::unordered_map<number, std::pair<TState, TObservation> > sdm::InteractiveWorldBase< TState, TAction >::encoding;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/base/interactive_world_base.hpp`