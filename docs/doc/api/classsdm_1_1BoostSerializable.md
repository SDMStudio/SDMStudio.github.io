
# Class sdm::BoostSerializable

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class SerializableClass&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BoostSerializable**](classsdm_1_1BoostSerializable.md)





* `#include <boost_serializable.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BoostSerializable**](classsdm_1_1BoostSerializable.md#function-boostserializable) () <br> |
|  void | [**load**](classsdm_1_1BoostSerializable.md#function-load) (std::string filename) <br>_Load a value function from a file. The extension of the file will indicate the type of formatage for reading (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |
|  void | [**save**](classsdm_1_1BoostSerializable.md#function-save) (std::string filename) <br>_Save a value function into a file. The extension of the file will indicate the type of formatage for recording (_ `.txt` _= text format, '.xml' = XML format, other = binary format)._ |






## Protected Functions

| Type | Name |
| ---: | :--- |
|  void | [**serialize**](classsdm_1_1BoostSerializable.md#function-serialize) (Archive & archive, const unsigned int version) <br> |


## Public Functions Documentation


### function BoostSerializable 


```cpp
inline sdm::BoostSerializable::BoostSerializable () 
```



### function load 


```cpp
inline void sdm::BoostSerializable::load (
    std::string filename
) 
```




**Parameters:**


* `filename` the filename 



        

### function save 


```cpp
inline void sdm::BoostSerializable::save (
    std::string filename
) 
```




**Parameters:**


* `filename` the filename 



        
## Protected Functions Documentation


### function serialize 


```cpp
template<class Archive class Archive>
inline void sdm::BoostSerializable::serialize (
    Archive & archive,
    const unsigned int version
) 
```

## Friends Documentation



### friend access 


```cpp
friend class sdm::BoostSerializable::access () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/public/boost_serializable.hpp`