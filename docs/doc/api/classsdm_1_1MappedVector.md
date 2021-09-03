
# Class sdm::MappedVector

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TIndex, class T, class Hash, class KeyEqual&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MappedVector**](classsdm_1_1MappedVector.md)



_Mapped vectors are vectors with specific type of indexes. They are represented by a map._ [More...](#detailed-description)

* `#include <mapped_vector.hpp>`



Inherits the following classes: std::unordered_map< TIndex, T, Hash, KeyEqual >,  [sdm::VectorInterface](classsdm_1_1VectorInterface.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef typename std::unordered\_map&lt; TIndex, T, Hash, KeyEqual &gt;::[**const\_iterator**](classsdm_1_1MappedVector.md#typedef-const-iterator) | [**const\_iterator**](classsdm_1_1MappedVector.md#typedef-const-iterator)  <br> |
| typedef typename std::unordered\_map&lt; TIndex, T, Hash, KeyEqual &gt;::[**iterator**](classsdm_1_1MappedVector.md#typedef-iterator) | [**iterator**](classsdm_1_1MappedVector.md#typedef-iterator)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**type**](classsdm_1_1MappedVector.md#typedef-type) | [**type**](classsdm_1_1MappedVector.md#typedef-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type) | [**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; TIndex, T &gt;::[**value\_type**](classsdm_1_1MappedVector.md#typedef-value-type) | [**value\_type**](classsdm_1_1MappedVector.md#typedef-value-type)  <br> |






## Public Static Attributes

| Type | Name |
| ---: | :--- |
|  double | [**PRECISION**](classsdm_1_1MappedVector.md#variable-precision)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-1-5) () <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-2-5) (T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-3-5) (long size, T default\_value) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-4-5) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) <br> |
|   | [**MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector-5-5) (std::initializer\_list&lt; [**value\_list\_type**](classsdm_1_1MappedVector.md#typedef-value-list-type) &gt;) <br> |
|  std::shared\_ptr&lt; TOutput &gt; | [**add**](classsdm_1_1MappedVector.md#function-add) (const std::shared\_ptr&lt; TOutput &gt; & other, double coef\_this=1., double coef\_other=1.) const<br> |
| virtual void | [**addValueAt**](classsdm_1_1MappedVector.md#function-addvalueat) (const TIndex &, const T &) <br> |
| virtual TIndex | [**argmax**](classsdm_1_1MappedVector.md#function-argmax) () <br> |
| virtual TIndex | [**argmin**](classsdm_1_1MappedVector.md#function-argmin) () <br> |
| virtual T | [**at**](classsdm_1_1MappedVector.md#function-at) (const TIndex &) const<br> |
|  T | [**dot**](classsdm_1_1MappedVector.md#function-dot) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br>_This method implements a non-commutative dot product : It is worth noticing that sometimes arg1.dot(arg2) != arg2.dot(arg1)_  |
|  void | [**finalize**](classsdm_1_1MappedVector.md#function-finalize) () <br> |
|  T | [**getDefault**](classsdm_1_1MappedVector.md#function-getdefault) () const<br> |
| virtual std::vector&lt; TIndex &gt; | [**getIndexes**](classsdm_1_1MappedVector.md#function-getindexes) () const<br> |
| virtual T | [**getValueAt**](classsdm_1_1MappedVector.md#function-getvalueat) (const TIndex &) const<br> |
|  bool | [**isExist**](classsdm_1_1MappedVector.md#function-isexist) (const TIndex &) const<br> |
|  bool | [**is\_equal**](classsdm_1_1MappedVector.md#function-is-equal) (const [**MappedVector**](classsdm_1_1MappedVector.md) & other, double precision) const<br> |
| virtual T | [**max**](classsdm_1_1MappedVector.md#function-max) () <br> |
| virtual T | [**min**](classsdm_1_1MappedVector.md#function-min) () <br> |
|  T | [**norm\_1**](classsdm_1_1MappedVector.md#function-norm-1) () const<br> |
|  T | [**norm\_2**](classsdm_1_1MappedVector.md#function-norm-2) () const<br> |
|  bool | [**operator!=**](classsdm_1_1MappedVector.md#function-operator) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  T | [**operator\***](classsdm_1_1MappedVector.md#function-operator-2) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  bool | [**operator&lt;**](classsdm_1_1MappedVector.md#function-operator-3) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br> |
|  bool | [**operator==**](classsdm_1_1MappedVector.md#function-operator-4) (const [**MappedVector**](classsdm_1_1MappedVector.md) & other) const<br> |
|  T | [**operator^**](classsdm_1_1MappedVector.md#function-operator-5) (const [**MappedVector**](classsdm_1_1MappedVector.md) &) const<br>_This method implements a non-commutative dot product : It is worth noticing that sometimes arg1.dot(arg2) != arg2.dot(arg1)_  |
|  void | [**serialize**](classsdm_1_1MappedVector.md#function-serialize) (Archive & archive, const unsigned int) <br> |
|  void | [**setDefault**](classsdm_1_1MappedVector.md#function-setdefault) (double default\_value) <br> |
| virtual void | [**setValueAt**](classsdm_1_1MappedVector.md#function-setvalueat) (const TIndex &, const T &) <br> |
|  void | [**setupIndexes**](classsdm_1_1MappedVector.md#function-setupindexes) () <br> |
| virtual [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1MappedVector.md#function-size) () const<br> |
| virtual std::string | [**str**](classsdm_1_1MappedVector.md#function-str) () const<br> |
| virtual  | [**~MappedVector**](classsdm_1_1MappedVector.md#function-mappedvector) () <br> |

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

## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**setPrecision**](classsdm_1_1MappedVector.md#function-setprecision) (double) <br> |






## Protected Attributes

| Type | Name |
| ---: | :--- |
|  bool | [**bmax**](classsdm_1_1MappedVector.md#variable-bmax)   = = false<br> |
|  bool | [**bmin**](classsdm_1_1MappedVector.md#variable-bmin)   = = false<br> |
|  T | [**default\_value\_**](classsdm_1_1MappedVector.md#variable-default-value-)   = = 0.0<br> |
|  std::pair&lt; TIndex, T &gt; | [**pmax**](classsdm_1_1MappedVector.md#variable-pmax)  <br> |
|  std::pair&lt; TIndex, T &gt; | [**pmin**](classsdm_1_1MappedVector.md#variable-pmin)  <br> |
|  long | [**size\_**](classsdm_1_1MappedVector.md#variable-size-)   = = -1<br> |
|  std::vector&lt; TIndex &gt; | [**v\_indexes**](classsdm_1_1MappedVector.md#variable-v-indexes)   = = {}<br> |




## Protected Functions

| Type | Name |
| ---: | :--- |
|  const std::pair&lt; TIndex, T &gt; & | [**getMax**](classsdm_1_1MappedVector.md#function-getmax) () <br> |
|  const std::pair&lt; TIndex, T &gt; & | [**getMin**](classsdm_1_1MappedVector.md#function-getmin) () <br> |




# Detailed Description




**Template parameters:**


* `TIndex` the type of index 
* `T` the type of value (default : `double`)

Using map structure allows to keep only necessary values. Moreover, it allows to see vectors not only as a mapping from integer to value but also as a mapping from any type of index to values. 

    
## Public Types Documentation


### typedef const\_iterator 


```cpp
using sdm::MappedVector< TIndex, T, Hash, KeyEqual >::const_iterator =  typename std::unordered_map<TIndex, T, Hash, KeyEqual>::const_iterator;
```



### typedef iterator 


```cpp
using sdm::MappedVector< TIndex, T, Hash, KeyEqual >::iterator =  typename std::unordered_map<TIndex, T, Hash, KeyEqual>::iterator;
```



### typedef type 


```cpp
using sdm::MappedVector< TIndex, T, Hash, KeyEqual >::type =  typename RecursiveMap<TIndex, T>::type;
```



### typedef value\_list\_type 


```cpp
using sdm::MappedVector< TIndex, T, Hash, KeyEqual >::value_list_type =  typename RecursiveMap<TIndex, T>::value_list_type;
```



### typedef value\_type 


```cpp
using sdm::MappedVector< TIndex, T, Hash, KeyEqual >::value_type =  typename RecursiveMap<TIndex, T>::value_type;
```


## Public Static Attributes Documentation


### variable PRECISION 


```cpp
double sdm::MappedVector< TIndex, T, Hash, KeyEqual >::PRECISION;
```


## Public Functions Documentation


### function MappedVector [1/5]


```cpp
sdm::MappedVector::MappedVector () 
```



### function MappedVector [2/5]


```cpp
sdm::MappedVector::MappedVector (
    T default_value
) 
```



### function MappedVector [3/5]


```cpp
sdm::MappedVector::MappedVector (
    long size,
    T default_value
) 
```



### function MappedVector [4/5]


```cpp
sdm::MappedVector::MappedVector (
    const MappedVector &
) 
```



### function MappedVector [5/5]


```cpp
sdm::MappedVector::MappedVector (
    std::initializer_list< value_list_type >
) 
```



### function add 


```cpp
template<class TOutput class TOutput>
inline std::shared_ptr< TOutput > sdm::MappedVector::add (
    const std::shared_ptr< TOutput > & other,
    double coef_this=1.,
    double coef_other=1.
) const
```



### function addValueAt 


```cpp
virtual void sdm::MappedVector::addValueAt (
    const TIndex &,
    const T &
) 
```


Implements [*sdm::VectorInterface::addValueAt*](classsdm_1_1VectorInterface.md#function-addvalueat)


### function argmax 


```cpp
virtual TIndex sdm::MappedVector::argmax () 
```


Implements [*sdm::VectorInterface::argmax*](classsdm_1_1VectorInterface.md#function-argmax)


### function argmin 


```cpp
virtual TIndex sdm::MappedVector::argmin () 
```


Implements [*sdm::VectorInterface::argmin*](classsdm_1_1VectorInterface.md#function-argmin)


### function at 


```cpp
virtual T sdm::MappedVector::at (
    const TIndex &
) const
```


Implements [*sdm::VectorInterface::at*](classsdm_1_1VectorInterface.md#function-at)


### function dot 


```cpp
T sdm::MappedVector::dot (
    const MappedVector &
) const
```




**Returns:**

T 




        

### function finalize 


```cpp
void sdm::MappedVector::finalize () 
```



### function getDefault 


```cpp
T sdm::MappedVector::getDefault () const
```



### function getIndexes 


```cpp
virtual std::vector< TIndex > sdm::MappedVector::getIndexes () const
```


Implements [*sdm::VectorInterface::getIndexes*](classsdm_1_1VectorInterface.md#function-getindexes)


### function getValueAt 


```cpp
virtual T sdm::MappedVector::getValueAt (
    const TIndex &
) const
```


Implements [*sdm::VectorInterface::getValueAt*](classsdm_1_1VectorInterface.md#function-getvalueat)


### function isExist 


```cpp
bool sdm::MappedVector::isExist (
    const TIndex &
) const
```



### function is\_equal 


```cpp
bool sdm::MappedVector::is_equal (
    const MappedVector & other,
    double precision
) const
```



### function max 


```cpp
virtual T sdm::MappedVector::max () 
```


Implements [*sdm::VectorInterface::max*](classsdm_1_1VectorInterface.md#function-max)


### function min 


```cpp
virtual T sdm::MappedVector::min () 
```


Implements [*sdm::VectorInterface::min*](classsdm_1_1VectorInterface.md#function-min)


### function norm\_1 


```cpp
T sdm::MappedVector::norm_1 () const
```



### function norm\_2 


```cpp
T sdm::MappedVector::norm_2 () const
```



### function operator!= 


```cpp
bool sdm::MappedVector::operator!= (
    const MappedVector &
) const
```



### function operator\* 


```cpp
T sdm::MappedVector::operator* (
    const MappedVector &
) const
```



### function operator&lt; 


```cpp
bool sdm::MappedVector::operator< (
    const MappedVector &
) const
```



### function operator== 


```cpp
bool sdm::MappedVector::operator== (
    const MappedVector & other
) const
```



### function operator^ 


```cpp
T sdm::MappedVector::operator^ (
    const MappedVector &
) const
```




**Returns:**

T 




        

### function serialize 


```cpp
template<class Archive class Archive>
void sdm::MappedVector::serialize (
    Archive & archive,
    const unsigned int
) 
```



### function setDefault 


```cpp
void sdm::MappedVector::setDefault (
    double default_value
) 
```



### function setValueAt 


```cpp
virtual void sdm::MappedVector::setValueAt (
    const TIndex &,
    const T &
) 
```


Implements [*sdm::VectorInterface::setValueAt*](classsdm_1_1VectorInterface.md#function-setvalueat)


### function setupIndexes 


```cpp
void sdm::MappedVector::setupIndexes () 
```



### function size 


```cpp
virtual size_t sdm::MappedVector::size () const
```


Implements [*sdm::VectorInterface::size*](classsdm_1_1VectorInterface.md#function-size)


### function str 


```cpp
virtual std::string sdm::MappedVector::str () const
```


Implements [*sdm::VectorInterface::str*](classsdm_1_1VectorInterface.md#function-str)


### function ~MappedVector 


```cpp
virtual sdm::MappedVector::~MappedVector () 
```


## Public Static Functions Documentation


### function setPrecision 


```cpp
static void sdm::MappedVector::setPrecision (
    double
) 
```


## Protected Attributes Documentation


### variable bmax 


```cpp
bool sdm::MappedVector< TIndex, T, Hash, KeyEqual >::bmax;
```



### variable bmin 


```cpp
bool sdm::MappedVector< TIndex, T, Hash, KeyEqual >::bmin;
```



### variable default\_value\_ 


```cpp
T sdm::MappedVector< TIndex, T, Hash, KeyEqual >::default_value_;
```



### variable pmax 


```cpp
std::pair<TIndex, T> sdm::MappedVector< TIndex, T, Hash, KeyEqual >::pmax;
```



### variable pmin 


```cpp
std::pair<TIndex, T> sdm::MappedVector< TIndex, T, Hash, KeyEqual >::pmin;
```



### variable size\_ 


```cpp
long sdm::MappedVector< TIndex, T, Hash, KeyEqual >::size_;
```



### variable v\_indexes 


```cpp
std::vector<TIndex> sdm::MappedVector< TIndex, T, Hash, KeyEqual >::v_indexes;
```


## Protected Functions Documentation


### function getMax 


```cpp
const std::pair< TIndex, T > & sdm::MappedVector::getMax () 
```



### function getMin 


```cpp
const std::pair< TIndex, T > & sdm::MappedVector::getMin () 
```

## Friends Documentation



### friend access 


```cpp
friend class sdm::MappedVector::access () 
```



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::MappedVector::operator<< (
    std::ostream & os,
    const MappedVector & vect
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/mapped_vector.hpp`