
<NavBar active_item_id="2"/>

# Class sdm::TabularValueFunction

**template &lt;typename TState typename TState, typename TAction typename TAction, typename TValue typename TValue, template&lt; typename TI, typename TV &gt; class TStruct&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)



_Tabular value function are functions of state and action that use a vector representation to store the values._ [More...](#detailed-description)

* `#include <tabular_value_function.hpp>`



Inherits the following classes: [sdm::ValueFunction](classsdm_1_1ValueFunction.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md#function-tabularvaluefunction-1-2) (std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; problem, int horizon, std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt;&gt; initializer) <br> |
|   | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md#function-tabularvaluefunction-2-2) (std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; problem, int horizon=0, TValue default\_value=0.) <br> |
| virtual TAction | [**getBestAction**](classsdm_1_1TabularValueFunction.md#function-getbestaction) (TState & state, int t=0) <br>_Get the best action to do at a state._  |
| virtual TValue | [**getQValueAt**](classsdm_1_1TabularValueFunction.md#function-getqvalueat-1-2) (TState & state, TAction & action, int t=0) <br>_Get the q-value given state and action._  |
| virtual std::shared\_ptr&lt; [**VectorImpl**](classsdm_1_1VectorImpl.md)&lt; TAction, TValue &gt; &gt; | [**getQValueAt**](classsdm_1_1TabularValueFunction.md#function-getqvalueat-2-2) (TState & state, int t=0) <br>_Get the q-value at a state._  |
| virtual TValue | [**getValueAt**](classsdm_1_1TabularValueFunction.md#function-getvalueat) (TState & state, int t=0) <br>_Evaluate the value at a state._  |
| virtual void | [**initialize**](classsdm_1_1TabularValueFunction.md#function-initialize-1-2) () <br>_Initialize the value function according using initializer._  |
| virtual void | [**initialize**](classsdm_1_1TabularValueFunction.md#function-initialize-2-2) (TValue default\_value, int t=0) <br>_Set all values of the vector to a default value._  |
| virtual std::string | [**str**](classsdm_1_1TabularValueFunction.md#function-str) () <br> |
| virtual void | [**updateValueAt**](classsdm_1_1TabularValueFunction.md#function-updatevalueat) (TState & state, int t=0) <br> |

## Public Functions inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|   | [**ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction) (std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; problem, int horizon) <br>_Construct a new Incremental Value_ [_**Function**_](classsdm_1_1Function.md) _object._ |
| virtual TAction | [**getBestAction**](classsdm_1_1ValueFunction.md#function-getbestaction) (TState & state, int t=0) = 0<br>_Get the next action to do._  |
|  int | [**getHorizon**](classsdm_1_1ValueFunction.md#function-gethorizon) () const<br> |
| virtual std::shared\_ptr&lt; [**VectorImpl**](classsdm_1_1VectorImpl.md)&lt; TAction, TValue &gt; &gt; | [**getQValueAt**](classsdm_1_1ValueFunction.md#function-getqvalueat-1-2) (TState & state, int t=0) = 0<br>_Get the q value on a state._  |
| virtual TValue | [**getQValueAt**](classsdm_1_1ValueFunction.md#function-getqvalueat-2-2) (TState & state, TAction & action, int t=0) = 0<br>_Get the q value on one couple (state, action)_  |
| virtual TValue | [**getValueAt**](classsdm_1_1ValueFunction.md#function-getvalueat) (TState & state, int t=0) = 0<br>_Get the value of the function on one point._  |
|  std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; | [**getWorld**](classsdm_1_1ValueFunction.md#function-getworld) () <br> |
| virtual void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-1-2) () = 0<br>_Initialize the value function._  |
| virtual void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-2-2) (TValue v, int t=0) = 0<br>_Initialize the value function._  |
|  int | [**isFiniteHorizon**](classsdm_1_1ValueFunction.md#function-isfinitehorizon) () const<br> |
|  int | [**isInfiniteHorizon**](classsdm_1_1ValueFunction.md#function-isinfinitehorizon) () const<br> |
| virtual std::string | [**str**](classsdm_1_1ValueFunction.md#function-str) () = 0<br> |
| virtual void | [**updateValueAt**](classsdm_1_1ValueFunction.md#function-updatevalueat) (TState & s, int t=0) = 0<br> |



## Protected Types

| Type | Name |
| ---: | :--- |
| typedef TStruct&lt; TState, TValue &gt; | [**Container**](classsdm_1_1TabularValueFunction.md#typedef-container)  <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**initializer\_**](classsdm_1_1TabularValueFunction.md#variable-initializer-)  <br>_The initializer to use for this value function._  |
|  std::vector&lt; [**Container**](classsdm_1_1TabularValueFunction.md#typedef-container) &gt; | [**representation**](classsdm_1_1TabularValueFunction.md#variable-representation)  <br>_The value function represention. The default representation is a_ [_**MappedVector**_](classsdm_1_1MappedVector.md) _but every class implementing_[_**VectorImpl**_](classsdm_1_1VectorImpl.md) _interface can be used._ |

## Protected Attributes inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|  int | [**horizon\_**](classsdm_1_1ValueFunction.md#variable-horizon-)  <br>_The horizon for planning._  |
|  std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; | [**problem\_**](classsdm_1_1ValueFunction.md#variable-problem-)  <br>_The problem which incremental value function is evaluated._  |







# Detailed Description




**Template parameters:**


* `TState` Type of the states 
* `TAction` Type of the states 
* `TValue` Type of the values (must be primitive type) 
* `TStruct` Type of vector container ([**MappedVector**](classsdm_1_1MappedVector.md), DenseVector and SparseVector are common type) 



    
## Public Functions Documentation


### function TabularValueFunction [1/2]


```cpp
inline sdm::TabularValueFunction::TabularValueFunction (
    std::shared_ptr< POSG > problem,
    int horizon,
    std::shared_ptr< Initializer < TState, TAction >> initializer
) 
```



### function TabularValueFunction [2/2]


```cpp
inline sdm::TabularValueFunction::TabularValueFunction (
    std::shared_ptr< POSG > problem,
    int horizon=0,
    TValue default_value=0.
) 
```



### function getBestAction 


```cpp
inline virtual TAction sdm::TabularValueFunction::getBestAction (
    TState & state,
    int t=0
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the best action 




        
Implements [*sdm::ValueFunction::getBestAction*](classsdm_1_1ValueFunction.md#function-getbestaction)


### function getQValueAt [1/2]


```cpp
inline virtual TValue sdm::TabularValueFunction::getQValueAt (
    TState & state,
    TAction & action,
    int t=0
) 
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the q-value 




        
Implements [*sdm::ValueFunction::getQValueAt*](classsdm_1_1ValueFunction.md#function-getqvalueat-2-2)


### function getQValueAt [2/2]


```cpp
virtual std::shared_ptr< VectorImpl < TAction, TValue > > sdm::TabularValueFunction::getQValueAt (
    TState & state,
    int t=0
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the action value vector 




        
Implements [*sdm::ValueFunction::getQValueAt*](classsdm_1_1ValueFunction.md#function-getqvalueat-1-2)


### function getValueAt 


```cpp
inline virtual TValue sdm::TabularValueFunction::getValueAt (
    TState & state,
    int t=0
) 
```




**Parameters:**


* `state` the state where we want to evaluate the function 



**Returns:**

the value 




        
Implements [*sdm::ValueFunction::getValueAt*](classsdm_1_1ValueFunction.md#function-getvalueat)


### function initialize [1/2]


```cpp
inline virtual void sdm::TabularValueFunction::initialize () 
```


Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-1-2)


### function initialize [2/2]


```cpp
inline virtual void sdm::TabularValueFunction::initialize (
    TValue default_value,
    int t=0
) 
```




**Parameters:**


* `default_value` the default value 



        
Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-2-2)


### function str 


```cpp
inline virtual std::string sdm::TabularValueFunction::str () 
```


Implements [*sdm::ValueFunction::str*](classsdm_1_1ValueFunction.md#function-str)


### function updateValueAt 


```cpp
inline virtual void sdm::TabularValueFunction::updateValueAt (
    TState & state,
    int t=0
) 
```


Implements [*sdm::ValueFunction::updateValueAt*](classsdm_1_1ValueFunction.md#function-updatevalueat)

## Protected Types Documentation


### typedef Container 


```cpp
using sdm::TabularValueFunction< TState, TAction, TValue, TStruct >::Container =  TStruct<TState, TValue>;
```


## Protected Attributes Documentation


### variable initializer\_ 


```cpp
std::shared_ptr<Initializer<TState, TAction> > sdm::TabularValueFunction< TState, TAction, TValue, TStruct >::initializer_;
```



### variable representation 


```cpp
std::vector<Container> sdm::TabularValueFunction< TState, TAction, TValue, TStruct >::representation;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/tabular_value_function.hpp`