
<NavBar active_item_id="2"/>

# Class sdm::Belief2OccupancyValueFunction

**template &lt;typename TBelief typename TBelief, typename TOccupancyState typename TOccupancyState&gt;**


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**Belief2OccupancyValueFunction**](classsdm_1_1Belief2OccupancyValueFunction.md)





* `#include <belief_2_occupancy_vf.hpp>`



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
|   | [**Belief2OccupancyValueFunction**](classsdm_1_1Belief2OccupancyValueFunction.md#function-belief2occupancyvaluefunction) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TBelief, [**number**](namespacesdm.md#typedef-number) &gt;&gt; pomdp\_vf) <br> |
| virtual std::enable\_if\_t&lt; is\_solving\_dpomdp, double &gt; | [**operator()**](classsdm_1_1Belief2OccupancyValueFunction.md#function-operator()-1-3) (const TOccupancyState & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
| virtual std::enable\_if\_t&lt;!is\_solving\_dpomdp, double &gt; | [**operator()**](classsdm_1_1Belief2OccupancyValueFunction.md#function-operator()-2-3) (const TOccupancyState & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
| virtual double | [**operator()**](classsdm_1_1Belief2OccupancyValueFunction.md#function-operator()-3-3) (const TOccupancyState & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
|  std::enable\_if\_t&lt; is\_solving\_dpomdp, double &gt; | [**sawtooth**](classsdm_1_1Belief2OccupancyValueFunction.md#function-sawtooth) (const TBelief & bstate, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |

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
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TBelief, [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**pomdp\_vf\_**](classsdm_1_1Belief2OccupancyValueFunction.md#variable-pomdp-vf-)  <br> |












## Public Functions Documentation


### function Belief2OccupancyValueFunction 


```cpp
sdm::Belief2OccupancyValueFunction::Belief2OccupancyValueFunction (
    std::shared_ptr< ValueFunction < TBelief, number >> pomdp_vf
) 
```



### function operator() [1/3]


```cpp
template<bool is_solving_dpomdp>
virtual std::enable_if_t< is_solving_dpomdp, double > sdm::Belief2OccupancyValueFunction::operator() (
    const TOccupancyState & ostate,
    const number & tau
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function operator() [2/3]


```cpp
template<bool is_solving_dpomdp>
virtual std::enable_if_t<!is_solving_dpomdp, double > sdm::Belief2OccupancyValueFunction::operator() (
    const TOccupancyState & ostate,
    const number & tau
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function operator() [3/3]


```cpp
virtual double sdm::Belief2OccupancyValueFunction::operator() (
    const TOccupancyState & ostate,
    const number & tau
) 
```


Implements [*sdm::BinaryFunction::operator()*](classsdm_1_1BinaryFunction.md#function-operator()-1-2)


### function sawtooth 


```cpp
template<bool is_solving_dpomdp>
std::enable_if_t< is_solving_dpomdp, double > sdm::Belief2OccupancyValueFunction::sawtooth (
    const TBelief & bstate,
    const number & tau
) 
```


## Protected Attributes Documentation


### variable pomdp\_vf\_ 


```cpp
std::shared_ptr<ValueFunction<TBelief, number> > sdm::Belief2OccupancyValueFunction< TBelief, TOccupancyState >::pomdp_vf_;
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/utils/value_function/belief_2_occupancy_vf.hpp`