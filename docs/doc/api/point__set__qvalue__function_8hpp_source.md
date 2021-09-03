
# File point\_set\_qvalue\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**point\_set\_qvalue\_function.hpp**](point__set__qvalue__function_8hpp.md)

[Go to the documentation of this file.](point__set__qvalue__function_8hpp.md) 


````cpp
// #pragma once
// // #define LOGTIME

// #include <sdm/utils/value_function/initializer/initializer.hpp>
// #include <sdm/utils/value_function/tabular_qvalue_function.hpp>
// #include <sdm/utils/value_function/backup/backup_interface.hpp>

// /**
//  * @brief Namespace grouping all tools required for sequential decision making.
//  * @namespace  sdm
//  */
// namespace sdm
// {
//     class PointSetQValueFunction : public TabularQValueFunction, ValueFunction
//     {
//     public:
//         using Container = typename TabularQValueFunction::Container;

//         PointSetQValueFunction(number horizon, std::shared_ptr<ValueInitializer> initializer, const std::shared_ptr<BackupInterfaceForValueFunction> &backup, const std::shared_ptr<ActionVFInterface> &action_vf);

//         PointSetQValueFunction(number horizon = 0, double default_value = 0., const std::shared_ptr<BackupInterfaceForValueFunction> &backup = nullptr, const std::shared_ptr<ActionVFInterface> &action_vf = nullptr);

//         /**
//          * @brief Update the value at a specific state and timestep.
//          * 
//          * @param state the state
//          * @param t the timestep. Must be less than the horizon, $t < h$. Except in serialized problem solving where real timesteps are serialized and thus we need $t < h \times n$. 
//          */
//         void updateValueAt(const std::shared_ptr<State> &state, number t = 0);

//         /**
//          * @brief Update the value at a given state
//          */
//         void updateQValueAt(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t = 0);

//         Pair<std::shared_ptr<State>, double> evaluateAtQ(const std::shared_ptr<State>& state,const std::shared_ptr<Action>& action, number t);


//         std::string str() const;

//         /**
//          * @brief Evaluate the element given
//          * 
//          * @param state : ELement to evaluate
//          * @param t 
//          * @return Pair<std::shared_ptr<State>, double> 
//          */
//         Pair<std::shared_ptr<State>, double> evaluate(const std::shared_ptr<State> &state, number t);

//         friend std::ostream &operator<<(std::ostream &os, PointSetQValueFunction &vf)
//         {
//             os << vf.str();
//             return os;
//         }

//         double getValueAt(const std::shared_ptr<State> &state, number t);

//         void do_pruning(number t);

//         std::vector<std::shared_ptr<State>> getSupport(number t);

//         double getQValueAt(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);

//         /**
//          * @brief Update the value at a given state (given a delta)
//          */
//         void updateQValueAt(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t, double delta);

//         Container getRepresentation(number t);

//     // public:
//     //     friend class boost::serialization::access;

//     //     template <class Archive>
//     //     void serialize(Archive &archive, const unsigned int)
//     //     {
//     //         using boost::serialization::make_nvp;

//     //         archive &make_nvp("horizon", this->horizon_);
//     //         archive &make_nvp("representation", this->representation);
//     //     }
//     };
// } // namespace sdm
````

