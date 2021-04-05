
# File po\_process.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**po\_process.hpp**](po__process_8hpp.md)

[Go to the documentation of this file.](po__process_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2020 David Albert
==============================================================================*/
#pragma once

#include <vector>
#include <sdm/types.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/world/stochastic_process.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>


namespace sdm
{
    class PartiallyObservableProcess : public virtual StochasticProcess
    {

    protected:
        MultiDiscreteSpace<number> obs_spaces_;

    public:
        PartiallyObservableProcess();

        PartiallyObservableProcess(const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &);
        PartiallyObservableProcess(const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &, const Vector &);

        const MultiDiscreteSpace<number> &getObsSpace() const;

        number getNumJObservations() const;

        number getNumObservations(number) const;

        std::vector<number> getNumObservations() const;
    };

    typedef PartiallyObservableProcess POProcess;
    typedef PartiallyObservableProcess PartObsProcess;
} // namespace sdm
````

