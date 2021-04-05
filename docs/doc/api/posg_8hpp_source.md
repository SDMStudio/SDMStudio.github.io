
# File posg.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**posg.hpp**](posg_8hpp.md)

[Go to the documentation of this file.](posg_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <cstdlib>
#include <fstream>
#include <sstream>
#include <iostream>

#include <sdm/types.hpp>

#include <sdm/world/po_process.hpp>
#include <sdm/world/decision_process.hpp>

#include <sdm/core/space/discrete_space.hpp>
#include <sdm/core/space/multi_discrete_space.hpp>
#include <sdm/core/reward.hpp>
#include <sdm/core/state_dynamics.hpp>
#include <sdm/core/observation_dynamics.hpp>

namespace sdm
{
    class POSG : public SG, public POProcess
    {
    protected:
        ObservationDynamics o_dynamics_;

        std::unordered_map<number, std::unordered_map<number, std::discrete_distribution<std::size_t>>> dynamics_generator;

        std::unordered_map<number, std::pair<number, number>> encoding;

        void setupDynamicsGenerator();

    public:
        POSG();

        POSG(const POSG &posg);

        POSG(const SG &stochastic_game);

        POSG(const std::string &filename);

        POSG(number, number);

        POSG(number, number, const std::vector<number> &, const std::vector<number> &);

        POSG(const DiscreteSpace<number> &, const DiscreteSpace<number> &);

        POSG(const DiscreteSpace<number> &, const DiscreteSpace<number> &, const MultiDiscreteSpace<number> &, const MultiDiscreteSpace<number> &,
             const StateDynamics &, const ObservationDynamics &, const std::vector<Reward> &, const Vector &);

        std::tuple<std::vector<double>, observation, state> getDynamicsGenerator(number x, number a) const;

        const ObservationDynamics &getObsDynamics() const;

        double getObservationProbability(number jaction, number jobservation, number state) const;

        double getObservationProbability(std::vector<number> jaction, std::vector<number> jobservation, number state) const;

        const Matrix &getObservations(number jaction) const;

        const Matrix &getObservations(std::vector<number> jaction) const;

        double getDynamics(number cstate, number jaction, number jobservation, number nstate) const;

        const Matrix &getDynamics(number jaction, number jobservation) const;

        std::string toStdFormat() const;

        std::string toXML() const;

        std::string toJSON() const;

        void generateFile(std::string) const;

        friend std::ostream &operator<<(std::ostream &os, const POSG &model)
        {
            os << model.toXML();
            return os;
        }
    };

    typedef POSG POStochasticGame;
    typedef POSG PartObsStochasticGame;
    typedef POSG PartiallyObservableStochasticGame;
} // namespace sdm
````

