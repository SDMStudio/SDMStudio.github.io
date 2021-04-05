
# File stochastic\_process\_base.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**stochastic\_process\_base.hpp**](stochastic__process__base_8hpp.md)

[Go to the documentation of this file.](stochastic__process__base_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/space/discrete_space.hpp>

namespace sdm
{
    template <typename TStateSpace, typename TDistrib>
    class StochasticProcessBase
    {
    public:
        using state_space_type = TStateSpace;
        using state_type = typename TStateSpace::value_type;

        StochasticProcessBase();
        StochasticProcessBase(std::shared_ptr<TStateSpace>);
        StochasticProcessBase(std::shared_ptr<TStateSpace>, TDistrib);

        state_type getInternalState() const;
        void setInternalState(state_type new_i_state);

        TDistrib getStartDistrib() const;
        void setStartDistrib(TDistrib);

        std::shared_ptr<TStateSpace> getStateSpace() const;
        void setStateSpace(std::shared_ptr<TStateSpace>);

    private:
        state_type internal_state_;

    protected:
        std::shared_ptr<TStateSpace> state_space_;

        TDistrib start_distrib_;
    };
} // namespace sdm
#include <sdm/world/base/stochastic_process_base.tpp>
````

