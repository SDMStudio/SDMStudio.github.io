
# File tabular\_qvalue\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**tabular\_qvalue\_function.hpp**](tabular__qvalue__function_8hpp.md)

[Go to the documentation of this file.](tabular__qvalue__function_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/linear_algebra/mapped_matrix.hpp>

#include <sdm/utils/value_function/initializer/initializer.hpp>
#include <sdm/utils/value_function/qvalue_function.hpp>

namespace sdm
{
    template <class TInput = std::shared_ptr<State>>
    class TabularQValueFunction : public QValueFunction<TInput>
    {

    public:
        using Container = MappedMatrix<TInput, std::shared_ptr<Action>, double>;

        TabularQValueFunction(number horizon, double learning_rate, std::shared_ptr<QInitializer<TInput>> initializer, bool active_learning = true);

        TabularQValueFunction(number horizon = 0, double learning_rate = 0.1, double default_value = 0., bool active_learning = true);

        void initialize();

        void initialize(double v, number t = 0);

        std::shared_ptr<VectorInterface<std::shared_ptr<Action>, double>> getQValuesAt(const TInput &state, number t);

        double getQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t);

        // double getValueAt(const TInput &state, number t);

        // std::shared_ptr<Action> getBestAction(const TInput &state, number t = 0);

        void updateQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t = 0);

        void updateQValueAt(const TInput &state, const std::shared_ptr<Action> &action, number t, double delta);

        bool isNotSeen(const TInput &state, number t);

        int getNumStates() const;

        // void printNumberOfActions();
        // size_t getSize() const
        // {
        //     size_t size_tot = 0;
        //     for (const auto &repr : this->representation)
        //     {
        //         for (const auto &pair_action_value_funct : repr)
        //         {
        //             size_tot += pair_action_value_funct.second.size();
        //         }
        //     }
        //     return size_tot;
        // }

        virtual std::string str() const;

        friend std::ostream &operator<<(std::ostream &os, TabularQValueFunction &vf)
        {
            os << vf.str();
            return os;
        }

    protected:
        std::vector<Container> representation;

        double learning_rate_;
        bool active_learning_;

        std::shared_ptr<QInitializer<TInput>> initializer_;
    };
} // namespace sdm
#include <sdm/utils/value_function/tabular_qvalue_function.tpp>
````

