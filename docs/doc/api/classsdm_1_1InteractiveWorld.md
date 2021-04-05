
<NavBar active_item_id="2"/>

# Class sdm::InteractiveWorld

**template &lt;typename TDecProcess typename TDecProcess&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md)





* `#include <interactive_world.hpp>`



Inherits the following classes: [sdm::GymInterface](classsdm_1_1GymInterface.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename TDecProcess::action\_space\_type | [**action\_space\_type**](classsdm_1_1InteractiveWorld.md#typedef-action-space-type)  <br> |
| typedef typename action\_space\_type::value\_type | [**action\_type**](classsdm_1_1InteractiveWorld.md#typedef-action-type)  <br> |
| typedef typename TDecProcess::observation\_space\_type | [**observation\_space\_type**](classsdm_1_1InteractiveWorld.md#typedef-observation-space-type)  <br> |
| typedef typename observation\_space\_type::value\_type | [**observation\_type**](classsdm_1_1InteractiveWorld.md#typedef-observation-type)  <br> |












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md#function-interactiveworld-1-3) (std::shared\_ptr&lt; TDecProcess &gt;) <br> |
|   | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md#function-interactiveworld-2-3) (const TDecProcess &) <br> |
|   | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md#function-interactiveworld-3-3) (const std::string &) <br> |
| virtual [**observation\_type**](classsdm_1_1InteractiveWorld.md#typedef-observation-type) | [**reset**](classsdm_1_1InteractiveWorld.md#function-reset) () <br> |
|  std::tuple&lt; [**observation\_type**](classsdm_1_1InteractiveWorld.md#typedef-observation-type), std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1InteractiveWorld.md#function-step) ([**action\_type**](classsdm_1_1InteractiveWorld.md#typedef-action-type) ja) <br> |

## Public Functions inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
|   | [**GymInterface**](classsdm_1_1GymInterface.md#function-gyminterface) (std::shared\_ptr&lt; TObsSpace &gt;, std::shared\_ptr&lt; TActSpace &gt;) <br> |
|  std::shared\_ptr&lt; TActSpace &gt; | [**getActionSpace**](classsdm_1_1GymInterface.md#function-getactionspace) () const<br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**getObsSpace**](classsdm_1_1GymInterface.md#function-getobsspace) () const<br> |
| virtual [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type) | [**reset**](classsdm_1_1GymInterface.md#function-reset) () = 0<br> |
| virtual std::tuple&lt; [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type), std::vector&lt; double &gt;, bool &gt; | [**step**](classsdm_1_1GymInterface.md#function-step) ([**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type) a) = 0<br> |






## Protected Types inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
| typedef typename TActSpace::value\_type | [**action\_type**](classsdm_1_1GymInterface.md#typedef-action-type)  <br> |
| typedef typename TObsSpace::value\_type | [**observation\_type**](classsdm_1_1GymInterface.md#typedef-observation-type)  <br> |





## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**ctimestep\_**](classsdm_1_1InteractiveWorld.md#variable-ctimestep-)   = = 0<br>_The current timestep._  |
|  std::shared\_ptr&lt; TDecProcess &gt; | [**internal\_formalism\_**](classsdm_1_1InteractiveWorld.md#variable-internal-formalism-)  <br> |

## Protected Attributes inherited from sdm::GymInterface

See [sdm::GymInterface](classsdm_1_1GymInterface.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; TActSpace &gt; | [**action\_space\_**](classsdm_1_1GymInterface.md#variable-action-space-)  <br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**observation\_space\_**](classsdm_1_1GymInterface.md#variable-observation-space-)  <br> |

## Protected Attributes inherited from sdm::World

See [sdm::World](classsdm_1_1World.md)

| Type | Name |
| ---: | :--- |
|  [**state**](namespacesdm.md#typedef-state) | [**internal**](classsdm_1_1World.md#variable-internal)   = = 0<br> |










## Public Types Documentation


### typedef action\_space\_type 


```cpp
using sdm::InteractiveWorld< TDecProcess >::action_space_type =  typename TDecProcess::action_space_type;
```



### typedef action\_type 


```cpp
using sdm::InteractiveWorld< TDecProcess >::action_type =  typename action_space_type::value_type;
```



### typedef observation\_space\_type 


```cpp
using sdm::InteractiveWorld< TDecProcess >::observation_space_type =  typename TDecProcess::observation_space_type;
```



### typedef observation\_type 


```cpp
using sdm::InteractiveWorld< TDecProcess >::observation_type =  typename observation_space_type::value_type;
```


## Public Functions Documentation


### function InteractiveWorld [1/3]


```cpp
sdm::InteractiveWorld::InteractiveWorld (
    std::shared_ptr< TDecProcess >
) 
```




**Parameters:**


* `intern_formalism` problem to interact with 



        

### function InteractiveWorld [2/3]


```cpp
sdm::InteractiveWorld::InteractiveWorld (
    const TDecProcess &
) 
```



### function InteractiveWorld [3/3]


```cpp
sdm::InteractiveWorld::InteractiveWorld (
    const std::string &
) 
```



### function reset 


```cpp
virtual observation_type sdm::InteractiveWorld::reset () 
```


Implements [*sdm::GymInterface::reset*](classsdm_1_1GymInterface.md#function-reset)


### function step 


```cpp
std::tuple< observation_type , std::vector< double >, bool > sdm::InteractiveWorld::step (
    action_type ja
) 
```


## Protected Attributes Documentation


### variable ctimestep\_ 


```cpp
number sdm::InteractiveWorld< TDecProcess >::ctimestep_;
```



### variable internal\_formalism\_ 


```cpp
std::shared_ptr<TDecProcess> sdm::InteractiveWorld< TDecProcess >::internal_formalism_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/interactive_world.hpp`