
# Class sdm::Item

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Item**](classsdm_1_1Item.md)



_A public interface for actions, states and observations._ 

* `#include <item.hpp>`



Inherits the following classes: [std::inheritable\_enable\_shared\_from\_this](classstd_1_1inheritable__enable__shared__from__this.md)


Inherited by the following classes: [sdm::BaseItem](structsdm_1_1BaseItem.md),  [sdm::Observation](classsdm_1_1Observation.md)


















## Public Functions

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


### function getPointer 


```cpp
virtual std::shared_ptr< Item > sdm::Item::getPointer () 
```




**Returns:**

std::shared\_ptr&lt;Item&gt; 




        

### function isBaseItem 


```cpp
inline virtual bool sdm::Item::isBaseItem () 
```



### function str 


```cpp
virtual std::string sdm::Item::str () const = 0
```




**Returns:**

std::string the description of the item 




        

### function to 


```cpp
template<typename T typename T>
inline std::shared_ptr< T > sdm::Item::to () 
```



### function toAction 


```cpp
virtual std::shared_ptr< Action > sdm::Item::toAction () 
```



### function toItem 


```cpp
virtual std::shared_ptr< Item > sdm::Item::toItem () 
```



### function toObservation 


```cpp
virtual std::shared_ptr< Observation > sdm::Item::toObservation () 
```



### function toState 


```cpp
virtual std::shared_ptr< State > sdm::Item::toState () 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Item::operator<< (
    std::ostream & os,
    const Item & item
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/item.hpp`