
# File maxplan\_backup.hpp

[**File List**](files.md) **>** [**backup**](dir_803cd76b7b48fbc4f6eb3babc1175d51.md) **>** [**maxplan\_backup.hpp**](maxplan__backup_8hpp.md)

[Go to the documentation of this file.](maxplan__backup_8hpp.md) 


````cpp

#pragma once

#include <sdm/utils/value_function/backup/backup_base.hpp>

namespace sdm
{
    class MaxPlanBackup : public BackupBase<std::shared_ptr<State>>
    {
    public:
        using TData = std::shared_ptr<State>;

        MaxPlanBackup();
        MaxPlanBackup(const std::shared_ptr<SolvableByHSVI> &);

        virtual TData backup(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);

    protected:
        TData setHyperplanBelief(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);
        TData setHyperplanOccupancy(const std::shared_ptr<ValueFunction> &vf, const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, number t);
    };
}
````

