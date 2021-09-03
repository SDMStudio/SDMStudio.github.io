
# File compressible\_occupancy\_state\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**interface**](dir_21fe4a973b70de512eb6303f0a371aff.md) **>** [**compressible\_occupancy\_state\_interface.hpp**](compressible__occupancy__state__interface_8hpp.md)

[Go to the documentation of this file.](compressible__occupancy__state__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/interface/belief_interface.hpp>
#include <sdm/core/state/interface/joint_history_interface.hpp>
#include <sdm/core/state/base_state.hpp>
#include <sdm/core/space/space.hpp>


namespace sdm
{
    class CompressibleOccupancyStateInterface : public OccupancyStateInterface
    {
    public:

        virtual std::shared_ptr<OccupancyStateInterface> compress() = 0;

        virtual std::shared_ptr<OccupancyStateInterface> getFullyUncompressedOccupancy() const = 0;

        virtual void setFullyUncompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &) = 0;

        virtual std::shared_ptr<OccupancyStateInterface> getOneStepUncompressedOccupancy() const = 0;

        virtual void setOneStepUncompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &) = 0;

        virtual Joint<std::shared_ptr<HistoryInterface>> getJointLabels(const Joint<std::shared_ptr<HistoryInterface>> &ihistories) const = 0;

        virtual const double &getProbabilityOverJointHistory(const std::shared_ptr<JointHistoryInterface> &) const = 0;

        virtual void updateJointLabels(const Joint<std::shared_ptr<HistoryInterface>> &ihistories, const Joint<std::shared_ptr<HistoryInterface>> &labels) = 0;

        virtual std::shared_ptr<JointHistoryInterface> getCompressedJointHistory(const std::shared_ptr<JointHistoryInterface> &joint_hisotory) const = 0;

        virtual const double &getProbabilityOverIndividualHistories(number agent_id, const std::shared_ptr<HistoryInterface> &ihistory) const = 0;
    };
}
````

