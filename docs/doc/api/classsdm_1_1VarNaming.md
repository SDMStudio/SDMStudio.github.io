
# Class sdm::VarNaming

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**VarNaming**](classsdm_1_1VarNaming.md)





* `#include <variable_naming.hpp>`





Inherited by the following classes: [sdm::ActionVFMaxplanWCSP](classsdm_1_1ActionVFMaxplanWCSP.md),  [sdm::ActionVFSawtoothWCSP](classsdm_1_1ActionVFSawtoothWCSP.md),  [sdm::DecentralizedLP](classsdm_1_1DecentralizedLP.md)










## Public Functions

| Type | Name |
| ---: | :--- |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumber**](classsdm_1_1VarNaming.md#function-getnumber) (const std::string &) <br>_Get the identifier associated with a given name._  |
|  std::string | [**getVarNameIndividualHistory**](classsdm_1_1VarNaming.md#function-getvarnameindividualhistory) (const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; & ihistory, const [**number**](namespacesdm.md#typedef-number) agent) <br> |
|  std::string | [**getVarNameIndividualHistoryDecisionRule**](classsdm_1_1VarNaming.md#function-getvarnameindividualhistorydecisionrule) (const std::shared\_ptr&lt; Action &gt; &, const std::shared\_ptr&lt; [**HistoryInterface**](classsdm_1_1HistoryInterface.md) &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br>_Get the name associated with a pair of action and individual history._  |
|  std::string | [**getVarNameJointHistoryDecisionRule**](classsdm_1_1VarNaming.md#function-getvarnamejointhistorydecisionrule) (const std::shared\_ptr&lt; Action &gt; &, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) <br>_Get the name associated with a pair of action and joint history._  |
|  std::string | [**getVarNameWeight**](classsdm_1_1VarNaming.md#function-getvarnameweight) ([**number**](namespacesdm.md#typedef-number)) <br>_Get the name of a free variable._  |
|  std::string | [**getVarNameWeightedStateJointHistory**](classsdm_1_1VarNaming.md#function-getvarnameweightedstatejointhistory) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &) <br>_Get the Var Name Weighted_ [_**State**_](classsdm_1_1State.md) __[_**Joint**_](classsdm_1_1Joint.md) _History object._ |
|  void | [**setNumber**](classsdm_1_1VarNaming.md#function-setnumber) (const std::string &, [**number**](namespacesdm.md#typedef-number)) <br>[_**Set**_](structsdm_1_1Set.md) _pair name identifier for a given variable._ |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; std::string, [**number**](namespacesdm.md#typedef-number) &gt; | [**variables**](classsdm_1_1VarNaming.md#variable-variables)  <br>_mapping from variable names to variable identifiers_  |




## Public Functions Documentation


### function getNumber 


```cpp
number sdm::VarNaming::getNumber (
    const std::string &
) 
```




**Parameters:**


* `const` std::string& name 



**Returns:**

number identifier 




        

### function getVarNameIndividualHistory 


```cpp
std::string sdm::VarNaming::getVarNameIndividualHistory (
    const std::shared_ptr< HistoryInterface > & ihistory,
    const number agent
) 
```



### function getVarNameIndividualHistoryDecisionRule 


```cpp
std::string sdm::VarNaming::getVarNameIndividualHistoryDecisionRule (
    const std::shared_ptr< Action > &,
    const std::shared_ptr< HistoryInterface > &,
    const number &
) 
```




**Parameters:**


* `action` 
* `typename` TVector::jhistory\_type::element\_type::ihistory\_type 
* `agent` 



**Returns:**

std::string name 




        

### function getVarNameJointHistoryDecisionRule 


```cpp
std::string sdm::VarNaming::getVarNameJointHistoryDecisionRule (
    const std::shared_ptr< Action > &,
    const std::shared_ptr< JointHistoryInterface > &
) 
```




**Parameters:**


* `action` 
* `const` typename TVector::jhistory\_type& 



**Returns:**

std::string name 




        

### function getVarNameWeight 


```cpp
std::string sdm::VarNaming::getVarNameWeight (
    number
) 
```




**Parameters:**


* `number` identifier of a variable 



**Returns:**

std::string name 




        

### function getVarNameWeightedStateJointHistory 


```cpp
std::string sdm::VarNaming::getVarNameWeightedStateJointHistory (
    const std::shared_ptr< State > &,
    const std::shared_ptr< State > &,
    const std::shared_ptr< JointHistoryInterface > &
) 
```




::: warning Warning:
const TVector& should be something like const std::shared\_ptr&lt;TVector&gt;& or const TVector\*& 

:::



**Returns:**

std::string 




        

### function setNumber 


```cpp
void sdm::VarNaming::setNumber (
    const std::string &,
    number
) 
```




**Parameters:**


* `const` std::string& name 
* `number` identifier 



        
## Protected Attributes Documentation


### variable variables 


```cpp
RecursiveMap<std::string, number> sdm::VarNaming::variables;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/linear_programming/variable_naming.hpp`