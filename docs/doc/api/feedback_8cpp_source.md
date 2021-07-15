
# File feedback.cpp

[**File List**](files.md) **>** [**public**](dir_33715f1cc09e852083918bf432e54d5e.md) **>** [**feedback.cpp**](feedback_8cpp.md)

[Go to the documentation of this file.](feedback_8cpp.md) 


````cpp
#include <sdm/public/feedback.hpp>

namespace sdm{
  double feedback::rmin = 0;

  double feedback::rmax = 1;

  feedback::feedback(){}

  feedback::feedback(double min, double max){
    rmin = min;
    rmax = max;
  }

  feedback::feedback(state s, observation z, double r){
    this->s = s;
    this->r = r;
    this->z = z;
  }

  feedback::~feedback(){}

  state feedback::getState() const{
    return this->s;
  }

  void feedback::setState(const state& s){
    this->s = s;
  }

  double feedback::getReward() const{
    return this->r;
  }

  void feedback::setReward(const double& r){
    this->r = r;
  }

  observation feedback::getObservation() const{
    return this->z;
  }

  void feedback::setObservation(const observation& z){
    this->z = z;
  }

  double feedback::getNormalizedReward() const{
    return this->r / rmax;
  }
}
````
