
# Class sdm::BaseValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md)



_This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._ [More...](#detailed-description)

* `#include <base_value_function.hpp>`



Inherits the following classes: std::enable_shared_from_this< BaseValueFunction< TInput > >


Inherited by the following classes: [sdm::ValueFunction](classsdm_1_1ValueFunction.md)










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md#function-basevaluefunction-1-3) () <br> |
|   | [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md#function-basevaluefunction-2-3) ([**number**](namespacesdm.md#typedef-number) horizon) <br> |
|   | [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md#function-basevaluefunction-3-3) (const [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md) & copy) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**getBestAction**](classsdm_1_1BaseValueFunction.md#function-getbestaction) (const TInput & input, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the best action to do at a state._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1BaseValueFunction.md#function-gethorizon) () const<br> |
| virtual double | [**getValueAt**](classsdm_1_1BaseValueFunction.md#function-getvalueat) (const TInput & input, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Get the value at a given state._  |
|  std::shared\_ptr&lt; [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md)&lt; TInput &gt; &gt; | [**getptr**](classsdm_1_1BaseValueFunction.md#function-getptr) () <br>_Get a shared pointer on the current object._  |
| virtual void | [**initialize**](classsdm_1_1BaseValueFunction.md#function-initialize-1-2) () = 0<br>_Initialize the value function._  |
| virtual void | [**initialize**](classsdm_1_1BaseValueFunction.md#function-initialize-2-2) (double v, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Initialize the value function with a default value._  |
|  bool | [**isFiniteHorizon**](classsdm_1_1BaseValueFunction.md#function-isfinitehorizon) () const<br> |
|  bool | [**isInfiniteHorizon**](classsdm_1_1BaseValueFunction.md#function-isinfinitehorizon) () const<br> |
| virtual void | [**load**](classsdm_1_1BaseValueFunction.md#function-load) (std::string) <br>_Load a value function from a file. The extension of the file will indicate the type of formatage for reading (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
| virtual void | [**save**](classsdm_1_1BaseValueFunction.md#function-save) (std::string) <br>_Save a value function into a file. The extension of the file will indicate the type of formatage for recording (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
| virtual std::string | [**str**](classsdm_1_1BaseValueFunction.md#function-str) () const = 0<br>_Define this function in order to be able to display the value function._  |
| virtual void | [**updateValueAt**](classsdm_1_1BaseValueFunction.md#function-updatevalueat) (const TInput & input, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Get the q-value at a state._  |
| virtual  | [**~BaseValueFunction**](classsdm_1_1BaseValueFunction.md#function-basevaluefunction) () <br>_Destroy the value function._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1BaseValueFunction.md#variable-horizon-)  <br>_The horizon for planning/learning._  |




# Detailed Description




**Template parameters:**


* `std::shared_ptr<Observation>` Type of the state. 
* `std::shared<Action>` Type of the action. 
* `double` Type of the value. 



    
## Public Functions Documentation


### function BaseValueFunction [1/3]


```cpp
sdm::BaseValueFunction::BaseValueFunction () 
```



### function BaseValueFunction [2/3]


```cpp
sdm::BaseValueFunction::BaseValueFunction (
    number horizon
) 
```



### function BaseValueFunction [3/3]


```cpp
sdm::BaseValueFunction::BaseValueFunction (
    const BaseValueFunction & copy
) 
```



### function getBestAction 


```cpp
virtual std::shared_ptr< Action > sdm::BaseValueFunction::getBestAction (
    const TInput & input,
    number t
) = 0
```




**Parameters:**


* `state` the state 



**Returns:**

the best action 




        

### function getHorizon 


```cpp
number sdm::BaseValueFunction::getHorizon () const
```



### function getValueAt 


```cpp
virtual double sdm::BaseValueFunction::getValueAt (
    const TInput & input,
    number t=0
) = 0
```



### function getptr 


```cpp
std::shared_ptr< BaseValueFunction < TInput > > sdm::BaseValueFunction::getptr () 
```




**Returns:**

the corresponding shared pointer 




        

### function initialize [1/2]


```cpp
virtual void sdm::BaseValueFunction::initialize () = 0
```



### function initialize [2/2]


```cpp
virtual void sdm::BaseValueFunction::initialize (
    double v,
    number t=0
) = 0
```



### function isFiniteHorizon 


```cpp
bool sdm::BaseValueFunction::isFiniteHorizon () const
```



### function isInfiniteHorizon 


```cpp
bool sdm::BaseValueFunction::isInfiniteHorizon () const
```



### function load 


```cpp
inline virtual void sdm::BaseValueFunction::load (
    std::string
) 
```




**Parameters:**


* `filename` the filename 



        

### function save 


```cpp
inline virtual void sdm::BaseValueFunction::save (
    std::string
) 
```




**Parameters:**


* `filename` the filename 



        

### function str 


```cpp
virtual std::string sdm::BaseValueFunction::str () const = 0
```



### function updateValueAt 


```cpp
virtual void sdm::BaseValueFunction::updateValueAt (
    const TInput & input,
    number t=0
) = 0
```




**Parameters:**


* `state` the state 



**Returns:**

the action value vector Get the q-value given state and action




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the q-value Update the value at a given state 




        

### function ~BaseValueFunction 


```cpp
inline virtual sdm::BaseValueFunction::~BaseValueFunction () 
```


## Protected Attributes Documentation


### variable horizon\_ 


```cpp
number sdm::BaseValueFunction< TInput >::horizon_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::BaseValueFunction::operator<< (
    std::ostream & os,
    const BaseValueFunction < TInput > & vf
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/base_value_function.hpp`