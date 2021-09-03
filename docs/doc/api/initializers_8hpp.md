
# File initializers.hpp

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**File List**](files.md) **>** [**initializer**](dir_8f297180fb36cffec7cf6cc452bb4d2e.md) **>** [**initializers.hpp**](initializers_8hpp.md)

[Go to the source code of this file.](initializers_8hpp_source.md)

_This file contains the initializer factory class._ [More...](#detailed-description)

* `#include <map>`
* `#include <boost/bind.hpp>`
* `#include <boost/function.hpp>`
* `#include <sdm/utils/struct/vector.hpp>`
* `#include <sdm/utils/value_function/initializer/initializer.hpp>`
* `#include <sdm/utils/value_function/initializer/mdp_initializer.hpp>`
* `#include <sdm/utils/value_function/initializer/pomdp_initializer.hpp>`









## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**sdm**](namespacesdm.md) <br>_Namespace grouping all tools required for sequential decision making._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**InitializerFactory**](classsdm_1_1InitializerFactory.md) <br>_The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use : std::cout &lt;&lt;_[_**InitializerFactory::available()**_](classsdm_1_1InitializerFactory.md#function-available) _&lt;&lt; std::endl;._ |













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
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/initializers.hpp`