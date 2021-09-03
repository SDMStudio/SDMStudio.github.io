
# Class sdm::iterator::FunctionIterator

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TFunction typename TFunction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**iterator**](namespacesdm_1_1iterator.md) **>** [**FunctionIterator**](classsdm_1_1iterator_1_1FunctionIterator.md)



_The function iterator is an SDMS iterator generating functions from iterable possible inputs and outputs._ [More...](#detailed-description)

* `#include <function_iterator.hpp>`



Inherits the following classes: [sdm::Iterator](classsdm_1_1Iterator.md),  std::enable_shared_from_this< FunctionIterator< TFunction > >








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**single\_iterator\_type**](classsdm_1_1iterator_1_1FunctionIterator.md#typedef-single-iterator-type)  <br> |

## Public Types inherited from sdm::Iterator

See [sdm::Iterator](classsdm_1_1Iterator.md)

| Type | Name |
| ---: | :--- |
| typedef TItem | [**item\_type**](classsdm_1_1Iterator.md#typedef-item-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FunctionIterator**](classsdm_1_1iterator_1_1FunctionIterator.md#function-functioniterator-1-2) () <br> |
|   | [**FunctionIterator**](classsdm_1_1iterator_1_1FunctionIterator.md#function-functioniterator-2-2) (const std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt;&gt; & possible\_inputs, const std::vector&lt; std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt;&gt; & output\_begin\_iterators, const std::vector&lt; std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt;&gt; & output\_end\_iterators) <br>_Construct a function iterator._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**copy**](classsdm_1_1iterator_1_1FunctionIterator.md#function-copy) () const<br>_Copy function._  |
|  bool | [**operator!=**](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator) (const std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; & other) const<br> |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; & | [**operator\***](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator-2) () <br>_Get a reference to the item._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**operator+**](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator-3) ([**number**](namespacesdm.md#typedef-number) n) const<br>_Get the n-step incremented iterator without modifying the current iterator._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**operator++**](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator-4) () <br>_Increment the iterator._  |
| virtual std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**operator+=**](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator-5) ([**number**](namespacesdm.md#typedef-number) n) <br>_Increment the iterator of n steps._  |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; \* | [**operator-&gt;**](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator-6) () <br>_Get the address of the item._  |
|  bool | [**operator==**](classsdm_1_1iterator_1_1FunctionIterator.md#function-operator-7) (const std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; & other) const<br> |

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
|  std::shared\_ptr&lt; [**ItemIterator**](namespacesdm.md#typedef-itemiterator) &gt; | [**output\_iterator\_**](classsdm_1_1iterator_1_1FunctionIterator.md#variable-output-iterator-)  <br>_The output iterator._  |
|  std::vector&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**possible\_inputs\_**](classsdm_1_1iterator_1_1FunctionIterator.md#variable-possible-inputs-)  <br>_The inputs list._  |
|  std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**temporary\_item**](classsdm_1_1iterator_1_1FunctionIterator.md#variable-temporary-item)  <br> |








# Detailed Description


Given an list of possible inputs and a list of iterators over possible outputs, the function iterator will generate all possible functions.



**Template parameters:**


* `TFunction` the function type. This type of function needs to accept a constructor of the form `MyFunction(const std::vector<std::shared_ptr< Item >> &inputs, const std::vector<std::shared_ptr< Item >> &outputs);` 



    
## Public Types Documentation


### typedef single\_iterator\_type 


```cpp
using sdm::iterator::FunctionIterator< TFunction >::single_iterator_type =  std::shared_ptr<ItemIterator>;
```


## Public Functions Documentation


### function FunctionIterator [1/2]


```cpp
sdm::iterator::FunctionIterator::FunctionIterator () 
```



### function FunctionIterator [2/2]


```cpp
sdm::iterator::FunctionIterator::FunctionIterator (
    const std::vector< std::shared_ptr< Item >> & possible_inputs,
    const std::vector< std::shared_ptr< ItemIterator >> & output_begin_iterators,
    const std::vector< std::shared_ptr< ItemIterator >> & output_end_iterators
) 
```




**Parameters:**


* `possible_inputs` the list of possible inputs. 
* `output_begin_iterators` the output begin iterators (one by input) 
* `output_end_iterators` the output end iterators (one by input) 



        

### function copy 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::FunctionIterator::copy () const
```




**Returns:**

the copied iterator 




        
Implements [*sdm::Iterator::copy*](classsdm_1_1Iterator.md#function-copy)


### function operator!= 


```cpp
bool sdm::iterator::FunctionIterator::operator!= (
    const std::shared_ptr< ItemIterator > & other
) const
```



### function operator\* 


```cpp
virtual std::shared_ptr< Item > & sdm::iterator::FunctionIterator::operator* () 
```




**Returns:**

TItem& the item 




        
Implements [*sdm::Iterator::operator\**](classsdm_1_1Iterator.md#function-operator-2)


### function operator+ 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::FunctionIterator::operator+ (
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
virtual std::shared_ptr< ItemIterator > sdm::iterator::FunctionIterator::operator++ () 
```




**Returns:**

the incremented iterator 




        
Implements [*sdm::Iterator::operator++*](classsdm_1_1Iterator.md#function-operator-4)


### function operator+= 


```cpp
virtual std::shared_ptr< ItemIterator > sdm::iterator::FunctionIterator::operator+= (
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
virtual std::shared_ptr< Item > * sdm::iterator::FunctionIterator::operator-> () 
```




**Returns:**

TItem\* the address of the item 




        
Implements [*sdm::Iterator::operator-&gt;*](classsdm_1_1Iterator.md#function-operator-6)


### function operator== 


```cpp
bool sdm::iterator::FunctionIterator::operator== (
    const std::shared_ptr< ItemIterator > & other
) const
```


## Protected Attributes Documentation


### variable output\_iterator\_ 


```cpp
std::shared_ptr<ItemIterator> sdm::iterator::FunctionIterator< TFunction >::output_iterator_;
```



### variable possible\_inputs\_ 


```cpp
std::vector<std::shared_ptr<Item> > sdm::iterator::FunctionIterator< TFunction >::possible_inputs_;
```



### variable temporary\_item 


```cpp
std::shared_ptr<Item> sdm::iterator::FunctionIterator< TFunction >::temporary_item;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/iterator/function_iterator.hpp`