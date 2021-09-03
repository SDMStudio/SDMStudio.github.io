
# Class sdm::exception::ParsingException

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md)



_Developpers use this class to raise a parsing exception._ 

* `#include <exception.hpp>`



Inherits the following classes: [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md#function-parsingexception) (const std::string & line\_details\_="") <br> |
|  std::string | [**get\_line\_details**](classsdm_1_1exception_1_1ParsingException.md#function-get-line-details) () const<br>_Get details about lines that cause the failure._  |

## Public Functions inherited from sdm::exception::Exception

See [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)

| Type | Name |
| ---: | :--- |
|   | [**Exception**](classsdm_1_1exception_1_1Exception.md#function-exception) (const std::string & msg\_) <br>_Constructor (C++ STL string)._  |
| virtual const char \* | [**what**](classsdm_1_1exception_1_1Exception.md#function-what) () const<br>_Returns a pointer to the (constant) error description._  |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::string | [**line\_details**](classsdm_1_1exception_1_1ParsingException.md#variable-line-details)  <br> |

## Protected Attributes inherited from sdm::exception::Exception

See [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)

| Type | Name |
| ---: | :--- |
|  std::string | [**error\_message**](classsdm_1_1exception_1_1Exception.md#variable-error-message)  <br>_Error message._  |







## Public Functions Documentation


### function ParsingException 


```cpp
explicit sdm::exception::ParsingException::ParsingException (
    const std::string & line_details_=""
) 
```


Constructor (C++ STL string).



**Parameters:**


* `line_details_` The line where error occurs. 



        

### function get\_line\_details 


```cpp
std::string sdm::exception::ParsingException::get_line_details () const
```




**Returns:**

line details 




        
## Protected Attributes Documentation


### variable line\_details 


```cpp
std::string sdm::exception::ParsingException::line_details;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/exception.hpp`