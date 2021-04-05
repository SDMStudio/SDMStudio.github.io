
<NavBar active_item_id="2"/>

# Class sdm::exception::ParsingException


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md)



_Developpers use this class to raise a parsing exception._ 

* `#include <exception.hpp>`



Inherits the following classes: [sdm::exception::Except](classsdm_1_1exception_1_1Except.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md#function-parsingexception) (const std::string & line\_details\_="") <br> |
|  std::string | [**get\_line\_details**](classsdm_1_1exception_1_1ParsingException.md#function-get-line-details) () const<br> |

## Public Functions inherited from sdm::exception::Except

See [sdm::exception::Except](classsdm_1_1exception_1_1Except.md)

| Type | Name |
| ---: | :--- |
|   | [**Except**](classsdm_1_1exception_1_1Except.md#function-except) (const std::string & msg\_) <br> |
| virtual const char \* | [**what**](classsdm_1_1exception_1_1Except.md#function-what) () const<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**line\_details**](classsdm_1_1exception_1_1ParsingException.md#variable-line-details)  <br> |

## Protected Attributes inherited from sdm::exception::Except

See [sdm::exception::Except](classsdm_1_1exception_1_1Except.md)

| Type | Name |
| ---: | :--- |
|  std::string | [**error\_message**](classsdm_1_1exception_1_1Except.md#variable-error-message)  <br>_Error message._  |







## Public Functions Documentation


### function ParsingException 


```cpp
inline explicit sdm::exception::ParsingException::ParsingException (
    const std::string & line_details_=""
) 
```


Constructor (C++ STL string). 

**Parameters:**


* `line_details_` The line where error occures 



        

### function get\_line\_details 


```cpp
inline std::string sdm::exception::ParsingException::get_line_details () const
```


## Protected Attributes Documentation


### variable line\_details 


```cpp
std::string sdm::exception::ParsingException::line_details;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/exception.hpp`