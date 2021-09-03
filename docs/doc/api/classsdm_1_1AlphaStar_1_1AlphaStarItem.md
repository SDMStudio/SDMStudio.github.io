
# Class sdm::AlphaStar::AlphaStarItem

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**AlphaStar**](classsdm_1_1AlphaStar.md) **>** [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md)



_The state in terms of A\* algorithm._ 

* `#include <alpha_star.hpp>`



Inherits the following classes: [sdm::State](classsdm_1_1State.md)




















## Public Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**current\_element**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#variable-current-element)  <br> |
|  int | [**horizon\_**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#variable-horizon-)  <br> |
|  double | [**value\_f\_**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#variable-value-f-)  <br> |
|  double | [**value\_g\_**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#variable-value-g-)  <br> |












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#function-alphastaritem) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & element, double value\_g, double value\_f, int horizon) <br> |
|  bool | [**operator&lt;**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#function-operator) (std::shared\_ptr&lt; [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) &gt; const & b) <br> |
| virtual std::string | [**str**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md#function-str) () const<br>_Get a string describing the current item._  |

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











































## Public Attributes Documentation


### variable current\_element 


```cpp
std::shared_ptr<State> sdm::AlphaStar::AlphaStarItem::current_element;
```



### variable horizon\_ 


```cpp
int sdm::AlphaStar::AlphaStarItem::horizon_;
```



### variable value\_f\_ 


```cpp
double sdm::AlphaStar::AlphaStarItem::value_f_;
```



### variable value\_g\_ 


```cpp
double sdm::AlphaStar::AlphaStarItem::value_g_;
```


## Public Functions Documentation


### function AlphaStarItem 


```cpp
inline sdm::AlphaStar::AlphaStarItem::AlphaStarItem (
    const std::shared_ptr< State > & element,
    double value_g,
    double value_f,
    int horizon
) 
```



### function operator&lt; 


```cpp
inline bool sdm::AlphaStar::AlphaStarItem::operator< (
    std::shared_ptr< AlphaStarItem > const & b
) 
```



### function str 


```cpp
inline virtual std::string sdm::AlphaStar::AlphaStarItem::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::State::str*](classsdm_1_1State.md#function-str)


------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/alpha_star.hpp`