
<NavBar active_item_id="2"/>

# Class sdm::feedback


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**feedback**](classsdm_1_1feedback.md)





* `#include <feedback.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**feedback**](classsdm_1_1feedback.md#function-feedback-1-3) () <br> |
|   | [**feedback**](classsdm_1_1feedback.md#function-feedback-2-3) (double min, double max) <br> |
|   | [**feedback**](classsdm_1_1feedback.md#function-feedback-3-3) ([**state**](namespacesdm.md#typedef-state) s, [**observation**](namespacesdm.md#typedef-observation) z, double r) <br> |
| virtual double | [**getNormalizedReward**](classsdm_1_1feedback.md#function-getnormalizedreward) () const<br> |
| virtual [**observation**](namespacesdm.md#typedef-observation) | [**getObservation**](classsdm_1_1feedback.md#function-getobservation) () const<br> |
| virtual double | [**getReward**](classsdm_1_1feedback.md#function-getreward) () const<br> |
| virtual [**state**](namespacesdm.md#typedef-state) | [**getState**](classsdm_1_1feedback.md#function-getstate) () const<br> |
| virtual void | [**setObservation**](classsdm_1_1feedback.md#function-setobservation) (const [**observation**](namespacesdm.md#typedef-observation) & z) <br> |
| virtual void | [**setReward**](classsdm_1_1feedback.md#function-setreward) (const double & r) <br> |
| virtual void | [**setState**](classsdm_1_1feedback.md#function-setstate) (const [**state**](namespacesdm.md#typedef-state) & s) <br> |
| virtual  | [**~feedback**](classsdm_1_1feedback.md#function-feedback) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**r**](classsdm_1_1feedback.md#variable-r)  <br> |
|  [**state**](namespacesdm.md#typedef-state) | [**s**](classsdm_1_1feedback.md#variable-s)  <br> |
|  [**observation**](namespacesdm.md#typedef-observation) | [**z**](classsdm_1_1feedback.md#variable-z)  <br> |

## Protected Static Attributes

| Type | Name |
| ---: | :--- |
|  double | [**rmax**](classsdm_1_1feedback.md#variable-rmax)   = = 1<br> |
|  double | [**rmin**](classsdm_1_1feedback.md#variable-rmin)   = = 0<br> |



## Public Functions Documentation


### function feedback [1/3]


```cpp
sdm::feedback::feedback () 
```



### function feedback [2/3]


```cpp
sdm::feedback::feedback (
    double min,
    double max
) 
```



### function feedback [3/3]


```cpp
sdm::feedback::feedback (
    state s,
    observation z,
    double r
) 
```



### function getNormalizedReward 


```cpp
virtual double sdm::feedback::getNormalizedReward () const
```



### function getObservation 


```cpp
virtual observation sdm::feedback::getObservation () const
```



### function getReward 


```cpp
virtual double sdm::feedback::getReward () const
```



### function getState 


```cpp
virtual state sdm::feedback::getState () const
```



### function setObservation 


```cpp
virtual void sdm::feedback::setObservation (
    const observation & z
) 
```



### function setReward 


```cpp
virtual void sdm::feedback::setReward (
    const double & r
) 
```



### function setState 


```cpp
virtual void sdm::feedback::setState (
    const state & s
) 
```



### function ~feedback 


```cpp
virtual sdm::feedback::~feedback () 
```


## Protected Attributes Documentation


### variable r 


```cpp
double sdm::feedback::r;
```



### variable s 


```cpp
state sdm::feedback::s;
```



### variable z 


```cpp
observation sdm::feedback::z;
```


## Protected Static Attributes Documentation


### variable rmax 


```cpp
double sdm::feedback::rmax;
```



### variable rmin 


```cpp
double sdm::feedback::rmin;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/public/feedback.hpp`