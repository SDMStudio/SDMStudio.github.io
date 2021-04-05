
<NavBar active_item_id="2"/>

# Class sdm::Tree

**template &lt;typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Tree**](classsdm_1_1Tree.md)



_Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._[More...](#detailed-description)

* `#include <tree.hpp>`



Inherits the following classes: std::enable_shared_from_this< Tree< T > >


Inherited by the following classes: [sdm::HistoryTree](classsdm_1_1HistoryTree.md)










## Public Functions

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




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::map&lt; T, std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; &gt; | [**children\_**](classsdm_1_1Tree.md#variable-children-)  <br>_mapping of items to successor trees_  |
|  T | [**data\_**](classsdm_1_1Tree.md#variable-data-)  <br>_data of the current node_  |
|  [**number**](namespacesdm.md#typedef-number) | [**depth\_**](classsdm_1_1Tree.md#variable-depth-)   = = 0<br>_depth of the tree_  |
|  bool | [**is\_origin**](classsdm_1_1Tree.md#variable-is-origin)   = = false<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**max\_depth\_**](classsdm_1_1Tree.md#variable-max-depth-)   = = std::numeric\_limits&lt;[**number**](namespacesdm.md#typedef-number)&gt;::max()<br>_maximum length of the tree_  |
|  std::shared\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**origin\_**](classsdm_1_1Tree.md#variable-origin-)  <br>_the root of the tree_  |
|  std::weak\_ptr&lt; [**Tree**](classsdm_1_1Tree.md)&lt; T &gt; &gt; | [**parent\_**](classsdm_1_1Tree.md#variable-parent-)  <br>_the parent node_  |




# Detailed Description




**Template parameters:**


* `T` the type of the data contains in each node

Usage Tree&lt;int&gt; tree(); tree.addChildren({3, 4, 5}); tree.getChild(3).addChildren({9, 8, 7, 6}); tree.getChild(5).addChildren({1, 3}); 

    
## Public Functions Documentation


### function Tree [1/3]


```cpp
sdm::Tree::Tree () 
```



### function Tree [2/3]


```cpp
sdm::Tree::Tree (
    number max_depth
) 
```




**Parameters:**


* `data` the value of the origin 



        

### function Tree [3/3]


```cpp
sdm::Tree::Tree (
    std::shared_ptr< Tree < T >> parent,
    const T & data
) 
```




**Parameters:**


* `parent` the parent 
* `data` the value of the node 
* `backup` if true, save the new tree as a child for its parent 



        

### function addChild 


```cpp
void sdm::Tree::addChild (
    const T & child_item
) 
```



### function addChildren 


```cpp
void sdm::Tree::addChildren (
    const std::vector< T > & child_items
) 
```



### function getChild 


```cpp
std::shared_ptr< Tree < T > > sdm::Tree::getChild (
    const T & child_item
) const
```



### function getChildren 


```cpp
std::vector< std::shared_ptr< Tree < T > > > sdm::Tree::getChildren () const
```



### function getData 


```cpp
const T & sdm::Tree::getData () const
```



### function getDepth 


```cpp
number sdm::Tree::getDepth () const
```



### function getMaxDepth 


```cpp
number sdm::Tree::getMaxDepth () const
```



### function getNumChildren 


```cpp
number sdm::Tree::getNumChildren () const
```



### function getOrigin 


```cpp
std::shared_ptr< Tree < T > > sdm::Tree::getOrigin () 
```



### function getParent 


```cpp
std::shared_ptr< Tree < T > > sdm::Tree::getParent () const
```



### function isOrigin 


```cpp
bool sdm::Tree::isOrigin () const
```



### function setMaxDepth 


```cpp
void sdm::Tree::setMaxDepth (
    number
) const
```



### function ~Tree 


```cpp
virtual sdm::Tree::~Tree () 
```


This destructor recursively all, children and the item from the tree, bottom up. 

        
## Protected Attributes Documentation


### variable children\_ 


```cpp
std::map<T, std::shared_ptr<Tree<T> > > sdm::Tree< T >::children_;
```



### variable data\_ 


```cpp
T sdm::Tree< T >::data_;
```



### variable depth\_ 


```cpp
number sdm::Tree< T >::depth_;
```



### variable is\_origin 


```cpp
bool sdm::Tree< T >::is_origin;
```



### variable max\_depth\_ 


```cpp
number sdm::Tree< T >::max_depth_;
```



### variable origin\_ 


```cpp
std::shared_ptr<Tree<T> > sdm::Tree< T >::origin_;
```



### variable parent\_ 


```cpp
std::weak_ptr<Tree<T> > sdm::Tree< T >::parent_;
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Tree::operator<< (
    std::ostream & os,
    const Tree < T > & tree
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/struct/tree.hpp`