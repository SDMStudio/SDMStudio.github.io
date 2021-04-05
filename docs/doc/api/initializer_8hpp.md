
<NavBar active_item_id="2"/>

# File initializer.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**initializer.hpp**](initializer_8hpp.md)

[Go to the source code of this file.](initializer_8hpp_source.md)

_File that contains definition of different initializers._ [More...](#detailed-description)

* `#include <math.h>`
* `#include <sdm/algorithms/hsvi.hpp>`
* `#include <sdm/utils/value_function/value_function.hpp>`
* `#include <sdm/utils/value_function/state_2_occupancy_vf.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**BlindInitializer**](classsdm_1_1BlindInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._ |
| class | [**BoundInitializer**](classsdm_1_1BoundInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to the estimation of the value if if we get a constant reward at every timestep._  |
| class | [**Initializer**](classsdm_1_1Initializer.md) &lt;typename TState, typename TAction&gt;<br>_Abstract class for initializer._  |
| class | [**MaxInitializer**](classsdm_1_1MaxInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to the best value. This is an optimistic initialization._  |
| class | [**MinInitializer**](classsdm_1_1MinInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to the worst value. This is a pessimistic initialization._  |
| class | [**ValueInitializer**](classsdm_1_1ValueInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to a constant value._  |
| class | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to zero._  |













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
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializer.hpp`