
# Class sdm::BackupInterface

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class TData&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**BackupInterface**](classsdm_1_1BackupInterface.md)





* `#include <backup_interface.hpp>`



Inherits the following classes: [sdm::BackupInterfaceForValueFunction](classsdm_1_1BackupInterfaceForValueFunction.md)


Inherited by the following classes: [sdm::BackupBase](classsdm_1_1BackupBase.md)














## Public Functions

| Type | Name |
| ---: | :--- |
| virtual TData | [**backup**](classsdm_1_1BackupInterface.md#function-backup) (const std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; & vf, const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & state, const std::shared\_ptr&lt; Action &gt; & action, [**number**](namespacesdm.md#typedef-number) t) = 0<br> |
















## Public Functions Documentation


### function backup 


```cpp
virtual TData sdm::BackupInterface::backup (
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




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/backup/backup_interface.hpp`