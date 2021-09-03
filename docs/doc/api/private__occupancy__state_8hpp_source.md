
# File private\_occupancy\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**private\_occupancy\_state.hpp**](private__occupancy__state_8hpp.md)

[Go to the documentation of this file.](private__occupancy__state_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/state/occupancy_state.hpp>

namespace sdm
{
    
    class PrivateOccupancyState : public OccupancyState
    {
    public:
        static double PRECISION_COMPRESSION;

        PrivateOccupancyState();
        PrivateOccupancyState(number num_agents);
        PrivateOccupancyState(number agent_id, number num_agents);
        PrivateOccupancyState(const PrivateOccupancyState &);
        PrivateOccupancyState(const OccupancyState &);

        number getAgentId() const;

        const std::vector<std::shared_ptr<HistoryInterface>> &getPartialJointHistory(const std::shared_ptr<JointHistoryInterface> &) const;
        
        std::shared_ptr<JointHistoryInterface> getJointHistoryFromPartial(const std::vector<std::shared_ptr<HistoryInterface>> &) const;

        void finalize();
        void finalize(bool do_compression);

        bool check_equivalence(const PrivateOccupancyState &) const;

        std::string str() const;

    protected:

        std::vector<std::shared_ptr<HistoryInterface>> getPartialJointHistory(const std::vector<std::shared_ptr<HistoryInterface>> &) const;

        number agent_id_;

        typedef boost::bimaps::bimap<std::shared_ptr<JointHistoryInterface>, Joint<std::shared_ptr<HistoryInterface>>> bimap_type;
        typedef typename bimap_type::value_type bimap_value;

        bimap_type bimap_jhist_partial_jhist;
    };
} // namespace sdm
````

