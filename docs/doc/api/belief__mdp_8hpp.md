
# File belief\_mdp.hpp

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**belief\_mdp.hpp**](belief__mdp_8hpp.md)

[Go to the source code of this file.](belief__mdp_8hpp_source.md)

_File that contains the implementation of the belief mdp process class._ [More...](#detailed-description)

* `#include <sdm/types.hpp>`
* `#include <sdm/core/state/state.hpp>`
* `#include <sdm/core/state/belief_state.hpp>`
* `#include <sdm/core/state/interface/belief_interface.hpp>`
* `#include <sdm/core/action/action.hpp>`
* `#include <sdm/utils/struct/recursive_map.hpp>`
* `#include <sdm/utils/struct/graph.hpp>`
* `#include <sdm/world/solvable_by_mdp.hpp>`
* `#include <sdm/world/base/pomdp_interface.hpp>`
* `#include <sdm/world/gym_interface.hpp>`
* `#include <sdm/world/mdp.hpp>`
* `#include <sdm/world/belief_mdp.tpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) &lt;TBelief&gt;<br>_This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._ |













# Detailed Description




**Author:**

David Albert ([david.albert@insa-lyon.fr](mailto:david.albert@insa-lyon.fr)) 




**Version:**

1.0 




**Date:**

03/02/2021




**Copyright:**

Copyright (c) 2021 




    

------------------------------
The documentation for this class was generated from the following file `src/sdm/world/belief_mdp.hpp`