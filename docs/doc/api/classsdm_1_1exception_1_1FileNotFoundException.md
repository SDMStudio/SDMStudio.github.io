
# Class sdm::exception::FileNotFoundException

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md)



_File not found exception._ 

* `#include <exception.hpp>`



Inherits the following classes: [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md#function-filenotfoundexception) (std::string file\_) <br> |
|  std::string | [**get\_file**](classsdm_1_1exception_1_1FileNotFoundException.md#function-get-file) () const<br>_Get the name of the file not found._  |

## Public Functions inherited from sdm::exception::Exception

See [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)

| Type | Name |
| ---: | :--- |
|   | [**Exception**](classsdm_1_1exception_1_1Exception.md#function-exception) (const std::string & msg\_) <br>_Constructor (C++ STL string)._  |
| virtual const char \* | [**what**](classsdm_1_1exception_1_1Exception.md#function-what) () const<br>_Returns a pointer to the (constant) error description._  |








## Protected Attributes inherited from sdm::exception::Exception

See [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)

| Type | Name |
| ---: | :--- |
|  std::string | [**error\_message**](classsdm_1_1exception_1_1Exception.md#variable-error-message)  <br>_Error message._  |







## Public Functions Documentation


### function FileNotFoundException 


```cpp
explicit sdm::exception::FileNotFoundException::FileNotFoundException (
    std::string file_
) 
```


Constructor (C++ STL string). 

**Parameters:**


* `file_` The file 



        

### function get\_file 


```cpp
std::string sdm::exception::FileNotFoundException::get_file () const
```




**Returns:**

the filename 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/exception.hpp`