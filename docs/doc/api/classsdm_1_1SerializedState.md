
# Class sdm::SerializedState

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerializedState**](classsdm_1_1SerializedState.md)





* `#include <serialized_state.hpp>`



Inherits the following classes: [sdm::BaseState](classsdm_1_1BaseState.md),  [sdm::BaseSerialInterface](classsdm_1_1BaseSerialInterface.md)
































































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-1-3) () <br> |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-2-3) (std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; state, [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt;&gt; actions) <br> |
|   | [**SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate-3-3) (const [**SerializedState**](classsdm_1_1SerializedState.md) & v) <br> |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt; &gt; | [**getAction**](classsdm_1_1SerializedState.md#function-getaction) () const<br>_Get the hidden vector of action that were already decided p._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerializedState.md#function-getcurrentagentid) () const<br>_Get the current Agent Id of the object._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getHiddenState**](classsdm_1_1SerializedState.md#function-gethiddenstate) () const<br>_Get the Hidden_ [_**State**_](classsdm_1_1State.md) _of the serial object._ |
| virtual void | [**setAgentId**](classsdm_1_1SerializedState.md#function-setagentid) ([**number**](namespacesdm.md#typedef-number)) <br>[_**Set**_](structsdm_1_1Set.md) _the Agent Id of the object._ |
| virtual std::string | [**str**](classsdm_1_1SerializedState.md#function-str) () const<br>_Get a string describing the current item._  |
| virtual  | [**~SerializedState**](classsdm_1_1SerializedState.md#function-serializedstate) () <br> |

## Public Functions inherited from sdm::BaseState

See [sdm::BaseState](classsdm_1_1BaseState.md)

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

## Public Functions inherited from sdm::BaseSerialInterface

See [sdm::BaseSerialInterface](classsdm_1_1BaseSerialInterface.md)

| Type | Name |
| ---: | :--- |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt; &gt; | [**getAction**](classsdm_1_1BaseSerialInterface.md#function-getaction) () const = 0<br>_Get the hidden vector of action that were already decided p._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getHiddenState**](classsdm_1_1BaseSerialInterface.md#function-gethiddenstate) () const = 0<br>_Get the Hidden_ [_**State**_](classsdm_1_1State.md) _of the serial object._ |
| virtual void | [**setAgentId**](classsdm_1_1BaseSerialInterface.md#function-setagentid) ([**number**](namespacesdm.md#typedef-number)) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the Agent Id of the object._ |

## Public Functions inherited from sdm::SerialInterface

See [sdm::SerialInterface](classsdm_1_1SerialInterface.md)

| Type | Name |
| ---: | :--- |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerialInterface.md#function-getcurrentagentid) () const = 0<br>_Get the current Agent Id of the object._  |

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
|  [**number**](namespacesdm.md#typedef-number) | [**agentID\_**](classsdm_1_1SerializedState.md#variable-agentid-)  <br> |

## Protected Attributes inherited from sdm::BaseState

See [sdm::BaseState](classsdm_1_1BaseState.md)

| Type | Name |
| ---: | :--- |
|  TState | [**state\_**](classsdm_1_1BaseState.md#variable-state-)  <br> |























































## Public Functions Documentation


### function SerializedState [1/3]


```cpp
sdm::SerializedState::SerializedState () 
```



### function SerializedState [2/3]


```cpp
sdm::SerializedState::SerializedState (
    std::shared_ptr< State > state,
    Joint < std::shared_ptr< Action >> actions
) 
```



### function SerializedState [3/3]


```cpp
sdm::SerializedState::SerializedState (
    const SerializedState & v
) 
```



### function getAction 


```cpp
virtual Joint < std::shared_ptr< Action > > sdm::SerializedState::getAction () const
```




**Returns:**

std::vector&lt;std::shared\_ptr&lt;Action&gt;&gt; 




        
Implements [*sdm::BaseSerialInterface::getAction*](classsdm_1_1BaseSerialInterface.md#function-getaction)


### function getCurrentAgentId 


```cpp
virtual number sdm::SerializedState::getCurrentAgentId () const
```




**Returns:**

number 




        
Implements [*sdm::SerialInterface::getCurrentAgentId*](classsdm_1_1SerialInterface.md#function-getcurrentagentid)


### function getHiddenState 


```cpp
virtual std::shared_ptr< State > sdm::SerializedState::getHiddenState () const
```




**Returns:**

std::shared\_ptr&lt;State&gt; 




        
Implements [*sdm::BaseSerialInterface::getHiddenState*](classsdm_1_1BaseSerialInterface.md#function-gethiddenstate)


### function setAgentId 


```cpp
virtual void sdm::SerializedState::setAgentId (
    number
) 
```


Implements [*sdm::BaseSerialInterface::setAgentId*](classsdm_1_1BaseSerialInterface.md#function-setagentid)


### function str 


```cpp
virtual std::string sdm::SerializedState::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::BaseState::str*](classsdm_1_1BaseState.md#function-str)


### function ~SerializedState 


```cpp
virtual sdm::SerializedState::~SerializedState () 
```


## Protected Attributes Documentation


### variable agentID\_ 


```cpp
number sdm::SerializedState::agentID_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/serialized_state.hpp`