
# Class sdm::HistoryInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HistoryInterface**](classsdm_1_1HistoryInterface.md)



_A common interface for objects that represent a history._ 

* `#include <history_interface.hpp>`



Inherits the following classes: [sdm::State](classsdm_1_1State.md)


Inherited by the following classes: [sdm::HistoryTree](classsdm_1_1HistoryTree.md),  [sdm::JointHistoryInterface](classsdm_1_1JointHistoryInterface.md)






























## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**expand**](classsdm_1_1HistoryInterface.md#function-expand) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup=true) = 0<br>_Expands the history._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1HistoryInterface.md#function-gethorizon) () const = 0<br>_Get the horizon of the history._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**getLastObservation**](classsdm_1_1HistoryInterface.md#function-getlastobservation) () = 0<br>_Get the last observation._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getPreviousHistory**](classsdm_1_1HistoryInterface.md#function-getprevioushistory) () = 0<br>_Get the previous history._  |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1HistoryInterface.md#function-gettypestate) () const<br> |
| virtual std::string | [**short\_str**](classsdm_1_1HistoryInterface.md#function-short-str) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1HistoryInterface.md#function-str) () const = 0<br>_Get a string describing the current item._  |
|  std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**toJointHistory**](classsdm_1_1HistoryInterface.md#function-tojointhistory) () <br>_Transform the_ [_**HistoryInterface**_](classsdm_1_1HistoryInterface.md) _in a_[_**JointHistoryInterface**_](classsdm_1_1JointHistoryInterface.md) _._ |

## Public Functions inherited from sdm::State

See [sdm::State](classsdm_1_1State.md)

| Type | Name |
| ---: | :--- |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1State.md#function-gettypestate) () const<br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**hash**](classsdm_1_1State.md#function-hash) () const<br>_Get the hash of the state. The hash is used in tabular value functions in order to compare efficiently two states. This function must be reimplemented in inherited classes._  |
| virtual bool | [**operator==**](classsdm_1_1State.md#function-operator) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & other) const<br>_Check equality between two states. This function must be implemented in inherited classes._  |
| virtual std::string | [**str**](classsdm_1_1State.md#function-str) () const = 0<br>_Get a string describing the current item._  |
| virtual std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; | [**toBelief**](classsdm_1_1State.md#function-tobelief) () <br>_Cast the state into a belief._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**toHistory**](classsdm_1_1State.md#function-tohistory) () <br>_Cast the state into a history._  |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**toOccupancyState**](classsdm_1_1State.md#function-tooccupancystate) () <br>_Cast the state into an occupancy state._  |
| virtual std::shared\_ptr&lt; [**BaseSerialInterface**](classsdm_1_1BaseSerialInterface.md) &gt; | [**toSerial**](classsdm_1_1State.md#function-toserial) () <br>_Cast the state into a serial interface._  |
| virtual std::shared\_ptr&lt; [**SerialOccupancyInterface**](classsdm_1_1SerialOccupancyInterface.md) &gt; | [**toSerialOccupancyState**](classsdm_1_1State.md#function-toserialoccupancystate) () <br>_Cast the state into a serial occupancy state._  |
| virtual  | [**~State**](classsdm_1_1State.md#function-state) () <br> |

## Public Functions inherited from sdm::Observation

See [sdm::Observation](classsdm_1_1Observation.md)

| Type | Name |
| ---: | :--- |
| virtual std::string | [**str**](classsdm_1_1Observation.md#function-str) () const = 0<br>_Get a string describing the current item._  |
| virtual  | [**~Observation**](classsdm_1_1Observation.md#function-observation) () <br> |

## Public Functions inherited from sdm::Item

See [sdm::Item](classsdm_1_1Item.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getPointer**](classsdm_1_1Item.md#function-getpointer) () <br>_Get the shared\_ptr on current (this) item._  |
| virtual bool | [**isBaseItem**](classsdm_1_1Item.md#function-isbaseitem) () <br> |
| virtual std::string | [**str**](classsdm_1_1Item.md#function-str) () const = 0<br>_Get a string describing the current item._  |
|  std::shared\_ptr&lt; T &gt; | [**to**](classsdm_1_1Item.md#function-to) () <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**toAction**](classsdm_1_1Item.md#function-toaction) () <br>_Cast the item into a pointer on action._  |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**toItem**](classsdm_1_1Item.md#function-toitem) () <br>_Cast the item into a pointer on item._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**toObservation**](classsdm_1_1Item.md#function-toobservation) () <br>_Cast the item into a pointer on observation._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**toState**](classsdm_1_1Item.md#function-tostate) () <br>_Cast the item into a pointer on state._  |

## Public Functions inherited from std::inheritable_enable_shared_from_this

See [std::inheritable\_enable\_shared\_from\_this](classstd_1_1inheritable__enable__shared__from__this.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; Down &gt; | [**downcasted\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md#function-downcasted-shared-from-this) () <br> |
|  std::shared\_ptr&lt; T &gt; | [**shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md#function-shared-from-this) () <br> |

## Public Functions inherited from std::MultipleInheritableEnableSharedFromThis

See [std::MultipleInheritableEnableSharedFromThis](classstd_1_1MultipleInheritableEnableSharedFromThis.md)

| Type | Name |
| ---: | :--- |
| virtual  | [**~MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md#function-multipleinheritableenablesharedfromthis) () <br> |











































## Public Functions Documentation


### function expand 


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::HistoryInterface::expand (
    const std::shared_ptr< Observation > & observation,
    bool backup=true
) = 0
```




**Parameters:**


* `observation` the observation of the expanded node 



**Returns:**

the expanded history


We consider that histories can expand next history from themselves and the next observation. 

        

### function getHorizon 


```cpp
virtual number sdm::HistoryInterface::getHorizon () const = 0
```




**Returns:**

number the history 




        

### function getLastObservation 


```cpp
virtual std::shared_ptr< Observation > sdm::HistoryInterface::getLastObservation () = 0
```




**Returns:**

the last observation 




        

### function getPreviousHistory 


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::HistoryInterface::getPreviousHistory () = 0
```




**Returns:**

the one step behind history. 




        

### function getTypeState 


```cpp
inline virtual TypeState sdm::HistoryInterface::getTypeState () const
```


Implements [*sdm::State::getTypeState*](classsdm_1_1State.md#function-gettypestate)


### function short\_str 


```cpp
virtual std::string sdm::HistoryInterface::short_str () const = 0
```



### function str 


```cpp
virtual std::string sdm::HistoryInterface::str () const = 0
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::State::str*](classsdm_1_1State.md#function-str)


### function toJointHistory 


```cpp
std::shared_ptr< JointHistoryInterface > sdm::HistoryInterface::toJointHistory () 
```




**Returns:**

std::shared\_ptr&lt;JointHistoryInterface&gt; 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/interface/history_interface.hpp`