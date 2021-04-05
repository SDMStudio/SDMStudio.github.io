
# File algorithm.hpp

[**File List**](files.md) **>** [**public**](dir_33715f1cc09e852083918bf432e54d5e.md) **>** [**algorithm.hpp**](algorithm_8hpp.md)

[Go to the documentation of this file.](algorithm_8hpp.md) 


````cpp

#pragma once

namespace sdm
{
  class Algorithm
  {
  public:
    virtual void do_initialize() = 0;

    virtual void do_solve() = 0;

    virtual void do_test() = 0;
  };
} // namespace sdm
````

