
# File decision\_process\_base.hpp

[**File List**](files.md) **>** [**base**](dir_f82058e37a1f60b84f8487517c6ff983.md) **>** [**decision\_process\_base.hpp**](decision__process__base_8hpp.md)

[Go to the documentation of this file.](decision__process__base_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/world/base/stochastic_process_base.hpp>

namespace sdm
{

    template <typename TStateSpace, typename TActionSpace, typename TDistrib>
    class DecisionProcessBase : public virtual StochasticProcessBase<TStateSpace, TDistrib>
    {
    public:
        using action_space_type = TActionSpace;
        using action_type = typename TActionSpace::value_type;

        DecisionProcessBase();
        DecisionProcessBase(std::shared_ptr<TStateSpace> state_sp, std::shared_ptr<TActionSpace> action_sp);
        DecisionProcessBase(std::shared_ptr<TStateSpace> state_sp, std::shared_ptr<TActionSpace> action_sp, TDistrib start_distrib, number planning_horizon = 0, double discount = 0.9, Criterion criterion = Criterion::REW_MAX);

        std::string getFileName();

        void setFileName(std::string filename);

        double getBound();

        void setBound(double bound);

        Criterion getCriterion();

        void setCriterion(Criterion);

        double getDiscount();

        void setDiscount(double);

        number getPlanningHorizon();

        void setPlanningHorizon(number);

        std::shared_ptr<TActionSpace> getActionSpace() const;

        void setActionSpace(std::shared_ptr<TActionSpace>);

    protected:
        std::shared_ptr<TActionSpace> action_space_;

        number planning_horizon_ = 0;

        double discount_ = 1.0, bound_;

        Criterion criterion_ = Criterion::REW_MAX;

        std::string filename_;
    };

} // namespace sdm
#include <sdm/world/base/decision_process_base.tpp>
````

