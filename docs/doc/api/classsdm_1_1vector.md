
<NavBar active_item_id="2"/>

# Class sdm::vector

**template &lt;typename type, typename value&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**vector**](classsdm_1_1vector.md)





* `#include <vector.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|  const type & | [**getContainer**](classsdm_1_1vector.md#function-getcontainer) () const<br> |
|  void | [**init**](classsdm_1_1vector.md#function-init) (value arg) <br> |
|  value | [**max**](classsdm_1_1vector.md#function-max) () const<br>_Returns the max of all elements in the vector._  |
|  value | [**min**](classsdm_1_1vector.md#function-min) () const<br>_Returns the min of all elements in the vector._  |
|  value | [**norm\_1**](classsdm_1_1vector.md#function-norm-1) () const<br>_Returns the norm\_1 of a vector._  |
|  value | [**norm\_2**](classsdm_1_1vector.md#function-norm-2) () const<br>_Returns the norm\_2 of a vector._  |
|  value | [**norm\_sawtooth**](classsdm_1_1vector.md#function-norm-sawtooth) (const [**vector**](classsdm_1_1vector.md) & arg) const<br>_Returns the norm\_sawtooth of a vector._  |
|  bool | [**operator==**](classsdm_1_1vector.md#function-operator) (const [**vector**](classsdm_1_1vector.md)&lt; type, value &gt; & arg) const<br>_Returns true if both vectors are equals and false otherwise._  |
|  value & | [**operator[]**](classsdm_1_1vector.md#function-operator-2) ([**size\_t**](namespacesdm.md#typedef-size-t) idx) <br>_Returns a reference of the i-th element._  |
|  value | [**operator[]**](classsdm_1_1vector.md#function-operator-3) ([**size\_t**](namespacesdm.md#typedef-size-t) idx) const<br>_Returns a value of the i-th element._  |
|  value | [**operator^**](classsdm_1_1vector.md#function-operator-4) (const [**vector**](classsdm_1_1vector.md)&lt; type, value &gt; & arg) const<br>_Returns the scalar product of the two vectors._  |
|  void | [**resize**](classsdm_1_1vector.md#function-resize) ([**size\_t**](namespacesdm.md#typedef-size-t) \_size\_) <br>_Reallocates a vector to hold "size\_t" elements._  |
|  void | [**setContainer**](classsdm_1_1vector.md#function-setcontainer) (const type & container) <br> |
|  [**size\_t**](namespacesdm.md#typedef-size-t) | [**size**](classsdm_1_1vector.md#function-size) () const<br> |
|  value | [**sum**](classsdm_1_1vector.md#function-sum) () <br>_Returns the sum of all elements in the vector._  |
|  [**vector**](classsdm_1_1vector.md) | [**transpose**](classsdm_1_1vector.md#function-transpose) () const<br> |
|   | [**vector**](classsdm_1_1vector.md#function-vector-1-3) () <br>_This constructor allocates an uninitialized vector that holds zero elements._  |
|   | [**vector**](classsdm_1_1vector.md#function-vector-2-3) ([**size\_t**](namespacesdm.md#typedef-size-t) \_size\_) <br>_This constructor allocates an uninitialized vector that holds "size\_t" elements._  |
|   | [**vector**](classsdm_1_1vector.md#function-vector-3-3) (const [**vector**](classsdm_1_1vector.md) & arg) <br>_This is a copy constructor._  |
|   | [**~vector**](classsdm_1_1vector.md#function-vector) () <br>_This destructor destroies the vector._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**size\_t**](namespacesdm.md#typedef-size-t) | [**\_size\_**](classsdm_1_1vector.md#variable-size-)  <br> |
|  type | [**container**](classsdm_1_1vector.md#variable-container)  <br> |




## Public Functions Documentation


### function getContainer 


```cpp
const type & sdm::vector::getContainer () const
```



### function init 


```cpp
void sdm::vector::init (
    value arg
) 
```



### function max 


```cpp
value sdm::vector::max () const
```


Max of entries  using methods from parent classes.



**Parameters:**


* `value` 



        

### function min 


```cpp
value sdm::vector::min () const
```




**Parameters:**


* `value` 

Min of entries  using methods from parent classes. 

        

### function norm\_1 


```cpp
value sdm::vector::norm_1 () const
```




**Parameters:**


* `value` 



        

### function norm\_2 


```cpp
value sdm::vector::norm_2 () const
```




**Parameters:**


* `value` 



        

### function norm\_sawtooth 


```cpp
value sdm::vector::norm_sawtooth (
    const vector & arg
) const
```




**Parameters:**


* `value` 



        

### function operator== 


```cpp
bool sdm::vector::operator== (
    const vector < type, value > & arg
) const
```




**Parameters:**


* `const` vector&lt;type, value&gt;& 
* `const` vector&lt;type, value&gt;& 



**Returns:**

bool 




        

### function operator[] 


```cpp
value & sdm::vector::operator[] (
    size_t idx
) 
```


Array subscript operator '[]'



**Parameters:**


* `size_t` 



**Returns:**

value& 




        

### function operator[] 


```cpp
value sdm::vector::operator[] (
    size_t idx
) const
```




**Parameters:**


* `size_t` 



**Returns:**

value 




        

### function operator^ 


```cpp
value sdm::vector::operator^ (
    const vector < type, value > & arg
) const
```




**Parameters:**


* `const` vector&lt;type, value&gt;& 
* `const` vector&lt;type, value&gt;& 



**Returns:**

bool 




        

### function resize 


```cpp
void sdm::vector::resize (
    size_t _size_
) 
```




**Parameters:**


* `size_t` 



        

### function setContainer 


```cpp
void sdm::vector::setContainer (
    const type & container
) 
```



### function size 


```cpp
size_t sdm::vector::size () const
```



### function sum 


```cpp
value sdm::vector::sum () 
```


Sum of entries  using methods from parent classes.



**Parameters:**


* `value` 



        

### function transpose 


```cpp
vector sdm::vector::transpose () const
```



### function vector [1/3]


```cpp
sdm::vector::vector () 
```



### function vector [2/3]


```cpp
sdm::vector::vector (
    size_t _size_
) 
```




**Parameters:**


* `size_t` 



        

### function vector [3/3]


```cpp
sdm::vector::vector (
    const vector & arg
) 
```




**Parameters:**


* `const` vector& 



        

### function ~vector 


```cpp
sdm::vector::~vector () 
```


## Protected Attributes Documentation


### variable \_size\_ 


```cpp
size_t sdm::vector< type, value >::_size_;
```



### variable container 


```cpp
type sdm::vector< type, value >::container;
```


TODO Make this attribute private, be aware that it might have been used somewhere else as a public attribute. 

        ## Friends Documentation



### friend operator\* 


```cpp
inline friend vector sdm::vector::operator* (
    const value & arg1,
    const vector & arg2
) 
```




**Parameters:**


* `const` value& 
* `const` vector&lt;type, value&gt;& 



**Returns:**

vector&lt;type, value&gt; 




        

### friend operator+= 


```cpp
inline friend const vector & sdm::vector::operator+= (
    vector & arg1,
    const vector & arg2
) 
```




**Parameters:**


* `const` vector&lt;type, value&gt;& 
* `const` vector&lt;type, value&gt;& 



**Returns:**

vector&lt;type, value&gt;& 




        

### friend operator-= 


```cpp
inline friend const vector & sdm::vector::operator-= (
    vector & arg1,
    const vector & arg2
) 
```



### friend operator/= 


```cpp
inline friend const vector & sdm::vector::operator/= (
    vector & arg1,
    const value & arg2
) 
```




**Parameters:**


* `const` vector&lt;type, value&gt;& 
* `const` value& 



**Returns:**

vector&lt;type, value&gt;& 




        

### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::vector::operator<< (
    std::ostream & os,
    const vector & arg
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/linear_algebra/vector.hpp`