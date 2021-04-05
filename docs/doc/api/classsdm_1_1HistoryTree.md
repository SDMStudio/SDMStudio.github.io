
<NavBar active_item_id="2"/>

# Class sdm::HistoryTree

**template &lt;typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**HistoryTree**](classsdm_1_1HistoryTree.md)



[More...](#detailed-description)

* `#include <history_tree.hpp>`



Inherits the following classes: [sdm::Tree](classsdm_1_1Tree.md)
















## Public Functions

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
|  std::shared\_ptr&lt; output &gt; | [**truncatedExpand**](classsdm_1_1HistoryTree.md#function-truncatedexpand) (const T & data, bool backup) <br>_Expands the tree using truncated expand method._  |




# Detailed Description




**Template parameters:**


* `T` 



    
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
    std::shared_ptr< HistoryTree < T >> parent,
    const T & item
) 
```



### function expand 


```cpp
template<typename output typename output>
std::shared_ptr< output > sdm::HistoryTree::expand (
    const T & data,
    bool backup=true
) 
```




**Parameters:**


* `data` the data of the expanded node 



**Returns:**

the expanded tree


If child leading from the item previously exists, the method return that child. Otherwise, it expands the tree by adding an item at the current leaf of the tree and creating if necessary a corresponding child. The constructed child is returned. 

        

### function getHorizon 


```cpp
number sdm::HistoryTree::getHorizon () const
```


## Protected Functions Documentation


### function truncatedExpand 


```cpp
template<typename output typename output>
std::shared_ptr< output > sdm::HistoryTree::truncatedExpand (
    const T & data,
    bool backup
) 
```




**Parameters:**


* `data` the data of the expanded node 
* `backup` wheter the node is marked or not 



**Returns:**

the truncated expanded tree 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/state/history_tree.hpp`