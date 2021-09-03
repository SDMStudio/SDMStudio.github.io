
# Class sdm::HistoryTree

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HistoryTree**](classsdm_1_1HistoryTree.md)



_History class that use a representation by tree._ [More...](#detailed-description)

* `#include <history_tree.hpp>`



Inherits the following classes: [sdm::HistoryInterface](classsdm_1_1HistoryInterface.md),  [sdm::Tree](classsdm_1_1Tree.md)


Inherited by the following classes: [sdm::JointHistoryTree](classsdm_1_1JointHistoryTree.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename [**Tree**](classsdm_1_1Tree.md)&lt; std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; &gt;::[**value\_type**](classsdm_1_1HistoryTree.md#typedef-value-type) | [**value\_type**](classsdm_1_1HistoryTree.md#typedef-value-type)  <br> |







## Public Types inherited from sdm::Tree

See [sdm::Tree](classsdm_1_1Tree.md)

| Type | Name |
| ---: | :--- |
| typedef T | [**value\_type**](classsdm_1_1Tree.md#typedef-value-type)  <br> |

































## Public Functions

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
|  std::shared\_ptr&lt; output &gt; | [**truncatedExpand**](classsdm_1_1HistoryTree.md#function-truncatedexpand) (const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; & observation, bool backup) <br>_Expands the tree using truncated expand method._  |




















# Detailed Description


Each node in the tree represent an action-observation pair. Let consider nodes above a given node as the list of actions and observations at previous timesteps. 

    
## Public Types Documentation


### typedef value\_type 


```cpp
using sdm::HistoryTree::value_type =  typename Tree<std::shared_ptr<Observation> >::value_type;
```


## Public Functions Documentation


### function HistoryTree [1/3]


```cpp
sdm::HistoryTree::HistoryTree () 
```



### function HistoryTree [2/3]


```cpp
sdm::HistoryTree::HistoryTree (
    number max_depth
) 
```




**Parameters:**


* `data` the value of the origin 



        

### function HistoryTree [3/3]


```cpp
sdm::HistoryTree::HistoryTree (
    std::shared_ptr< HistoryTree > parent,
    const std::shared_ptr< Observation > & item
) 
```




**Parameters:**


* `parent` the parent tree 
* `item` the item 
* `backup` wheter the node is marked or not

This constructor builds a tree with a given parent and item. 

        

### function expand [1/2]


```cpp
template<typename output typename output>
inline virtual std::shared_ptr< output > sdm::HistoryTree::expand (
    const std::shared_ptr< Observation > & observation,
    bool backup=true
) 
```




**Parameters:**


* `data` the data of the expanded node 



**Returns:**

the expanded history


If child leading from the item previously exists, the method return that child. Otherwise, it expands the tree by adding an item at the current leaf of the tree and creating if necessary a corresponding child. The constructed child is returned. 

        
Implements [*sdm::HistoryInterface::expand*](classsdm_1_1HistoryInterface.md#function-expand)


### function expand [2/2]


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::HistoryTree::expand (
    const std::shared_ptr< Observation > & observation,
    bool backup=true
) 
```




**Parameters:**


* `observation` the observation of the expanded node 



**Returns:**

the expanded history 




        
Implements [*sdm::HistoryInterface::expand*](classsdm_1_1HistoryInterface.md#function-expand)


### function getChild 


```cpp
std::shared_ptr< HistoryTree > sdm::HistoryTree::getChild (
    const std::shared_ptr< Observation > & child_item
) const
```



### function getChildren 


```cpp
std::vector< std::shared_ptr< HistoryTree > > sdm::HistoryTree::getChildren () const
```



### function getData 


```cpp
const std::shared_ptr< Observation > & sdm::HistoryTree::getData () const
```



### function getHorizon 


```cpp
virtual number sdm::HistoryTree::getHorizon () const
```




**Returns:**

number the history 




        
Implements [*sdm::HistoryInterface::getHorizon*](classsdm_1_1HistoryInterface.md#function-gethorizon)


### function getLastObservation 


```cpp
virtual std::shared_ptr< Observation > sdm::HistoryTree::getLastObservation () 
```




**Returns:**

the last observation 




        
Implements [*sdm::HistoryInterface::getLastObservation*](classsdm_1_1HistoryInterface.md#function-getlastobservation)


### function getOrigin 


```cpp
std::shared_ptr< HistoryTree > sdm::HistoryTree::getOrigin () 
```



### function getParent 


```cpp
std::shared_ptr< HistoryTree > sdm::HistoryTree::getParent () const
```



### function getPointer 


```cpp
virtual std::shared_ptr< Item > sdm::HistoryTree::getPointer () 
```




**Returns:**

std::shared\_ptr&lt;Item&gt; 




        
Implements [*sdm::Item::getPointer*](classsdm_1_1Item.md#function-getpointer)


### function getPreviousHistory 


```cpp
virtual std::shared_ptr< HistoryInterface > sdm::HistoryTree::getPreviousHistory () 
```




**Returns:**

the one step behind history. 




        
Implements [*sdm::HistoryInterface::getPreviousHistory*](classsdm_1_1HistoryInterface.md#function-getprevioushistory)


### function getptr 


```cpp
std::shared_ptr< HistoryTree > sdm::HistoryTree::getptr () 
```



### function serialize 


```cpp
template<class Archive class Archive>
void sdm::HistoryTree::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function short\_str 


```cpp
virtual std::string sdm::HistoryTree::short_str () const
```


Implements [*sdm::HistoryInterface::short\_str*](classsdm_1_1HistoryInterface.md#function-short-str)


### function str 


```cpp
virtual std::string sdm::HistoryTree::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::HistoryInterface::str*](classsdm_1_1HistoryInterface.md#function-str)

## Protected Functions Documentation


### function truncatedExpand 


```cpp
template<typename output typename output>
inline std::shared_ptr< output > sdm::HistoryTree::truncatedExpand (
    const std::shared_ptr< Observation > & observation,
    bool backup
) 
```




**Parameters:**


* `data` the data of the expanded node 
* `backup` wheter the node is marked or not



**Returns:**

the truncated expanded tree 




        ## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::HistoryTree::operator<< (
    std::ostream & os,
    HistoryTree & i_hist
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/history_tree.hpp`