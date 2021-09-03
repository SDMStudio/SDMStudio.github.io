
# File occupancy\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**occupancy\_state.hpp**](occupancy__state_8hpp.md)

[Go to the documentation of this file.](occupancy__state_8hpp.md) 


````cpp
#pragma once
#include <sdm/types.hpp>
#include <sdm/core/joint.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/state/belief_state.hpp>
#include <sdm/core/state/interface/occupancy_state_interface.hpp>
#include <sdm/core/state/interface/history_interface.hpp>
#include <sdm/core/state/interface/joint_history_interface.hpp>
#include <sdm/core/state/interface/belief_interface.hpp>
#include <sdm/utils/struct/recursive_map.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>

namespace sdm
{
    class PrivateOccupancyState;

    class OccupancyState : virtual public OccupancyStateInterface,
                           virtual public Belief
    {
    public:
        static double PRECISION;
        static int NUM_CREATE, NUM_DESTROY;

        OccupancyState();
        OccupancyState(number num_agents);
        OccupancyState(const OccupancyState &copy);
        ~OccupancyState();

        size_t hash() const;

        bool operator==(const std::shared_ptr<State> &other) const;
        bool operator==(const OccupancyState &other) const;

        double getProbability(const std::shared_ptr<State> &joint_history) const;
        double getProbability(const std::shared_ptr<JointHistoryInterface> &joint_history) const;
        double getProbability(const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &state) const;

        void setProbability(const std::shared_ptr<State> &joint_history, double proba);
        void setProbability(const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<BeliefInterface> &belief, double proba);

        void addProbability(const std::shared_ptr<State> &joint_history, double proba);
        void addProbability(const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<BeliefInterface> &belief, double proba);

        Pair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<BeliefInterface>> sampleJointHistoryBelief();

        const std::set<std::shared_ptr<JointHistoryInterface>> &getJointHistories() const;

        const std::set<std::shared_ptr<BeliefInterface>> &getBeliefs() const;

        std::shared_ptr<BeliefInterface> getBeliefAt(const std::shared_ptr<JointHistoryInterface> &jhistory) const;

        void setBeliefAt(const std::shared_ptr<JointHistoryInterface> &jhistory, const std::shared_ptr<BeliefInterface> &belief);

        const std::set<std::shared_ptr<HistoryInterface>> &getIndividualHistories(number ag_id) const;

        const std::vector<std::set<std::shared_ptr<HistoryInterface>>> &getAllIndividualHistories() const;

        void finalize();

        std::shared_ptr<OccupancyStateInterface> getFullyUncompressedOccupancy();

        void setFullyUncompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &);

        std::shared_ptr<OccupancyStateInterface> getOneStepUncompressedOccupancy();

        void setOneStepUncompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &);

        std::shared_ptr<OccupancyStateInterface> getCompressedOccupancy();

        void setCompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &compress_ostate);

        std::shared_ptr<HistoryInterface> getLabel(const std::shared_ptr<HistoryInterface> &ihistory, number agent_id) const;

        Joint<std::shared_ptr<HistoryInterface>> getJointLabels(const Joint<std::shared_ptr<HistoryInterface>> &) const;

        double getProbabilityOverIndividualHistories(number, const std::shared_ptr<HistoryInterface> &) const;

        void updateLabel(number, const std::shared_ptr<HistoryInterface> &, const std::shared_ptr<HistoryInterface> &);

        void updateJointLabels(const Joint<std::shared_ptr<HistoryInterface>> &, const Joint<std::shared_ptr<HistoryInterface>> &);

        std::shared_ptr<JointHistoryInterface> getCompressedJointHistory(const std::shared_ptr<JointHistoryInterface> &) const;

        bool areIndividualHistoryLPE(const std::shared_ptr<HistoryInterface> &, const std::shared_ptr<HistoryInterface> &, number);

        std::shared_ptr<OccupancyStateInterface> compress();


        const Joint<RecursiveMap<std::shared_ptr<HistoryInterface>, std::shared_ptr<PrivateOccupancyState>>> &getPrivateOccupancyStates() const;

        const std::shared_ptr<PrivateOccupancyState> &getPrivateOccupancyState(const number &agent_id, const std::shared_ptr<HistoryInterface> &ihistory) const;

        TypeState getTypeState() const;

        std::shared_ptr<OccupancyState> getptr();

        std::string str() const;

        double operator^(const std::shared_ptr<BeliefInterface> &other) const;
        bool operator==(const std::shared_ptr<BeliefInterface> &other) const;
        double operator<(const OccupancyState &other) const;
        double operator<(const std::shared_ptr<BeliefInterface> &other) const;
        double operator-(const std::shared_ptr<BeliefInterface> &other) const;
        double minus(const std::shared_ptr<BeliefInterface> &other) const;

        std::shared_ptr<Space> getActionSpaceAt(number t);
        void setActionSpaceAt(number t, std::shared_ptr<Space> action_space);
        void setup();
        void normalize();

        static double TIME_IN_GET_PROBA, TIME_IN_SET_PROBA, TIME_IN_ADD_PROBA, TIME_IN_FINALIZE, TIME_IN_EQUAL_OPERATOR, TIME_IN_MINUS_OPERATOR, TIME_IN_HASH, TIME_IN_COMPRESS, TIME_IN_DOT_OPERATOR, TIME_IN_INFERIOR_OPERATOR;
        static unsigned long PASSAGE_GET_PROBA, PASSAGE_SET_PROBA, PASSAGE_FINALIZE;

        std::shared_ptr<JointHistoryInterface> getJointHistory(std::shared_ptr<JointHistoryInterface> candidate_jhistory);

        void prepareIndividualHierarchicalHistoryVectors(number t);
        std::shared_ptr<JointHistoryInterface> getIndividualHierarchicalHistory(number t, number agent, std::shared_ptr<JointHistoryInterface> candidate_ihhistory);
        std::vector<std::shared_ptr<JointHistoryInterface>> getIndividualHierarchicalHistoriesOf(number t, number agent);
        bool individualHierarchicalHistoryVectorForIsDone(number t, number agent);
        void pushToIndividualHierarchicalHistoriesOf(number t, number agent, std::shared_ptr<JointHistoryInterface>& individual_hierarchical_history);

        std::vector<std::shared_ptr<JointHistoryInterface>> getJointHistoryVector(number t);
        void pushToJointHistoryVector(number t, std::shared_ptr<JointHistoryInterface> &individual_hierarchical_history);

        static void cleanTIME();
        void updateTime(std::chrono::high_resolution_clock::time_point start_time, std::string information) const;

        static RecursiveMap<Joint<std::shared_ptr<HistoryInterface>>, std::shared_ptr<JointHistoryInterface>> jhistory_map_;
    protected:
        number num_agents_ = 2;

        Joint<RecursiveMap<std::shared_ptr<HistoryInterface>, std::shared_ptr<PrivateOccupancyState>>> tuple_of_maps_from_histories_to_private_occupancy_states_;
        Joint<RecursiveMap<std::shared_ptr<HistoryInterface>, double>> weight_of_private_occupancy_state_;

        std::shared_ptr<OccupancyStateInterface> fully_uncompressed_occupancy_state, one_step_left_compressed_occupancy_state;
        std::weak_ptr<OccupancyStateInterface> compressed_occupancy_state;

        Joint<RecursiveMap<std::shared_ptr<HistoryInterface>, std::shared_ptr<HistoryInterface>>> private_ihistory_map_;


        std::unordered_map<number, std::unordered_map<std::shared_ptr<HistoryInterface>, double>> probability_ihistories;

        std::set<std::shared_ptr<BeliefInterface>> list_beliefs_;

        std::set<std::shared_ptr<JointHistoryInterface>> list_joint_histories_;

        std::vector<std::set<std::shared_ptr<HistoryInterface>>> all_list_ihistories_;

        std::unordered_map<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<BeliefInterface>> map_joint_history_to_belief_;

        std::unordered_map<number, std::unordered_map<std::shared_ptr<HistoryInterface>, std::set<std::shared_ptr<JointHistoryInterface>>>> ihistories_to_jhistory_;

        void setupIndividualHistories();
        void setupBeliefsAndHistories();
        void setProbabilityOverIndividualHistories();
        void setupPrivateOccupancyStates();

        std::shared_ptr<std::unordered_map<number, std::shared_ptr<Space>>> action_space_map;
        
        // necessary for now for phoMDP
        std::vector<std::shared_ptr<std::unordered_map<number, std::vector<std::shared_ptr<JointHistoryInterface>>>>> individual_hierarchical_history_vector_map_vector;
        //
        std::shared_ptr<std::unordered_map<number, std::vector<std::shared_ptr<JointHistoryInterface>>>> joint_history_map_vector;
    };
} // namespace sdm

namespace std
{

    template <>
    struct hash<sdm::OccupancyState>
    {
        typedef sdm::OccupancyState argument_type;
        typedef std::size_t result_type;
        inline result_type operator()(const argument_type &in) const
        {
            std::chrono::high_resolution_clock::time_point time_start =  std::chrono::high_resolution_clock::now();

            size_t seed = 0;
            double inverse_of_precision = 1. / sdm::OccupancyState::PRECISION;
            std::map<std::shared_ptr<sdm::State>, double> ordered(in.begin(), in.end());
            std::vector<int> rounded;
            for (const auto &pair_jhist_proba : ordered)
            {
                sdm::hash_combine(seed, pair_jhist_proba.first);
                // sdm::hash_combine(seed, in.getBeliefAt(pair_jhist_proba.first->toHistory()->toJointHistory()));
                rounded.push_back(lround(inverse_of_precision * pair_jhist_proba.second));
            }
            for (const auto &v : rounded)
            {
                //Combine the hash of the current vector with the hashes of the previous ones
                sdm::hash_combine(seed, v);
            }
            sdm::OccupancyState::TIME_IN_HASH += std::Performance::computeTime(time_start);
            return seed;
            // return std::hash<sdm::MappedVector<std::shared_ptr<sdm::State>>>()(in, sdm::OccupancyState::PRECISION);
        }
    };
}
````

