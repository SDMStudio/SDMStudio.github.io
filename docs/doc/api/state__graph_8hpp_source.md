
# File state\_graph.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**state\_graph.hpp**](state__graph_8hpp.md)

[Go to the documentation of this file.](state__graph_8hpp.md) 


````cpp

#pragma once

#include <sdm/utils/struct/pair.hpp>
#include <sdm/utils/struct/graph.hpp>
#include <sdm/utils/struct/recursive_map.hpp>
#include <sdm/core/state/belief_state.hpp>
#include <sdm/public/boost_serializable.hpp>

#include <sdm/world/base/mdp_interface.hpp>

namespace sdm
{

    class POMDPInterface;

    class StateGraph : public Graph<std::shared_ptr<State>, Pair<std::shared_ptr<Action>, std::shared_ptr<Observation>>>,
                       virtual public State,
                       public BoostSerializable<StateGraph>
    {
    public:
        using TransitionFunction = Pair<std::shared_ptr<State>, double>(const std::shared_ptr<MDPInterface> &,
                                                                        const std::shared_ptr<State> &,
                                                                        const std::shared_ptr<Action> &,
                                                                        const std::shared_ptr<Observation> &,
                                                                        number);

        StateGraph();
        StateGraph(const std::vector<std::shared_ptr<State>> &list_states, const std::vector<double> &list_proba);
        StateGraph(const std::shared_ptr<State> &data);

        StateGraph(const std::shared_ptr<StateGraph> &predecessor, const std::shared_ptr<State> &belief);

        void initialize();

        std::shared_ptr<StateGraph> getNode(const std::shared_ptr<State> &belief);

        double getProbability(const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation) const;

        std::shared_ptr<StateGraph> next(TransitionFunction transition_function, const std::shared_ptr<MDPInterface> &pomdp, const std::shared_ptr<Action> &action, const std::shared_ptr<Observation> &observation, number t, bool backup = true);

        std::string str() const;

        std::shared_ptr<StateGraph> getptr();

        template <class Archive>
        void serialize(Archive &archive, const unsigned int);

        friend std::ostream &operator<<(std::ostream &os, StateGraph &belief_state_graph)
        {
            os << belief_state_graph.str();
            return os;
        }

    protected:
        // std::shared_ptr<std::unordered_map<Belief, std::shared_ptr<State>>> belief_pointer;

        std::shared_ptr<std::unordered_map<std::shared_ptr<State>, std::shared_ptr<StateGraph>>> belief_space;

        RecursiveMap<std::shared_ptr<Action>, std::shared_ptr<Observation>, double> belief_probability;

        virtual std::shared_ptr<State> exist(const std::shared_ptr<State> &);
    };

} // namespace sdm
````

