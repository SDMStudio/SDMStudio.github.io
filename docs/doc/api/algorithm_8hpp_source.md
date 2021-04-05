
# File algorithm.hpp

[**File List**](files.md) **>** [**public**](dir_33715f1cc09e852083918bf432e54d5e.md) **>** [**algorithm.hpp**](algorithm_8hpp.md)

[Go to the documentation of this file.](algorithm_8hpp.md) 


````cpp

/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <sdm/common.hpp>
#include <sdm/worlds.hpp>


namespace sdm{
  class Algorithm{
  protected:
    double rate_end      = 0.0001;
    double rate_start    = 1.0;
    double rate_decay    = 100000;

    double epsilon;
    double eps_end      = 0.0001;
    double eps_start    = 1.0;
    double eps_decay    = 100000;

  public:
    virtual ~Algorithm();
    virtual void solve(const std::shared_ptr<POSG>&, horizon, double=0.001, double=1.0) = 0;
  };
}
````

