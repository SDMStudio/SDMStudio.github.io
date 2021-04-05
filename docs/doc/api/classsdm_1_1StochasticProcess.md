
<NavBar active_item_id="2"/>

# Class sdm::StochasticProcess


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StochasticProcess**](classsdm_1_1StochasticProcess.md)





* `#include <stochastic_process.hpp>`





Inherited by the following classes: [sdm::DecisionProcess](classsdm_1_1DecisionProcess.md),  [sdm::PartiallyObservableProcess](classsdm_1_1PartiallyObservableProcess.md)










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StochasticProcess**](classsdm_1_1StochasticProcess.md#function-stochasticprocess-1-3) () <br> |
|   | [**StochasticProcess**](classsdm_1_1StochasticProcess.md#function-stochasticprocess-2-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br> |
|   | [**StochasticProcess**](classsdm_1_1StochasticProcess.md#function-stochasticprocess-3-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const Vector &) <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getInternalState**](classsdm_1_1StochasticProcess.md#function-getinternalstate) () const<br>_Get the internal state._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumStates**](classsdm_1_1StochasticProcess.md#function-getnumstates) () const<br>_Returns the number of states._  |
|  const Vector & | [**getStartDistrib**](classsdm_1_1StochasticProcess.md#function-getstartdistrib) () const<br> |
|  const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getStateSpace**](classsdm_1_1StochasticProcess.md#function-getstatespace) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**init**](classsdm_1_1StochasticProcess.md#function-init) () <br>_Init processus and return initial sampled state._  |
|  void | [**setInternalState**](classsdm_1_1StochasticProcess.md#function-setinternalstate) ([**number**](namespacesdm.md#typedef-number)) <br>_Sets the internal state._  |
|  void | [**setStartDistrib**](classsdm_1_1StochasticProcess.md#function-setstartdistrib-1-2) (const std::vector&lt; double &gt; &) <br> |
|  void | [**setStartDistrib**](classsdm_1_1StochasticProcess.md#function-setstartdistrib-2-2) (const Vector &) <br> |
|  void | [**setupStartGenerator**](classsdm_1_1StochasticProcess.md#function-setupstartgenerator) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  Vector | [**start\_distrib\_**](classsdm_1_1StochasticProcess.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**start\_generator**](classsdm_1_1StochasticProcess.md#variable-start-generator)  <br>_generator of starting state_  |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**state\_space\_**](classsdm_1_1StochasticProcess.md#variable-state-space-)  <br>_The state space._  |




## Public Functions Documentation


### function StochasticProcess [1/3]


```cpp
sdm::StochasticProcess::StochasticProcess () 
```



### function StochasticProcess [2/3]


```cpp
sdm::StochasticProcess::StochasticProcess (
    const DiscreteSpace < number > &
) 
```



### function StochasticProcess [3/3]


```cpp
sdm::StochasticProcess::StochasticProcess (
    const DiscreteSpace < number > &,
    const Vector &
) 
```



### function getInternalState 


```cpp
number sdm::StochasticProcess::getInternalState () const
```




**Returns:**

the internal state 




        

### function getNumStates 


```cpp
number sdm::StochasticProcess::getNumStates () const
```




**Returns:**

state number 




        

### function getStartDistrib 


```cpp
const Vector & sdm::StochasticProcess::getStartDistrib () const
```



### function getStateSpace 


```cpp
const DiscreteSpace < number > & sdm::StochasticProcess::getStateSpace () const
```



### function init 


```cpp
number sdm::StochasticProcess::init () 
```




**Returns:**

the initial state 




        

### function setInternalState 


```cpp
void sdm::StochasticProcess::setInternalState (
    number
) 
```




**Parameters:**


* `internal_state` the new internal state 



        

### function setStartDistrib [1/2]


```cpp
void sdm::StochasticProcess::setStartDistrib (
    const std::vector< double > &
) 
```



### function setStartDistrib [2/2]


```cpp
void sdm::StochasticProcess::setStartDistrib (
    const Vector &
) 
```



### function setupStartGenerator 


```cpp
void sdm::StochasticProcess::setupStartGenerator () 
```


## Protected Attributes Documentation


### variable start\_distrib\_ 


```cpp
Vector sdm::StochasticProcess::start_distrib_;
```



### variable start\_generator 


```cpp
std::discrete_distribution<number> sdm::StochasticProcess::start_generator;
```



### variable state\_space\_ 


```cpp
DiscreteSpace<number> sdm::StochasticProcess::state_space_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/stochastic_process.hpp`