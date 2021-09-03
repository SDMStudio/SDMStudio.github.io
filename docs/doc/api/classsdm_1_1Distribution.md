
# Class sdm::Distribution

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Distribution**](classsdm_1_1Distribution.md)





* `#include <distribution.hpp>`



Inherits the following classes: std::enable_shared_from_this< Distribution< T > >


Inherited by the following classes: [sdm::DiscreteDistribution](classsdm_1_1DiscreteDistribution.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual double | [**getProbability**](classsdm_1_1Distribution.md#function-getprobability) (const T & begin, const T & end) const = 0<br> |
| virtual T | [**sample**](classsdm_1_1Distribution.md#function-sample) () const = 0<br> |








## Public Functions Documentation


### function getProbability 


```cpp
virtual double sdm::Distribution::getProbability (
    const T & begin,
    const T & end
) const = 0
```



### function sample 


```cpp
virtual T sdm::Distribution::sample () const = 0
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/distribution.hpp`