
# Class List

Here are the classes, structs, unions and interfaces with brief descriptions:

* **namespace** [**sdm**](namespacesdm.md) _Namespace grouping all tools required for sequential decision making._   
  * **class** [**AbstractVector**](classsdm_1_1AbstractVector.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._   
  * **class** [**Algorithm**](classsdm_1_1Algorithm.md)   
  * **class** [**BackupOperator**](classsdm_1_1BackupOperator.md)   
  * **class** [**BaseBeliefState**](classsdm_1_1BaseBeliefState.md)   
  * **class** [**BaseLogger**](classsdm_1_1BaseLogger.md)   
  * **class** [**Belief2OccupancyValueFunction**](classsdm_1_1Belief2OccupancyValueFunction.md)   
  * **class** [**BeliefMDP**](classsdm_1_1BeliefMDP.md) _The_ [_**BeliefMDP**_](classsdm_1_1BeliefMDP.md) _class is the interface that enables solving Discret POMDP using_[_**HSVI**_](classsdm_1_1HSVI.md) _algorithm._  
  * **class** [**BinaryFunction**](classsdm_1_1BinaryFunction.md)   
  * **class** [**BlindInitializer**](classsdm_1_1BlindInitializer.md) _This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._  
  * **class** [**BoundInitializer**](classsdm_1_1BoundInitializer.md) _This initializer initializes a value function to the estimation of the value if if we get a constant reward at every timestep._   
  * **class** [**CSVLogger**](classsdm_1_1CSVLogger.md) _The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._   
  * **class** [**ClassicBellmanBackupOperator**](classsdm_1_1ClassicBellmanBackupOperator.md)   
  * **class** [**DecisionProcess**](classsdm_1_1DecisionProcess.md) _This class provides a way to instanciate multiple subclasses of decision processes._   
  * **class** [**DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md) _This class is the base class for decision processes. It contains base spaces required in all decision processes._   
  * **class** [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) _The deterministic decision rule class. This class is a function that maps generic states to generic actions._   
  * **class** [**DiscreteAction**](classsdm_1_1DiscreteAction.md)   
  * **class** [**DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) _The class for Discrete Decentralized Partially Observable Markov Decision Processes. This class is central in SDMS since the actual parser can only parse files that are conform to the .dpomdp format (see_ [masplan page](http://masplan.org/problem_domains) _)._  
  * **class** [**DiscreteMDP**](classsdm_1_1DiscreteMDP.md) _The class for Discrete Markov Decision Processes._   
  * **class** [**DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) _The class for Discrete Multi-agent Markov Decision Processes._   
  * **class** [**DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
  * **class** [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._   
  * **struct** [**EpsGreedy**](structsdm_1_1EpsGreedy.md)   
  * **class** [**FileLogger**](classsdm_1_1FileLogger.md) _The file logger will print logs/data in a file._   
  * **class** [**Function**](classsdm_1_1Function.md)   
  * **class** [**FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._  
  * **class** [**GymInterface**](classsdm_1_1GymInterface.md) _The interface that must be implemented by reinforcement learning environment. The interface is inspired by_ [OpenAI Gym environments](https://gym.openai.com/) _._  
  * **class** [**HSVI**](classsdm_1_1HSVI.md)   
  * **class** [**HistoryTree**](classsdm_1_1HistoryTree.md)   
  * **class** [**IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md)   
  * **class** [**Initializer**](classsdm_1_1Initializer.md) _Abstract class for initializer._   
  * **class** [**InitializerFactory**](classsdm_1_1InitializerFactory.md) _The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use :_
  ````cpp
  std::cout << InitializerFactory<TState, TAction>::available() << std::endl;
  ````

   _._  
  * **class** [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md)   
  * **class** [**InteractiveWorldBase**](classsdm_1_1InteractiveWorldBase.md)   
  * **struct** [**Item**](structsdm_1_1Item.md)   
  * **struct** [**Item&lt; bool &gt;**](structsdm_1_1Item_3_01bool_01_4.md)   
  * **struct** [**Item&lt; char &gt;**](structsdm_1_1Item_3_01char_01_4.md)   
  * **struct** [**Item&lt; double &gt;**](structsdm_1_1Item_3_01double_01_4.md)   
  * **struct** [**Item&lt; float &gt;**](structsdm_1_1Item_3_01float_01_4.md)   
  * **struct** [**Item&lt; int &gt;**](structsdm_1_1Item_3_01int_01_4.md)   
  * **struct** [**Item&lt; long &gt;**](structsdm_1_1Item_3_01long_01_4.md)   
  * **struct** [**Item&lt; short &gt;**](structsdm_1_1Item_3_01short_01_4.md)   
  * **struct** [**Item&lt; unsigned int &gt;**](structsdm_1_1Item_3_01unsigned_01int_01_4.md)   
  * **struct** [**Item&lt; unsigned short &gt;**](structsdm_1_1Item_3_01unsigned_01short_01_4.md)   
  * **class** [**Joint**](classsdm_1_1Joint.md) _class of joint item instances._   
  * **class** [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md)   
  * **class** [**LearningAlgo**](classsdm_1_1LearningAlgo.md)   
  * **class** [**Logger**](classsdm_1_1Logger.md)   
  * **class** [**MDPInitializer**](classsdm_1_1MDPInitializer.md) _The MDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying MDP optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._  
  * **class** [**MappedDisreteDistrib**](classsdm_1_1MappedDisreteDistrib.md)   
  * **class** [**MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._   
  * **class** [**MaxInitializer**](classsdm_1_1MaxInitializer.md) _This initializer initializes a value function to the best value. This is an optimistic initialization._   
  * **class** [**MaxPlanValueFunction**](classsdm_1_1MaxPlanValueFunction.md)   
  * **class** [**MinInitializer**](classsdm_1_1MinInitializer.md) _This initializer initializes a value function to the worst value. This is a pessimistic initialization._   
  * **class** [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._   
  * **class** [**MultiLogger**](classsdm_1_1MultiLogger.md) _The multi logger will print logs from several loggers._   
  * **class** [**MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._  
  * **class** [**NDPOMDP**](classsdm_1_1NDPOMDP.md)   
    * **class** [**Node**](classsdm_1_1NDPOMDP_1_1Node.md)   
  * **class** [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md)   
  * **class** [**OccupancyMDP**](classsdm_1_1OccupancyMDP.md) _An occupancy MDP is a subclass of continuous state MDP where states are occupancy states. In the general case, an occupancy state refers to the whole knowledge that a central planner can have access to take decisions. But in this implementation we call occupancy state are distribution over state and joint histories ._   
  * **class** [**OccupancyState**](classsdm_1_1OccupancyState.md) _A state of occupancy refers to a state in which all the knowledge is known by a central planner and which it relies on to make a decision._   
  * **class** [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md) _The POMDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying POMDP optimal value function._  
  * **class** [**PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md) _This generic class allows to define a range of partially observable decision processes._   
  * **class** [**PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md) _This class is the base class for partially observable processes. It contains base spaces required in all partially observable processes._   
  * **class** [**QLearning**](classsdm_1_1QLearning.md)   
  * **class** [**RecursiveMap**](classsdm_1_1RecursiveMap.md) _The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_ 
  * **class** [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) [_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._  
  * **class** [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md)   
  * **class** [**ReplayMemory**](classsdm_1_1ReplayMemory.md)   
  * **class** [**Reward**](classsdm_1_1Reward.md) _This class provides getter and setter methods for the reward model._   
  * **class** [**SerializedBeliefMDP**](classsdm_1_1SerializedBeliefMDP.md) _An Serialized MDP is a subclass of POMDP where belief are serialized beliefs. In the general case, a serialized belief refers to the whole knowledge that a central planner can have access to take decisions at the time step of a precise agent._   
  * **class** [**SerializedBeliefState**](classsdm_1_1SerializedBeliefState.md)   
  * **class** [**SerializedMDP**](classsdm_1_1SerializedMDP.md) _An Serialized MDP is a subclass of MDP where states are serialized states. In the general case, a serialized state refers to the whole knowledge that a central planner can have access to take decisions at the time step of an precise agent._   
  * **class** [**SerializedOccupancyMDP**](classsdm_1_1SerializedOccupancyMDP.md) _An Serialized occupancy MDP is a subclass of continuous state MDP where states are seriliazed occupancy states and the resolution is serialized. In the general case, a Serialized occupancy state refers to the knowledge that a central planner can have access to take decisions at a precise agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._   
  * **class** [**SerializedOccupancyState**](classsdm_1_1SerializedOccupancyState.md) _A serialized occupancy state refers to an occupancy state (i.e refers to the whole knowledge that a central planner can have access to take decisions) with a precise state for each agent. But in this implementation we call serialized occupancy state a distribution over serialized state and joint histories ._   
  * **class** [**SerializedState**](classsdm_1_1SerializedState.md)   
  * **class** [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) _Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._  
  * **class** [**Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite. It gives some useful general methods to use generic spaces in your algorithms._   
  * **class** [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md)   
  * **class** [**StateDynamics**](classsdm_1_1StateDynamics.md) _This class provide quick accessors to transition probability distributions._   
  * **class** [**StdLogger**](classsdm_1_1StdLogger.md) _The standard logger will print logs on the standard output stream._   
  * **class** [**StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md) _This class is the base class for stochastic processes including StochasticProcess class and_ [_**DecisionProcess**_](classsdm_1_1DecisionProcess.md) _class. This class is usually used to have a base interface that provide required data structure as StateSpace._  
  * **class** [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md) _Tabular value function are functions of state and action that use a vector representation to store the values._   
  * **class** [**Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
  * **class** [**ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
  * **class** [**ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md) _The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._  
  * **class** [**ValueInitializer**](classsdm_1_1ValueInitializer.md) _This initializer initializes a value function to a constant value._   
  * **class** [**Variations**](classsdm_1_1Variations.md) _Iterator of_ [_**Variations**_](classsdm_1_1Variations.md) _._  
  * **class** [**VectorImpl**](classsdm_1_1VectorImpl.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._   
  * **class** [**World**](classsdm_1_1World.md)   
  * **struct** [**WorldType**](structsdm_1_1WorldType.md) _Allows developers to get access to the type of underlying problem that is solved when dealing with a kind of state and action in_ [_**HSVI**_](classsdm_1_1HSVI.md) _. Usage Example :_`WorldType <BeliefState, number>::type` _will return the type_`DiscretePOMDP` _._  
  * **class** [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) _This initializer initializes a value function to zero._   
  * **namespace** [**algo**](namespacesdm_1_1algo.md)   
  * **namespace** [**ast**](namespacesdm_1_1ast.md) _Namespace that is used by the parser._   
    * **struct** [**discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) _encodes the input into a discrete space class_   
    * **struct** [**dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md)   
    * **struct** [**dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md)   
    * **struct** [**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md)   
    * **struct** [**element\_encoder**](structsdm_1_1ast_1_1element__encoder.md) _encodes the input into a number (index)_   
    * **struct** [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) 
    * **struct** [**joint\_element\_encoder**](classsdm_1_1ast_1_1joint__element__encoder.md) _encodes the input into a joint element (vector of number)_   
    * **struct** [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) _encodes the input into a matrix_   
    * **struct** [**matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) 
    * **struct** [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) _encodes the input into a multi discrete space class_   
    * **class** [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md)   
    * **struct** [**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md)   
    * **struct** [**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md)   
    * **struct** [**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md)   
    * **struct** [**observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) 
    * **struct** [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) _encodes the input into a dynamic class_   
    * **struct** [**real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) 
    * **struct** [**reward\_encoder**](structsdm_1_1ast_1_1reward__encoder.md)   
    * **struct** [**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md)   
    * **struct** [**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md)   
    * **struct** [**reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) 
    * **class** [**rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md)   
    * **class** [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md)   
    * **struct** [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) _encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_   
    * **struct** [**state\_transition\_encoder**](structsdm_1_1ast_1_1state__transition__encoder.md) _used to encode state transition dynamics (i.e._ [_**StateDynamics**_](classsdm_1_1StateDynamics.md) _class)_  
    * **struct** [**str\_visitor**](structsdm_1_1ast_1_1str__visitor.md)   
    * **struct** [**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md)   
    * **struct** [**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md)   
    * **struct** [**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md)   
    * **struct** [**transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) 
    * **struct** [**value\_t**](structsdm_1_1ast_1_1value__t.md) 
    * **struct** [**values\_t**](structsdm_1_1ast_1_1values__t.md) 
    * **struct** [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) _encodes the input into a vector_   
  * **namespace** [**common**](namespacesdm_1_1common.md) _Namespace grouping all common functions to the whole project._   
  * **namespace** [**exception**](namespacesdm_1_1exception.md) _Namespace grouping all exceptions._   
    * **class** [**Exception**](classsdm_1_1exception_1_1Exception.md) _Base exception class._   
    * **class** [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._   
    * **class** [**NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md)   
    * **class** [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._   
  * **class** [**feedback**](classsdm_1_1feedback.md)   
  * **class** [**matrix**](classsdm_1_1matrix.md)   
  * **namespace** [**parser**](namespacesdm_1_1parser.md) _Namespace grouping all functions for parsing files._   
    * **struct** [**error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md)   
  * **class** [**sdmsVector**](classsdm_1_1sdmsVector.md) _Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._  
  * **namespace** [**tools**](namespacesdm_1_1tools.md) _Namespace grouping other tools._   
  * **class** [**vector**](classsdm_1_1vector.md)   
  * **namespace** [**world**](namespacesdm_1_1world.md)   
* **namespace** [**sdms**](namespacesdms.md) _Namespace grouping all tools required for sequential decision making._ 
* **namespace** [**std**](namespacestd.md)   
  * **struct** [**hash&lt; sdm::BaseBeliefState&lt; TState &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::DeterministicDecisionRule&lt; S, A &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1DeterministicDecisionRule_3_01S_00_01A_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::Joint&lt; T &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::MappedVector&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1MappedVector_3_01S_00_01V_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::OccupancyState&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::Pair&lt; T, U &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::SerializedOccupancyState&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedOccupancyState_3_01S_00_01V_01_4_01_4.md)   
  * **struct** [**hash&lt; sdm::SerializedState &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedState_01_4.md)   
  * **struct** [**hash&lt; sdm::Tuple&lt; TT... &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Tuple_3_01TT_8_8_8_01_4_01_4.md)   
  * **struct** [**hash&lt; std::vector&lt; T &gt; &gt;**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md)   
  * **struct** [**is\_any**](structstd_1_1is__any.md) 
* **namespace** [**@72**](namespacestd_1_1_0D72.md) 