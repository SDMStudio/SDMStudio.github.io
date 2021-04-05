
<NavBar active_item_id="2"/>

# Class sdm::ClassicBellmanBackupOperator

**template &lt;typename TState typename TState, typename TAction typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ClassicBellmanBackupOperator**](classsdm_1_1ClassicBellmanBackupOperator.md)





* `#include <backup_operator.hpp>`



Inherits the following classes: [sdm::BackupOperator](classsdm_1_1BackupOperator.md)









## Public Types inherited from sdm::BackupOperator

See [sdm::BackupOperator](classsdm_1_1BackupOperator.md)

| Type | Name |
| ---: | :--- |
| typedef TData | [**data\_type**](classsdm_1_1BackupOperator.md#typedef-data-type)  <br> |







## Public Functions

| Type | Name |
| ---: | :--- |
| virtual double | [**backup**](classsdm_1_1ClassicBellmanBackupOperator.md#function-backup) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf, TState s, int t) <br> |

## Public Functions inherited from sdm::BackupOperator

See [sdm::BackupOperator](classsdm_1_1BackupOperator.md)

| Type | Name |
| ---: | :--- |
| virtual TData | [**backup**](classsdm_1_1BackupOperator.md#function-backup) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf, TState s, int t) = 0<br> |















## Public Functions Documentation


### function backup 


```cpp
inline virtual double sdm::ClassicBellmanBackupOperator::backup (
    ValueFunction < TState, TAction > * vf,
    TState s,
    int t
) 
```


Implements [*sdm::BackupOperator::backup*](classsdm_1_1BackupOperator.md#function-backup)


------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/backup_operator/backup_operator.hpp`