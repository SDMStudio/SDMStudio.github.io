
# File backward\_induction.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**backward\_induction.hpp**](backward__induction_8hpp.md)

[Go to the documentation of this file.](backward__induction_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/public/algorithm.hpp>
#include <sdm/utils/logging/logger.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/value_function/tabular_value_function.hpp>

namespace sdm
{

  class BackwardInduction : public Algorithm, public std::enable_shared_from_this<BackwardInduction>
  {
  protected:
    std::shared_ptr<SolvableByHSVI> world_;

    std::shared_ptr<TabularValueFunction> bound_;

    std::shared_ptr<MultiLogger> logger_;

    std::string name_ = "backward_induction";

    std::shared_ptr<State> start_state;

  public:
    BackwardInduction(std::shared_ptr<SolvableByHSVI> &world,
         std::string name = "backward induction");

    std::shared_ptr<BackwardInduction> getptr();

    void do_initialize();

    void do_solve();

    void do_test();

    void do_save();

    bool do_stop(const std::shared_ptr<State> &, double /*cost_so_far*/, number);

    void do_explore(const std::shared_ptr<State> &s, double /*cost_so_far*/, number h);

    // double backward_induction(const std::shared_ptr<State> &s, number h);

    std::shared_ptr<ValueFunction> getBound() const;

    int getTrial(){return 0;}

    double getResult();

    void saveResults(std::string filename, double other);
    
  };
} // namespace sdm
````

