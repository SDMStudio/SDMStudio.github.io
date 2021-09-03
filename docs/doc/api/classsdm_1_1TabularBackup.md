
# Class sdm::TabularBackup

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TabularBackup**](classsdm_1_1TabularBackup.md)





* `#include <tabular_backup.hpp>`



Inherits the following classes: [sdm::BackupBase](classsdm_1_1BackupBase.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef double | [**TData**](classsdm_1_1TabularBackup.md#typedef-tdata)  <br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TabularBackup**](classsdm_1_1TabularBackup.md#function-tabularbackup-1-2) () <br> |
|   | [**TabularBackup**](classsdm_1_1TabularBackup.md#function-tabularbackup-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world) <br> |
| virtual [**TData**](classsdm_1_1TabularBackup.md#typedef-tdata) | [**backup**](classsdm_1_1TabularBackup.md#function-backup) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |

## Public Functions inherited from sdm::BackupBase

See [sdm::BackupBase](classsdm_1_1BackupBase.md)

| Type | Name |
| ---: | :--- |
|   | [**BackupBase**](classsdm_1_1BackupBase.md#function-backupbase-1-2) () <br> |
|   | [**BackupBase**](classsdm_1_1BackupBase.md#function-backupbase-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; & world) <br> |
| virtual TData | [**backup**](classsdm_1_1BackupBase.md#function-backup) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
| virtual  | [**~BackupBase**](classsdm_1_1BackupBase.md#function-backupbase) () <br> |

## Public Functions inherited from sdm::BackupInterface

See [sdm::BackupInterface](classsdm_1_1BackupInterface.md)

| Type | Name |
| ---: | :--- |
| virtual TData | [**backup**](classsdm_1_1BackupInterface.md#function-backup) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |















## Protected Attributes inherited from sdm::BackupBase

See [sdm::BackupBase](classsdm_1_1BackupBase.md)

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1BackupBase.md#variable-world-)  <br> |















## Public Types Documentation


### typedef TData 


```cpp
using sdm::TabularBackup::TData =  double;
```


## Public Functions Documentation


### function TabularBackup [1/2]


```cpp
sdm::TabularBackup::TabularBackup () 
```



### function TabularBackup [2/2]


```cpp
sdm::TabularBackup::TabularBackup (
    const std::shared_ptr< SolvableByHSVI > & world
) 
```



### function backup 


```cpp
virtual TData sdm::TabularBackup::backup (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `const` std::shared\_ptr&lt;Action&gt;& : action 
* `number` t : time step 



**Returns:**

TData 




        
Implements [*sdm::BackupBase::backup*](classsdm_1_1BackupBase.md#function-backup)


------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/backup/tabular_backup.hpp`