
# Class sdm::DiscreteDistribution

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename T&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md)





* `#include <distribution.hpp>`



Inherits the following classes: [sdm::Distribution](classsdm_1_1Distribution.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md#function-discretedistribution) () <br> |
| virtual double | [**getProbability**](classsdm_1_1DiscreteDistribution.md#function-getprobability) (const T & begin, const T &=0) const<br> |
| virtual T | [**sample**](classsdm_1_1DiscreteDistribution.md#function-sample) () const<br> |
| virtual void | [**setProbability**](classsdm_1_1DiscreteDistribution.md#function-setprobability) (const T & item, double proba) <br> |
| virtual  | [**~DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md#function-discretedistribution) () <br> |

## Public Functions inherited from sdm::Distribution

See [sdm::Distribution](classsdm_1_1Distribution.md)

| Type | Name |
| ---: | :--- |
| virtual double | [**getProbability**](classsdm_1_1Distribution.md#function-getprobability) (const T & begin, const T & end) const = 0<br> |
| virtual T | [**sample**](classsdm_1_1Distribution.md#function-sample) () const = 0<br> |



## Protected Types

| Type | Name |
| ---: | :--- |
| typedef [**bimap\_item\_index**](namespacesdm.md#typedef-bimap-item-index)&lt; T &gt;::value\_type | [**bimap\_pair**](classsdm_1_1DiscreteDistribution.md#typedef-bimap-pair)  <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**bimap\_item\_index**](namespacesdm.md#typedef-bimap-item-index)&lt; T &gt; | [**bimap\_item\_to\_index\_**](classsdm_1_1DiscreteDistribution.md#variable-bimap-item-to-index-)  <br> |
|  std::vector&lt; double &gt; | [**probabilities\_**](classsdm_1_1DiscreteDistribution.md#variable-probabilities-)  <br> |








## Public Functions Documentation


### function DiscreteDistribution 


```cpp
sdm::DiscreteDistribution::DiscreteDistribution () 
```



### function getProbability 


```cpp
virtual double sdm::DiscreteDistribution::getProbability (
    const T & begin,
    const T &=0
) const
```


Implements [*sdm::Distribution::getProbability*](classsdm_1_1Distribution.md#function-getprobability)


### function sample 


```cpp
virtual T sdm::DiscreteDistribution::sample () const
```


Implements [*sdm::Distribution::sample*](classsdm_1_1Distribution.md#function-sample)


### function setProbability 


```cpp
virtual void sdm::DiscreteDistribution::setProbability (
    const T & item,
    double proba
) 
```



### function ~DiscreteDistribution 


```cpp
inline virtual sdm::DiscreteDistribution::~DiscreteDistribution () 
```


## Protected Types Documentation


### typedef bimap\_pair 


```cpp
typedef bimap_item_index<T>::value_type sdm::DiscreteDistribution< T >::bimap_pair;
```


## Protected Attributes Documentation


### variable bimap\_item\_to\_index\_ 


```cpp
bimap_item_index<T> sdm::DiscreteDistribution< T >::bimap_item_to_index_;
```



### variable probabilities\_ 


```cpp
std::vector<double> sdm::DiscreteDistribution< T >::probabilities_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/distribution.hpp`