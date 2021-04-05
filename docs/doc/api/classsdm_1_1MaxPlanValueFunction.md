
<NavBar active_item_id="2"/>

# Class sdm::MaxPlanValueFunction

**template &lt;typename TVector typename TVector, typename TAction typename TAction, typename TValue typename TValue&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MaxPlanValueFunction**](classsdm_1_1MaxPlanValueFunction.md)



[More...](#detailed-description)

* `#include <max_plan_vf.hpp>`



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
|   | [**MaxPlanValueFunction**](classsdm_1_1MaxPlanValueFunction.md#function-maxplanvaluefunction-1-3) () <br> |
|   | [**MaxPlanValueFunction**](classsdm_1_1MaxPlanValueFunction.md#function-maxplanvaluefunction-2-3) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TVector, TAction &gt;&gt; problem, int horizon, std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TVector, TAction &gt;&gt; initializer) <br> |
|   | [**MaxPlanValueFunction**](classsdm_1_1MaxPlanValueFunction.md#function-maxplanvaluefunction-3-3) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TVector, TAction &gt;&gt; problem, int horizon=0, TValue default\_value=0.) <br> |
|  TVector | [**backup\_bellman\_operator**](classsdm_1_1MaxPlanValueFunction.md#function-backup-bellman-operator) (std::shared\_ptr&lt; POSG &gt; world, TVector belief) <br> |
|  void | [**bounded\_prune**](classsdm_1_1MaxPlanValueFunction.md#function-bounded-prune) (int t=0) <br> |
|  TAction | [**getBestAction**](classsdm_1_1MaxPlanValueFunction.md#function-getbestaction) (const TVector & state, int t=0) <br> |
|  std::pair&lt; TValue, TVector &gt; | [**getMaxAt**](classsdm_1_1MaxPlanValueFunction.md#function-getmaxat) (const TVector & state, int t) <br>_Get the maximum value and hyperplan at a specific state._  |
|  TValue | [**getQValueAt**](classsdm_1_1MaxPlanValueFunction.md#function-getqvalueat-1-2) (const TVector & state, const TAction & action, int t=0) <br> |
|  std::shared\_ptr&lt; [**VectorImpl**](classsdm_1_1VectorImpl.md)&lt; TAction, TValue &gt; &gt; | [**getQValueAt**](classsdm_1_1MaxPlanValueFunction.md#function-getqvalueat-2-2) (const TVector & state, int t=0) <br> |
|  TValue | [**getValueAt**](classsdm_1_1MaxPlanValueFunction.md#function-getvalueat) (const TVector & state, int t=0) <br>_Get the Value at state x._  |
| virtual void | [**initialize**](classsdm_1_1MaxPlanValueFunction.md#function-initialize-1-2) () <br>_Initialize the value function._  |
|  void | [**initialize**](classsdm_1_1MaxPlanValueFunction.md#function-initialize-2-2) (TValue default\_value, int t=0) <br> |
|  void | [**lark\_prune**](classsdm_1_1MaxPlanValueFunction.md#function-lark-prune) (int t=0) <br> |
|  TValue | [**operator()**](classsdm_1_1MaxPlanValueFunction.md#function-operator()) (const TVector & state) <br> |
|  void | [**prune**](classsdm_1_1MaxPlanValueFunction.md#function-prune) (int t=0) <br>_Prune unecessary vectors._  |
|  [**number**](namespacesdm.md#typedef-number) | [**size**](classsdm_1_1MaxPlanValueFunction.md#function-size) () <br>_Get the number of hyperplans._  |
| virtual std::string | [**str**](classsdm_1_1MaxPlanValueFunction.md#function-str) () <br>_Define this function in order to be able to display the value function._  |
|  void | [**updateValueAt**](classsdm_1_1MaxPlanValueFunction.md#function-updatevalueat-1-2) (const TVector & state) <br>_Update the value function by setting the value of a specific state and updating the curves in consequence._  |
|  void | [**updateValueAt**](classsdm_1_1MaxPlanValueFunction.md#function-updatevalueat-2-2) (const TVector & state, int t=0) <br> |

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
| typedef std::set&lt; TVector &gt; | [**HyperplanSet**](classsdm_1_1MaxPlanValueFunction.md#typedef-hyperplanset)  <br> |








## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TVector, TAction &gt; &gt; | [**initializer\_**](classsdm_1_1MaxPlanValueFunction.md#variable-initializer-)  <br>_The initializer to use for this value function._  |
|  std::vector&lt; [**HyperplanSet**](classsdm_1_1MaxPlanValueFunction.md#typedef-hyperplanset) &gt; | [**representation**](classsdm_1_1MaxPlanValueFunction.md#variable-representation)  <br>_The value function represention. The default representation is a_ [_**MappedVector**_](classsdm_1_1MappedVector.md) _but every class implementing_[_**VectorImpl**_](classsdm_1_1VectorImpl.md) _interface can be used._ |

## Protected Attributes inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|  int | [**horizon\_**](classsdm_1_1ValueFunction.md#variable-horizon-)  <br>_The horizon for planning._  |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), TValue &gt; &gt; | [**init\_function\_**](classsdm_1_1ValueFunction.md#variable-init-function-)   = = nullptr<br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt; &gt; | [**problem\_**](classsdm_1_1ValueFunction.md#variable-problem-)  <br>_The problem which incremental value function is evaluated._  |















# Detailed Description




**Template parameters:**


* `TVector` type of hyperplan representation. Must implement [**sdm::VectorImpl**](classsdm_1_1VectorImpl.md) interface. 
* `TValue` value type (default : double) 



    
## Public Functions Documentation


### function MaxPlanValueFunction [1/3]


```cpp
sdm::MaxPlanValueFunction::MaxPlanValueFunction () 
```



### function MaxPlanValueFunction [2/3]


```cpp
sdm::MaxPlanValueFunction::MaxPlanValueFunction (
    std::shared_ptr< SolvableByHSVI < TVector, TAction >> problem,
    int horizon,
    std::shared_ptr< Initializer < TVector, TAction >> initializer
) 
```



### function MaxPlanValueFunction [3/3]


```cpp
sdm::MaxPlanValueFunction::MaxPlanValueFunction (
    std::shared_ptr< SolvableByHSVI < TVector, TAction >> problem,
    int horizon=0,
    TValue default_value=0.
) 
```



### function backup\_bellman\_operator 


```cpp
TVector sdm::MaxPlanValueFunction::backup_bellman_operator (
    std::shared_ptr< POSG > world,
    TVector belief
) 
```



### function bounded\_prune 


```cpp
void sdm::MaxPlanValueFunction::bounded_prune (
    int t=0
) 
```



### function getBestAction 


```cpp
TAction sdm::MaxPlanValueFunction::getBestAction (
    const TVector & state,
    int t=0
) 
```



### function getMaxAt 


```cpp
std::pair< TValue, TVector > sdm::MaxPlanValueFunction::getMaxAt (
    const TVector & state,
    int t
) 
```




**Parameters:**


* `state` a specific state 



**Returns:**

the maximum value and hyperplan at a specific state (std::pair&lt;TValue, TVector&gt;) 




        

### function getQValueAt [1/2]


```cpp
TValue sdm::MaxPlanValueFunction::getQValueAt (
    const TVector & state,
    const TAction & action,
    int t=0
) 
```



### function getQValueAt [2/2]


```cpp
std::shared_ptr< VectorImpl < TAction, TValue > > sdm::MaxPlanValueFunction::getQValueAt (
    const TVector & state,
    int t=0
) 
```



### function getValueAt 


```cpp
TValue sdm::MaxPlanValueFunction::getValueAt (
    const TVector & state,
    int t=0
) 
```




**Parameters:**


* `state` the state 



**Returns:**

TValue 




        

### function initialize [1/2]


```cpp
virtual void sdm::MaxPlanValueFunction::initialize () 
```


Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-1-3)


### function initialize [2/2]


```cpp
void sdm::MaxPlanValueFunction::initialize (
    TValue default_value,
    int t=0
) 
```



### function lark\_prune 


```cpp
void sdm::MaxPlanValueFunction::lark_prune (
    int t=0
) 
```



### function operator() 


```cpp
TValue sdm::MaxPlanValueFunction::operator() (
    const TVector & state
) 
```



### function prune 


```cpp
void sdm::MaxPlanValueFunction::prune (
    int t=0
) 
```



### function size 


```cpp
number sdm::MaxPlanValueFunction::size () 
```




**Returns:**

number 




        

### function str 


```cpp
inline virtual std::string sdm::MaxPlanValueFunction::str () 
```


Implements [*sdm::ValueFunction::str*](classsdm_1_1ValueFunction.md#function-str)


### function updateValueAt [1/2]


```cpp
void sdm::MaxPlanValueFunction::updateValueAt (
    const TVector & state
) 
```




**Parameters:**


* `state` the state 



        

### function updateValueAt [2/2]


```cpp
void sdm::MaxPlanValueFunction::updateValueAt (
    const TVector & state,
    int t=0
) 
```


## Protected Types Documentation


### typedef HyperplanSet 


```cpp
using sdm::MaxPlanValueFunction< TVector, TAction, TValue >::HyperplanSet =  std::set<TVector>;
```


## Protected Attributes Documentation


### variable initializer\_ 


```cpp
std::shared_ptr<Initializer<TVector, TAction> > sdm::MaxPlanValueFunction< TVector, TAction, TValue >::initializer_;
```



### variable representation 


```cpp
std::vector<HyperplanSet> sdm::MaxPlanValueFunction< TVector, TAction, TValue >::representation;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/max_plan_vf.hpp`