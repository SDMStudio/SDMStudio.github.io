
<NavBar active_item_id="2"/>

# Class sdm::exception::Exception


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**Exception**](classsdm_1_1exception_1_1Exception.md)



_Base exception class._ 

* `#include <exception.hpp>`



Inherits the following classes: exception


Inherited by the following classes: [sdm::exception::FileNotFoundException](classsdm_1_1exception_1_1FileNotFoundException.md),  [sdm::exception::NotImplementedException](classsdm_1_1exception_1_1NotImplementedException.md),  [sdm::exception::ParsingException](classsdm_1_1exception_1_1ParsingException.md)










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Exception**](classsdm_1_1exception_1_1Exception.md#function-exception) (const std::string & msg\_) <br> |
| virtual const char \* | [**what**](classsdm_1_1exception_1_1Exception.md#function-what) () const<br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**error\_message**](classsdm_1_1exception_1_1Exception.md#variable-error-message)  <br>_Error message._  |




## Public Functions Documentation


### function Exception 


```cpp
inline explicit sdm::exception::Exception::Exception (
    const std::string & msg_
) 
```


Constructor (C++ STL string). 

**Parameters:**


* `msg_` The error message 



        

### function what 


```cpp
inline virtual const char * sdm::exception::Exception::what () const
```


Returns a pointer to the (constant) error description. 

**Returns:**

A pointer to a const char\*. The underlying memory is in possession of the Except object. Callers must not attempt to free the memory. 




        
## Protected Attributes Documentation


### variable error\_message 


```cpp
std::string sdm::exception::Exception::error_message;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/exception.hpp`