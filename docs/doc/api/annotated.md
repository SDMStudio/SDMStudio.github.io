
# Class List

Here is the list of all classes, struct and interfaces used in ***SDM'Studio***:



* **namespace** [**sdm**](namespacesdm.md) _Namespace grouping all tools required for sequential decision making._     
    * **class** [**ActionVFBase**](classsdm_1_1ActionVFBase.md)     
    * **class** [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md)     
    * **class** [**ActionVFMaxplan**](classsdm_1_1ActionVFMaxplan.md)     
    * **class** [**ActionVFMaxplanLP**](classsdm_1_1ActionVFMaxplanLP.md)     
    * **class** [**ActionVFMaxplanLPSerial**](classsdm_1_1ActionVFMaxplanLPSerial.md)     
    * **class** [**ActionVFMaxplanSerial**](classsdm_1_1ActionVFMaxplanSerial.md)     
    * **class** [**ActionVFMaxplanWCSP**](classsdm_1_1ActionVFMaxplanWCSP.md)     
    * **class** [**ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md)     
    * **class** [**ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md)     
    * **class** [**ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md)     
    * **class** [**ActionVFTabulaire**](classsdm_1_1ActionVFTabulaire.md)     
    * **class** [**Algorithm**](classsdm_1_1Algorithm.md) _The public interface common to all algorithms in_ **SDM'Studio** _._    
    * **class** [**AlphaStar**](classsdm_1_1AlphaStar.md) _The class for the algorithm_ [A\*](http://ai.stanford.edu/users/nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf) _._    
        * **class** [**AlphaStarItem**](classsdm_1_1AlphaStar_1_1AlphaStarItem.md) _The state in terms of A\* algorithm._     
    * **class** [**BackupBase**](classsdm_1_1BackupBase.md)     
    * **class** [**BackupInterface**](classsdm_1_1BackupInterface.md)     
    * **class** [**BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md) 
    * **class** [**BackwardInduction**](classsdm_1_1BackwardInduction.md) _The algorithm_ [Backward Induction](https://en.wikipedia.org/wiki/Backward_induction) _._    
    * **class** [**BaseAction**](classsdm_1_1BaseAction.md) _A base class inheriting from the Action interface._     
    * **class** [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) _This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._    
    * **struct** [**BaseItem**](structsdm_1_1BaseItem.md) _A base class inheriting from the_ [_**Item**_](classsdm_1_1Item.md) _interface._    
    * **class** [**BaseLogger**](classsdm_1_1BaseLogger.md) _This class provide a common interface for all loggers._     
    * **class** [**BaseObservation**](classsdm_1_1BaseObservation.md) _A base class inheriting from the_ [_**Observation**_](classsdm_1_1Observation.md) _interface._    
    * **class** [**BaseOccupancyMDP**](classsdm_1_1BaseOccupancyMDP.md) _This class provides a way to transform a Dec-POMDP into an occupancy_ [_**MDP**_](classsdm_1_1MDP.md) _formalism._    
    * **class** [**BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md)     
    * **class** [**BaseRelaxedValueFunction**](classsdm_1_1BaseRelaxedValueFunction.md)     
    * **class** [**BaseSerialInterface**](classsdm_1_1BaseSerialInterface.md)     
    * **class** [**BaseState**](classsdm_1_1BaseState.md) _A base class inheriting from the_ [_**State**_](classsdm_1_1State.md) _interface._    
    * **class** [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)     
    * **class** [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md) _This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._     
    * **class** [**Belief**](classsdm_1_1Belief.md)     
    * **class** [**Belief2OccupancyValueFunction**](classsdm_1_1Belief2OccupancyValueFunction.md)     
    * **class** [**BeliefDefault**](classsdm_1_1BeliefDefault.md)     
    * **class** [**BeliefInterface**](classsdm_1_1BeliefInterface.md) _A common interface for objects that represent a belief._     
    * **class** [**BinaryFunction**](classsdm_1_1BinaryFunction.md)     
    * **class** [**BlindInitializer**](classsdm_1_1BlindInitializer.md) _This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._    
    * **class** [**BoostSerializable**](classsdm_1_1BoostSerializable.md)     
    * **class** [**BoundInitializer**](classsdm_1_1BoundInitializer.md) _This initializer initializes a value function to the estimation of the value if we get a constant reward at every timestep._     
    * **class** [**CSVLogger**](classsdm_1_1CSVLogger.md) _The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._     
    * **class** [**CompressibleOccupancyStateInterface**](classsdm_1_1CompressibleOccupancyStateInterface.md)     
    * **class** [**DecentralizedLP**](classsdm_1_1DecentralizedLP.md)     
    * **class** [**DecisionProcessInterface**](classsdm_1_1DecisionProcessInterface.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**DecisionRule**](classsdm_1_1DecisionRule.md) _A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._     
    * **class** [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) _This class provide a way to manipulate data relative to a deterministic decision rule._     
    * **class** [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md)     
    * **class** [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space._     
    * **class** [**Distribution**](classsdm_1_1Distribution.md)     
    * **class** [**EpsGreedy**](classsdm_1_1EpsGreedy.md)     
    * **class** [**ExperienceMemory**](classsdm_1_1ExperienceMemory.md)     
    * **class** [**ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md)     
    * **class** [**Exploration**](classsdm_1_1Exploration.md)     
    * **class** [**FileLogger**](classsdm_1_1FileLogger.md) _The file logger will print logs/data in a file._     
    * **class** [**Function**](classsdm_1_1Function.md)     
    * **class** [**FunctionReward**](classsdm_1_1FunctionReward.md) _This class provides getters and setters for the reward model._     
    * **class** [**FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._    
    * **class** [**Graph**](classsdm_1_1Graph.md) _A structure to manipulate graphs._     
    * **class** [**GraphNode**](classsdm_1_1GraphNode.md) _Node of graphs._     
    * **class** [**GymInterface**](classsdm_1_1GymInterface.md)     
    * **class** [**HSVI**](classsdm_1_1HSVI.md) [Heuristic Search Value Iteration (HSVI)](https://arxiv.org/abs/1207.4166) _and its extensions (FB-HSVI, one-sided_[_**HSVI**_](classsdm_1_1HSVI.md) _)._    
    * **class** [**HierarchicalMPOMDP**](classsdm_1_1HierarchicalMPOMDP.md) _The Hierarchical_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _is a transformation of a standard_[_**MPOMDP**_](classsdm_1_1MPOMDP.md) _assuming there exists a hierarchy among agents._    
    * **class** [**HierarchicalOccupancyMDP**](classsdm_1_1HierarchicalOccupancyMDP.md)     
    * **class** [**HistoryInterface**](classsdm_1_1HistoryInterface.md) _A common interface for objects that represent a history._     
    * **class** [**HistoryTree**](classsdm_1_1HistoryTree.md) _History class that use a representation by tree._     
    * **class** [**HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md)     
    * **class** [**IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md)     
    * **class** [**Initializer**](classsdm_1_1Initializer.md) _Abstract class for initializer._     
    * **class** [**InitializerFactory**](classsdm_1_1InitializerFactory.md) _The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use : std::cout &lt;&lt;_[_**InitializerFactory::available()**_](classsdm_1_1InitializerFactory.md#function-available) _&lt;&lt; std::endl;._    
    * **class** [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md)     
    * **class** [**Item**](classsdm_1_1Item.md) _A public interface for actions, states and observations._     
    * **class** [**ItemPair**](classsdm_1_1ItemPair.md)     
    * **class** [**Iterator**](classsdm_1_1Iterator.md) _Common interface to all SDMS Iterators._     
    * **class** [**Joint**](classsdm_1_1Joint.md) _This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._    
    * **class** [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) _This class provide a way to manipulate a function that maps joint histories to joint actions._     
    * **class** [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) _A common interface for objects that represent a joint history._     
    * **class** [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) [_**Joint**_](classsdm_1_1Joint.md) _history class that use a representation by tree._    
    * **class** [**LPBase**](classsdm_1_1LPBase.md)     
    * **class** [**LPInterface**](classsdm_1_1LPInterface.md)     
    * **class** [**Logger**](classsdm_1_1Logger.md) _The main logger. This logger will print logs with a given format on the output stream._     
    * **class** [**MDP**](classsdm_1_1MDP.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**MDPInitializer**](classsdm_1_1MDPInitializer.md) _The_ [_**MDP**_](classsdm_1_1MDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**MDP**_](classsdm_1_1MDP.md) _optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._    
    * **class** [**MDPInterface**](classsdm_1_1MDPInterface.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**MMDP**](classsdm_1_1MMDP.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**MMDPInterface**](classsdm_1_1MMDPInterface.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**MPOMDP**](classsdm_1_1MPOMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._     
    * **class** [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**MappedMatrix**](classsdm_1_1MappedMatrix.md) _Mapped matrices are matrices that use map to store values. Can be view as a sparse matrix with templated indexes._     
    * **class** [**MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors with specific type of indexes. They are represented by a map._     
    * **class** [**MatrixInterface**](classsdm_1_1MatrixInterface.md) _The Matrix interface. To be considered as a matrix in SDM'Studio, a class must implement all the following functions._ 
    * **class** [**MaxInitializer**](classsdm_1_1MaxInitializer.md) _This initializer initializes a value function to the best value. This is an optimistic initialization._     
    * **class** [**MaxPlanBackup**](classsdm_1_1MaxPlanBackup.md)     
    * **class** [**MinInitializer**](classsdm_1_1MinInitializer.md) _This initializer initializes a value function to the worst value. This is a pessimistic initialization._     
    * **class** [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._     
    * **class** [**MultiLogger**](classsdm_1_1MultiLogger.md) _The multi logger will print logs in several loggers._     
    * **class** [**MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces._     
    * **class** [**NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md)     
        * **class** [**Node**](classsdm_1_1NetworkedDistributedPOMDP_1_1Node.md)     
    * **class** [**NetworkedDistributedPOMDPInterface**](classsdm_1_1NetworkedDistributedPOMDPInterface.md)     
    * **class** [**Observation**](classsdm_1_1Observation.md) _A public interface for observations._     
    * **class** [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) _This class provides a common interface for every models of observation dynamics._     
    * **class** [**OccupancyState**](classsdm_1_1OccupancyState.md) _An occupancy state refers to the complete knowledge the central planner have access to take decisions._     
    * **class** [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) _A common interface for objects that represent an occupancy state._     
    * **class** [**POMDP**](classsdm_1_1POMDP.md) _The class for Discrete Partially Observable Markov Decision Processes._     
    * **class** [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md) _The_ [_**POMDP**_](classsdm_1_1POMDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**POMDP**_](classsdm_1_1POMDP.md) _optimal value function._    
    * **class** [**POMDPInterface**](classsdm_1_1POMDPInterface.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**PrivateHierarchicalOccupancyMDP**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md)     
    * **class** [**PrivateHierarchicalOccupancyMDPWithHistory**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md)     
    * **class** [**PrivateOccupancyState**](classsdm_1_1PrivateOccupancyState.md) _A private occupancy state is an occupancy state (i.e. $p(s\_t, \theta^{-i}\_{t} \mid \iota\_t, \theta\_t^i)$ )._     
    * **class** [**QInitializer**](classsdm_1_1QInitializer.md) _Abstract class for initializer._     
    * **class** [**QLearning**](classsdm_1_1QLearning.md) _Q-Learning and its extensions (DQN, etc)._     
    * **class** [**QValueBackupInterface**](classsdm_1_1QValueBackupInterface.md)     
    * **class** [**QValueFunction**](classsdm_1_1QValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._     
    * **class** [**QValueFunctionConditioning**](classsdm_1_1QValueFunctionConditioning.md)     
    * **class** [**RecursiveMap**](classsdm_1_1RecursiveMap.md) _The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_ 
    * **class** [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) [_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._    
    * **class** [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md)     
    * **class** [**RelaxedValueFunction**](classsdm_1_1RelaxedValueFunction.md)     
    * **class** [**ReplayMemory**](classsdm_1_1ReplayMemory.md)     
    * **class** [**RewardInterface**](classsdm_1_1RewardInterface.md) _This class provides a common interface for every models of reward._     
    * **class** [**SerialInterface**](classsdm_1_1SerialInterface.md) _A common interface for objects that are serialized._     
    * **class** [**SerialMMDPInterface**](classsdm_1_1SerialMMDPInterface.md) _The class for Discrete Markov Decision Processes._ 
    * **class** [**SerialMPOMDPInterface**](classsdm_1_1SerialMPOMDPInterface.md) _The class for Discrete Markov Decision Processes._     
    * **class** [**SerialOccupancyInterface**](classsdm_1_1SerialOccupancyInterface.md) 
    * **class** [**SerialOccupancyMDP**](classsdm_1_1SerialOccupancyMDP.md)     
    * **class** [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md)     
    * **class** [**SerialProblemInterface**](classsdm_1_1SerialProblemInterface.md)     
    * **class** [**SerializedMMDP**](classsdm_1_1SerializedMMDP.md)     
    * **class** [**SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md)     
    * **class** [**SerializedState**](classsdm_1_1SerializedState.md)     
    * **struct** [**Set**](structsdm_1_1Set.md)     
    * **class** [**SolvableByDP**](classsdm_1_1SolvableByDP.md) _Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._    
    * **class** [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) _Public interface for problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._[_**HSVI**_](classsdm_1_1HSVI.md) _can be used to solve the problem that implement this interface._    
    * **class** [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md) _The class for Markov Decision Processes._     
    * **class** [**Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite._     
    * **class** [**State**](classsdm_1_1State.md) _A public interface for states._     
    * **class** [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md)     
    * **class** [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) _This class provides a common interface for every models of state dynamics._     
    * **class** [**StateGraph**](classsdm_1_1StateGraph.md) _A graph that keep all beliefs._     
    * **class** [**StdLogger**](classsdm_1_1StdLogger.md) _The standard logger will print logs on the standard output stream._     
    * **class** [**StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md) _The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._     
    * **class** [**TabularBackup**](classsdm_1_1TabularBackup.md)     
    * **class** [**TabularObservationDynamics**](classsdm_1_1TabularObservationDynamics.md) _Tabular observation dynamics._     
    * **class** [**TabularObservationDynamicsAS**](classsdm_1_1TabularObservationDynamicsAS.md) _Tabular representation for the observation dynamics p(o' | a, s')._     
    * **class** [**TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md) _Tabular representation for the observation dynamics p(o' | s')._     
    * **class** [**TabularObservationDynamicsSAS**](classsdm_1_1TabularObservationDynamicsSAS.md) _Tabular representation for the observation dynamics p(o' | s, a, s')._     
    * **class** [**TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md)     
    * **class** [**TabularQValueFunction**](classsdm_1_1TabularQValueFunction.md)     
    * **class** [**TabularQValueFunctionConditioning**](classsdm_1_1TabularQValueFunctionConditioning.md)     
    * **class** [**TabularReward**](classsdm_1_1TabularReward.md) _This class provide a way to represent the reward model with a tabular representation._     
    * **class** [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) _Tabular representation for the state dynamics._     
    * **class** [**TemporalFunction**](classsdm_1_1TemporalFunction.md)     
    * **class** [**TensorImpl**](classsdm_1_1TensorImpl.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._     
    * **class** [**TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md)     
    * **class** [**Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._    
    * **class** [**ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._     
    * **class** [**ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md) _The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._    
    * **class** [**ValueInitializer**](classsdm_1_1ValueInitializer.md) _This initializer initializes a value function to a constant value._     
    * **class** [**ValueIteration**](classsdm_1_1ValueIteration.md) [Value Iteration](https://www.jstor.org/stable/24900506) _for_[_**MDP**_](classsdm_1_1MDP.md) _._    
    * **class** [**VarNaming**](classsdm_1_1VarNaming.md)     
    * **class** [**Variations**](classsdm_1_1Variations.md) [_**Iterator**_](classsdm_1_1Iterator.md) _of_[_**Variations**_](classsdm_1_1Variations.md) _._    
    * **class** [**VectorInterface**](classsdm_1_1VectorInterface.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the functions of the interface._     
    * **class** [**World**](classsdm_1_1World.md) 
    * **class** [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) _This initializer initializes a value function to zero._     
    * **namespace** [**algo**](namespacesdm_1_1algo.md) _Namespace grouping functions to manipulate algorithms._     
    * **namespace** [**ast**](namespacesdm_1_1ast.md) _Namespace that is used by the parser._     
        * **struct** [**discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) _encodes the input into a discrete space class_     
        * **struct** [**dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md)     
        * **struct** [**dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md)     
        * **struct** [**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md)     
        * **struct** [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) 
        * **struct** [**item\_encode**](structsdm_1_1ast_1_1item__encode.md) _encodes the input into a item index (string))_     
        * **struct** [**joint\_item\_encode**](classsdm_1_1ast_1_1joint__item__encode.md) _encodes the input into a joint element (vector of number)_     
        * **struct** [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) _encodes the input into a mapped matrix_     
        * **struct** [**matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) 
        * **struct** [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) _encodes the input into a multi discrete space class_     
        * **class** [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md)     
        * **struct** [**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md)     
        * **struct** [**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md)     
        * **struct** [**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md)     
        * **struct** [**observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) 
        * **struct** [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) _encodes the input into an observation dynamic class_     
        * **struct** [**real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) 
        * **struct** [**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md)     
        * **struct** [**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md)     
        * **struct** [**reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) 
        * **class** [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) _encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_    
        * **struct** [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) _encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_     
        * **class** [**state\_transition\_encoder**](classsdm_1_1ast_1_1state__transition__encoder.md) _encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_    
        * **struct** [**str\_visitor**](structsdm_1_1ast_1_1str__visitor.md)     
        * **struct** [**tabular\_reward\_encoder**](structsdm_1_1ast_1_1tabular__reward__encoder.md)     
        * **struct** [**tabular\_rewards\_encoder**](structsdm_1_1ast_1_1tabular__rewards__encoder.md)     
        * **struct** [**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md)     
        * **struct** [**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md)     
        * **struct** [**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md)     
        * **struct** [**transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) 
        * **struct** [**value\_t**](structsdm_1_1ast_1_1value__t.md) 
        * **struct** [**values\_t**](structsdm_1_1ast_1_1values__t.md) 
        * **struct** [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) _encodes the input into a mapped vector_     
    * **namespace** [**common**](namespacesdm_1_1common.md) _Namespace grouping all common functions to the whole project._     
    * **namespace** [**config**](namespacesdm_1_1config.md) _Namespace grouping a set of configurations._     
    * **struct** [**equal\_container**](structsdm_1_1equal__container.md)     
    * **struct** [**equal\_from\_ptr**](structsdm_1_1equal__from__ptr.md)     
    * **namespace** [**exception**](namespacesdm_1_1exception.md) _Namespace grouping all exceptions._     
        * **class** [**Exception**](classsdm_1_1exception_1_1Exception.md) _This class is the base class for SDMS exceptions._     
        * **class** [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _File not found exception._     
        * **class** [**NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md) _Not implemented method exception._     
        * **class** [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._     
    * **struct** [**hash\_container**](structsdm_1_1hash__container.md)     
    * **struct** [**hash\_from\_ptr**](structsdm_1_1hash__from__ptr.md)     
    * **namespace** [**iterator**](namespacesdm_1_1iterator.md) _Namespace grouping all SDMS iterators._     
        * **class** [**CombinationIterator**](classsdm_1_1iterator_1_1CombinationIterator.md) _The combination iterator provides a way to go simultaneously over multiple iterators in order to generate all combinations of items._     
        * **class** [**FunctionIterator**](classsdm_1_1iterator_1_1FunctionIterator.md) _The function iterator is an SDMS iterator generating functions from iterable possible inputs and outputs._     
        * **class** [**SuperIterator**](classsdm_1_1iterator_1_1SuperIterator.md) _A super iterator is an SDMS iterator that simply iterate over a standard STD iterator._     
    * **namespace** [**nn**](namespacesdm_1_1nn.md) _Namespace grouping all neural networks definitions._     
        * **struct** [**DQNImpl**](structsdm_1_1nn_1_1DQNImpl.md)     
    * **namespace** [**parser**](namespacesdm_1_1parser.md) _Namespace grouping all functions for parsing files._     
        * **struct** [**error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md)     
    * **class** [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md)     
    * **class** [**sdmsVector**](classsdm_1_1sdmsVector.md) _Create a SDMS Vector. A SMDS Vector is used to optimize the calculation, however, you have to be careful when using it because it's not possible to add element after the initialization._     
    * **namespace** [**tools**](namespacesdm_1_1tools.md) _Namespace grouping different kind of tools._     
    * **namespace** [**world**](namespacesdm_1_1world.md) _Namespace grouping functions to manipulate problems._     
* **namespace** [**std**](namespacestd.md)     
    * **struct** [**Compare**](structstd_1_1Compare.md)     
    * **class** [**MultipleInheritableEnableSharedFromThis**](classstd_1_1MultipleInheritableEnableSharedFromThis.md)     
    * **struct** [**Performance**](structstd_1_1Performance.md)     
    * **struct** [**hash&lt; sdm::Belief &gt;**](structstd_1_1hash_3_01sdm_1_1Belief_01_4.md)     
    * **struct** [**hash&lt; sdm::DeterministicDecisionRule &gt;**](structstd_1_1hash_3_01sdm_1_1DeterministicDecisionRule_01_4.md)     
    * **struct** [**hash&lt; sdm::JointDeterministicDecisionRule &gt;**](structstd_1_1hash_3_01sdm_1_1JointDeterministicDecisionRule_01_4.md)     
    * **struct** [**hash&lt; sdm::MappedMatrix&lt; TLig, TCol, TValue &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1MappedMatrix_3_01TLig_00_01TCol_00_01TValue_01_4_01_4.md)     
    * **struct** [**hash&lt; sdm::OccupancyState &gt;**](structstd_1_1hash_3_01sdm_1_1OccupancyState_01_4.md)     
    * **struct** [**hash&lt; sdm::Pair&lt; T, U &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Pair_3_01T_00_01U_01_4_01_4.md)     
    * **struct** [**hash&lt; sdm::SerialOccupancyState &gt;**](structstd_1_1hash_3_01sdm_1_1SerialOccupancyState_01_4.md)     
    * **struct** [**hash&lt; sdm::SerializedState &gt;**](structstd_1_1hash_3_01sdm_1_1SerializedState_01_4.md)     
    * **struct** [**hash&lt; sdm::Tuple&lt; TT... &gt; &gt;**](structstd_1_1hash_3_01sdm_1_1Tuple_3_01TT_8_8_8_01_4_01_4.md)     
    * **struct** [**hash&lt; std::vector&lt; T &gt; &gt;**](structstd_1_1hash_3_01std_1_1vector_3_01T_01_4_01_4.md)     
    * **class** [**inheritable\_enable\_shared\_from\_this**](classstd_1_1inheritable__enable__shared__from__this.md)     
    * **struct** [**is\_any**](structstd_1_1is__any.md) 
* **namespace** [**@111**](namespacestd_1_1_0D111.md) 