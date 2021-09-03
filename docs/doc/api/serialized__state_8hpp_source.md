
# File serialized\_state.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**state**](dir_d0d8dc666ec4ca9b544d63f25347f269.md) **>** [**serialized\_state.hpp**](serialized__state_8hpp.md)

[Go to the documentation of this file.](serialized__state_8hpp.md) 


````cpp
#pragma once

#include <sdm/core/state/base_state.hpp>
#include <sdm/core/action/action.hpp>

#include <sdm/utils/struct/vector.hpp>
#include <sdm/utils/struct/pair.hpp>

#include <sdm/core/state/interface/serial_interface.hpp>

namespace sdm
{
  class SerializedState : public BaseState<Pair<std::shared_ptr<State>, Joint<std::shared_ptr<Action>>>>, public BaseSerialInterface 
  {
  public :
    SerializedState();
    SerializedState(std::shared_ptr<State> state, Joint<std::shared_ptr<Action>> actions);
    SerializedState(const SerializedState &v);
    virtual ~SerializedState();

    std::shared_ptr<State> getHiddenState() const;

    Joint<std::shared_ptr<Action>> getAction() const;

    number getCurrentAgentId() const;

    void setAgentId(number);

    std::string str() const;

  protected : 

    number agentID_;
  };

} // namespace sdm


// namespace boost
// {
//   namespace serialization
//   {
//     template <class Archive>
//     void serialize(Archive &archive, sdm::SerializedState &serialized_state, const unsigned int)
//     {
//       // archive &boost::serialization::base_object<sdm::Pair<sdm::number, std::vector<sdm::number>>>(serialized_state);
//     }

//   } // namespace serialization
// } // namespace boost


namespace std
{
  template<>
  struct hash<sdm::SerializedState>
  {
    typedef sdm::SerializedState argument_type;
    typedef std::size_t result_type;
    inline result_type operator()(const argument_type &in) const
    {
      size_t seed = 0;
      //Combine the hash of the current vector with the hashes of the previous ones
      sdm::hash_combine(seed, in.getHiddenState());
      sdm::hash_combine(seed, in.getAction());
      return seed;
    }
  };
}
````

