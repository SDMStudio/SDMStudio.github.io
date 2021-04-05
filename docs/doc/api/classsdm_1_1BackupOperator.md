
<NavBar active_item_id="2"/>

# Class sdm::BackupOperator

**template &lt;typename TState, typename TAction, typename TData&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BackupOperator**](classsdm_1_1BackupOperator.md)





* `#include <backup_operator.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef TData | [**data\_type**](classsdm_1_1BackupOperator.md#typedef-data-type)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
| virtual TData | [**backup**](classsdm_1_1BackupOperator.md#function-backup) ([**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; \* vf, TState s, int t) = 0<br> |








## Public Types Documentation


### typedef data\_type 


```cpp
using sdm::BackupOperator< TState, TAction, TData >::data_type =  TData;
```


## Public Functions Documentation


### function backup 


```cpp
virtual TData sdm::BackupOperator::backup (
    ValueFunction < TState, TAction > * vf,
    TState s,
    int t
) = 0
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/backup_operator/backup_operator.hpp`