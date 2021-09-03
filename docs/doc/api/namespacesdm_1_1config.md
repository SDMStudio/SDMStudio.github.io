
# Namespace sdm::config

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**config**](namespacesdm_1_1config.md)



_Namespace grouping a set of configurations._ 














## Public Attributes

| Type | Name |
| ---: | :--- |
|  const unsigned short | [**BELIEF\_DECIMAL\_PRINT**](namespacesdm_1_1config.md#variable-belief-decimal-print)   = = 5<br>_Number of decimal used to display beliefs._  |
|  const std::string | [**LOG\_SDMS**](namespacesdm_1_1config.md#variable-log-sdms)   = = [**SDMS\_THEME\_1**](namespacesdm_1_1config.md#variable-sdms-theme-1) + "SDMS#&gt;" + NO\_COLOR + " "<br>_Custom parameter for logging._  |
|  const std::string | [**NO\_COLOR**](namespacesdm_1_1config.md#variable-no-color)   = = "\033[0m"<br>_Color code for_ _**No Color**_ __ |
|  const unsigned short | [**OCCUPANCY\_DECIMAL\_PRINT**](namespacesdm_1_1config.md#variable-occupancy-decimal-print)   = = 5<br>_Number of decimal used to display occupancy states._  |
|  const double | [**PRECISION\_BELIEF**](namespacesdm_1_1config.md#variable-precision-belief)   = = 0.001<br>_Precision used to compare beliefs._  |
|  const double | [**PRECISION\_COMPRESSION**](namespacesdm_1_1config.md#variable-precision-compression)   = = 0.1<br>_Precision of the compression._  |
|  const double | [**PRECISION\_MAPPED\_VECTOR**](namespacesdm_1_1config.md#variable-precision-mapped-vector)   = = 0.0001<br>_Precision used to compare Mapped vectors._  |
|  const double | [**PRECISION\_OCCUPANCY\_STATE**](namespacesdm_1_1config.md#variable-precision-occupancy-state)   = = 0.001<br>_Precision used to compare occupancy states._  |
|  const double | [**PRECISION\_SDMS\_VECTOR**](namespacesdm_1_1config.md#variable-precision-sdms-vector)   = = 0.0001<br>_Precision used to compare SDMS vectors._  |
|  const double | [**PRECISION\_VECTO\_INTERFACE**](namespacesdm_1_1config.md#variable-precision-vecto-interface)   = = [**PRECISION\_MAPPED\_VECTOR**](namespacesdm_1_1config.md#variable-precision-mapped-vector)<br>_Precision used to compare vectors interface._  |
|  const std::string | [**PROBLEM\_PATH**](namespacesdm_1_1config.md#variable-problem-path)   = = "/usr/local/share/sdms/world/"<br>_Path to the directory where problems are saved._  |
|  const std::string | [**SDMS\_THEME\_1**](namespacesdm_1_1config.md#variable-sdms-theme-1)   = = "\033[1;36m"<br>_Color code for the main theme._  |
|  const unsigned short | [**VALUE\_DECIMAL\_PRINT**](namespacesdm_1_1config.md#variable-value-decimal-print)   = = 4<br>_Number of decimal used to display values._  |










## Public Attributes Documentation


### variable BELIEF\_DECIMAL\_PRINT 


```cpp
const unsigned short sdm::config::BELIEF_DECIMAL_PRINT;
```



### variable LOG\_SDMS 


```cpp
const std::string sdm::config::LOG_SDMS;
```



### variable NO\_COLOR 


```cpp
const std::string sdm::config::NO_COLOR;
```



### variable OCCUPANCY\_DECIMAL\_PRINT 


```cpp
const unsigned short sdm::config::OCCUPANCY_DECIMAL_PRINT;
```



### variable PRECISION\_BELIEF 


```cpp
const double sdm::config::PRECISION_BELIEF;
```



### variable PRECISION\_COMPRESSION 


```cpp
const double sdm::config::PRECISION_COMPRESSION;
```



### variable PRECISION\_MAPPED\_VECTOR 


```cpp
const double sdm::config::PRECISION_MAPPED_VECTOR;
```



### variable PRECISION\_OCCUPANCY\_STATE 


```cpp
const double sdm::config::PRECISION_OCCUPANCY_STATE;
```



### variable PRECISION\_SDMS\_VECTOR 


```cpp
const double sdm::config::PRECISION_SDMS_VECTOR;
```



### variable PRECISION\_VECTO\_INTERFACE 


```cpp
const double sdm::config::PRECISION_VECTO_INTERFACE;
```



### variable PROBLEM\_PATH 


```cpp
const std::string sdm::config::PROBLEM_PATH;
```



### variable SDMS\_THEME\_1 


```cpp
const std::string sdm::config::SDMS_THEME_1;
```



### variable VALUE\_DECIMAL\_PRINT 


```cpp
const unsigned short sdm::config::VALUE_DECIMAL_PRINT;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/config.hpp`