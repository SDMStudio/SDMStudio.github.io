
<NavBar active_item_id="2"/>

# Class sdm::Joint

**template &lt;typename item&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Joint**](classsdm_1_1Joint.md)



_class of joint item instances._ 

* `#include <joint.hpp>`



Inherits the following classes: std::vector< item >,  [sdm::Function](classsdm_1_1Function.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef item | [**value\_type**](classsdm_1_1Joint.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-1-3) () <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-2-3) (const std::vector&lt; item &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-3-3) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const std::vector&lt; item &gt; & joint\_item) <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1Joint.md#function-getnumagents) () const<br> |
| virtual item | [**operator()**](classsdm_1_1Joint.md#function-operator()) (const [**number**](namespacesdm.md#typedef-number) & i) <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_agents\_**](classsdm_1_1Joint.md#variable-num-agents-)  <br>_the number of agents_  |








## Public Types Documentation


### typedef value\_type 


```cpp
using sdm::Joint< item >::value_type =  item;
```


## Public Functions Documentation


### function Joint [1/3]


```cpp
inline sdm::Joint::Joint () 
```



### function Joint [2/3]


```cpp
inline sdm::Joint::Joint (
    const std::vector< item > & joint_item
) 
```



### function Joint [3/3]


```cpp
inline sdm::Joint::Joint (
    const std::vector< number > &,
    const std::vector< item > & joint_item
) 
```



### function getNumAgents 


```cpp
inline number sdm::Joint::getNumAgents () const
```



### function operator() 


```cpp
inline virtual item sdm::Joint::operator() (
    const number & i
) 
```


Implements [*sdm::Function::operator()*](classsdm_1_1Function.md#function-operator())

## Protected Attributes Documentation


### variable num\_agents\_ 


```cpp
number sdm::Joint< item >::num_agents_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Joint::operator<< (
    std::ostream & os,
    const Joint < item > & j
) 
```




**Parameters:**


* `std::ostream&` 
* `const` joint&lt;item, instance&gt;& joint item to be printed 



**Returns:**

std::ostream& 




        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/joint.hpp`