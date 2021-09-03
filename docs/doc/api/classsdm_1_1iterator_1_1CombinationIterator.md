
# Class sdm::iterator::CombinationIterator

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**iterator**](namespacesdm_1_1iterator.md) **>** [**CombinationIterator**](classsdm_1_1iterator_1_1CombinationIterator.md)



_The combination iterator provides a way to go simultaneously over multiple iterators in order to generate all combinations of items._ [More...](#detailed-description)

* `#include <combination_iterator.hpp>`



Inherits the following classes: [sdm::Iterator](classsdm_1_1Iterator.md),  std::enable_shared_from_this< CombinationIterator >








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**single\_iterator\_type**](classsdm_1_1iterator_1_1CombinationIterator.md#typedef-single-iterator-type)  <br> |

## Public Types inherited from sdm::Iterator

See [sdm::Iterator](classsdm_1_1Iterator.md)

| Type | Name |
| ---: | :--- |
| typedef TItem | [**item\_type**](classsdm_1_1Iterator.md#typedef-item-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**CombinationIterator**](classsdm_1_1iterator_1_1CombinationIterator.md#function-combinationiterator-1-2) () <br> |
|   | [**CombinationIterator**](classsdm_1_1iterator_1_1CombinationIterator.md#function-combinationiterator-2-2) (const std::vector&lt; [**single\_iterator\_type**](classsdm_1_1iterator_1_1CombinationIterator.md#typedef-single-iterator-type) &gt; & begin\_iterators, const std::vector&lt; [**single\_iterator\_type**](classsdm_1_1iterator_1_1CombinationIterator.md#typedef-single-iterator-type) &gt; & end\_iterators) <br>_Construct a well defined combination iterator._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**copy**](classsdm_1_1iterator_1_1CombinationIterator.md#function-copy) () const<br>_Copy function._  |
|  bool | [**operator!=**](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator) (const std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; & other) const<br> |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; & | [**operator\***](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator-2) () <br>_Get a reference to the item._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**operator+**](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator-3) ([**number**](namespacesdm.md#typedef-number) n) const<br>_Get the n-step incremented iterator without modifying the current iterator._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**operator++**](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator-4) () <br>_Increment the iterator._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**operator+=**](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator-5) ([**number**](namespacesdm.md#typedef-number) n) <br>_Increment the iterator of n steps._  |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; \* | [**operator-&gt;**](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator-6) () <br>_Get the address of the item._  |
|  bool | [**operator==**](classsdm_1_1iterator_1_1CombinationIterator.md#function-operator-7) (const std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; & other) const<br> |

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
|  std::vector&lt; [**single\_iterator\_type**](classsdm_1_1iterator_1_1CombinationIterator.md#typedef-single-iterator-type) &gt; | [**begin\_iterators\_**](classsdm_1_1iterator_1_1CombinationIterator.md#variable-begin-iterators-)  <br> |
|  std::vector&lt; [**single\_iterator\_type**](classsdm_1_1iterator_1_1CombinationIterator.md#typedef-single-iterator-type) &gt; | [**current\_iterators\_**](classsdm_1_1iterator_1_1CombinationIterator.md#variable-current-iterators-)  <br> |
|  std::vector&lt; [**single\_iterator\_type**](classsdm_1_1iterator_1_1CombinationIterator.md#typedef-single-iterator-type) &gt; | [**end\_iterators\_**](classsdm_1_1iterator_1_1CombinationIterator.md#variable-end-iterators-)  <br> |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**temporary\_item**](classsdm_1_1iterator_1_1CombinationIterator.md#variable-temporary-item)  <br> |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**debug**](classsdm_1_1iterator_1_1CombinationIterator.md#function-debug) () <br> |




# Detailed Description


The combination iterator is a classic SDMS iterator that will efficiently generate all combination of items included in subiterators. Acceptable subiterators are all SDMS iterators. Thus, it is possible to instanciate a combination iterator over combination iterators. 

    
## Public Types Documentation


### typedef single\_iterator\_type 


```cpp
using sdm::iterator::CombinationIterator::single_iterator_type =  std::shared_ptr<ItemIterator>;
```


## Public Functions Documentation


### function CombinationIterator [1/2]


```cpp
sdm::iterator::CombinationIterator::CombinationIterator () 
```



### function CombinationIterator [2/2]


```cpp
sdm::iterator::CombinationIterator::CombinationIterator (
    const std::vector< single_iterator_type > & begin_iterators,
    const std::vector< single_iterator_type > & end_iterators
) 
```




**Parameters:**


* `begin_iterators` A list of begin iterators. 
* `end_iterators` A list of end iterators. 



        

### function copy 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::CombinationIterator::copy () const
```




**Returns:**

the copied iterator 




        
Implements [*sdm::Iterator::copy*](classsdm_1_1Iterator.md#function-copy)


### function operator!= 


```cpp
bool sdm::iterator::CombinationIterator::operator!= (
    const std::shared_ptr< ItemIterator > & other
) const
```



### function operator\* 


```cpp
virtual std::shared_ptr< Item > & sdm::iterator::CombinationIterator::operator* () 
```




**Returns:**

TItem& the item 




        
Implements [*sdm::Iterator::operator\**](classsdm_1_1Iterator.md#function-operator-2)


### function operator+ 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::CombinationIterator::operator+ (
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
virtual std::shared_ptr< ItemIterator > sdm::iterator::CombinationIterator::operator++ () 
```




**Returns:**

the incremented iterator 




        
Implements [*sdm::Iterator::operator++*](classsdm_1_1Iterator.md#function-operator-4)


### function operator+= 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::CombinationIterator::operator+= (
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
virtual std::shared_ptr< Item > * sdm::iterator::CombinationIterator::operator-> () 
```




**Returns:**

TItem\* the address of the item 




        
Implements [*sdm::Iterator::operator-&gt;*](classsdm_1_1Iterator.md#function-operator-6)


### function operator== 


```cpp
bool sdm::iterator::CombinationIterator::operator== (
    const std::shared_ptr< ItemIterator > & other
) const
```


## Protected Attributes Documentation


### variable begin\_iterators\_ 


```cpp
std::vector<single_iterator_type> sdm::iterator::CombinationIterator::begin_iterators_;
```



### variable current\_iterators\_ 


```cpp
std::vector<single_iterator_type> sdm::iterator::CombinationIterator::current_iterators_;
```



### variable end\_iterators\_ 


```cpp
std::vector<single_iterator_type> sdm::iterator::CombinationIterator::end_iterators_;
```



### variable temporary\_item 


```cpp
std::shared_ptr<Item> sdm::iterator::CombinationIterator::temporary_item;
```


## Protected Functions Documentation


### function debug 


```cpp
void sdm::iterator::CombinationIterator::debug () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/iterator/combination_iterator.hpp`