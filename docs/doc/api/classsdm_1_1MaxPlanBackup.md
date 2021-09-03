
# Class sdm::MaxPlanBackup

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**MaxPlanBackup**](classsdm_1_1MaxPlanBackup.md)





* `#include <maxplan_backup.hpp>`



Inherits the following classes: [sdm::BackupBase](classsdm_1_1BackupBase.md)








## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; | [**TData**](classsdm_1_1MaxPlanBackup.md#typedef-tdata)  <br> |
















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**MaxPlanBackup**](classsdm_1_1MaxPlanBackup.md#function-maxplanbackup-1-2) () <br> |
|   | [**MaxPlanBackup**](classsdm_1_1MaxPlanBackup.md#function-maxplanbackup-2-2) (const std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; &) <br> |
| virtual [**TData**](classsdm_1_1MaxPlanBackup.md#typedef-tdata) | [**backup**](classsdm_1_1MaxPlanBackup.md#function-backup) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |

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







## Protected Functions

| Type | Name |
| ---: | :--- |
|  [**TData**](classsdm_1_1MaxPlanBackup.md#typedef-tdata) | [**setHyperplanBelief**](classsdm_1_1MaxPlanBackup.md#function-sethyperplanbelief) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |
|  [**TData**](classsdm_1_1MaxPlanBackup.md#typedef-tdata) | [**setHyperplanOccupancy**](classsdm_1_1MaxPlanBackup.md#function-sethyperplanoccupancy) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) <br> |








## Public Types Documentation


### typedef TData 


```cpp
using sdm::MaxPlanBackup::TData =  std::shared_ptr<State>;
```


## Public Functions Documentation


### function MaxPlanBackup [1/2]


```cpp
sdm::MaxPlanBackup::MaxPlanBackup () 
```



### function MaxPlanBackup [2/2]


```cpp
sdm::MaxPlanBackup::MaxPlanBackup (
    const std::shared_ptr< SolvableByHSVI > &
) 
```



### function backup 


```cpp
virtual TData sdm::MaxPlanBackup::backup (
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

## Protected Functions Documentation


### function setHyperplanBelief 


```cpp
TData sdm::MaxPlanBackup::setHyperplanBelief (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```



### function setHyperplanOccupancy 


```cpp
TData sdm::MaxPlanBackup::setHyperplanOccupancy (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/backup/maxplan_backup.hpp`