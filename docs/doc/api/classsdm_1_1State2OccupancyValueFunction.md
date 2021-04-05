
<NavBar active_item_id="2"/>

# Class sdm::State2OccupancyValueFunction

**template &lt;typename TState typename TState, typename TOccupancyState typename TOccupancyState&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md)





* `#include <state_2_occupancy_vf.hpp>`



Inherits the following classes: [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)









## Public Types inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

| Type | Name |
| ---: | :--- |
| typedef std::pair&lt; TInput1, TInput2 &gt; | [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type)  <br> |

## Public Types inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| typedef TInput | [**input\_type**](classsdm_1_1Function.md#typedef-input-type)  <br> |
| typedef TOutput | [**output\_type**](classsdm_1_1Function.md#typedef-output-type)  <br> |










## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md#function-state2occupancyvaluefunction) (std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), double &gt;&gt; vf) <br> |
| virtual std::enable\_if\_t&lt; is\_mdp, double &gt; | [**operator()**](classsdm_1_1State2OccupancyValueFunction.md#function-operator()-1-3) (const TOccupancyState & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
| virtual std::enable\_if\_t&lt;!is\_mdp, double &gt; | [**operator()**](classsdm_1_1State2OccupancyValueFunction.md#function-operator()-2-3) (const TOccupancyState & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
| virtual double | [**operator()**](classsdm_1_1State2OccupancyValueFunction.md#function-operator()-3-3) (const TOccupancyState & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |

## Public Functions inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-1-2) (const TInput1 &, const TInput2 &) = 0<br> |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-2-2) (const [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type) & p\_input) <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |










## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**BinaryFunction**](classsdm_1_1BinaryFunction.md)&lt; TState, [**number**](namespacesdm.md#typedef-number), double &gt; &gt; | [**mdp\_vf\_**](classsdm_1_1State2OccupancyValueFunction.md#variable-mdp-vf-)  <br> |












## Public Functions Documentation


### function State2OccupancyValueFunction 


```cpp
sdm::State2OccupancyValueFunction::State2OccupancyValueFunction (
    std::shared_ptr< BinaryFunction < TState, number , double >> vf
) 
```



### function operator() [1/3]


```cpp
template<bool is_mdp>
virtual std::enable_if_t< is_mdp, double > sdm::State2OccupancyValueFunction::operator() (
    const TOccupancyState & ostate,
    const number & tau
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function operator() [2/3]


```cpp
template<bool is_mdp>
virtual std::enable_if_t<!is_mdp, double > sdm::State2OccupancyValueFunction::operator() (
    const TOccupancyState & ostate,
    const number & tau
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function operator() [3/3]


```cpp
virtual double sdm::State2OccupancyValueFunction::operator() (
    const TOccupancyState & ostate,
    const number & tau
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)

## Protected Attributes Documentation


### variable mdp\_vf\_ 


```cpp
std::shared_ptr<BinaryFunction<TState, number, double> > sdm::State2OccupancyValueFunction< TState, TOccupancyState >::mdp_vf_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/state_2_occupancy_vf.hpp`