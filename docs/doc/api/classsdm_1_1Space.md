
<NavBar active_item_id="2"/>

# Class sdm::Space


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Space**](classsdm_1_1Space.md)



_This class is an abstract interface that all spaces should inherite. It gives some useful general methods to use generic spaces in your algorithms._ 

* `#include <space.hpp>`





Inherited by the following classes: [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::MultiSpace](classsdm_1_1MultiSpace.md),  [sdm::MultiSpace](classsdm_1_1MultiSpace.md),  [sdm::MultiSpace](classsdm_1_1MultiSpace.md),  [sdm::DiscreteSpace](classsdm_1_1DiscreteSpace.md),  [sdm::MultiSpace](classsdm_1_1MultiSpace.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getDim**](classsdm_1_1Space.md#function-getdim) () const = 0<br>_Get the dimension of the space._  |
|  bool | [**isContinuous**](classsdm_1_1Space.md#function-iscontinuous) () const<br>_Check if the space is continous._  |
| virtual bool | [**isDiscrete**](classsdm_1_1Space.md#function-isdiscrete) () const = 0<br>_Check if the space is discrete._  |
|  bool | [**operator!=**](classsdm_1_1Space.md#function-operator) (const [**Space**](classsdm_1_1Space.md) & sp) const<br> |
|  bool | [**operator==**](classsdm_1_1Space.md#function-operator-2) (const [**Space**](classsdm_1_1Space.md) & sp) const<br> |
| virtual std::string | [**str**](classsdm_1_1Space.md#function-str) () const = 0<br>[_**Space**_](classsdm_1_1Space.md) _as a string._ |
| virtual  | [**~Space**](classsdm_1_1Space.md#function-space) () <br> |








## Public Functions Documentation


### function getDim 


```cpp
virtual std::vector< number > sdm::Space::getDim () const = 0
```



### function isContinuous 


```cpp
inline bool sdm::Space::isContinuous () const
```



### function isDiscrete 


```cpp
virtual bool sdm::Space::isDiscrete () const = 0
```



### function operator!= 


```cpp
inline bool sdm::Space::operator!= (
    const Space & sp
) const
```



### function operator== 


```cpp
inline bool sdm::Space::operator== (
    const Space & sp
) const
```



### function str 


```cpp
virtual std::string sdm::Space::str () const = 0
```



### function ~Space 


```cpp
inline virtual sdm::Space::~Space () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/space/space.hpp`