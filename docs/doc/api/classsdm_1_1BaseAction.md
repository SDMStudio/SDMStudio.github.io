
# Class sdm::BaseAction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseAction**](classsdm_1_1BaseAction.md)



_A base class inheriting from the Action interface._ [More...](#detailed-description)

* `#include <base_action.hpp>`



Inherits the following classes: Action












## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BaseAction**](classsdm_1_1BaseAction.md#function-baseaction-1-2) () <br> |
|   | [**BaseAction**](classsdm_1_1BaseAction.md#function-baseaction-2-2) (const TAction & action) <br> |
| virtual TAction | [**getAction**](classsdm_1_1BaseAction.md#function-getaction) () const<br>_Get the data corresponding to the stored state._  |
| virtual void | [**setAction**](classsdm_1_1BaseAction.md#function-setaction) (const TAction & action) <br>[_**Set**_](structsdm_1_1Set.md) _the data corresponding to the stored state._ |
| virtual std::string | [**str**](classsdm_1_1BaseAction.md#function-str) () const<br> |
| virtual  | [**~BaseAction**](classsdm_1_1BaseAction.md#function-baseaction) () <br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  TAction | [**action\_**](classsdm_1_1BaseAction.md#variable-action-)  <br> |




# Detailed Description




**Template parameters:**


* `TAction` the type of data used for the action.

This class can be used to instantiate an action represented by any type.


````cpp
BaseState<char> action('a'), action2('b'); // Instanciate an action stored as a character.   
BaseState<float> float_action(0.0), float_action2(0.1); // Instanciate an action stored as a float.  
````

 

    
## Public Functions Documentation


### function BaseAction [1/2]


```cpp
inline sdm::BaseAction::BaseAction () 
```



### function BaseAction [2/2]


```cpp
inline sdm::BaseAction::BaseAction (
    const TAction & action
) 
```



### function getAction 


```cpp
inline virtual TAction sdm::BaseAction::getAction () const
```




**Returns:**

the data 




        

### function setAction 


```cpp
inline virtual void sdm::BaseAction::setAction (
    const TAction & action
) 
```




**Parameters:**


* `state` the data 



        

### function str 


```cpp
inline virtual std::string sdm::BaseAction::str () const
```



### function ~BaseAction 


```cpp
inline virtual sdm::BaseAction::~BaseAction () 
```


## Protected Attributes Documentation


### variable action\_ 


```cpp
TAction sdm::BaseAction< TAction >::action_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/action/base_action.hpp`