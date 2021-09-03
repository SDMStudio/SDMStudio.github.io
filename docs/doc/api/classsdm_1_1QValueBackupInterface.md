
# Class sdm::QValueBackupInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**QValueBackupInterface**](classsdm_1_1QValueBackupInterface.md)





* `#include <qvalue_backup_interface.hpp>`





Inherited by the following classes: [sdm::TabularQValueBackup](classsdm_1_1TabularQValueBackup.md)










## Public Functions

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; Action &gt; | [**getGreedyAction**](classsdm_1_1QValueBackupInterface.md#function-getgreedyaction) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**getValueAt**](classsdm_1_1QValueBackupInterface.md#function-getvalueat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**update**](classsdm_1_1QValueBackupInterface.md#function-update) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |








## Public Functions Documentation


### function getGreedyAction 


```cpp
virtual std::shared_ptr< Action > sdm::QValueBackupInterface::getGreedyAction (
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `number` t : time step 



**Returns:**






        

### function getValueAt 


```cpp
virtual double sdm::QValueBackupInterface::getValueAt (
    const std::shared_ptr< State > & state,
    number t
) = 0
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `number` t : time step 



**Returns:**






        

### function update 


```cpp
virtual double sdm::QValueBackupInterface::update (
    number t
) = 0
```




**Parameters:**


* `number` t : time step 



**Returns:**






        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/backup/qvalue_backup_interface.hpp`