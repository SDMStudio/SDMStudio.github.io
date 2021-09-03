
# Class sdm::JointHistoryTree

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)



[_**Joint**_](classsdm_1_1Joint.md) _history class that use a representation by tree._[More...](#detailed-description)

* `#include <jhistory_tree.hpp>`



Inherits the following classes: [sdm::JointHistoryInterface](classsdm_1_1JointHistoryInterface.md),  [sdm::HistoryTree](classsdm_1_1HistoryTree.md),  [sdm::Joint](classsdm_1_1Joint.md),  [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; | [**ihistory\_type**](classsdm_1_1JointHistoryTree.md#typedef-ihistory-type)  <br> |
| typedef typename [**HistoryTree::value\_type**](classsdm_1_1HistoryTree.md#typedef-value-type) | [**value\_type**](classsdm_1_1JointHistoryTree.md#typedef-value-type)  <br> |








## Public Types inherited from sdm::HistoryTree

See [sdm::HistoryTree](classsdm_1_1HistoryTree.md)

| Type | Name |
| ---: | :--- |
| typedef typename [**Tree**](classsdm_1_1Tree.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt;::[**value\_type**](classsdm_1_1HistoryTree.md#typedef-value-type) | [**value\_type**](classsdm_1_1HistoryTree.md#typedef-value-type)  <br> |







## Public Types inherited from sdm::Tree

See [sdm::Tree](classsdm_1_1Tree.md)

| Type | Name |
| ---: | :--- |
| typedef T | [**value\_type**](classsdm_1_1Tree.md#typedef-value-type)  <br> |



## Public Types inherited from sdm::Joint

See [sdm::Joint](classsdm_1_1Joint.md)

| Type | Name |
| ---: | :--- |
| typedef T | [**value\_type**](classsdm_1_1Joint.md#typedef-value-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |

































































## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-1-5) () <br>_Default constructor. This constructor builds a default and empty tree._  |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-2-5) ([**number**](namespacesdm.md#typedef-number) n\_agents) <br>_Construct a new joint history tree object (the origin)_  |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-3-5) ([**number**](namespacesdm.md#typedef-number) n\_agents, [**number**](namespacesdm.md#typedef-number) max\_depth) <br>_Construct a new truncated joint history tree object (the origin)_  |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-4-5) (std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; parent, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & item) <br>_This constructor build a child node given its parent's node and a new joint item._  |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-5-5) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; & ihistories) <br>_Construct a new joint history based on individual histories._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**expand**](classsdm_1_1JointHistoryTree.md#function-expand-1-2) (const std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;&gt;&gt; & joint\_observation, bool backup=true) <br>_Expands the tree._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**expand**](classsdm_1_1JointHistoryTree.md#function-expand-2-2) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup=true) <br>_Expands the history._  |
|  std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) &gt; | [**getChild**](classsdm_1_1JointHistoryTree.md#function-getchild) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & child\_item) const<br> |
|  std::vector&lt; std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) &gt; &gt; | [**getChildren**](classsdm_1_1JointHistoryTree.md#function-getchildren) () const<br> |
| virtual std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**getDefaultObs**](classsdm_1_1JointHistoryTree.md#function-getdefaultobs) () <br> |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; | [**getIndividualHistories**](classsdm_1_1JointHistoryTree.md#function-getindividualhistories) () const<br>_Get the address of the individual histories of all agents._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getIndividualHistory**](classsdm_1_1JointHistoryTree.md#function-getindividualhistory) ([**number**](namespacesdm.md#typedef-number) agent\_id) const<br>_Get the address of the individual history of agent 'agent\_id'._  |
|  std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) &gt; | [**getOrigin**](classsdm_1_1JointHistoryTree.md#function-getorigin) () <br> |
|  std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) &gt; | [**getParent**](classsdm_1_1JointHistoryTree.md#function-getparent) () const<br> |
|  std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) &gt; | [**getptr**](classsdm_1_1JointHistoryTree.md#function-getptr) () <br> |
| virtual void | [**isNotOrigin**](classsdm_1_1JointHistoryTree.md#function-isnotorigin) () <br> |
|  void | [**serialize**](classsdm_1_1JointHistoryTree.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  void | [**setDefaultObs**](classsdm_1_1JointHistoryTree.md#function-setdefaultobs) (const std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;&gt;&gt; & default\_observation) <br> |
| virtual std::string | [**str**](classsdm_1_1JointHistoryTree.md#function-str) () const<br>_Get a string describing the current item._  |

## Public Functions inherited from sdm::JointHistoryInterface

See [sdm::JointHistoryInterface](classsdm_1_1JointHistoryInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**addIndividualHistory**](classsdm_1_1JointHistoryInterface.md#function-addindividualhistory) (std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; ihist) = 0<br> |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**expand**](classsdm_1_1JointHistoryInterface.md#function-expand-1-2) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup=true) = 0<br>_Expands the history._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**expand**](classsdm_1_1JointHistoryInterface.md#function-expand-2-2) (const std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;&gt;&gt; &, bool=true) = 0<br> |
| virtual std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**getDefaultObs**](classsdm_1_1JointHistoryInterface.md#function-getdefaultobs) () = 0<br> |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; | [**getIndividualHistories**](classsdm_1_1JointHistoryInterface.md#function-getindividualhistories) () const = 0<br> |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getIndividualHistory**](classsdm_1_1JointHistoryInterface.md#function-getindividualhistory) ([**number**](namespacesdm.md#typedef-number) agent\_id) const = 0<br> |
| virtual void | [**isNotOrigin**](classsdm_1_1JointHistoryInterface.md#function-isnotorigin) () = 0<br> |
| virtual std::string | [**str**](classsdm_1_1JointHistoryInterface.md#function-str) () const = 0<br>_Get a string describing the current item._  |

## Public Functions inherited from sdm::HistoryInterface

See [sdm::HistoryInterface](classsdm_1_1HistoryInterface.md)

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

## Public Functions inherited from sdm::HistoryTree

See [sdm::HistoryTree](classsdm_1_1HistoryTree.md)

| Type | Name |
| ---: | :--- |
|   | [**HistoryTree**](classsdm_1_1HistoryTree.md#function-historytree-1-3) () <br>_Default constructor. This constructor builds a default and empty tree._  |
|   | [**HistoryTree**](classsdm_1_1HistoryTree.md#function-historytree-2-3) ([**number**](namespacesdm.md#typedef-number) max\_depth) <br>_Construct a new truncated tree object._  |
|   | [**HistoryTree**](classsdm_1_1HistoryTree.md#function-historytree-3-3) (std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; parent, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & item) <br>_Construct a history tree iteratively._  |
| virtual std::shared\_ptr&lt; output &gt; | [**expand**](classsdm_1_1HistoryTree.md#function-expand-1-2) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup=true) <br>_Expands the history._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**expand**](classsdm_1_1HistoryTree.md#function-expand-2-2) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup=true) <br>_Expands the history._  |
|  std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; | [**getChild**](classsdm_1_1HistoryTree.md#function-getchild) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & child\_item) const<br> |
|  std::vector&lt; std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; &gt; | [**getChildren**](classsdm_1_1HistoryTree.md#function-getchildren) () const<br> |
|  const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & | [**getData**](classsdm_1_1HistoryTree.md#function-getdata) () const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1HistoryTree.md#function-gethorizon) () const<br>_Get the horizon of the history._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**getLastObservation**](classsdm_1_1HistoryTree.md#function-getlastobservation) () <br>_Get the last observation._  |
|  std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; | [**getOrigin**](classsdm_1_1HistoryTree.md#function-getorigin) () <br> |
|  std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; | [**getParent**](classsdm_1_1HistoryTree.md#function-getparent) () const<br> |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getPointer**](classsdm_1_1HistoryTree.md#function-getpointer) () <br>_Get the shared\_ptr on current (this) item._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getPreviousHistory**](classsdm_1_1HistoryTree.md#function-getprevioushistory) () <br>_Get the previous history._  |
|  std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md) &gt; | [**getptr**](classsdm_1_1HistoryTree.md#function-getptr) () <br> |
|  void | [**serialize**](classsdm_1_1HistoryTree.md#function-serialize) (Archive & archive, const unsigned int) <br> |
| virtual std::string | [**short\_str**](classsdm_1_1HistoryTree.md#function-short-str) () const<br> |
| virtual std::string | [**str**](classsdm_1_1HistoryTree.md#function-str) () const<br>_Get a string describing the current item._  |

## Public Functions inherited from sdm::HistoryInterface

See [sdm::HistoryInterface](classsdm_1_1HistoryInterface.md)

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

## Public Functions inherited from sdm::Tree

See [sdm::Tree](classsdm_1_1Tree.md)

| Type | Name |
| ---: | :--- |
|   | [**Tree**](classsdm_1_1Tree.md#function-tree-1-3) () <br>_Default constructor object._  |
|   | [**Tree**](classsdm_1_1Tree.md#function-tree-2-3) ([**number**](namespacesdm.md#typedef-number) max\_depth) <br>_Construct a new_ [_**Tree**_](classsdm_1_1Tree.md) _object (the origin)_ |
|   | [**Tree**](classsdm_1_1Tree.md#function-tree-3-3) (std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt;&gt; parent, const T & data) <br>_Construct a new_ [_**Tree**_](classsdm_1_1Tree.md) _object._ |
|  void | [**addChild**](classsdm_1_1Tree.md#function-addchild) (const T & child\_item) <br> |
|  void | [**addChildren**](classsdm_1_1Tree.md#function-addchildren) (const std::vector&lt; T &gt; & child\_items) <br> |
|  std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**getChild**](classsdm_1_1Tree.md#function-getchild) (const T & child\_item) const<br> |
|  std::vector&lt; std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; &gt; | [**getChildren**](classsdm_1_1Tree.md#function-getchildren) () const<br> |
|  const T & | [**getData**](classsdm_1_1Tree.md#function-getdata) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getDepth**](classsdm_1_1Tree.md#function-getdepth) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getMaxDepth**](classsdm_1_1Tree.md#function-getmaxdepth) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumChildren**](classsdm_1_1Tree.md#function-getnumchildren) () const<br> |
|  std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**getOrigin**](classsdm_1_1Tree.md#function-getorigin) () <br> |
|  std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**getParent**](classsdm_1_1Tree.md#function-getparent) () const<br> |
|  std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**getptr**](classsdm_1_1Tree.md#function-getptr) () <br> |
|  bool | [**isOrigin**](classsdm_1_1Tree.md#function-isorigin) () const<br> |
|  void | [**serialize**](classsdm_1_1Tree.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  void | [**setMaxDepth**](classsdm_1_1Tree.md#function-setmaxdepth) ([**number**](namespacesdm.md#typedef-number)) const<br> |
|  std::string | [**str**](classsdm_1_1Tree.md#function-str) () const<br> |
| virtual  | [**~Tree**](classsdm_1_1Tree.md#function-tree) () <br>_Destructor of_ [_**Tree**_](classsdm_1_1Tree.md) _(that's bad)._ |

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

## Public Functions inherited from sdm::Joint

See [sdm::Joint](classsdm_1_1Joint.md)

| Type | Name |
| ---: | :--- |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-1-4) () <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-2-4) (const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-3-4) (const std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; &, const std::vector&lt; T &gt; & joint\_item) <br> |
|   | [**Joint**](classsdm_1_1Joint.md#function-joint-4-4) (std::initializer\_list&lt; T &gt; list\_values) <br> |
|  const T & | [**get**](classsdm_1_1Joint.md#function-get) (const [**number**](namespacesdm.md#typedef-number) &) const<br>_Get the element for agent i._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1Joint.md#function-getnumagents) () const<br>_Get the number of agents (i.e. the size of the joint element)_  |
| virtual T | [**operator()**](classsdm_1_1Joint.md#function-operator()) (const [**number**](namespacesdm.md#typedef-number) &) <br>_Get the element for agent i._  |
|  void | [**serialize**](classsdm_1_1Joint.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  std::string | [**str**](classsdm_1_1Joint.md#function-str) () const<br> |
|  std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; TOutput &gt; &gt; &gt; | [**toJoint**](classsdm_1_1Joint.md#function-tojoint) () <br> |
| virtual  | [**~Joint**](classsdm_1_1Joint.md#function-joint) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |

## Public Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|   | [**BoostSerializable**](classsdm_1_1BoostSerializable.md#function-boostserializable) () <br> |
|  void | [**load**](classsdm_1_1BoostSerializable.md#function-load) (std::string filename) <br>_Load a value function from a file. The extension of the file will indicate the type of formatage for reading (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
|  void | [**save**](classsdm_1_1BoostSerializable.md#function-save) (std::string filename) <br>_Save a value function into a file. The extension of the file will indicate the type of formatage for recording (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
































































## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt; &gt; | [**default\_observation\_**](classsdm_1_1JointHistoryTree.md#variable-default-observation-)  <br> |















## Protected Attributes inherited from sdm::Tree

See [sdm::Tree](classsdm_1_1Tree.md)

| Type | Name |
| ---: | :--- |
|  std::map&lt; T, std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; &gt; | [**children\_**](classsdm_1_1Tree.md#variable-children-)  <br>_mapping of items to successor trees_  |
|  T | [**data\_**](classsdm_1_1Tree.md#variable-data-)  <br>_data of the current node_  |
|  [**number**](namespacesdm.md#typedef-number) | [**depth\_**](classsdm_1_1Tree.md#variable-depth-)   = = 0<br>_depth of the tree_  |
|  bool | [**is\_origin**](classsdm_1_1Tree.md#variable-is-origin)   = = false<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**max\_depth\_**](classsdm_1_1Tree.md#variable-max-depth-)   = = std::numeric\_limits&lt;[**number**](namespacesdm.md#typedef-number)&gt;::max()<br>_maximum length of the tree_  |
|  std::weak\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**origin\_**](classsdm_1_1Tree.md#variable-origin-)  <br>_the root of the tree_  |
|  std::weak\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**parent\_**](classsdm_1_1Tree.md#variable-parent-)  <br>_the parent node_  |



























## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**addIndividualHistory**](classsdm_1_1JointHistoryTree.md#function-addindividualhistory) (std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; ihist) <br> |
|  void | [**setupDefaultObs**](classsdm_1_1JointHistoryTree.md#function-setupdefaultobs) ([**number**](namespacesdm.md#typedef-number) num\_agents, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & default\_observation=[**sdm::NO\_OBSERVATION**](namespacesdm.md#variable-no-observation)) <br> |








## Protected Functions inherited from sdm::HistoryTree

See [sdm::HistoryTree](classsdm_1_1HistoryTree.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; output &gt; | [**truncatedExpand**](classsdm_1_1HistoryTree.md#function-truncatedexpand) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup) <br>_Expands the tree using truncated expand method._  |












## Protected Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|  void | [**serialize**](classsdm_1_1BoostSerializable.md#function-serialize) (Archive & archive, const unsigned int version) <br> |






















# Detailed Description


It can be viewed as a history over joint observations and as a list of individual histories. 

    
## Public Types Documentation


### typedef ihistory\_type 


```cpp
using sdm::JointHistoryTree::ihistory_type =  std::shared_ptr<HistoryTree>;
```



### typedef value\_type 


```cpp
using sdm::JointHistoryTree::value_type =  typename HistoryTree::value_type;
```


## Public Functions Documentation


### function JointHistoryTree [1/5]


```cpp
sdm::JointHistoryTree::JointHistoryTree () 
```



### function JointHistoryTree [2/5]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    number n_agents
) 
```




**Parameters:**


* `n_agents` the number of agents 



        

### function JointHistoryTree [3/5]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    number n_agents,
    number max_depth
) 
```




**Parameters:**


* `n_agents` the number of agents 
* `max_depth` the maximal depth of the truncated history 



        

### function JointHistoryTree [4/5]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    std::shared_ptr< HistoryTree > parent,
    const std::shared_ptr< Observation > & item
) 
```




**Parameters:**


* `parent` the parent tree 
* `item` the item 



        

### function JointHistoryTree [5/5]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    const Joint < std::shared_ptr< HistoryInterface >> & ihistories
) 
```




::: warning Warning:
This will build a well defined [**Joint**](classsdm_1_1Joint.md)&lt;std::shared\_ptr&lt;HistoryTree&gt;&gt; structure but wrong [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt;std::shared\_ptr&lt;Joint&lt;T&gt;&gt;&gt; !!

:::



**Parameters:**


* `ihistories` the list of individual histories 



        

### function expand [1/2]


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::JointHistoryTree::expand (
    const std::shared_ptr< Joint < std::shared_ptr< Observation >>> & joint_observation,
    bool backup=true
) 
```




**Parameters:**


* `data` the data of the expanded node 



**Returns:**

the expanded tree


If child leading from the item previously exists, the method return that child. Otherwise, it expands the tree by adding an item at the current leaf of the tree and creating if necessary a corresponding child. The constructed child is returned. 

        
Implements [*sdm::JointHistoryInterface::expand*](classsdm_1_1JointHistoryInterface.md#function-expand-2-2)


### function expand [2/2]


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::JointHistoryTree::expand (
    const std::shared_ptr< Observation > & observation,
    bool backup=true
) 
```




**Parameters:**


* `data` the data of the expanded node 



**Returns:**

the expanded history


If child leading from the item previously exists, the method return that child. Otherwise, it expands the tree by adding an item at the current leaf of the tree and creating if necessary a corresponding child. The constructed child is returned. 

        
Implements [*sdm::HistoryTree::expand*](classsdm_1_1HistoryTree.md#function-expand-1-2)


### function getChild 


```cpp
std::shared_ptr< JointHistoryTree > sdm::JointHistoryTree::getChild (
    const std::shared_ptr< Observation > & child_item
) const
```



### function getChildren 


```cpp
std::vector< std::shared_ptr< JointHistoryTree > > sdm::JointHistoryTree::getChildren () const
```



### function getDefaultObs 


```cpp
virtual std::shared_ptr< Joint < std::shared_ptr< Observation > > > sdm::JointHistoryTree::getDefaultObs () 
```


Implements [*sdm::JointHistoryInterface::getDefaultObs*](classsdm_1_1JointHistoryInterface.md#function-getdefaultobs)


### function getIndividualHistories 


```cpp
virtual Joint < std::shared_ptr< HistoryInterface > > sdm::JointHistoryTree::getIndividualHistories () const
```




**Returns:**

a vector that contains all individual histories 




        
Implements [*sdm::JointHistoryInterface::getIndividualHistories*](classsdm_1_1JointHistoryInterface.md#function-getindividualhistories)


### function getIndividualHistory 


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::JointHistoryTree::getIndividualHistory (
    number agent_id
) const
```




**Parameters:**


* `agent_id` the agent id 



**Returns:**

the address of the individual history of agent 'agent\_id' 




        
Implements [*sdm::JointHistoryInterface::getIndividualHistory*](classsdm_1_1JointHistoryInterface.md#function-getindividualhistory)


### function getOrigin 


```cpp
std::shared_ptr< JointHistoryTree > sdm::JointHistoryTree::getOrigin () 
```



### function getParent 


```cpp
std::shared_ptr< JointHistoryTree > sdm::JointHistoryTree::getParent () const
```



### function getptr 


```cpp
std::shared_ptr< JointHistoryTree > sdm::JointHistoryTree::getptr () 
```



### function isNotOrigin 


```cpp
virtual void sdm::JointHistoryTree::isNotOrigin () 
```


Implements [*sdm::JointHistoryInterface::isNotOrigin*](classsdm_1_1JointHistoryInterface.md#function-isnotorigin)


### function serialize 


```cpp
template<class Archive class Archive>
void sdm::JointHistoryTree::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function setDefaultObs 


```cpp
void sdm::JointHistoryTree::setDefaultObs (
    const std::shared_ptr< Joint < std::shared_ptr< Observation >>> & default_observation
) 
```



### function str 


```cpp
virtual std::string sdm::JointHistoryTree::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::HistoryTree::str*](classsdm_1_1HistoryTree.md#function-str)

## Protected Attributes Documentation


### variable default\_observation\_ 


```cpp
std::shared_ptr<Joint<std::shared_ptr<Observation> > > sdm::JointHistoryTree::default_observation_;
```


## Protected Functions Documentation


### function addIndividualHistory 


```cpp
virtual void sdm::JointHistoryTree::addIndividualHistory (
    std::shared_ptr< HistoryInterface > ihist
) 
```


Implements [*sdm::JointHistoryInterface::addIndividualHistory*](classsdm_1_1JointHistoryInterface.md#function-addindividualhistory)


### function setupDefaultObs 


```cpp
void sdm::JointHistoryTree::setupDefaultObs (
    number num_agents,
    const std::shared_ptr< Observation > & default_observation=sdm::NO_OBSERVATION
) 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::JointHistoryTree::operator<< (
    std::ostream & os,
    JointHistoryTree & j_hist
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/jhistory_tree.hpp`