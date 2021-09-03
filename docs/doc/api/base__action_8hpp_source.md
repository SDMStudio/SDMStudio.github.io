
# File base\_action.hpp

[**File List**](files.md) **>** [**action**](dir_da22f131ef310b227029eb4cfbb3e75b.md) **>** [**base\_action.hpp**](base__action_8hpp.md)

[Go to the documentation of this file.](base__action_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/action/action.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{

  template <typename TAction>
  class BaseAction : public Action
  {
  public:
    BaseAction() {}
    BaseAction(const TAction &action) : action_(action) {}
    virtual ~BaseAction() {}

    virtual TAction getAction() const { return this->action_; }

    virtual void setAction(const TAction &action) { this->action_ = action; }

    virtual std::string str() const
    {
      std::ostringstream res;
      res << "Action(" << this->action_ << ")";
      return res.str();
    }

  protected:
    TAction action_;
  };

  using DiscreteAction = BaseAction<number>;
  using JointAction = BaseAction<Joint<std::shared_ptr<Action>>>;

} // namespace sdm
````

