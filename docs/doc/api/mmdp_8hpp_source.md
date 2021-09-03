
# File mmdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**mmdp.hpp**](mmdp_8hpp.md)

[Go to the documentation of this file.](mmdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/core/distribution.hpp>
#include <sdm/core/reward/reward_interface.hpp>
#include <sdm/core/dynamics/state_dynamics_interface.hpp>

#include <sdm/world/mdp.hpp>
#include <sdm/world/base/mmdp_interface.hpp>

namespace sdm
{
    class MMDP : virtual public MDP, virtual public MMDPInterface
    {
    public:
        MMDP();
        MMDP(const std::shared_ptr<Space> &state_space,
             const std::shared_ptr<Space> &action_space,
             const std::shared_ptr<RewardInterface> &reward,
             const std::shared_ptr<StateDynamicsInterface> &state_dynamics,
             const std::shared_ptr<Distribution<std::shared_ptr<State>>> &start_distrib,
             number horizon = 0,
             double discount = 0.99,
             Criterion criterion = Criterion::REW_MAX);

        std::shared_ptr<Space> getActionSpace(number t = 0) const;
        std::shared_ptr<Space> getActionSpace(number agent_id, number t) const;

        std::string toStdFormat();
    };

} // namespace sdm
````

