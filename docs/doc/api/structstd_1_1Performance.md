
# Struct std::Performance

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**Performance**](structstd_1_1Performance.md)





* `#include <types.hpp>`
















## Public Static Functions

| Type | Name |
| ---: | :--- |
|  long long | [**RanMemoryUsed**](structstd_1_1Performance.md#function-ranmemoryused) (struct sysinfo memInfo) <br> |
|  double | [**computeTime**](structstd_1_1Performance.md#function-computetime) (std::chrono::high\_resolution\_clock::time\_point start\_time) <br> |
|  long long | [**totalMemory**](structstd_1_1Performance.md#function-totalmemory) (struct sysinfo memInfo) <br> |







## Public Static Functions Documentation


### function RanMemoryUsed 


```cpp
static inline long long std::Performance::RanMemoryUsed (
    struct sysinfo memInfo
) 
```



### function computeTime 


```cpp
static inline double std::Performance::computeTime (
    std::chrono::high_resolution_clock::time_point start_time
) 
```



### function totalMemory 


```cpp
static inline long long std::Performance::totalMemory (
    struct sysinfo memInfo
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/types.hpp`