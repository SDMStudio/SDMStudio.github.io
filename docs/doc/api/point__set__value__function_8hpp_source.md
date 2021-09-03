
# File point\_set\_value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**point\_set\_value\_function.hpp**](point__set__value__function_8hpp.md)

[Go to the documentation of this file.](point__set__value__function_8hpp.md) 


````cpp
#pragma once
#define LOGTIME

#include <sdm/utils/value_function/initializer/initializer.hpp>
#include <sdm/utils/value_function/tabular_value_function.hpp>
#include <sdm/utils/value_function/backup/backup_interface.hpp>

namespace sdm
{
    template <class Hash = std::hash<std::shared_ptr<State>>, class KeyEqual = std::equal_to<std::shared_ptr<State>>>
    class BasePointSetValueFunction : public BaseTabularValueFunction<Hash, KeyEqual>
    {
    public:
        using Container = typename BaseTabularValueFunction<Hash, KeyEqual>::Container;

        BasePointSetValueFunction(number horizon, const std::shared_ptr<Initializer> &initializer, const std::shared_ptr<BackupInterfaceForValueFunction> &backup, const std::shared_ptr<ActionVFInterface> &action_vf, int freq_prunning = -1, TypeOfSawtoothPrunning type_of_sawtooth_prunning = TypeOfSawtoothPrunning::NONE);

        BasePointSetValueFunction(number horizon, double default_value = 0., const std::shared_ptr<BackupInterfaceForValueFunction> &backup = nullptr, const std::shared_ptr<ActionVFInterface> &action_vf = nullptr, int freq_prunning = -1, TypeOfSawtoothPrunning type_of_sawtooth_prunning = TypeOfSawtoothPrunning::NONE);

        std::string str() const;

        Pair<std::shared_ptr<State>, double> evaluate(const std::shared_ptr<State> &state, number t);

        friend std::ostream &operator<<(std::ostream &os, BasePointSetValueFunction &vf)
        {
            os << vf.str();
            return os;
        }

        double getValueAt(const std::shared_ptr<State> &state, number t);

        void do_pruning(number t);
        
    protected:

        bool is_sawtooth_lp = false;

        number freq_pruning_;

        number last_prunning = 0;

        double epsilon_prunning;

        TypeOfSawtoothPrunning type_of_sawtooth_prunning_;

        void prune(number t = 0);

        double computeRatio(const std::shared_ptr<State> &state, const std::shared_ptr<State> &point, number t);

        double ratioOccupancy(const std::shared_ptr<State> &state, const std::shared_ptr<State> &point,number t);

        double ratioBelief(const std::shared_ptr<State> &state, const std::shared_ptr<State> &point);

        Pair<std::unordered_map<std::shared_ptr<State>,std::vector<std::shared_ptr<State>>>,std::map<int,std::vector<std::shared_ptr<State>>>> iterative_pruning(number t);

    public:
        friend class boost::serialization::access;

        template <class Archive>
        void serialize(Archive &archive, const unsigned int)
        {
            using boost::serialization::make_nvp;

            archive &make_nvp("horizon", this->horizon_);
            archive &make_nvp("representation", this->representation);
        }
    };

    using PointSetValueFunction = BasePointSetValueFunction<std::hash<std::shared_ptr<State>>, std::equal_to<std::shared_ptr<State>>>;
    using PointSetValueFunction2 = BasePointSetValueFunction<sdm::hash_from_ptr<State>, sdm::equal_from_ptr<State>>;

} // namespace sdm

#include <sdm/utils/value_function/point_set_value_function.tpp>
````

