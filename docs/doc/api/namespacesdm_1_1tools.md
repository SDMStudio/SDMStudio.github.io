
# Namespace sdm::tools

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**tools**](namespacesdm_1_1tools.md)



_Namespace grouping different kind of tools._ 
















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::string | [**addIndent**](namespacesdm_1_1tools.md#function-addindent) (std::string input\_string, int num\_indents=1) <br>_Add indentation to an input string._  |
|  std::vector&lt; TKey &gt; | [**extractKeys**](namespacesdm_1_1tools.md#function-extractkeys) (const std::map&lt; TKey, TValue &gt; & input\_map) <br>_Extract the keys contained in a map._  |
|  std::vector&lt; TValue &gt; | [**extractValues**](namespacesdm_1_1tools.md#function-extractvalues) (const std::map&lt; TKey, TValue &gt; & input\_map) <br>_Extract the values contained in a map._  |
|  std::string | [**getPathTo**](namespacesdm_1_1tools.md#function-getpathto) (std::string base, std::string world\_name, std::string formalism\_name) <br>_Concatenate strings in order to create the path to a specific problem._  |
|  bool | [**hasExtension**](namespacesdm_1_1tools.md#function-hasextension) (std::string filename, std::string extension) <br>_Compare the extension of a file with a given extension._  |
|  void | [**indentedOutput**](namespacesdm_1_1tools.md#function-indentedoutput) (std::ostream & outStream, const char \* message, int num\_indent=1) <br>_Add indentation to an output stream._  |
|  std::string | [**repeatString**](namespacesdm_1_1tools.md#function-repeatstring) (const std::string & str, [**size\_t**](namespacesdm.md#typedef-size-t) times) <br>_Repeat a string n times._  |
|  std::vector&lt; T &gt; | [**set2vector**](namespacesdm_1_1tools.md#function-set2vector) (const std::set&lt; T &gt; & set) <br>_Copy values contained in a std::set into a std::vector._  |








## Public Functions Documentation


### function addIndent 


```cpp
std::string sdm::tools::addIndent (
    std::string input_string,
    int num_indents=1
) 
```




**Parameters:**


* `input_string` the string 
* `num_indents` the number of indentations 
* `indent` the indentation format used 



        

### function extractKeys 


```cpp
template<typename TKey typename TKey, typename TValue typename TValue>
std::vector< TKey > sdm::tools::extractKeys (
    const std::map< TKey, TValue > & input_map
) 
```




**Template parameters:**


* `TKey` the type of keys 
* `TValue` the type of values 



**Parameters:**


* `input_map` the map 



**Returns:**

the list of existing keys 




        

### function extractValues 


```cpp
template<typename TKey typename TKey, typename TValue typename TValue>
std::vector< TValue > sdm::tools::extractValues (
    const std::map< TKey, TValue > & input_map
) 
```




**Template parameters:**


* `TKey` the type of keys 
* `TValue` the type of values 



**Parameters:**


* `input_map` the map 



**Returns:**

the list of existing values 




        

### function getPathTo 


```cpp
std::string sdm::tools::getPathTo (
    std::string base,
    std::string world_name,
    std::string formalism_name
) 
```


Exemple:


````cpp
std::cout << getPathTo("/usr/local/share/sdms/world", "tiger", "pomdp") << std::endl;
// OUTPUT : /usr/local/share/sdms/world/pomdp/tiger.pomdp
````





**Parameters:**


* `base` the repository that contains problems definitions 
* `world_name` the name of the problem 
* `formalism_name` the formalism 



**Returns:**

std::string the complete path to the problem file 




        

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

true if the filename has the extension 'extension' 




**Returns:**

false if the filename does not have the extension 'extension' 




        

### function indentedOutput 


```cpp
void sdm::tools::indentedOutput (
    std::ostream & outStream,
    const char * message,
    int num_indent=1
) 
```



### function repeatString 


```cpp
std::string sdm::tools::repeatString (
    const std::string & str,
    size_t times
) 
```


Example:


````cpp
std::cout << repeatString("bla", 3) << std::endl;
// OUTPUT : blablabla
````





**Parameters:**


* `str` the substring to replicate. 
* `times` the number of replication 



**Returns:**

the built string 




        

### function set2vector 


```cpp
template<typename T typename T>
std::vector< T > sdm::tools::set2vector (
    const std::set< T > & set
) 
```




**Template parameters:**


* `T` the type of items 



**Parameters:**


* `set` the set 



**Returns:**

the vector that contains items in the set 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/tools.hpp`