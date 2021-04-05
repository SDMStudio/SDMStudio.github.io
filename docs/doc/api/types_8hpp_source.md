
# File types.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**types.hpp**](types_8hpp.md)

[Go to the documentation of this file.](types_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
==============================================================================*/
#pragma once

#include <cstddef>
#include <iostream>
#include <unordered_map>
#include <boost/bimap.hpp>


namespace sdm
{

  const size_t SUCCESS = 0;
  const size_t ERROR_IN_COMMAND_LINE = 1;
  const size_t ERROR_UNHANDLED_EXCEPTION = 2;

  typedef std::size_t size_t; // = uint32_t

  typedef unsigned short number; // = uint16_t

  typedef unsigned short dtype;

  typedef unsigned short agent;

  typedef unsigned short state;

  typedef unsigned short action;

  typedef unsigned short horizon;

  typedef unsigned short observation;

  typedef boost::bimaps::bimap<std::string, sdm::size_t> bimap;

  typedef typename bimap::value_type name2index;

  enum Metric
  {
    CUMULATIVE_REWARD_PER_STEP,
    CUMULATIVE_REWARD_PER_EPISODE,
    AVERAGE_EPISODE_REWARD,
    AVERAGE_EPISODE_VALUE,
    MEDIAN_EPISODE_REWARD,
    CUMULATIVE_STEPS_PER_EPISODE,
    STEPS_PER_EPISODE
  };

  enum Statistic
  {
    MIN,
    MAX,
    MEAN,
    RANGE,
    VARIANCE,
    STANDARD_DEVIATION
  };

  enum TypeSoftmax
  {
    BELIEF,
    BEHAVIOR,
    OCCUPANCY
  };

  enum Criterion
  {
    COST_MIN,
    REW_MAX
  };

  class World;
  class DiscreteMDP;
  class DiscreteMMDP;
  class DiscretePOMDP;
  class DiscreteDecPOMDP;


  template <typename TState, typename TAction>
  class SolvableByHSVI;

  template <typename TState, typename TAction>
  struct WorldType;

  //using boost::hash_combine
  template <class T>
  inline void hash_combine(std::size_t &seed, T const &v)
  {
    seed ^= std::hash<T>()(v) + 0x9e3779b9 + (seed << 6) + (seed >> 2);
  }
} // namespace sdm

namespace std
{

  template <class T, class... Ts>
  struct is_any : std::disjunction<std::is_same<T, Ts>...>
  {
  };

} // namespace std
````

