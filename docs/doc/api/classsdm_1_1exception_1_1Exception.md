
# Class sdm::exception::Exception

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**Exception**](classsdm_1_1exception_1_1Exception.md)



_This class is the base class for SDMS exceptions._ [More...](#detailed-description)

* `#include <exception.hpp>`



Inherits the following classes: exception


Inherited by the following classes: [sdm::exception::FileNotFoundException](classsdm_1_1exception_1_1FileNotFoundException.md),  [sdm::exception::NotImplementedException](classsdm_1_1exception_1_1NotImplementedException.md),  [sdm::exception::ParsingException](classsdm_1_1exception_1_1ParsingException.md)










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Exception**](classsdm_1_1exception_1_1Exception.md#function-exception) (const std::string & msg\_) <br>_Constructor (C++ STL string)._  |
| virtual const char \* | [**what**](classsdm_1_1exception_1_1Exception.md#function-what) () const<br>_Returns a pointer to the (constant) error description._  |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**error\_message**](classsdm_1_1exception_1_1Exception.md#variable-error-message)  <br>_Error message._  |




# Detailed Description


SDMS contains some exceptions for its internal usage. To define a new exception in SDMS, you need to add a class that inherite from the class [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md). 

    
## Public Functions Documentation


### function Exception 


```cpp
explicit sdm::exception::Exception::Exception (
    const std::string & msg_
) 
```




**Parameters:**


* `msg_` The error message 



        

### function what 


```cpp
virtual const char * sdm::exception::Exception::what () const
```




**Returns:**

A pointer to a const char\*. The underlying memory is in possession of the Except object. Callers must not attempt to free the memory. 




        
## Protected Attributes Documentation


### variable error\_message 


```cpp
std::string sdm::exception::Exception::error_message;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/exception.hpp`