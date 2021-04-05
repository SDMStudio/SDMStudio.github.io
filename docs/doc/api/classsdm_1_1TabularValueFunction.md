
<NavBar active_item_id="2"/>

# Class sdm::TabularValueFunction

**template &lt;typename TState typename TState, typename TAction typename TAction, typename TValue typename TValue, template&lt; typename TI, typename TV &gt; class TBackupOperator, template&lt; typename TI, typename TV &gt; class TStruct&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)



_Tabular value function are functions of state and action that use a vector representation to store the values._ [More...](#detailed-description)

* `#include <tabular_value_function.hpp>`



Inherits the following classes: [sdm::ValueFunction](classsdm_1_1ValueFunction.md)










## Public Types inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

| Type | Name |
| ---: | :--- |
| typedef std::pair&lt; TInput1, TInput2 &gt; | [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |













## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md#function-tabularvaluefunction-1-2) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt;&gt; problem, [**number**](namespacesdm.md#typedef-number) horizon, std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt;&gt; initializer) <br> |
|   | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md#function-tabularvaluefunction-2-2) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt;&gt; problem, [**number**](namespacesdm.md#typedef-number) horizon=0, TValue default\_value=0.) <br> |
|  [**backup\_operator\_type**](classsdm_1_1TabularValueFunction.md#typedef-backup-operator-type) | [**getBackupOperator**](classsdm_1_1TabularValueFunction.md#function-getbackupoperator) () <br> |
| virtual std::vector&lt; TState &gt; | [**getSupport**](classsdm_1_1TabularValueFunction.md#function-getsupport) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual TValue | [**getValueAt**](classsdm_1_1TabularValueFunction.md#function-getvalueat-1-2) (const TState & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Evaluate the value at a state._  |
|  [**Container**](classsdm_1_1TabularValueFunction.md#typedef-container) | [**getValueAt**](classsdm_1_1TabularValueFunction.md#function-getvalueat-2-2) ([**number**](namespacesdm.md#typedef-number) t=0) <br> |
| virtual void | [**initialize**](classsdm_1_1TabularValueFunction.md#function-initialize-1-2) () <br>_Initialize the value function according using initializer._  |
| virtual void | [**initialize**](classsdm_1_1TabularValueFunction.md#function-initialize-2-2) (TValue default\_value, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Set all values of the vector to a default value._  |
| virtual std::string | [**str**](classsdm_1_1TabularValueFunction.md#function-str) () <br>_Define this function in order to be able to display the value function._  |
| virtual void | [**updateValueAt**](classsdm_1_1TabularValueFunction.md#function-updatevalueat-1-2) (const TState & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Update the value at a specific state and timestep._  |
|  void | [**updateValueAt**](classsdm_1_1TabularValueFunction.md#function-updatevalueat-2-2) (const TState & state, [**number**](namespacesdm.md#typedef-number) t, TValue target) <br> |

## Public Functions inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|   | [**ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt;&gt; problem, [**number**](namespacesdm.md#typedef-number) horizon) <br>_Construct a new Incremental Value_ [_**Function**_](classsdm_1_1Function.md) _object._ |
|  TAction | [**getBestAction**](classsdm_1_1ValueFunction.md#function-getbestaction) (const TState & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Get the best action to do at a state._  |
|  double | [**getDiscount**](classsdm_1_1ValueFunction.md#function-getdiscount) ([**number**](namespacesdm.md#typedef-number) t) <br>_Get the discount factor. If the problem is serialized then the discount factor is equal to one for every timestep except the one where agent $n$ take an action._  |
|  int | [**getHorizon**](classsdm_1_1ValueFunction.md#function-gethorizon) () const<br> |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), TValue &gt; &gt; | [**getInitFunction**](classsdm_1_1ValueFunction.md#function-getinitfunction) () <br> |
|  std::shared\_ptr&lt; [**VectorImpl**](classsdm_1_1VectorImpl.md)&lt; TAction, TValue &gt; &gt; | [**getQValueAt**](classsdm_1_1ValueFunction.md#function-getqvalueat-1-2) (const TState & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the q-value at a state._  |
|  TValue | [**getQValueAt**](classsdm_1_1ValueFunction.md#function-getqvalueat-2-2) (const TState & state, const TAction & action, [**number**](namespacesdm.md#typedef-number) t) <br>_Get the q-value given state and action._  |
| virtual std::vector&lt; TState &gt; | [**getSupport**](classsdm_1_1ValueFunction.md#function-getsupport) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual TValue | [**getValueAt**](classsdm_1_1ValueFunction.md#function-getvalueat) (const TState & state, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Get the value at a given state._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt; &gt; | [**getWorld**](classsdm_1_1ValueFunction.md#function-getworld) () <br>_Get the world (i.e. the problem that is solve by_ [_**HSVI**_](classsdm_1_1HSVI.md) _)._ |
| virtual void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-1-3) () = 0<br>_Initialize the value function._  |
| virtual void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-2-3) (TValue v, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Initialize the value function with a default value._  |
|  void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-3-3) (std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), TValue &gt;&gt; init\_function) <br>_Set a function as a interactive way to get initial values for state that are not already initialized._  |
|  bool | [**isFiniteHorizon**](classsdm_1_1ValueFunction.md#function-isfinitehorizon) () const<br> |
|  bool | [**isInfiniteHorizon**](classsdm_1_1ValueFunction.md#function-isinfinitehorizon) () const<br> |
| virtual TValue | [**operator()**](classsdm_1_1ValueFunction.md#function-operator()) (const TState & state, const [**number**](namespacesdm.md#typedef-number) & t=0) <br> |
| virtual std::string | [**str**](classsdm_1_1ValueFunction.md#function-str) () = 0<br>_Define this function in order to be able to display the value function._  |
| virtual void | [**updateValueAt**](classsdm_1_1ValueFunction.md#function-updatevalueat) (const TState & s, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Update the value at a given state._  |
| virtual  | [**~ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction) () <br>_Destroy the value function._  |

## Public Functions inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-1-2) (const TInput1 &, const TInput2 &) = 0<br> |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-2-2) (const [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type) & p\_input) <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |





## Protected Types

| Type | Name |
| ---: | :--- |
| typedef TStruct&lt; TState, TValue &gt; | [**Container**](classsdm_1_1TabularValueFunction.md#typedef-container)  <br> |
| typedef TBackupOperator&lt; TState, TAction &gt; | [**backup\_operator\_type**](classsdm_1_1TabularValueFunction.md#typedef-backup-operator-type)  <br> |








## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**backup\_operator\_type**](classsdm_1_1TabularValueFunction.md#typedef-backup-operator-type) | [**backup\_op\_**](classsdm_1_1TabularValueFunction.md#variable-backup-op-)  <br>_The backup operator used in order to update this value function._  |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**initializer\_**](classsdm_1_1TabularValueFunction.md#variable-initializer-)  <br>_The initializer to use for this value function._  |
|  std::vector&lt; [**Container**](classsdm_1_1TabularValueFunction.md#typedef-container) &gt; | [**representation**](classsdm_1_1TabularValueFunction.md#variable-representation)  <br>_The value function represention. The default representation is a_ [_**MappedVector**_](classsdm_1_1MappedVector.md) _but every class implementing_[_**VectorImpl**_](classsdm_1_1VectorImpl.md) _interface can be used._ |

## Protected Attributes inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|  int | [**horizon\_**](classsdm_1_1ValueFunction.md#variable-horizon-)  <br>_The horizon for planning._  |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), TValue &gt; &gt; | [**init\_function\_**](classsdm_1_1ValueFunction.md#variable-init-function-)   = = nullptr<br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt; &gt; | [**problem\_**](classsdm_1_1ValueFunction.md#variable-problem-)  <br>_The problem which incremental value function is evaluated._  |















# Detailed Description




**Template parameters:**


* `TState` Type of the states 
* `TAction` Type of the states 
* `TValue` Type of the values (must be primitive type) 
* `TStruct` Type of vector container ([**MappedVector**](classsdm_1_1MappedVector.md), DenseVector and SparseVector are common type) 



    
## Public Functions Documentation


### function TabularValueFunction [1/2]


```cpp
sdm::TabularValueFunction::TabularValueFunction (
    std::shared_ptr< SolvableByHSVI < TState, TAction >> problem,
    number horizon,
    std::shared_ptr< Initializer < TState, TAction >> initializer
) 
```



### function TabularValueFunction [2/2]


```cpp
sdm::TabularValueFunction::TabularValueFunction (
    std::shared_ptr< SolvableByHSVI < TState, TAction >> problem,
    number horizon=0,
    TValue default_value=0.
) 
```



### function getBackupOperator 


```cpp
backup_operator_type sdm::TabularValueFunction::getBackupOperator () 
```



### function getSupport 


```cpp
virtual std::vector< TState > sdm::TabularValueFunction::getSupport (
    number t
) 
```




**Returns:**

std::string 




        
Implements [*sdm::ValueFunction::getSupport*](classsdm_1_1ValueFunction.md#function-getsupport)


### function getValueAt [1/2]


```cpp
virtual TValue sdm::TabularValueFunction::getValueAt (
    const TState & state,
    number t=0
) 
```




**Parameters:**


* `state` the state where we want to evaluate the function 



**Returns:**

the value 




        
Implements [*sdm::ValueFunction::getValueAt*](classsdm_1_1ValueFunction.md#function-getvalueat)


### function getValueAt [2/2]


```cpp
Container sdm::TabularValueFunction::getValueAt (
    number t=0
) 
```



### function initialize [1/2]


```cpp
virtual void sdm::TabularValueFunction::initialize () 
```


Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-1-3)


### function initialize [2/2]


```cpp
virtual void sdm::TabularValueFunction::initialize (
    TValue default_value,
    number t=0
) 
```




**Parameters:**


* `default_value` the default value 



        
Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-2-3)


### function str 


```cpp
virtual std::string sdm::TabularValueFunction::str () 
```


Implements [*sdm::ValueFunction::str*](classsdm_1_1ValueFunction.md#function-str)


### function updateValueAt [1/2]


```cpp
virtual void sdm::TabularValueFunction::updateValueAt (
    const TState & state,
    number t=0
) 
```




**Parameters:**


* `state` the state 
* `t` the timestep. Must be less than the horizon, $t &lt; h$. Except in serialized problem solving where real timesteps are serialized and thus we need $t &lt; h  n$. 



        
Implements [*sdm::ValueFunction::updateValueAt*](classsdm_1_1ValueFunction.md#function-updatevalueat)


### function updateValueAt [2/2]


```cpp
void sdm::TabularValueFunction::updateValueAt (
    const TState & state,
    number t,
    TValue target
) 
```


## Protected Types Documentation


### typedef Container 


```cpp
using sdm::TabularValueFunction< TState, TAction, TValue, TBackupOperator, TStruct >::Container =  TStruct<TState, TValue>;
```



### typedef backup\_operator\_type 


```cpp
using sdm::TabularValueFunction< TState, TAction, TValue, TBackupOperator, TStruct >::backup_operator_type =  TBackupOperator<TState, TAction>;
```


## Protected Attributes Documentation


### variable backup\_op\_ 


```cpp
backup_operator_type sdm::TabularValueFunction< TState, TAction, TValue, TBackupOperator, TStruct >::backup_op_;
```



### variable initializer\_ 


```cpp
std::shared_ptr<Initializer<TState, TAction> > sdm::TabularValueFunction< TState, TAction, TValue, TBackupOperator, TStruct >::initializer_;
```



### variable representation 


```cpp
std::vector<Container> sdm::TabularValueFunction< TState, TAction, TValue, TBackupOperator, TStruct >::representation;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::TabularValueFunction::operator<< (
    std::ostream & os,
    TabularValueFunction < TState, TAction > & vf
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/tabular_value_function.hpp`