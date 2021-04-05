
# File initializers.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**initializers.hpp**](initializers_8hpp.md)

[Go to the documentation of this file.](initializers_8hpp.md) 


````cpp

#pragma once

#include <map>
#include <boost/bind.hpp>
#include <boost/function.hpp>

#include <sdm/utils/struct/vector.hpp>
#include <sdm/utils/value_function/initializer.hpp>
#include <sdm/utils/value_function/initializer/mdp_initializer.hpp>
#include <sdm/utils/value_function/initializer/pomdp_initializer.hpp>

namespace sdm
{
    template <typename TState, typename TAction, template <typename TS, typename TA> class TInit>
    std::shared_ptr<Initializer<TState, TAction>> createInstance() { return std::shared_ptr<TInit<TState, TAction>>(new TInit<TState, TAction>); }

    template <typename TState, typename TAction, template <typename TS, typename TA> class TInit>
    std::shared_ptr<Initializer<TState, TAction>> createInstanceAlgoInit(std::string algo_name, double error, int trials) { return std::shared_ptr<TInit<TState, TAction>>(new TInit<TState, TAction>(algo_name, error, trials)); }

    template <typename TState, typename TAction>
    std::shared_ptr<Initializer<TState, TAction>> createInstanceTabMDPInit() { return boost::bind(createInstanceAlgoInit<TState, TAction, MDPInitializer>, "tabular_hsvi", 0., 10000)(); }

    template <typename TState, typename TAction>
    std::shared_ptr<Initializer<TState, TAction>> createInstanceTabPOMDPInit() { return boost::bind(createInstanceAlgoInit<TState, TAction, POMDPInitializer>, "tabular_hsvi", 0., 10000)(); }

    template <typename TState, typename TAction>
    class InitializerFactory
    {
    protected:
        typedef std::map<std::string, std::shared_ptr<Initializer<TState, TAction>> (*)()> map_type;
        static inline map_type registry_ = {
            {"MinInitializer", &createInstance<TState, TAction, MinInitializer>},
            {"MaxInitializer", &createInstance<TState, TAction, MaxInitializer>},
            {"BlindInitializer", &createInstance<TState, TAction, BlindInitializer>},
            {"ZeroInitializer", &createInstance<TState, TAction, ZeroInitializer>},
            //{"PolicyEvaluationInitializer", &createInstance<TState, TAction, PolicyEvaluationInitializer>},
            {"MdpHsviInitializer", &createInstanceTabMDPInit<TState, TAction>},
            {"PomdpHsviInitializer", &createInstanceTabPOMDPInit<TState, TAction>},
        };

    public:
        static map_type &getRegistry()
        {
            return registry_;
        }

        static std::vector<std::string> available()
        {
            std::vector<std::string> available_init;
            for (auto const &pair_init : registry_)
                available_init.push_back(pair_init.first);
            return available_init;
        }

        static std::shared_ptr<Initializer<TState, TAction>> make(std::string name)
        {
            typename map_type::iterator it = InitializerFactory<TState, TAction>::getRegistry().find(name);
            if (it == InitializerFactory<TState, TAction>::getRegistry().end())
            {
                std::string init_names = "{";
                for (auto &v : InitializerFactory<TState, TAction>::available())
                {
                    init_names = init_names + "\"" + v + "\" ";
                }
                throw sdm::exception::Exception(name + " not registered. Available initializers are : " + init_names + "}");
            }
            return it->second();
        }

        template <template <typename TS, typename TA> class TInitializer>
        static void addToRegistry(std::string name)
        {
            if (getRegistry().find(name) == getRegistry().end())
            {
                InitializerFactory<TState, TAction>::getRegistry().insert(std::make_pair(name, &createInstance<TState, TAction, TInitializer>));
            }
            else
            {
                throw sdm::exception::Exception("Key '" + name + "' already used in Initializer Registry.");
            }
        }
    };

    template <typename TState, typename TAction>
    std::shared_ptr<Initializer<TState, TAction>> makeInitializer(std::string init_name)
    {
        return InitializerFactory<TState, TAction>::make(init_name);
    }

} // namespace sdm
````

