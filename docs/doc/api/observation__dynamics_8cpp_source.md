
# File observation\_dynamics.cpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**observation\_dynamics.cpp**](observation__dynamics_8cpp.md)

[Go to the documentation of this file.](observation__dynamics_8cpp.md) 


````cpp
/*=============================================================================
Copyright (C) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#include <boost/numeric/ublas/matrix_sparse.hpp>
#include <boost/numeric/ublas/vector.hpp>

#include <sdm/core/observation_dynamics.hpp>
#include <sdm/utils/linear_algebra/matrix.hpp>

namespace sdm
{

  ObservationDynamics::ObservationDynamics()
  {
  }

  ObservationDynamics::ObservationDynamics(ObservationDynamics &copy) : o_model(copy.getObservationProbabilities()), dynamics(copy.getDynamics())
  {
  }

  ObservationDynamics::ObservationDynamics(number num_jactions, number num_jobservations, number num_states)
  {
    this->initDynamics(num_jactions, num_jobservations, num_states);
  }

  void ObservationDynamics::initDynamics(number num_jactions, number num_jobservations, number num_states)
  {
    number a;
    number o;

    for (a = 0; a < num_jactions; ++a)
    {
      this->dynamics.push_back(std::vector<Matrix>());
      this->o_model.push_back(Matrix(num_states, num_jobservations));
      for (o = 0; o < num_jobservations; ++o)
      {
        this->dynamics[a].push_back(Matrix(num_states, num_states));
      }
    }
  }

  double ObservationDynamics::getObservationProbability(number u, number z, number x) const
  {
    return this->o_model[u](x, z);
  }

  void ObservationDynamics::setObservationProbability(number u, number z, number x, double prob)
  {
    this->o_model[u](x, z) = prob;
  }

  const std::unordered_set<number> &ObservationDynamics::getObservationSuccessors(number u, number x)
  {
    return this->successor_observations.at(x).at(u);
  }

  void ObservationDynamics::setObservations(const std::vector<Matrix> &o_model)
  {
    this->o_model = o_model;
  }

  const Matrix &ObservationDynamics::getObservations(number u) const
  {
    return this->o_model[u];
  }

  double ObservationDynamics::getDynamics(number s, number a, number o, number s_) const
  {
    return dynamics[a][o](s, s_);
  }

  const Matrix &ObservationDynamics::getDynamics(number a, number o) const
  {
    return dynamics[a][o];
  }

  void ObservationDynamics::setDynamics(number a, number o, const Matrix &m)
  {
    this->dynamics[a][o] = m;
  }

  void ObservationDynamics::setDynamics(number s, number a, number o, number s_, double prob)
  {
    this->dynamics[a][o](s, s_) = prob;
  }

  const std::vector<std::vector<Matrix>> &ObservationDynamics::getDynamics() const
  {
    return this->dynamics;
  }
  
  const std::vector<Matrix> &ObservationDynamics::getObservationProbabilities() const
  {
    return this->o_model;
  }
} // namespace sdm
````
