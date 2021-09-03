
# File mpomdp\_interface.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**mpomdp\_interface.hpp**](mpomdp__interface_8hpp.md)

[Go to the documentation of this file.](mpomdp__interface_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/world/base/mmdp_interface.hpp>
#include <sdm/world/base/pomdp_interface.hpp>

namespace sdm
{
    class MPOMDPInterface : virtual public MMDPInterface,
                            virtual public POMDPInterface
    {
    public:
        virtual std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const = 0;

        virtual std::shared_ptr<Space> getObservationSpace(number t) const = 0;
    };

    class SerialMPOMDPInterface : virtual public SerialMMDPInterface,
                                  virtual public MPOMDPInterface
    {
    public:
        virtual std::shared_ptr<Joint<std::shared_ptr<Observation>>> getDefaultObservation() const = 0;
    };

} // namespace sdm
````

