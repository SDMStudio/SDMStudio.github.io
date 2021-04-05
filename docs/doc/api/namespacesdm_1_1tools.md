
<NavBar active_item_id="2"/>

# Namespace sdm::tools


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**tools**](namespacesdm_1_1tools.md)



_Namespace grouping other tools._ 
















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::string | [**addIndent**](namespacesdm_1_1tools.md#function-addindent) (std::string s, int num\_indents) <br>_Add indentation to input string._  |
|  std::string | [**getPathTo**](namespacesdm_1_1tools.md#function-getpathto) (std::string base, std::string world\_name, std::string formalism\_name) <br> |
|  bool | [**hasExtension**](namespacesdm_1_1tools.md#function-hasextension) (std::string filename, std::string extension) <br>_Compare the extension of a file._  |
|  void | [**indentedOutput**](namespacesdm_1_1tools.md#function-indentedoutput) (std::ostream & outStream, const char \* message) <br>_Add indentation to an output stream._  |
|  std::string | [**repeatString**](namespacesdm_1_1tools.md#function-repeatstring) (const std::string & str, [**size\_t**](namespacesdm.md#typedef-size-t) times) <br>_Repeat a string n times._  |








## Public Functions Documentation


### function addIndent 


```cpp
std::string sdm::tools::addIndent (
    std::string s,
    int num_indents
) 
```




**Parameters:**


* `s` input string 
* `num_indents` the number of indentations 
* `indent` the indentation format used 



        

### function getPathTo 


```cpp
std::string sdm::tools::getPathTo (
    std::string base,
    std::string world_name,
    std::string formalism_name
) 
```



### function hasExtension 


```cpp
bool sdm::tools::hasExtension (
    std::string filename,
    std::string extension
) 
```




**Parameters:**


* `filename` the filename 
* `extension` the extension 



**Returns:**

true if the filaname has the extension 'extension' 




**Returns:**

false if the filaname does not have the extension 'extension' 




        

### function indentedOutput 


```cpp
void sdm::tools::indentedOutput (
    std::ostream & outStream,
    const char * message
) 
```



### function repeatString 


```cpp
std::string sdm::tools::repeatString (
    const std::string & str,
    size_t times
) 
```




**Parameters:**


* `str` the substring to replicate. 
* `times` the number of replication 



**Returns:**

the built string 




        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/tools.cpp`