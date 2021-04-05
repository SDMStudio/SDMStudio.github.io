
# File po\_process\_base.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**po\_process\_base.hpp**](po__process__base_8hpp.md)

[Go to the documentation of this file.](po__process__base_8hpp.md) 


````cpp

#pragma once

#include <sdm/world/base/stochastic_process_base.hpp>

namespace sdm
{
    template <typename TStateSpace, typename TObsSpace, typename TDistrib>
    class PartiallyObservableProcessBase : public virtual StochasticProcessBase<TStateSpace, TDistrib>
    {
    public:
        using observation_space_type = TObsSpace;
        using observation_type = typename TObsSpace::value_type;

        PartiallyObservableProcessBase();
        PartiallyObservableProcessBase(std::shared_ptr<TStateSpace>, std::shared_ptr<TObsSpace>);
        PartiallyObservableProcessBase(std::shared_ptr<TStateSpace>, std::shared_ptr<TObsSpace>, TDistrib);

        std::shared_ptr<TObsSpace> getObsSpace() const;

        void setObsSpace(std::shared_ptr<TObsSpace>);


    protected:
        std::shared_ptr<TObsSpace> obs_space_;
    };
} // namespace sdm
#include <sdm/world/base/po_process_base.tpp>
````

