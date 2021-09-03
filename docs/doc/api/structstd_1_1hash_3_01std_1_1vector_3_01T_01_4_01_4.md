
# Struct std::hash&lt; std::vector&lt; T &gt; &gt;

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename T typename T&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**hash&lt; std::vector&lt; T &gt; &gt;**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md)





* `#include <vector.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::vector&lt; T &gt; | [**argument\_type**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md#typedef-argument-type)  <br> |
| typedef std::size\_t | [**result\_type**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md#typedef-result-type) | [**operator()**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md#function-operator()) ([**argument\_type**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md#typedef-argument-type) const & in) const<br> |








## Public Types Documentation


### typedef argument\_type 


```cpp
typedef std::vector<T> std::hash< std::vector< T > >::argument_type;
```



### typedef result\_type 


```cpp
typedef std::size_t std::hash< std::vector< T > >::result_type;
```


## Public Functions Documentation


### function operator() 


```cpp
inline result_type std::hash< std::vector< T > >::operator() (
    argument_type const & in
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/vector.hpp`