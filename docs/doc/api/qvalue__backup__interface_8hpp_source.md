
# File qvalue\_backup\_interface.hpp

[**File List**](files.md) **>** [**backup**](dir_803cd76b7b48fbc4f6eb3babc1175d51.md) **>** [**qvalue\_backup\_interface.hpp**](qvalue__backup__interface_8hpp.md)

[Go to the documentation of this file.](qvalue__backup__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>

namespace sdm
{
    class State;
    class Action;

    class QValueBackupInterface
    {
    public:  

        virtual double update(number t) = 0;

        virtual std::shared_ptr<Action> getGreedyAction(const std::shared_ptr<State> &state, number t) = 0;

        virtual double getValueAt(const std::shared_ptr<State> &state, number t) = 0;
    };

} // namespace sdm
````

