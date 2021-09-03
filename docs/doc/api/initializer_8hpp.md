
# File initializer.hpp

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**File List**](files.md) **>** [**initializer**](dir_8f297180fb36cffec7cf6cc452bb4d2e.md) **>** [**initializer.hpp**](initializer_8hpp.md)

[Go to the source code of this file.](initializer_8hpp_source.md)

_File that contains definition of different initializers._ [More...](#detailed-description)

* `#include <math.h>`
* `#include <sdm/types.hpp>`
* `#include <sdm/world/solvable_by_hsvi.hpp>`
* `#include <sdm/world/base/mdp_interface.hpp>`
* `#include <sdm/utils/value_function/value_function.hpp>`
* `#include <sdm/utils/value_function/qvalue_function.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**BlindInitializer**](classsdm_1_1BlindInitializer.md) <br>_This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._ |
| class | [**BoundInitializer**](classsdm_1_1BoundInitializer.md) <br>_This initializer initializes a value function to the estimation of the value if we get a constant reward at every timestep._  |
| class | [**Initializer**](classsdm_1_1Initializer.md) <br>_Abstract class for initializer._  |
| class | [**MaxInitializer**](classsdm_1_1MaxInitializer.md) <br>_This initializer initializes a value function to the best value. This is an optimistic initialization._  |
| class | [**MinInitializer**](classsdm_1_1MinInitializer.md) <br>_This initializer initializes a value function to the worst value. This is a pessimistic initialization._  |
| class | [**QInitializer**](classsdm_1_1QInitializer.md) &lt;class TInput&gt;<br>_Abstract class for initializer._  |
| class | [**ValueInitializer**](classsdm_1_1ValueInitializer.md) &lt;class TInput&gt;<br>_This initializer initializes a value function to a constant value._  |
| class | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) &lt;class TInput&gt;<br>_This initializer initializes a value function to zero._  |













# Detailed Description




**Author:**

David Albert ([david.albert@insa-lyon.fr](mailto:david.albert@insa-lyon.fr)) 




**Version:**

1.0 




**Date:**

24/03/2021




**Copyright:**

Copyright (c) 2021 




    

------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializer.hpp`