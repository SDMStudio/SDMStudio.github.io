
# File joint\_history\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**interface**](dir_21fe4a973b70de512eb6303f0a371aff.md) **>** [**joint\_history\_interface.hpp**](joint__history__interface_8hpp.md)

[Go to the documentation of this file.](joint__history__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/state/state.hpp>
#include <sdm/core/state/interface/history_interface.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{
    class JointHistoryInterface : virtual public HistoryInterface
    {
    public:
        virtual std::shared_ptr<HistoryInterface> getIndividualHistory(number agent_id) const = 0;
        virtual Joint<std::shared_ptr<HistoryInterface>> getIndividualHistories() const = 0;

        virtual std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Observation> &obs, bool backup = true) = 0;
        virtual std::shared_ptr<HistoryInterface> expand(const std::shared_ptr<Joint<std::shared_ptr<Observation>>> &, bool = true) = 0;

        virtual void addIndividualHistory(std::shared_ptr<HistoryInterface> ihist) = 0;
        virtual std::shared_ptr<Joint<std::shared_ptr<Observation>>> getDefaultObs() = 0;

        virtual void isNotOrigin() = 0;

        virtual std::string str() const = 0;
    };
}
````

