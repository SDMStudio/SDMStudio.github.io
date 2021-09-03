
# File base\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**base\_state.hpp**](base__state_8hpp.md)

[Go to the documentation of this file.](base__state_8hpp.md) 


````cpp

#pragma once

#include <sdm/types.hpp>
#include <sdm/core/state/state.hpp>
#include <sdm/core/joint.hpp>

namespace sdm
{


  template <typename TState>
  class BaseState : virtual public State
  // public BaseItem<TState>
  {
  public:
    BaseState();
    BaseState(const TState &item);
    virtual ~BaseState();

    virtual TState getState() const;

    virtual void setState(const TState &state);

    virtual std::string str() const;

    virtual bool operator==(const BaseState&other) const;

    virtual TypeState getTypeState() const ;

  protected:
    TState state_;
  };

    using DiscreteState = BaseState<number>;
    using DiscreteStateString = BaseState<std::string>;
    using ContinuousState = BaseState<double>;

} // namespace sdm

#include <sdm/core/state/base_state.tpp>
````

