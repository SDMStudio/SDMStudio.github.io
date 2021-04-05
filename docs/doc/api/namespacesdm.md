
<NavBar active_item_id="2"/>

# Namespace sdm


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md)



_Namespace grouping all tools required for sequential decision making._ [More...](#detailed-description)










## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**algo**](namespacesdm_1_1algo.md) <br> |
| namespace | [**ast**](namespacesdm_1_1ast.md) <br> |
| namespace | [**common**](namespacesdm_1_1common.md) <br> |
| namespace | [**exception**](namespacesdm_1_1exception.md) <br>_Namespace for exceptions._  |
| namespace | [**parser**](namespacesdm_1_1parser.md) <br> |
| namespace | [**tools**](namespacesdm_1_1tools.md) <br> |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**Algorithm**](classsdm_1_1Algorithm.md) <br> |
| class | [**BinaryFunction**](classsdm_1_1BinaryFunction.md) &lt;typename S, typename A&gt;<br> |
| class | [**DQNMDP**](classsdm_1_1DQNMDP.md) <br> |
| class | [**DecPOMDP**](classsdm_1_1DecPOMDP.md) <br> |
| class | [**DecisionProcess**](classsdm_1_1DecisionProcess.md) <br>_Decision process._  |
| class | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**DiscreteAction**](classsdm_1_1DiscreteAction.md) <br> |
| class | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &lt;TItem&gt;<br>_The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._  |
| struct | [**EpsGreedy**](structsdm_1_1EpsGreedy.md) <br> |
| class | [**Function**](classsdm_1_1Function.md) &lt;TInput, TOutput&gt;<br> |
| class | [**FunctionSpace**](classsdm_1_1FunctionSpace.md) &lt;typename TFunction&gt;<br>_The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._ |
| class | [**GymInterface**](classsdm_1_1GymInterface.md) &lt;TObsSpace, TActSpace&gt;<br>_Provides a Gym like interface._  |
| class | [**HSVI**](classsdm_1_1HSVI.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**HistoryTree**](classsdm_1_1HistoryTree.md) &lt;T&gt;<br> |
| class | [**Initializer**](classsdm_1_1Initializer.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md) &lt;typename TDecProcess&gt;<br> |
| struct | [**Item**](structsdm_1_1Item.md) &lt;item\_t&gt;<br> |
| struct | [**Item&lt; bool &gt;**](structsdm_1_1Item_3_01bool_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; char &gt;**](structsdm_1_1Item_3_01char_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; double &gt;**](structsdm_1_1Item_3_01double_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; float &gt;**](structsdm_1_1Item_3_01float_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; int &gt;**](structsdm_1_1Item_3_01int_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; long &gt;**](structsdm_1_1Item_3_01long_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; short &gt;**](structsdm_1_1Item_3_01short_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; unsigned int &gt;**](structsdm_1_1Item_3_01unsigned_01int_01_4.md) &lt;&gt;<br> |
| struct | [**Item&lt; unsigned short &gt;**](structsdm_1_1Item_3_01unsigned_01short_01_4.md) &lt;&gt;<br> |
| class | [**Joint**](classsdm_1_1Joint.md) &lt;item&gt;<br>_class of joint item instances._  |
| class | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) &lt;typename T&gt;<br> |
| class | [**MappedVector**](classsdm_1_1MappedVector.md) &lt;typename TIndex, typename T&gt;<br>_Mapped vectors are vectors that use map to store values of a vector._  |
| class | [**MaxInitializer**](classsdm_1_1MaxInitializer.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**MinInitializer**](classsdm_1_1MinInitializer.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &lt;TItem&gt;<br>_This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in_ [_**POSG**_](classsdm_1_1POSG.md) _). This can be view as a set of discrete spaces or as a discrete space of joint items._ |
| class | [**MultiSpace**](classsdm_1_1MultiSpace.md) &lt;TSpace&gt;<br>_A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._ |
| class | [**NDPOMDP**](classsdm_1_1NDPOMDP.md) <br> |
| class | [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) <br> |
| class | [**POSG**](classsdm_1_1POSG.md) <br>_Partially Observable Stochastic Game class._  |
| class | [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md) <br>_Partially observable process._  |
| class | [**RecursiveMap**](classsdm_1_1RecursiveMap.md) &lt;class T0, class T1, Ts&gt;<br>_The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_  |
| class | [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) &lt;class T0, class T1&gt;<br>[_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._ |
| class | [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) &lt;class T0, class T1, class T2, Ts&gt;<br> |
| class | [**ReplayMemory**](classsdm_1_1ReplayMemory.md) <br> |
| class | [**Reward**](classsdm_1_1Reward.md) <br> |
| class | [**Space**](classsdm_1_1Space.md) <br>_This class is an abstract interface that all spaces should inherite. It gives some useful general methods to use generic spaces in your algorithms._  |
| class | [**StateDynamics**](classsdm_1_1StateDynamics.md) <br> |
| class | [**StochasticProcess**](classsdm_1_1StochasticProcess.md) <br> |
| class | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md) &lt;typename TState, typename TAction, typename TValue, TStruct&gt;<br>_Tabular value function are functions of state and action that use a vector representation to store the values._  |
| class | [**TransformedMDP**](classsdm_1_1TransformedMDP.md) &lt;typename TState, typename TAction, typename TObserv&gt;<br> |
| class | [**Tree**](classsdm_1_1Tree.md) &lt;T&gt;<br>_Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._ |
| class | [**UnaryFunction**](classsdm_1_1UnaryFunction.md) &lt;typename S, typename A&gt;<br> |
| class | [**ValueFunction**](classsdm_1_1ValueFunction.md) &lt;TState, TAction, TValue&gt;<br>_This class is the abstract class of value function. All value function must derived this class._  |
| class | [**ValueInitializer**](classsdm_1_1ValueInitializer.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**Variations**](classsdm_1_1Variations.md) &lt;TFunction&gt;<br> |
| class | [**VectorImpl**](classsdm_1_1VectorImpl.md) &lt;I, T&gt;<br>_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._  |
| class | [**World**](classsdm_1_1World.md) <br> |
| class | [**ZSPOSG**](classsdm_1_1ZSPOSG.md) <br> |
| class | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**feedback**](classsdm_1_1feedback.md) <br> |
| class | [**matrix**](classsdm_1_1matrix.md) &lt;mtype, vtype, value&gt;<br> |
| class | [**sdmsVector**](classsdm_1_1sdmsVector.md) &lt;class I, class T, class TBaseVector&gt;<br>_Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._ |
| class | [**vector**](classsdm_1_1vector.md) &lt;type, value&gt;<br> |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; std::pair&lt; action\_t, obs\_t &gt; &gt; | [**ActObsHistoryTree\_p**](namespacesdm.md#typedef-actobshistorytree-p)  <br> |
| typedef [**MappedVector**](classsdm_1_1MappedVector.md)&lt; [**number**](namespacesdm.md#typedef-number), double &gt; | [**BeliefState**](namespacesdm.md#typedef-beliefstate)  <br> |
| enum  | [**Criterion**](namespacesdm.md#enum-criterion)  <br> |
| typedef [**DecPOMDP**](classsdm_1_1DecPOMDP.md) | [**DecentralizedPOMDP**](namespacesdm.md#typedef-decentralizedpomdp)  <br> |
| typedef [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)&lt; TState, TAction, TValue, [**DenseVector**](namespacesdm.md#typedef-densevector) &gt; | [**DenseValueFunction**](namespacesdm.md#typedef-densevaluefunction)  <br> |
| typedef [**sdmsVector**](classsdm_1_1sdmsVector.md)&lt; I, T, boost::numeric::ublas::vector&lt; T &gt; &gt; | [**DenseVector**](namespacesdm.md#typedef-densevector)  <br>_Dense vector are standard vector._  |
| typedef std::vector&lt; T &gt; | [**History**](namespacesdm.md#typedef-history)  <br>_History seq alias._  |
| typedef std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt; &gt; | [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)  <br> |
| typedef std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)&lt; T &gt; &gt; | [**JointHistoryTree\_p**](namespacesdm.md#typedef-jointhistorytree-p)  <br> |
| typedef [**Joint**](classsdm_1_1Joint.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**JointItem**](namespacesdm.md#typedef-jointitem)  <br> |
| typedef [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)&lt; TState, TAction, TValue, [**MappedVector**](classsdm_1_1MappedVector.md) &gt; | [**MappedValueFunction**](namespacesdm.md#typedef-mappedvaluefunction)  <br> |
| enum  | [**Metric**](namespacesdm.md#enum-metric)  <br> |
| typedef [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; obs\_t &gt; | [**ObsHistoryTree\_p**](namespacesdm.md#typedef-obshistorytree-p)  <br> |
| typedef [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md) | [**POProcess**](namespacesdm.md#typedef-poprocess)  <br> |
| typedef [**POSG**](classsdm_1_1POSG.md) | [**POStochasticGame**](namespacesdm.md#typedef-postochasticgame)  <br> |
| typedef [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md) | [**PartObsProcess**](namespacesdm.md#typedef-partobsprocess)  <br> |
| typedef [**POSG**](classsdm_1_1POSG.md) | [**PartObsStochasticGame**](namespacesdm.md#typedef-partobsstochasticgame)  <br> |
| typedef [**POSG**](classsdm_1_1POSG.md) | [**PartiallyObservableStochasticGame**](namespacesdm.md#typedef-partiallyobservablestochasticgame)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; T0, T1, Ts... &gt;::type | [**RecursiveMap\_t**](namespacesdm.md#typedef-recursivemap-t)  <br> |
| typedef [**DecisionProcess**](classsdm_1_1DecisionProcess.md) | [**SG**](namespacesdm.md#typedef-sg)  <br> |
| typedef [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)&lt; TState, TAction, TValue, [**SparseVector**](namespacesdm.md#typedef-sparsevector) &gt; | [**SparseValueFunction**](namespacesdm.md#typedef-sparsevaluefunction)  <br> |
| typedef [**sdmsVector**](classsdm_1_1sdmsVector.md)&lt; I, T, boost::numeric::ublas::mapped\_vector&lt; T &gt; &gt; | [**SparseVector**](namespacesdm.md#typedef-sparsevector)  <br>_Sparse vector are vectors that store only non-zero values._  |
| enum  | [**Statistic**](namespacesdm.md#enum-statistic)  <br> |
| typedef [**DecisionProcess**](classsdm_1_1DecisionProcess.md) | [**StochasticGame**](namespacesdm.md#typedef-stochasticgame)  <br> |
| enum  | [**TypeSoftmax**](namespacesdm.md#enum-typesoftmax)  <br> |
| typedef [**ZSPOSG**](classsdm_1_1ZSPOSG.md) | [**ZeroSumPOSG**](namespacesdm.md#typedef-zerosumposg)  <br> |
| typedef unsigned short | [**action**](namespacesdm.md#typedef-action)  <br> |
| typedef unsigned short | [**agent**](namespacesdm.md#typedef-agent)  <br> |
| typedef boost::bimaps::bimap&lt; std::string, [**sdm::size\_t**](namespacesdm.md#typedef-size-t) &gt; | [**bimap**](namespacesdm.md#typedef-bimap)  <br> |
| typedef [**History**](namespacesdm.md#typedef-history)&lt; char &gt; | [**char\_history**](namespacesdm.md#typedef-char-history)  <br> |
| typedef unsigned short | [**dtype**](namespacesdm.md#typedef-dtype)  <br> |
| typedef unsigned short | [**horizon**](namespacesdm.md#typedef-horizon)  <br> |
| typedef [**History**](namespacesdm.md#typedef-history)&lt; int &gt; | [**int\_history**](namespacesdm.md#typedef-int-history)  <br> |
| typedef bimap::value\_type | [**name2index**](namespacesdm.md#typedef-name2index)  <br> |
| typedef unsigned short | [**number**](namespacesdm.md#typedef-number)  <br> |
| typedef unsigned short | [**observation**](namespacesdm.md#typedef-observation)  <br> |
| typedef std::tuple&lt; [**state**](namespacesdm.md#typedef-state), [**action**](namespacesdm.md#typedef-action), double, [**state**](namespacesdm.md#typedef-state) &gt; | [**sars\_transition**](namespacesdm.md#typedef-sars-transition)  <br>_Transition of state, action, reward, next\_state._  |
| typedef std::size\_t | [**size\_t**](namespacesdm.md#typedef-size-t)  <br> |
| typedef unsigned short | [**state**](namespacesdm.md#typedef-state)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; T0, T1, Ts... &gt;::value\_type | [**value\_t**](namespacesdm.md#typedef-value-t)  <br> |


## Public Attributes

| Type | Name |
| ---: | :--- |
|  const [**size\_t**](namespacesdm.md#typedef-size-t) | [**ERROR\_IN\_COMMAND\_LINE**](namespacesdm.md#variable-error-in-command-line)   = = 1<br> |
|  const [**size\_t**](namespacesdm.md#typedef-size-t) | [**ERROR\_UNHANDLED\_EXCEPTION**](namespacesdm.md#variable-error-unhandled-exception)   = = 2<br> |
|  const [**size\_t**](namespacesdm.md#typedef-size-t) | [**SUCCESS**](namespacesdm.md#variable-success)   = = 0<br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; | [**operator\***](namespacesdm.md#function-operator) (const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; &, const [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; &) <br>_Returns a vector that results from the product of a matrix with a vector._  |
|  [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; | [**operator\***](namespacesdm.md#function-operator-2) (const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; &, const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; &) <br>_Returns the product of two matrices._  |
|  bool | [**operator==**](namespacesdm.md#function-operator-3) (const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; &, const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; &) <br>_Returns true if the two matrices are equals and false otherwise._  |
|  [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; | [**operator^**](namespacesdm.md#function-operator-4) (const [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; &, const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; &) <br>_Returns a matrix that results from the point-to-point product of a vector with a matrix._  |








# Detailed Description


Namespace grouping all tools required for sequential decision making.

namespace grouping all tools required for sequential decision making. 

    
## Public Types Documentation


### typedef ActObsHistoryTree\_p 


```cpp
using sdm::ActObsHistoryTree_p = typedef HistoryTree_p<std::pair<action_t, obs_t> >;
```



### typedef BeliefState 


```cpp
using sdm::BeliefState = typedef MappedVector<number, double>;
```



### enum Criterion 


```cpp
enum sdm::Criterion {
    COST_MIN,
    REW_MAX
};
```



### typedef DecentralizedPOMDP 


```cpp
typedef DecPOMDP sdm::DecentralizedPOMDP;
```



### typedef DenseValueFunction 


```cpp
using sdm::DenseValueFunction = typedef TabularValueFunction<TState, TAction, TValue, DenseVector>;
```



### typedef DenseVector 


```cpp
using sdm::DenseVector = typedef sdmsVector<I, T, boost::numeric::ublas::vector<T> >;
```




**Template parameters:**


* `I` Type of index 
* `T` Type of value 



        

### typedef History 


```cpp
using sdm::History = typedef std::vector<T>;
```




**Template parameters:**


* `T` 



        

### typedef HistoryTree\_p 


```cpp
using sdm::HistoryTree_p = typedef std::shared_ptr<HistoryTree<T> >;
```



### typedef JointHistoryTree\_p 


```cpp
using sdm::JointHistoryTree_p = typedef std::shared_ptr<JointHistoryTree<T> >;
```



### typedef JointItem 


```cpp
typedef Joint<number> sdm::JointItem;
```



### typedef MappedValueFunction 


```cpp
using sdm::MappedValueFunction = typedef TabularValueFunction<TState, TAction, TValue, MappedVector>;
```



### enum Metric 


```cpp
enum sdm::Metric {
    CUMULATIVE_REWARD_PER_STEP,
    CUMULATIVE_REWARD_PER_EPISODE,
    AVERAGE_EPISODE_REWARD,
    AVERAGE_EPISODE_VALUE,
    MEDIAN_EPISODE_REWARD,
    CUMULATIVE_STEPS_PER_EPISODE,
    STEPS_PER_EPISODE
};
```


Enumerator for the types of statistics that can be plotted. 

        

### typedef ObsHistoryTree\_p 


```cpp
using sdm::ObsHistoryTree_p = typedef HistoryTree_p<obs_t>;
```



### typedef POProcess 


```cpp
typedef PartiallyObservableProcess sdm::POProcess;
```



### typedef POStochasticGame 


```cpp
typedef POSG sdm::POStochasticGame;
```



### typedef PartObsProcess 


```cpp
typedef PartiallyObservableProcess sdm::PartObsProcess;
```



### typedef PartObsStochasticGame 


```cpp
typedef POSG sdm::PartObsStochasticGame;
```



### typedef PartiallyObservableStochasticGame 


```cpp
typedef POSG sdm::PartiallyObservableStochasticGame;
```



### typedef RecursiveMap\_t 


```cpp
using sdm::RecursiveMap_t = typedef typename RecursiveMap<T0, T1, Ts...>::type;
```



### typedef SG 


```cpp
typedef DecisionProcess sdm::SG;
```



### typedef SparseValueFunction 


```cpp
using sdm::SparseValueFunction = typedef TabularValueFunction<TState, TAction, TValue, SparseVector>;
```



### typedef SparseVector 


```cpp
using sdm::SparseVector = typedef sdmsVector<I, T, boost::numeric::ublas::mapped_vector<T> >;
```




**Template parameters:**


* `I` Type of index 
* `T` Type of value 



        

### enum Statistic 


```cpp
enum sdm::Statistic {
    MIN,
    MAX,
    MEAN,
    RANGE,
    VARIANCE,
    STANDARD_DEVIATION
};
```


Enumerator for the types of statistics that can be recorded. 

        

### typedef StochasticGame 


```cpp
typedef DecisionProcess sdm::StochasticGame;
```



### enum TypeSoftmax 


```cpp
enum sdm::TypeSoftmax {
    BELIEF,
    BEHAVIOR,
    OCCUPANCY
};
```



### typedef ZeroSumPOSG 


```cpp
typedef ZSPOSG sdm::ZeroSumPOSG;
```



### typedef action 


```cpp
typedef unsigned short sdm::action;
```



### typedef agent 


```cpp
typedef unsigned short sdm::agent;
```



### typedef bimap 


```cpp
typedef boost::bimaps::bimap<std::string, sdm::size_t> sdm::bimap;
```



### typedef char\_history 


```cpp
using sdm::char_history = typedef History<char>;
```



### typedef dtype 


```cpp
typedef unsigned short sdm::dtype;
```



### typedef horizon 


```cpp
typedef unsigned short sdm::horizon;
```



### typedef int\_history 


```cpp
using sdm::int_history = typedef History<int>;
```



### typedef name2index 


```cpp
typedef bimap::value_type sdm::name2index;
```



### typedef number 


```cpp
typedef unsigned short sdm::number;
```



### typedef observation 


```cpp
typedef unsigned short sdm::observation;
```



### typedef sars\_transition 


```cpp
typedef std::tuple<state, action, double, state> sdm::sars_transition;
```



### typedef size\_t 


```cpp
typedef std::size_t sdm::size_t;
```



### typedef state 


```cpp
typedef unsigned short sdm::state;
```



### typedef value\_t 


```cpp
using sdm::value_t = typedef typename RecursiveMap<T0, T1, Ts...>::value_type;
```


## Public Attributes Documentation


### variable ERROR\_IN\_COMMAND\_LINE 


```cpp
const size_t sdm::ERROR_IN_COMMAND_LINE;
```



### variable ERROR\_UNHANDLED\_EXCEPTION 


```cpp
const size_t sdm::ERROR_UNHANDLED_EXCEPTION;
```



### variable SUCCESS 


```cpp
const size_t sdm::SUCCESS;
```


## Public Functions Documentation


### function operator\* 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
vector < vtype, value > sdm::operator* (
    const matrix < mtype, vtype, value > &,
    const vector < vtype, value > &
) 
```




**Parameters:**


* `const` matrix&lt;mtype, vtype, value&gt;& 
* `const` vector&lt;vtype, value&gt;& 



**Returns:**

vector&lt;vtype, value&gt; 




        

### function operator\* 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
matrix < mtype, vtype, value > sdm::operator* (
    const matrix < mtype, vtype, value > &,
    const matrix < mtype, vtype, value > &
) 
```




**Parameters:**


* `const` matrix&lt;mtype, vtype, value&gt;& 
* `const` matrix&lt;mtype, vtype, value&gt;& 



**Returns:**

matrix&lt;mtype, vtype, value&gt; 




        

### function operator== 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
bool sdm::operator== (
    const matrix < mtype, vtype, value > &,
    const matrix < mtype, vtype, value > &
) 
```




**Parameters:**


* `const` matrix&lt;mtype, vtype, value&gt;& 
* `const` matrix&lt;mtype, vtype, value&gt;& 



**Returns:**

bool 




        

### function operator^ 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
matrix < mtype, vtype, value > sdm::operator^ (
    const vector < vtype, value > &,
    const matrix < mtype, vtype, value > &
) 
```




**Parameters:**


* `const` vector&lt;vtype, value&gt;& 
* `const` matrix&lt;mtype, vtype, value&gt;& 



**Returns:**

matrix&lt;mtype, vtype, value&gt; 




        

------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/dqn_mdp.hpp`