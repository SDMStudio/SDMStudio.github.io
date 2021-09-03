
# Class sdm::exception::NotImplementedException

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md)



_Not implemented method exception._ 

* `#include <exception.hpp>`



Inherits the following classes: [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md#function-notimplementedexception) () <br> |

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


### function NotImplementedException 


```cpp
explicit sdm::exception::NotImplementedException::NotImplementedException () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/exception.hpp`