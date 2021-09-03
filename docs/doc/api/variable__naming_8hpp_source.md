
# File variable\_naming.hpp

[**File List**](files.md) **>** [**linear\_programming**](dir_0699598e7f4b6e2c3b8ad2b0ce6abc71.md) **>** [**variable\_naming.hpp**](variable__naming_8hpp.md)

[Go to the documentation of this file.](variable__naming_8hpp.md) 


````cpp
#pragma once
#include <sdm/utils/struct/recursive_map.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/state/interface/joint_history_interface.hpp>

namespace sdm
{
    class VarNaming
    {
    public:
        void setNumber(const std::string &, number);

        std::string getVarNameWeight(number);

        std::string getVarNameJointHistoryDecisionRule(const std::shared_ptr<Action>&, const std::shared_ptr<JointHistoryInterface>&);

        std::string getVarNameIndividualHistoryDecisionRule(const std::shared_ptr<Action>&,const std::shared_ptr<HistoryInterface>&, const number&);

        std::string getVarNameIndividualHistory(const std::shared_ptr<HistoryInterface>& ihistory, const number agent);

        number getNumber(const std::string &);

        std::string getVarNameWeightedStateJointHistory(const std::shared_ptr<State>&, const std::shared_ptr<State>&, const std::shared_ptr<JointHistoryInterface> &);

    protected:
        RecursiveMap<std::string, number> variables;
    };
}
````

