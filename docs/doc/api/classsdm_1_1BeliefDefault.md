
# Class sdm::BeliefDefault

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BeliefDefault**](classsdm_1_1BeliefDefault.md)





* `#include <belief_default.hpp>`



Inherits the following classes: [sdm::BeliefInterface](classsdm_1_1BeliefInterface.md)




































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BeliefDefault**](classsdm_1_1BeliefDefault.md#function-beliefdefault-1-2) () <br> |
|   | [**BeliefDefault**](classsdm_1_1BeliefDefault.md#function-beliefdefault-2-2) (double) <br>_Default_ [_**Belief**_](classsdm_1_1Belief.md) _._ |
| virtual void | [**addProbability**](classsdm_1_1BeliefDefault.md#function-addprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, double proba) <br> |
| virtual double | [**getDefaultValue**](classsdm_1_1BeliefDefault.md#function-getdefaultvalue) () const<br> |
| virtual double | [**getProbability**](classsdm_1_1BeliefDefault.md#function-getprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const<br> |
| virtual std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getStates**](classsdm_1_1BeliefDefault.md#function-getstates) () const<br> |
| virtual std::shared\_ptr&lt; [**VectorInterface**](classsdm_1_1VectorInterface.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; &gt; | [**getVectorInferface**](classsdm_1_1BeliefDefault.md#function-getvectorinferface) () <br> |
| virtual bool | [**isStateExist**](classsdm_1_1BeliefDefault.md#function-isstateexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state\_tmp) const<br> |
| virtual double | [**norm\_1**](classsdm_1_1BeliefDefault.md#function-norm-1) () const<br> |
| virtual bool | [**operator==**](classsdm_1_1BeliefDefault.md#function-operator) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual double | [**operator^**](classsdm_1_1BeliefDefault.md#function-operator-2) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual void | [**setDefaultValue**](classsdm_1_1BeliefDefault.md#function-setdefaultvalue) (double) <br> |
| virtual void | [**setProbability**](classsdm_1_1BeliefDefault.md#function-setprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, double proba) <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1BeliefDefault.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1BeliefDefault.md#function-str) () const<br>_Get a string describing the current item._  |

## Public Functions inherited from sdm::BeliefInterface

See [sdm::BeliefInterface](classsdm_1_1BeliefInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**addProbability**](classsdm_1_1BeliefInterface.md#function-addprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, double proba) = 0<br> |
| virtual void | [**finalize**](classsdm_1_1BeliefInterface.md#function-finalize) () = 0<br> |
| virtual double | [**getDefaultValue**](classsdm_1_1BeliefInterface.md#function-getdefaultvalue) () const = 0<br> |
| virtual double | [**getProbability**](classsdm_1_1BeliefInterface.md#function-getprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const = 0<br> |
| virtual std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getStates**](classsdm_1_1BeliefInterface.md#function-getstates) () const = 0<br> |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1BeliefInterface.md#function-gettypestate) () const<br> |
| virtual std::shared\_ptr&lt; [**VectorInterface**](classsdm_1_1VectorInterface.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; &gt; | [**getVectorInferface**](classsdm_1_1BeliefInterface.md#function-getvectorinferface) () = 0<br> |
| virtual bool | [**isStateExist**](classsdm_1_1BeliefInterface.md#function-isstateexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state\_tmp) const = 0<br> |
| virtual double | [**norm\_1**](classsdm_1_1BeliefInterface.md#function-norm-1) () const = 0<br> |
| virtual void | [**normalizeBelief**](classsdm_1_1BeliefInterface.md#function-normalizebelief) (double norm\_1) = 0<br> |
| virtual double | [**operator&lt;**](classsdm_1_1BeliefInterface.md#function-operator) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const = 0<br> |
| virtual bool | [**operator==**](classsdm_1_1BeliefInterface.md#function-operator-2) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const = 0<br> |
| virtual double | [**operator^**](classsdm_1_1BeliefInterface.md#function-operator-3) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const = 0<br> |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**sampleState**](classsdm_1_1BeliefInterface.md#function-samplestate) () = 0<br> |
| virtual void | [**setDefaultValue**](classsdm_1_1BeliefInterface.md#function-setdefaultvalue) (double) = 0<br> |
| virtual void | [**setProbability**](classsdm_1_1BeliefInterface.md#function-setprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, double proba) = 0<br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1BeliefInterface.md#function-size) () const = 0<br> |

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
|  double | [**default\_value\_**](classsdm_1_1BeliefDefault.md#variable-default-value-)  <br> |
|  std::shared\_ptr&lt; [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; &gt; | [**map\_nul**](classsdm_1_1BeliefDefault.md#variable-map-nul)  <br> |




























## Public Functions Documentation


### function BeliefDefault [1/2]


```cpp
sdm::BeliefDefault::BeliefDefault () 
```



### function BeliefDefault [2/2]


```cpp
sdm::BeliefDefault::BeliefDefault (
    double
) 
```




**Parameters:**


* `double` : default value 



        

### function addProbability 


```cpp
virtual void sdm::BeliefDefault::addProbability (
    const std::shared_ptr< State > &,
    double proba
) 
```


Implements [*sdm::BeliefInterface::addProbability*](classsdm_1_1BeliefInterface.md#function-addprobability)


### function getDefaultValue 


```cpp
virtual double sdm::BeliefDefault::getDefaultValue () const
```


Implements [*sdm::BeliefInterface::getDefaultValue*](classsdm_1_1BeliefInterface.md#function-getdefaultvalue)


### function getProbability 


```cpp
virtual double sdm::BeliefDefault::getProbability (
    const std::shared_ptr< State > & state
) const
```


Implements [*sdm::BeliefInterface::getProbability*](classsdm_1_1BeliefInterface.md#function-getprobability)


### function getStates 


```cpp
virtual std::vector< std::shared_ptr< State > > sdm::BeliefDefault::getStates () const
```


Implements [*sdm::BeliefInterface::getStates*](classsdm_1_1BeliefInterface.md#function-getstates)


### function getVectorInferface 


```cpp
virtual std::shared_ptr< VectorInterface < std::shared_ptr< State >, double > > sdm::BeliefDefault::getVectorInferface () 
```


Implements [*sdm::BeliefInterface::getVectorInferface*](classsdm_1_1BeliefInterface.md#function-getvectorinferface)


### function isStateExist 


```cpp
virtual bool sdm::BeliefDefault::isStateExist (
    const std::shared_ptr< State > & state_tmp
) const
```


Implements [*sdm::BeliefInterface::isStateExist*](classsdm_1_1BeliefInterface.md#function-isstateexist)


### function norm\_1 


```cpp
virtual double sdm::BeliefDefault::norm_1 () const
```


Implements [*sdm::BeliefInterface::norm\_1*](classsdm_1_1BeliefInterface.md#function-norm-1)


### function operator== 


```cpp
virtual bool sdm::BeliefDefault::operator== (
    const std::shared_ptr< BeliefInterface > & other
) const
```


Implements [*sdm::BeliefInterface::operator==*](classsdm_1_1BeliefInterface.md#function-operator-2)


### function operator^ 


```cpp
virtual double sdm::BeliefDefault::operator^ (
    const std::shared_ptr< BeliefInterface > & other
) const
```


Implements [*sdm::BeliefInterface::operator^*](classsdm_1_1BeliefInterface.md#function-operator-3)


### function setDefaultValue 


```cpp
virtual void sdm::BeliefDefault::setDefaultValue (
    double
) 
```


Implements [*sdm::BeliefInterface::setDefaultValue*](classsdm_1_1BeliefInterface.md#function-setdefaultvalue)


### function setProbability 


```cpp
virtual void sdm::BeliefDefault::setProbability (
    const std::shared_ptr< State > & state,
    double proba
) 
```


Implements [*sdm::BeliefInterface::setProbability*](classsdm_1_1BeliefInterface.md#function-setprobability)


### function size 


```cpp
virtual size_t sdm::BeliefDefault::size () const
```


Implements [*sdm::BeliefInterface::size*](classsdm_1_1BeliefInterface.md#function-size)


### function str 


```cpp
virtual std::string sdm::BeliefDefault::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::State::str*](classsdm_1_1State.md#function-str)

## Protected Attributes Documentation


### variable default\_value\_ 


```cpp
double sdm::BeliefDefault::default_value_;
```



### variable map\_nul 


```cpp
std::shared_ptr<MappedVector<std::shared_ptr<State>,double> > sdm::BeliefDefault::map_nul;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/belief_default.hpp`