
# Class std::inheritable\_enable\_shared\_from\_this

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


**template &lt;class T&gt;**


[**Class List**](annotated.md) **>** [**std**](namespacestd.md) **>** [**inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md)





* `#include <types.hpp>`



Inherits the following classes: [std::MultipleInheritableEnableSharedFromThis](classstd_1_1MultipleInheritableEnableSharedFromThis.md)
















## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; Down &gt; | [**downcasted\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md#function-downcasted-shared-from-this) () <br> |
|  std::shared\_ptr&lt; T &gt; | [**shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md#function-shared-from-this) () <br> |

## Public Functions inherited from std::MultipleInheritableEnableSharedFromThis

See [std::MultipleInheritableEnableSharedFromThis](classstd_1_1MultipleInheritableEnableSharedFromThis.md)

| Type | Name |
| ---: | :--- |
| virtual  | [**~MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md#function-multipleinheritableenablesharedfromthis) () <br> |















## Public Functions Documentation


### function downcasted\_shared\_from\_this 


```cpp
template<class Down class Down>
inline std::shared_ptr< Down > std::inheritable_enable_shared_from_this::downcasted_shared_from_this () 
```



### function shared\_from\_this 


```cpp
inline std::shared_ptr< T > std::inheritable_enable_shared_from_this::shared_from_this () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/types.hpp`