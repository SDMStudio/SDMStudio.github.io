
# File world.hpp

[**File List**](files.md) **>** [**public**](dir_33715f1cc09e852083918bf432e54d5e.md) **>** [**world.hpp**](world_8hpp.md)

[Go to the documentation of this file.](world_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/public/feedback.hpp>


namespace sdm
{

  class World
  {
  protected:
    state internal = 0;

  public:
    // virtual ~World();
    // virtual state init() = 0;
    // virtual number getNumAgents() const = 0;
    // virtual void execute(action, feedback *) = 0;
  };
} // namespace sdm
````

