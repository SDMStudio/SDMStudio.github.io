
# Class sdm::BaseState

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TState&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseState**](classsdm_1_1BaseState.md)



_A base class inheriting from the_ [_**State**_](classsdm_1_1State.md) _interface._[More...](#detailed-description)

* `#include <base_state.hpp>`



Inherits the following classes: [sdm::State](classsdm_1_1State.md)
































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BaseState**](classsdm_1_1BaseState.md#function-basestate-1-2) () <br> |
|   | [**BaseState**](classsdm_1_1BaseState.md#function-basestate-2-2) (const TState & item) <br> |
| virtual TState | [**getState**](classsdm_1_1BaseState.md#function-getstate) () const<br>_Get the data corresponding to the stored state._  |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1BaseState.md#function-gettypestate) () const<br> |
| virtual bool | [**operator==**](classsdm_1_1BaseState.md#function-operator) (const [**BaseState**](classsdm_1_1BaseState.md) & other) const<br> |
| virtual void | [**setState**](classsdm_1_1BaseState.md#function-setstate) (const TState & state) <br>[_**Set**_](structsdm_1_1Set.md) _the data corresponding to the stored state._ |
| virtual std::string | [**str**](classsdm_1_1BaseState.md#function-str) () const<br>_Get a string describing the current item._  |
| virtual  | [**~BaseState**](classsdm_1_1BaseState.md#function-basestate) () <br> |

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



















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  TState | [**state\_**](classsdm_1_1BaseState.md#variable-state-)  <br> |
























# Detailed Description




**Template parameters:**


* `TState` the type of data used for the state.

This class can be used to instantiate a state represented by any type.


````cpp
BaseState<char> state('a'), state2('b'); // Instanciate a state stored as a character.   
BaseState<float> float_state(0.0), float_state2(0.1); // Instanciate a state stored as a float.   
````

 

    
## Public Functions Documentation


### function BaseState [1/2]


```cpp
sdm::BaseState::BaseState () 
```



### function BaseState [2/2]


```cpp
sdm::BaseState::BaseState (
    const TState & item
) 
```



### function getState 


```cpp
virtual TState sdm::BaseState::getState () const
```




**Returns:**

the data 




        

### function getTypeState 


```cpp
virtual TypeState sdm::BaseState::getTypeState () const
```


Implements [*sdm::State::getTypeState*](classsdm_1_1State.md#function-gettypestate)


### function operator== 


```cpp
virtual bool sdm::BaseState::operator== (
    const BaseState & other
) const
```



### function setState 


```cpp
virtual void sdm::BaseState::setState (
    const TState & state
) 
```




**Parameters:**


* `state` the data 



        

### function str 


```cpp
virtual std::string sdm::BaseState::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::State::str*](classsdm_1_1State.md#function-str)


### function ~BaseState 


```cpp
virtual sdm::BaseState::~BaseState () 
```


## Protected Attributes Documentation


### variable state\_ 


```cpp
TState sdm::BaseState< TState >::state_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/base_state.hpp`