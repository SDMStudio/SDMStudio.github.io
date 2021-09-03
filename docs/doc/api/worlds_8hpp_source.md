
# File worlds.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**worlds.hpp**](worlds_8hpp.md)

[Go to the documentation of this file.](worlds_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/mdp.hpp>
#include <sdm/world/belief_mdp.hpp>
#include <sdm/world/occupancy_mdp.hpp>


// #include <sdm/world/discrete_mmdp.hpp>
// #include <sdm/world/discrete_pomdp.hpp>
// #include <sdm/world/discrete_decpomdp.hpp>
// #include <sdm/world/networked_distributed_pomdp.hpp>

// #include <sdm/world/solvable_by_hsvi.hpp>
// #include <sdm/world/belief_mdp.hpp>
// #include <sdm/world/occupancy_mdp.hpp>
// #include <sdm/world/serialized_mmdp.hpp>
// #include <sdm/world/serialized_occupancy_mdp.hpp>
// #include <sdm/world/serialized_belief_mdp.hpp>

namespace sdm
{
    
    namespace world
    {
        std::vector<std::string> available()
        {
            return {"MDP", "POMDP", "MMDP", "DecPOMDP", "Extensive-MDP", "Extensive-POMDP", "Extensive-DecPOMDP"};
        }
    } // namespace world
    
} // namespace sdm
````

