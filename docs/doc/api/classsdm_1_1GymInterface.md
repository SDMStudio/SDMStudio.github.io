
<NavBar active_item_id="2"/>

# Class sdm::GymInterface

**template &lt;typename TObsSpace, typename TActSpace&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**GymInterface**](classsdm_1_1GymInterface.md)



_Provides a Gym like interface._ 

* `#include <gym_interface.hpp>`



Inherits the following classes: [sdm::World](classsdm_1_1World.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**GymInterface**](classsdm_1_1GymInterface.md#function-gyminterface) (std::shared\_ptr&lt; TObsSpace &gt;, std::shared\_ptr&lt; TActSpace &gt;) <br> |
|  std::shared\_ptr&lt; TActSpace &gt; | [**getActionSpace**](classsdm_1_1GymInterface.md#function-getactionspace) () const<br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**getObsSpace**](classsdm_1_1GymInterface.md#function-getobsspace) () const<br> |
| virtual [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type) | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br> |
| virtual std::tuple&lt; [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type), std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) ([**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type) a) = 0<br> |




## Protected Types

| Type | Name |
| ---: | :--- |
| typedef typename TActSpace::value\_type | [**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type)  <br> |
| typedef typename TObsSpace::value\_type | [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type)  <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; TActSpace &gt; | [**action\_space\_**](classsdm_1_1GymInterface.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**observation\_space\_**](classsdm_1_1GymInterface.md#variable-observation-space-)  <br> |

## Protected Attributes inherited from sdm::World

See [sdm::World](classsdm_1_1World.md)

| Type | Name |
| ---: | :--- |
|  [**state**](namespacesdm.md#typedef-state) | [**internal**](classsdm_1_1World.md#variable-internal)   = = 0<br> |







## Public Functions Documentation


### function GymInterface 


```cpp
sdm::GymInterface::GymInterface (
    std::shared_ptr< TObsSpace >,
    std::shared_ptr< TActSpace >
) 
```



### function getActionSpace 


```cpp
std::shared_ptr< TActSpace > sdm::GymInterface::getActionSpace () const
```



### function getObsSpace 


```cpp
std::shared_ptr< TObsSpace > sdm::GymInterface::getObsSpace () const
```



### function reset 


```cpp
virtual observation_type sdm::GymInterface::reset () = 0
```



### function step 


```cpp
virtual std::tuple< observation_type , std::vector< double >, bool > sdm::GymInterface::step (
    action_type a
) = 0
```


## Protected Types Documentation


### typedef action\_type 


```cpp
using sdm::GymInterface< TObsSpace, TActSpace >::action_type =  typename TActSpace::value_type;
```



### typedef observation\_type 


```cpp
using sdm::GymInterface< TObsSpace, TActSpace >::observation_type =  typename TObsSpace::value_type;
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<TActSpace> sdm::GymInterface< TObsSpace, TActSpace >::action_space_;
```



### variable observation\_space\_ 


```cpp
std::shared_ptr<TObsSpace> sdm::GymInterface< TObsSpace, TActSpace >::observation_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/gym_interface.hpp`