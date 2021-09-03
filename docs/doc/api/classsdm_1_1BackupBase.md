
# Class sdm::BackupBase

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;typename TData&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BackupBase**](classsdm_1_1BackupBase.md)





* `#include <backup_base.hpp>`



Inherits the following classes: [sdm::BackupInterface](classsdm_1_1BackupInterface.md)




















## Public Functions

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











## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; | [**world\_**](classsdm_1_1BackupBase.md#variable-world-)  <br> |












## Public Functions Documentation


### function BackupBase [1/2]


```cpp
sdm::BackupBase::BackupBase () 
```



### function BackupBase [2/2]


```cpp
sdm::BackupBase::BackupBase (
    const std::shared_ptr< SolvableByHSVI > & world
) 
```



### function backup 


```cpp
virtual TData sdm::BackupBase::backup (
    const std::shared_ptr< ValueFunction > & vf,
    const std::shared_ptr< State > & state,
    const std::shared_ptr< Action > & action,
    number t
) = 0
```




**Parameters:**


* `const` std::shared\_ptr&lt;ValueFunction&gt;& vf : Value function 
* `const` std::shared\_ptr&lt;State&gt;& state : current state 
* `const` std::shared\_ptr&lt;Action&gt;& : action 
* `number` t : time step 



**Returns:**

TData 




        
Implements [*sdm::BackupInterface::backup*](classsdm_1_1BackupInterface.md#function-backup)


### function ~BackupBase 


```cpp
virtual sdm::BackupBase::~BackupBase () 
```


## Protected Attributes Documentation


### variable world\_ 


```cpp
std::shared_ptr<SolvableByHSVI> sdm::BackupBase< TData >::world_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/backup/backup_base.hpp`