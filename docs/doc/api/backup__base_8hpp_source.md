
# File backup\_base.hpp

[**File List**](files.md) **>** [**backup**](dir_803cd76b7b48fbc4f6eb3babc1175d51.md) **>** [**backup\_base.hpp**](backup__base_8hpp.md)

[Go to the documentation of this file.](backup__base_8hpp.md) 


````cpp
#pragma once

#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/linear_algebra/vector_interface.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/backup/backup_interface.hpp>
#include <sdm/utils/linear_algebra/mapped_vector.hpp>

namespace sdm
{

    template<typename TData>
    class BackupBase : public BackupInterface<TData>
    {
    public:

        BackupBase();
        BackupBase(const std::shared_ptr<SolvableByHSVI>& world);
        
        virtual ~BackupBase();

        virtual TData backup(const std::shared_ptr<ValueFunction>& vf, const std::shared_ptr<State>& state, const std::shared_ptr<Action>& action, number t) = 0;
    protected : 
        std::shared_ptr<SolvableByHSVI> world_;
    };

} // namespace sdm
#include <sdm/utils/value_function/backup/backup_base.tpp>
````

