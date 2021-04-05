
# Class Hierarchy

This inheritance list is sorted roughly, but not completely, alphabetically:


* **class** [**dynamics**](classdynamics.md) 
* **class** [**sdm::AbstractVector**](classsdm_1_1AbstractVector.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._ 
* **class** [**sdm::Algorithm**](classsdm_1_1Algorithm.md)   
  * **class** [**sdm::HSVI**](classsdm_1_1HSVI.md) 
  * **class** [**sdm::LearningAlgo**](classsdm_1_1LearningAlgo.md)   
    * **class** [**sdm::QLearning**](classsdm_1_1QLearning.md) 
* **class** [**sdm::BackupOperator**](classsdm_1_1BackupOperator.md) 
* **class** [**sdm::VectorImpl**](classsdm_1_1VectorImpl.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._   
  * **class** [**sdm::sdmsVector**](classsdm_1_1sdmsVector.md) _Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._
* **class** [**sdm::BaseLogger**](classsdm_1_1BaseLogger.md)   
  * **class** [**sdm::Logger**](classsdm_1_1Logger.md)   
    * **class** [**sdm::FileLogger**](classsdm_1_1FileLogger.md) _The file logger will print logs/data in a file._   
      * **class** [**sdm::CSVLogger**](classsdm_1_1CSVLogger.md) _The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._ 
    * **class** [**sdm::StdLogger**](classsdm_1_1StdLogger.md) _The standard logger will print logs on the standard output stream._ 
  * **class** [**sdm::MultiLogger**](classsdm_1_1MultiLogger.md) _The multi logger will print logs from several loggers._ 
* **class** [**sdm::Function**](classsdm_1_1Function.md) 
* **class** [**sdm::SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) _Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._
* **class** [**sdm::GymInterface**](classsdm_1_1GymInterface.md) _The interface that must be implemented by reinforcement learning environment. The interface is inspired by_ [OpenAI Gym environments](https://gym.openai.com/) _._
* **class** [**sdm::Initializer**](classsdm_1_1Initializer.md) _Abstract class for initializer._   
  * **class** [**sdm::BlindInitializer**](classsdm_1_1BlindInitializer.md) _This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._
  * **class** [**sdm::BoundInitializer**](classsdm_1_1BoundInitializer.md) _This initializer initializes a value function to the estimation of the value if if we get a constant reward at every timestep._   
    * **class** [**sdm::MaxInitializer**](classsdm_1_1MaxInitializer.md) _This initializer initializes a value function to the best value. This is an optimistic initialization._ 
    * **class** [**sdm::MinInitializer**](classsdm_1_1MinInitializer.md) _This initializer initializes a value function to the worst value. This is a pessimistic initialization._ 
  * **class** [**sdm::MDPInitializer**](classsdm_1_1MDPInitializer.md) _The MDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying MDP optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._
  * **class** [**sdm::POMDPInitializer**](classsdm_1_1POMDPInitializer.md) _The POMDP initializer enables to initialize the upper bound in_ [_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying POMDP optimal value function._
  * **class** [**sdm::ValueInitializer**](classsdm_1_1ValueInitializer.md) _This initializer initializes a value function to a constant value._   
    * **class** [**sdm::ZeroInitializer**](classsdm_1_1ZeroInitializer.md) _This initializer initializes a value function to zero._ 
* **class** [**sdm::StochasticProcessBase**](classsdm_1_1StochasticProcessBase.md) _This class is the base class for stochastic processes including StochasticProcess class and_ [_**DecisionProcess**_](classsdm_1_1DecisionProcess.md) _class. This class is usually used to have a base interface that provide required data structure as StateSpace._  
  * **class** [**sdm::DecisionProcessBase**](classsdm_1_1DecisionProcessBase.md) _This class is the base class for decision processes. It contains base spaces required in all decision processes._   
    * **class** [**sdm::DecisionProcess**](classsdm_1_1DecisionProcess.md) _This class provides a way to instanciate multiple subclasses of decision processes._   
      * **class** [**sdm::DiscreteMDP**](classsdm_1_1DiscreteMDP.md) _The class for Discrete Markov Decision Processes._ 
      * **class** [**sdm::DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) _The class for Discrete Multi-agent Markov Decision Processes._ 
    * **class** [**sdm::DecisionProcess**](classsdm_1_1DecisionProcess.md) _This class provides a way to instanciate multiple subclasses of decision processes._   
      * **class** [**sdm::DiscreteMDP**](classsdm_1_1DiscreteMDP.md) _The class for Discrete Markov Decision Processes._ 
      * **class** [**sdm::DiscreteMMDP**](classsdm_1_1DiscreteMMDP.md) _The class for Discrete Multi-agent Markov Decision Processes._ 
  * **class** [**sdm::PartiallyObservableProcessBase**](classsdm_1_1PartiallyObservableProcessBase.md) _This class is the base class for partially observable processes. It contains base spaces required in all partially observable processes._   
    * **class** [**sdm::PartiallyObservableDecisionProcess**](classsdm_1_1PartiallyObservableDecisionProcess.md) _This generic class allows to define a range of partially observable decision processes._ 
* **class** [**sdm::Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite. It gives some useful general methods to use generic spaces in your algorithms._   
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._
  * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._
  * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._
  * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._ 
  * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._
* **class** [**sdm::InitializerFactory**](classsdm_1_1InitializerFactory.md) _The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use :_
````cpp
std::cout << InitializerFactory<TState, TAction>::available() << std::endl;
````

 _._
* **class** [**sdm::InteractiveWorldBase**](classsdm_1_1InteractiveWorldBase.md) 
* **class** [**sdm::World**](classsdm_1_1World.md)   
  * **class** [**sdm::NDPOMDP**](classsdm_1_1NDPOMDP.md) 
* **class** [**sdm::NDPOMDP::Node**](classsdm_1_1NDPOMDP_1_1Node.md) 
* **class** [**sdm::ObservationDynamics**](classsdm_1_1ObservationDynamics.md) 
* **class** [**sdm::RecursiveMap**](classsdm_1_1RecursiveMap.md) _The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_ 
* **class** [**sdm::ReplayMemory**](classsdm_1_1ReplayMemory.md) 
* **class** [**sdm::Reward**](classsdm_1_1Reward.md) _This class provides getter and setter methods for the reward model._ 
* **class** [**sdm::StateDynamics**](classsdm_1_1StateDynamics.md) _This class provide quick accessors to transition probability distributions._ 
* **class** [**sdm::ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md) _The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._
* **class** [**sdm::Variations**](classsdm_1_1Variations.md) _Iterator of_ [_**Variations**_](classsdm_1_1Variations.md) _._
* **class** [**sdm::ast::obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) 
* **class** [**sdm::ast::rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md) 
* **class** [**sdm::ast::state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) 
* **class** [**sdm::feedback**](classsdm_1_1feedback.md) 
* **class** [**sdm::matrix**](classsdm_1_1matrix.md) 
* **class** [**sdm::vector**](classsdm_1_1vector.md) 
* **struct** [**sdm::EpsGreedy**](structsdm_1_1EpsGreedy.md) 
* **struct** [**sdm::Item&lt; bool &gt;**](structsdm_1_1Item_3_01bool_01_4.md) 
* **struct** [**sdm::Item&lt; char &gt;**](structsdm_1_1Item_3_01char_01_4.md) 
* **struct** [**sdm::Item&lt; double &gt;**](structsdm_1_1Item_3_01double_01_4.md) 
* **struct** [**sdm::Item&lt; float &gt;**](structsdm_1_1Item_3_01float_01_4.md) 
* **struct** [**sdm::Item&lt; int &gt;**](structsdm_1_1Item_3_01int_01_4.md) 
* **struct** [**sdm::Item&lt; long &gt;**](structsdm_1_1Item_3_01long_01_4.md) 
* **struct** [**sdm::Item&lt; short &gt;**](structsdm_1_1Item_3_01short_01_4.md) 
* **struct** [**sdm::Item&lt; unsigned int &gt;**](structsdm_1_1Item_3_01unsigned_01int_01_4.md) 
* **struct** [**sdm::Item&lt; unsigned short &gt;**](structsdm_1_1Item_3_01unsigned_01short_01_4.md) 
* **struct** [**sdm::WorldType**](structsdm_1_1WorldType.md) _Allows developers to get access to the type of underlying problem that is solved when dealing with a kind of state and action in_ [_**HSVI**_](classsdm_1_1HSVI.md) _. Usage Example :_`WorldType <BeliefState, number>::type` _will return the type_`DiscretePOMDP` _._
* **struct** [**sdm::ast::dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md) 
* **struct** [**sdm::ast::joint\_element\_encoder**](classsdm_1_1ast_1_1joint__element__encoder.md) _encodes the input into a joint element (vector of number)_ 
* **struct** [**sdm::ast::observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) 
* **struct** [**sdm::ast::observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) 
* **struct** [**sdm::ast::observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) 
* **struct** [**sdm::ast::reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) 
* **struct** [**sdm::ast::reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) 
* **struct** [**sdm::ast::str\_visitor**](structsdm_1_1ast_1_1str__visitor.md) 
* **struct** [**sdm::ast::transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) 
* **struct** [**sdm::ast::transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) 
* **struct** [**sdm::ast::transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) 
* **struct** [**sdm::parser::error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md) 
* **struct** [**std::hash&lt; sdm::BaseBeliefState&lt; TState &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1BaseBeliefState_3_01TState_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::DeterministicDecisionRule&lt; S, A &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1DeterministicDecisionRule_3_01S_00_01A_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::Joint&lt; T &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Joint_3_01T_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::MappedVector&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1MappedVector_3_01S_00_01V_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::OccupancyState&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1OccupancyState_3_01S_00_01V_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::Pair&lt; T, U &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::SerializedOccupancyState&lt; S, V &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedOccupancyState_3_01S_00_01V_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::SerializedState &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedState_01_4.md) 
* **struct** [**std::hash&lt; sdm::Tuple&lt; TT... &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Tuple_3_01TT_8_8_8_01_4_01_4.md) 
* **struct** [**std::hash&lt; std::vector&lt; T &gt; &gt;**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md) 
* **class** **std::unordered_map< TIndex, T >**  
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
* **class** **item_t**  
  * **struct** [**sdm::Item**](structsdm_1_1Item.md) 
  * **struct** [**sdm::Item**](structsdm_1_1Item.md) 
* **class** **std::enable_shared_from_this< DiscreteDecPOMDP >**  
  * **class** [**sdm::DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) _The class for Discrete Decentralized Partially Observable Markov Decision Processes. This class is central in SDMS since the actual parser can only parse files that are conform to the .dpomdp format (see_ [masplan page](http://masplan.org/problem_domains) _)._
* **class** **std::enable_shared_from_this< DiscreteMDP >**  
  * **class** [**sdm::DiscreteMDP**](classsdm_1_1DiscreteMDP.md) _The class for Discrete Markov Decision Processes._ 
* **class** **std::enable_shared_from_this< DiscretePOMDP >**  
  * **class** [**sdm::DiscretePOMDP**](classsdm_1_1DiscretePOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._ 
* **class** **std::enable_shared_from_this< Tree< T > >**  
  * **class** [**sdm::Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
    * **class** [**sdm::HistoryTree**](classsdm_1_1HistoryTree.md) 
  * **class** [**sdm::Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
    * **class** [**sdm::HistoryTree**](classsdm_1_1HistoryTree.md) 
  * **class** [**sdm::Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
    * **class** [**sdm::HistoryTree**](classsdm_1_1HistoryTree.md) 
* **class** **TValueFunction< TState, TAction, TValue >**  
  * **class** [**sdm::IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md) 
* **class** **std::vector< item >**  
  * **class** [**sdm::Joint**](classsdm_1_1Joint.md) _class of joint item instances._ 
* **class** **std::vector< std::shared_ptr< Logger > >**  
  * **class** [**sdm::MultiLogger**](classsdm_1_1MultiLogger.md) _The multi logger will print logs from several loggers._ 
* **class** **map_t< T0, T1 >**  
  * **class** [**sdm::RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) [_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._
* **class** **map_t< T0, RecursiveMap_t< T1, T2, Ts... > >**  
  * **class** [**sdm::RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) 
* **class** **std::enable_shared_from_this< SerializedMDP< oState, oAction > >**  
  * **class** [**sdm::SerializedMDP**](classsdm_1_1SerializedMDP.md) _An Serialized MDP is a subclass of MDP where states are serialized states. In the general case, a serialized state refers to the whole knowledge that a central planner can have access to take decisions at the time step of an precise agent._ 
* **class** **Pair< number, std::vector< number > >**  
  * **class** [**sdm::SerializedState**](classsdm_1_1SerializedState.md) 
* **class** **exception**  
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
* **class** **TBaseVector**  
  * **class** [**sdm::sdmsVector**](classsdm_1_1sdmsVector.md) _Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._
* **class** **Module**  
  * **struct** [**DQNImpl**](structDQNImpl.md) 
* **class** **boost::static_visitor< DiscreteSpace< std::string > >**  
  * **struct** [**sdm::ast::discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) _encodes the input into a discrete space class_ 
* **class** **boost::static_visitor< sdm::DiscreteDecPOMDP >**  
  * **struct** [**sdm::ast::dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md) 
* **class** **position_tagged**  
  * **struct** [**sdm::ast::dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) 
* **class** **boost::static_visitor< std::string >**  
  * **struct** [**sdm::ast::element\_encoder**](structsdm_1_1ast_1_1element__encoder.md) _encodes the input into a number (index)_ 
* **class** **boost::spirit::x3::variant< std::string, unsigned short >**  
  * **struct** [**sdm::ast::identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) 
* **class** **boost::static_visitor< Matrix >**  
  * **struct** [**sdm::ast::matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) _encodes the input into a matrix_ 
* **class** **boost::spirit::x3::variant< std::string, std::vector< std::vector< float > > >**  
  * **struct** [**sdm::ast::matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) 
* **class** **boost::static_visitor< MultiDiscreteSpace< std::string > >**  
  * **struct** [**sdm::ast::multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) _encodes the input into a multi discrete space class_ 
* **class** **boost::spirit::x3::variant< observation_entry_1_t, observation_entry_2_t, observation_entry_3_t >**  
  * **struct** [**sdm::ast::observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) 
* **class** **boost::static_visitor<>**  
  * **struct** [**sdm::ast::observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) _encodes the input into a dynamic class_ 
  * **struct** [**sdm::ast::reward\_encoder**](structsdm_1_1ast_1_1reward__encoder.md) 
  * **struct** [**sdm::ast::state\_transition\_encoder**](structsdm_1_1ast_1_1state__transition__encoder.md) _used to encode state transition dynamics (i.e._ [_**StateDynamics**_](classsdm_1_1StateDynamics.md) _class)_
* **class** **boost::spirit::x3::variant< std::string, std::vector< float > >**  
  * **struct** [**sdm::ast::real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) 
* **class** **boost::spirit::x3::variant< reward_entry_1_t, reward_entry_2_t >**  
  * **struct** [**sdm::ast::reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) 
* **class** **boost::static_visitor< std::vector< std::string > >**  
  * **struct** [**sdm::ast::state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) _encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_ 
* **class** **boost::spirit::x3::variant< transition_entry_1_t, transition_entry_2_t, transition_entry_3_t >**  
  * **struct** [**sdm::ast::transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) 
* **class** **boost::spirit::x3::variant< unsigned short, std::vector< std::string > >**  
  * **struct** [**sdm::ast::value\_t**](structsdm_1_1ast_1_1value__t.md) 
* **class** **boost::spirit::x3::variant< std::vector< unsigned short >, std::vector< std::vector< std::string > > >**  
  * **struct** [**sdm::ast::values\_t**](structsdm_1_1ast_1_1values__t.md) 
* **class** **boost::static_visitor< Vector >**  
  * **struct** [**sdm::ast::vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) _encodes the input into a vector_ 
* **class** **std::disjunction< std::is_same< T, Ts >... >**  
  * **struct** [**std::is\_any**](structstd_1_1is__any.md) 