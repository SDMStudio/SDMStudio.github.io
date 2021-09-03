
# Class sdm::BaseTabularValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class Hash, class KeyEqual&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)





* `#include <tabular_value_function.hpp>`



Inherits the following classes: [sdm::ValueFunction](classsdm_1_1ValueFunction.md)


Inherited by the following classes: [sdm::BasePointSetValueFunction](classsdm_1_1BasePointSetValueFunction.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double, Hash, KeyEqual &gt; | [**Container**](classsdm_1_1BaseTabularValueFunction.md#typedef-container)  <br> |



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







## Public Attributes inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md) &gt; | [**backup\_**](classsdm_1_1ValueFunction.md#variable-backup-)  <br>_The backup operator._  |
|  double | [**time\_get\_value\_at**](classsdm_1_1ValueFunction.md#variable-time-get-value-at)   = = 0<br> |
|  double | [**time\_pruning**](classsdm_1_1ValueFunction.md#variable-time-pruning)   = =0<br> |
|  double | [**time\_update\_value**](classsdm_1_1ValueFunction.md#variable-time-update-value)   = =0<br> |
|  double | [**total\_time\_evaluate**](classsdm_1_1ValueFunction.md#variable-total-time-evaluate)   = =0<br> |
|  double | [**total\_time\_exist**](classsdm_1_1ValueFunction.md#variable-total-time-exist)   = =0<br> |
|  double | [**total\_time\_update\_backup**](classsdm_1_1ValueFunction.md#variable-total-time-update-backup)   = =0<br> |
|  double | [**total\_time\_update\_best\_action**](classsdm_1_1ValueFunction.md#variable-total-time-update-best-action)   = =0<br> |









## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md#function-basetabularvaluefunction-1-3) ([**number**](namespacesdm.md#typedef-number) horizon, const std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; & initializer, const std::shared\_ptr&lt; [**BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md) &gt; & backup, const std::shared\_ptr&lt; [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md) &gt; & action\_vf, bool is\_upper\_bound) <br> |
|   | [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md#function-basetabularvaluefunction-2-3) ([**number**](namespacesdm.md#typedef-number) horizon=0, double default\_value=0., const std::shared\_ptr&lt; [**BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md) &gt; & backup=nullptr, const std::shared\_ptr&lt; [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md) &gt; & action\_vf=nullptr, bool is\_upper\_bound=false) <br> |
|   | [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md#function-basetabularvaluefunction-3-3) (const [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md) & copy) <br> |
| virtual void | [**do\_pruning**](classsdm_1_1BaseTabularValueFunction.md#function-do-pruning) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**evaluate**](classsdm_1_1BaseTabularValueFunction.md#function-evaluate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Evaluate the element given._  |
|  double | [**getDefaultAt**](classsdm_1_1BaseTabularValueFunction.md#function-getdefaultat) ([**number**](namespacesdm.md#typedef-number) t) <br> |
|  [**Container**](classsdm_1_1BaseTabularValueFunction.md#typedef-container) | [**getRepresentation**](classsdm_1_1BaseTabularValueFunction.md#function-getrepresentation) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**getSize**](classsdm_1_1BaseTabularValueFunction.md#function-getsize) ([**number**](namespacesdm.md#typedef-number) t) const<br>_Get the size of the value function at timestep t._  |
| virtual std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getSupport**](classsdm_1_1BaseTabularValueFunction.md#function-getsupport) ([**number**](namespacesdm.md#typedef-number) t) <br>_Return the possible indexes of the value function._  |
| virtual double | [**getValueAt**](classsdm_1_1BaseTabularValueFunction.md#function-getvalueat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Evaluate the value at a state._  |
| virtual void | [**initialize**](classsdm_1_1BaseTabularValueFunction.md#function-initialize-1-2) () <br>_Initialize the value function by using initializer._  |
| virtual void | [**initialize**](classsdm_1_1BaseTabularValueFunction.md#function-initialize-2-2) (double default\_value, [**number**](namespacesdm.md#typedef-number) t=0) <br>[_**Set**_](structsdm_1_1Set.md) _all values of the vector to a default value._ |
| virtual void | [**load**](classsdm_1_1BaseTabularValueFunction.md#function-load) (std::string filename) <br>_Load a value function from a file. The extension of the file will indicate the type of formatage for reading (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
| virtual void | [**save**](classsdm_1_1BaseTabularValueFunction.md#function-save) (std::string filename) <br>_Save a value function into a file. The extension of the file will indicate the type of formatage for recording (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
|  void | [**serialize**](classsdm_1_1BaseTabularValueFunction.md#function-serialize) (Archive & archive, const unsigned int &) <br> |
| virtual std::string | [**str**](classsdm_1_1BaseTabularValueFunction.md#function-str) () const<br>_Define this function in order to be able to display the value function._  |
| virtual void | [**updateValueAt**](classsdm_1_1BaseTabularValueFunction.md#function-updatevalueat-1-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Update the value at a specific state and timestep._  |
| virtual void | [**updateValueAt**](classsdm_1_1BaseTabularValueFunction.md#function-updatevalueat-2-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) <br>_Update the value at a given state knowing an action._  |
|  void | [**updateValueAt**](classsdm_1_1BaseTabularValueFunction.md#function-updatevalueat-3-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t, double target) <br>_Update the value function at state s and timestep t to the target value._  |

## Public Functions inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|  void | [**StartTime**](classsdm_1_1ValueFunction.md#function-starttime) () <br> |
|   | [**ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction-1-3) () <br> |
|   | [**ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction-2-3) ([**number**](namespacesdm.md#typedef-number) horizon=0, const std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; & intializer=nullptr, const std::shared\_ptr&lt; [**BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md) &gt; & backup=nullptr, const std::shared\_ptr&lt; [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md) &gt; & action=nullptr) <br>_Construct a new Incremental Value_ [_**Function**_](classsdm_1_1Function.md) _object._ |
|   | [**ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction-3-3) (const [**ValueFunction**](classsdm_1_1ValueFunction.md) & copy) <br> |
|  TData | [**backup**](classsdm_1_1ValueFunction.md#function-backup) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br>_Do the backup operator._  |
| virtual void | [**do\_pruning**](classsdm_1_1ValueFunction.md#function-do-pruning) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; | [**evaluate**](classsdm_1_1ValueFunction.md#function-evaluate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br>_Evaluate the element given._  |
|  std::shared\_ptr&lt; Action &gt; | [**getBestAction**](classsdm_1_1ValueFunction.md#function-getbestaction) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best Action for a precise state and a time step._  |
|  [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; Action &gt;, double &gt; | [**getBestActionAndValue**](classsdm_1_1ValueFunction.md#function-getbestactionandvalue) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br>_Select the best Action and the value associated for a precise state and a time step._  |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**number**](namespacesdm.md#typedef-number), double &gt; &gt; | [**getInitFunction**](classsdm_1_1ValueFunction.md#function-getinitfunction) () <br>_Get the Init_ [_**Function**_](classsdm_1_1Function.md) _._ |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**getSize**](classsdm_1_1ValueFunction.md#function-getsize-1-2) ([**number**](namespacesdm.md#typedef-number) t) const = 0<br>_Get the size of the value function at timestep t._  |
|  [**size\_t**](namespacesdm.md#typedef-size-t) | [**getSize**](classsdm_1_1ValueFunction.md#function-getsize-2-2) () const<br>_Get the total size of the value function._  |
| virtual std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getSupport**](classsdm_1_1ValueFunction.md#function-getsupport) ([**number**](namespacesdm.md#typedef-number) t) = 0<br>_Return the possible indexes of the value function._  |
|  double | [**getTime**](classsdm_1_1ValueFunction.md#function-gettime) (std::string information) <br> |
| virtual double | [**getValueAt**](classsdm_1_1ValueFunction.md#function-getvalueat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Get the value at a given state._  |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getptr**](classsdm_1_1ValueFunction.md#function-getptr) () <br>_Get shared pointer on the current_ [_**QValueFunction**_](classsdm_1_1QValueFunction.md) _._ |
| virtual void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-1-3) () = 0<br>_Initialize the value function._  |
| virtual void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-2-3) (double v, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Initialize the value function with a default value._  |
|  void | [**initialize**](classsdm_1_1ValueFunction.md#function-initialize-3-3) (const std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**number**](namespacesdm.md#typedef-number), double &gt;&gt; & init\_function) <br>[_**Set**_](structsdm_1_1Set.md) _a function as a interactive way to get initial values for state that are not already initialized._ |
| virtual double | [**operator()**](classsdm_1_1ValueFunction.md#function-operator()) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const [**number**](namespacesdm.md#typedef-number) & t=0) <br> |
| virtual std::string | [**str**](classsdm_1_1ValueFunction.md#function-str) () const = 0<br>_Define this function in order to be able to display the value function._  |
|  void | [**updateTime**](classsdm_1_1ValueFunction.md#function-updatetime) (std::chrono::high\_resolution\_clock::time\_point start\_time, std::string information) <br> |
| virtual void | [**updateValueAt**](classsdm_1_1ValueFunction.md#function-updatevalueat-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Update the value at a given state._  |
| virtual void | [**updateValueAt**](classsdm_1_1ValueFunction.md#function-updatevalueat-2-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t=0) = 0<br>_Update the value at a given state knowing an action._  |
| virtual  | [**~ValueFunction**](classsdm_1_1ValueFunction.md#function-valuefunction) () <br>_Destroy the value function._  |

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

## Public Functions inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-1-2) (const TInput1 &, const TInput2 &) = 0<br> |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-2-2) (const [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type) & p\_input) <br> |
| virtual  | [**~BinaryFunction**](classsdm_1_1BinaryFunction.md#function-binaryfunction) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |
















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  bool | [**is\_upper\_bound\_**](classsdm_1_1BaseTabularValueFunction.md#variable-is-upper-bound-)  <br> |
|  std::vector&lt; [**Container**](classsdm_1_1BaseTabularValueFunction.md#typedef-container) &gt; | [**representation**](classsdm_1_1BaseTabularValueFunction.md#variable-representation)  <br>_The value function represention. The default representation is a_ [_**MappedVector**_](classsdm_1_1MappedVector.md) _but every class implementing_[_**VectorInterface**_](classsdm_1_1VectorInterface.md) _interface can be used._ |

## Protected Attributes inherited from sdm::ValueFunction

See [sdm::ValueFunction](classsdm_1_1ValueFunction.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md) &gt; | [**action\_**](classsdm_1_1ValueFunction.md#variable-action-)  <br>_The evaluate operator._  |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**number**](namespacesdm.md#typedef-number), double &gt; &gt; | [**init\_function\_**](classsdm_1_1ValueFunction.md#variable-init-function-)   = = nullptr<br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**initializer\_**](classsdm_1_1ValueFunction.md#variable-initializer-)  <br>_The initializer to use for this value function._  |

## Protected Attributes inherited from sdm::BaseValueFunction

See [sdm::BaseValueFunction](classsdm_1_1BaseValueFunction.md)

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**horizon\_**](classsdm_1_1BaseValueFunction.md#variable-horizon-)  <br>_The horizon for planning/learning._  |


















## Public Types Documentation


### typedef Container 


```cpp
using sdm::BaseTabularValueFunction< Hash, KeyEqual >::Container =  MappedVector<std::shared_ptr<State>, double, Hash, KeyEqual>;
```


## Public Functions Documentation


### function BaseTabularValueFunction [1/3]


```cpp
sdm::BaseTabularValueFunction::BaseTabularValueFunction (
    number horizon,
    const std::shared_ptr< Initializer > & initializer,
    const std::shared_ptr< BackupInterfaceForValueFunction > & backup,
    const std::shared_ptr< ActionVFInterface > & action_vf,
    bool is_upper_bound
) 
```



### function BaseTabularValueFunction [2/3]


```cpp
sdm::BaseTabularValueFunction::BaseTabularValueFunction (
    number horizon=0,
    double default_value=0.,
    const std::shared_ptr< BackupInterfaceForValueFunction > & backup=nullptr,
    const std::shared_ptr< ActionVFInterface > & action_vf=nullptr,
    bool is_upper_bound=false
) 
```



### function BaseTabularValueFunction [3/3]


```cpp
sdm::BaseTabularValueFunction::BaseTabularValueFunction (
    const BaseTabularValueFunction & copy
) 
```



### function do\_pruning 


```cpp
virtual void sdm::BaseTabularValueFunction::do_pruning (
    number t
) 
```


Implements [*sdm::ValueFunction::do\_pruning*](classsdm_1_1ValueFunction.md#function-do-pruning)


### function evaluate 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::BaseTabularValueFunction::evaluate (
    const std::shared_ptr< State > & state,
    number t
) 
```




**Parameters:**


* `state` : ELement to evaluate 
* `t` 



**Returns:**

Pair&lt;std::shared\_ptr&lt;State&gt;, double&gt; 




        
Implements [*sdm::ValueFunction::evaluate*](classsdm_1_1ValueFunction.md#function-evaluate)


### function getDefaultAt 


```cpp
double sdm::BaseTabularValueFunction::getDefaultAt (
    number t
) 
```



### function getRepresentation 


```cpp
Container sdm::BaseTabularValueFunction::getRepresentation (
    number t
) 
```



### function getSize 


```cpp
virtual size_t sdm::BaseTabularValueFunction::getSize (
    number t
) const
```


Implements [*sdm::ValueFunction::getSize*](classsdm_1_1ValueFunction.md#function-getsize-1-2)


### function getSupport 


```cpp
virtual std::vector< std::shared_ptr< State > > sdm::BaseTabularValueFunction::getSupport (
    number t
) 
```




**Returns:**

std::string 




        
Implements [*sdm::ValueFunction::getSupport*](classsdm_1_1ValueFunction.md#function-getsupport)


### function getValueAt 


```cpp
virtual double sdm::BaseTabularValueFunction::getValueAt (
    const std::shared_ptr< State > & state,
    number t=0
) 
```




**Parameters:**


* `state` the state where we want to evaluate the function 



**Returns:**

the value 




        
Implements [*sdm::ValueFunction::getValueAt*](classsdm_1_1ValueFunction.md#function-getvalueat)


### function initialize [1/2]


```cpp
virtual void sdm::BaseTabularValueFunction::initialize () 
```


Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-1-3)


### function initialize [2/2]


```cpp
virtual void sdm::BaseTabularValueFunction::initialize (
    double default_value,
    number t=0
) 
```




**Parameters:**


* `default_value` the default value 



        
Implements [*sdm::ValueFunction::initialize*](classsdm_1_1ValueFunction.md#function-initialize-2-3)


### function load 


```cpp
virtual void sdm::BaseTabularValueFunction::load (
    std::string filename
) 
```




**Parameters:**


* `filename` the filename 



        
Implements [*sdm::BaseValueFunction::load*](classsdm_1_1BaseValueFunction.md#function-load)


### function save 


```cpp
virtual void sdm::BaseTabularValueFunction::save (
    std::string filename
) 
```




**Parameters:**


* `filename` the filename Save a value function into a file. The extension of the file will indicate the type of formatage for recording (`.txt` = text format, '.xml' = XML format, other = binary format).
* `filename` the filename 



        
Implements [*sdm::BaseValueFunction::save*](classsdm_1_1BaseValueFunction.md#function-save)


### function serialize 


```cpp
template<class Archive class Archive>
inline void sdm::BaseTabularValueFunction::serialize (
    Archive & archive,
    const unsigned int &
) 
```



### function str 


```cpp
virtual std::string sdm::BaseTabularValueFunction::str () const
```


Implements [*sdm::ValueFunction::str*](classsdm_1_1ValueFunction.md#function-str)


### function updateValueAt [1/3]


```cpp
virtual void sdm::BaseTabularValueFunction::updateValueAt (
    const std::shared_ptr< State > & state,
    number t=0
) 
```




**Parameters:**


* `state` the state 
* `t` the timestep. Must be less than the horizon, $t &lt; h$. Except in serialized problem solving where real timesteps are serialized and thus we need $t &lt; h  n$. 



        
Implements [*sdm::ValueFunction::updateValueAt*](classsdm_1_1ValueFunction.md#function-updatevalueat-1-2)


### function updateValueAt [2/3]


```cpp
virtual void sdm::BaseTabularValueFunction::updateValueAt (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) 
```


Implements [*sdm::ValueFunction::updateValueAt*](classsdm_1_1ValueFunction.md#function-updatevalueat-2-2)


### function updateValueAt [3/3]


```cpp
void sdm::BaseTabularValueFunction::updateValueAt (
    const std::shared_ptr< State > & state,
    number t,
    double target
) 
```




**Parameters:**


* `state` the state 
* `t` the timestep 
* `target` the target 



        
## Protected Attributes Documentation


### variable is\_upper\_bound\_ 


```cpp
bool sdm::BaseTabularValueFunction< Hash, KeyEqual >::is_upper_bound_;
```



### variable representation 


```cpp
std::vector<Container> sdm::BaseTabularValueFunction< Hash, KeyEqual >::representation;
```

## Friends Documentation



### friend access 


```cpp
friend class sdm::BaseTabularValueFunction::access () 
```



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::BaseTabularValueFunction::operator<< (
    std::ostream & os,
    BaseTabularValueFunction & vf
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/tabular_value_function.hpp`