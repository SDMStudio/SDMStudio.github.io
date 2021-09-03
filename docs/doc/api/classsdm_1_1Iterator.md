
# Class sdm::Iterator

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TItem typename TItem&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Iterator**](classsdm_1_1Iterator.md)



_Common interface to all SDMS Iterators._ [More...](#detailed-description)

* `#include <iterator.hpp>`





Inherited by the following classes: [sdm::iterator::CombinationIterator](classsdm_1_1iterator_1_1CombinationIterator.md),  [sdm::iterator::FunctionIterator](classsdm_1_1iterator_1_1FunctionIterator.md),  [sdm::iterator::SuperIterator](classsdm_1_1iterator_1_1SuperIterator.md)






## Public Types

| Type | Name |
| ---: | :--- |
| typedef TItem | [**item\_type**](classsdm_1_1Iterator.md#typedef-item-type)  <br> |




## Public Functions

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








# Detailed Description


Iterators in SDMS are different to std iterators. The usage is similar but SDMS iterators can be seen as super iterators. Indeed, they usually are kind of iterator over iterator. The advantage of this hierarchy in SDMS iterators is that we can use super iterators over other super iterators and without care about the type of sub-iterators.



**Template parameters:**


* `TItem` the type of value we iterate over. 



    
## Public Types Documentation


### typedef item\_type 


```cpp
using sdm::Iterator< TItem >::item_type =  TItem;
```


## Public Functions Documentation


### function copy 


```cpp
virtual std::shared_ptr< Iterator < TItem > > sdm::Iterator::copy () const = 0
```




**Returns:**

the copied iterator 




        

### function operator!= 


```cpp
virtual bool sdm::Iterator::operator!= (
    const std::shared_ptr< Iterator > & other
) const = 0
```



### function operator\* 


```cpp
virtual TItem & sdm::Iterator::operator* () = 0
```




**Returns:**

TItem& the item 




        

### function operator+ 


```cpp
virtual std::shared_ptr< Iterator < TItem > > sdm::Iterator::operator+ (
    number n
) const = 0
```




**Parameters:**


* `n` the number of step 



**Returns:**

the n-step incremented copy iterator 




        

### function operator++ 


```cpp
virtual std::shared_ptr< Iterator > sdm::Iterator::operator++ () = 0
```




**Returns:**

the incremented iterator 




        

### function operator+= 


```cpp
virtual std::shared_ptr< Iterator < TItem > > sdm::Iterator::operator+= (
    number n
) = 0
```




**Parameters:**


* `n` the number of step 



**Returns:**

the n-step incremented iterator 




        

### function operator-&gt; 


```cpp
virtual TItem * sdm::Iterator::operator-> () = 0
```




**Returns:**

TItem\* the address of the item 




        

### function operator== 


```cpp
virtual bool sdm::Iterator::operator== (
    const std::shared_ptr< Iterator > & other
) const = 0
```



### function ~Iterator 


```cpp
inline virtual sdm::Iterator::~Iterator () 
```

## Friends Documentation



### friend operator!= 


```cpp
inline friend bool sdm::Iterator::operator!= (
    const std::shared_ptr< Iterator > & iterator1,
    const std::shared_ptr< Iterator > & iterator2
) 
```



### friend operator\* 


```cpp
inline friend TItem & sdm::Iterator::operator* (
    const std::shared_ptr< Iterator > & iterator
) 
```



### friend operator++ 


```cpp
inline friend std::shared_ptr< Iterator > sdm::Iterator::operator++ (
    const std::shared_ptr< Iterator > & iterator
) 
```



### friend operator== 


```cpp
inline friend bool sdm::Iterator::operator== (
    const std::shared_ptr< Iterator > & iterator1,
    const std::shared_ptr< Iterator > & iterator2
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/iterator.hpp`