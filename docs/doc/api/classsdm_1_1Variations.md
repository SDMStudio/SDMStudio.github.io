
# Class sdm::Variations

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TFunction typename TFunction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Variations**](classsdm_1_1Variations.md)



[_**Iterator**_](classsdm_1_1Iterator.md) _of_[_**Variations**_](classsdm_1_1Variations.md) _._[More...](#detailed-description)

* `#include <variations.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Variations**](classsdm_1_1Variations.md#function-variations-1-3) () <br>_constructor_  |
|   | [**Variations**](classsdm_1_1Variations.md#function-variations-2-3) (const std::vector&lt; std::vector&lt; [**TItem**](classsdm_1_1Variations.md#typedef-titem) &gt;&gt; & possible\_values) <br> |
|   | [**Variations**](classsdm_1_1Variations.md#function-variations-3-3) (const std::vector&lt; [**TKey**](classsdm_1_1Variations.md#typedef-tkey) &gt; & possible\_keys, const std::vector&lt; std::vector&lt; [**TItem**](classsdm_1_1Variations.md#typedef-titem) &gt;&gt; & possible\_values) <br>_This constructor builds a default with the number of actions per agent. Notice that @key implements_ _size\_t_ _size();._ |
|  std::shared\_ptr&lt; TFunction &gt; | [**begin**](classsdm_1_1Variations.md#function-begin) () <br>_Pointer on the initial variation._  |
|  std::shared\_ptr&lt; TFunction &gt; | [**end**](classsdm_1_1Variations.md#function-end) () <br>_Pointer on the final variation._  |
|  std::shared\_ptr&lt; TFunction &gt; | [**make\_output**](classsdm_1_1Variations.md#function-make-output) () <br>_destructor_  |
|  std::shared\_ptr&lt; TFunction &gt; | [**next**](classsdm_1_1Variations.md#function-next) () <br>_Returns the next variation._  |
|  void | [**setVariation**](classsdm_1_1Variations.md#function-setvariation) (const std::vector&lt; [**TKey**](classsdm_1_1Variations.md#typedef-tkey) &gt; & possible\_keys, const std::vector&lt; std::vector&lt; [**TItem**](classsdm_1_1Variations.md#typedef-titem) &gt;&gt; & possible\_values) <br>_Sets attributes of the variation._  |


## Protected Types

| Type | Name |
| ---: | :--- |
| typedef typename TFunction::output\_type | [**TItem**](classsdm_1_1Variations.md#typedef-titem)  <br> |
| typedef typename TFunction::input\_type | [**TKey**](classsdm_1_1Variations.md#typedef-tkey)  <br> |
| typedef typename std::vector&lt; [**TItem**](classsdm_1_1Variations.md#typedef-titem) &gt;::iterator | [**iterator\_t**](classsdm_1_1Variations.md#typedef-iterator-t)  <br> |
| typedef std::vector&lt; [**iterator\_t**](classsdm_1_1Variations.md#typedef-iterator-t) &gt; | [**super\_iterator**](classsdm_1_1Variations.md#typedef-super-iterator)  <br> |


## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**super\_iterator**](classsdm_1_1Variations.md#typedef-super-iterator) | [**current**](classsdm_1_1Variations.md#variable-current)  <br> |
|  int | [**dimension**](classsdm_1_1Variations.md#variable-dimension)  <br> |
|  std::vector&lt; [**TKey**](classsdm_1_1Variations.md#typedef-tkey) &gt; | [**p\_keys\_**](classsdm_1_1Variations.md#variable-p-keys-)  <br> |
|  std::vector&lt; std::vector&lt; [**TItem**](classsdm_1_1Variations.md#typedef-titem) &gt; &gt; | [**p\_values\_**](classsdm_1_1Variations.md#variable-p-values-)  <br> |
|  std::shared\_ptr&lt; TFunction &gt; | [**vin**](classsdm_1_1Variations.md#variable-vin)  <br> |
|  std::shared\_ptr&lt; TFunction &gt; | [**vout**](classsdm_1_1Variations.md#variable-vout)  <br> |




# Detailed Description




**Template parameters:**


* `TFunction` type of the output function.

The public interface of output suggests that it possesses a construtor @output(arg1, arg3). In which, _arg1_ is the history keys and _arg3_ the actual decisions taken. 

    
## Public Functions Documentation


### function Variations [1/3]


```cpp
sdm::Variations::Variations () 
```


The default constructor. 

        

### function Variations [2/3]


```cpp
sdm::Variations::Variations (
    const std::vector< std::vector< TItem >> & possible_values
) 
```



### function Variations [3/3]


```cpp
sdm::Variations::Variations (
    const std::vector< TKey > & possible_keys,
    const std::vector< std::vector< TItem >> & possible_values
) 
```




**Parameters:**


* `const` key& information, i.e., the set of keys to prescribe actions 
* `const` std::vector&lt;action&gt;& is the number of actions per agent 



        

### function begin 


```cpp
std::shared_ptr< TFunction > sdm::Variations::begin () 
```




**Returns:**

generated variation. 




        

### function end 


```cpp
std::shared_ptr< TFunction > sdm::Variations::end () 
```




**Returns:**

generated variation. 




        

### function make\_output 


```cpp
std::shared_ptr< TFunction > sdm::Variations::make_output () 
```



### function next 


```cpp
std::shared_ptr< TFunction > sdm::Variations::next () 
```




**Returns:**

generated variation. 




        

### function setVariation 


```cpp
void sdm::Variations::setVariation (
    const std::vector< TKey > & possible_keys,
    const std::vector< std::vector< TItem >> & possible_values
) 
```




**Parameters:**


* `const` key& information, i.e., the set of keys to prescribe actions 
* `const` std::vector&lt;action&gt;& is the number of actions per agent 



        
## Protected Types Documentation


### typedef TItem 


```cpp
using sdm::Variations< TFunction >::TItem =  typename TFunction::output_type;
```



### typedef TKey 


```cpp
using sdm::Variations< TFunction >::TKey =  typename TFunction::input_type;
```



### typedef iterator\_t 


```cpp
using sdm::Variations< TFunction >::iterator_t =  typename std::vector<TItem>::iterator;
```



### typedef super\_iterator 


```cpp
using sdm::Variations< TFunction >::super_iterator =  std::vector<iterator_t>;
```


## Protected Attributes Documentation


### variable current 


```cpp
super_iterator sdm::Variations< TFunction >::current;
```



### variable dimension 


```cpp
int sdm::Variations< TFunction >::dimension;
```



### variable p\_keys\_ 


```cpp
std::vector<TKey> sdm::Variations< TFunction >::p_keys_;
```



### variable p\_values\_ 


```cpp
std::vector<std::vector<TItem> > sdm::Variations< TFunction >::p_values_;
```



### variable vin 


```cpp
std::shared_ptr<TFunction> sdm::Variations< TFunction >::vin;
```



### variable vout 


```cpp
std::shared_ptr<TFunction> sdm::Variations< TFunction >::vout;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/variations.hpp`