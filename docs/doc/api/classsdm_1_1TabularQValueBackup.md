
# Class sdm::TabularQValueBackup

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md)





* `#include <tabular_qvalue_backup.hpp>`



Inherits the following classes: [sdm::QValueBackupInterface](classsdm_1_1QValueBackupInterface.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md#function-tabularqvaluebackup-1-2) () <br> |
|   | [**TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md#function-tabularqvaluebackup-2-2) (std::shared\_ptr&lt; [**ExperienceMemory**](classsdm_1_1ExperienceMemory.md) &gt; experience\_memory, std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt;&gt;&gt; q\_value\_table, std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt;&gt;&gt; target\_q\_value\_table, double discount) <br> |
| virtual std::shared\_ptr&lt; Action &gt; | [**getGreedyAction**](classsdm_1_1TabularQValueBackup.md#function-getgreedyaction) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual double | [**getValueAt**](classsdm_1_1TabularQValueBackup.md#function-getvalueat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual double | [**update**](classsdm_1_1TabularQValueBackup.md#function-update) ([**number**](namespacesdm.md#typedef-number) t) <br> |
| virtual  | [**~TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md#function-tabularqvaluebackup) () <br> |

## Public Functions inherited from sdm::QValueBackupInterface

See [sdm::QValueBackupInterface](classsdm_1_1QValueBackupInterface.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; Action &gt; | [**getGreedyAction**](classsdm_1_1QValueBackupInterface.md#function-getgreedyaction) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**getValueAt**](classsdm_1_1QValueBackupInterface.md#function-getvalueat) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual double | [**update**](classsdm_1_1QValueBackupInterface.md#function-update) ([**number**](namespacesdm.md#typedef-number) t) = 0<br> |







## Protected Attributes

| Type | Name |
| ---: | :--- |
|  double | [**discount\_**](classsdm_1_1TabularQValueBackup.md#variable-discount-)  <br> |
|  std::shared\_ptr&lt; [**ExperienceMemory**](classsdm_1_1ExperienceMemory.md) &gt; | [**experience\_memory\_**](classsdm_1_1TabularQValueBackup.md#variable-experience-memory-)  <br> |
|  std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt;&gt; &gt; | [**q\_value\_table\_**](classsdm_1_1TabularQValueBackup.md#variable-q-value-table-)  <br> |
|  std::shared\_ptr&lt; [**QValueFunction**](classsdm_1_1QValueFunction.md)&lt;&gt; &gt; | [**target\_q\_value\_table\_**](classsdm_1_1TabularQValueBackup.md#variable-target-q-value-table-)  <br> |








## Public Functions Documentation


### function TabularQValueBackup [1/2]


```cpp
sdm::TabularQValueBackup::TabularQValueBackup () 
```



### function TabularQValueBackup [2/2]


```cpp
sdm::TabularQValueBackup::TabularQValueBackup (
    std::shared_ptr< ExperienceMemory > experience_memory,
    std::shared_ptr< QValueFunction <>> q_value_table,
    std::shared_ptr< QValueFunction <>> target_q_value_table,
    double discount
) 
```



### function getGreedyAction 


```cpp
virtual std::shared_ptr< Action > sdm::TabularQValueBackup::getGreedyAction (
    const std::shared_ptr< State > & state,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `number` t : time step 



**Returns:**






        
Implements [*sdm::QValueBackupInterface::getGreedyAction*](classsdm_1_1QValueBackupInterface.md#function-getgreedyaction)


### function getValueAt 


```cpp
virtual double sdm::TabularQValueBackup::getValueAt (
    const std::shared_ptr< State > & state,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `number` t : time step 



**Returns:**






        
Implements [*sdm::QValueBackupInterface::getValueAt*](classsdm_1_1QValueBackupInterface.md#function-getvalueat)


### function update 


```cpp
virtual double sdm::TabularQValueBackup::update (
    number t
) 
```




**Parameters:**


* `number` t : time step 



**Returns:**






        
Implements [*sdm::QValueBackupInterface::update*](classsdm_1_1QValueBackupInterface.md#function-update)


### function ~TabularQValueBackup 


```cpp
virtual sdm::TabularQValueBackup::~TabularQValueBackup () 
```


## Protected Attributes Documentation


### variable discount\_ 


```cpp
double sdm::TabularQValueBackup::discount_;
```



### variable experience\_memory\_ 


```cpp
std::shared_ptr<ExperienceMemory> sdm::TabularQValueBackup::experience_memory_;
```



### variable q\_value\_table\_ 


```cpp
std::shared_ptr<QValueFunction<> > sdm::TabularQValueBackup::q_value_table_;
```



### variable target\_q\_value\_table\_ 


```cpp
std::shared_ptr<QValueFunction<> > sdm::TabularQValueBackup::target_q_value_table_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/backup/tabular_qvalue_backup.hpp`