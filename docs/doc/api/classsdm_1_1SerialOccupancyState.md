
# Class sdm::SerialOccupancyState

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md)





* `#include <serial_occupancy_state.hpp>`



Inherits the following classes: [sdm::OccupancyState](classsdm_1_1OccupancyState.md),  [sdm::SerialInterface](classsdm_1_1SerialInterface.md)
























## Public Types inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
| typedef typename std::unordered\_map&lt; TIndex, T, Hash, KeyEqual &gt;::[**const\_iterator**](classsdm_1_1MappedVector.md#typedef-const-iterator) | [**const\_iterator**](classsdm_1_1MappedVector.md#typedef-const-iterator)  <br> |
| typedef typename std::unordered\_map&lt; TIndex, T, Hash, KeyEqual &gt;::[**iterator**](classsdm_1_1MappedVector.md#typedef-iterator) | [**iterator**](classsdm_1_1MappedVector.md#typedef-iterator)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**type**](classsdm_1_1MappedVector.md#typedef-type) | [**type**](classsdm_1_1MappedVector.md#typedef-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type) | [**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**value\_type**](classsdm_1_1MappedVector.md#typedef-value-type) | [**value\_type**](classsdm_1_1MappedVector.md#typedef-value-type)  <br> |










































## Public Static Attributes inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|  int | [**NUM\_CREATE**](classsdm_1_1OccupancyState.md#variable-num-create)  <br> |
|  int | [**NUM\_DESTROY**](classsdm_1_1OccupancyState.md#variable-num-destroy)  <br> |
|  unsigned long | [**PASSAGE\_FINALIZE**](classsdm_1_1OccupancyState.md#variable-passage-finalize)  <br> |
|  unsigned long | [**PASSAGE\_GET\_PROBA**](classsdm_1_1OccupancyState.md#variable-passage-get-proba)  <br> |
|  unsigned long | [**PASSAGE\_SET\_PROBA**](classsdm_1_1OccupancyState.md#variable-passage-set-proba)  <br> |
|  double | [**PRECISION**](classsdm_1_1OccupancyState.md#variable-precision)  <br> |
|  double | [**TIME\_IN\_ADD\_PROBA**](classsdm_1_1OccupancyState.md#variable-time-in-add-proba)  <br> |
|  double | [**TIME\_IN\_COMPRESS**](classsdm_1_1OccupancyState.md#variable-time-in-compress)  <br> |
|  double | [**TIME\_IN\_DOT\_OPERATOR**](classsdm_1_1OccupancyState.md#variable-time-in-dot-operator)  <br> |
|  double | [**TIME\_IN\_EQUAL\_OPERATOR**](classsdm_1_1OccupancyState.md#variable-time-in-equal-operator)  <br> |
|  double | [**TIME\_IN\_FINALIZE**](classsdm_1_1OccupancyState.md#variable-time-in-finalize)  <br> |
|  double | [**TIME\_IN\_GET\_PROBA**](classsdm_1_1OccupancyState.md#variable-time-in-get-proba)  <br> |
|  double | [**TIME\_IN\_HASH**](classsdm_1_1OccupancyState.md#variable-time-in-hash)  <br> |
|  double | [**TIME\_IN\_INFERIOR\_OPERATOR**](classsdm_1_1OccupancyState.md#variable-time-in-inferior-operator)  <br> |
|  double | [**TIME\_IN\_MINUS\_OPERATOR**](classsdm_1_1OccupancyState.md#variable-time-in-minus-operator)  <br> |
|  double | [**TIME\_IN\_SET\_PROBA**](classsdm_1_1OccupancyState.md#variable-time-in-set-proba)  <br> |
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt;, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**jhistory\_map\_**](classsdm_1_1OccupancyState.md#variable-jhistory-map-)  <br>_Keep relation between list of individual histories and joint histories._  |








## Public Static Attributes inherited from sdm::Belief

See [sdm::Belief](classsdm_1_1Belief.md)

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
|   | [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md#function-serialoccupancystate-1-4) () <br> |
|   | [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md#function-serialoccupancystate-2-4) ([**number**](namespacesdm.md#typedef-number) num\_agents) <br> |
|   | [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md#function-serialoccupancystate-3-4) (const [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md) & copy) <br> |
|   | [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md#function-serialoccupancystate-4-4) (const [**OccupancyState**](classsdm_1_1OccupancyState.md) & copy) <br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerialOccupancyState.md#function-getcurrentagentid) () const<br>_Get the current Agent Id of the object._  |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1SerialOccupancyState.md#function-gettypestate) () const<br> |
| virtual std::string | [**str**](classsdm_1_1SerialOccupancyState.md#function-str) () const<br>_Get a string describing the current item._  |

## Public Functions inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-1-3) () <br> |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-2-3) ([**number**](namespacesdm.md#typedef-number) num\_agents) <br> |
|   | [**OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate-3-3) (const [**OccupancyState**](classsdm_1_1OccupancyState.md) & copy) <br> |
| virtual void | [**addProbability**](classsdm_1_1OccupancyState.md#function-addprobability-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & joint\_history, double proba) <br> |
| virtual void | [**addProbability**](classsdm_1_1OccupancyState.md#function-addprobability-2-2) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & belief, double proba) <br> |
|  bool | [**areIndividualHistoryLPE**](classsdm_1_1OccupancyState.md#function-areindividualhistorylpe) (const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &, [**number**](namespacesdm.md#typedef-number)) <br>_Check probabilistic equivalence._  |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**compress**](classsdm_1_1OccupancyState.md#function-compress) () <br>_Compression for occupancy states based on belief state representation. To be in this representation, the type 'TState' have to be a derivation of the interface BeliefState._  |
| virtual void | [**finalize**](classsdm_1_1OccupancyState.md#function-finalize) () <br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1OccupancyState.md#function-getactionspaceat) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual const std::vector&lt; std::set&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; &gt; & | [**getAllIndividualHistories**](classsdm_1_1OccupancyState.md#function-getallindividualhistories) () const<br>_Get the set of individual histories that are in the support of the occupancy state (for all agents)._  |
| virtual std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; | [**getBeliefAt**](classsdm_1_1OccupancyState.md#function-getbeliefat) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & jhistory) const<br>_Get the belief corresponding to the given joint historiy._  |
| virtual const std::set&lt; std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; & | [**getBeliefs**](classsdm_1_1OccupancyState.md#function-getbeliefs) () const<br>_Get the set of states that are in the support of the occupancy state for a precise joint historiy._  |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getCompressedJointHistory**](classsdm_1_1OccupancyState.md#function-getcompressedjointhistory) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) const<br>_Get the Compressed_ [_**Joint**_](classsdm_1_1Joint.md) _History._ |
|  std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getCompressedOccupancy**](classsdm_1_1OccupancyState.md#function-getcompressedoccupancy) () <br> |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getFullyUncompressedOccupancy**](classsdm_1_1OccupancyState.md#function-getfullyuncompressedoccupancy) () <br>_Get the fully uncompressed occupancy state._  |
| virtual std::vector&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**getIndividualHierarchicalHistoriesOf**](classsdm_1_1OccupancyState.md#function-getindividualhierarchicalhistoriesof) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent) <br> |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getIndividualHierarchicalHistory**](classsdm_1_1OccupancyState.md#function-getindividualhierarchicalhistory) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; candidate\_ihhistory) <br> |
| virtual const std::set&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; & | [**getIndividualHistories**](classsdm_1_1OccupancyState.md#function-getindividualhistories) ([**number**](namespacesdm.md#typedef-number) ag\_id) const<br>_Get the set of individual histories that are in the support of the occupancy state (for a given agent)._  |
| virtual const std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; & | [**getJointHistories**](classsdm_1_1OccupancyState.md#function-getjointhistories) () const<br>_Get the set of joint histories that are in the support of the occupancy state._  |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getJointHistory**](classsdm_1_1OccupancyState.md#function-getjointhistory) (std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; candidate\_jhistory) <br> |
| virtual std::vector&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**getJointHistoryVector**](classsdm_1_1OccupancyState.md#function-getjointhistoryvector) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; | [**getJointLabels**](classsdm_1_1OccupancyState.md#function-getjointlabels) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; &) const<br>_Get the list of labels that corresponds to the list of ihistories._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getLabel**](classsdm_1_1OccupancyState.md#function-getlabel) (const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory, [**number**](namespacesdm.md#typedef-number) agent\_id) const<br>_Get the label that corresponds to the ihistory._  |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getOneStepUncompressedOccupancy**](classsdm_1_1OccupancyState.md#function-getonestepuncompressedoccupancy) () <br>_Get the one step uncompressed occupancy state._  |
|  const std::shared\_ptr&lt; [**PrivateOccupancyState**](classsdm_1_1PrivateOccupancyState.md) &gt; & | [**getPrivateOccupancyState**](classsdm_1_1OccupancyState.md#function-getprivateoccupancystate) (const [**number**](namespacesdm.md#typedef-number) & agent\_id, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory) const<br>_Get the._  |
|  const [**Joint**](classsdm_1_1Joint.md)&lt; [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, std::shared\_ptr&lt; [**PrivateOccupancyState**](classsdm_1_1PrivateOccupancyState.md) &gt; &gt; &gt; & | [**getPrivateOccupancyStates**](classsdm_1_1OccupancyState.md#function-getprivateoccupancystates) () const<br>_Get the Private Occupancy States object._  |
| virtual double | [**getProbability**](classsdm_1_1OccupancyState.md#function-getprobability-1-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & joint\_history) const<br> |
| virtual double | [**getProbability**](classsdm_1_1OccupancyState.md#function-getprobability-2-3) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history) const<br> |
| virtual double | [**getProbability**](classsdm_1_1OccupancyState.md#function-getprobability-3-3) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const<br> |
| virtual double | [**getProbabilityOverIndividualHistories**](classsdm_1_1OccupancyState.md#function-getprobabilityoverindividualhistories) ([**number**](namespacesdm.md#typedef-number), const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &) const<br>_Get the probability over individual histories and precise agent._  |
| virtual [**TypeState**](namespacesdm.md#enum-typestate) | [**getTypeState**](classsdm_1_1OccupancyState.md#function-gettypestate) () const<br> |
|  std::shared\_ptr&lt; [**OccupancyState**](classsdm_1_1OccupancyState.md) &gt; | [**getptr**](classsdm_1_1OccupancyState.md#function-getptr) () <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**hash**](classsdm_1_1OccupancyState.md#function-hash) () const<br>_Get the hash of the state. The hash is used in tabular value functions in order to compare efficiently two states. This function must be reimplemented in inherited classes._  |
| virtual bool | [**individualHierarchicalHistoryVectorForIsDone**](classsdm_1_1OccupancyState.md#function-individualhierarchicalhistoryvectorforisdone) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent) <br> |
| virtual double | [**minus**](classsdm_1_1OccupancyState.md#function-minus) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
|  void | [**normalize**](classsdm_1_1OccupancyState.md#function-normalize) () <br> |
| virtual double | [**operator-**](classsdm_1_1OccupancyState.md#function-operator) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
|  double | [**operator&lt;**](classsdm_1_1OccupancyState.md#function-operator-2) (const [**OccupancyState**](classsdm_1_1OccupancyState.md) & other) const<br> |
| virtual double | [**operator&lt;**](classsdm_1_1OccupancyState.md#function-operator-3) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual bool | [**operator==**](classsdm_1_1OccupancyState.md#function-operator-4) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & other) const<br>_Check equality between two states. This function must be implemented in inherited classes._  |
|  bool | [**operator==**](classsdm_1_1OccupancyState.md#function-operator-5) (const [**OccupancyState**](classsdm_1_1OccupancyState.md) & other) const<br> |
| virtual bool | [**operator==**](classsdm_1_1OccupancyState.md#function-operator-6) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual double | [**operator^**](classsdm_1_1OccupancyState.md#function-operator-7) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const<br> |
| virtual void | [**prepareIndividualHierarchicalHistoryVectors**](classsdm_1_1OccupancyState.md#function-prepareindividualhierarchicalhistoryvectors) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual void | [**pushToIndividualHierarchicalHistoriesOf**](classsdm_1_1OccupancyState.md#function-pushtoindividualhierarchicalhistoriesof) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & individual\_hierarchical\_history) <br> |
| virtual void | [**pushToJointHistoryVector**](classsdm_1_1OccupancyState.md#function-pushtojointhistoryvector) ([**number**](namespacesdm.md#typedef-number) t, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & individual\_hierarchical\_history) <br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;, std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; | [**sampleJointHistoryBelief**](classsdm_1_1OccupancyState.md#function-samplejointhistorybelief) () <br> |
| virtual void | [**setActionSpaceAt**](classsdm_1_1OccupancyState.md#function-setactionspaceat) ([**number**](namespacesdm.md#typedef-number) t, std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; action\_space) <br> |
|  void | [**setBeliefAt**](classsdm_1_1OccupancyState.md#function-setbeliefat) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & jhistory, const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & belief) <br>[_**Set**_](structsdm_1_1Set.md) _the belief corresponding to the given joint historiy._ |
|  void | [**setCompressedOccupancy**](classsdm_1_1OccupancyState.md#function-setcompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; & compress\_ostate) <br>[_**Set**_](structsdm_1_1Set.md) _the compressed occupancy state._ |
| virtual void | [**setFullyUncompressedOccupancy**](classsdm_1_1OccupancyState.md#function-setfullyuncompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; &) <br>[_**Set**_](structsdm_1_1Set.md) _the fully uncompressed occupancy state._ |
| virtual void | [**setOneStepUncompressedOccupancy**](classsdm_1_1OccupancyState.md#function-setonestepuncompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; &) <br>[_**Set**_](structsdm_1_1Set.md) _the one step uncompressed occupancy state._ |
| virtual void | [**setProbability**](classsdm_1_1OccupancyState.md#function-setprobability-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & joint\_history, double proba) <br> |
| virtual void | [**setProbability**](classsdm_1_1OccupancyState.md#function-setprobability-2-2) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & belief, double proba) <br> |
|  void | [**setup**](classsdm_1_1OccupancyState.md#function-setup) () <br> |
| virtual std::string | [**str**](classsdm_1_1OccupancyState.md#function-str) () const<br>_Get a string describing the current item._  |
| virtual void | [**updateJointLabels**](classsdm_1_1OccupancyState.md#function-updatejointlabels) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; &, const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; &) <br>_Update the labels of multiple individual histories._  |
|  void | [**updateLabel**](classsdm_1_1OccupancyState.md#function-updatelabel) ([**number**](namespacesdm.md#typedef-number), const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &) <br>_Update the label of a specific individual history._  |
|  void | [**updateTime**](classsdm_1_1OccupancyState.md#function-updatetime) (std::chrono::high\_resolution\_clock::time\_point start\_time, std::string information) const<br> |
|   | [**~OccupancyState**](classsdm_1_1OccupancyState.md#function-occupancystate) () <br> |

## Public Functions inherited from sdm::OccupancyStateInterface

See [sdm::OccupancyStateInterface](classsdm_1_1OccupancyStateInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**addProbability**](classsdm_1_1OccupancyStateInterface.md#function-addprobability-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & pair\_history\_belief, double proba) = 0<br> |
| virtual void | [**addProbability**](classsdm_1_1OccupancyStateInterface.md#function-addprobability-2-2) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & belief, double proba) = 0<br> |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**compress**](classsdm_1_1OccupancyStateInterface.md#function-compress) () = 0<br>_Compression for occupancy states based on belief state representation. To be in this representation, the type 'TState' have to be a derivation of the interface BeliefState._  |
| virtual void | [**finalize**](classsdm_1_1OccupancyStateInterface.md#function-finalize) () = 0<br> |
| virtual std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; | [**getActionSpaceAt**](classsdm_1_1OccupancyStateInterface.md#function-getactionspaceat) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual const std::vector&lt; std::set&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; &gt; & | [**getAllIndividualHistories**](classsdm_1_1OccupancyStateInterface.md#function-getallindividualhistories) () const = 0<br>_Get the set of individual histories that are in the support of the occupancy state (for all agents)._  |
| virtual std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; | [**getBeliefAt**](classsdm_1_1OccupancyStateInterface.md#function-getbeliefat) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & jhistory) const = 0<br>_Get the set of beliefs at a given joint history._  |
| virtual const std::set&lt; std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; & | [**getBeliefs**](classsdm_1_1OccupancyStateInterface.md#function-getbeliefs) () const = 0<br>_Get the set of states that are in the support of the occupancy state for a precise joint historiy._  |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getCompressedJointHistory**](classsdm_1_1OccupancyStateInterface.md#function-getcompressedjointhistory) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) const = 0<br>_Get the Compressed_ [_**Joint**_](classsdm_1_1Joint.md) _History._ |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getFullyUncompressedOccupancy**](classsdm_1_1OccupancyStateInterface.md#function-getfullyuncompressedoccupancy) () = 0<br>_Get the fully uncompressed occupancy state._  |
| virtual std::vector&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**getIndividualHierarchicalHistoriesOf**](classsdm_1_1OccupancyStateInterface.md#function-getindividualhierarchicalhistoriesof) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent) = 0<br> |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getIndividualHierarchicalHistory**](classsdm_1_1OccupancyStateInterface.md#function-getindividualhierarchicalhistory) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; candidate\_ihhistory) = 0<br> |
| virtual const std::set&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; & | [**getIndividualHistories**](classsdm_1_1OccupancyStateInterface.md#function-getindividualhistories) ([**number**](namespacesdm.md#typedef-number) ag\_id) const = 0<br>_Get the set of individual histories that are in the support of the occupancy state (for a given agent)._  |
| virtual const std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; & | [**getJointHistories**](classsdm_1_1OccupancyStateInterface.md#function-getjointhistories) () const = 0<br>_Get the set of joint histories that are in the support of the occupancy state._  |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getJointHistory**](classsdm_1_1OccupancyStateInterface.md#function-getjointhistory) (std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; candidate\_jhistory) = 0<br> |
| virtual std::vector&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**getJointHistoryVector**](classsdm_1_1OccupancyStateInterface.md#function-getjointhistoryvector) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; | [**getJointLabels**](classsdm_1_1OccupancyStateInterface.md#function-getjointlabels) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; &) const = 0<br>_Get the list of labels that corresponds to the list of ihistories._  |
| virtual std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; | [**getLabel**](classsdm_1_1OccupancyStateInterface.md#function-getlabel) (const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory, [**number**](namespacesdm.md#typedef-number) agent\_id) const = 0<br>_Get the label that corresponds to the ihistory._  |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getOneStepUncompressedOccupancy**](classsdm_1_1OccupancyStateInterface.md#function-getonestepuncompressedoccupancy) () = 0<br>_Get the one step uncompressed occupancy state._  |
| virtual double | [**getProbability**](classsdm_1_1OccupancyStateInterface.md#function-getprobability-1-3) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & joint\_history) const = 0<br> |
| virtual double | [**getProbability**](classsdm_1_1OccupancyStateInterface.md#function-getprobability-2-3) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history) const = 0<br> |
| virtual double | [**getProbability**](classsdm_1_1OccupancyStateInterface.md#function-getprobability-3-3) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state) const = 0<br> |
| virtual double | [**getProbabilityOverIndividualHistories**](classsdm_1_1OccupancyStateInterface.md#function-getprobabilityoverindividualhistories) ([**number**](namespacesdm.md#typedef-number), const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &) const = 0<br>_Get the probability over individual histories and precise agent._  |
| virtual bool | [**individualHierarchicalHistoryVectorForIsDone**](classsdm_1_1OccupancyStateInterface.md#function-individualhierarchicalhistoryvectorforisdone) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent) = 0<br> |
| virtual double | [**minus**](classsdm_1_1OccupancyStateInterface.md#function-minus) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const = 0<br> |
| virtual double | [**operator-**](classsdm_1_1OccupancyStateInterface.md#function-operator) (const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & other) const = 0<br> |
| virtual void | [**prepareIndividualHierarchicalHistoryVectors**](classsdm_1_1OccupancyStateInterface.md#function-prepareindividualhierarchicalhistoryvectors) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual void | [**pushToIndividualHierarchicalHistoriesOf**](classsdm_1_1OccupancyStateInterface.md#function-pushtoindividualhierarchicalhistoriesof) ([**number**](namespacesdm.md#typedef-number) t, [**number**](namespacesdm.md#typedef-number) agent, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & individual\_hierarchical\_history) = 0<br> |
| virtual void | [**pushToJointHistoryVector**](classsdm_1_1OccupancyStateInterface.md#function-pushtojointhistoryvector) ([**number**](namespacesdm.md#typedef-number) t, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & individual\_hierarchical\_history) = 0<br> |
| virtual [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;, std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; | [**sampleJointHistoryBelief**](classsdm_1_1OccupancyStateInterface.md#function-samplejointhistorybelief) () = 0<br> |
| virtual void | [**setActionSpaceAt**](classsdm_1_1OccupancyStateInterface.md#function-setactionspaceat) ([**number**](namespacesdm.md#typedef-number) t, std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; action\_space) = 0<br> |
| virtual void | [**setFullyUncompressedOccupancy**](classsdm_1_1OccupancyStateInterface.md#function-setfullyuncompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; &) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the fully uncompressed occupancy state._ |
| virtual void | [**setOneStepUncompressedOccupancy**](classsdm_1_1OccupancyStateInterface.md#function-setonestepuncompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; &) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the one step uncompressed occupancy state._ |
| virtual void | [**setProbability**](classsdm_1_1OccupancyStateInterface.md#function-setprobability-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & pair\_history\_belief, double proba) = 0<br> |
| virtual void | [**setProbability**](classsdm_1_1OccupancyStateInterface.md#function-setprobability-2-2) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_history, const std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; & belief, double proba) = 0<br> |
| virtual void | [**updateJointLabels**](classsdm_1_1OccupancyStateInterface.md#function-updatejointlabels) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; &, const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; &) = 0<br>_Update the labels of multiple individual histories._  |

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

## Public Functions inherited from sdm::Belief

See [sdm::Belief](classsdm_1_1Belief.md)

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

## Public Functions inherited from sdm::SerialInterface

See [sdm::SerialInterface](classsdm_1_1SerialInterface.md)

| Type | Name |
| ---: | :--- |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getCurrentAgentId**](classsdm_1_1SerialInterface.md#function-getcurrentagentid) () const = 0<br>_Get the current Agent Id of the object._  |


## Public Static Functions inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|  void | [**cleanTIME**](classsdm_1_1OccupancyState.md#function-cleantime) () <br> |








## Public Static Functions inherited from sdm::Belief

See [sdm::Belief](classsdm_1_1Belief.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**getState**](classsdm_1_1Belief.md#function-getstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) <br> |







## Public Static Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  void | [**setPrecision**](classsdm_1_1MappedVector.md#function-setprecision) (double) <br> |










































## Protected Attributes inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::shared\_ptr&lt; [**Space**](classsdm_1_1Space.md) &gt; &gt; &gt; | [**action\_space\_map**](classsdm_1_1OccupancyState.md#variable-action-space-map)  <br> |
|  std::vector&lt; std::set&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; &gt; | [**all\_list\_ihistories\_**](classsdm_1_1OccupancyState.md#variable-all-list-ihistories-)  <br>_tuple of private history spaces, one private history space per agent_  |
|  std::weak\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**compressed\_occupancy\_state**](classsdm_1_1OccupancyState.md#variable-compressed-occupancy-state)  <br> |
|  std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**fully\_uncompressed\_occupancy\_state**](classsdm_1_1OccupancyState.md#variable-fully-uncompressed-occupancy-state)  <br>_Keep in memory the uncompressed occupancy states._  |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::unordered\_map&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; &gt; &gt; | [**ihistories\_to\_jhistory\_**](classsdm_1_1OccupancyState.md#variable-ihistories-to-jhistory-)  <br> |
|  std::vector&lt; std::shared\_ptr&lt; std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::vector&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; &gt; &gt; &gt; | [**individual\_hierarchical\_history\_vector\_map\_vector**](classsdm_1_1OccupancyState.md#variable-individual-hierarchical-history-vector-map-vector)  <br> |
|  std::shared\_ptr&lt; std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::vector&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; &gt; &gt; | [**joint\_history\_map\_vector**](classsdm_1_1OccupancyState.md#variable-joint-history-map-vector)  <br> |
|  std::set&lt; std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; | [**list\_beliefs\_**](classsdm_1_1OccupancyState.md#variable-list-beliefs-)  <br>_space of all reachable states, those in the support of the occupancy state : Should not be used since there are to much possible wrt each joint history, belief states whould have been a better choice._  |
|  std::set&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**list\_joint\_histories\_**](classsdm_1_1OccupancyState.md#variable-list-joint-histories-)  <br>_space of joint histories_  |
|  std::unordered\_map&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;, std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; | [**map\_joint\_history\_to\_belief\_**](classsdm_1_1OccupancyState.md#variable-map-joint-history-to-belief-)  <br>_mapping from joint history to belief_  |
|  [**number**](namespacesdm.md#typedef-number) | [**num\_agents\_**](classsdm_1_1OccupancyState.md#variable-num-agents-)   = = 2<br>_the number of agents_  |
|  std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**one\_step\_left\_compressed\_occupancy\_state**](classsdm_1_1OccupancyState.md#variable-one-step-left-compressed-occupancy-state)  <br> |
|  [**Joint**](classsdm_1_1Joint.md)&lt; [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; &gt; | [**private\_ihistory\_map\_**](classsdm_1_1OccupancyState.md#variable-private-ihistory-map-)  <br>_Keep relations between all private ihistories and labels._  |
|  std::unordered\_map&lt; [**number**](namespacesdm.md#typedef-number), std::unordered\_map&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, double &gt; &gt; | [**probability\_ihistories**](classsdm_1_1OccupancyState.md#variable-probability-ihistories)  <br>_probability of a private history space for a precise agent_  |
|  [**Joint**](classsdm_1_1Joint.md)&lt; [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, std::shared\_ptr&lt; [**PrivateOccupancyState**](classsdm_1_1PrivateOccupancyState.md) &gt; &gt; &gt; | [**tuple\_of\_maps\_from\_histories\_to\_private\_occupancy\_states\_**](classsdm_1_1OccupancyState.md#variable-tuple-of-maps-from-histories-to-private-occupancy-states-)  <br>_This representation of occupancy states consists of private occupancy states for each agent._  |
|  [**Joint**](classsdm_1_1Joint.md)&lt; [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;, double &gt; &gt; | [**weight\_of\_private\_occupancy\_state\_**](classsdm_1_1OccupancyState.md#variable-weight-of-private-occupancy-state-)  <br> |








## Protected Attributes inherited from sdm::Belief

See [sdm::Belief](classsdm_1_1Belief.md)

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























## Protected Functions inherited from sdm::OccupancyState

See [sdm::OccupancyState](classsdm_1_1OccupancyState.md)

| Type | Name |
| ---: | :--- |
|  void | [**setProbabilityOverIndividualHistories**](classsdm_1_1OccupancyState.md#function-setprobabilityoverindividualhistories) () <br> |
|  void | [**setupBeliefsAndHistories**](classsdm_1_1OccupancyState.md#function-setupbeliefsandhistories) () <br> |
|  void | [**setupIndividualHistories**](classsdm_1_1OccupancyState.md#function-setupindividualhistories) () <br> |
|  void | [**setupPrivateOccupancyStates**](classsdm_1_1OccupancyState.md#function-setupprivateoccupancystates) () <br> |















## Protected Functions inherited from sdm::MappedVector

See [sdm::MappedVector](classsdm_1_1MappedVector.md)

| Type | Name |
| ---: | :--- |
|  const std::pair&lt; TIndex, T &gt; & | [**getMax**](classsdm_1_1MappedVector.md#function-getmax) () <br> |
|  const std::pair&lt; TIndex, T &gt; & | [**getMin**](classsdm_1_1MappedVector.md#function-getmin) () <br> |






















## Public Functions Documentation


### function SerialOccupancyState [1/4]


```cpp
sdm::SerialOccupancyState::SerialOccupancyState () 
```



### function SerialOccupancyState [2/4]


```cpp
sdm::SerialOccupancyState::SerialOccupancyState (
    number num_agents
) 
```



### function SerialOccupancyState [3/4]


```cpp
sdm::SerialOccupancyState::SerialOccupancyState (
    const SerialOccupancyState & copy
) 
```



### function SerialOccupancyState [4/4]


```cpp
sdm::SerialOccupancyState::SerialOccupancyState (
    const OccupancyState & copy
) 
```



### function getCurrentAgentId 


```cpp
virtual number sdm::SerialOccupancyState::getCurrentAgentId () const
```




**Returns:**

number 




        
Implements [*sdm::SerialInterface::getCurrentAgentId*](classsdm_1_1SerialInterface.md#function-getcurrentagentid)


### function getTypeState 


```cpp
virtual TypeState sdm::SerialOccupancyState::getTypeState () const
```


Implements [*sdm::OccupancyState::getTypeState*](classsdm_1_1OccupancyState.md#function-gettypestate)


### function str 


```cpp
virtual std::string sdm::SerialOccupancyState::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::OccupancyState::str*](classsdm_1_1OccupancyState.md#function-str)


------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/serial_occupancy_state.hpp`