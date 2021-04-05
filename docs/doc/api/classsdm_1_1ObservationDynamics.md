
<NavBar active_item_id="2"/>

# Class sdm::ObservationDynamics


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md)





* `#include <observation_dynamics.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md#function-observationdynamics-1-3) () <br> |
|   | [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md#function-observationdynamics-2-3) ([**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) & copy) <br> |
|   | [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md#function-observationdynamics-3-3) ([**number**](namespacesdm.md#typedef-number) num\_jactions, [**number**](namespacesdm.md#typedef-number) num\_jobservations, [**number**](namespacesdm.md#typedef-number) num\_states) <br>_Instantiate a transition model._  |
|  double | [**getDynamics**](classsdm_1_1ObservationDynamics.md#function-getdynamics-1-3) ([**number**](namespacesdm.md#typedef-number) s, [**number**](namespacesdm.md#typedef-number) a, [**number**](namespacesdm.md#typedef-number) o, [**number**](namespacesdm.md#typedef-number) s\_) const<br> |
|  const Matrix & | [**getDynamics**](classsdm_1_1ObservationDynamics.md#function-getdynamics-2-3) ([**number**](namespacesdm.md#typedef-number) a, [**number**](namespacesdm.md#typedef-number) o) const<br> |
|  const std::vector&lt; std::vector&lt; Matrix &gt; &gt; & | [**getDynamics**](classsdm_1_1ObservationDynamics.md#function-getdynamics-3-3) () const<br> |
|  const std::vector&lt; Matrix &gt; & | [**getObservationProbabilities**](classsdm_1_1ObservationDynamics.md#function-getobservationprobabilities) () const<br> |
|  double | [**getObservationProbability**](classsdm_1_1ObservationDynamics.md#function-getobservationprobability) ([**number**](namespacesdm.md#typedef-number) u, [**number**](namespacesdm.md#typedef-number) z, [**number**](namespacesdm.md#typedef-number) x) const<br>_Returns probability._  |
|  const std::unordered\_set&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getObservationSuccessors**](classsdm_1_1ObservationDynamics.md#function-getobservationsuccessors) ([**number**](namespacesdm.md#typedef-number) u, [**number**](namespacesdm.md#typedef-number) x) <br>_Returns set of observations._  |
|  const Matrix & | [**getObservations**](classsdm_1_1ObservationDynamics.md#function-getobservations) ([**number**](namespacesdm.md#typedef-number) u) const<br>_Returns matrix of probability observations for the pre-defined action._  |
|  void | [**initDynamics**](classsdm_1_1ObservationDynamics.md#function-initdynamics) ([**number**](namespacesdm.md#typedef-number) num\_jactions, [**number**](namespacesdm.md#typedef-number) num\_jobservations, [**number**](namespacesdm.md#typedef-number) num\_states) <br>_Inits the dynamics model._  |
|  void | [**setDynamics**](classsdm_1_1ObservationDynamics.md#function-setdynamics-1-2) ([**number**](namespacesdm.md#typedef-number) s, [**number**](namespacesdm.md#typedef-number) a, [**number**](namespacesdm.md#typedef-number) o, [**number**](namespacesdm.md#typedef-number) s\_, double prob) <br> |
|  void | [**setDynamics**](classsdm_1_1ObservationDynamics.md#function-setdynamics-2-2) ([**number**](namespacesdm.md#typedef-number) a, [**number**](namespacesdm.md#typedef-number) o, const Matrix & m) <br> |
|  void | [**setObservationProbability**](classsdm_1_1ObservationDynamics.md#function-setobservationprobability) ([**number**](namespacesdm.md#typedef-number) u, [**number**](namespacesdm.md#typedef-number) z, [**number**](namespacesdm.md#typedef-number) x, double prob) <br> |
|  void | [**setObservations**](classsdm_1_1ObservationDynamics.md#function-setobservations) (const std::vector&lt; Matrix &gt; & o\_model) <br>_Sets probability transitions._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::vector&lt; std::vector&lt; Matrix &gt; &gt; | [**dynamics**](classsdm_1_1ObservationDynamics.md#variable-dynamics)  <br>_dynamics model of the probabilities of state-observation pairs given state-action pairs._  |
|  std::vector&lt; Matrix &gt; | [**o\_model**](classsdm_1_1ObservationDynamics.md#variable-o-model)  <br>_transition and observation matrices_  |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::unordered\_set&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt; &gt; | [**successor\_observations**](classsdm_1_1ObservationDynamics.md#variable-successor-observations)  <br>_map from next-state, current action pairs to set of next observations_  |




## Public Functions Documentation


### function ObservationDynamics [1/3]


```cpp
sdm::ObservationDynamics::ObservationDynamics () 
```



### function ObservationDynamics [2/3]


```cpp
sdm::ObservationDynamics::ObservationDynamics (
    ObservationDynamics & copy
) 
```



### function ObservationDynamics [3/3]


```cpp
sdm::ObservationDynamics::ObservationDynamics (
    number num_jactions,
    number num_jobservations,
    number num_states
) 
```




**Parameters:**


* `num_jactions` Number of joint actions 
* `num_jobservations` Number of joint observations 
* `num_states` Number of states 



        

### function getDynamics [1/3]


```cpp
double sdm::ObservationDynamics::getDynamics (
    number s,
    number a,
    number o,
    number s_
) const
```



### function getDynamics [2/3]


```cpp
const Matrix & sdm::ObservationDynamics::getDynamics (
    number a,
    number o
) const
```



### function getDynamics [3/3]


```cpp
const std::vector< std::vector< Matrix > > & sdm::ObservationDynamics::getDynamics () const
```



### function getObservationProbabilities 


```cpp
const std::vector< Matrix > & sdm::ObservationDynamics::getObservationProbabilities () const
```



### function getObservationProbability 


```cpp
double sdm::ObservationDynamics::getObservationProbability (
    number u,
    number z,
    number x
) const
```




**Parameters:**


* `u` a specific joint action 
* `z` a specific joint observation 
* `x` a specific state 



**Returns:**

value 




        

### function getObservationSuccessors 


```cpp
const std::unordered_set< number > & sdm::ObservationDynamics::getObservationSuccessors (
    number u,
    number x
) 
```




**Parameters:**


* `u` a specific joint action 
* `x` a specific state 



**Returns:**

const std::unordered\_set&lt;observation&gt;& 




        

### function getObservations 


```cpp
const Matrix & sdm::ObservationDynamics::getObservations (
    number u
) const
```




**Parameters:**


* `u` a specific joint action 



        

### function initDynamics 


```cpp
void sdm::ObservationDynamics::initDynamics (
    number num_jactions,
    number num_jobservations,
    number num_states
) 
```




**Parameters:**


* `num_jactions` Number of joint actions 
* `num_jobservations` Number of joint observations 
* `num_states` Number of states 



        

### function setDynamics [1/2]


```cpp
void sdm::ObservationDynamics::setDynamics (
    number s,
    number a,
    number o,
    number s_,
    double prob
) 
```



### function setDynamics [2/2]


```cpp
void sdm::ObservationDynamics::setDynamics (
    number a,
    number o,
    const Matrix & m
) 
```



### function setObservationProbability 


```cpp
void sdm::ObservationDynamics::setObservationProbability (
    number u,
    number z,
    number x,
    double prob
) 
```




**Parameters:**


* `u` a specific joint action 
* `z` a specific joint observation 
* `x` a specific state 
* `double` proba 



**Returns:**

void 




        

### function setObservations 


```cpp
void sdm::ObservationDynamics::setObservations (
    const std::vector< Matrix > & o_model
) 
```




**Parameters:**


* `const` std::vector&lt;Matrix&gt;& matrices of observations, one for each action. 



        
## Protected Attributes Documentation


### variable dynamics 


```cpp
std::vector<std::vector<Matrix> > sdm::ObservationDynamics::dynamics;
```



### variable o\_model 


```cpp
std::vector<Matrix> sdm::ObservationDynamics::o_model;
```



### variable successor\_observations 


```cpp
std::unordered_map<number, std::unordered_map<number, std::unordered_set<number> > > sdm::ObservationDynamics::successor_observations;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/observation_dynamics.hpp`