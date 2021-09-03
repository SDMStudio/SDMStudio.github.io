
# Class sdm::QValueFunctionConditioning

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TCondition, class TState&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**QValueFunctionConditioning**](classsdm_1_1QValueFunctionConditioning.md)





* `#include <qvalue_function_conditioning.hpp>`



Inherits the following classes: [sdm::QValueFunction](classsdm_1_1QValueFunction.md)


Inherited by the following classes: [sdm::TabularQValueFunctionConditioning](classsdm_1_1TabularQValueFunctionConditioning.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**Pair**](namespacesdm.md#typedef-pair)&lt; TCondition, TState &gt; | [**TInput**](classsdm_1_1QValueFunctionConditioning.md#typedef-tinput)  <br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |

## Public Types inherited from sdm::QValueFunction

See [sdm::QValueFunction](classsdm_1_1QValueFunction.md)

| Type | Name |
| ---: | :--- |
| typedef [**Pair**](namespacesdm.md#typedef-pair)&lt; TInput, std::shared\_ptr&lt; Action &gt; &gt; | [**TGlobalInput**](classsdm_1_1QValueFunction.md#typedef-tglobalinput)  <br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |











## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**QValueFunctionConditioning**](classsdm_1_1QValueFunctionConditioning.md#function-qvaluefunctionconditioning-1-2) () <br> |
|   | [**QValueFunctionConditioning**](classsdm_1_1QValueFunctionConditioning.md#function-qvaluefunctionconditioning-2-2) ([**number**](namespacesdm.md#typedef-number) horizon) <br>_Construct a new Incremental Value_ [_**Function**_](classsdm_1_1Function.md) _object._ |
| virtual double | [**getQValueAt**](classsdm_1_1QValueFunctionConditioning.md#function-getqvalueat-1-2) (const TCondition &, const TState & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**getQValueAt**](classsdm_1_1QValueFunctionConditioning.md#function-getqvalueat-2-2) (const [**TInput**](classsdm_1_1QValueFunctionConditioning.md#typedef-tinput) & input, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the q-value given state and action._  |
|  std::shared\_ptr&lt; [**QValueFunctionConditioning**](classsdm_1_1QValueFunctionConditioning.md)&lt; TCondition, TState &gt; &gt; | [**getptr**](classsdm_1_1QValueFunctionConditioning.md#function-getptr) () <br>_Get shared pointer on the current QValueFunctionConditioning&lt;TCondition&gt;_  |
| virtual void | [**updateQValueAt**](classsdm_1_1QValueFunctionConditioning.md#function-updateqvalueat-1-4) (const TCondition &, const TState & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br> |
| virtual void | [**updateQValueAt**](classsdm_1_1QValueFunctionConditioning.md#function-updateqvalueat-2-4) (const TCondition &, const TState & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t, double delta) = 0<br> |
| virtual void | [**updateQValueAt**](classsdm_1_1QValueFunctionConditioning.md#function-updateqvalueat-3-4) (const [**TInput**](classsdm_1_1QValueFunctionConditioning.md#typedef-tinput) & input, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Update the value at a given input._  |
| virtual void | [**updateQValueAt**](classsdm_1_1QValueFunctionConditioning.md#function-updateqvalueat-4-4) (const [**TInput**](classsdm_1_1QValueFunctionConditioning.md#typedef-tinput) & input, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t, double target) <br>_Update the value at a given input (given a target)_  |

## Public Functions inherited from sdm::QValueFunction

See [sdm::QValueFunction](classsdm_1_1QValueFunction.md)

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










## Public Types Documentation


### typedef TInput 


```cpp
using sdm::QValueFunctionConditioning< TCondition, TState >::TInput =  Pair<TCondition,TState>;
```


## Public Functions Documentation


### function QValueFunctionConditioning [1/2]


```cpp
sdm::QValueFunctionConditioning::QValueFunctionConditioning () 
```



### function QValueFunctionConditioning [2/2]


```cpp
sdm::QValueFunctionConditioning::QValueFunctionConditioning (
    number horizon
) 
```




**Parameters:**


* `problem` 
* `default_value` 



        

### function getQValueAt [1/2]


```cpp
virtual double sdm::QValueFunctionConditioning::getQValueAt (
    const TCondition &,
    const TState & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```



### function getQValueAt [2/2]


```cpp
virtual double sdm::QValueFunctionConditioning::getQValueAt (
    const TInput & input,
    const std::shared_ptr< Action > & action,
    number t
) 
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the q-value 




        

### function getptr 


```cpp
std::shared_ptr< QValueFunctionConditioning < TCondition, TState > > sdm::QValueFunctionConditioning::getptr () 
```



### function updateQValueAt [1/4]


```cpp
virtual void sdm::QValueFunctionConditioning::updateQValueAt (
    const TCondition &,
    const TState & state,
    const std::shared_ptr< Action > & action,
    number t=0
) = 0
```



### function updateQValueAt [2/4]


```cpp
virtual void sdm::QValueFunctionConditioning::updateQValueAt (
    const TCondition &,
    const TState & state,
    const std::shared_ptr< Action > & action,
    number t,
    double delta
) = 0
```



### function updateQValueAt [3/4]


```cpp
virtual void sdm::QValueFunctionConditioning::updateQValueAt (
    const TInput & input,
    const std::shared_ptr< Action > & action,
    number t=0
) 
```



### function updateQValueAt [4/4]


```cpp
virtual void sdm::QValueFunctionConditioning::updateQValueAt (
    const TInput & input,
    const std::shared_ptr< Action > & action,
    number t,
    double target
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/qvalue_function_conditioning.hpp`