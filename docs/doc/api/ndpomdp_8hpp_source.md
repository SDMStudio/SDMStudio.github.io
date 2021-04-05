
# File ndpomdp.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**world**](dir_414fa79a2aeb4aba632c04a0d3a53fff.md) **>** [**ndpomdp.hpp**](ndpomdp_8hpp.md)

[Go to the documentation of this file.](ndpomdp_8hpp.md) 


````cpp
#pragma once

#include <string>
#include <vector>
#include <list>
#include <fstream>
#include <iostream>
#include <sstream>
#include <map>
#include <unordered_set>
#include "math.h"
#include <random>

#include <sdm/types.hpp>
#include <sdm/common.hpp>
#include <sdm/worlds.hpp>
#include <sdm/utils/linear_algebra/vector.hpp>

namespace sdm
{
    class NDPOMDP : public World
    {
    private:
        number internal_state_;

    public:
        class Node
        {
        public:
            agent id;
            int parent = -2;
            double *upperBounds;
            std::vector<agent> children;
            std::unordered_set<agent> neighbors;
            std::map<std::string, double> rewardFunction;
            std::map<std::string, double> transitionFunction;
            std::map<std::string, double> observationFunction;

            Node();
            Node(agent id, std::unordered_set<agent>);
        };

        MultiDiscreteSpace<number> obs_space_;
        MultiDiscreteSpace<number> act_space_;
        action maxActions;

        DiscreteSpace<number> state_space_;
        DiscreteSpace<number> agent_space_;

        // observation observations;
        Vector startingBelief;

        std::map<int, int> transitionmatrix;
        std::unordered_set<state> *stateSuccessor;
        std::map<std::string, double> observationsmatrix;
        std::map<std::string, std::unordered_set<observation>> observationSuccessor;

        std::discrete_distribution<number> start_generator;
        std::unordered_map<std::string, std::discrete_distribution<number>> dynamics_generator;

        Node *n;

        agent *nodes;

        double discount;

        horizon timeHorizon;

        agent root;

        std::ifstream input_file;
        double rMax = 45;

        NDPOMDP(std::string);

        void createDAG();
        void printDAG(agent);
        virtual state init();
        void getData(std::string);
        state getPGenerator(state);
        void setupDynamicsGenerator();

        std::tuple<std::vector<double>, observation, state> getDynamicsGenerator(number state, number jaction);

        std::vector<std::pair<number, number>> getUniqueValidNeighbors();

        double getInitialBelief(state);
        double getP(state, action, state);
        virtual void execute(action, feedback *);

        observation getQGenerator(agent, action, state);
        std::unordered_set<state> getStateSuccessor(state);

        double getReward(state, agent, agent, action, action);
        double getObservation(agent, action, state, observation);
        double getQ(state, agent, action, observation, agent, action, observation);

        std::unordered_set<observation> getObservationSuccessor(agent, action, state);
        std::tuple<state, observation, observation> getDynamicsGenerator(state, agent, action, agent, action);

        void setDiscount(double);
        double getDiscount();

        virtual number getNumObservations(number agent) const;

        virtual number getNumStates() const;

        virtual number getNumAgents() const;

        const MultiDiscreteSpace<number> &getActionSpace() const;

        number getNumJActions() const;

        number getNumActions(number agent) const;

        std::vector<number> getNumActions() const;
    };
} // namespace sdm
````

