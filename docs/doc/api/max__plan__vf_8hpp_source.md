
# File max\_plan\_vf.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**max\_plan\_vf.hpp**](max__plan__vf_8hpp.md)

[Go to the documentation of this file.](max__plan__vf_8hpp.md) 


````cpp

#pragma once
#include <set>
#include <sdm/utils/linear_algebra/vector.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/initializer.hpp>

namespace sdm
{
    template <typename TVector, typename TAction, typename TValue = double>
    class MaxPlanValueFunction : public ValueFunction<TVector, TAction, TValue>
    {
    protected:
        using HyperplanSet = std::set<TVector>;

        std::vector<HyperplanSet> representation;

        std::shared_ptr<Initializer<TVector, TAction>> initializer_;

        // std::vector<TValue> default_value_;

    public:
        MaxPlanValueFunction();
        MaxPlanValueFunction(std::shared_ptr<SolvableByHSVI<TVector, TAction>> problem, int horizon, std::shared_ptr<Initializer<TVector, TAction>> initializer);
        MaxPlanValueFunction(std::shared_ptr<SolvableByHSVI<TVector, TAction>> problem, int horizon = 0, TValue default_value = 0.);

        void initialize();
        void initialize(TValue default_value, int t = 0);

        void updateValueAt(const TVector &state);

        TValue getValueAt(const TVector &state, int t = 0);

        std::pair<TValue, TVector> getMaxAt(const TVector &state, int t);

        number size();

        void prune(int t = 0);

        void lark_prune(int t = 0);

        void bounded_prune(int t = 0);

        TVector backup_bellman_operator(std::shared_ptr<POSG> world, TVector belief);

        TAction getBestAction(const TVector &state, int t = 0);
        TValue getQValueAt(const TVector &state, const TAction &action, int t = 0);
        std::shared_ptr<VectorImpl<TAction, TValue>> getQValueAt(const TVector &state, int t = 0);
        TValue operator()(const TVector &state);

        void updateValueAt(const TVector &state, int t = 0);

        std::string str() {
            return "MaxPlanVF";
        }
    };
} // namespace sdm
#include <sdm/utils/value_function/max_plan_vf.tpp>
````

