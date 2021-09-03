
# File base\_observation.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**observation**](dir_41a0d04126e8d45b46052647fbad64a4.md) **>** [**base\_observation.hpp**](base__observation_8hpp.md)

[Go to the documentation of this file.](base__observation_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{

  template <typename TObservation>
  class BaseObservation : public Observation
  {
  public:
    BaseObservation();
    
    BaseObservation(const TObservation &item);

    virtual ~BaseObservation();

    virtual TObservation getObservation() const;

    virtual void setObservation(const TObservation &state);

    virtual std::string str() const;

  protected:
    TObservation observation_;
  };

  using DiscreteObservation = BaseObservation<number>;
  using DiscreteObservationString = BaseObservation<std::string>;
  using ContinuousObservation = BaseObservation<double>;

} // namespace sdm

#include <sdm/core/observation/base_observation.tpp>
````

