
# Class sdm::StateGraph

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**StateGraph**](classsdm_1_1StateGraph.md)



_A graph that keep all beliefs._ 

* `#include <state_graph.hpp>`



Inherits the following classes: [sdm::Graph](classsdm_1_1Graph.md),  [sdm::State](classsdm_1_1State.md),  [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, double &gt;(const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; &, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; Action &gt; &, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &, [**number**](namespacesdm.md#typedef-number)) | [**TransitionFunction**](classsdm_1_1StateGraph.md#typedef-transitionfunction)  <br> |



















## Public Attributes inherited from sdm::Graph

See [sdm::Graph](classsdm_1_1Graph.md)

| Type | Name |
| ---: | :--- |
|  std::unordered\_map&lt; TNode, std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; &gt; | [**node\_space\_**](classsdm_1_1Graph.md#variable-node-space-)  <br>[_**Space**_](classsdm_1_1Space.md) _of nodes._ |

















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**StateGraph**](classsdm_1_1StateGraph.md#function-stategraph-1-4) () <br> |
|   | [**StateGraph**](classsdm_1_1StateGraph.md#function-stategraph-2-4) (const std::vector&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;&gt; & list\_states, const std::vector&lt; double &gt; & list\_proba) <br> |
|   | [**StateGraph**](classsdm_1_1StateGraph.md#function-stategraph-3-4) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & data) <br> |
|   | [**StateGraph**](classsdm_1_1StateGraph.md#function-stategraph-4-4) (const std::shared\_ptr&lt; [**StateGraph**](classsdm_1_1StateGraph.md) &gt; & predecessor, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief) <br>_Construct a new belief._  |
|  std::shared\_ptr&lt; [**StateGraph**](classsdm_1_1StateGraph.md) &gt; | [**getNode**](classsdm_1_1StateGraph.md#function-getnode) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & belief) <br>_Get the node associated to a given belief._  |
|  double | [**getProbability**](classsdm_1_1StateGraph.md#function-getprobability) (const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation) const<br>_Get the probability of associated belief._  |
|  std::shared\_ptr&lt; [**StateGraph**](classsdm_1_1StateGraph.md) &gt; | [**getptr**](classsdm_1_1StateGraph.md#function-getptr) () <br>_Return a the pointer on this object._  |
|  void | [**initialize**](classsdm_1_1StateGraph.md#function-initialize) () <br> |
|  std::shared\_ptr&lt; [**StateGraph**](classsdm_1_1StateGraph.md) &gt; | [**next**](classsdm_1_1StateGraph.md#function-next) ([**TransitionFunction**](classsdm_1_1StateGraph.md#typedef-transitionfunction) transition\_function, const std::shared\_ptr&lt; [**MDPInterface**](classsdm_1_1MDPInterface.md) &gt; & pomdp, const std::shared\_ptr&lt; Action &gt; & action, const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, [**number**](namespacesdm.md#typedef-number) t, bool backup=true) <br>_Expands the graph._  |
|  void | [**serialize**](classsdm_1_1StateGraph.md#function-serialize) (Archive & archive, const unsigned int) <br> |
| virtual std::string | [**str**](classsdm_1_1StateGraph.md#function-str) () const<br>_Return a._  |

## Public Functions inherited from sdm::Graph

See [sdm::Graph](classsdm_1_1Graph.md)

| Type | Name |
| ---: | :--- |
|   | [**Graph**](classsdm_1_1Graph.md#function-graph) () <br>_Default constructor object._  |
|  void | [**addNode**](classsdm_1_1Graph.md#function-addnode) (const TNode & node\_value) <br>_Add a node in the graph._  |
|  void | [**addSuccessor**](classsdm_1_1Graph.md#function-addsuccessor) (const TNode & node\_value, const TEdge & edge\_value, const TNode & succ\_node\_value) <br> |
|  bool | [**contains**](classsdm_1_1Graph.md#function-contains) (const TNode & node\_value) const<br> |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; | [**getNode**](classsdm_1_1Graph.md#function-getnode) (const TNode & belief) const<br>_Get the node associated to a given node's value ._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumNodes**](classsdm_1_1Graph.md#function-getnumnodes) () const<br>_Get the number of node._  |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; | [**getPredecessor**](classsdm_1_1Graph.md#function-getpredecessor) (const TNode & node, const TEdge & edge) const<br> |
|  std::shared\_ptr&lt; [**GraphNode**](classsdm_1_1GraphNode.md)&lt; TNode, TEdge &gt; &gt; | [**getSuccessor**](classsdm_1_1Graph.md#function-getsuccessor) (const TNode & node, const TEdge & edge) const<br> |
|  std::shared\_ptr&lt; [**Graph**](classsdm_1_1Graph.md) &gt; | [**getptr**](classsdm_1_1Graph.md#function-getptr) () <br> |
|  std::string | [**node\_str**](classsdm_1_1Graph.md#function-node-str) () const<br> |
|  void | [**serialize**](classsdm_1_1Graph.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  std::string | [**str**](classsdm_1_1Graph.md#function-str) () const<br> |
| virtual  | [**~Graph**](classsdm_1_1Graph.md#function-graph) () <br>_Destructor of_ [_**Graph**_](classsdm_1_1Graph.md) _(that's bad)._ |

## Public Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|   | [**BoostSerializable**](classsdm_1_1BoostSerializable.md#function-boostserializable) () <br> |
|  void | [**load**](classsdm_1_1BoostSerializable.md#function-load) (std::string filename) <br>_Load a value function from a file. The extension of the file will indicate the type of formatage for reading (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
|  void | [**save**](classsdm_1_1BoostSerializable.md#function-save) (std::string filename) <br>_Save a value function into a file. The extension of the file will indicate the type of formatage for recording (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |

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
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::shared\_ptr&lt; Action &gt;, std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt;, double &gt; | [**belief\_probability**](classsdm_1_1StateGraph.md#variable-belief-probability)  <br>_A pointer on the bag containing all nodes._  |
|  std::shared\_ptr&lt; std::unordered\_map&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; [**StateGraph**](classsdm_1_1StateGraph.md) &gt; &gt; &gt; | [**belief\_space**](classsdm_1_1StateGraph.md#variable-belief-space)  <br>_A pointer on the bag which associated a belief to a precise pointer._  |


















## Protected Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**exist**](classsdm_1_1StateGraph.md#function-exist) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &) <br> |


## Protected Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|  void | [**serialize**](classsdm_1_1BoostSerializable.md#function-serialize) (Archive & archive, const unsigned int version) <br> |






## Protected Functions inherited from sdm::BoostSerializable

See [sdm::BoostSerializable](classsdm_1_1BoostSerializable.md)

| Type | Name |
| ---: | :--- |
|  void | [**serialize**](classsdm_1_1BoostSerializable.md#function-serialize) (Archive & archive, const unsigned int version) <br> |










## Public Types Documentation


### typedef TransitionFunction 


```cpp
using sdm::StateGraph::TransitionFunction =  Pair<std::shared_ptr<State>, double>(const std::shared_ptr<MDPInterface> &, const std::shared_ptr<State> &, const std::shared_ptr<Action> &, const std::shared_ptr<Observation> &, number);
```


## Public Functions Documentation


### function StateGraph [1/4]


```cpp
sdm::StateGraph::StateGraph () 
```



### function StateGraph [2/4]


```cpp
sdm::StateGraph::StateGraph (
    const std::vector< std::shared_ptr< State >> & list_states,
    const std::vector< double > & list_proba
) 
```



### function StateGraph [3/4]


```cpp
sdm::StateGraph::StateGraph (
    const std::shared_ptr< State > & data
) 
```



### function StateGraph [4/4]


```cpp
sdm::StateGraph::StateGraph (
    const std::shared_ptr< StateGraph > & predecessor,
    const std::shared_ptr< State > & belief
) 
```




**Parameters:**


* `predecessor` 
* `belief` 



        

### function getNode 


```cpp
std::shared_ptr< StateGraph > sdm::StateGraph::getNode (
    const std::shared_ptr< State > & belief
) 
```




**Parameters:**


* `belief` a specific belief 



**Returns:**

the address of the node 




        

### function getProbability 


```cpp
double sdm::StateGraph::getProbability (
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation
) const
```




**Parameters:**


* `action` 
* `observation` 
* `belief` 



**Returns:**

the corresponding probability 




        

### function getptr 


```cpp
std::shared_ptr< StateGraph > sdm::StateGraph::getptr () 
```



### function initialize 


```cpp
void sdm::StateGraph::initialize () 
```



### function next 


```cpp
std::shared_ptr< StateGraph > sdm::StateGraph::next (
    TransitionFunction transition_function,
    const std::shared_ptr< MDPInterface > & pomdp,
    const std::shared_ptr< Action > & action,
    const std::shared_ptr< Observation > & observation,
    number t,
    bool backup=true
) 
```




**Parameters:**


* `action` the action 
* `observation` the observation 
* `backup` if true, we store the expanded belief in the graph. 



**Returns:**

the next belief 




        

### function serialize 


```cpp
template<class Archive class Archive>
void sdm::StateGraph::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function str 


```cpp
virtual std::string sdm::StateGraph::str () const
```


Implements [*sdm::State::str*](classsdm_1_1State.md#function-str)

## Protected Attributes Documentation


### variable belief\_probability 


```cpp
RecursiveMap<std::shared_ptr<Action>, std::shared_ptr<Observation>, double> sdm::StateGraph::belief_probability;
```



### variable belief\_space 


```cpp
std::shared_ptr<std::unordered_map<std::shared_ptr<State>, std::shared_ptr<StateGraph> > > sdm::StateGraph::belief_space;
```


A pointer on the bag containing all nodes. 

        
## Protected Functions Documentation


### function exist 


```cpp
virtual std::shared_ptr< State > sdm::StateGraph::exist (
    const std::shared_ptr< State > &
) 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::StateGraph::operator<< (
    std::ostream & os,
    StateGraph & belief_state_graph
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/state_graph.hpp`