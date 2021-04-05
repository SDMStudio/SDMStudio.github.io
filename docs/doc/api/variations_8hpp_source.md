
# File variations.hpp

[**File List**](files.md) **>** [**decision\_rules**](dir_4983fd2ecc8cc6698afce148812a6aba.md) **>** [**variations.hpp**](variations_8hpp.md)

[Go to the documentation of this file.](variations_8hpp.md) 


````cpp

#pragma once

#include <vector>

#include <sdm/types.hpp>

namespace sdm
{

  template <typename TFunction>
  class Variations
  {
  protected:
    using TKey = typename TFunction::input_type;
    using TItem = typename TFunction::output_type;

    using iterator_t = typename std::vector<TItem>::iterator;
    using super_iterator = std::vector<iterator_t>;

    super_iterator current; //<! current element

    std::vector<TKey> p_keys_;                 //<! histories to prescribe an action
    std::vector<std::vector<TItem>> p_values_; //<! table of numbers of actions available per agent

    std::shared_ptr<TFunction> vout;
    std::shared_ptr<TFunction> vin;

    int dimension;

  public:
    Variations();

    Variations(const std::vector<std::vector<TItem>> &possible_values);

    Variations(const std::vector<TKey> &possible_keys, const std::vector<std::vector<TItem>> &possible_values);

    void setVariation(const std::vector<TKey> &possible_keys, const std::vector<std::vector<TItem>> &possible_values);

    std::shared_ptr<TFunction> make_output();

    std::shared_ptr<TFunction> begin();

    std::shared_ptr<TFunction> next();

    std::shared_ptr<TFunction> end();
  };
} // namespace sdm
#include <sdm/utils/decision_rules/variations.tpp>
````

