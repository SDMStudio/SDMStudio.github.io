
<NavBar active_item_id="2"/>

# File recursive\_map.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**struct**](dir_8910f640002ec96a2876ed8b2614abb5.md) **>** [**recursive\_map.hpp**](recursive__map_8hpp.md)

[Go to the source code of this file.](recursive__map_8hpp_source.md)



* `#include <map>`
* `#include <vector>`
* `#include <sdm/utils/struct/recursive_map.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**RecursiveMap**](classsdm_1_1RecursiveMap.md) &lt;class T0, class T1, Ts&gt;<br>_The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_  |
| class | [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) &lt;class T0, class T1&gt;<br>[_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._ |
| class | [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) &lt;class T0, class T1, class T2, Ts&gt;<br> |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::map&lt; K, V &gt; | [**map\_t**](recursive__map_8hpp.md#typedef-map-t)  <br> |












## Public Types Documentation


### typedef map\_t 


```cpp
using map_t =  std::map<K, V>;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/struct/recursive_map.hpp`