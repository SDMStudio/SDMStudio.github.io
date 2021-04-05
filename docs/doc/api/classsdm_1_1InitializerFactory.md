
<NavBar active_item_id="2"/>

# Class sdm::InitializerFactory

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**InitializerFactory**](classsdm_1_1InitializerFactory.md)



_The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use :_
````cpp
std::cout << InitializerFactory<TState, TAction>::available() << std::endl;
````

 _._[More...](#detailed-description)

* `#include <initializers.hpp>`

















## Protected Types

| Type | Name |
| ---: | :--- |
| typedef std::map&lt; std::string, std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; \* | [**map\_type**](classsdm_1_1InitializerFactory.md#typedef-map-type)  <br> |





## Protected Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**addToRegistry**](classsdm_1_1InitializerFactory.md#function-addtoregistry) (std::string name) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**make**](classsdm_1_1InitializerFactory.md#function-make) (std::string name) <br> |

# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Protected Types Documentation


### typedef map\_type 


```cpp
typedef std::map<std::string, std::shared_ptr<Initializer<TState, TAction> >* sdm::InitializerFactory< TState, TAction >::map_type() { return registry_; } static std::vector< std::string > available(;
```


## Protected Static Functions Documentation


### function addToRegistry 


```cpp
template<template< typename TS, typename TA > class TInitializer>
static inline void sdm::InitializerFactory::addToRegistry (
    std::string name
) 
```



### function make 


```cpp
static inline std::shared_ptr< Initializer < TState, TAction > > sdm::InitializerFactory::make (
    std::string name
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializers.hpp`