
# Class sdm::sdmsVector

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class I class I, class T class T, class TBaseVector class TBaseVector&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**sdmsVector**](classsdm_1_1sdmsVector.md)



_Create a SDMS Vector. A SMDS Vector is used to optimize the calculation, however, you have to be careful when using it because it's not possible to add element after the initialization._ [More...](#detailed-description)

* `#include <sdms_vector.hpp>`



Inherits the following classes: [sdm::VectorInterface](classsdm_1_1VectorInterface.md)














## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  double | [**PRECISION**](classsdm_1_1sdmsVector.md#variable-precision)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
| virtual void | [**addValueAt**](classsdm_1_1sdmsVector.md#function-addvalueat) (const I &, const T & value) <br> |
| virtual I | [**argmax**](classsdm_1_1sdmsVector.md#function-argmax) () <br> |
| virtual I | [**argmin**](classsdm_1_1sdmsVector.md#function-argmin) () <br> |
| virtual T | [**at**](classsdm_1_1sdmsVector.md#function-at) (const I &) const<br> |
|  auto | [**begin**](classsdm_1_1sdmsVector.md#function-begin) () const<br> |
|  T | [**dot**](classsdm_1_1sdmsVector.md#function-dot) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) & v2) const<br> |
|  auto | [**end**](classsdm_1_1sdmsVector.md#function-end) () const<br> |
| virtual const std::vector&lt; I &gt; & | [**getIndexes**](classsdm_1_1sdmsVector.md#function-getindexes) () const<br> |
|  std::shared\_ptr&lt; std::unordered\_map&lt; I, [**size\_t**](namespacesdm.md#typedef-size-t) &gt; &gt; | [**getMapElementToIndex**](classsdm_1_1sdmsVector.md#function-getmapelementtoindex) () const<br> |
| virtual T | [**getValueAt**](classsdm_1_1sdmsVector.md#function-getvalueat) (const I &) const<br> |
|  bool | [**is\_equal**](classsdm_1_1sdmsVector.md#function-is-equal) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) & other, double precision) const<br> |
| virtual T | [**max**](classsdm_1_1sdmsVector.md#function-max) () <br> |
| virtual T | [**min**](classsdm_1_1sdmsVector.md#function-min) () <br> |
|  T | [**norm\_1**](classsdm_1_1sdmsVector.md#function-norm-1) () const<br> |
|  T | [**norm\_2**](classsdm_1_1sdmsVector.md#function-norm-2) () const<br> |
|  bool | [**operator!=**](classsdm_1_1sdmsVector.md#function-operator) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|  bool | [**operator&lt;=**](classsdm_1_1sdmsVector.md#function-operator-2) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br>_Compare two vectors. Return true if all values are lower or equal to the second vector._  |
|  bool | [**operator==**](classsdm_1_1sdmsVector.md#function-operator-3) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) &) const<br> |
|  T | [**operator^**](classsdm_1_1sdmsVector.md#function-operator-4) (const [**sdmsVector**](classsdm_1_1sdmsVector.md) & v2) const<br> |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-1-3) () <br> |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-2-3) (std::shared\_ptr&lt; std::unordered\_map&lt; I, [**size\_t**](namespacesdm.md#typedef-size-t) &gt;&gt;, std::shared\_ptr&lt; std::unordered\_map&lt; I, T &gt;&gt;, double=0) <br>_Create a SDMS Vector. In order to create a vector, it's necessary to provide a map that associated the I element with a specific index and a specific Value._  |
|   | [**sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector-3-3) (std::vector&lt; I &gt;, std::vector&lt; T &gt;, double=0) <br>_Create a SDMS Vector._  |
|  void | [**serialize**](classsdm_1_1sdmsVector.md#function-serialize) (Archive & archive, const unsigned int) <br> |
| virtual void | [**setValueAt**](classsdm_1_1sdmsVector.md#function-setvalueat) (const I &, const T & value) <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1sdmsVector.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1sdmsVector.md#function-str) () const<br> |
|  T | [**sum**](classsdm_1_1sdmsVector.md#function-sum) () const<br> |
| virtual  | [**~sdmsVector**](classsdm_1_1sdmsVector.md#function-sdmsvector) () <br> |

## Public Functions inherited from sdm::VectorInterface

See [sdm::VectorInterface](classsdm_1_1VectorInterface.md)

| Type | Name |
| ---: | :--- |
| virtual void | [**addValueAt**](classsdm_1_1VectorInterface.md#function-addvalueat) (const I & index, const T & value) = 0<br> |
| virtual I | [**argmax**](classsdm_1_1VectorInterface.md#function-argmax) () = 0<br> |
| virtual I | [**argmin**](classsdm_1_1VectorInterface.md#function-argmin) () = 0<br> |
| virtual T | [**at**](classsdm_1_1VectorInterface.md#function-at) (const I & index) const = 0<br> |
| virtual std::vector&lt; I &gt; | [**getIndexes**](classsdm_1_1VectorInterface.md#function-getindexes) () const = 0<br> |
| virtual T | [**getValueAt**](classsdm_1_1VectorInterface.md#function-getvalueat) (const I & index) const = 0<br> |
| virtual T | [**max**](classsdm_1_1VectorInterface.md#function-max) () = 0<br> |
| virtual T | [**min**](classsdm_1_1VectorInterface.md#function-min) () = 0<br> |
| virtual void | [**setValueAt**](classsdm_1_1VectorInterface.md#function-setvalueat) (const I & index, const T & value) = 0<br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1VectorInterface.md#function-size) () const = 0<br> |
| virtual std::string | [**str**](classsdm_1_1VectorInterface.md#function-str) () const = 0<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; std::unordered\_map&lt; I, [**size\_t**](namespacesdm.md#typedef-size-t) &gt; &gt; | [**map\_element\_to\_index\_**](classsdm_1_1sdmsVector.md#variable-map-element-to-index-)  <br> |
|  TBaseVector | [**tbasevector\_**](classsdm_1_1sdmsVector.md#variable-tbasevector-)  <br> |
|  std::vector&lt; I &gt; | [**vector\_element\_**](classsdm_1_1sdmsVector.md#variable-vector-element-)  <br> |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  std::pair&lt; I, T &gt; | [**getMax**](classsdm_1_1sdmsVector.md#function-getmax) () const<br> |
|  std::pair&lt; I, T &gt; | [**getMin**](classsdm_1_1sdmsVector.md#function-getmin) () const<br> |




# Detailed Description




**Template parameters:**


* `I` Type of index 
* `T` Type of value 



    
## Public Static Attributes Documentation


### variable PRECISION 


```cpp
double sdm::sdmsVector< I, T, TBaseVector >::PRECISION;
```


## Public Functions Documentation


### function addValueAt 


```cpp
virtual void sdm::sdmsVector::addValueAt (
    const I &,
    const T & value
) 
```


Implements [*sdm::VectorInterface::addValueAt*](classsdm_1_1VectorInterface.md#function-addvalueat)


### function argmax 


```cpp
virtual I sdm::sdmsVector::argmax () 
```


Implements [*sdm::VectorInterface::argmax*](classsdm_1_1VectorInterface.md#function-argmax)


### function argmin 


```cpp
virtual I sdm::sdmsVector::argmin () 
```


Implements [*sdm::VectorInterface::argmin*](classsdm_1_1VectorInterface.md#function-argmin)


### function at 


```cpp
virtual T sdm::sdmsVector::at (
    const I &
) const
```


Implements [*sdm::VectorInterface::at*](classsdm_1_1VectorInterface.md#function-at)


### function begin 


```cpp
inline auto sdm::sdmsVector::begin () const
```



### function dot 


```cpp
T sdm::sdmsVector::dot (
    const sdmsVector & v2
) const
```



### function end 


```cpp
inline auto sdm::sdmsVector::end () const
```



### function getIndexes 


```cpp
virtual const std::vector< I > & sdm::sdmsVector::getIndexes () const
```


Implements [*sdm::VectorInterface::getIndexes*](classsdm_1_1VectorInterface.md#function-getindexes)


### function getMapElementToIndex 


```cpp
std::shared_ptr< std::unordered_map< I, size_t > > sdm::sdmsVector::getMapElementToIndex () const
```



### function getValueAt 


```cpp
virtual T sdm::sdmsVector::getValueAt (
    const I &
) const
```


Implements [*sdm::VectorInterface::getValueAt*](classsdm_1_1VectorInterface.md#function-getvalueat)


### function is\_equal 


```cpp
bool sdm::sdmsVector::is_equal (
    const sdmsVector & other,
    double precision
) const
```



### function max 


```cpp
virtual T sdm::sdmsVector::max () 
```


Implements [*sdm::VectorInterface::max*](classsdm_1_1VectorInterface.md#function-max)


### function min 


```cpp
virtual T sdm::sdmsVector::min () 
```


Implements [*sdm::VectorInterface::min*](classsdm_1_1VectorInterface.md#function-min)


### function norm\_1 


```cpp
T sdm::sdmsVector::norm_1 () const
```



### function norm\_2 


```cpp
T sdm::sdmsVector::norm_2 () const
```



### function operator!= 


```cpp
bool sdm::sdmsVector::operator!= (
    const sdmsVector &
) const
```



### function operator&lt;= 


```cpp
bool sdm::sdmsVector::operator<= (
    const sdmsVector &
) const
```




**Returns:**

true 




**Returns:**

false 




        

### function operator== 


```cpp
bool sdm::sdmsVector::operator== (
    const sdmsVector &
) const
```



### function operator^ 


```cpp
T sdm::sdmsVector::operator^ (
    const sdmsVector & v2
) const
```



### function sdmsVector [1/3]


```cpp
sdm::sdmsVector::sdmsVector () 
```



### function sdmsVector [2/3]


```cpp
sdm::sdmsVector::sdmsVector (
    std::shared_ptr< std::unordered_map< I, size_t >>,
    std::shared_ptr< std::unordered_map< I, T >>,
    double=0
) 
```




**Parameters:**


* `std::shared_ptr<std::unordered_map<I` : A map that associate the element I with a specific index 
* `std::shared_ptr<std::unordered_map<I` : A map that associate the element I with a specific value 
* `double` : the default value 



        

### function sdmsVector [3/3]


```cpp
sdm::sdmsVector::sdmsVector (
    std::vector< I >,
    std::vector< T >,
    double=0
) 
```




**Parameters:**


* `std::vector<I>>` : A vector for each element I 
* `std::vector<T>` : A vector for each value associate at the same position of the element I in vector 
* `double` : the default value 



        

### function serialize 


```cpp
template<class Archive class Archive>
void sdm::sdmsVector::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function setValueAt 


```cpp
virtual void sdm::sdmsVector::setValueAt (
    const I &,
    const T & value
) 
```


Implements [*sdm::VectorInterface::setValueAt*](classsdm_1_1VectorInterface.md#function-setvalueat)


### function size 


```cpp
virtual size_t sdm::sdmsVector::size () const
```


Implements [*sdm::VectorInterface::size*](classsdm_1_1VectorInterface.md#function-size)


### function str 


```cpp
virtual std::string sdm::sdmsVector::str () const
```


Implements [*sdm::VectorInterface::str*](classsdm_1_1VectorInterface.md#function-str)


### function sum 


```cpp
T sdm::sdmsVector::sum () const
```



### function ~sdmsVector 


```cpp
inline virtual sdm::sdmsVector::~sdmsVector () 
```


## Protected Attributes Documentation


### variable map\_element\_to\_index\_ 


```cpp
std::shared_ptr<std::unordered_map<I, size_t> > sdm::sdmsVector< I, T, TBaseVector >::map_element_to_index_;
```



### variable tbasevector\_ 


```cpp
TBaseVector sdm::sdmsVector< I, T, TBaseVector >::tbasevector_;
```



### variable vector\_element\_ 


```cpp
std::vector<I> sdm::sdmsVector< I, T, TBaseVector >::vector_element_;
```


## Protected Functions Documentation


### function getMax 


```cpp
std::pair< I, T > sdm::sdmsVector::getMax () const
```



### function getMin 


```cpp
std::pair< I, T > sdm::sdmsVector::getMin () const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/sdms_vector.hpp`