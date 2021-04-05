
# File initializer.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**initializer.hpp**](initializer_8hpp.md)

[Go to the documentation of this file.](initializer_8hpp.md) 


````cpp
#pragma once
#include <math.h>

#include <sdm/utils/value_function/value_function.hpp>

namespace sdm
{
    template <typename TState, typename TAction>
    class Initializer
    {
    public:
        virtual void init(ValueFunction<TState, TAction> *vf) = 0;
    };

    template <typename TState, typename TAction>
    class ValueInitializer : public Initializer<TState, TAction>
    {
    protected:
        double value;

    public:
        ValueInitializer(double v) : value(v)
        {
        }

        void init(ValueFunction<TState, TAction> *vf)
        {
            if (vf->getHorizon() < 1)
            {
                vf->initialize(this->value);
            }
            else
            {
                for (int t = 0; t < vf->getHorizon(); t++)
                {
                    vf->initialize(this->value, t);
                }
            }
        }
    };

    template <typename TState, typename TAction>
    class ZeroInitializer : public ValueInitializer<TState, TAction>
    {
    };

    template <typename TState, typename TAction>
    class MaxInitializer : public Initializer<TState, TAction>
    {
    public:
        void init(ValueFunction<TState, TAction> *vf)
        {
            if (vf->isInfiniteHorizon())
            {
                assert(vf->getWorld()->getDiscount() < 1);
                double value;
                double factor = 0, comp = 0;
                int n = 0;
                do
                {
                    comp = factor;
                    factor += std::pow(vf->getWorld()->getDiscount(), n);
                    n++;
                } while ((factor - comp) > 0.0001);
                value = floor(vf->getWorld()->getRewards()[0].getMaxReward() * factor)+1;
                vf->initialize(value);
            }
            else
            {
                for (int t = 0; t < vf->getHorizon(); t++)
                {
                    vf->initialize(vf->getWorld()->getRewards()[0].getMaxReward() * (vf->getHorizon() - t), t);
                }
            }
        }
    };

    template <typename TState, typename TAction>
    class MinInitializer : public Initializer<TState, TAction>
    {
    public:
        void init(ValueFunction<TState, TAction> *vf)
        {
            if (vf->isInfiniteHorizon())
            {
                assert(vf->getWorld()->getDiscount() < 1);
                double value;
                double factor = 0, comp = 0;
                int n = 0;
                do
                {
                    comp = factor;
                    factor += std::pow(vf->getWorld()->getDiscount(), n);
                    n++;
                } while ((factor - comp) > 0.0001);
                value = floor(vf->getWorld()->getRewards()[0].getMinReward() * factor);
                vf->initialize(value);
            }
            else
            {
                for (int t = 0; t < vf->getHorizon(); t++)
                {
                    vf->initialize(vf->getWorld()->getRewards()[0].getMinReward() * (vf->getHorizon() - t), t);
                }
            }
        }
    };
} // namespace sdm
````

