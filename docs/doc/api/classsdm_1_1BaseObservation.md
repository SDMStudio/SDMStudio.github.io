
# Class sdm::BaseObservation

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TObservation typename TObservation&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BaseObservation**](classsdm_1_1BaseObservation.md)



_A base class inheriting from the_ [_**Observation**_](classsdm_1_1Observation.md) _interface._[More...](#detailed-description)

* `#include <base_observation.hpp>`



Inherits the following classes: [sdm::Observation](classsdm_1_1Observation.md)




























## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**BaseObservation**](classsdm_1_1BaseObservation.md#function-baseobservation-1-2) () <br> |
|   | [**BaseObservation**](classsdm_1_1BaseObservation.md#function-baseobservation-2-2) (const TObservation & item) <br> |
| virtual TObservation | [**getObservation**](classsdm_1_1BaseObservation.md#function-getobservation) () const<br>_Get the data corresponding to the stored observation._  |
| virtual void | [**setObservation**](classsdm_1_1BaseObservation.md#function-setobservation) (const TObservation & state) <br>[_**Set**_](structsdm_1_1Set.md) _the data corresponding to the stored observation._ |
| virtual std::string | [**str**](classsdm_1_1BaseObservation.md#function-str) () const<br>_Get a string describing the current item._  |
| virtual  | [**~BaseObservation**](classsdm_1_1BaseObservation.md#function-baseobservation) () <br> |

## Public Functions inherited from sdm::Observation

See [sdm::Observation](classsdm_1_1Observation.md)

| Type | Name |
| ---: | :--- |
| virtual std::string | [**str**](classsdm_1_1Observation.md#function-str) () const = 0<br>_Get a string describing the current item._  |
| virtual  | [**~Observation**](classsdm_1_1Observation.md#function-observation) () <br> |

## Public Functions inherited from sdm::Item

See [sdm::Item](classsdm_1_1Item.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**getPointer**](classsdm_1_1Item.md#function-getpointer) () <br>_Get the shared\_ptr on current (this) item._  |
| virtual bool | [**isBaseItem**](classsdm_1_1Item.md#function-isbaseitem) () <br> |
| virtual std::string | [**str**](classsdm_1_1Item.md#function-str) () const = 0<br>_Get a string describing the current item._  |
|  std::shared\_ptr&lt; T &gt; | [**to**](classsdm_1_1Item.md#function-to) () <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**toAction**](classsdm_1_1Item.md#function-toaction) () <br>_Cast the item into a pointer on action._  |
| virtual std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; | [**toItem**](classsdm_1_1Item.md#function-toitem) () <br>_Cast the item into a pointer on item._  |
| virtual std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**toObservation**](classsdm_1_1Item.md#function-toobservation) () <br>_Cast the item into a pointer on observation._  |
| virtual std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**toState**](classsdm_1_1Item.md#function-tostate) () <br>_Cast the item into a pointer on state._  |

## Public Functions inherited from std::inheritable_enable_shared_from_this

See [std::inheritable\_enable\_shared\_from\_this](classstd_1_1inheritable__enable__shared__from__this.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; Down &gt; | [**downcasted\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md#function-downcasted-shared-from-this) () <br> |
|  std::shared\_ptr&lt; T &gt; | [**shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md#function-shared-from-this) () <br> |

## Public Functions inherited from std::MultipleInheritableEnableSharedFromThis

See [std::MultipleInheritableEnableSharedFromThis](classstd_1_1MultipleInheritableEnableSharedFromThis.md)

| Type | Name |
| ---: | :--- |
| virtual  | [**~MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md#function-multipleinheritableenablesharedfromthis) () <br> |
















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  TObservation | [**observation\_**](classsdm_1_1BaseObservation.md#variable-observation-)  <br> |




















# Detailed Description




**Template parameters:**


* `TObservation` the type of data used for the observation.

This class can be used to instantiate an observation represented by any type. 
````cpp
BaseObservation<char> obs('a'), obs2('b'); // Instanciate an observation stored as a character.   
BaseObservation<float> float_obs(0.0), float_obs2(0.1); // Instanciate an observation stored as a float.   
````

 

    
## Public Functions Documentation


### function BaseObservation [1/2]


```cpp
sdm::BaseObservation::BaseObservation () 
```



### function BaseObservation [2/2]


```cpp
sdm::BaseObservation::BaseObservation (
    const TObservation & item
) 
```



### function getObservation 


```cpp
virtual TObservation sdm::BaseObservation::getObservation () const
```




**Returns:**

the data 




        

### function setObservation 


```cpp
virtual void sdm::BaseObservation::setObservation (
    const TObservation & state
) 
```




**Parameters:**


* `state` the data 



        

### function str 


```cpp
virtual std::string sdm::BaseObservation::str () const
```




**Returns:**

std::string the description of the item 




        
Implements [*sdm::Observation::str*](classsdm_1_1Observation.md#function-str)


### function ~BaseObservation 


```cpp
virtual sdm::BaseObservation::~BaseObservation () 
```


## Protected Attributes Documentation


### variable observation\_ 


```cpp
TObservation sdm::BaseObservation< TObservation >::observation_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/core/observation/base_observation.hpp`