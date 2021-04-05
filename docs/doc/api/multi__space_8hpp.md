
<NavBar active_item_id="2"/>

# File multi\_space.hpp


[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**multi\_space.hpp**](multi__space_8hpp.md)

[Go to the source code of this file.](multi__space_8hpp_source.md)

_File implementing MultiSpace class._ [More...](#detailed-description)

* `#include <vector>`
* `#include <boost/bimap.hpp>`
* `#include <sdm/types.hpp>`
* `#include <sdm/core/space/space.hpp>`
* `#include <sdm/core/space/multi_space.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**MultiSpace**](classsdm_1_1MultiSpace.md) &lt;TSpace&gt;<br>_A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._ |













# Detailed Description




**Author:**

David Albert ([david.albert@insa-lyon.fr](mailto:david.albert@insa-lyon.fr)) 




**Version:**

1.0 




**Date:**

01/02/2021




**Copyright:**

Copyright (c) 2021 




    

------------------------------
The documentation for this class was generated from the following file `src/sdm/core/space/multi_space.hpp`