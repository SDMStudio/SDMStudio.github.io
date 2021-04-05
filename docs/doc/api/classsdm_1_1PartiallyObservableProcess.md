
<NavBar active_item_id="2"/>

# Class sdm::PartiallyObservableProcess


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md)



_Partially observable process._ 

* `#include <po_process.hpp>`



Inherits the following classes: [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md)


Inherited by the following classes: [sdm::POSG](classsdm_1_1POSG.md)














## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md#function-partiallyobservableprocess-1-3) () <br> |
|   | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md#function-partiallyobservableprocess-2-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &) <br> |
|   | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md#function-partiallyobservableprocess-3-3) (const [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const Vector &) <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumJObservations**](classsdm_1_1PartiallyObservableProcess.md#function-getnumjobservations) () const<br>_Get the number of joint observations._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumObservations**](classsdm_1_1PartiallyObservableProcess.md#function-getnumobservations-1-2) ([**number**](namespacesdm.md#typedef-number)) const<br>_Get the number of observations for a specific agent._  |
|  std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getNumObservations**](classsdm_1_1PartiallyObservableProcess.md#function-getnumobservations-2-2) () const<br>_Get the number of observation for every agents._  |
|  const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getObsSpace**](classsdm_1_1PartiallyObservableProcess.md#function-getobsspace) () const<br>_Getter for the observation spaces._  |

## Public Functions inherited from sdm::StochasticProcess

See [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md)

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
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**obs\_spaces\_**](classsdm_1_1PartiallyObservableProcess.md#variable-obs-spaces-)  <br>_The state space._  |

## Protected Attributes inherited from sdm::StochasticProcess

See [sdm::StochasticProcess](classsdm_1_1StochasticProcess.md)

| Type | Name |
| ---: | :--- |
|  Vector | [**start\_distrib\_**](classsdm_1_1StochasticProcess.md#variable-start-distrib-)  <br>_The initial state distribution._  |
|  std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**start\_generator**](classsdm_1_1StochasticProcess.md#variable-start-generator)  <br>_generator of starting state_  |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**state\_space\_**](classsdm_1_1StochasticProcess.md#variable-state-space-)  <br>_The state space._  |







## Public Functions Documentation


### function PartiallyObservableProcess [1/3]


```cpp
sdm::PartiallyObservableProcess::PartiallyObservableProcess () 
```



### function PartiallyObservableProcess [2/3]


```cpp
sdm::PartiallyObservableProcess::PartiallyObservableProcess (
    const DiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &
) 
```



### function PartiallyObservableProcess [3/3]


```cpp
sdm::PartiallyObservableProcess::PartiallyObservableProcess (
    const DiscreteSpace < number > &,
    const MultiDiscreteSpace < number > &,
    const Vector &
) 
```



### function getNumJObservations 


```cpp
number sdm::PartiallyObservableProcess::getNumJObservations () const
```



### function getNumObservations [1/2]


```cpp
number sdm::PartiallyObservableProcess::getNumObservations (
    number
) const
```



### function getNumObservations [2/2]


```cpp
std::vector< number > sdm::PartiallyObservableProcess::getNumObservations () const
```



### function getObsSpace 


```cpp
const MultiDiscreteSpace < number > & sdm::PartiallyObservableProcess::getObsSpace () const
```


## Protected Attributes Documentation


### variable obs\_spaces\_ 


```cpp
MultiDiscreteSpace<number> sdm::PartiallyObservableProcess::obs_spaces_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/po_process.hpp`