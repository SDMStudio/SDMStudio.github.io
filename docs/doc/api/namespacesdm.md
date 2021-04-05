
<NavBar active_item_id="2"/>

# Namespace sdm


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md)



_Namespace grouping all tools required for sequential decision making._ [More...](#detailed-description)










## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**algo**](namespacesdm_1_1algo.md) <br> |
| namespace | [**ast**](namespacesdm_1_1ast.md) <br>_Namespace that is used by the parser._  |
| namespace | [**common**](namespacesdm_1_1common.md) <br>_Namespace grouping all common functions to the whole project._  |
| namespace | [**exception**](namespacesdm_1_1exception.md) <br>_Namespace grouping all exceptions._  |
| namespace | [**parser**](namespacesdm_1_1parser.md) <br>_Namespace grouping all functions for parsing files._  |
| namespace | [**tools**](namespacesdm_1_1tools.md) <br>_Namespace grouping other tools._  |
| namespace | [**world**](namespacesdm_1_1world.md) <br> |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**AbstractVector**](classsdm_1_1AbstractVector.md) &lt;typename I, typename T&gt;<br>_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._  |
| class | [**Algorithm**](classsdm_1_1Algorithm.md) <br> |
| class | [**BackupOperator**](classsdm_1_1BackupOperator.md) &lt;TState, TAction, TData&gt;<br> |
| class | [**BaseBeliefState**](classsdm_1_1BaseBeliefState.md) &lt;TState&gt;<br> |
| class | [**BaseLogger**](classsdm_1_1BaseLogger.md) <br> |
| class | [**Belief2OccupancyValueFunction**](classsdm_1_1Belief2OccupancyValueFunction.md) &lt;typename TBelief, typename TOccupancyState&gt;<br> |
| class | [**BeliefMDP**](classsdm_1_1BeliefMDP.md) &lt;typename TBelief, typename TAction, typename TObservation&gt;<br>_The_ [_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _class is the interface that enables solving Discret POMDP using_[_**HSVI**_](classsdm_1_1HSVI.md) _algorithm._ |
| class | [**BinaryFunction**](classsdm_1_1BinaryFunction.md) &lt;TInput1, TInput2, TOutput&gt;<br> |
| class | [**BlindInitializer**](classsdm_1_1BlindInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._ |
| class | [**BoundInitializer**](classsdm_1_1BoundInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to the estimation of the value if if we get a constant reward at every timestep._  |
| class | [**CSVLogger**](classsdm_1_1CSVLogger.md) <br>_The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._  |
| class | [**ClassicBellmanBackupOperator**](classsdm_1_1ClassicBellmanBackupOperator.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**DecisionProcess**](classsdm_1_1DecisionProcess.md) &lt;TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TReward, TDistrib, is\_fully\_obs&gt;<br>_This class provides a way to instanciate multiple subclasses of decision processes._  |
| class | [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md) &lt;TStateSpace, TActionSpace, TDistrib&gt;<br>_This class is the base class for decision processes. It contains base spaces required in all decision processes._  |
| class | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) &lt;TState, TAction&gt;<br>_The deterministic decision rule class. This class is a function that maps generic states to generic actions._  |
| class | [**DiscreteAction**](classsdm_1_1DiscreteAction.md) <br> |
| class | [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) <br>_The class for Discrete Decentralized Partially Observable Markov Decision Processes. This class is central in SDMS since the actual parser can only parse files that are conform to the .dpomdp format (see_ [masplan page](http://masplan.org/problem_domains) _)._ |
| class | [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) <br>_The class for Discrete Multi-agent Markov Decision Processes._  |
| class | [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) <br>_The class for Discrete Partially Observable Markov Decision Processes._  |
| class | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) &lt;TItem&gt;<br>_The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._  |
| struct | [**EpsGreedy**](structsdm_1_1EpsGreedy.md) <br> |
| class | [**FileLogger**](classsdm_1_1FileLogger.md) <br>_The file logger will print logs/data in a file._  |
| class | [**Function**](classsdm_1_1Function.md) &lt;TInput, TOutput&gt;<br> |
| class | [**FunctionSpace**](classsdm_1_1FunctionSpace.md) &lt;typename TFunction&gt;<br>_The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._ |
| class | [**GymInterface**](classsdm_1_1GymInterface.md) &lt;TObsSpace, TActSpace, is\_multi\_agent&gt;<br>_The interface that must be implemented by reinforcement learning environment. The interface is inspired by_ [OpenAI Gym environments](https://gym.openai.com/) _._ |
| class | [**HSVI**](classsdm_1_1HSVI.md) &lt;typename TState, typename TAction&gt;<br> |
| class | [**HistoryTree**](classsdm_1_1HistoryTree.md) &lt;T&gt;<br> |
| class | [**IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md) &lt;typename TState, typename TAction, typename TValueFunction&gt;<br> |
| class | [**Initializer**](classsdm_1_1Initializer.md) &lt;typename TState, typename TAction&gt;<br>_Abstract class for initializer._  |
| class | [**InitializerFactory**](classsdm_1_1InitializerFactory.md) &lt;typename TState, typename TAction&gt;<br>_The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use :_
````cpp
std::cout << InitializerFactory<TState, TAction>::available() << std::endl;
````

 _._ |
| class | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md) &lt;typename TDecProcess&gt;<br> |
| class | [**InteractiveWorldBase**](classsdm_1_1InteractiveWorldBase.md) &lt;typename TState, typename TAction&gt;<br> |
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
| class | [**LearningAlgo**](classsdm_1_1LearningAlgo.md) &lt;typename TState, typename TAction, typename TObservation&gt;<br> |
| class | [**Logger**](classsdm_1_1Logger.md) <br> |
| class | [**MDPInitializer**](classsdm_1_1MDPInitializer.md) &lt;typename TState, typename TAction&gt;<br>_The MDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying MDP optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._ |
| class | [**MappedDisreteDistrib**](classsdm_1_1MappedDisreteDistrib.md) &lt;typename TSupport&gt;<br> |
| class | [**MappedVector**](classsdm_1_1MappedVector.md) &lt;TIndex, T&gt;<br>_Mapped vectors are vectors that use map to store values of a vector._  |
| class | [**MaxInitializer**](classsdm_1_1MaxInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to the best value. This is an optimistic initialization._  |
| class | [**MaxPlanValueFunction**](classsdm_1_1MaxPlanValueFunction.md) &lt;typename TVector, typename TAction, typename TValue&gt;<br> |
| class | [**MinInitializer**](classsdm_1_1MinInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to the worst value. This is a pessimistic initialization._  |
| class | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) &lt;TItem&gt;<br>_This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._  |
| class | [**MultiLogger**](classsdm_1_1MultiLogger.md) <br>_The multi logger will print logs from several loggers._  |
| class | [**MultiSpace**](classsdm_1_1MultiSpace.md) &lt;TSpace&gt;<br>_A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._ |
| class | [**NDPOMDP**](classsdm_1_1NDPOMDP.md) <br> |
| class | [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md) <br> |
| class | [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md) &lt;oState, oAction&gt;<br>_An occupancy MDP is a subclass of continuous state MDP where states are occupancy states. In the general case, an occupancy state refers to the whole knowledge that a central planner can have access to take decisions. But in this implementation we call occupancy state are distribution over state and joint histories ._  |
| class | [**OccupancyState**](classsdm_1_1OccupancyState.md) &lt;TState, TJointHistory\_p&gt;<br>_A state of occupancy refers to a state in which all the knowledge is known by a central planner and which it relies on to make a decision._  |
| class | [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md) &lt;typename TState, typename TAction&gt;<br>_The POMDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying POMDP optimal value function._ |
| class | [**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md) &lt;TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TObsDynamics, TReward, TDistrib&gt;<br>_This generic class allows to define a range of partially observable decision processes._  |
| class | [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md) &lt;TStateSpace, TObsSpace, TDistrib&gt;<br>_This class is the base class for partially observable processes. It contains base spaces required in all partially observable processes._  |
| class | [**QLearning**](classsdm_1_1QLearning.md) &lt;typename TState, typename TAction, typename TObservation&gt;<br> |
| class | [**RecursiveMap**](classsdm_1_1RecursiveMap.md) &lt;class T0, class T1, Ts&gt;<br>_The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_  |
| class | [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) &lt;class T0, class T1&gt;<br>[_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._ |
| class | [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) &lt;class T0, class T1, class T2, Ts&gt;<br> |
| class | [**ReplayMemory**](classsdm_1_1ReplayMemory.md) <br> |
| class | [**Reward**](classsdm_1_1Reward.md) <br>_This class provides getter and setter methods for the reward model._  |
| class | [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md) &lt;typename TBelief, typename TAction, typename TObservation&gt;<br>_An Serialized MDP is a subclass of POMDP where belief are serialized beliefs. In the general case, a serialized belief refers to the whole knowledge that a central planner can have access to take decisions at the time step of a precise agent._  |
| class | [**SerializedBeliefState**](classsdm_1_1SerializedBeliefState.md) <br> |
| class | [**SerializedMDP**](classsdm_1_1SerializedMDP.md) &lt;typename oState, typename oAction&gt;<br>_An Serialized MDP is a subclass of MDP where states are serialized states. In the general case, a serialized state refers to the whole knowledge that a central planner can have access to take decisions at the time step of an precise agent._  |
| class | [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md) &lt;typename oState, typename oAction&gt;<br>_An Serialized occupancy MDP is a subclass of continuous state MDP where states are seriliazed occupancy states and the resolution is serialized. In the general case, a Serialized occupancy state refers to the knowledge that a central planner can have access to take decisions at a precise agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._  |
| class | [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md) &lt;typename TState, typename TJointHistory\_p&gt;<br>_A serialized occupancy state refers to an occupancy state (i.e refers to the whole knowledge that a central planner can have access to take decisions) with a precise state for each agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._  |
| class | [**SerializedState**](classsdm_1_1SerializedState.md) <br> |
| class | [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &lt;TState, TAction&gt;<br>_Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._ |
| class | [**Space**](classsdm_1_1Space.md) <br>_This class is an abstract interface that all spaces should inherite. It gives some useful general methods to use generic spaces in your algorithms._  |
| class | [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md) &lt;typename TState, typename TOccupancyState&gt;<br> |
| class | [**StateDynamics**](classsdm_1_1StateDynamics.md) <br>_This class provide quick accessors to transition probability distributions._  |
| class | [**StdLogger**](classsdm_1_1StdLogger.md) <br>_The standard logger will print logs on the standard output stream._  |
| class | [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md) &lt;TStateSpace, TDistrib&gt;<br>_This class is the base class for stochastic processes including StochasticProcess class and_ [_**DecisionProcess**_](classsdm_1_1DecisionProcess.md) _class. This class is usually used to have a base interface that provide required data structure as StateSpace._ |
| class | [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md) &lt;typename TState, typename TAction, typename TValue, TBackupOperator, TStruct&gt;<br>_Tabular value function are functions of state and action that use a vector representation to store the values._  |
| class | [**Tree**](classsdm_1_1Tree.md) &lt;T&gt;<br>_Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._ |
| class | [**ValueFunction**](classsdm_1_1ValueFunction.md) &lt;TState, TAction, TValue&gt;<br>_This class is the abstract class of value function. All value function must derived this class._  |
| class | [**ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md) &lt;typename TState, typename TAction&gt;<br>_The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._ |
| class | [**ValueInitializer**](classsdm_1_1ValueInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to a constant value._  |
| class | [**Variations**](classsdm_1_1Variations.md) &lt;TFunction&gt;<br>_Iterator of_ [_**Variations**_](classsdm_1_1Variations.md) _._ |
| class | [**VectorImpl**](classsdm_1_1VectorImpl.md) &lt;I, T&gt;<br>_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._  |
| class | [**World**](classsdm_1_1World.md) <br> |
| struct | [**WorldType**](structsdm_1_1WorldType.md) &lt;TState, TAction&gt;<br>_Allows developers to get access to the type of underlying problem that is solved when dealing with a kind of state and action in_ [_**HSVI**_](classsdm_1_1HSVI.md) _. Usage Example :_`WorldType <BeliefState, number>::type` _will return the type_`DiscretePOMDP` _._ |
| class | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) &lt;typename TState, typename TAction&gt;<br>_This initializer initializes a value function to zero._  |
| class | [**feedback**](classsdm_1_1feedback.md) <br> |
| class | [**matrix**](classsdm_1_1matrix.md) &lt;mtype, vtype, value&gt;<br> |
| class | [**sdmsVector**](classsdm_1_1sdmsVector.md) &lt;class I, class T, class TBaseVector&gt;<br>_Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._ |
| class | [**vector**](classsdm_1_1vector.md) &lt;type, value&gt;<br> |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; std::pair&lt; action\_t, obs\_t &gt; &gt; | [**ActObsHistoryTree\_p**](namespacesdm.md#typedef-actobshistorytree-p)  <br> |
| typedef [**BaseBeliefState**](classsdm_1_1BaseBeliefState.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**BeliefState**](namespacesdm.md#typedef-beliefstate)  <br> |
| enum  | [**Criterion**](namespacesdm.md#enum-criterion)  <br> |
| typedef [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)&lt; TState, TAction, TValue, [**ClassicBellmanBackupOperator**](classsdm_1_1ClassicBellmanBackupOperator.md), [**DenseVector**](namespacesdm.md#typedef-densevector) &gt; | [**DenseValueFunction**](namespacesdm.md#typedef-densevaluefunction)  <br> |
| typedef [**sdmsVector**](classsdm_1_1sdmsVector.md)&lt; I, T, boost::numeric::ublas::vector&lt; T &gt; &gt; | [**DenseVector**](namespacesdm.md#typedef-densevector)  <br>_Dense vector are standard vector._  |
| typedef [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)&lt; TState, TAction &gt; | [**DetDecisionRule**](namespacesdm.md#typedef-detdecisionrule)  <br> |
| typedef [**PODecisionProcess**](namespacesdm.md#typedef-podecisionprocess)&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**StateDynamics**](classsdm_1_1StateDynamics.md), [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md), std::vector&lt; [**Reward**](classsdm_1_1Reward.md) &gt;, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**DiscretePOSG**](namespacesdm.md#typedef-discreteposg)  <br> |
| typedef [**FullyObservableDecisionProcess**](namespacesdm.md#typedef-fullyobservabledecisionprocess)&lt; [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt;, [**StateDynamics**](classsdm_1_1StateDynamics.md), std::vector&lt; [**Reward**](classsdm_1_1Reward.md) &gt;, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**DiscreteSG**](namespacesdm.md#typedef-discretesg)  <br> |
| typedef [**DecisionProcess**](classsdm_1_1DecisionProcess.md)&lt; TStateSpace, TActionSpace, TStateSpace, TStateDynamics, TReward, TDistrib, true &gt; | [**FullyObservableDecisionProcess**](namespacesdm.md#typedef-fullyobservabledecisionprocess)  <br> |
| typedef std::vector&lt; T &gt; | [**History**](namespacesdm.md#typedef-history)  <br>_History seq alias._  |
| typedef std::shared\_ptr&lt; [**HistoryTree**](classsdm_1_1HistoryTree.md)&lt; T &gt; &gt; | [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)  <br> |
| typedef std::shared\_ptr&lt; [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)&lt; T &gt; &gt; | [**JointHistoryTree\_p**](namespacesdm.md#typedef-jointhistorytree-p)  <br> |
| typedef [**Joint**](classsdm_1_1Joint.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**JointItem**](namespacesdm.md#typedef-jointitem)  <br> |
| typedef [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)&lt; TState, TAction, TValue, [**ClassicBellmanBackupOperator**](classsdm_1_1ClassicBellmanBackupOperator.md), [**MappedVector**](classsdm_1_1MappedVector.md) &gt; | [**MappedValueFunction**](namespacesdm.md#typedef-mappedvaluefunction)  <br> |
| enum  | [**Metric**](namespacesdm.md#enum-metric)  <br> |
| typedef [**HistoryTree\_p**](namespacesdm.md#typedef-historytree-p)&lt; obs\_t &gt; | [**ObsHistoryTree\_p**](namespacesdm.md#typedef-obshistorytree-p)  <br> |
| typedef [**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md)&lt; TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TObsDynamics, TReward, TDistrib &gt; | [**PODecisionProcess**](namespacesdm.md#typedef-podecisionprocess)  <br> |
| typedef std::pair&lt; T, U &gt; | [**Pair**](namespacesdm.md#typedef-pair)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; T0, T1, Ts... &gt;::type | [**RecursiveMap\_t**](namespacesdm.md#typedef-recursivemap-t)  <br> |
| typedef [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md)&lt; TState, TAction, TValue, [**ClassicBellmanBackupOperator**](classsdm_1_1ClassicBellmanBackupOperator.md), [**SparseVector**](namespacesdm.md#typedef-sparsevector) &gt; | [**SparseValueFunction**](namespacesdm.md#typedef-sparsevaluefunction)  <br> |
| typedef [**sdmsVector**](classsdm_1_1sdmsVector.md)&lt; I, T, boost::numeric::ublas::mapped\_vector&lt; T &gt; &gt; | [**SparseVector**](namespacesdm.md#typedef-sparsevector)  <br>_Sparse vector are vectors that store only non-zero values._  |
| enum  | [**Statistic**](namespacesdm.md#enum-statistic)  <br> |
| typedef std::tuple&lt; T... &gt; | [**Tuple**](namespacesdm.md#typedef-tuple)  <br> |
| enum  | [**TypeSoftmax**](namespacesdm.md#enum-typesoftmax)  <br> |
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
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**createInstance**](namespacesdm.md#function-createinstance) () <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**createInstance**](namespacesdm.md#function-createinstance) () <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**createInstanceAlgoInit**](namespacesdm.md#function-createinstancealgoinit) (std::string algo\_name, double error, int trials) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**createInstanceTabMDPInit**](namespacesdm.md#function-createinstancetabmdpinit) () <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**createInstanceTabPOMDPInit**](namespacesdm.md#function-createinstancetabpomdpinit) () <br> |
|  void | [**hash\_combine**](namespacesdm.md#function-hash-combine) (std::size\_t & seed, T const & v) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**makeInitializer**](namespacesdm.md#function-makeinitializer) (std::string init\_name) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**makeValueFunction**](namespacesdm.md#function-makevaluefunction) (std::string init\_name) <br> |
|  [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; | [**operator\***](namespacesdm.md#function-operator) (const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; & arg1, const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; & arg2) <br>_Returns the product of two matrices._  |
|  [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; | [**operator\***](namespacesdm.md#function-operator-2) (const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; & arg1, const [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; & arg2) <br>_Returns a vector that results from the product of a matrix with a vector._  |
|  std::ostream & | [**operator&lt;&lt;**](namespacesdm.md#function-operator-3) (std::ostream & os, const [**sdm::Pair**](namespacesdm.md#typedef-pair)&lt; T, U &gt; & pair) <br> |
|  std::ostream & | [**operator&lt;&lt;**](namespacesdm.md#function-operator-4) (std::ostream & os, [**sdm::Tuple**](namespacesdm.md#typedef-tuple)&lt; T... &gt; const & tuple) <br> |
|  std::ostream & | [**operator&lt;&lt;**](namespacesdm.md#function-operator-5) (std::ostream & os, const std::vector&lt; T &gt; & v) <br> |
|  bool | [**operator==**](namespacesdm.md#function-operator-6) (const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; & arg1, const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; & arg2) <br>_Returns true if the two matrices are equals and false otherwise._  |
|  [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; | [**operator^**](namespacesdm.md#function-operator-7) (const [**vector**](classsdm_1_1vector.md)&lt; vtype, value &gt; & v, const [**matrix**](classsdm_1_1matrix.md)&lt; mtype, vtype, value &gt; & m) <br>_Returns a matrix that results from the point-to-point product of a vector with a matrix._  |








# Detailed Description


this namespace groups all tools for sdms

Namespace grouping all tools required for sequential decision making.

namespace grouping all tools required for sequential decision making. 

    
## Public Types Documentation


### typedef ActObsHistoryTree\_p 


```cpp
using sdm::ActObsHistoryTree_p = typedef HistoryTree_p<std::pair<action_t, obs_t> >;
```



### typedef BeliefState 


```cpp
using sdm::BeliefState = typedef BaseBeliefState<number>;
```



### enum Criterion 


```cpp
enum sdm::Criterion {
    COST_MIN,
    REW_MAX
};
```



### typedef DenseValueFunction 


```cpp
using sdm::DenseValueFunction = typedef TabularValueFunction<TState, TAction, TValue, ClassicBellmanBackupOperator, DenseVector>;
```



### typedef DenseVector 


```cpp
using sdm::DenseVector = typedef sdmsVector<I, T, boost::numeric::ublas::vector<T> >;
```




**Template parameters:**


* `I` Type of index 
* `T` Type of value 



        

### typedef DetDecisionRule 


```cpp
using sdm::DetDecisionRule = typedef DeterministicDecisionRule<TState, TAction>;
```



### typedef DiscretePOSG 


```cpp
using sdm::DiscretePOSG = typedef PODecisionProcess<DiscreteSpace<number>, MultiDiscreteSpace<number>, MultiDiscreteSpace<number>, StateDynamics, ObservationDynamics, std::vector<Reward>, std::discrete_distribution<number> >;
```



### typedef DiscreteSG 


```cpp
using sdm::DiscreteSG = typedef FullyObservableDecisionProcess<DiscreteSpace<number>, MultiDiscreteSpace<number>, StateDynamics, std::vector<Reward>, std::discrete_distribution<number> >;
```



### typedef FullyObservableDecisionProcess 


```cpp
using sdm::FullyObservableDecisionProcess = typedef DecisionProcess<TStateSpace, TActionSpace, TStateSpace, TStateDynamics, TReward, TDistrib, true>;
```



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
using sdm::MappedValueFunction = typedef TabularValueFunction<TState, TAction, TValue, ClassicBellmanBackupOperator, MappedVector>;
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



### typedef PODecisionProcess 


```cpp
using sdm::PODecisionProcess = typedef PartiallyObservableDecisionProcess<TStateSpace, TActionSpace, TObsSpace, TStateDynamics, TObsDynamics, TReward, TDistrib>;
```



### typedef Pair 


```cpp
using sdm::Pair = typedef std::pair<T, U>;
```



### typedef RecursiveMap\_t 


```cpp
using sdm::RecursiveMap_t = typedef typename RecursiveMap<T0, T1, Ts...>::type;
```



### typedef SparseValueFunction 


```cpp
using sdm::SparseValueFunction = typedef TabularValueFunction<TState, TAction, TValue, ClassicBellmanBackupOperator, SparseVector>;
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

        

### typedef Tuple 


```cpp
using sdm::Tuple = typedef std::tuple<T...>;
```



### enum TypeSoftmax 


```cpp
enum sdm::TypeSoftmax {
    BELIEF,
    BEHAVIOR,
    OCCUPANCY
};
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


### function createInstance 


```cpp
template<typename TState typename TState, typename TAction typename TAction, template< typename TS, typename TA > class TInit>
std::shared_ptr< Initializer < TState, TAction > > sdm::createInstance () 
```



### function createInstance 


```cpp
template<typename TState typename TState, typename TAction typename TAction, template< typename TS, typename TA > class TValueFunction>
std::shared_ptr< ValueFunction < TState, TAction > > sdm::createInstance () 
```



### function createInstanceAlgoInit 


```cpp
template<typename TState typename TState, typename TAction typename TAction, template< typename TS, typename TA > class TInit>
std::shared_ptr< Initializer < TState, TAction > > sdm::createInstanceAlgoInit (
    std::string algo_name,
    double error,
    int trials
) 
```



### function createInstanceTabMDPInit 


```cpp
template<typename TState typename TState, typename TAction typename TAction>
std::shared_ptr< Initializer < TState, TAction > > sdm::createInstanceTabMDPInit () 
```



### function createInstanceTabPOMDPInit 


```cpp
template<typename TState typename TState, typename TAction typename TAction>
std::shared_ptr< Initializer < TState, TAction > > sdm::createInstanceTabPOMDPInit () 
```



### function hash\_combine 


```cpp
template<class T class T>
inline void sdm::hash_combine (
    std::size_t & seed,
    T const & v
) 
```



### function makeInitializer 


```cpp
template<typename TState typename TState, typename TAction typename TAction>
std::shared_ptr< Initializer < TState, TAction > > sdm::makeInitializer (
    std::string init_name
) 
```



### function makeValueFunction 


```cpp
template<typename TState typename TState, typename TAction typename TAction>
std::shared_ptr< Initializer < TState, TAction > > sdm::makeValueFunction (
    std::string init_name
) 
```



### function operator\* 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
matrix < mtype, vtype, value > sdm::operator* (
    const matrix < mtype, vtype, value > & arg1,
    const matrix < mtype, vtype, value > & arg2
) 
```




**Parameters:**


* `const` matrix&lt;mtype, vtype, value&gt;& 
* `const` matrix&lt;mtype, vtype, value&gt;& 



**Returns:**

matrix&lt;mtype, vtype, value&gt; 




        

### function operator\* 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
vector < vtype, value > sdm::operator* (
    const matrix < mtype, vtype, value > & arg1,
    const vector < vtype, value > & arg2
) 
```


Matrix / Vector product



**Parameters:**


* `const` matrix&lt;mtype, vtype, value&gt;& 
* `const` vector&lt;vtype, value&gt;& 



**Returns:**

vector&lt;vtype, value&gt; 




        

### function operator&lt;&lt; 


```cpp
template<typename T typename T, typename U typename U>
std::ostream & sdm::operator<< (
    std::ostream & os,
    const sdm::Pair < T, U > & pair
) 
```



### function operator&lt;&lt; 


```cpp
template<class... T>
std::ostream & sdm::operator<< (
    std::ostream & os,
    sdm::Tuple < T... > const & tuple
) 
```



### function operator&lt;&lt; 


```cpp
template<typename T typename T>
std::ostream & sdm::operator<< (
    std::ostream & os,
    const std::vector< T > & v
) 
```



### function operator== 


```cpp
template<typename mtype typename mtype, typename vtype typename vtype, typename value typename value>
bool sdm::operator== (
    const matrix < mtype, vtype, value > & arg1,
    const matrix < mtype, vtype, value > & arg2
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
    const vector < vtype, value > & v,
    const matrix < mtype, vtype, value > & m
) 
```




**Parameters:**


* `const` vector&lt;vtype, value&gt;& 
* `const` matrix&lt;mtype, vtype, value&gt;& 



**Returns:**

matrix&lt;mtype, vtype, value&gt; 




        

------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/algorithms/hsvi.hpp`