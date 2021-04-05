
# File transformed\_mdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**transformed\_mdp.hpp**](transformed__mdp_8hpp.md)

[Go to the documentation of this file.](transformed__mdp_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>
#include <sdm/world/decpomdp.hpp>

namespace sdm
{

    template <typename TState, typename TAction, typename TObserv>
    class TransformedMDP
    {
    protected:
        std::shared_ptr<POSG> underlying_problem;

    public:
        TransformedMDP(std::shared_ptr<POSG> underlying_problem);

        std::shared_ptr<POSG> getUnderlyingProblem() const;
        virtual TState getNextState(TState o_state, TAction o_action, TObserv obs) const = 0;
        virtual double getReward(TState o_state, TAction o_action) const = 0;
        virtual double getObservationProbability(TAction o_action, TObserv obs, TState o_state) const = 0;


    };
} // namespace sdm
````

