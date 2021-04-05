
# File stochastic\_process.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**stochastic\_process.hpp**](stochastic__process_8hpp.md)

[Go to the documentation of this file.](stochastic__process_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2020 David Albert
==============================================================================*/
#pragma once

#include <random>
#include <vector>
#include <sdm/types.hpp>
#include <sdm/core/space/discrete_space.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>


namespace sdm
{
    class StochasticProcess
    {
    private:
        number internal_state_ = 0;

    protected:
        DiscreteSpace<number> state_space_;

        Vector start_distrib_;

        std::discrete_distribution<number> start_generator;

    public:
        StochasticProcess();
        // StochasticProcess(number);
        // StochasticProcess(const std::vector<double> &);
        // StochasticProcess(const Vector &);
        StochasticProcess(const DiscreteSpace<number> &);
        StochasticProcess(const DiscreteSpace<number> &, const Vector &);

        number getInternalState() const;

        void setInternalState(number);

        void setupStartGenerator();

        number init();

        const Vector &getStartDistrib() const;

        void setStartDistrib(const std::vector<double> &);

        void setStartDistrib(const Vector &);

        const DiscreteSpace<number> &getStateSpace() const;

        number getNumStates() const;
    };
} // namespace sdm
````

