
<NavBar active_item_id="2"/>

# Class sdm::ValueFunctionFactory

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md)



_The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._[More...](#detailed-description)

* `#include <value_functions.hpp>`

















## Protected Types

| Type | Name |
| ---: | :--- |
| typedef std::map&lt; std::string, std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; \* | [**map\_type**](classsdm_1_1ValueFunctionFactory.md#typedef-map-type)  <br> |





## Protected Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**addToRegistry**](classsdm_1_1ValueFunctionFactory.md#function-addtoregistry) (std::string name) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**make**](classsdm_1_1ValueFunctionFactory.md#function-make) (std::string name) <br> |

# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Protected Types Documentation


### typedef map\_type 


```cpp
typedef std::map<std::string, std::shared_ptr<Initializer<TState, TAction> >* sdm::ValueFunctionFactory< TState, TAction >::map_type() { return registry_; } static std::vector< std::string > available(;
```


## Protected Static Functions Documentation


### function addToRegistry 


```cpp
template<template< typename TS, typename TA > class TValueFunction>
static inline void sdm::ValueFunctionFactory::addToRegistry (
    std::string name
) 
```



### function make 


```cpp
static inline std::shared_ptr< Initializer < TState, TAction > > sdm::ValueFunctionFactory::make (
    std::string name
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/value_functions.hpp`