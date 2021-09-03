
# Struct sdm::BaseItem

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TItem class TItem&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseItem**](structsdm_1_1BaseItem.md)



_A base class inheriting from the_ [_**Item**_](classsdm_1_1Item.md) _interface._[More...](#detailed-description)

* `#include <base_item.hpp>`



Inherits the following classes: TItem,  [sdm::Item](classsdm_1_1Item.md)
























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BaseItem**](structsdm_1_1BaseItem.md#function-baseitem-1-2) () <br> |
|   | [**BaseItem**](structsdm_1_1BaseItem.md#function-baseitem-2-2) (TItem item) <br> |
| virtual bool | [**isBaseItem**](structsdm_1_1BaseItem.md#function-isbaseitem) () <br> |
|  void | [**serialize**](structsdm_1_1BaseItem.md#function-serialize) (Archive & archive, const unsigned int) <br> |
| virtual std::string | [**str**](structsdm_1_1BaseItem.md#function-str) () const<br>_Get a string describing the current item._  |
| virtual  | [**~BaseItem**](structsdm_1_1BaseItem.md#function-baseitem) () <br> |

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





























# Detailed Description




**Template parameters:**


* `TItem` the type of data used for the item.

This class can be used to instantiate an item represented by any type.

Example:


````cpp
BaseItem<char> item('a'), item2('b'); // Instanciate an item stored as a character.   
BaseItem<float> float_item(0.0), float_item2(0.1); // Instanciate an item stored as a float. 
````

 

    
## Public Functions Documentation


### function BaseItem [1/2]


```cpp
sdm::BaseItem::BaseItem () 
```



### function BaseItem [2/2]


```cpp
sdm::BaseItem::BaseItem (
    TItem item
) 
```



### function isBaseItem 


```cpp
virtual bool sdm::BaseItem::isBaseItem () 
```


Implements [*sdm::Item::isBaseItem*](classsdm_1_1Item.md#function-isbaseitem)


### function serialize 


```cpp
template<class Archive class Archive>
inline void sdm::BaseItem::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function str 


```cpp
virtual std::string sdm::BaseItem::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::Item::str*](classsdm_1_1Item.md#function-str)


### function ~BaseItem 


```cpp
virtual sdm::BaseItem::~BaseItem () 
```

## Friends Documentation



### friend access 


```cpp
friend class sdm::BaseItem::access () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/base_item.hpp`