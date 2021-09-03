
# Class sdm::InitializerFactory

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**InitializerFactory**](classsdm_1_1InitializerFactory.md)



_The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use : std::cout &lt;&lt;_[_**InitializerFactory::available()**_](classsdm_1_1InitializerFactory.md#function-available) _&lt;&lt; std::endl;._

* `#include <initializers.hpp>`
















## Public Static Functions

| Type | Name |
| ---: | :--- |
|  void | [**addToRegistry**](classsdm_1_1InitializerFactory.md#function-addtoregistry) (std::string name) <br> |
|  std::vector&lt; std::string &gt; | [**available**](classsdm_1_1InitializerFactory.md#function-available) () <br> |
|  [**map\_type**](classsdm_1_1InitializerFactory.md#typedef-map-type) & | [**getRegistry**](classsdm_1_1InitializerFactory.md#function-getregistry) () <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**make**](classsdm_1_1InitializerFactory.md#function-make) (std::string name, std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |

## Protected Types

| Type | Name |
| ---: | :--- |
| typedef std::map&lt; std::string, std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; std::shared\_ptr | [**map\_type**](classsdm_1_1InitializerFactory.md#typedef-map-type)  <br> |



## Protected Static Attributes

| Type | Name |
| ---: | :--- |
|  [**map\_type**](classsdm_1_1InitializerFactory.md#typedef-map-type) | [**registry\_**](classsdm_1_1InitializerFactory.md#variable-registry-)   = = {
            {"Min", &createInstance&lt;[**MinInitializer**](classsdm_1_1MinInitializer.md)&gt;},
            {"Max", &createInstance&lt;[**MaxInitializer**](classsdm_1_1MaxInitializer.md)&gt;},
            {"Blind", &createInstance&lt;[**BlindInitializer**](classsdm_1_1BlindInitializer.md)&gt;},
            {"Zero", &createInstance&lt;[**ZeroInitializer**](classsdm_1_1ZeroInitializer.md)&lt;&gt;&gt;},
            
            {"MdpHsvi", &createInstanceTabMDPInit},
            {"MdpValueIteration", &createInstanceMDPValueIterationInit},
            {"PomdpHsvi", &createInstanceTabPOMDPInit},
        }<br> |



## Public Static Functions Documentation


### function addToRegistry 


```cpp
template<class TInitializer class TInitializer>
static inline void sdm::InitializerFactory::addToRegistry (
    std::string name
) 
```



### function available 


```cpp
static inline std::vector< std::string > sdm::InitializerFactory::available () 
```



### function getRegistry 


```cpp
static inline map_type & sdm::InitializerFactory::getRegistry () 
```



### function make 


```cpp
static inline std::shared_ptr< Initializer > sdm::InitializerFactory::make (
    std::string name,
    std::shared_ptr< SolvableByHSVI > world
) 
```


## Protected Types Documentation


### typedef map\_type 


```cpp
typedef std::map<std::string, std::shared_ptr<Initializer> std::shared_ptr sdm::InitializerFactory::map_type;
```


## Protected Static Attributes Documentation


### variable registry\_ 


```cpp
map_type sdm::InitializerFactory::registry_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializers.hpp`