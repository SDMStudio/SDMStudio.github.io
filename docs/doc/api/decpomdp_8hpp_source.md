
# File decpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**decpomdp.hpp**](decpomdp_8hpp.md)

[Go to the documentation of this file.](decpomdp_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2020 David Albert
==============================================================================*/
#pragma once

#include <vector>
#include <iostream>

#include <sdm/types.hpp>

#include <sdm/world/posg.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/reward.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/observation_dynamics.hpp>


namespace sdm
{
    class DecPOMDP : public POSG
    {

    public:
        DecPOMDP();

        DecPOMDP(const POSG&);

        DecPOMDP(const std::string &filename);

        DecPOMDP(number, number);

        DecPOMDP(number, number, const std::vector<number> &, const std::vector<number> &);

        DecPOMDP(const DiscreteSpace<number> &, const DiscreteSpace<number> &);

        DecPOMDP(const DiscreteSpace<number> &, const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &, const MultiDiscreteSpace<number> &,
                 const StateDynamics &, const ObservationDynamics &, const Reward &, const Vector &);

        const Reward &getReward() const;

        double getReward(number state, number jaction, number ag_id) const;

        double getReward(number state, std::vector<number> jaction, number ag_id) const;

        double getReward(number state, number jaction) const;

        double getReward(number state, std::vector<number> jaction) const;

        double getCost(number state, number jaction) const;

        double getCost(number state, std::vector<number> jaction) const;

        // virtual state init();

        // virtual void execute(action, feedback *);
    };

    typedef DecPOMDP DecentralizedPOMDP;
} // namespace sdm
````

