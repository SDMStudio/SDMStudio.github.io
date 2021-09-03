
# File initializer.hpp

[**File List**](files.md) **>** [**initializer**](dir_8f297180fb36cffec7cf6cc452bb4d2e.md) **>** [**initializer.hpp**](initializer_8hpp.md)

[Go to the documentation of this file.](initializer_8hpp.md) 


````cpp

#pragma once

#include <math.h>
#include <sdm/types.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/world/base/mdp_interface.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/qvalue_function.hpp>

namespace sdm
{
    class Initializer
    {
    public:
        virtual void init(std::shared_ptr<ValueFunction> vf) = 0;
        virtual ~Initializer() {}
    };

    template <class TInput = std::shared_ptr<State>>
    class QInitializer
    {
    public:
        virtual void init(std::shared_ptr<QValueFunction<TInput>> vf) = 0;
        virtual ~QInitializer() {}
    };

    template <class TInput = std::shared_ptr<State>>
    class ValueInitializer : public Initializer, public QInitializer<TInput>
    {
    protected:
        double value;

    public:
        ValueInitializer(double v) : value(v){};

        template <class TGlobalInput>
        void initBase(std::shared_ptr<BaseValueFunction<TGlobalInput>> vf)
        {
            if (vf->getHorizon() < 1)
            {
                vf->initialize(this->value);
            }
            else
            {
                for (number t = 0; t < vf->getHorizon(); t++)
                {
                    vf->initialize(this->value, t);
                }

                vf->initialize(0, vf->getHorizon());
            }
        }

        void init(std::shared_ptr<ValueFunction> vf)
        {
            this->template initBase<std::shared_ptr<State>>(vf);
        }
        void init(std::shared_ptr<QValueFunction<TInput>> vf)
        {
            this->template initBase<Pair<TInput,std::shared_ptr<Action>>>(vf);
        }
    };

    template <class TInput = std::shared_ptr<State>>
    class ZeroInitializer : public ValueInitializer<TInput>
    {
    public:
        ZeroInitializer(std::shared_ptr<SolvableByHSVI> = nullptr)  : ValueInitializer<TInput>(0){}
    };

    class BoundInitializer : public Initializer
    {
    protected:
        double value_;
        double (MDPInterface::*callback_value)(number) const = nullptr;
        std::shared_ptr<SolvableByHSVI> world_;

    public:
        BoundInitializer();
        BoundInitializer(std::shared_ptr<SolvableByHSVI> world,double value);

        void init(std::shared_ptr<ValueFunction> vf);
        double getValue(std::shared_ptr<ValueFunction> vf, number t);
        double computeValueInfiniteHorizon(std::shared_ptr<ValueFunction> vf);
    };

    class MinInitializer : public BoundInitializer
    {
    public:
        MinInitializer(std::shared_ptr<SolvableByHSVI> world);

        void init(std::shared_ptr<ValueFunction> vf);
    };

    class MaxInitializer : public BoundInitializer
    {
    public:
        MaxInitializer(std::shared_ptr<SolvableByHSVI> world);

        void init(std::shared_ptr<ValueFunction> vf);
    };

    class BlindInitializer : public BoundInitializer
    {
    public:
        BlindInitializer(std::shared_ptr<SolvableByHSVI> world);

        void init(std::shared_ptr<ValueFunction> vf);
    };

} // namespace sdm

````

