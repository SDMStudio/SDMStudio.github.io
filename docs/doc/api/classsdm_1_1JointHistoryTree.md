
<NavBar active_item_id="2"/>

# Class sdm::JointHistoryTree

**template &lt;typename T typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)



[More...](#detailed-description)

* `#include <jhistory_tree.hpp>`



Inherits the following classes: [sdm::HistoryTree](classsdm_1_1HistoryTree.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt; &gt; | [**ihistory\_type**](classsdm_1_1JointHistoryTree.md#typedef-ihistory-type)  <br> |






## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt; &gt; &gt; | [**indiv\_hist**](classsdm_1_1JointHistoryTree.md#variable-indiv-hist)  <br> |






## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-1-4) () <br>_Default constructor. This constructor builds a default and empty tree._  |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-2-4) ([**number**](namespacesdm.md#typedef-number) n\_agents) <br>_Construct a new joint history tree object (the origin)_  |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-3-4) ([**number**](namespacesdm.md#typedef-number) n\_agents, [**number**](namespacesdm.md#typedef-number) max\_depth) <br> |
|   | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md#function-jointhistorytree-4-4) (std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)&lt; T &gt;&gt; parent, const [**Joint**](classsdm_1_1Joint.md)&lt; T &gt; & item) <br> |
|  std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)&lt; T &gt; &gt; | [**expand**](classsdm_1_1JointHistoryTree.md#function-expand) (const [**Joint**](classsdm_1_1Joint.md)&lt; T &gt; & data, bool backup=true) <br>_Expands the tree._  |
|  std::vector&lt; std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt; &gt; &gt; | [**getIndividualHistories**](classsdm_1_1JointHistoryTree.md#function-getindividualhistories) () const<br> |
|  std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt; &gt; | [**getIndividualHistory**](classsdm_1_1JointHistoryTree.md#function-getindividualhistory) ([**number**](namespacesdm.md#typedef-number) ag\_id) const<br> |

## Public Functions inherited from sdm::HistoryTree

See [sdm::HistoryTree](classsdm_1_1HistoryTree.md)

| Type | Name |
| ---: | :--- |
|   | [**HistoryTree**](classsdm_1_1HistoryTree.md#function-historytree-1-3) () <br>_Default constructor. This constructor builds a default and empty tree._  |
|   | [**HistoryTree**](classsdm_1_1HistoryTree.md#function-historytree-2-3) ([**number**](namespacesdm.md#typedef-number) max\_depth) <br>_Construct a new_ [_**Tree**_](classsdm_1_1Tree.md) _object (the origin)_ |
|   | [**HistoryTree**](classsdm_1_1HistoryTree.md#function-historytree-3-3) (std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt;&gt; parent, const T & item) <br> |
|  std::shared\_ptr&lt; output &gt; | [**expand**](classsdm_1_1HistoryTree.md#function-expand) (const T & data, bool backup=true) <br>_Expands the tree._  |
|  [**number**](namespacesdm.md#typedef-number) | [**getHorizon**](classsdm_1_1HistoryTree.md#function-gethorizon) () const<br> |

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
|  bool | [**isOrigin**](classsdm_1_1Tree.md#function-isorigin) () const<br> |
|  void | [**setMaxDepth**](classsdm_1_1Tree.md#function-setmaxdepth) ([**number**](namespacesdm.md#typedef-number)) const<br> |
| virtual  | [**~Tree**](classsdm_1_1Tree.md#function-tree) () <br>_Destructor of_ [_**Tree**_](classsdm_1_1Tree.md) _(that's bad)._ |












## Protected Attributes inherited from sdm::Tree

See [sdm::Tree](classsdm_1_1Tree.md)

| Type | Name |
| ---: | :--- |
|  std::map&lt; T, std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; &gt; | [**children\_**](classsdm_1_1Tree.md#variable-children-)  <br>_mapping of items to successor trees_  |
|  T | [**data\_**](classsdm_1_1Tree.md#variable-data-)  <br>_data of the current node_  |
|  [**number**](namespacesdm.md#typedef-number) | [**depth\_**](classsdm_1_1Tree.md#variable-depth-)   = = 0<br>_depth of the tree_  |
|  bool | [**is\_origin**](classsdm_1_1Tree.md#variable-is-origin)   = = false<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**max\_depth\_**](classsdm_1_1Tree.md#variable-max-depth-)   = = std::numeric\_limits&lt;[**number**](namespacesdm.md#typedef-number)&gt;::max()<br>_maximum length of the tree_  |
|  std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**origin\_**](classsdm_1_1Tree.md#variable-origin-)  <br>_the root of the tree_  |
|  std::weak\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**parent\_**](classsdm_1_1Tree.md#variable-parent-)  <br>_the parent node_  |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**addIndivHist**](classsdm_1_1JointHistoryTree.md#function-addindivhist) (std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt;&gt; ihist) <br> |

## Protected Functions inherited from sdm::HistoryTree

See [sdm::HistoryTree](classsdm_1_1HistoryTree.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; output &gt; | [**truncatedExpand**](classsdm_1_1HistoryTree.md#function-truncatedexpand) (const T & data, bool backup) <br>_Expands the tree using truncated expand method._  |





# Detailed Description




**Template parameters:**


* `T` 



    
## Public Types Documentation


### typedef ihistory\_type 


```cpp
using sdm::JointHistoryTree< T >::ihistory_type =  std::shared_ptr<HistoryTree<T> >;
```


## Public Attributes Documentation


### variable indiv\_hist 


```cpp
Joint<std::shared_ptr<HistoryTree<T> > > sdm::JointHistoryTree< T >::indiv_hist;
```


## Public Functions Documentation


### function JointHistoryTree [1/4]


```cpp
sdm::JointHistoryTree::JointHistoryTree () 
```



### function JointHistoryTree [2/4]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    number n_agents
) 
```




**Parameters:**


* `n_agents` the number of agent 



        

### function JointHistoryTree [3/4]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    number n_agents,
    number max_depth
) 
```



### function JointHistoryTree [4/4]


```cpp
sdm::JointHistoryTree::JointHistoryTree (
    std::shared_ptr< JointHistoryTree < T >> parent,
    const Joint < T > & item
) 
```



### function expand 


```cpp
std::shared_ptr< JointHistoryTree < T > > sdm::JointHistoryTree::expand (
    const Joint < T > & data,
    bool backup=true
) 
```




**Parameters:**


* `data` the data of the expanded node 



**Returns:**

the expanded tree


If child leading from the item previously exists, the method return that child. Otherwise, it expands the tree by adding an item at the current leaf of the tree and creating if necessary a corresponding child. The constructed child is returned. 

        

### function getIndividualHistories 


```cpp
std::vector< std::shared_ptr< HistoryTree < T > > > sdm::JointHistoryTree::getIndividualHistories () const
```



### function getIndividualHistory 


```cpp
std::shared_ptr< HistoryTree < T > > sdm::JointHistoryTree::getIndividualHistory (
    number ag_id
) const
```


## Protected Functions Documentation


### function addIndivHist 


```cpp
void sdm::JointHistoryTree::addIndivHist (
    std::shared_ptr< HistoryTree < T >> ihist
) 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::JointHistoryTree::operator<< (
    std::ostream & os,
    const JointHistoryTree & j_hist
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/core/state/jhistory_tree.hpp`