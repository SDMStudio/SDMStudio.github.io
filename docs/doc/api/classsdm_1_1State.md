
# Class sdm::State

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**State**](classsdm_1_1State.md)



_A public interface for states._ [More...](#detailed-description)

* `#include <state.hpp>`



Inherits the following classes: [sdm::Observation](classsdm_1_1Observation.md)


Inherited by the following classes: [sdm::BaseState](classsdm_1_1BaseState.md),  [sdm::AlphaStar::AlphaStarItem](classsdm_1_1AlphaStar_1_1AlphaStarItem.md),  [sdm::BaseSerialInterface](classsdm_1_1BaseSerialInterface.md),  [sdm::BaseState](classsdm_1_1BaseState.md),  [sdm::BeliefInterface](classsdm_1_1BeliefInterface.md),  [sdm::HistoryInterface](classsdm_1_1HistoryInterface.md),  [sdm::StateGraph](classsdm_1_1StateGraph.md)


























## Public Functions

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




































# Detailed Description


Any class inheriting from this interface will be considered as generic state for algorithms. Consider sections [Theoritical Background](/tutorials/theory.html) and [Algorithms](/tutorials/algorithms/) for more information. 

    
## Public Functions Documentation


### function getTypeState 


```cpp
virtual TypeState sdm::State::getTypeState () const
```



### function hash 


```cpp
virtual size_t sdm::State::hash () const
```




**Returns:**

size\_t the hash code 




        

### function operator== 


```cpp
virtual bool sdm::State::operator== (
    const std::shared_ptr< State > & other
) const
```




**Parameters:**


* `other` the state to be compared to current state 



**Returns:**

true if states are equal 




**Returns:**

false if they are different 




        

### function str 


```cpp
virtual std::string sdm::State::str () const = 0
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::Observation::str*](classsdm_1_1Observation.md#function-str)


### function toBelief 


```cpp
virtual std::shared_ptr< BeliefInterface > sdm::State::toBelief () 
```



### function toHistory 


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::State::toHistory () 
```



### function toOccupancyState 


```cpp
virtual std::shared_ptr< OccupancyStateInterface > sdm::State::toOccupancyState () 
```



### function toSerial 


```cpp
virtual std::shared_ptr< BaseSerialInterface > sdm::State::toSerial () 
```



### function toSerialOccupancyState 


```cpp
virtual std::shared_ptr< SerialOccupancyInterface > sdm::State::toSerialOccupancyState () 
```



### function ~State 


```cpp
inline virtual sdm::State::~State () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/state.hpp`