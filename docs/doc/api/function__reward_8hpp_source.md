
# File function\_reward.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**reward**](dir_59c5b62e8a8eb2a182fe05633902ea55.md) **>** [**function\_reward.hpp**](function__reward_8hpp.md)

[Go to the documentation of this file.](function__reward_8hpp.md) 


````cpp
#include <sdm/core/state/state.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/reward/reward_interface.hpp>

namespace sdm
{
    class FunctionReward : public RewardInterface
    {
    public:
        FunctionReward();
        FunctionReward(const std::string &expression);
        FunctionReward(const FunctionReward &copy);

        double getReward(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t) const;

        double getMaxReward(number t) const;
        double getMinReward(number t) const;

        void setMaxReward(number t, double max_value);
        void setMinReward(number t, double min_value);

    protected:
        std::string expression;
        double max = -999999, min = +999999;
    };
}
````

