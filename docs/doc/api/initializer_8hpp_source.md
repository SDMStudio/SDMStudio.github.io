
# File initializer.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**utils**](dir_d5f9b32a4b7e3085fe36bb5e85e812de.md) **>** [**value\_function**](dir_9190e49f25bb1396e1fb4a6f0beec9b4.md) **>** [**initializer.hpp**](initializer_8hpp.md)

[Go to the documentation of this file.](initializer_8hpp.md) 


````cpp

#pragma once

#include <math.h>
#include <sdm/algorithms/hsvi.hpp>
#include <sdm/utils/value_function/value_function.hpp>
#include <sdm/utils/value_function/state_2_occupancy_vf.hpp>

namespace sdm
{
    template <typename TState, typename TAction>
    class Initializer
    {
    public:
        virtual void init(ValueFunction<TState, TAction> *vf) = 0;
        virtual ~Initializer() {}
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
    public:
        ZeroInitializer() : ValueInitializer<TState, TAction>(0)
        {
        }
    };

    template <typename TState, typename TAction>
    class BoundInitializer : public Initializer<TState, TAction>
    {
    protected:
        double value_;

    public:
        BoundInitializer() {}
        BoundInitializer(double value) : value_(value) {}

        void init(ValueFunction<TState, TAction> *vf)
        {
            auto under_pb = vf->getWorld()->getUnderlyingProblem();

            if (vf->isInfiniteHorizon())
            {
                // long l = log(1 - this->discount_) * this->error_ / this->reward_->getMaxReward();
                assert(under_pb->getDiscount() < 1);
                double value;
                double factor = 0, comp = 0;
                int n = 0;
                do
                {
                    comp = factor;
                    factor += std::pow(under_pb->getDiscount(), n);
                    n++;
                } while ((factor - comp) > 0.0001);
                value = floor(this->value_ * factor) + 1;
                vf->initialize(value);
            }
            else
            {
                double tot = 0;
                for (int t = vf->getHorizon() - 1; t >= 0; t--)
                {
                    if (vf->getWorld()->isSerialized())
                    {
                        if ((t + 1) % under_pb->getNumAgents() == 0)
                        {
                            tot = this->value_ + under_pb->getDiscount() * tot;
                        }
                    }
                    else
                    {
                        tot = this->value_ + under_pb->getDiscount() * tot;
                    }
                    vf->initialize(tot, t);
                }
            }
        }
    };

    template <typename TState, typename TAction>
    class MinInitializer : public BoundInitializer<TState, TAction>
    {
    public:
        MinInitializer() { std::cout << "In MinInitalizer" << std::endl; }

        void init(ValueFunction<TState, TAction> *vf)
        {
            this->value_ = vf->getWorld()->getUnderlyingProblem()->getReward()->getMinReward();
            BoundInitializer<TState, TAction>::init(vf);
        }
    };

    template <typename TState, typename TAction>
    class MaxInitializer : public BoundInitializer<TState, TAction>
    {
    public:
        MaxInitializer() { std::cout << "In MaxInitalizer" << std::endl; }

        void init(ValueFunction<TState, TAction> *vf)
        {
            this->value_ = vf->getWorld()->getUnderlyingProblem()->getReward()->getMaxReward();
            BoundInitializer<TState, TAction>::init(vf);
        }
    };

    template <typename TState, typename TAction>
    class BlindInitializer : public Initializer<TState, TAction>
    {
    public:
        BlindInitializer()
        {
            std::cout << "In BlindInitalizer" << std::endl;
        }

        void init(ValueFunction<TState, TAction> *vf)
        {
            auto under_pb = vf->getWorld()->getUnderlyingProblem();
            std::vector<double> ra;

            for (auto &a : under_pb->getActionSpace()->getAll())
            {
                ra.push_back(std::numeric_limits<double>::max());
                for (auto &s : under_pb->getStateSpace()->getAll())
                {
                    ra.back() = std::min(under_pb->getReward(s, a), ra.back());
                }
            }
            if (vf->isInfiniteHorizon())
            {
                vf->initialize(*std::max_element(ra.begin(), ra.end()) / (1. - under_pb->getDiscount()));
            }
            else
            {
                double min_rsa = *std::max_element(ra.begin(), ra.end()), tot = 0;
                for (int t = vf->getHorizon() - 1; t >= 0; t--)
                {
                    if (vf->getWorld()->isSerialized())
                    {
                        if ((t + 1) % under_pb->getNumAgents() == 0)
                        {
                            tot = min_rsa + under_pb->getDiscount() * tot;
                        }
                    }
                    else
                    {
                        tot = min_rsa + under_pb->getDiscount() * tot;
                    }
                    vf->initialize(tot, t);
                }
            }
        }
    };
    
    // A refaire ultérieurement !!


    // template <typename TState, typename TAction>
    // class PolicyEvaluationInitializer : public Initializer<TState, TAction>
    // {
    // public:
    //     PolicyEvaluationInitializer()
    //     {
    //         std::cout << "In PolicyEvaluationInitializer" << std::endl;
    //     }

    //     void init(ValueFunction<TState, TAction> *vf)
    //     {
    //         auto under_pb = vf->getWorld()->getUnderlyingProblem();

    //         // Je vais évaluer chaque politique en fonction d'une Value fonction correcte

    //         std::vector<double> ra;

    //         //for (const auto &a : under_pb->getActionSpace()->getAll())
    //         //{
    //         // auto lb_init = sdm::ZeroInitializer<TState,TAction>();
    //         // lb_init.init(vf);

    //         for (const auto &a : under_pb->getActionSpace()->getAll())
    //         {
    //             for(int t = vf->getHorizon()-1;t>=0 ;t--)
    //             {
    //                 double resultat = vf->getQValueAt(s,a,t);
    //                 // for(const auto &s : under_pb->getStateSpace()->getAll())
    //                 // {
    //                 //     // double reward= under_pb->getReward(s, a);
    //                 //     // double resultat = 0.0;
    //                 //     // for(auto &s_2 : under_pb->getStateSpace()->getAll())
    //                 //     // {
    //                 //     //     resultat += under_pb->getStateDynamics()->getTransitionProbability(s, a, s_2)*(reward+ under_pb->getDiscount()*vf->getQValueAt(s_2,t+1));
    //                 //     // }
    //                 // }
    //                 // lb_init->initialise(resultat,t);
    //             }
    //         }

    //             // ra.push_back(std::numeric_limits<double>::max());
    //             // for (auto &s : under_pb->getStateSpace()->getAll())
    //             // {
    //             //    ra.back() = std::min(policyEvaluation(a,s,vf), ra.back());
    //             // }
    //             //ra.push_back(policyEvaluation(a,under_pb->getInternalState(),vf));
    //         //}

    //         std::cout<<vf->str();

    //         if (vf->isInfiniteHorizon())
    //         {
    //             vf->initialize(*std::max_element(ra.begin(), ra.end()) / (1. - under_pb->getDiscount()));
    //         }
    //         else
    //         {
    //             double min_rsa = *std::max_element(ra.begin(), ra.end()), tot = 0;
    //             for (int t = vf->getHorizon() - 1; t >= 0; t--)
    //             {
    //                 if (vf->getWorld()->isSerialized())
    //                 {
    //                     if ((t + 1) % under_pb->getNumAgents() == 0)
    //                     {
    //                         tot = min_rsa + under_pb->getDiscount() * tot;
    //                     }
    //                 }
    //                 else
    //                 {
    //                     tot = min_rsa + under_pb->getDiscount() * tot;
    //                 }
    //                 vf->initialize(tot, t);
    //             }
    //         }
    //     }

    //     double policyEvaluation(const number &politique, const number &state, ValueFunction<TState, TAction> *vf)
    //     {
    //         auto under_pb = vf->getWorld()->getUnderlyingProblem();
    //         double reward= under_pb->getReward(state, politique);
    //         double resultat = 0.0;
    //         for(auto &s_2 : under_pb->getStateSpace()->getAll())
    //         {
    //             resultat += under_pb->getStateDynamics()->getTransitionProbability(state, politique, s_2)*(reward+ under_pb->getDiscount()*vf->getValueAt(s_2));
    //         }
    //         return resultat;
    //     }

    //     double policyEvaluation(const Joint<number> &politique, const number &state, ValueFunction<TState, TAction> *vf)
    //     {
    //         auto under_pb = vf->getWorld()->getUnderlyingProblem();
    //         double reward= under_pb->getReward(state, politique);
    //         double resultat = 0.0;
    //         for(auto &s_2 : under_pb->getStateSpace()->getAll())
    //         {
    //             resultat += under_pb->getStateDynamics()->getTransitionProbability(state, under_pb->getActionSpace()->getJointItemIndex(politique), s_2)*(reward+ under_pb->getDiscount()*vf->getValueAt(s_2));
    //         }
    //         return resultat;
    //     }
    // };
}// namespace sdm
````

