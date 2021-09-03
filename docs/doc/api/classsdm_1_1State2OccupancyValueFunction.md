
# Class sdm::State2OccupancyValueFunction

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md)





* `#include <state_2_occupancy_vf.hpp>`



Inherits the following classes: [sdm::RelaxedValueFunction](classsdm_1_1RelaxedValueFunction.md)











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
|   | [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md#function-state2occupancyvaluefunction) (std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt;) <br> |
| virtual std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getRelaxation**](classsdm_1_1State2OccupancyValueFunction.md#function-getrelaxation) () <br> |
| virtual bool | [**isMdpAvailable**](classsdm_1_1State2OccupancyValueFunction.md#function-ismdpavailable) () <br> |
| virtual bool | [**isPomdpAvailable**](classsdm_1_1State2OccupancyValueFunction.md#function-ispomdpavailable) () <br> |
| virtual double | [**operator()**](classsdm_1_1State2OccupancyValueFunction.md#function-operator()-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br> |
|  double | [**operator()**](classsdm_1_1State2OccupancyValueFunction.md#function-operator()-2-2) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br> |
|  double | [**operatorBelief**](classsdm_1_1State2OccupancyValueFunction.md#function-operatorbelief) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br> |
|  double | [**operatorOccupancy**](classsdm_1_1State2OccupancyValueFunction.md#function-operatoroccupancy) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br> |
|  double | [**operatorQTableBelief**](classsdm_1_1State2OccupancyValueFunction.md#function-operatorqtablebelief) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt;&gt; & state\_AND\_action, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
|  double | [**operatorQTableState**](classsdm_1_1State2OccupancyValueFunction.md#function-operatorqtablestate) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt;&gt; & state\_AND\_action, const [**number**](namespacesdm.md#typedef-number) & tau) <br> |
|  double | [**operatorState**](classsdm_1_1State2OccupancyValueFunction.md#function-operatorstate) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &, const [**number**](namespacesdm.md#typedef-number) &) <br> |

## Public Functions inherited from sdm::RelaxedValueFunction

See [sdm::RelaxedValueFunction](classsdm_1_1RelaxedValueFunction.md)

| Type | Name |
| ---: | :--- |
| virtual std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**getRelaxation**](classsdm_1_1RelaxedValueFunction.md#function-getrelaxation) () = 0<br> |
| virtual bool | [**isMdpAvailable**](classsdm_1_1RelaxedValueFunction.md#function-ismdpavailable) () = 0<br> |
| virtual bool | [**isPomdpAvailable**](classsdm_1_1RelaxedValueFunction.md#function-ispomdpavailable) () = 0<br> |
| virtual double | [**operator()**](classsdm_1_1RelaxedValueFunction.md#function-operator()-1-2) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) = 0<br> |
| virtual double | [**operator()**](classsdm_1_1RelaxedValueFunction.md#function-operator()-2-2) (const [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt;&gt; & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) = 0<br> |
| virtual  | [**~RelaxedValueFunction**](classsdm_1_1RelaxedValueFunction.md#function-relaxedvaluefunction) () <br> |

## Public Functions inherited from sdm::BaseRelaxedValueFunction

See [sdm::BaseRelaxedValueFunction](classsdm_1_1BaseRelaxedValueFunction.md)

| Type | Name |
| ---: | :--- |
| virtual bool | [**isMdpAvailable**](classsdm_1_1BaseRelaxedValueFunction.md#function-ismdpavailable) () = 0<br> |
| virtual bool | [**isPomdpAvailable**](classsdm_1_1BaseRelaxedValueFunction.md#function-ispomdpavailable) () = 0<br> |
| virtual double | [**operator()**](classsdm_1_1BaseRelaxedValueFunction.md#function-operator()) (const std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; & ostate, const [**number**](namespacesdm.md#typedef-number) & tau) = 0<br> |
| virtual  | [**~BaseRelaxedValueFunction**](classsdm_1_1BaseRelaxedValueFunction.md#function-baserelaxedvaluefunction) () <br> |

## Public Functions inherited from sdm::BinaryFunction

See [sdm::BinaryFunction](classsdm_1_1BinaryFunction.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-1-2) (const TInput1 &, const TInput2 &) = 0<br> |
| virtual [**output\_type**](classsdm_1_1BinaryFunction.md#typedef-output-type) | [**operator()**](classsdm_1_1BinaryFunction.md#function-operator()-2-2) (const [**input\_type**](classsdm_1_1BinaryFunction.md#typedef-input-type) & p\_input) <br> |
| virtual  | [**~BinaryFunction**](classsdm_1_1BinaryFunction.md#function-binaryfunction) () <br> |

## Public Functions inherited from sdm::Function

See [sdm::Function](classsdm_1_1Function.md)

| Type | Name |
| ---: | :--- |
| virtual [**output\_type**](classsdm_1_1Function.md#typedef-output-type) | [**operator()**](classsdm_1_1Function.md#function-operator()) (const [**input\_type**](classsdm_1_1Function.md#typedef-input-type) &) = 0<br> |
| virtual  | [**~Function**](classsdm_1_1Function.md#function-function) () <br> |
















## Protected Attributes

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md) &gt; | [**mdp\_vf\_**](classsdm_1_1State2OccupancyValueFunction.md#variable-mdp-vf-)  <br> |




















## Public Functions Documentation


### function State2OccupancyValueFunction 


```cpp
sdm::State2OccupancyValueFunction::State2OccupancyValueFunction (
    std::shared_ptr< ValueFunction >
) 
```



### function getRelaxation 


```cpp
virtual std::shared_ptr< ValueFunction > sdm::State2OccupancyValueFunction::getRelaxation () 
```


Implements [*sdm::RelaxedValueFunction::getRelaxation*](classsdm_1_1RelaxedValueFunction.md#function-getrelaxation)


### function isMdpAvailable 


```cpp
virtual bool sdm::State2OccupancyValueFunction::isMdpAvailable () 
```


Implements [*sdm::RelaxedValueFunction::isMdpAvailable*](classsdm_1_1RelaxedValueFunction.md#function-ismdpavailable)


### function isPomdpAvailable 


```cpp
virtual bool sdm::State2OccupancyValueFunction::isPomdpAvailable () 
```


Implements [*sdm::RelaxedValueFunction::isPomdpAvailable*](classsdm_1_1RelaxedValueFunction.md#function-ispomdpavailable)


### function operator() [1/2]


```cpp
virtual double sdm::State2OccupancyValueFunction::operator() (
    const std::shared_ptr< State > &,
    const number &
) 
```


Implements [*sdm::RelaxedValueFunction::operator()*](classsdm_1_1RelaxedValueFunction.md#function-operator()-1-2)


### function operator() [2/2]


```cpp
double sdm::State2OccupancyValueFunction::operator() (
    const Pair < std::shared_ptr< State >, std::shared_ptr< Action > > &,
    const number &
) 
```



### function operatorBelief 


```cpp
double sdm::State2OccupancyValueFunction::operatorBelief (
    const std::shared_ptr< State > &,
    const number &
) 
```



### function operatorOccupancy 


```cpp
double sdm::State2OccupancyValueFunction::operatorOccupancy (
    const std::shared_ptr< State > &,
    const number &
) 
```



### function operatorQTableBelief 


```cpp
double sdm::State2OccupancyValueFunction::operatorQTableBelief (
    const Pair < std::shared_ptr< State >, std::shared_ptr< Action >> & state_AND_action,
    const number & tau
) 
```



### function operatorQTableState 


```cpp
double sdm::State2OccupancyValueFunction::operatorQTableState (
    const Pair < std::shared_ptr< State >, std::shared_ptr< Action >> & state_AND_action,
    const number & tau
) 
```



### function operatorState 


```cpp
double sdm::State2OccupancyValueFunction::operatorState (
    const std::shared_ptr< State > &,
    const number &
) 
```


## Protected Attributes Documentation


### variable mdp\_vf\_ 


```cpp
std::shared_ptr<ValueFunction> sdm::State2OccupancyValueFunction::mdp_vf_;
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/utils/value_function/initializer/state_2_occupancy_vf.hpp`