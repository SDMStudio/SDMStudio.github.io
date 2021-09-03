
# Class sdm::Belief

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Belief**](classsdm_1_1Belief.md)





* `#include <belief_state.hpp>`



Inherits the following classes: [sdm::BeliefInterface](classsdm_1_1BeliefInterface.md),  [sdm::MappedVector](classsdm_1_1MappedVector.md)


Inherited by the following classes: [sdm::OccupancyState](classsdm_1_1OccupancyState.md)













## Public Types inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
| typedef typename std::unordered\_map&lt; TIndex, T, Hash, KeyEqual &gt;::[**const\_iterator**](classsdm_1_1MappedVector.md#typedef-const-iterator) | [**const\_iterator**](classsdm_1_1MappedVector.md#typedef-const-iterator)  <br> |
| typedef typename std::unordered\_map&lt; TIndex, T, Hash, KeyEqual &gt;::[**iterator**](classsdm_1_1MappedVector.md#typedef-iterator) | [**iterator**](classsdm_1_1MappedVector.md#typedef-iterator)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**type**](classsdm_1_1MappedVector.md#typedef-type) | [**type**](classsdm_1_1MappedVector.md#typedef-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type) | [**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**value\_type**](classsdm_1_1MappedVector.md#typedef-value-type) | [**value\_type**](classsdm_1_1MappedVector.md#typedef-value-type)  <br> |




















## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  double | [**PRECISION**](classsdm_1_1Belief.md#variable-precision)  <br> |







## Public Static Attributes inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  double | [**PRECISION**](classsdm_1_1MappedVector.md#variable-precision)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Belief**](classsdm_1_1Belief.md#function-belief-1-5) () <br> |
|   | [**Belief**](classsdm_1_1Belief.md#function-belief-2-5) (std::size\_t) <br> |
|   | [**Belief**](classsdm_1_1Belief.md#function-belief-3-5) (const [**Belief**](classsdm_1_1Belief.md) &) <br> |
|   | [**Belief**](classsdm_1_1Belief.md#function-belief-4-5) (const [**MappedVector**](classsdm_1_1MappedVector.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt; &) <br> |
|   | [**Belief**](classsdm_1_1Belief.md#function-belief-5-5) (const std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt; & list\_states, const std::vector&lt; double &gt; & list\_proba) <br> |
| virtual void | [**addProbability**](classsdm_1_1Belief.md#function-addprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, double proba) <br> |
| virtual void | [**finalize**](classsdm_1_1Belief.md#function-finalize) () <br> |
| virtual double | [**getDefaultValue**](classsdm_1_1Belief.md#function-getdefaultvalue) () const<br> |
| virtual double | [**getProbability**](classsdm_1_1Belief.md#function-getprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const<br> |
| virtual std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**getStates**](classsdm_1_1Belief.md#function-getstates) () const<br> |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1Belief.md#function-gettypestate) () const<br> |
| virtual std::shared\_ptr&lt; [**VectorInterface**](classsdm_1_1VectorInterface.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt; &gt; | [**getVectorInferface**](classsdm_1_1Belief.md#function-getvectorinferface) () <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**hash**](classsdm_1_1Belief.md#function-hash) () const<br>_Get the hash of the state. The hash is used in tabular value functions in order to compare efficiently two states. This function must be reimplemented in inherited classes._  |
| virtual bool | [**isStateExist**](classsdm_1_1Belief.md#function-isstateexist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state\_tmp) const<br> |
| virtual double | [**norm\_1**](classsdm_1_1Belief.md#function-norm-1) () const<br> |
| virtual void | [**normalizeBelief**](classsdm_1_1Belief.md#function-normalizebelief) (double norm\_1) <br> |
| virtual double | [**operator&lt;**](classsdm_1_1Belief.md#function-operator) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
|  double | [**operator&lt;**](classsdm_1_1Belief.md#function-operator-2) (const [**Belief**](classsdm_1_1Belief.md) & other) const<br> |
|  bool | [**operator==**](classsdm_1_1Belief.md#function-operator-3) (const [**Belief**](classsdm_1_1Belief.md) &) const<br> |
| virtual bool | [**operator==**](classsdm_1_1Belief.md#function-operator-4) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & other) const<br>_Check equality between two states. This function must be implemented in inherited classes._  |
| virtual bool | [**operator==**](classsdm_1_1Belief.md#function-operator-5) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual double | [**operator^**](classsdm_1_1Belief.md#function-operator-6) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**sampleState**](classsdm_1_1Belief.md#function-samplestate) () <br> |
|  void | [**serialize**](classsdm_1_1Belief.md#function-serialize) (Archive & archive, const unsigned int) <br> |
| virtual void | [**setDefaultValue**](classsdm_1_1Belief.md#function-setdefaultvalue) (double) <br> |
| virtual void | [**setProbability**](classsdm_1_1Belief.md#function-setprobability) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, double proba) <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1Belief.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1Belief.md#function-str) () const<br>_Get a string describing the current item._  |
| virtual  | [**~Belief**](classsdm_1_1Belief.md#function-belief) () <br> |

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

## Public Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-1-5) () <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-2-5) (T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-3-5) (long size, T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-4-5) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-5-5) (std::initializer\_list&lt; [**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type) &gt;) <br> |
|  std::shared\_ptr&lt; TOutput &gt; | [**add**](classsdm_1_1MappedVector.md#function-add) (const std::shared\_ptr&lt; TOutput &gt; & other, double coef\_this=1., double coef\_other=1.) const<br> |
| virtual void | [**addValueAt**](classsdm_1_1MappedVector.md#function-addvalueat) (const TIndex &, const T &) <br> |
| virtual TIndex | [**argmax**](classsdm_1_1MappedVector.md#function-argmax) () <br> |
| virtual TIndex | [**argmin**](classsdm_1_1MappedVector.md#function-argmin) () <br> |
| virtual T | [**at**](classsdm_1_1MappedVector.md#function-at) (const TIndex &) const<br> |
|  T | [**dot**](classsdm_1_1MappedVector.md#function-dot) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br>_This method implements a non-commutative dot product : It is worth noticing that sometimes arg1.dot(arg2) != arg2.dot(arg1)_  |
|  void | [**finalize**](classsdm_1_1MappedVector.md#function-finalize) () <br> |
|  T | [**getDefault**](classsdm_1_1MappedVector.md#function-getdefault) () const<br> |
| virtual std::vector&lt; TIndex &gt; | [**getIndexes**](classsdm_1_1MappedVector.md#function-getindexes) () const<br> |
| virtual T | [**getValueAt**](classsdm_1_1MappedVector.md#function-getvalueat) (const TIndex &) const<br> |
|  bool | [**isExist**](classsdm_1_1MappedVector.md#function-isexist) (const TIndex &) const<br> |
|  bool | [**is\_equal**](classsdm_1_1MappedVector.md#function-is-equal) (const [**MappedVector**](classsdm_1_1MappedVector.md) & other, double precision) const<br> |
| virtual T | [**max**](classsdm_1_1MappedVector.md#function-max) () <br> |
| virtual T | [**min**](classsdm_1_1MappedVector.md#function-min) () <br> |
|  T | [**norm\_1**](classsdm_1_1MappedVector.md#function-norm-1) () const<br> |
|  T | [**norm\_2**](classsdm_1_1MappedVector.md#function-norm-2) () const<br> |
|  bool | [**operator!=**](classsdm_1_1MappedVector.md#function-operator) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  T | [**operator\***](classsdm_1_1MappedVector.md#function-operator-2) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  bool | [**operator&lt;**](classsdm_1_1MappedVector.md#function-operator-3) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  bool | [**operator==**](classsdm_1_1MappedVector.md#function-operator-4) (const [**MappedVector**](classsdm_1_1MappedVector.md) & other) const<br> |
|  T | [**operator^**](classsdm_1_1MappedVector.md#function-operator-5) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br>_This method implements a non-commutative dot product : It is worth noticing that sometimes arg1.dot(arg2) != arg2.dot(arg1)_  |
|  void | [**serialize**](classsdm_1_1MappedVector.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  void | [**setDefault**](classsdm_1_1MappedVector.md#function-setdefault) (double default\_value) <br> |
| virtual void | [**setValueAt**](classsdm_1_1MappedVector.md#function-setvalueat) (const TIndex &, const T &) <br> |
|  void | [**setupIndexes**](classsdm_1_1MappedVector.md#function-setupindexes) () <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1MappedVector.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1MappedVector.md#function-str) () const<br> |
| virtual  | [**~MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector) () <br> |

## Public Functions inherited from sdm::VectorInterface

See [sdm::VectorInterface](classsdm_1_1VectorInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**addValueAt**](classsdm_1_1VectorInterface.md#function-addvalueat) (const I & index, const T & value) = 0<br> |
| virtual I | [**argmax**](classsdm_1_1VectorInterface.md#function-argmax) () = 0<br> |
| virtual I | [**argmin**](classsdm_1_1VectorInterface.md#function-argmin) () = 0<br> |
| virtual T | [**at**](classsdm_1_1VectorInterface.md#function-at) (const I & index) const = 0<br> |
| virtual std::vector&lt; I &gt; | [**getIndexes**](classsdm_1_1VectorInterface.md#function-getindexes) () const = 0<br> |
| virtual T | [**getValueAt**](classsdm_1_1VectorInterface.md#function-getvalueat) (const I & index) const = 0<br> |
| virtual T | [**max**](classsdm_1_1VectorInterface.md#function-max) () = 0<br> |
| virtual T | [**min**](classsdm_1_1VectorInterface.md#function-min) () = 0<br> |
| virtual void | [**setValueAt**](classsdm_1_1VectorInterface.md#function-setvalueat) (const I & index, const T & value) = 0<br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1VectorInterface.md#function-size) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1VectorInterface.md#function-str) () const = 0<br> |

## Public Static Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getState**](classsdm_1_1Belief.md#function-getstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) <br> |







## Public Static Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  void | [**setPrecision**](classsdm_1_1MappedVector.md#function-setprecision) (double) <br> |




















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**distribution\_**](classsdm_1_1Belief.md#variable-distribution-)  <br> |







## Protected Attributes inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  bool | [**bmax**](classsdm_1_1MappedVector.md#variable-bmax)   = = false<br> |
|  bool | [**bmin**](classsdm_1_1MappedVector.md#variable-bmin)   = = false<br> |
|  T | [**default\_value\_**](classsdm_1_1MappedVector.md#variable-default-value-)   = = 0.0<br> |
|  std::pair&lt; TIndex, T &gt; | [**pmax**](classsdm_1_1MappedVector.md#variable-pmax)  <br> |
|  std::pair&lt; TIndex, T &gt; | [**pmin**](classsdm_1_1MappedVector.md#variable-pmin)  <br> |
|  long | [**size\_**](classsdm_1_1MappedVector.md#variable-size-)   = = -1<br> |
|  std::vector&lt; TIndex &gt; | [**v\_indexes**](classsdm_1_1MappedVector.md#variable-v-indexes)   = = {}<br> |


















## Protected Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  const std::pair&lt; TIndex, T &gt; & | [**getMax**](classsdm_1_1MappedVector.md#function-getmax) () <br> |
|  const std::pair&lt; TIndex, T &gt; & | [**getMin**](classsdm_1_1MappedVector.md#function-getmin) () <br> |











## Public Static Attributes Documentation


### variable PRECISION 


```cpp
double sdm::Belief::PRECISION;
```


## Public Functions Documentation


### function Belief [1/5]


```cpp
sdm::Belief::Belief () 
```



### function Belief [2/5]


```cpp
sdm::Belief::Belief (
    std::size_t
) 
```



### function Belief [3/5]


```cpp
sdm::Belief::Belief (
    const Belief &
) 
```



### function Belief [4/5]


```cpp
sdm::Belief::Belief (
    const MappedVector < std::shared_ptr< State >> &
) 
```



### function Belief [5/5]


```cpp
sdm::Belief::Belief (
    const std::vector< std::shared_ptr< State >> & list_states,
    const std::vector< double > & list_proba
) 
```



### function addProbability 


```cpp
virtual void sdm::Belief::addProbability (
    const std::shared_ptr< State > & state,
    double proba
) 
```


Implements [*sdm::BeliefInterface::addProbability*](classsdm_1_1BeliefInterface.md#function-addprobability)


### function finalize 


```cpp
virtual void sdm::Belief::finalize () 
```


Implements [*sdm::BeliefInterface::finalize*](classsdm_1_1BeliefInterface.md#function-finalize)


### function getDefaultValue 


```cpp
virtual double sdm::Belief::getDefaultValue () const
```


Implements [*sdm::BeliefInterface::getDefaultValue*](classsdm_1_1BeliefInterface.md#function-getdefaultvalue)


### function getProbability 


```cpp
virtual double sdm::Belief::getProbability (
    const std::shared_ptr< State > & state
) const
```


Implements [*sdm::BeliefInterface::getProbability*](classsdm_1_1BeliefInterface.md#function-getprobability)


### function getStates 


```cpp
virtual std::vector< std::shared_ptr< State > > sdm::Belief::getStates () const
```


Implements [*sdm::BeliefInterface::getStates*](classsdm_1_1BeliefInterface.md#function-getstates)


### function getTypeState 


```cpp
virtual TypeState sdm::Belief::getTypeState () const
```


Implements [*sdm::State::getTypeState*](classsdm_1_1State.md#function-gettypestate)


### function getVectorInferface 


```cpp
virtual std::shared_ptr< VectorInterface < std::shared_ptr< State >, double > > sdm::Belief::getVectorInferface () 
```


Implements [*sdm::BeliefInterface::getVectorInferface*](classsdm_1_1BeliefInterface.md#function-getvectorinferface)


### function hash 


```cpp
virtual size_t sdm::Belief::hash () const
```




**Returns:**

size\_t the hash code 




        
Implements [*sdm::State::hash*](classsdm_1_1State.md#function-hash)


### function isStateExist 


```cpp
virtual bool sdm::Belief::isStateExist (
    const std::shared_ptr< State > & state_tmp
) const
```


Implements [*sdm::BeliefInterface::isStateExist*](classsdm_1_1BeliefInterface.md#function-isstateexist)


### function norm\_1 


```cpp
virtual double sdm::Belief::norm_1 () const
```


Implements [*sdm::BeliefInterface::norm\_1*](classsdm_1_1BeliefInterface.md#function-norm-1)


### function normalizeBelief 


```cpp
virtual void sdm::Belief::normalizeBelief (
    double norm_1
) 
```


Implements [*sdm::BeliefInterface::normalizeBelief*](classsdm_1_1BeliefInterface.md#function-normalizebelief)


### function operator&lt; 


```cpp
virtual double sdm::Belief::operator< (
    const std::shared_ptr< BeliefInterface > & other
) const
```


Implements [*sdm::BeliefInterface::operator&lt;*](classsdm_1_1BeliefInterface.md#function-operator)


### function operator&lt; 


```cpp
double sdm::Belief::operator< (
    const Belief & other
) const
```



### function operator== 


```cpp
bool sdm::Belief::operator== (
    const Belief &
) const
```



### function operator== 


```cpp
virtual bool sdm::Belief::operator== (
    const std::shared_ptr< State > & other
) const
```




**Parameters:**


* `other` the state to be compared to current state 



**Returns:**

true if states are equal 




**Returns:**

false if they are different 




        
Implements [*sdm::State::operator==*](classsdm_1_1State.md#function-operator)


### function operator== 


```cpp
virtual bool sdm::Belief::operator== (
    const std::shared_ptr< BeliefInterface > & other
) const
```


Implements [*sdm::BeliefInterface::operator==*](classsdm_1_1BeliefInterface.md#function-operator-2)


### function operator^ 


```cpp
virtual double sdm::Belief::operator^ (
    const std::shared_ptr< BeliefInterface > & other
) const
```


Implements [*sdm::BeliefInterface::operator^*](classsdm_1_1BeliefInterface.md#function-operator-3)


### function sampleState 


```cpp
virtual std::shared_ptr< State > sdm::Belief::sampleState () 
```


Implements [*sdm::BeliefInterface::sampleState*](classsdm_1_1BeliefInterface.md#function-samplestate)


### function serialize 


```cpp
template<class Archive class Archive>
inline void sdm::Belief::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function setDefaultValue 


```cpp
virtual void sdm::Belief::setDefaultValue (
    double
) 
```


Implements [*sdm::BeliefInterface::setDefaultValue*](classsdm_1_1BeliefInterface.md#function-setdefaultvalue)


### function setProbability 


```cpp
virtual void sdm::Belief::setProbability (
    const std::shared_ptr< State > & state,
    double proba
) 
```


Implements [*sdm::BeliefInterface::setProbability*](classsdm_1_1BeliefInterface.md#function-setprobability)


### function size 


```cpp
inline virtual size_t sdm::Belief::size () const
```


Implements [*sdm::BeliefInterface::size*](classsdm_1_1BeliefInterface.md#function-size)


### function str 


```cpp
virtual std::string sdm::Belief::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::State::str*](classsdm_1_1State.md#function-str)


### function ~Belief 


```cpp
virtual sdm::Belief::~Belief () 
```


## Public Static Functions Documentation


### function getState 


```cpp
static std::shared_ptr< State > sdm::Belief::getState (
    const std::shared_ptr< State > &
) 
```


## Protected Attributes Documentation


### variable distribution\_ 


```cpp
DiscreteDistribution<std::shared_ptr<State> > sdm::Belief::distribution_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Belief::operator<< (
    std::ostream & os,
    const Belief & belief
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/belief_state.hpp`