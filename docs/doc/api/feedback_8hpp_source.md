
# File feedback.hpp

[**File List**](files.md) **>** [**public**](dir_33715f1cc09e852083918bf432e54d5e.md) **>** [**feedback.hpp**](feedback_8hpp.md)

[Go to the documentation of this file.](feedback_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <sdm/types.hpp>

#include <tuple>


namespace sdm{

  class feedback{
  protected:
    state s;
    double r;
    observation z;
    static double rmin, rmax;

  public:
    feedback();
    feedback(double, double);
    feedback(state, observation, double);

    virtual ~feedback();

    virtual state getState() const;
    virtual void setState(const state&);
    virtual double getReward() const;
    virtual void setReward(const double&);
    virtual double getNormalizedReward() const;
    virtual observation getObservation() const;
    virtual void setObservation(const observation&);
  };

}
````

