
<NavBar active_item_id="2"/>

# Struct sdm::WorldType

**template &lt;typename TState, typename TAction&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**WorldType**](structsdm_1_1WorldType.md)



_Allows developers to get access to the type of underlying problem that is solved when dealing with a kind of state and action in_ [_**HSVI**_](classsdm_1_1HSVI.md) _. Usage Example :_`WorldType <BeliefState, number>::type` _will return the type_`DiscretePOMDP` _._[More...](#detailed-description)

* `#include <types.hpp>`











## Public Types

| Type | Name |
| ---: | :--- |
| typedef decltype([**WorldType**](structsdm_1_1WorldType.md)&lt; TState, TAction &gt;::[**getWorldType**](structsdm_1_1WorldType.md#function-getworldtype-1-5)()) | [**type**](structsdm_1_1WorldType.md#typedef-type)  <br> |
| typedef decltype([**WorldType**](structsdm_1_1WorldType.md)&lt; TState, TAction &gt;::[**getUnderlyingProblem**](structsdm_1_1WorldType.md#function-getunderlyingproblem-1-4)()) | [**underlying\_problem\_type**](structsdm_1_1WorldType.md#typedef-underlying-problem-type)  <br> |





## Public Static Functions

| Type | Name |
| ---: | :--- |
|  std::enable\_if\_t&lt; is\_solving\_mdp, [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**getUnderlyingProblem**](structsdm_1_1WorldType.md#function-getunderlyingproblem-1-4) () <br> |
|  std::enable\_if\_t&lt; is\_solving\_mmdp, [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) &gt; | [**getUnderlyingProblem**](structsdm_1_1WorldType.md#function-getunderlyingproblem-2-4) () <br> |
|  std::enable\_if\_t&lt; is\_solving\_pomdp, [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) &gt; | [**getUnderlyingProblem**](structsdm_1_1WorldType.md#function-getunderlyingproblem-3-4) () <br> |
|  std::enable\_if\_t&lt; is\_solving\_decpomdp, [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**getUnderlyingProblem**](structsdm_1_1WorldType.md#function-getunderlyingproblem-4-4) () <br> |
|  std::enable\_if\_t&lt; is\_mdp, [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) &gt; | [**getWorldType**](structsdm_1_1WorldType.md#function-getworldtype-1-5) () <br> |
|  std::enable\_if\_t&lt; is\_belief\_mdp, [**BeliefMDP**](classsdm_1_1BeliefMDP.md)&lt; [**BeliefState**](namespacesdm.md#typedef-beliefstate), [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**getWorldType**](structsdm_1_1WorldType.md#function-getworldtype-2-5) () <br> |
|  std::enable\_if\_t&lt; is\_serialized\_mdp, [**SerializedMDP**](classsdm_1_1SerializedMDP.md)&lt; [**SerializedState**](classsdm_1_1SerializedState.md), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**getWorldType**](structsdm_1_1WorldType.md#function-getworldtype-3-5) () <br> |
|  std::enable\_if\_t&lt; is\_serialized\_occupancy\_mdp, [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md)&lt; [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md)&lt;&gt;, [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)&lt; [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**number**](namespacesdm.md#typedef-number) &gt; &gt; &gt; | [**getWorldType**](structsdm_1_1WorldType.md#function-getworldtype-4-5) () <br> |
|  std::enable\_if\_t&lt; is\_occupancy\_mdp, [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md)&lt; [**OccupancyState**](classsdm_1_1OccupancyState.md)&lt;&gt;, [**Joint**](classsdm_1_1Joint.md)&lt; [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)&lt; [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**number**](namespacesdm.md#typedef-number) &gt; &gt; &gt; &gt; | [**getWorldType**](structsdm_1_1WorldType.md#function-getworldtype-5-5) () <br> |







# Detailed Description




**Template parameters:**


* `TState` the state type 
* `TAction` the action type 



    
## Public Types Documentation


### typedef type 


```cpp
using sdm::WorldType< TState, TAction >::type =  decltype(WorldType<TState, TAction>::getWorldType());
```



### typedef underlying\_problem\_type 


```cpp
using sdm::WorldType< TState, TAction >::underlying_problem_type =  decltype(WorldType<TState, TAction>::getUnderlyingProblem());
```


## Public Static Functions Documentation


### function getUnderlyingProblem [1/4]


```cpp
template<bool is_solving_mdp>
static std::enable_if_t< is_solving_mdp, DiscreteMDP > sdm::WorldType::getUnderlyingProblem () 
```



### function getUnderlyingProblem [2/4]


```cpp
template<bool is_solving_mmdp>
static std::enable_if_t< is_solving_mmdp, DiscreteMMDP > sdm::WorldType::getUnderlyingProblem () 
```



### function getUnderlyingProblem [3/4]


```cpp
template<bool is_solving_pomdp>
static std::enable_if_t< is_solving_pomdp, DiscretePOMDP > sdm::WorldType::getUnderlyingProblem () 
```



### function getUnderlyingProblem [4/4]


```cpp
template<bool is_solving_decpomdp>
static std::enable_if_t< is_solving_decpomdp, DiscreteDecPOMDP > sdm::WorldType::getUnderlyingProblem () 
```



### function getWorldType [1/5]


```cpp
template<bool is_mdp>
static std::enable_if_t< is_mdp, DiscreteMDP > sdm::WorldType::getWorldType () 
```



### function getWorldType [2/5]


```cpp
template<bool is_belief_mdp>
static std::enable_if_t< is_belief_mdp, BeliefMDP < BeliefState , number , number > > sdm::WorldType::getWorldType () 
```



### function getWorldType [3/5]


```cpp
template<bool is_serialized_mdp>
static std::enable_if_t< is_serialized_mdp, SerializedMDP < SerializedState , number > > sdm::WorldType::getWorldType () 
```



### function getWorldType [4/5]


```cpp
template<bool is_serialized_occupancy_mdp>
static std::enable_if_t< is_serialized_occupancy_mdp, SerializedOccupancyMDP < SerializedOccupancyState <>, DeterministicDecisionRule < HistoryTree_p < number >, number > > > sdm::WorldType::getWorldType () 
```



### function getWorldType [5/5]


```cpp
template<bool is_occupancy_mdp>
static std::enable_if_t< is_occupancy_mdp, OccupancyMDP < OccupancyState <>, Joint < DeterministicDecisionRule < HistoryTree_p < number >, number > > > > sdm::WorldType::getWorldType () 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/types.hpp`