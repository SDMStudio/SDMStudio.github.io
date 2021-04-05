
# File zsposg.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**zsposg.hpp**](zsposg_8hpp.md)

[Go to the documentation of this file.](zsposg_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2020 David Albert
==============================================================================*/
#pragma once

#include <vector>

#include <sdm/types.hpp>

#include <sdm/world/posg.hpp>
#include <sdm/world/decpomdp.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/reward.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/observation_dynamics.hpp>


namespace sdm
{
  class ZSPOSG : public POSG
  {
  public:
    ZSPOSG();

    ZSPOSG(const DecPOMDP &);

    ZSPOSG(const DiscreteSpace<number> &, const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &, const MultiDiscreteSpace<number> &,
           const StateDynamics &, const ObservationDynamics &, const Reward &, const Vector &);

    std::vector<double> getRewards(number state, number jaction) const;

    std::vector<double> getRewards(number state, std::vector<number> jaction) const;

    double getReward(number state, number jaction, number ag_id) const;

    double getReward(number state, std::vector<number> jaction, number ag_id) const;
  };

  typedef ZSPOSG ZeroSumPOSG;
} // namespace sdm
````

