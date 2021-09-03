
# Class sdm::Joint

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Joint**](classsdm_1_1Joint.md)



_This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._[More...](#detailed-description)

* `#include <joint.hpp>`



Inherits the following classes: std::vector< T >,  [sdm::Function](classsdm_1_1Function.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef T | [**value\_type**](classsdm_1_1Joint.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-1-4) () <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-2-4) (const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-3-4) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-4-4) (std::initializer\_list&lt; T &gt; list\_values) <br> |
|  const T & | [**get**](classsdm_1_1Joint.md#function-get) (const [**number**](namespacesdm.md#typedef-number) &) const<br>_Get the element for agent i._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1Joint.md#function-getnumagents) () const<br>_Get the number of agents (i.e. the size of the joint element)_  |
| virtual T | [**operator()**](classsdm_1_1Joint.md#function-operator()) (const [**number**](namespacesdm.md#typedef-number) &) <br>_Get the element for agent i._  |
|  void | [**serialize**](classsdm_1_1Joint.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  std::string | [**str**](classsdm_1_1Joint.md#function-str) () const<br> |
|  std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; TOutput &gt; &gt; &gt; | [**toJoint**](classsdm_1_1Joint.md#function-tojoint) () <br> |
| virtual  | [**~Joint**](classsdm_1_1Joint.md#function-joint) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |















# Detailed Description




**Template parameters:**


* `The` type of item. 



    
## Public Types Documentation


### typedef value\_type 


```cpp
using sdm::Joint< T >::value_type =  T;
```


## Public Functions Documentation


### function Joint [1/4]


```cpp
sdm::Joint::Joint () 
```



### function Joint [2/4]


```cpp
sdm::Joint::Joint (
    const std::vector< T > & joint_item
) 
```



### function Joint [3/4]


```cpp
sdm::Joint::Joint (
    const std::vector< number > &,
    const std::vector< T > & joint_item
) 
```



### function Joint [4/4]


```cpp
sdm::Joint::Joint (
    std::initializer_list< T > list_values
) 
```



### function get 


```cpp
const T & sdm::Joint::get (
    const number &
) const
```



### function getNumAgents 


```cpp
number sdm::Joint::getNumAgents () const
```



### function operator() 


```cpp
virtual T sdm::Joint::operator() (
    const number &
) 
```


Implements [*sdm::Function::operator()*](classsdm_1_1Function.md#function-operator())


### function serialize 


```cpp
template<class Archive class Archive>
inline void sdm::Joint::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function str 


```cpp
std::string sdm::Joint::str () const
```



### function toJoint 


```cpp
template<typename TOutput typename TOutput>
std::shared_ptr< Joint < std::shared_ptr< TOutput > > > sdm::Joint::toJoint () 
```



### function ~Joint 


```cpp
virtual sdm::Joint::~Joint () 
```

## Friends Documentation



### friend access 


```cpp
friend class sdm::Joint::access () 
```



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Joint::operator<< (
    std::ostream & os,
    const Joint < T > & joint_item
) 
```




**Parameters:**


* `std::ostream&` 
* `const` joint&lt;item, instance&gt;& joint item to be printed 



**Returns:**

std::ostream& 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/joint.hpp`