
<NavBar active_item_id="2"/>

# Class sdm::PartiallyObservableProcessBase

**template &lt;typename TStateSpace, typename TObsSpace, typename TDistrib&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md)



_This class is the base class for partially observable processes. It contains base spaces required in all partially observable processes._ [More...](#detailed-description)

* `#include <po_process_base.hpp>`



Inherits the following classes: [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)


Inherited by the following classes: [sdm::PartiallyObservableDecisionProcess](classsdm_1_1PartiallyObservableDecisionProcess.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef TObsSpace | [**observation\_space\_type**](classsdm_1_1PartiallyObservableProcessBase.md#typedef-observation-space-type)  <br> |
| typedef typename TObsSpace::value\_type | [**observation\_type**](classsdm_1_1PartiallyObservableProcessBase.md#typedef-observation-type)  <br> |

## Public Types inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
| typedef TStateSpace | [**state\_space\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-space-type)  <br> |
| typedef typename TStateSpace::value\_type | [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md#function-partiallyobservableprocessbase-1-3) () <br> |
|   | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md#function-partiallyobservableprocessbase-2-3) (std::shared\_ptr&lt; TStateSpace &gt;, std::shared\_ptr&lt; TObsSpace &gt;) <br> |
|   | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md#function-partiallyobservableprocessbase-3-3) (std::shared\_ptr&lt; TStateSpace &gt;, std::shared\_ptr&lt; TObsSpace &gt;, TDistrib) <br> |
|  std::shared\_ptr&lt; TObsSpace &gt; | [**getObsSpace**](classsdm_1_1PartiallyObservableProcessBase.md#function-getobsspace) () const<br>_Getter for the observation space._  |
|  void | [**setObsSpace**](classsdm_1_1PartiallyObservableProcessBase.md#function-setobsspace) (std::shared\_ptr&lt; TObsSpace &gt;) <br>_Set the observation space._  |

## Public Functions inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

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
|  std::shared\_ptr&lt; TObsSpace &gt; | [**obs\_space\_**](classsdm_1_1PartiallyObservableProcessBase.md#variable-obs-space-)  <br>_The obervation space._  |

## Protected Attributes inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
|  TDistrib | [**start\_distrib\_**](classsdm_1_1StochasticProcessBase.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**state\_space\_**](classsdm_1_1StochasticProcessBase.md#variable-state-space-)  <br>_The state space._  |







# Detailed Description




**Template parameters:**


* `TStateSpace` the state space 
* `TObsSpace` the observation space 
* `TDistrib` the initial distribution 



    
## Public Types Documentation


### typedef observation\_space\_type 


```cpp
using sdm::PartiallyObservableProcessBase< TStateSpace, TObsSpace, TDistrib >::observation_space_type =  TObsSpace;
```



### typedef observation\_type 


```cpp
using sdm::PartiallyObservableProcessBase< TStateSpace, TObsSpace, TDistrib >::observation_type =  typename TObsSpace::value_type;
```


## Public Functions Documentation


### function PartiallyObservableProcessBase [1/3]


```cpp
sdm::PartiallyObservableProcessBase::PartiallyObservableProcessBase () 
```



### function PartiallyObservableProcessBase [2/3]


```cpp
sdm::PartiallyObservableProcessBase::PartiallyObservableProcessBase (
    std::shared_ptr< TStateSpace >,
    std::shared_ptr< TObsSpace >
) 
```



### function PartiallyObservableProcessBase [3/3]


```cpp
sdm::PartiallyObservableProcessBase::PartiallyObservableProcessBase (
    std::shared_ptr< TStateSpace >,
    std::shared_ptr< TObsSpace >,
    TDistrib
) 
```



### function getObsSpace 


```cpp
std::shared_ptr< TObsSpace > sdm::PartiallyObservableProcessBase::getObsSpace () const
```



### function setObsSpace 


```cpp
void sdm::PartiallyObservableProcessBase::setObsSpace (
    std::shared_ptr< TObsSpace >
) 
```


## Protected Attributes Documentation


### variable obs\_space\_ 


```cpp
std::shared_ptr<TObsSpace> sdm::PartiallyObservableProcessBase< TStateSpace, TObsSpace, TDistrib >::obs_space_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/base/po_process_base.hpp`