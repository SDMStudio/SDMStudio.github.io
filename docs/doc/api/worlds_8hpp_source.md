
# File worlds.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**worlds.hpp**](worlds_8hpp.md)

[Go to the documentation of this file.](worlds_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/discrete_mdp.hpp>
#include <sdm/world/discrete_mmdp.hpp>
#include <sdm/world/discrete_pomdp.hpp>
#include <sdm/world/discrete_decpomdp.hpp>
#include <sdm/world/ndpomdp.hpp>

#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/world/belief_mdp.hpp>
#include <sdm/world/occupancy_mdp.hpp>
#include <sdm/world/serialized_mdp.hpp>
#include <sdm/world/serialized_occupancy_mdp.hpp>

namespace sdm
{
    namespace world
    {
        
        // template <typename TState, typename TAction>
        // std::shared_ptr<SolvableByHSVI<TState, TAction>> makeSolvableByHSVI(std::string name, )


        // template <typename TDecisionProcess>
        // std::shared_ptr<TDecisionProcess> makeDecisionProcess(std::string name, ) {
        //     auto process = std::make_shared<TDecisionProcess>(filename);

        //     return process;
        // }

        std::vector<std::string> available()
        {
            return {"MDP", "POMDP", "MMDP", "DecPOMDP", "Extensive-MDP", "Extensive-DecPOMDP"};
        }
    } // namespace world
    
} // namespace sdm
````

