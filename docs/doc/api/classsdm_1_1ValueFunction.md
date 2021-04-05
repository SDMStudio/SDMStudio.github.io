
<NavBar active_item_id="2"/>

# Class sdm::ValueFunction

**template &lt;typename TState, typename TAction, typename TValue&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueFunction**](classsdm_1_1ValueFunction.md)



_This class is the abstract class of value function. All value function must derived this class._ [More...](#detailed-description)

* `#include <value_function.hpp>`



Inherits the following classes: [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)


Inherited by the following classes: [sdm::TabularValueFunction](classsdm_1_1TabularValueFunction.md)







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










## Protected Attributes

| Type | Name |
| ---: | :--- |
|  int | [**horizon\_**](classsdm_1_1ValueFunction.md#variable-horizon-)  <br>_The horizon for planning._  |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), TValue &gt; &gt; | [**init\_function\_**](classsdm_1_1ValueFunction.md#variable-init-function-)   = = nullptr<br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md)&lt; TState, TAction &gt; &gt; | [**problem\_**](classsdm_1_1ValueFunction.md#variable-problem-)  <br>_The problem which incremental value function is evaluated._  |












# Detailed Description




**Template parameters:**


* `TState` Type of the state. 
* `TAction` Type of the action. 
* `TValue` Type of the value. 



    
## Public Functions Documentation


### function ValueFunction 


```cpp
sdm::ValueFunction::ValueFunction (
    std::shared_ptr< SolvableByHSVI < TState, TAction >> problem,
    number horizon
) 
```




**Parameters:**


* `problem` 
* `default_value` 



        

### function getBestAction 


```cpp
TAction sdm::ValueFunction::getBestAction (
    const TState & state,
    number t=0
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the best action 




        

### function getDiscount 


```cpp
double sdm::ValueFunction::getDiscount (
    number t
) 
```




**Parameters:**


* `t` the timestep 



**Returns:**

double the discount factor 




        

### function getHorizon 


```cpp
int sdm::ValueFunction::getHorizon () const
```



### function getInitFunction 


```cpp
std::shared_ptr< BinaryFunction < TState, number , TValue > > sdm::ValueFunction::getInitFunction () 
```



### function getQValueAt [1/2]


```cpp
std::shared_ptr< VectorImpl < TAction, TValue > > sdm::ValueFunction::getQValueAt (
    const TState & state,
    number t
) 
```




**Parameters:**


* `state` the state 



**Returns:**

the action value vector 




        

### function getQValueAt [2/2]


```cpp
TValue sdm::ValueFunction::getQValueAt (
    const TState & state,
    const TAction & action,
    number t
) 
```




**Parameters:**


* `state` the state 
* `action` the action 



**Returns:**

the q-value 




        

### function getSupport 


```cpp
virtual std::vector< TState > sdm::ValueFunction::getSupport (
    number t
) = 0
```




**Returns:**

std::string 




        

### function getValueAt 


```cpp
virtual TValue sdm::ValueFunction::getValueAt (
    const TState & state,
    number t=0
) = 0
```



### function getWorld 


```cpp
std::shared_ptr< SolvableByHSVI < TState, TAction > > sdm::ValueFunction::getWorld () 
```




**Returns:**

the world 




        

### function initialize [1/3]


```cpp
virtual void sdm::ValueFunction::initialize () = 0
```



### function initialize [2/3]


```cpp
virtual void sdm::ValueFunction::initialize (
    TValue v,
    number t=0
) = 0
```



### function initialize [3/3]


```cpp
void sdm::ValueFunction::initialize (
    std::shared_ptr< BinaryFunction < TState, number , TValue >> init_function
) 
```




**Parameters:**


* `init_function` the function that enables to get initial values 



        

### function isFiniteHorizon 


```cpp
bool sdm::ValueFunction::isFiniteHorizon () const
```



### function isInfiniteHorizon 


```cpp
bool sdm::ValueFunction::isInfiniteHorizon () const
```



### function operator() 


```cpp
virtual TValue sdm::ValueFunction::operator() (
    const TState & state,
    const number & t=0
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function str 


```cpp
virtual std::string sdm::ValueFunction::str () = 0
```



### function updateValueAt 


```cpp
virtual void sdm::ValueFunction::updateValueAt (
    const TState & s,
    number t=0
) = 0
```



### function ~ValueFunction 


```cpp
inline virtual sdm::ValueFunction::~ValueFunction () 
```


## Protected Attributes Documentation


### variable horizon\_ 


```cpp
int sdm::ValueFunction< TState, TAction, TValue >::horizon_;
```



### variable init\_function\_ 


```cpp
std::shared_ptr<BinaryFunction<TState, number, TValue> > sdm::ValueFunction< TState, TAction, TValue >::init_function_;
```



### variable problem\_ 


```cpp
std::shared_ptr<SolvableByHSVI<TState, TAction> > sdm::ValueFunction< TState, TAction, TValue >::problem_;
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
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/value_function.hpp`