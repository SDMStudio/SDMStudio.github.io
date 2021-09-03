
# File tabular\_qvalue\_backup.hpp

[**File List**](files.md) **>** [**backup**](dir_803cd76b7b48fbc4f6eb3babc1175d51.md) **>** [**tabular\_qvalue\_backup.hpp**](tabular__qvalue__backup_8hpp.md)

[Go to the documentation of this file.](tabular__qvalue__backup_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/backup/qvalue_backup_interface.hpp>
#include <sdm/utils/value_function/qvalue_function.hpp>
#include <sdm/utils/rl/experience_memory.hpp>

namespace sdm
{

    class TabularQValueBackup : public QValueBackupInterface
    {
    public:

        TabularQValueBackup();
        TabularQValueBackup(std::shared_ptr<ExperienceMemory> experience_memory, std::shared_ptr<QValueFunction<>> q_value_table, std::shared_ptr<QValueFunction<>> target_q_value_table, double discount);
        
        virtual ~TabularQValueBackup();
        
        double update(number t);

        std::shared_ptr<Action> getGreedyAction(const std::shared_ptr<State> &state, number t);

        double getValueAt(const std::shared_ptr<State> &state, number t);

    protected:
        std::shared_ptr<ExperienceMemory> experience_memory_;
        std::shared_ptr<QValueFunction<>> q_value_table_;
        std::shared_ptr<QValueFunction<>> target_q_value_table_;
        double discount_;
    };
    

} // namespace sdm
````

