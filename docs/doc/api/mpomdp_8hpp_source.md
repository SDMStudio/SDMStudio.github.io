
# File mpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**mpomdp.hpp**](mpomdp_8hpp.md)

[Go to the documentation of this file.](mpomdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/dynamics/observation_dynamics_interface.hpp>

#include <sdm/world/mmdp.hpp>
#include <sdm/world/pomdp.hpp>
#include <sdm/world/base/mpomdp_interface.hpp>

namespace sdm
{
    class MPOMDP : public MPOMDPInterface, public POMDP, public MMDP
    {
    public:
        MPOMDP();
        MPOMDP(const std::shared_ptr<Space> &state_space,
               const std::shared_ptr<Space> &action_space,
               const std::shared_ptr<Space> &obs_space,
               const std::shared_ptr<RewardInterface> &reward,
               const std::shared_ptr<StateDynamicsInterface> &state_dynamics,
               const std::shared_ptr<ObservationDynamicsInterface> &obs_dynamics,
               const std::shared_ptr<Distribution<std::shared_ptr<State>>> &start_distrib,
               number horizon = 0,
               double discount = 0.99,
               Criterion criterion = Criterion::REW_MAX);

        virtual ~MPOMDP();

        virtual std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const;

        virtual std::shared_ptr<Space> getObservationSpace(number t = 0) const;
        
        virtual std::string toStdFormat();

    };

    using DecPOMDP = MPOMDP;
} // namespace sdm
````

