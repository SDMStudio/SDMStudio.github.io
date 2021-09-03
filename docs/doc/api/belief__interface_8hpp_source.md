
# File belief\_interface.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**interface**](dir_21fe4a973b70de512eb6303f0a371aff.md) **>** [**belief\_interface.hpp**](belief__interface_8hpp.md)

[Go to the documentation of this file.](belief__interface_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/utils/linear_algebra/vector_interface.hpp>

namespace sdm
{
    
    class BeliefInterface : public State
    {
    public:
        virtual std::vector<std::shared_ptr<State>> getStates() const = 0;

        virtual size_t size() const = 0;

        virtual double getProbability(const std::shared_ptr<State> &state) const = 0;

        virtual void setProbability(const std::shared_ptr<State> &state, double proba) = 0;

        virtual void addProbability(const std::shared_ptr<State> &, double proba) = 0;

        virtual std::shared_ptr<State> sampleState() = 0;

        virtual void normalizeBelief(double norm_1) = 0;

        virtual bool operator==(const std::shared_ptr<BeliefInterface> &other) const = 0;
        virtual double operator^(const std::shared_ptr<BeliefInterface> &other) const = 0;
        virtual double operator<(const std::shared_ptr<BeliefInterface> &other) const = 0;

        virtual double norm_1() const = 0;

        virtual void setDefaultValue(double) = 0;
        virtual double getDefaultValue() const = 0;
        virtual void finalize() = 0;

        virtual std::shared_ptr<VectorInterface<std::shared_ptr<State>, double>> getVectorInferface() = 0;

        TypeState getTypeState() const
        {
            return TypeState::BELIEF_STATE;
        }

        virtual bool isStateExist(const std::shared_ptr<State>& state_tmp)const =0;
    };
}
````

