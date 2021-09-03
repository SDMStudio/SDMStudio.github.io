
# Class sdm::ValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ValueFunction**](classsdm_1_1ValueFunction.md)



_This class is the abstract class of value function. All value function must derived this class._ [More...](#detailed-description)

* `#include <value_function.hpp>`



Inherits the following classes: [sdm::BaseValueFunction](classsdm_1_1BaseValueFunction.md),  [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)


Inherited by the following classes: [sdm::BaseTabularValueFunction](classsdm_1_1BaseTabularValueFunction.md),  [sdm::HyperplanValueFunction](classsdm_1_1HyperplanValueFunction.md)








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





## Public Attributes

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
|  std::shared\_ptr&lt; [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md) &gt; | [**action\_**](classsdm_1_1ValueFunction.md#variable-action-)  <br>_The evaluate operator._  |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, [**number**](namespacesdm.md#typedef-number), double &gt; &gt; | [**init\_function\_**](classsdm_1_1ValueFunction.md#variable-init-function-)   = = nullptr<br>_Initialization function. If defined, algorithms on value functions will get inital values using this function._  |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**initializer\_**](classsdm_1_1ValueFunction.md#variable-initializer-)  <br>_The initializer to use for this value function._  |

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



    
## Public Attributes Documentation


### variable backup\_ 


```cpp
std::shared_ptr<BackupInterfaceForValueFunction> sdm::ValueFunction::backup_;
```



### variable time\_get\_value\_at 


```cpp
double sdm::ValueFunction::time_get_value_at;
```



### variable time\_pruning 


```cpp
double sdm::ValueFunction::time_pruning;
```



### variable time\_update\_value 


```cpp
double sdm::ValueFunction::time_update_value;
```



### variable total\_time\_evaluate 


```cpp
double sdm::ValueFunction::total_time_evaluate;
```



### variable total\_time\_exist 


```cpp
double sdm::ValueFunction::total_time_exist;
```



### variable total\_time\_update\_backup 


```cpp
double sdm::ValueFunction::total_time_update_backup;
```



### variable total\_time\_update\_best\_action 


```cpp
double sdm::ValueFunction::total_time_update_best_action;
```


## Public Functions Documentation


### function StartTime 


```cpp
void sdm::ValueFunction::StartTime () 
```



### function ValueFunction [1/3]


```cpp
inline sdm::ValueFunction::ValueFunction () 
```



### function ValueFunction [2/3]


```cpp
sdm::ValueFunction::ValueFunction (
    number horizon=0,
    const std::shared_ptr< Initializer > & intializer=nullptr,
    const std::shared_ptr< BackupInterfaceForValueFunction > & backup=nullptr,
    const std::shared_ptr< ActionVFInterface > & action=nullptr
) 
```




**Parameters:**


* `backup` 
* `default_value` 



        

### function ValueFunction [3/3]


```cpp
sdm::ValueFunction::ValueFunction (
    const ValueFunction & copy
) 
```



### function backup 


```cpp
template<typename TData typename TData>
inline TData sdm::ValueFunction::backup (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```




**Parameters:**


* `state` : ELement to evaluate 
* `t` 



**Returns:**

Pair&lt;std::shared\_ptr&lt;State&gt;, double&gt; 




        

### function do\_pruning 


```cpp
virtual void sdm::ValueFunction::do_pruning (
    number t
) = 0
```



### function evaluate 


```cpp
virtual Pair < std::shared_ptr< State >, double > sdm::ValueFunction::evaluate (
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `state` : ELement to evaluate 
* `t` 



**Returns:**

Pair&lt;std::shared\_ptr&lt;State&gt;, double&gt; 




        

### function getBestAction 


```cpp
std::shared_ptr< Action > sdm::ValueFunction::getBestAction (
    const std::shared_ptr< State > & state,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : current state 
* `number` : time step 



**Returns:**

std::shared\_ptr&lt;Action&gt; 




        

### function getBestActionAndValue 


```cpp
Pair < std::shared_ptr< Action >, double > sdm::ValueFunction::getBestActionAndValue (
    const std::shared_ptr< State > & state,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt; & : current state 
* `number` : time step 



**Returns:**

std::shared\_ptr&lt;Action&gt; 




        

### function getInitFunction 


```cpp
std::shared_ptr< BinaryFunction < std::shared_ptr< State >, number , double > > sdm::ValueFunction::getInitFunction () 
```




**Returns:**

std::shared\_ptr&lt;[**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt;std::shared\_ptr&lt;State&gt;, number, double&gt;&gt; 




        

### function getSize [1/2]


```cpp
virtual size_t sdm::ValueFunction::getSize (
    number t
) const = 0
```



### function getSize [2/2]


```cpp
size_t sdm::ValueFunction::getSize () const
```



### function getSupport 


```cpp
virtual std::vector< std::shared_ptr< State > > sdm::ValueFunction::getSupport (
    number t
) = 0
```




**Returns:**

std::string 




        

### function getTime 


```cpp
double sdm::ValueFunction::getTime (
    std::string information
) 
```



### function getValueAt 


```cpp
virtual double sdm::ValueFunction::getValueAt (
    const std::shared_ptr< State > & state,
    number t=0
) = 0
```



### function getptr 


```cpp
std::shared_ptr< ValueFunction > sdm::ValueFunction::getptr () 
```



### function initialize [1/3]


```cpp
virtual void sdm::ValueFunction::initialize () = 0
```


Implements [*sdm::BaseValueFunction::initialize*](classsdm_1_1BaseValueFunction.md#function-initialize-1-2)


### function initialize [2/3]


```cpp
virtual void sdm::ValueFunction::initialize (
    double v,
    number t=0
) = 0
```


Implements [*sdm::BaseValueFunction::initialize*](classsdm_1_1BaseValueFunction.md#function-initialize-2-2)


### function initialize [3/3]


```cpp
void sdm::ValueFunction::initialize (
    const std::shared_ptr< BinaryFunction < std::shared_ptr< State >, number , double >> & init_function
) 
```




**Parameters:**


* `init_function` the function that enables to get initial values 



        

### function operator() 


```cpp
virtual double sdm::ValueFunction::operator() (
    const std::shared_ptr< State > & state,
    const number & t=0
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function str 


```cpp
virtual std::string sdm::ValueFunction::str () const = 0
```


Implements [*sdm::BaseValueFunction::str*](classsdm_1_1BaseValueFunction.md#function-str)


### function updateTime 


```cpp
void sdm::ValueFunction::updateTime (
    std::chrono::high_resolution_clock::time_point start_time,
    std::string information
) 
```



### function updateValueAt [1/2]


```cpp
virtual void sdm::ValueFunction::updateValueAt (
    const std::shared_ptr< State > & state,
    number t=0
) = 0
```



### function updateValueAt [2/2]


```cpp
virtual void sdm::ValueFunction::updateValueAt (
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t=0
) = 0
```



### function ~ValueFunction 


```cpp
inline virtual sdm::ValueFunction::~ValueFunction () 
```


## Protected Attributes Documentation


### variable action\_ 


```cpp
std::shared_ptr<ActionVFInterface> sdm::ValueFunction::action_;
```


The action operator. 

        

### variable init\_function\_ 


```cpp
std::shared_ptr<BinaryFunction<std::shared_ptr<State>, number, double> > sdm::ValueFunction::init_function_;
```



### variable initializer\_ 


```cpp
std::shared_ptr<Initializer> sdm::ValueFunction::initializer_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/value_function.hpp`