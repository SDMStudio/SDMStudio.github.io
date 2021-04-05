
<NavBar active_item_id="2"/>

# Class sdm::DecisionProcessBase

**template &lt;typename TStateSpace, typename TActionSpace, typename TDistrib&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md)



_This class is the base class for decision processes. It contains base spaces required in all decision processes._ [More...](#detailed-description)

* `#include <decision_process_base.hpp>`



Inherits the following classes: [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)


Inherited by the following classes: [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md),  [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef TActionSpace | [**action\_space\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-space-type)  <br> |
| typedef typename TActionSpace::value\_type | [**action\_type**](classsdm_1_1DecisionProcessBase.md#typedef-action-type)  <br> |

## Public Types inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
| typedef TStateSpace | [**state\_space\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-space-type)  <br> |
| typedef typename TStateSpace::value\_type | [**state\_type**](classsdm_1_1StochasticProcessBase.md#typedef-state-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md#function-decisionprocessbase-1-3) () <br> |
|   | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md#function-decisionprocessbase-2-3) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp) <br> |
|   | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md#function-decisionprocessbase-3-3) (std::shared\_ptr&lt; TStateSpace &gt; state\_sp, std::shared\_ptr&lt; TActionSpace &gt; action\_sp, TDistrib start\_distrib, [**number**](namespacesdm.md#typedef-number) planning\_horizon=0, double discount=0.9, [**Criterion**](namespacesdm.md#enum-criterion) criterion=Criterion::REW\_MAX) <br> |
|  std::shared\_ptr&lt; TActionSpace &gt; | [**getActionSpace**](classsdm_1_1DecisionProcessBase.md#function-getactionspace) () const<br>_Getter for the action space._  |
|  double | [**getBound**](classsdm_1_1DecisionProcessBase.md#function-getbound) () <br>_Get the bound._  |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**getCriterion**](classsdm_1_1DecisionProcessBase.md#function-getcriterion) () <br>_Get the criterion. Can be of two types : REW\_MAX (reward maximisation) or COST\_MIN (cost minimization)._  |
|  double | [**getDiscount**](classsdm_1_1DecisionProcessBase.md#function-getdiscount) () <br>_Get the discount factor._  |
|  std::string | [**getFileName**](classsdm_1_1DecisionProcessBase.md#function-getfilename) () <br>_Get the filename._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getPlanningHorizon**](classsdm_1_1DecisionProcessBase.md#function-getplanninghorizon) () <br>_Get the planning horizon._  |
|  void | [**setActionSpace**](classsdm_1_1DecisionProcessBase.md#function-setactionspace) (std::shared\_ptr&lt; TActionSpace &gt;) <br>_Set the action space._  |
|  void | [**setBound**](classsdm_1_1DecisionProcessBase.md#function-setbound) (double bound) <br>_Set the bound._  |
|  void | [**setCriterion**](classsdm_1_1DecisionProcessBase.md#function-setcriterion) ([**Criterion**](namespacesdm.md#enum-criterion)) <br>_Set the criterion._  |
|  void | [**setDiscount**](classsdm_1_1DecisionProcessBase.md#function-setdiscount) (double) <br>_Set the discount factor._  |
|  void | [**setFileName**](classsdm_1_1DecisionProcessBase.md#function-setfilename) (std::string filename) <br>_Set the filename._  |
|  void | [**setPlanningHorizon**](classsdm_1_1DecisionProcessBase.md#function-setplanninghorizon) ([**number**](namespacesdm.md#typedef-number)) <br>_Set the planning horizon._  |

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
|  std::shared\_ptr&lt; TActionSpace &gt; | [**action\_space\_**](classsdm_1_1DecisionProcessBase.md#variable-action-space-)  <br>_Action space for each agent._  |
|  double | [**bound\_**](classsdm_1_1DecisionProcessBase.md#variable-bound-)  <br> |
|  [**Criterion**](namespacesdm.md#enum-criterion) | [**criterion\_**](classsdm_1_1DecisionProcessBase.md#variable-criterion-)   = = Criterion::REW\_MAX<br>_type of optimization problem, e.g., reward maximazation or cost minimization._  |
|  double | [**discount\_**](classsdm_1_1DecisionProcessBase.md#variable-discount-)   = = 1.0<br>_factor used to discount rewards (respectively costs) in the future._  |
|  std::string | [**filename\_**](classsdm_1_1DecisionProcessBase.md#variable-filename-)  <br>_name of the file that generates the environment_  |
|  [**number**](namespacesdm.md#typedef-number) | [**planning\_horizon\_**](classsdm_1_1DecisionProcessBase.md#variable-planning-horizon-)   = = 0<br>_planning horizon_  |

## Protected Attributes inherited from sdm::StochasticProcessBase

See [sdm::StochasticProcessBase](classsdm_1_1StochasticProcessBase.md)

| Type | Name |
| ---: | :--- |
|  TDistrib | [**start\_distrib\_**](classsdm_1_1StochasticProcessBase.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::shared\_ptr&lt; TStateSpace &gt; | [**state\_space\_**](classsdm_1_1StochasticProcessBase.md#variable-state-space-)  <br>_The state space._  |







# Detailed Description




**Template parameters:**


* `TStateSpace` the state space 
* `TActionSpace` the action space 
* `TDistrib` the initial distribution 



    
## Public Types Documentation


### typedef action\_space\_type 


```cpp
using sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::action_space_type =  TActionSpace;
```



### typedef action\_type 


```cpp
using sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::action_type =  typename TActionSpace::value_type;
```


## Public Functions Documentation


### function DecisionProcessBase [1/3]


```cpp
sdm::DecisionProcessBase::DecisionProcessBase () 
```



### function DecisionProcessBase [2/3]


```cpp
sdm::DecisionProcessBase::DecisionProcessBase (
    std::shared_ptr< TStateSpace > state_sp,
    std::shared_ptr< TActionSpace > action_sp
) 
```



### function DecisionProcessBase [3/3]


```cpp
sdm::DecisionProcessBase::DecisionProcessBase (
    std::shared_ptr< TStateSpace > state_sp,
    std::shared_ptr< TActionSpace > action_sp,
    TDistrib start_distrib,
    number planning_horizon=0,
    double discount=0.9,
    Criterion criterion=Criterion::REW_MAX
) 
```



### function getActionSpace 


```cpp
std::shared_ptr< TActionSpace > sdm::DecisionProcessBase::getActionSpace () const
```



### function getBound 


```cpp
double sdm::DecisionProcessBase::getBound () 
```




**Returns:**

the bound 




        

### function getCriterion 


```cpp
Criterion sdm::DecisionProcessBase::getCriterion () 
```




**Returns:**

Criterion the current criterion 




        

### function getDiscount 


```cpp
double sdm::DecisionProcessBase::getDiscount () 
```




**Returns:**

the discount factor used 




        

### function getFileName 


```cpp
std::string sdm::DecisionProcessBase::getFileName () 
```




**Returns:**

std::string 




        

### function getPlanningHorizon 


```cpp
number sdm::DecisionProcessBase::getPlanningHorizon () 
```



### function setActionSpace 


```cpp
void sdm::DecisionProcessBase::setActionSpace (
    std::shared_ptr< TActionSpace >
) 
```



### function setBound 


```cpp
void sdm::DecisionProcessBase::setBound (
    double bound
) 
```




**Parameters:**


* `bound` the bound 



        

### function setCriterion 


```cpp
void sdm::DecisionProcessBase::setCriterion (
    Criterion
) 
```




**Parameters:**


* `criterion` the criterion to use. Can be of two types : (0) REW\_MAX (reward maximisation) or (1) COST\_MIN (cost minimization) 



        

### function setDiscount 


```cpp
void sdm::DecisionProcessBase::setDiscount (
    double
) 
```




**Parameters:**


* `discount` the discount factor to use. 



        

### function setFileName 


```cpp
void sdm::DecisionProcessBase::setFileName (
    std::string filename
) 
```




**Parameters:**


* `filename` the filename that permit to build this process 



        

### function setPlanningHorizon 


```cpp
void sdm::DecisionProcessBase::setPlanningHorizon (
    number
) 
```


## Protected Attributes Documentation


### variable action\_space\_ 


```cpp
std::shared_ptr<TActionSpace> sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::action_space_;
```



### variable bound\_ 


```cpp
double sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::bound_;
```



### variable criterion\_ 


```cpp
Criterion sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::criterion_;
```



### variable discount\_ 


```cpp
double sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::discount_;
```



### variable filename\_ 


```cpp
std::string sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::filename_;
```



### variable planning\_horizon\_ 


```cpp
number sdm::DecisionProcessBase< TStateSpace, TActionSpace, TDistrib >::planning_horizon_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/world/base/decision_process_base.hpp`