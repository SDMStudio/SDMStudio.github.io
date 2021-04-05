
# File observation\_dynamics.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**observation\_dynamics.hpp**](observation__dynamics_8hpp.md)

[Go to the documentation of this file.](observation__dynamics_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <unordered_set>

#include <sdm/types.hpp>
#include <sdm/utils/linear_algebra/matrix.hpp>


namespace sdm
{

    class ObservationDynamics
    {
    protected:
        std::vector<Matrix> o_model;

        std::vector<std::vector<Matrix>> dynamics;

        std::unordered_map<number, std::unordered_map<number, std::unordered_set<number>>> successor_observations;

    public:
        ObservationDynamics();

        ObservationDynamics(ObservationDynamics &copy);

        ObservationDynamics(number, number, number);

        void initDynamics(number, number, number);

        double getObservationProbability(number, number, number) const;

        void setObservationProbability(number, number, number, double);

        const std::unordered_set<number> &getObservationSuccessors(number, number);

        void setObservations(const std::vector<Matrix> &);

        const Matrix &getObservations(number) const;

        double getDynamics(number, number, number, number) const;

        void setDynamics(number, number, number, number, double);

        const Matrix &getDynamics(number, number) const;

        void setDynamics(number, number, const Matrix &);

        const std::vector<std::vector<Matrix>> &getDynamics() const;
        const std::vector<Matrix> &getObservationProbabilities() const;
    };
} // namespace sdm
````

