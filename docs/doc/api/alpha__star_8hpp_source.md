
# File alpha\_star.hpp

[**File List**](files.md) **>** [**algorithms**](dir_baab9deb2ceef290d17fdadea9d6b69b.md) **>** [**alpha\_star.hpp**](alpha__star_8hpp.md)

[Go to the documentation of this file.](alpha__star_8hpp.md) 


````cpp
#pragma once

#include <sdm/types.hpp>
#include <sdm/public/algorithm.hpp>
#include <sdm/utils/logging/logger.hpp>
#include <sdm/world/solvable_by_hsvi.hpp>
#include <sdm/utils/value_function/tabular_value_function.hpp>

#include <chrono>
#include <string>

namespace sdm
{

  class AlphaStar : public Algorithm, public std::enable_shared_from_this<AlphaStar>
  {
  protected:

    class AlphaStarItem : public State
    {
    public :
        double value_f_, value_g_;
        int horizon_;
        std::shared_ptr<State> current_element;

        AlphaStarItem(const std::shared_ptr<State>& element, double value_g,double value_f, int horizon) : value_f_(value_f), value_g_(value_g), horizon_(horizon), current_element(element)
        {}
        
        bool operator<(std::shared_ptr<AlphaStarItem> const & b)
        {
          return (this->value_f_ == b->value_f_) ? this->value_g_ > b->value_g_ : this->value_f_ < b->value_f_;
        }

        std::string str() const
        {
          std::ostringstream res;
          res << "AlphaStarState[" << this->current_element->str();
          res <<", G_value "<<this->value_g_;
          res <<", F_value "<<this->value_f_;
          res <<", horizon "<<this->horizon_<<" ]";
          return res.str();
        }
    };

    std::shared_ptr<SolvableByHSVI> world_;

    std::shared_ptr<TabularValueFunction> bound_;

    std::shared_ptr<MultiLogger> logger_;

    number planning_horizon_;
    std::string name_ = "backward_induction";

    std::shared_ptr<State> start_state;
    std::vector<std::shared_ptr<AlphaStarItem>> openSet;
    std::vector<std::shared_ptr<AlphaStarItem>> FSet;

    std::vector<std::unordered_map<std::shared_ptr<State>,std::shared_ptr<AlphaStarItem>>> map_element_to_alpha_item;


    std::chrono::high_resolution_clock::time_point start_time, current_time;
    double duration;

  public:
    AlphaStar(std::shared_ptr<SolvableByHSVI> &world,
              std::string name = "A*");

    std::shared_ptr<AlphaStar> getptr();

    void do_initialize();

    void do_solve();

    void do_test();

    void do_save();

    bool do_stop(const std::shared_ptr<State> &, double /*cost_so_far*/, number);

    void do_explore(const std::shared_ptr<State> &s, double /*cost_so_far*/, number h);

    std::shared_ptr<ValueFunction> getBound() const;

    int getTrial(){return 0;}

    double getResult();

    void saveResults(std::string filename, double other);

    void updateTime(std::chrono::high_resolution_clock::time_point start_time, std::string information);

    void initLogger();
    
    static bool compare(const std::shared_ptr<AlphaStarItem>& item_1, const std::shared_ptr<AlphaStarItem>& item_2) 
    {
      return item_1->operator<(item_2);
    }

    static double TIME_TO_REMOVE;

  };
} // namespace sdm
````

