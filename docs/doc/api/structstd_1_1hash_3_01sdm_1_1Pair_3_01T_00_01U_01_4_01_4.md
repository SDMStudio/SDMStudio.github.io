
# Struct std::hash&lt; sdm::Pair&lt; T, U &gt; &gt;

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename T typename T, typename U typename U&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**hash&lt; sdm::Pair&lt; T, U &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md)





* `#include <pair.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**sdm::Pair**](namespacesdm.md#typedef-pair)&lt; T, U &gt; | [**argument\_type**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md#typedef-argument-type)  <br> |
| typedef std::size\_t | [**result\_type**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md#typedef-result-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**result\_type**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md#typedef-result-type) | [**operator()**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md#function-operator()) (const [**argument\_type**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md#typedef-argument-type) & in) const<br> |








## Public Types Documentation


### typedef argument\_type 


```cpp
typedef sdm::Pair<T, U> std::hash< sdm::Pair< T, U > >::argument_type;
```



### typedef result\_type 


```cpp
typedef std::size_t std::hash< sdm::Pair< T, U > >::result_type;
```


## Public Functions Documentation


### function operator() 


```cpp
inline result_type std::hash< sdm::Pair< T, U > >::operator() (
    const argument_type & in
) const
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/pair.hpp`