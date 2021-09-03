
# Class Hierarchy

This inheritance list is sorted roughly, but not completely, alphabetically:


* **class** [**sdm::ActionVFInterface**](classsdm_1_1ActionVFInterface.md)   
  * **class** [**sdm::ActionVFBase**](classsdm_1_1ActionVFBase.md)   
    * **class** [**sdm::ActionVFMaxplan**](classsdm_1_1ActionVFMaxplan.md) 
    * **class** [**sdm::ActionVFMaxplanLP**](classsdm_1_1ActionVFMaxplanLP.md)   
      * **class** [**sdm::ActionVFMaxplanLPSerial**](classsdm_1_1ActionVFMaxplanLPSerial.md) 
    * **class** [**sdm::ActionVFMaxplanSerial**](classsdm_1_1ActionVFMaxplanSerial.md) 
    * **class** [**sdm::ActionVFMaxplanWCSP**](classsdm_1_1ActionVFMaxplanWCSP.md) 
    * **class** [**sdm::ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md)   
      * **class** [**sdm::ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md) 
    * **class** [**sdm::ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md) 
    * **class** [**sdm::ActionVFTabulaire**](classsdm_1_1ActionVFTabulaire.md) 
* **class** [**sdm::VarNaming**](classsdm_1_1VarNaming.md)   
  * **class** [**sdm::ActionVFMaxplanWCSP**](classsdm_1_1ActionVFMaxplanWCSP.md) 
  * **class** [**sdm::ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md) 
  * **class** [**sdm::DecentralizedLP**](classsdm_1_1DecentralizedLP.md)   
    * **class** [**sdm::ActionVFMaxplanLP**](classsdm_1_1ActionVFMaxplanLP.md)   
      * **class** [**sdm::ActionVFMaxplanLPSerial**](classsdm_1_1ActionVFMaxplanLPSerial.md) 
    * **class** [**sdm::ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md)   
      * **class** [**sdm::ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md) 
* **class** [**sdm::LPInterface**](classsdm_1_1LPInterface.md)   
  * **class** [**sdm::LPBase**](classsdm_1_1LPBase.md)   
    * **class** [**sdm::DecentralizedLP**](classsdm_1_1DecentralizedLP.md)   
      * **class** [**sdm::ActionVFMaxplanLP**](classsdm_1_1ActionVFMaxplanLP.md)   
        * **class** [**sdm::ActionVFMaxplanLPSerial**](classsdm_1_1ActionVFMaxplanLPSerial.md) 
      * **class** [**sdm::ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md)   
        * **class** [**sdm::ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md) 
* **class** [**sdm::Algorithm**](classsdm_1_1Algorithm.md) _The public interface common to all algorithms in_ **SDM'Studio** _._  
  * **class** [**sdm::AlphaStar**](classsdm_1_1AlphaStar.md) _The class for the algorithm_ [A\*](http://ai.stanford.edu/users/nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf) _._
  * **class** [**sdm::BackwardInduction**](classsdm_1_1BackwardInduction.md) _The algorithm_ [Backward Induction](https://en.wikipedia.org/wiki/Backward_induction) _._
  * **class** [**sdm::HSVI**](classsdm_1_1HSVI.md) [Heuristic Search Value Iteration (HSVI)](https://arxiv.org/abs/1207.4166) _and its extensions (FB-HSVI, one-sided_[_**HSVI**_](classsdm_1_1HSVI.md) _)._
  * **class** [**sdm::QLearning**](classsdm_1_1QLearning.md) _Q-Learning and its extensions (DQN, etc)._ 
  * **class** [**sdm::ValueIteration**](classsdm_1_1ValueIteration.md) [Value Iteration](https://www.jstor.org/stable/24900506) _for_[_**MDP**_](classsdm_1_1MDP.md) _._
* **class** [**sdm::BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md)   
  * **class** [**sdm::BackupInterface**](classsdm_1_1BackupInterface.md)   
    * **class** [**sdm::BackupBase**](classsdm_1_1BackupBase.md) 
  * **class** [**sdm::BackupInterface**](classsdm_1_1BackupInterface.md)   
    * **class** [**sdm::BackupBase**](classsdm_1_1BackupBase.md) 
  * **class** [**sdm::BackupInterface**](classsdm_1_1BackupInterface.md)   
    * **class** [**sdm::BackupBase**](classsdm_1_1BackupBase.md) 
* **class** [**sdm::SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) _Public interface for problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._[_**HSVI**_](classsdm_1_1HSVI.md) _can be used to solve the problem that implement this interface._  
  * **class** [**sdm::SolvableByMDP**](classsdm_1_1SolvableByMDP.md) _The class for Markov Decision Processes._   
    * **class** [**sdm::BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) _This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._
    * **class** [**sdm::BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) _This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._
* **class** [**sdm::GymInterface**](classsdm_1_1GymInterface.md)   
  * **class** [**sdm::BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) _This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._
  * **class** [**sdm::BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) _This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._
  * **class** [**sdm::InteractiveWorld**](classsdm_1_1InteractiveWorld.md) 
  * **class** [**sdm::MDP**](classsdm_1_1MDP.md) _The class for Discrete Markov Decision Processes._   
    * **class** [**sdm::MMDP**](classsdm_1_1MMDP.md) _The class for Discrete Markov Decision Processes._   
      * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
        * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
    * **class** [**sdm::POMDP**](classsdm_1_1POMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
      * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
        * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
  * **class** [**sdm::MDPInterface**](classsdm_1_1MDPInterface.md) _The class for Discrete Markov Decision Processes._   
    * **class** [**sdm::MDP**](classsdm_1_1MDP.md) _The class for Discrete Markov Decision Processes._   
      * **class** [**sdm::MMDP**](classsdm_1_1MMDP.md) _The class for Discrete Markov Decision Processes._   
        * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
          * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
      * **class** [**sdm::POMDP**](classsdm_1_1POMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
        * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
          * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
    * **class** [**sdm::MMDPInterface**](classsdm_1_1MMDPInterface.md) _The class for Discrete Markov Decision Processes._   
      * **class** [**sdm::MMDP**](classsdm_1_1MMDP.md) _The class for Discrete Markov Decision Processes._   
        * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
          * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
      * **class** [**sdm::MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) _The class for Discrete Markov Decision Processes._   
        * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
          * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
        * **class** [**sdm::NetworkedDistributedPOMDPInterface**](classsdm_1_1NetworkedDistributedPOMDPInterface.md) 
        * **class** [**sdm::SerialMPOMDPInterface**](classsdm_1_1SerialMPOMDPInterface.md) _The class for Discrete Markov Decision Processes._   
          * **class** [**sdm::SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) 
        * **class** [**sdm::TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md)   
          * **class** [**sdm::HierarchicalMPOMDP**](classsdm_1_1HierarchicalMPOMDP.md) _The Hierarchical_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _is a transformation of a standard_[_**MPOMDP**_](classsdm_1_1MPOMDP.md) _assuming there exists a hierarchy among agents._
      * **class** [**sdm::SerialMMDPInterface**](classsdm_1_1SerialMMDPInterface.md) _The class for Discrete Markov Decision Processes._   
        * **class** [**sdm::SerializedMMDP**](classsdm_1_1SerializedMMDP.md)   
          * **class** [**sdm::SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) 
        * **class** [**sdm::SerialMPOMDPInterface**](classsdm_1_1SerialMPOMDPInterface.md) _The class for Discrete Markov Decision Processes._   
          * **class** [**sdm::SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) 
    * **class** [**sdm::POMDPInterface**](classsdm_1_1POMDPInterface.md) _The class for Discrete Markov Decision Processes._   
      * **class** [**sdm::MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) _The class for Discrete Markov Decision Processes._   
        * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
          * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
        * **class** [**sdm::NetworkedDistributedPOMDPInterface**](classsdm_1_1NetworkedDistributedPOMDPInterface.md) 
        * **class** [**sdm::SerialMPOMDPInterface**](classsdm_1_1SerialMPOMDPInterface.md) _The class for Discrete Markov Decision Processes._   
          * **class** [**sdm::SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) 
        * **class** [**sdm::TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md)   
          * **class** [**sdm::HierarchicalMPOMDP**](classsdm_1_1HierarchicalMPOMDP.md) _The Hierarchical_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _is a transformation of a standard_[_**MPOMDP**_](classsdm_1_1MPOMDP.md) _assuming there exists a hierarchy among agents._
      * **class** [**sdm::POMDP**](classsdm_1_1POMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
        * **class** [**sdm::MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._   
          * **class** [**sdm::NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) 
* **class** [**sdm::BaseLogger**](classsdm_1_1BaseLogger.md) _This class provide a common interface for all loggers._   
  * **class** [**sdm::Logger**](classsdm_1_1Logger.md) _The main logger. This logger will print logs with a given format on the output stream._   
    * **class** [**sdm::FileLogger**](classsdm_1_1FileLogger.md) _The file logger will print logs/data in a file._   
      * **class** [**sdm::CSVLogger**](classsdm_1_1CSVLogger.md) _The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._ 
    * **class** [**sdm::StdLogger**](classsdm_1_1StdLogger.md) _The standard logger will print logs on the standard output stream._ 
  * **class** [**sdm::MultiLogger**](classsdm_1_1MultiLogger.md) _The multi logger will print logs in several loggers._ 
* **class** [**sdm::Function**](classsdm_1_1Function.md) 
* **class** [**sdm::SerialInterface**](classsdm_1_1SerialInterface.md) _A common interface for objects that are serialized._   
  * **class** [**sdm::BaseSerialInterface**](classsdm_1_1BaseSerialInterface.md)   
    * **class** [**sdm::SerializedState**](classsdm_1_1SerializedState.md) 
  * **class** [**sdm::SerialOccupancyInterface**](classsdm_1_1SerialOccupancyInterface.md) 
  * **class** [**sdm::SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md) 
* **class** [**sdm::VectorInterface**](classsdm_1_1VectorInterface.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the functions of the interface._   
  * **class** [**sdm::sdmsVector**](classsdm_1_1sdmsVector.md) _Create a SDMS Vector. A SMDS Vector is used to optimize the calculation, however, you have to be careful when using it because it's not possible to add element after the initialization._ 
* **class** [**sdm::Initializer**](classsdm_1_1Initializer.md) _Abstract class for initializer._   
  * **class** [**sdm::BoundInitializer**](classsdm_1_1BoundInitializer.md) _This initializer initializes a value function to the estimation of the value if we get a constant reward at every timestep._   
    * **class** [**sdm::BlindInitializer**](classsdm_1_1BlindInitializer.md) _This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._
    * **class** [**sdm::MaxInitializer**](classsdm_1_1MaxInitializer.md) _This initializer initializes a value function to the best value. This is an optimistic initialization._ 
    * **class** [**sdm::MinInitializer**](classsdm_1_1MinInitializer.md) _This initializer initializes a value function to the worst value. This is a pessimistic initialization._ 
  * **class** [**sdm::MDPInitializer**](classsdm_1_1MDPInitializer.md) _The_ [_**MDP**_](classsdm_1_1MDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**MDP**_](classsdm_1_1MDP.md) _optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._
  * **class** [**sdm::POMDPInitializer**](classsdm_1_1POMDPInitializer.md) _The_ [_**POMDP**_](classsdm_1_1POMDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**POMDP**_](classsdm_1_1POMDP.md) _optimal value function._
  * **class** [**sdm::ValueInitializer**](classsdm_1_1ValueInitializer.md) _This initializer initializes a value function to a constant value._   
    * **class** [**sdm::ZeroInitializer**](classsdm_1_1ZeroInitializer.md) _This initializer initializes a value function to zero._ 
* **class** [**sdm::BoostSerializable**](classsdm_1_1BoostSerializable.md) 
* **class** [**sdm::DecisionProcessInterface**](classsdm_1_1DecisionProcessInterface.md) _The class for Discrete Markov Decision Processes._ 
* **class** [**sdm::Exploration**](classsdm_1_1Exploration.md)   
  * **class** [**sdm::EpsGreedy**](classsdm_1_1EpsGreedy.md) 
* **class** [**sdm::ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md)   
  * **class** [**sdm::ExperienceMemory**](classsdm_1_1ExperienceMemory.md) 
* **class** [**sdm::RewardInterface**](classsdm_1_1RewardInterface.md) _This class provides a common interface for every models of reward._   
  * **class** [**sdm::FunctionReward**](classsdm_1_1FunctionReward.md) _This class provides getters and setters for the reward model._ 
  * **class** [**sdm::TabularReward**](classsdm_1_1TabularReward.md) _This class provide a way to represent the reward model with a tabular representation._ 
* **class** [**sdm::InitializerFactory**](classsdm_1_1InitializerFactory.md) _The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use : std::cout &lt;&lt;_[_**InitializerFactory::available()**_](classsdm_1_1InitializerFactory.md#function-available) _&lt;&lt; std::endl;._
* **class** [**sdm::Iterator**](classsdm_1_1Iterator.md) _Common interface to all SDMS Iterators._   
  * **class** [**sdm::iterator::CombinationIterator**](classsdm_1_1iterator_1_1CombinationIterator.md) _The combination iterator provides a way to go simultaneously over multiple iterators in order to generate all combinations of items._ 
  * **class** [**sdm::iterator::FunctionIterator**](classsdm_1_1iterator_1_1FunctionIterator.md) _The function iterator is an SDMS iterator generating functions from iterable possible inputs and outputs._ 
  * **class** [**sdm::iterator::SuperIterator**](classsdm_1_1iterator_1_1SuperIterator.md) _A super iterator is an SDMS iterator that simply iterate over a standard STD iterator._ 
* **class** [**sdm::RecursiveMap**](classsdm_1_1RecursiveMap.md) _The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_ 
* **class** [**sdm::MatrixInterface**](classsdm_1_1MatrixInterface.md) _The Matrix interface. To be considered as a matrix in SDM'Studio, a class must implement all the following functions._ 
* **class** [**sdm::NetworkedDistributedPOMDP::Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md) 
* **class** [**sdm::ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) _This class provides a common interface for every models of observation dynamics._   
  * **class** [**sdm::TabularObservationDynamics**](classsdm_1_1TabularObservationDynamics.md) _Tabular observation dynamics._   
    * **class** [**sdm::TabularObservationDynamicsAS**](classsdm_1_1TabularObservationDynamicsAS.md) _Tabular representation for the observation dynamics p(o' | a, s')._ 
    * **class** [**sdm::TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md) _Tabular representation for the observation dynamics p(o' | s')._ 
    * **class** [**sdm::TabularObservationDynamicsSAS**](classsdm_1_1TabularObservationDynamicsSAS.md) _Tabular representation for the observation dynamics p(o' | s, a, s')._ 
* **class** [**sdm::QInitializer**](classsdm_1_1QInitializer.md) _Abstract class for initializer._   
  * **class** [**sdm::ValueInitializer**](classsdm_1_1ValueInitializer.md) _This initializer initializes a value function to a constant value._   
    * **class** [**sdm::ZeroInitializer**](classsdm_1_1ZeroInitializer.md) _This initializer initializes a value function to zero._ 
* **class** [**sdm::QValueBackupInterface**](classsdm_1_1QValueBackupInterface.md)   
  * **class** [**sdm::TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md) 
* **class** [**sdm::ReplayMemory**](classsdm_1_1ReplayMemory.md) 
* **class** [**sdm::SerialProblemInterface**](classsdm_1_1SerialProblemInterface.md)   
  * **class** [**sdm::SerialMMDPInterface**](classsdm_1_1SerialMMDPInterface.md) _The class for Discrete Markov Decision Processes._   
    * **class** [**sdm::SerializedMMDP**](classsdm_1_1SerializedMMDP.md)   
      * **class** [**sdm::SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) 
    * **class** [**sdm::SerialMPOMDPInterface**](classsdm_1_1SerialMPOMDPInterface.md) _The class for Discrete Markov Decision Processes._   
      * **class** [**sdm::SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) 
  * **class** [**sdm::SerialOccupancyMDP**](classsdm_1_1SerialOccupancyMDP.md) 
* **class** [**sdm::SolvableByDP**](classsdm_1_1SolvableByDP.md) _Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._
* **class** [**sdm::StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) _This class provides a common interface for every models of state dynamics._   
  * **class** [**sdm::TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) _Tabular representation for the state dynamics._ 
* **class** [**sdm::TensorImpl**](classsdm_1_1TensorImpl.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._ 
* **class** [**sdm::ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md) _The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._
* **class** [**sdm::Variations**](classsdm_1_1Variations.md) [_**Iterator**_](classsdm_1_1Iterator.md) _of_[_**Variations**_](classsdm_1_1Variations.md) _._
* **class** [**sdm::World**](classsdm_1_1World.md) 
* **class** [**sdm::ast::obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) 
* **class** [**sdm::ast::state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) _encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_
* **struct** [**sdm::ast::dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md) 
* **struct** [**sdm::ast::joint\_item\_encode**](classsdm_1_1ast_1_1joint__item__encode.md) _encodes the input into a joint element (vector of number)_ 
* **struct** [**sdm::ast::observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) 
* **struct** [**sdm::ast::observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) 
* **struct** [**sdm::ast::observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) 
* **struct** [**sdm::ast::reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) 
* **struct** [**sdm::ast::reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) 
* **struct** [**sdm::ast::str\_visitor**](structsdm_1_1ast_1_1str__visitor.md) 
* **struct** [**sdm::ast::tabular\_rewards\_encoder**](structsdm_1_1ast_1_1tabular__rewards__encoder.md) 
* **struct** [**sdm::ast::transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) 
* **struct** [**sdm::ast::transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) 
* **struct** [**sdm::ast::transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) 
* **struct** [**sdm::equal\_container**](structsdm_1_1equal__container.md) 
* **struct** [**sdm::equal\_from\_ptr**](structsdm_1_1equal__from__ptr.md) 
* **struct** [**sdm::hash\_container**](structsdm_1_1hash__container.md) 
* **struct** [**sdm::hash\_from\_ptr**](structsdm_1_1hash__from__ptr.md) 
* **struct** [**sdm::parser::error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md) 
* **struct** [**std::Compare**](structstd_1_1Compare.md) 
* **struct** [**std::Performance**](structstd_1_1Performance.md) 
* **struct** [**std::hash&lt; sdm::Belief &gt;**](structstd_1_1hash_3_01sdm_1_1Belief_01_4.md) 
* **struct** [**std::hash&lt; sdm::DeterministicDecisionRule &gt;**](structstd_1_1hash_3_01sdm_1_1DeterministicDecisionRule_01_4.md) 
* **struct** [**std::hash&lt; sdm::JointDeterministicDecisionRule &gt;**](structstd_1_1hash_3_01sdm_1_1JointDeterministicDecisionRule_01_4.md) 
* **struct** [**std::hash&lt; sdm::MappedMatrix&lt; TLig, TCol, TValue &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1MappedMatrix_3_01TLig_00_01TCol_00_01TValue_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::OccupancyState &gt;**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md) 
* **struct** [**std::hash&lt; sdm::Pair&lt; T, U &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md) 
* **struct** [**std::hash&lt; sdm::SerialOccupancyState &gt;**](structstd_1_1hash_3_01sdm_1_1SerialOccupancyState_01_4.md) 
* **struct** [**std::hash&lt; sdm::SerializedState &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedState_01_4.md) 
* **struct** [**std::hash&lt; sdm::Tuple&lt; TT... &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Tuple_3_01TT_8_8_8_01_4_01_4.md) 
* **struct** [**std::hash&lt; std::vector&lt; T &gt; &gt;**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md) 
* **class** **std::enable_shared_from_this< AlphaStar >**  
  * **class** [**sdm::AlphaStar**](classsdm_1_1AlphaStar.md) _The class for the algorithm_ [A\*](http://ai.stanford.edu/users/nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf) _._
* **class** **std::enable_shared_from_this< MultipleInheritableEnableSharedFromThis >**  
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
  * **class** [**std::MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)   
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
    * **class** [**std::inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md) 
* **class** **std::enable_shared_from_this< BackwardInduction >**  
  * **class** [**sdm::BackwardInduction**](classsdm_1_1BackwardInduction.md) _The algorithm_ [Backward Induction](https://en.wikipedia.org/wiki/Backward_induction) _._
* **class** **Action**  
  * **class** [**sdm::BaseAction**](classsdm_1_1BaseAction.md) _A base class inheriting from the Action interface._ 
  * **class** [**sdm::DecisionRule**](classsdm_1_1DecisionRule.md) _A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._   
    * **class** [**sdm::DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) _This class provide a way to manipulate data relative to a deterministic decision rule._   
      * **class** [**sdm::JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) _This class provide a way to manipulate a function that maps joint histories to joint actions._ 
    * **class** [**sdm::StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md) _The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._ 
  * **class** [**sdm::DecisionRule**](classsdm_1_1DecisionRule.md) _A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._   
    * **class** [**sdm::DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) _This class provide a way to manipulate data relative to a deterministic decision rule._   
      * **class** [**sdm::JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) _This class provide a way to manipulate a function that maps joint histories to joint actions._ 
    * **class** [**sdm::StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md) _The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._ 
  * **class** [**sdm::DecisionRule**](classsdm_1_1DecisionRule.md) _A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._   
    * **class** [**sdm::DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) _This class provide a way to manipulate data relative to a deterministic decision rule._   
      * **class** [**sdm::JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) _This class provide a way to manipulate a function that maps joint histories to joint actions._ 
    * **class** [**sdm::StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md) _The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._ 
  * **class** [**sdm::DecisionRule**](classsdm_1_1DecisionRule.md) _A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._   
    * **class** [**sdm::DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) _This class provide a way to manipulate data relative to a deterministic decision rule._   
      * **class** [**sdm::JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) _This class provide a way to manipulate a function that maps joint histories to joint actions._ 
    * **class** [**sdm::StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md) _The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._ 
* **class** **std::enable_shared_from_this< BaseValueFunction< TInput > >**  
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
  * **class** [**sdm::BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._   
    * **class** [**sdm::ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
      * **class** [**sdm::BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)   
        * **class** [**sdm::BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) 
      * **class** [**sdm::HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) 
* **class** **std::unordered_map< TIndex, T, Hash, KeyEqual >**  
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors with specific type of indexes. They are represented by a map._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors with specific type of indexes. They are represented by a map._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors with specific type of indexes. They are represented by a map._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors with specific type of indexes. They are represented by a map._ 
  * **class** [**sdm::MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors with specific type of indexes. They are represented by a map._ 
* **class** **std::enable_shared_from_this< Distribution< T > >**  
  * **class** [**sdm::Distribution**](classsdm_1_1Distribution.md)   
    * **class** [**sdm::DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md) 
  * **class** [**sdm::Distribution**](classsdm_1_1Distribution.md)   
    * **class** [**sdm::DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md) 
* **class** **std::enable_shared_from_this< Space >**  
  * **class** [**sdm::Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite._   
    * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space._   
      * **class** [**sdm::FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._
      * **class** [**sdm::MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ 
    * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces._ 
  * **class** [**sdm::Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite._   
    * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space._   
      * **class** [**sdm::FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._
      * **class** [**sdm::MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ 
    * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces._ 
  * **class** [**sdm::Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite._   
    * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space._   
      * **class** [**sdm::FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._
      * **class** [**sdm::MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ 
    * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces._ 
  * **class** [**sdm::Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite._   
    * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space._   
      * **class** [**sdm::FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._
      * **class** [**sdm::MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ 
    * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces._ 
  * **class** [**sdm::Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite._   
    * **class** [**sdm::DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space._   
      * **class** [**sdm::FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._
      * **class** [**sdm::MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._ 
    * **class** [**sdm::MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces._ 
* **class** **std::enable_shared_from_this< Graph< TNode, TEdge > >**  
  * **class** [**sdm::Graph**](classsdm_1_1Graph.md) _A structure to manipulate graphs._ 
  * **class** [**sdm::Graph**](classsdm_1_1Graph.md) _A structure to manipulate graphs._ 
* **class** **std::enable_shared_from_this< GraphNode< TNode, TEdge > >**  
  * **class** [**sdm::GraphNode**](classsdm_1_1GraphNode.md) _Node of graphs._ 
* **class** **std::enable_shared_from_this< HSVI >**  
  * **class** [**sdm::HSVI**](classsdm_1_1HSVI.md) [Heuristic Search Value Iteration (HSVI)](https://arxiv.org/abs/1207.4166) _and its extensions (FB-HSVI, one-sided_[_**HSVI**_](classsdm_1_1HSVI.md) _)._
* **class** **TValueFunction< TState, TAction, TValue >**  
  * **class** [**sdm::IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md) 
* **class** **SuperClass**  
  * **class** [**sdm::ItemPair**](classsdm_1_1ItemPair.md) 
* **class** **Pair< TItem_1, TItem_2 >**  
  * **class** [**sdm::ItemPair**](classsdm_1_1ItemPair.md) 
* **class** **std::vector< T >**  
  * **class** [**sdm::Joint**](classsdm_1_1Joint.md) _This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._
  * **class** [**sdm::Joint**](classsdm_1_1Joint.md) _This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._
  * **class** [**sdm::Joint**](classsdm_1_1Joint.md) _This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._
  * **class** [**sdm::Joint**](classsdm_1_1Joint.md) _This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._
* **class** **std::vector< std::shared_ptr< Logger > >**  
  * **class** [**sdm::MultiLogger**](classsdm_1_1MultiLogger.md) _The multi logger will print logs in several loggers._ 
* **class** **map_t< T0, T1 >**  
  * **class** [**sdm::RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) [_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._
* **class** **map_t< T0, RecursiveMap_t< T1, T2, Ts... > >**  
  * **class** [**sdm::RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) 
* **class** **boost::static_visitor<>**  
  * **class** [**sdm::ast::state\_transition\_encoder**](classsdm_1_1ast_1_1state__transition__encoder.md) _encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_
  * **struct** [**sdm::ast::observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) _encodes the input into an observation dynamic class_ 
  * **struct** [**sdm::ast::tabular\_reward\_encoder**](structsdm_1_1ast_1_1tabular__reward__encoder.md) 
* **class** **exception**  
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _This class is the base class for SDMS exceptions._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _File not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) _Not implemented method exception._ 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _This class is the base class for SDMS exceptions._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _File not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) _Not implemented method exception._ 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _This class is the base class for SDMS exceptions._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _File not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) _Not implemented method exception._ 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
  * **class** [**sdm::exception::Exception**](classsdm_1_1exception_1_1Exception.md) _This class is the base class for SDMS exceptions._   
    * **class** [**sdm::exception::FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _File not found exception._ 
    * **class** [**sdm::exception::NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) _Not implemented method exception._ 
    * **class** [**sdm::exception::ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._ 
* **class** **std::enable_shared_from_this< CombinationIterator >**  
  * **class** [**sdm::iterator::CombinationIterator**](classsdm_1_1iterator_1_1CombinationIterator.md) _The combination iterator provides a way to go simultaneously over multiple iterators in order to generate all combinations of items._ 
* **class** **std::enable_shared_from_this< FunctionIterator< TFunction > >**  
  * **class** [**sdm::iterator::FunctionIterator**](classsdm_1_1iterator_1_1FunctionIterator.md) _The function iterator is an SDMS iterator generating functions from iterable possible inputs and outputs._ 
* **class** **std::enable_shared_from_this< SuperIterator< TItem, STDIterator > >**  
  * **class** [**sdm::iterator::SuperIterator**](classsdm_1_1iterator_1_1SuperIterator.md) _A super iterator is an SDMS iterator that simply iterate over a standard STD iterator._ 
* **class** **TBaseMatrix**  
  * **class** [**sdm::sdmsMatrix**](classsdm_1_1sdmsMatrix.md) 
* **class** **TItem**  
  * **struct** [**sdm::BaseItem**](structsdm_1_1BaseItem.md) _A base class inheriting from the_ [_**Item**_](classsdm_1_1Item.md) _interface._
* **class** **std::unordered_set< std::shared_ptr< T >, hash_container< T >, equal_container< T > >**  
  * **struct** [**sdm::Set**](structsdm_1_1Set.md) 
* **class** **boost::static_visitor< std::shared_ptr< DiscreteSpace > >**  
  * **struct** [**sdm::ast::discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) _encodes the input into a discrete space class_ 
* **class** **boost::static_visitor< sdm::DecPOMDP >**  
  * **struct** [**sdm::ast::dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md) 
* **class** **position_tagged**  
  * **struct** [**sdm::ast::dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) 
* **class** **boost::spirit::x3::variant< std::string, unsigned short >**  
  * **struct** [**sdm::ast::identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) 
* **class** **boost::static_visitor< std::shared_ptr< Item > >**  
  * **struct** [**sdm::ast::item\_encode**](structsdm_1_1ast_1_1item__encode.md) _encodes the input into a item index (string))_ 
* **class** **boost::static_visitor< std::shared_ptr< MappedMatrix< number, number > > >**  
  * **struct** [**sdm::ast::matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) _encodes the input into a mapped matrix_ 
* **class** **boost::spirit::x3::variant< std::string, std::vector< std::vector< float > > >**  
  * **struct** [**sdm::ast::matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) 
* **class** **boost::static_visitor< std::shared_ptr< MultiDiscreteSpace > >**  
  * **struct** [**sdm::ast::multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) _encodes the input into a multi discrete space class_ 
* **class** **boost::spirit::x3::variant< observation_entry_1_t, observation_entry_2_t, observation_entry_3_t >**  
  * **struct** [**sdm::ast::observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) 
* **class** **boost::spirit::x3::variant< std::string, std::vector< float > >**  
  * **struct** [**sdm::ast::real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) 
* **class** **boost::spirit::x3::variant< reward_entry_1_t, reward_entry_2_t >**  
  * **struct** [**sdm::ast::reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) 
* **class** **boost::static_visitor< std::vector< std::shared_ptr< Item > > >**  
  * **struct** [**sdm::ast::state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) _encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_ 
* **class** **boost::spirit::x3::variant< transition_entry_1_t, transition_entry_2_t, transition_entry_3_t >**  
  * **struct** [**sdm::ast::transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) 
* **class** **boost::spirit::x3::variant< unsigned short, std::vector< std::string > >**  
  * **struct** [**sdm::ast::value\_t**](structsdm_1_1ast_1_1value__t.md) 
* **class** **boost::spirit::x3::variant< std::vector< unsigned short >, std::vector< std::vector< std::string > > >**  
  * **struct** [**sdm::ast::values\_t**](structsdm_1_1ast_1_1values__t.md) 
* **class** **boost::static_visitor< std::shared_ptr< MappedVector< number, double > > >**  
  * **struct** [**sdm::ast::vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) _encodes the input into a mapped vector_ 
* **class** **Module**  
  * **struct** [**sdm::nn::DQNImpl**](structsdm_1_1nn_1_1DQNImpl.md) 
* **class** **std::disjunction< std::is_same< T, Ts >... >**  
  * **struct** [**std::is\_any**](structstd_1_1is__any.md) 