
# Class sdm::CompressibleOccupancyStateInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**CompressibleOccupancyStateInterface**](classsdm_1_1CompressibleOccupancyStateInterface.md)





* `#include <compressible_occupancy_state_interface.hpp>`



Inherits the following classes: [sdm::OccupancyStateInterface](classsdm_1_1OccupancyStateInterface.md)








































## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**compress**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-compress) () = 0<br>_Compression for occupancy states based on belief state representation. To be in this representation, the type 'TState' have to be a derivation of the interface BeliefState._  |
| virtual std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; | [**getCompressedJointHistory**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-getcompressedjointhistory) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; & joint\_hisotory) const = 0<br>_Get the Compressed_ [_**Joint**_](classsdm_1_1Joint.md) _History._ |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getFullyUncompressedOccupancy**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-getfullyuncompressedoccupancy) () const = 0<br>_Get the fully uncompressed occupancy state._  |
| virtual [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &gt; | [**getJointLabels**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-getjointlabels) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; & ihistories) const = 0<br>_Get the list of labels that corresponds to the list of ihistories._  |
| virtual std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; | [**getOneStepUncompressedOccupancy**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-getonestepuncompressedoccupancy) () const = 0<br>_Get the one step uncompressed occupancy state._  |
| virtual const double & | [**getProbabilityOverIndividualHistories**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-getprobabilityoverindividualhistories) ([**number**](namespacesdm.md#typedef-number) agent\_id, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory) const = 0<br>_Get the probability over individual histories and precise agent._  |
| virtual const double & | [**getProbabilityOverJointHistory**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-getprobabilityoverjointhistory) (const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) const = 0<br>_Get all the probability conditionning to a_ [_**Joint**_](classsdm_1_1Joint.md) _History._ |
| virtual void | [**setFullyUncompressedOccupancy**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-setfullyuncompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; &) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the fully uncompressed occupancy state._ |
| virtual void | [**setOneStepUncompressedOccupancy**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-setonestepuncompressedoccupancy) (const std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt; &) = 0<br>[_**Set**_](structsdm_1_1Set.md) _the one step uncompressed occupancy state._ |
| virtual void | [**updateJointLabels**](classsdm_1_1CompressibleOccupancyStateInterface.md#function-updatejointlabels) (const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; & ihistories, const [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt;&gt; & labels) = 0<br>_Update the labels of multiple individual histories._  |

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

























































## Public Functions Documentation


### function compress 


```cpp
virtual std::shared_ptr< OccupancyStateInterface > sdm::CompressibleOccupancyStateInterface::compress () = 0
```




**Returns:**

the compressed occupancy state 




        
Implements [*sdm::OccupancyStateInterface::compress*](classsdm_1_1OccupancyStateInterface.md#function-compress)


### function getCompressedJointHistory 


```cpp
virtual std::shared_ptr< JointHistoryInterface > sdm::CompressibleOccupancyStateInterface::getCompressedJointHistory (
    const std::shared_ptr< JointHistoryInterface > & joint_hisotory
) const = 0
```


Implements [*sdm::OccupancyStateInterface::getCompressedJointHistory*](classsdm_1_1OccupancyStateInterface.md#function-getcompressedjointhistory)


### function getFullyUncompressedOccupancy 


```cpp
virtual std::shared_ptr< OccupancyStateInterface > sdm::CompressibleOccupancyStateInterface::getFullyUncompressedOccupancy () const = 0
```



### function getJointLabels 


```cpp
virtual Joint < std::shared_ptr< HistoryInterface > > sdm::CompressibleOccupancyStateInterface::getJointLabels (
    const Joint < std::shared_ptr< HistoryInterface >> & ihistories
) const = 0
```


Implements [*sdm::OccupancyStateInterface::getJointLabels*](classsdm_1_1OccupancyStateInterface.md#function-getjointlabels)


### function getOneStepUncompressedOccupancy 


```cpp
virtual std::shared_ptr< OccupancyStateInterface > sdm::CompressibleOccupancyStateInterface::getOneStepUncompressedOccupancy () const = 0
```



### function getProbabilityOverIndividualHistories 


```cpp
virtual const double & sdm::CompressibleOccupancyStateInterface::getProbabilityOverIndividualHistories (
    number agent_id,
    const std::shared_ptr< HistoryInterface > & ihistory
) const = 0
```




**Parameters:**


* `number` Agent Id 
* `typename` jhistory\_type::element\_type::ihistory\_type : Individual History 



        
Implements [*sdm::OccupancyStateInterface::getProbabilityOverIndividualHistories*](classsdm_1_1OccupancyStateInterface.md#function-getprobabilityoverindividualhistories)


### function getProbabilityOverJointHistory 


```cpp
virtual const double & sdm::CompressibleOccupancyStateInterface::getProbabilityOverJointHistory (
    const std::shared_ptr< JointHistoryInterface > &
) const = 0
```




**Parameters:**


* `std::shared_ptr<JointHistoryInterface>` : [**Joint**](classsdm_1_1Joint.md) History 



        

### function setFullyUncompressedOccupancy 


```cpp
virtual void sdm::CompressibleOccupancyStateInterface::setFullyUncompressedOccupancy (
    const std::shared_ptr< OccupancyStateInterface > &
) = 0
```


Implements [*sdm::OccupancyStateInterface::setFullyUncompressedOccupancy*](classsdm_1_1OccupancyStateInterface.md#function-setfullyuncompressedoccupancy)


### function setOneStepUncompressedOccupancy 


```cpp
virtual void sdm::CompressibleOccupancyStateInterface::setOneStepUncompressedOccupancy (
    const std::shared_ptr< OccupancyStateInterface > &
) = 0
```


Implements [*sdm::OccupancyStateInterface::setOneStepUncompressedOccupancy*](classsdm_1_1OccupancyStateInterface.md#function-setonestepuncompressedoccupancy)


### function updateJointLabels 


```cpp
virtual void sdm::CompressibleOccupancyStateInterface::updateJointLabels (
    const Joint < std::shared_ptr< HistoryInterface >> & ihistories,
    const Joint < std::shared_ptr< HistoryInterface >> & labels
) = 0
```


Implements [*sdm::OccupancyStateInterface::updateJointLabels*](classsdm_1_1OccupancyStateInterface.md#function-updatejointlabels)


------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/interface/compressible_occupancy_state_interface.hpp`