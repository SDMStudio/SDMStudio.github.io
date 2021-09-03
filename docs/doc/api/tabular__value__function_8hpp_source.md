
# File tabular\_value\_function.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**tabular\_value\_function.hpp**](tabular__value__function_8hpp.md)

[Go to the documentation of this file.](tabular__value__function_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/linear_algebra/mapped_vector.hpp>
#include <sdm/utils/value_function/initializer/initializer.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/backup/backup_interface.hpp>

namespace sdm
{
    template <class Hash = std::hash<std::shared_ptr<State>>, class KeyEqual = std::equal_to<std::shared_ptr<State>>>
    class BaseTabularValueFunction : public ValueFunction
    {
    public:
        using Container = MappedVector<std::shared_ptr<State>, double, Hash, KeyEqual>;

        BaseTabularValueFunction(number horizon, const std::shared_ptr<Initializer> &initializer, const std::shared_ptr<BackupInterfaceForValueFunction> &backup, const std::shared_ptr<ActionVFInterface> &action_vf, bool is_upper_bound );
        BaseTabularValueFunction(number horizon = 0, double default_value = 0., const std::shared_ptr<BackupInterfaceForValueFunction> &backup = nullptr, const std::shared_ptr<ActionVFInterface> &action_vf = nullptr, bool is_upper_bound = false);
        BaseTabularValueFunction(const BaseTabularValueFunction& copy);

        void initialize();

        void initialize(double default_value, number t = 0);

        double getValueAt(const std::shared_ptr<State> &state, number t = 0);

        virtual Pair<std::shared_ptr<State>, double> evaluate(const std::shared_ptr<State> &state, number t);

        virtual void updateValueAt(const std::shared_ptr<State> &state, number t = 0);
        virtual void updateValueAt(const std::shared_ptr<State> &state,const std::shared_ptr<Action>& action, number t = 0);

        void updateValueAt(const std::shared_ptr<State> &state, number t, double target);

        void save(std::string filename);

        void load(std::string filename);

        std::string str() const;

        std::vector<std::shared_ptr<State>> getSupport(number t);

        size_t getSize(number t) const;

        friend std::ostream &operator<<(std::ostream &os, BaseTabularValueFunction &vf)
        {
            os << vf.str();
            return os;
        }

        Container getRepresentation(number t);

        void do_pruning(number t);

        double getDefaultAt(number t);

    protected:
        std::vector<Container> representation;

        bool is_upper_bound_;

    public:
        friend class boost::serialization::access;

        template <class Archive>
        void serialize(Archive &archive, const unsigned int& )
        {

            using boost::serialization::make_nvp;

            archive &make_nvp("horizon", this->horizon_);
            archive &make_nvp("representation", representation);
        }
    };

    using TabularValueFunction = BaseTabularValueFunction<std::hash<std::shared_ptr<State>>, std::equal_to<std::shared_ptr<State>>>;
    using TabularValueFunction2 = BaseTabularValueFunction<sdm::hash_from_ptr<State>, sdm::equal_from_ptr<State>>;

} // namespace sdm

#include <sdm/utils/value_function/tabular_value_function.tpp>
````

