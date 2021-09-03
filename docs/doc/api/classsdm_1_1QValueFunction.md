
# Class sdm::QValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TInput&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**QValueFunction**](classsdm_1_1QValueFunction.md)



_This class is the abstract class of value function. All value function must derived this class._ [More...](#detailed-description)

* `#include <qvalue_function.hpp>`



Inherits the following classes: [sdm::BaseValueFunction](classsdm_1_1BaseValueFunction.md)


Inherited by the following classes: [sdm::TabularQValueFunction](classsdm_1_1TabularQValueFunction.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**Pair**](namespacesdm.md#typedef-pair)&lt; TInput, std::shared\_ptr&lt; Action &gt; &gt; | [**TGlobalInput**](classsdm_1_1QValueFunction.md#typedef-tglobalinput)  <br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |








## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**QValueFunction**](classsdm_1_1QValueFunction.md#function-qvaluefunction-1-2) () <br> |
|   | [**QValueFunction**](classsdm_1_1QValueFunction.md#function-qvaluefunction-2-2) ([**number**](namespacesdm.md#typedef-number) horizon) <br>_Construct a new Incremental Value_ [_**Function**_](classsdm_1_1Function.md) _object._ |
|  std::shared\_ptr&lt; Action &gt; | [**getBestAction**](classsdm_1_1QValueFunction.md#function-getbestaction) (const [**TGlobalInput**](classsdm_1_1QValueFunction.md#typedef-tglobalinput) & input, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the best action to do at a state._  |
| virtual int | [**getNumStates**](classsdm_1_1QValueFunction.md#function-getnumstates) () const = 0<br> |
| virtual double | [**getQValueAt**](classsdm_1_1QValueFunction.md#function-getqvalueat) (const TInput & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the q-value given state and action._  |
| virtual std::shared\_ptr&lt; [**VectorInterface**](classsdm_1_1VectorInterface.md)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; &gt; | [**getQValuesAt**](classsdm_1_1QValueFunction.md#function-getqvaluesat) (const TInput & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Get the q-values for all actions at a state._  |
|  double | [**getValueAt**](classsdm_1_1QValueFunction.md#function-getvalueat) (const [**TGlobalInput**](classsdm_1_1QValueFunction.md#typedef-tglobalinput) & input, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the value at a given state._  |
|  std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md) &gt; | [**getptr**](classsdm_1_1QValueFunction.md#function-getptr) () <br>_Get shared pointer on the current_ [_**QValueFunction**_](classsdm_1_1QValueFunction.md) _._ |
| virtual void | [**initialize**](classsdm_1_1QValueFunction.md#function-initialize-1-2) () = 0<br>_Initialize the value function._  |
| virtual void | [**initialize**](classsdm_1_1QValueFunction.md#function-initialize-2-2) (double v, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Initialize the value function with a default value._  |
| virtual bool | [**isNotSeen**](classsdm_1_1QValueFunction.md#function-isnotseen) (const TInput & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual std::string | [**str**](classsdm_1_1QValueFunction.md#function-str) () const = 0<br>_Define this function in order to be able to display the value function._  |
| virtual void | [**updateQValueAt**](classsdm_1_1QValueFunction.md#function-updateqvalueat-1-2) (const TInput & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Update the value at a given state._  |
| virtual void | [**updateQValueAt**](classsdm_1_1QValueFunction.md#function-updateqvalueat-2-2) (const TInput & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t, double target) = 0<br>_Update the value at a given state (given a target)_  |
|  void | [**updateValueAt**](classsdm_1_1QValueFunction.md#function-updatevalueat) (const [**TGlobalInput**](classsdm_1_1QValueFunction.md#typedef-tglobalinput) & input, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Update the value at a given state._  |

## Public Functions inherited from sdm::BaseValueFunction

See [sdm::BaseValueFunction](classsdm_1_1BaseValueFunction.md)

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








## Protected Attributes inherited from sdm::BaseValueFunction

See [sdm::BaseValueFunction](classsdm_1_1BaseValueFunction.md)

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1BaseValueFunction.md#variable-horizon-)  <br>_The horizon for planning/learning._  |







# Detailed Description




**Template parameters:**


* `std::shared_ptr<State>` Type of the state. 
* `std::shared_ptr<Action>` Type of the action. 
* `double` Type of the value. 



    
## Public Types Documentation


### typedef TGlobalInput 


```cpp
using sdm::QValueFunction< TInput >::TGlobalInput =  Pair<TInput,std::shared_ptr<Action> >;
```


## Public Functions Documentation


### function QValueFunction [1/2]


```cpp
sdm::QValueFunction::QValueFunction () 
```



### function QValueFunction [2/2]


```cpp
sdm::QValueFunction::QValueFunction (
    number horizon
) 
```




**Parameters:**


* `problem` 
* `default_value` 



        

### function getBestAction 


```cpp
std::shared_ptr< Action > sdm::QValueFunction::getBestAction (
    const TGlobalInput & input,
    number t
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the best action 




        

### function getNumStates 


```cpp
virtual int sdm::QValueFunction::getNumStates () const = 0
```



### function getQValueAt 


```cpp
virtual double sdm::QValueFunction::getQValueAt (
    const TInput & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the q-value 




        

### function getQValuesAt 


```cpp
virtual std::shared_ptr< VectorInterface < std::shared_ptr< Action >, double > > sdm::QValueFunction::getQValuesAt (
    const TInput & state,
    number t
) = 0
```




**Parameters:**


* `state` the state 



**Returns:**

the q-value vector 




        

### function getValueAt 


```cpp
double sdm::QValueFunction::getValueAt (
    const TGlobalInput & input,
    number t=0
) 
```



### function getptr 


```cpp
std::shared_ptr< QValueFunction > sdm::QValueFunction::getptr () 
```



### function initialize [1/2]


```cpp
virtual void sdm::QValueFunction::initialize () = 0
```


Implements [*sdm::BaseValueFunction::initialize*](classsdm_1_1BaseValueFunction.md#function-initialize-1-2)


### function initialize [2/2]


```cpp
virtual void sdm::QValueFunction::initialize (
    double v,
    number t=0
) = 0
```


Implements [*sdm::BaseValueFunction::initialize*](classsdm_1_1BaseValueFunction.md#function-initialize-2-2)


### function isNotSeen 


```cpp
virtual bool sdm::QValueFunction::isNotSeen (
    const TInput & state,
    number t
) = 0
```



### function str 


```cpp
virtual std::string sdm::QValueFunction::str () const = 0
```


Implements [*sdm::BaseValueFunction::str*](classsdm_1_1BaseValueFunction.md#function-str)


### function updateQValueAt [1/2]


```cpp
virtual void sdm::QValueFunction::updateQValueAt (
    const TInput & state,
    const std::shared_ptr< Action > & action,
    number t=0
) = 0
```



### function updateQValueAt [2/2]


```cpp
virtual void sdm::QValueFunction::updateQValueAt (
    const TInput & state,
    const std::shared_ptr< Action > & action,
    number t,
    double target
) = 0
```



### function updateValueAt 


```cpp
void sdm::QValueFunction::updateValueAt (
    const TGlobalInput & input,
    number t=0
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/qvalue_function.hpp`