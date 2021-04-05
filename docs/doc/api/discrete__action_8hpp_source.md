
# File discrete\_action.hpp

[**File List**](files.md) **>** [**action**](dir_da22f131ef310b227029eb4cfbb3e75b.md) **>** [**discrete\_action.hpp**](discrete__action_8hpp.md)

[Go to the documentation of this file.](discrete__action_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2020 David Albert
==============================================================================*/
#pragma once

#include <random>
#include <sdm/types.hpp>
#include <sdm/core/item.hpp>


namespace sdm
{

  class DiscreteAction : public Item<number>
  {
  public:
    DiscreteAction()
    {
    }

    DiscreteAction(number item) : Item(item)
    {
    }
  };
} // namespace sdm
````

