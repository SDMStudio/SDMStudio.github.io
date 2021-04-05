
<NavBar active_item_id="2"/>

# File types.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**types.hpp**](types_8hpp.md)

[Go to the source code of this file.](types_8hpp_source.md)

_defining several types_ [More...](#detailed-description)

* `#include <cstddef>`
* `#include <iostream>`
* `#include <unordered_map>`
* `#include <boost/bimap.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |
| namespace | [**std**](namespacestd.md) <br> |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &lt;TState, TAction&gt;<br>_Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._ |
| struct | [**WorldType**](structsdm_1_1WorldType.md) &lt;TState, TAction&gt;<br>_Allows developers to get access to the type of underlying problem that is solved when dealing with a kind of state and action in_ [_**HSVI**_](classsdm_1_1HSVI.md) _. Usage Example :_`WorldType <BeliefState, number>::type` _will return the type_`DiscretePOMDP` _._ |
| struct | [**is\_any**](structstd_1_1is__any.md) &lt;class T, Ts&gt;<br> |













# Detailed Description




**Author:**

Jilles S. Dibangoye 




**Version:**

1.0 




**Date:**

12 Avril 2016


This class provides basic type alias for dpomdp. 

    

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/types.hpp`