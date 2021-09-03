
# Class sdm::iterator::SuperIterator

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TItem typename TItem, typename STDIterator typename STDIterator&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**iterator**](namespacesdm_1_1iterator.md) **>** [**SuperIterator**](classsdm_1_1iterator_1_1SuperIterator.md)



_A super iterator is an SDMS iterator that simply iterate over a standard STD iterator._ [More...](#detailed-description)

* `#include <super_iterator.hpp>`



Inherits the following classes: [sdm::Iterator](classsdm_1_1Iterator.md),  std::enable_shared_from_this< SuperIterator< TItem, STDIterator > >









## Public Types inherited from sdm::Iterator

See [sdm::Iterator](classsdm_1_1Iterator.md)

| Type | Name |
| ---: | :--- |
| typedef TItem | [**item\_type**](classsdm_1_1Iterator.md#typedef-item-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**SuperIterator**](classsdm_1_1iterator_1_1SuperIterator.md#function-superiterator) (const STDIterator & sub\_iterator) <br> |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**copy**](classsdm_1_1iterator_1_1SuperIterator.md#function-copy) () const<br>_Copy function._  |
|  bool | [**operator!=**](classsdm_1_1iterator_1_1SuperIterator.md#function-operator) (const std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt;&gt; & other) const<br> |
| virtual TItem & | [**operator\***](classsdm_1_1iterator_1_1SuperIterator.md#function-operator-2) () <br>_Get a reference to the item._  |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt; &gt; | [**operator+**](classsdm_1_1iterator_1_1SuperIterator.md#function-operator-3) ([**number**](namespacesdm.md#typedef-number) n) const<br>_Get the n-step incremented iterator without modifying the current iterator._  |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt; &gt; | [**operator++**](classsdm_1_1iterator_1_1SuperIterator.md#function-operator-4) () <br>_Increment the iterator._  |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt; &gt; | [**operator+=**](classsdm_1_1iterator_1_1SuperIterator.md#function-operator-5) ([**number**](namespacesdm.md#typedef-number) n) <br>_Increment the iterator of n steps._  |
| virtual TItem \* | [**operator-&gt;**](classsdm_1_1iterator_1_1SuperIterator.md#function-operator-6) () <br>_Get the address of the item._  |
|  bool | [**operator==**](classsdm_1_1iterator_1_1SuperIterator.md#function-operator-7) (const std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt;&gt; & other) const<br> |

## Public Functions inherited from sdm::Iterator

See [sdm::Iterator](classsdm_1_1Iterator.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt; &gt; | [**copy**](classsdm_1_1Iterator.md#function-copy) () const = 0<br>_Copy function._  |
| virtual bool | [**operator!=**](classsdm_1_1Iterator.md#function-operator) (const std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md) &gt; & other) const = 0<br>_Check if two iterators are differents._  |
| virtual TItem & | [**operator\***](classsdm_1_1Iterator.md#function-operator-2) () = 0<br>_Get a reference to the item._  |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt; &gt; | [**operator+**](classsdm_1_1Iterator.md#function-operator-3) ([**number**](namespacesdm.md#typedef-number) n) const = 0<br>_Get the n-step incremented iterator without modifying the current iterator._  |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md) &gt; | [**operator++**](classsdm_1_1Iterator.md#function-operator-4) () = 0<br>_Increment the iterator._  |
| virtual std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md)&lt; TItem &gt; &gt; | [**operator+=**](classsdm_1_1Iterator.md#function-operator-5) ([**number**](namespacesdm.md#typedef-number) n) = 0<br>_Increment the iterator of n steps._  |
| virtual TItem \* | [**operator-&gt;**](classsdm_1_1Iterator.md#function-operator-6) () = 0<br>_Get the address of the item._  |
| virtual bool | [**operator==**](classsdm_1_1Iterator.md#function-operator-7) (const std::shared\_ptr&lt; [**Iterator**](classsdm_1_1Iterator.md) &gt; & other) const = 0<br>_Check if two iterators are equals. This function is used to check the end._  |
| virtual  | [**~Iterator**](classsdm_1_1Iterator.md#function-iterator) () <br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  STDIterator | [**sub\_iterator\_**](classsdm_1_1iterator_1_1SuperIterator.md#variable-sub-iterator-)  <br>_the standard sub iterator._  |








# Detailed Description




**Template parameters:**


* `TItem` the type of value we iterate over. 
* `STDIterator` the type of standard iterator. 



    
## Public Functions Documentation


### function SuperIterator 


```cpp
sdm::iterator::SuperIterator::SuperIterator (
    const STDIterator & sub_iterator
) 
```



### function copy 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::SuperIterator::copy () const
```




**Returns:**

the copied iterator 




        
Implements [*sdm::Iterator::copy*](classsdm_1_1Iterator.md#function-copy)


### function operator!= 


```cpp
bool sdm::iterator::SuperIterator::operator!= (
    const std::shared_ptr< Iterator < TItem >> & other
) const
```



### function operator\* 


```cpp
virtual TItem & sdm::iterator::SuperIterator::operator* () 
```




**Returns:**

TItem& the item 




        
Implements [*sdm::Iterator::operator\**](classsdm_1_1Iterator.md#function-operator-2)


### function operator+ 


```cpp
virtual std::shared_ptr< Iterator < TItem > > sdm::iterator::SuperIterator::operator+ (
    number n
) const
```




**Parameters:**


* `n` the number of step 



**Returns:**

the n-step incremented copy iterator 




        
Implements [*sdm::Iterator::operator+*](classsdm_1_1Iterator.md#function-operator-3)


### function operator++ 


```cpp
virtual std::shared_ptr< Iterator < TItem > > sdm::iterator::SuperIterator::operator++ () 
```




**Returns:**

the incremented iterator 




        
Implements [*sdm::Iterator::operator++*](classsdm_1_1Iterator.md#function-operator-4)


### function operator+= 


```cpp
virtual std::shared_ptr< Iterator < TItem > > sdm::iterator::SuperIterator::operator+= (
    number n
) 
```




**Parameters:**


* `n` the number of step 



**Returns:**

the n-step incremented iterator 




        
Implements [*sdm::Iterator::operator+=*](classsdm_1_1Iterator.md#function-operator-5)


### function operator-&gt; 


```cpp
virtual TItem * sdm::iterator::SuperIterator::operator-> () 
```




**Returns:**

TItem\* the address of the item 




        
Implements [*sdm::Iterator::operator-&gt;*](classsdm_1_1Iterator.md#function-operator-6)


### function operator== 


```cpp
bool sdm::iterator::SuperIterator::operator== (
    const std::shared_ptr< Iterator < TItem >> & other
) const
```


## Protected Attributes Documentation


### variable sub\_iterator\_ 


```cpp
STDIterator sdm::iterator::SuperIterator< TItem, STDIterator >::sub_iterator_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/iterator/super_iterator.hpp`