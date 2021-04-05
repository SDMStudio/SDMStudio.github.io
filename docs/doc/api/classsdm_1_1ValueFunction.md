
<NavBar active_item_id="2"/>

# Class sdm::ValueFunction

**template &lt;typename TState, typename TAction, typename TValue&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueFunction**](classsdm_1_1ValueFunction.md)



_This class is the abstract class of value function. All value function must derived this class._ [More...](#detailed-description)

* `#include <value_function.hpp>`





Inherited by the following classes: [sdm::TabularValueFunction](classsdm_1_1TabularValueFunction.md)










## Public Functions

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




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**horizon\_**](classsdm_1_1ValueFunction.md#variable-horizon-)  <br>_The horizon for planning._  |
|  std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; | [**problem\_**](classsdm_1_1ValueFunction.md#variable-problem-)  <br>_The problem which incremental value function is evaluated._  |




# Detailed Description




**Template parameters:**


* `TState` Type of the state. 
* `TAction` Type of the action. 
* `TValue` Type of the value. 



    
## Public Functions Documentation


### function ValueFunction 


```cpp
inline sdm::ValueFunction::ValueFunction (
    std::shared_ptr< POSG > problem,
    int horizon
) 
```




**Parameters:**


* `problem` 
* `default_value` 



        

### function getBestAction 


```cpp
virtual TAction sdm::ValueFunction::getBestAction (
    TState & state,
    int t=0
) = 0
```




**Parameters:**


* `state` The point where we want the best action 



**Returns:**

The next action 




        

### function getHorizon 


```cpp
inline int sdm::ValueFunction::getHorizon () const
```



### function getQValueAt [1/2]


```cpp
virtual std::shared_ptr< VectorImpl < TAction, TValue > > sdm::ValueFunction::getQValueAt (
    TState & state,
    int t=0
) = 0
```




**Parameters:**


* `state` The state where we want to evaluate q-value 



**Returns:**

The Q Value at this state 




        

### function getQValueAt [2/2]


```cpp
virtual TValue sdm::ValueFunction::getQValueAt (
    TState & state,
    TAction & action,
    int t=0
) = 0
```




**Parameters:**


* `state` The state where we want the value 
* `action` The action where we want the value 



**Returns:**

The Q Value 




        

### function getValueAt 


```cpp
virtual TValue sdm::ValueFunction::getValueAt (
    TState & state,
    int t=0
) = 0
```




**Parameters:**


* `state` The point where we want the value 



**Returns:**

The value of the bound on that point 




        

### function getWorld 


```cpp
inline std::shared_ptr< POSG > sdm::ValueFunction::getWorld () 
```



### function initialize [1/2]


```cpp
virtual void sdm::ValueFunction::initialize () = 0
```



### function initialize [2/2]


```cpp
virtual void sdm::ValueFunction::initialize (
    TValue v,
    int t=0
) = 0
```



### function isFiniteHorizon 


```cpp
inline int sdm::ValueFunction::isFiniteHorizon () const
```



### function isInfiniteHorizon 


```cpp
inline int sdm::ValueFunction::isInfiniteHorizon () const
```



### function str 


```cpp
virtual std::string sdm::ValueFunction::str () = 0
```



### function updateValueAt 


```cpp
virtual void sdm::ValueFunction::updateValueAt (
    TState & s,
    int t=0
) = 0
```


## Protected Attributes Documentation


### variable horizon\_ 


```cpp
int sdm::ValueFunction< TState, TAction, TValue >::horizon_;
```



### variable problem\_ 


```cpp
std::shared_ptr<POSG> sdm::ValueFunction< TState, TAction, TValue >::problem_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::ValueFunction::operator<< (
    std::ostream & os,
    ValueFunction < TState, TAction > & vf
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/value_function.hpp`