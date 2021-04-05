
<NavBar active_item_id="2"/>

# File initializers.hpp


[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**initializers.hpp**](initializers_8hpp.md)

[Go to the source code of this file.](initializers_8hpp_source.md)

_This file contains the initializer factory class._ [More...](#detailed-description)

* `#include <map>`
* `#include <boost/bind.hpp>`
* `#include <boost/function.hpp>`
* `#include <sdm/utils/struct/vector.hpp>`
* `#include <sdm/utils/value_function/initializer.hpp>`
* `#include <sdm/utils/value_function/initializer/mdp_initializer.hpp>`
* `#include <sdm/utils/value_function/initializer/pomdp_initializer.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**InitializerFactory**](classsdm_1_1InitializerFactory.md) &lt;typename TState, typename TAction&gt;<br>_The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use :_
````cpp
std::cout << InitializerFactory<TState, TAction>::available() << std::endl;
````

 _._ |













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
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/initializers.hpp`