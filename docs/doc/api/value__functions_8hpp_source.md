
# File value\_functions.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**value\_functions.hpp**](value__functions_8hpp.md)

[Go to the documentation of this file.](value__functions_8hpp.md) 


````cpp

#pragma once

#include <map>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/tabular_value_function.hpp>

namespace sdm
{
    template <typename TState, typename TAction, template <typename TS, typename TA> class TValueFunction>
    std::shared_ptr<ValueFunction<TState, TAction>> createInstance() { return std::shared_ptr<TValueFunction<TState, TAction>>(new TValueFunction<TState, TAction>); }

    template <typename TState, typename TAction>
    class ValueFunctionFactory
    {
    protected:
        typedef std::map<std::string, std::shared_ptr<Initializer<TState, TAction>> (*)()> map_type;
        static inline map_type registry_ = {
            {"TabularValueFunction", &createInstance<TState, TAction, TabularValueFunction>},
            {"MappedValueFunction", &createInstance<TState, TAction, MappedValueFunction>},
        };

    public:
        static map_type &getRegistry()
        {
            return registry_;
        }

        static std::vector<std::string> available()
        {
            std::vector<std::string> available;
            for (auto const &values : registry_)
                available.push_back(values.first);
            return available;
        }

        static std::shared_ptr<Initializer<TState, TAction>> make(std::string name)
        {
            typename map_type::iterator it = getRegistry().find(name);
            if (it == getRegistry().end())
                return 0;
            return it->second();
        }

        template <template <typename TS, typename TA> class TValueFunction>
        static void addToRegistry(std::string name)
        {
            if (getRegistry().find(name) == getRegistry().end())
            {
                getRegistry().insert(std::make_pair(name, &createInstance<TState, TAction, TValueFunction>));
            }
            else
            {
                sdm::exception::Exception("Key '" + name + "' already used in ValueFunction Registry.");
            }
        }
    };

    template <typename TState, typename TAction>
    std::shared_ptr<Initializer<TState, TAction>> makeValueFunction(std::string init_name)
    {
        return ValueFunctionFactory<TState, TAction>::make(init_name);
    }

} // namespace sdm
````

