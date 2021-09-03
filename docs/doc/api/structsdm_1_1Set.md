
# Struct sdm::Set

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class T class T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Set**](structsdm_1_1Set.md)





* `#include <set.hpp>`



Inherits the following classes: std::unordered_set< std::shared_ptr< T >, hash_container< T >, equal_container< T > >












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**Set**](structsdm_1_1Set.md#function-set) () <br> |
|  bool | [**contains**](structsdm_1_1Set.md#function-contains) (std::shared\_ptr&lt; T &gt; &) <br> |








## Public Functions Documentation


### function Set 


```cpp
sdm::Set::Set () 
```



### function contains 


```cpp
bool sdm::Set::contains (
    std::shared_ptr< T > &
) 
```

## Friends Documentation



### friend operator&lt;&lt; 


```cpp
inline friend std::ostream & sdm::Set::operator<< (
    std::ostream & os,
    const vector_container & container
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/set.hpp`