
# Class Hierarchy

This inheritance list is sorted roughly, but not completely, alphabetically:


* **class** [**dynamics**](classdynamics.md) 
* **class** [**reward**](classreward.md) 
* **class** [**sdm::Algorithm**](classsdm_1_1Algorithm.md)   
  * **class** [**sdm::DQNMDP**](classsdm_1_1DQNMDP.md) 
* **class** [**sdm::BinaryFunction**](classsdm_1_1BinaryFunction.md) 
* **class** [**sdm::StochasticProcess**](classsdm_1_1StochasticProcess.md)   
  * **class** [**sdm::DecisionProcess**](classsdm_1_1DecisionProcess.md) _Decision process._   
    * **class** [**sdm::POSG**](classsdm_1_1POSG.md) _Partially Observable Stochastic Game class._   
      * **class** [**sdm::DecPOMDP**](classsdm_1_1DecPOMDP.md) 
      * **class** [**sdm::ZSPOSG**](classsdm_1_1ZSPOSG.md) 
  * **class** [**sdm::PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md) _Partially observable process._   
    * **class** [**sdm::POSG**](classsdm_1_1POSG.md) _Partially Observable Stochastic Game class._   
      * **class** [**sdm::DecPOMDP**](classsdm_1_1DecPOMDP.md) 
      * **class** [**sdm::ZSPOSG**](classsdm_1_1ZSPOSG.md) 
* **class** [**sdm::World**](classsdm_1_1World.md)   
  * **class** [**sdm::GymInterface**](classsdm_1_1GymInterface.md) _Provides a Gym like interface._ 
  * **class** [**sdm::DecisionProcess**](classsdm_1_1DecisionProcess.md) _Decision process._   
    * **class** [**sdm::POSG**](classsdm_1_1POSG.md) _Partially Observable Stochastic Game class._   
      * **class** [**sdm::DecPOMDP**](classsdm_1_1DecPOMDP.md) 
      * **class** [**sdm::ZSPOSG**](classsdm_1_1ZSPOSG.md) 
  * **class** [**sdm::GymInterface**](classsdm_1_1GymInterface.md) _Provides a Gym like interface._ 
  * **class** [**sdm::NDPOMDP**](classsdm_1_1NDPOMDP.md) 
* **class** [**sdm::Function**](classsdm_1_1Function.md) 
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
* **class** [**sdm::HSVI**](classsdm_1_1HSVI.md) 
* **class** [**sdm::Initializer**](classsdm_1_1Initializer.md)   
  * **class** [**sdm::MaxInitializer**](classsdm_1_1MaxInitializer.md) 
  * **class** [**sdm::MinInitializer**](classsdm_1_1MinInitializer.md) 
  * **class** [**sdm::ValueInitializer**](classsdm_1_1ValueInitializer.md)   
    * **class** [**sdm::ZeroInitializer**](classsdm_1_1ZeroInitializer.md) 
* **class** [**sdm::VectorImpl**](classsdm_1_1VectorImpl.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._   
  * **class** [**sdm::sdmsVector**](classsdm_1_1sdmsVector.md) _Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._
* **class** [**sdm::NDPOMDP::Node**](classsdm_1_1NDPOMDP_1_1Node.md) 
* **class** [**sdm::ObservationDynamics**](classsdm_1_1ObservationDynamics.md) 
* **class** [**sdm::RecursiveMap**](classsdm_1_1RecursiveMap.md) _The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_ 
* **class** [**sdm::ReplayMemory**](classsdm_1_1ReplayMemory.md) 
* **class** [**sdm::Reward**](classsdm_1_1Reward.md) 
* **class** [**sdm::StateDynamics**](classsdm_1_1StateDynamics.md) 
* **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
  * **class** [**sdm::TabularValueFunction**](classsdm_1_1TabularValueFunction.md) _Tabular value function are functions of state and action that use a vector representation to store the values._ 
* **class** [**sdm::TransformedMDP**](classsdm_1_1TransformedMDP.md) 
* **class** [**sdm::UnaryFunction**](classsdm_1_1UnaryFunction.md) 
* **class** [**sdm::Variations**](classsdm_1_1Variations.md) 
* **class** [**sdm::ast::obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) 
* **class** [**sdm::ast::rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md) 
* **class** [**sdm::ast::state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) 
* **class** [**sdm::feedback**](classsdm_1_1feedback.md) 
* **class** [**sdm::matrix**](classsdm_1_1matrix.md) 
* **class** [**sdm::vector**](classsdm_1_1vector.md) 
* **class** [**variation**](classvariation.md) _iterator of Variations._ 
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
* **class** **item_t**  
  * **struct** [**sdm::Item**](structsdm_1_1Item.md) 
  * **struct** [**sdm::Item**](structsdm_1_1Item.md) 
* **class** **std::enable_shared_from_this< Tree< T > >**  
  * **class** [**sdm::Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
    * **class** [**sdm::HistoryTree**](classsdm_1_1HistoryTree.md) 
  * **class** [**sdm::Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
    * **class** [**sdm::HistoryTree**](classsdm_1_1HistoryTree.md) 
  * **class** [**sdm::Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
    * **class** [**sdm::HistoryTree**](classsdm_1_1HistoryTree.md) 
* **class** **std::vector< item >**  
  * **class** [**sdm::Joint**](classsdm_1_1Joint.md) _class of joint item instances._ 
* **class** **std::map< TIndex, T >**  
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._ 
* **class** **map_t< T0, T1 >**  
  * **class** [**sdm::RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) [_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._
* **class** **map_t< T0, RecursiveMap_t< T1, T2, Ts... > >**  
  * **class** [**sdm::RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) 
* **class** **exception**  
  * **class** [**sdm::exception::Except**](classsdm_1_1exception_1_1Except.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Except**](classsdm_1_1exception_1_1Except.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Except**](classsdm_1_1exception_1_1Except.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Except**](classsdm_1_1exception_1_1Except.md) _Base exception class._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
* **class** **TBaseVector**  
  * **class** [**sdm::sdmsVector**](classsdm_1_1sdmsVector.md) _Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._
* **class** **Module**  
  * **struct** [**DQNImpl**](structDQNImpl.md) 
* **class** **boost::static_visitor< DiscreteSpace< std::string > >**  
  * **struct** [**sdm::ast::discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) _encodes the input into a discrete space class_ 
* **class** **boost::static_visitor< sdm::DecPOMDP >**  
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