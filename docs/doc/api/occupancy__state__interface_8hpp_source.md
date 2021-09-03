
# File occupancy\_state\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**interface**](dir_21fe4a973b70de512eb6303f0a371aff.md) **>** [**occupancy\_state\_interface.hpp**](occupancy__state__interface_8hpp.md)

[Go to the documentation of this file.](occupancy__state__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/interface/belief_interface.hpp>
#include <sdm/core/state/interface/joint_history_interface.hpp>
#include <sdm/core/state/base_state.hpp>
#include <sdm/core/space/space.hpp>


namespace sdm
{

    class OccupancyStateInterface : virtual public BeliefInterface
    {
    public:
        virtual double getProbability(const std::shared_ptr<State> &joint_history) const = 0;
        virtual double getProbability(const std::shared_ptr<JointHistoryInterface> &joint_history) const = 0;
        virtual double getProbability(const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<State> &state) const = 0;

        virtual void setProbability(const std::shared_ptr<State> &pair_history_belief, double proba) = 0;
        virtual void setProbability(const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<BeliefInterface> &belief, double proba) = 0;

        virtual void addProbability(const std::shared_ptr<State> &pair_history_belief, double proba) = 0;
        virtual void addProbability(const std::shared_ptr<JointHistoryInterface> &joint_history, const std::shared_ptr<BeliefInterface> &belief, double proba) = 0;

        virtual double operator-(const std::shared_ptr<BeliefInterface> &other) const = 0;

        virtual double minus(const std::shared_ptr<BeliefInterface> &other) const = 0;

        virtual Pair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<BeliefInterface>> sampleJointHistoryBelief() = 0;

        virtual const std::set<std::shared_ptr<JointHistoryInterface>> &getJointHistories() const = 0;

        virtual const std::set<std::shared_ptr<BeliefInterface>> &getBeliefs() const = 0;

        virtual std::shared_ptr<BeliefInterface> getBeliefAt(const std::shared_ptr<JointHistoryInterface> &jhistory) const = 0;

        virtual const std::set<std::shared_ptr<HistoryInterface>> &getIndividualHistories(number ag_id) const = 0;

        virtual const std::vector<std::set<std::shared_ptr<HistoryInterface>>> &getAllIndividualHistories() const = 0;

        virtual std::shared_ptr<OccupancyStateInterface> getFullyUncompressedOccupancy() = 0;

        virtual void setFullyUncompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &) = 0;

        virtual std::shared_ptr<OccupancyStateInterface> getOneStepUncompressedOccupancy() = 0;

        virtual void setOneStepUncompressedOccupancy(const std::shared_ptr<OccupancyStateInterface> &) = 0;

        virtual Joint<std::shared_ptr<HistoryInterface>> getJointLabels(const Joint<std::shared_ptr<HistoryInterface>> &) const = 0;

        virtual void updateJointLabels(const Joint<std::shared_ptr<HistoryInterface>> &, const Joint<std::shared_ptr<HistoryInterface>> &) = 0;

        virtual std::shared_ptr<HistoryInterface> getLabel(const std::shared_ptr<HistoryInterface> &ihistory, number agent_id) const = 0;

        virtual std::shared_ptr<JointHistoryInterface> getCompressedJointHistory(const std::shared_ptr<JointHistoryInterface> &) const = 0;

        virtual double getProbabilityOverIndividualHistories(number, const std::shared_ptr<HistoryInterface> &) const = 0;

        virtual std::shared_ptr<OccupancyStateInterface> compress() = 0;

        virtual void finalize() = 0;

        virtual std::shared_ptr<Space> getActionSpaceAt(number t) = 0;
        virtual void setActionSpaceAt(number t, std::shared_ptr<Space> action_space) = 0;

        virtual std::shared_ptr<JointHistoryInterface> getJointHistory(std::shared_ptr<JointHistoryInterface> candidate_jhistory) = 0;

        virtual void prepareIndividualHierarchicalHistoryVectors(number t) = 0;
        virtual std::shared_ptr<JointHistoryInterface> getIndividualHierarchicalHistory(number t, number agent, std::shared_ptr<JointHistoryInterface> candidate_ihhistory) = 0;
        virtual std::vector<std::shared_ptr<JointHistoryInterface>> getIndividualHierarchicalHistoriesOf(number t, number agent) = 0;
        virtual bool individualHierarchicalHistoryVectorForIsDone(number t, number agent) = 0;
        virtual void pushToIndividualHierarchicalHistoriesOf(number t, number agent, std::shared_ptr<JointHistoryInterface>& individual_hierarchical_history) = 0;

        virtual std::vector<std::shared_ptr<JointHistoryInterface>> getJointHistoryVector(number t) = 0;
        virtual void pushToJointHistoryVector(number t, std::shared_ptr<JointHistoryInterface>& individual_hierarchical_history) = 0;
    };
}
````

