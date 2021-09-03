
# Class sdm::TensorImpl

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename... I&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TensorImpl**](classsdm_1_1TensorImpl.md)



_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._ [More...](#detailed-description)

* `#include <tensor_impl.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::string | [**str**](classsdm_1_1TensorImpl.md#function-str) () const = 0<br> |








# Detailed Description




**Template parameters:**


* `I` Type of the index. 
* `T` Type of the values. 



    
## Public Functions Documentation


### function str 


```cpp
virtual std::string sdm::TensorImpl::str () const = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_algebra/tensor_impl.hpp`