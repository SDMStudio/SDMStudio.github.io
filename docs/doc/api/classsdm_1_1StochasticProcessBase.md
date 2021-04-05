
<NavBar active_item_id="2"/>

# Class sdm::StochasticProcessBase

**template &lt;typename TStateSpace, typename TDistrib&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md)



_This class is the base class for stochastic processes including StochasticProcess class and_ [_**DecisionProcess**_](classsdm_1_1DecisionProcess.md) _class. This class is usually used to have a base interface that provide required data structure as StateSpace._[More...](#detailed-description)

* `#include <stochastic_process_base.hpp>`





Inherited by the following classes: [sdm::DecisionProcessBase](classsdm_1_1DecisionProcessBase.md),  [sdm::PartiallyObservableProcessBase](classsdm_1_1PartiallyObservableProcessBase.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef TStateSpace | [**state\_space\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-space-type)  <br> |
| typedef typename TStateSpace::value\_type | [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md#function-stochasticprocessbase-1-3) () <br> |
|   | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md#function-stochasticprocessbase-2-3) (std::shared\_ptr&lt; TStateSpace &gt;) <br> |
|   | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md#function-stochasticprocessbase-3-3) (std::shared\_ptr&lt; TStateSpace &gt;, TDistrib) <br> |
|  [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type) | [**getInternalState**](classsdm_1_1StochasticProcessBase.md#function-getinternalstate) () const<br> |
|  TDistrib | [**getStartDistrib**](classsdm_1_1StochasticProcessBase.md#function-getstartdistrib) () const<br> |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**getStateSpace**](classsdm_1_1StochasticProcessBase.md#function-getstatespace) () const<br> |
|  void | [**setInternalState**](classsdm_1_1StochasticProcessBase.md#function-setinternalstate) ([**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type) new\_i\_state) <br> |
|  void | [**setStartDistrib**](classsdm_1_1StochasticProcessBase.md#function-setstartdistrib) (TDistrib) <br> |
|  void | [**setStateSpace**](classsdm_1_1StochasticProcessBase.md#function-setstatespace) (std::shared\_ptr&lt; TStateSpace &gt;) <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  TDistrib | [**start\_distrib\_**](classsdm_1_1StochasticProcessBase.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**state\_space\_**](classsdm_1_1StochasticProcessBase.md#variable-state-space-)  <br>_The state space._  |




# Detailed Description




**Template parameters:**


* `TStateSpace` the type of StateSpace to be used 
* `TDistrib` the type of start distribution to be used 



    
## Public Types Documentation


### typedef state\_space\_type 


```cpp
using sdm::StochasticProcessBase< TStateSpace, TDistrib >::state_space_type =  TStateSpace;
```



### typedef state\_type 


```cpp
using sdm::StochasticProcessBase< TStateSpace, TDistrib >::state_type =  typename TStateSpace::value_type;
```


## Public Functions Documentation


### function StochasticProcessBase [1/3]


```cpp
sdm::StochasticProcessBase::StochasticProcessBase () 
```



### function StochasticProcessBase [2/3]


```cpp
sdm::StochasticProcessBase::StochasticProcessBase (
    std::shared_ptr< TStateSpace >
) 
```



### function StochasticProcessBase [3/3]


```cpp
sdm::StochasticProcessBase::StochasticProcessBase (
    std::shared_ptr< TStateSpace >,
    TDistrib
) 
```



### function getInternalState 


```cpp
state_type sdm::StochasticProcessBase::getInternalState () const
```



### function getStartDistrib 


```cpp
TDistrib sdm::StochasticProcessBase::getStartDistrib () const
```



### function getStateSpace 


```cpp
std::shared_ptr< TStateSpace > sdm::StochasticProcessBase::getStateSpace () const
```



### function setInternalState 


```cpp
void sdm::StochasticProcessBase::setInternalState (
    state_type new_i_state
) 
```



### function setStartDistrib 


```cpp
void sdm::StochasticProcessBase::setStartDistrib (
    TDistrib
) 
```



### function setStateSpace 


```cpp
void sdm::StochasticProcessBase::setStateSpace (
    std::shared_ptr< TStateSpace >
) 
```


## Protected Attributes Documentation


### variable start\_distrib\_ 


```cpp
TDistrib sdm::StochasticProcessBase< TStateSpace, TDistrib >::start_distrib_;
```



### variable state\_space\_ 


```cpp
std::shared_ptr<TStateSpace> sdm::StochasticProcessBase< TStateSpace, TDistrib >::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/base/stochastic_process_base.hpp`