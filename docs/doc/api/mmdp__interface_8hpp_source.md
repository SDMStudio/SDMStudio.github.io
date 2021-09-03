
# File mmdp\_interface.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**mmdp\_interface.hpp**](mmdp__interface_8hpp.md)

[Go to the documentation of this file.](mmdp__interface_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/space/space.hpp>
#include <sdm/world/base/mdp_interface.hpp>
#include <sdm/world/base/mdp_interface.hpp>

namespace sdm
{
    class MMDPInterface : virtual public MDPInterface
    {
    public:
        virtual std::shared_ptr<Space> getActionSpace(number agent_id, number t) const = 0;

        virtual std::shared_ptr<Space> getActionSpace(number t) const = 0;
    };


    class SerialProblemInterface
    {
    public:
        virtual number getAgentId(number t) const = 0;

        virtual bool isLastAgent(number t) const = 0;
    };


    class SerialMMDPInterface : virtual public MMDPInterface, public SerialProblemInterface
    {
    };

} // namespace sdm
````

