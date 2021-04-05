
<NavBar active_item_id="2"/>

# Class sdm::TransformedMDP

**template &lt;typename TState typename TState, typename TAction typename TAction, typename TObserv typename TObserv&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**TransformedMDP**](classsdm_1_1TransformedMDP.md)





* `#include <transformed_mdp.hpp>`















## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**TransformedMDP**](classsdm_1_1TransformedMDP.md#function-transformedmdp) (std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; underlying\_problem) <br> |
| virtual TState | [**getNextState**](classsdm_1_1TransformedMDP.md#function-getnextstate) (TState o\_state, TAction o\_action, TObserv obs) const = 0<br> |
| virtual double | [**getObservationProbability**](classsdm_1_1TransformedMDP.md#function-getobservationprobability) (TAction o\_action, TObserv obs, TState o\_state) const = 0<br> |
| virtual double | [**getReward**](classsdm_1_1TransformedMDP.md#function-getreward) (TState o\_state, TAction o\_action) const = 0<br> |
|  std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; | [**getUnderlyingProblem**](classsdm_1_1TransformedMDP.md#function-getunderlyingproblem) () const<br> |




## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**POSG**](classsdm_1_1POSG.md) &gt; | [**underlying\_problem**](classsdm_1_1TransformedMDP.md#variable-underlying-problem)  <br> |




## Public Functions Documentation


### function TransformedMDP 


```cpp
sdm::TransformedMDP::TransformedMDP (
    std::shared_ptr< POSG > underlying_problem
) 
```



### function getNextState 


```cpp
virtual TState sdm::TransformedMDP::getNextState (
    TState o_state,
    TAction o_action,
    TObserv obs
) const = 0
```



### function getObservationProbability 


```cpp
virtual double sdm::TransformedMDP::getObservationProbability (
    TAction o_action,
    TObserv obs,
    TState o_state
) const = 0
```



### function getReward 


```cpp
virtual double sdm::TransformedMDP::getReward (
    TState o_state,
    TAction o_action
) const = 0
```



### function getUnderlyingProblem 


```cpp
std::shared_ptr< POSG > sdm::TransformedMDP::getUnderlyingProblem () const
```


## Protected Attributes Documentation


### variable underlying\_problem 


```cpp
std::shared_ptr<POSG> sdm::TransformedMDP< TState, TAction, TObserv >::underlying_problem;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/transformed_mdp.hpp`