
# File tabular\_backup.hpp

[**File List**](files.md) **>** [**backup**](dir_803cd76b7b48fbc4f6eb3babc1175d51.md) **>** [**tabular\_backup.hpp**](tabular__backup_8hpp.md)

[Go to the documentation of this file.](tabular__backup_8hpp.md) 


````cpp
#pragma once

#include <sdm/utils/value_function/backup/backup_base.hpp>

namespace sdm
{
    class TabularBackup : public BackupBase<double>
    {
    public:
        using TData = double;

        TabularBackup();
        TabularBackup(const std::shared_ptr<SolvableByHSVI>& world);

        TData backup(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, const std::shared_ptr<Action>& action, number t);
    };
}

````

