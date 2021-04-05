
<NavBar active_item_id="2"/>

# Class sdm::exception::FileNotFoundException


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**exception**](namespacesdm_1_1exception.md) **>** [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md)



_Developpers use this class to raise a file not found exception._ 

* `#include <exception.hpp>`



Inherits the following classes: [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md#function-filenotfoundexception) (std::string file\_) <br> |
|  std::string | [**get\_file**](classsdm_1_1exception_1_1FileNotFoundException.md#function-get-file) () const<br> |

## Public Functions inherited from sdm::exception::Exception

See [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)

| Type | Name |
| ---: | :--- |
|   | [**Exception**](classsdm_1_1exception_1_1Exception.md#function-exception) (const std::string & msg\_) <br> |
| virtual const char \* | [**what**](classsdm_1_1exception_1_1Exception.md#function-what) () const<br> |








## Protected Attributes inherited from sdm::exception::Exception

See [sdm::exception::Exception](classsdm_1_1exception_1_1Exception.md)

| Type | Name |
| ---: | :--- |
|  std::string | [**error\_message**](classsdm_1_1exception_1_1Exception.md#variable-error-message)  <br>_Error message._  |







## Public Functions Documentation


### function FileNotFoundException 


```cpp
inline explicit sdm::exception::FileNotFoundException::FileNotFoundException (
    std::string file_
) 
```


Constructor (C++ STL string). 

**Parameters:**


* `file_` The file 



        

### function get\_file 


```cpp
inline std::string sdm::exception::FileNotFoundException::get_file () const
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/exception.hpp`