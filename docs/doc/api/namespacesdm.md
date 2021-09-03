
# Namespace sdm

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md)



_Namespace grouping all tools required for sequential decision making._ [More...](#detailed-description)










## Namespaces

| Type | Name |
| ---: | :--- |
| namespace | [**algo**](namespacesdm_1_1algo.md) <br>_Namespace grouping functions to manipulate algorithms._  |
| namespace | [**ast**](namespacesdm_1_1ast.md) <br>_Namespace that is used by the parser._  |
| namespace | [**common**](namespacesdm_1_1common.md) <br>_Namespace grouping all common functions to the whole project._  |
| namespace | [**config**](namespacesdm_1_1config.md) <br>_Namespace grouping a set of configurations._  |
| namespace | [**exception**](namespacesdm_1_1exception.md) <br>_Namespace grouping all exceptions._  |
| namespace | [**iterator**](namespacesdm_1_1iterator.md) <br>_Namespace grouping all SDMS iterators._  |
| namespace | [**nn**](namespacesdm_1_1nn.md) <br>_Namespace grouping all neural networks definitions._  |
| namespace | [**parser**](namespacesdm_1_1parser.md) <br>_Namespace grouping all functions for parsing files._  |
| namespace | [**tools**](namespacesdm_1_1tools.md) <br>_Namespace grouping different kind of tools._  |
| namespace | [**world**](namespacesdm_1_1world.md) <br>_Namespace grouping functions to manipulate problems._  |

## Classes

| Type | Name |
| ---: | :--- |
| class | [**ActionVFBase**](classsdm_1_1ActionVFBase.md) <br> |
| class | [**ActionVFInterface**](classsdm_1_1ActionVFInterface.md) <br> |
| class | [**ActionVFMaxplan**](classsdm_1_1ActionVFMaxplan.md) <br> |
| class | [**ActionVFMaxplanLP**](classsdm_1_1ActionVFMaxplanLP.md) <br> |
| class | [**ActionVFMaxplanLPSerial**](classsdm_1_1ActionVFMaxplanLPSerial.md) <br> |
| class | [**ActionVFMaxplanSerial**](classsdm_1_1ActionVFMaxplanSerial.md) <br> |
| class | [**ActionVFMaxplanWCSP**](classsdm_1_1ActionVFMaxplanWCSP.md) <br> |
| class | [**ActionVFSawtoothLP**](classsdm_1_1ActionVFSawtoothLP.md) <br> |
| class | [**ActionVFSawtoothLPSerial**](classsdm_1_1ActionVFSawtoothLPSerial.md) <br> |
| class | [**ActionVFSawtoothWCSP**](classsdm_1_1ActionVFSawtoothWCSP.md) <br> |
| class | [**ActionVFTabulaire**](classsdm_1_1ActionVFTabulaire.md) <br> |
| class | [**Algorithm**](classsdm_1_1Algorithm.md) <br>_The public interface common to all algorithms in_ **SDM'Studio** _._ |
| class | [**AlphaStar**](classsdm_1_1AlphaStar.md) <br>_The class for the algorithm_ [A\*](http://ai.stanford.edu/users/nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf) _._ |
| class | [**BackupBase**](classsdm_1_1BackupBase.md) &lt;TData&gt;<br> |
| class | [**BackupInterface**](classsdm_1_1BackupInterface.md) &lt;TData&gt;<br> |
| class | [**BackupInterfaceForValueFunction**](classsdm_1_1BackupInterfaceForValueFunction.md) <br> |
| class | [**BackwardInduction**](classsdm_1_1BackwardInduction.md) <br>_The algorithm_ [Backward Induction](https://en.wikipedia.org/wiki/Backward_induction) _._ |
| class | [**BaseAction**](classsdm_1_1BaseAction.md) &lt;typename TAction&gt;<br>_A base class inheriting from the Action interface._  |
| class | [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md) &lt;TBelief&gt;<br>_This class provides a way to transform a_ [_**POMDP**_](classsdm_1_1POMDP.md) _into belief_[_**MDP**_](classsdm_1_1MDP.md) _formalism._ |
| struct | [**BaseItem**](structsdm_1_1BaseItem.md) &lt;class TItem&gt;<br>_A base class inheriting from the_ [_**Item**_](classsdm_1_1Item.md) _interface._ |
| class | [**BaseLogger**](classsdm_1_1BaseLogger.md) <br>_This class provide a common interface for all loggers._  |
| class | [**BaseObservation**](classsdm_1_1BaseObservation.md) &lt;typename TObservation&gt;<br>_A base class inheriting from the_ [_**Observation**_](classsdm_1_1Observation.md) _interface._ |
| class | [**BaseOccupancyMDP**](classsdm_1_1BaseOccupancyMDP.md) &lt;class TOccupancyState&gt;<br>_This class provides a way to transform a Dec-POMDP into an occupancy_ [_**MDP**_](classsdm_1_1MDP.md) _formalism._ |
| class | [**BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md) &lt;Hash, KeyEqual&gt;<br> |
| class | [**BaseRelaxedValueFunction**](classsdm_1_1BaseRelaxedValueFunction.md) <br> |
| class | [**BaseSerialInterface**](classsdm_1_1BaseSerialInterface.md) <br> |
| class | [**BaseState**](classsdm_1_1BaseState.md) &lt;TState&gt;<br>_A base class inheriting from the_ [_**State**_](classsdm_1_1State.md) _interface._ |
| class | [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md) &lt;Hash, KeyEqual&gt;<br> |
| class | [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md) &lt;TInput&gt;<br>_This class is the abstract class of all kind of value functions. All {state,action,q}-value function must derived this class._  |
| class | [**Belief**](classsdm_1_1Belief.md) <br> |
| class | [**Belief2OccupancyValueFunction**](classsdm_1_1Belief2OccupancyValueFunction.md) <br> |
| class | [**BeliefDefault**](classsdm_1_1BeliefDefault.md) <br> |
| class | [**BeliefInterface**](classsdm_1_1BeliefInterface.md) <br>_A common interface for objects that represent a belief._  |
| class | [**BinaryFunction**](classsdm_1_1BinaryFunction.md) &lt;TInput1, TInput2, TOutput&gt;<br> |
| class | [**BlindInitializer**](classsdm_1_1BlindInitializer.md) <br>_This initializer calculates the initial lower bound ${V}\_0$ using the blind policy method [Hauskrecht, 1997]. Trey Smith and Reid Simmons used this initialization procedure in_ [https://arxiv.org/pdf/1207.4166.pdf](https://arxiv.org/pdf/1207.4166.pdf) _._ |
| class | [**BoostSerializable**](classsdm_1_1BoostSerializable.md) &lt;SerializableClass&gt;<br> |
| class | [**BoundInitializer**](classsdm_1_1BoundInitializer.md) <br>_This initializer initializes a value function to the estimation of the value if we get a constant reward at every timestep._  |
| class | [**CSVLogger**](classsdm_1_1CSVLogger.md) <br>_The CSV logger will print logs/data in a file with csv format. This logger can be used to save training data._  |
| class | [**CompressibleOccupancyStateInterface**](classsdm_1_1CompressibleOccupancyStateInterface.md) <br> |
| class | [**DecentralizedLP**](classsdm_1_1DecentralizedLP.md) <br> |
| class | [**DecisionProcessInterface**](classsdm_1_1DecisionProcessInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**DecisionRule**](classsdm_1_1DecisionRule.md) <br>_A public interface for decision rules. Contains all the methods that must be implemented to well define a decision rule in SDMS._  |
| class | [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md) <br>_This class provide a way to manipulate data relative to a deterministic decision rule._  |
| class | [**DiscreteDistribution**](classsdm_1_1DiscreteDistribution.md) &lt;T&gt;<br> |
| class | [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) <br>_The discrete space class give a way to keep all possible values of a finite space._  |
| class | [**Distribution**](classsdm_1_1Distribution.md) &lt;T&gt;<br> |
| class | [**EpsGreedy**](classsdm_1_1EpsGreedy.md) <br> |
| class | [**ExperienceMemory**](classsdm_1_1ExperienceMemory.md) <br> |
| class | [**ExperienceMemoryInterface**](classsdm_1_1ExperienceMemoryInterface.md) <br> |
| class | [**Exploration**](classsdm_1_1Exploration.md) <br> |
| class | [**FileLogger**](classsdm_1_1FileLogger.md) <br>_The file logger will print logs/data in a file._  |
| class | [**Function**](classsdm_1_1Function.md) &lt;TInput, TOutput&gt;<br> |
| class | [**FunctionReward**](classsdm_1_1FunctionReward.md) <br>_This class provides getters and setters for the reward model._  |
| class | [**FunctionSpace**](classsdm_1_1FunctionSpace.md) &lt;typename TFunction&gt;<br>_The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._ |
| class | [**Graph**](classsdm_1_1Graph.md) &lt;TNode, TEdge&gt;<br>_A structure to manipulate graphs._  |
| class | [**GraphNode**](classsdm_1_1GraphNode.md) &lt;typename TNode, typename TEdge&gt;<br>_Node of graphs._  |
| class | [**GymInterface**](classsdm_1_1GymInterface.md) <br> |
| class | [**HSVI**](classsdm_1_1HSVI.md) <br>[Heuristic Search Value Iteration (HSVI)](https://arxiv.org/abs/1207.4166) _and its extensions (FB-HSVI, one-sided_[_**HSVI**_](classsdm_1_1HSVI.md) _)._ |
| class | [**HierarchicalMPOMDP**](classsdm_1_1HierarchicalMPOMDP.md) <br>_The Hierarchical_ [_**MPOMDP**_](classsdm_1_1MPOMDP.md) _is a transformation of a standard_[_**MPOMDP**_](classsdm_1_1MPOMDP.md) _assuming there exists a hierarchy among agents._ |
| class | [**HierarchicalOccupancyMDP**](classsdm_1_1HierarchicalOccupancyMDP.md) <br> |
| class | [**HistoryInterface**](classsdm_1_1HistoryInterface.md) <br>_A common interface for objects that represent a history._  |
| class | [**HistoryTree**](classsdm_1_1HistoryTree.md) <br>_History class that use a representation by tree._  |
| class | [**HyperplanValueFunction**](classsdm_1_1HyperplanValueFunction.md) <br> |
| class | [**IncrementalValueFunction**](classsdm_1_1IncrementalValueFunction.md) &lt;typename TState, typename TAction, typename TValueFunction&gt;<br> |
| class | [**Initializer**](classsdm_1_1Initializer.md) <br>_Abstract class for initializer._  |
| class | [**InitializerFactory**](classsdm_1_1InitializerFactory.md) <br>_The InitializerFactor class facilitates users to interact and instanciate value function initializers. Some of the available initializers are :_ [_**MinInitializer**_](classsdm_1_1MinInitializer.md) _,_[_**MaxInitializer**_](classsdm_1_1MaxInitializer.md) _,_[_**BlindInitializer**_](classsdm_1_1BlindInitializer.md) _,_[_**ZeroInitializer**_](classsdm_1_1ZeroInitializer.md) _. For a complete list of initializer, you can use : std::cout &lt;&lt;_[_**InitializerFactory::available()**_](classsdm_1_1InitializerFactory.md#function-available) _&lt;&lt; std::endl;._ |
| class | [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md) <br> |
| class | [**Item**](classsdm_1_1Item.md) <br>_A public interface for actions, states and observations._  |
| class | [**ItemPair**](classsdm_1_1ItemPair.md) &lt;TItem\_1, TItem\_2, SuperClass&gt;<br> |
| class | [**Iterator**](classsdm_1_1Iterator.md) &lt;typename TItem&gt;<br>_Common interface to all SDMS Iterators._  |
| class | [**Joint**](classsdm_1_1Joint.md) &lt;T&gt;<br>_This class is used for joint objects. It can be a_ [_**JointHistoryTree**_](classsdm_1_1JointHistoryTree.md) _, a JointObservation, a JointAction, etc._ |
| class | [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) <br>_This class provide a way to manipulate a function that maps joint histories to joint actions._  |
| class | [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) <br>_A common interface for objects that represent a joint history._  |
| class | [**JointHistoryTree**](classsdm_1_1JointHistoryTree.md) <br>[_**Joint**_](classsdm_1_1Joint.md) _history class that use a representation by tree._ |
| class | [**LPBase**](classsdm_1_1LPBase.md) <br> |
| class | [**LPInterface**](classsdm_1_1LPInterface.md) <br> |
| class | [**Logger**](classsdm_1_1Logger.md) <br>_The main logger. This logger will print logs with a given format on the output stream._  |
| class | [**MDP**](classsdm_1_1MDP.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**MDPInitializer**](classsdm_1_1MDPInitializer.md) <br>_The_ [_**MDP**_](classsdm_1_1MDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**MDP**_](classsdm_1_1MDP.md) _optimal value function. This is a common usage in_[_**HSVI**_](classsdm_1_1HSVI.md) _to use the solution of a relaxation of the problem in order to get a accurate upper bound (see also the class_[_**POMDPInitializer**_](classsdm_1_1POMDPInitializer.md) _)._ |
| class | [**MDPInterface**](classsdm_1_1MDPInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**MMDP**](classsdm_1_1MMDP.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**MMDPInterface**](classsdm_1_1MMDPInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**MPOMDP**](classsdm_1_1MPOMDP.md) <br>_The class for Discrete Partially Observable Markov Decision Processes._  |
| class | [**MPOMDPInterface**](classsdm_1_1MPOMDPInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**MappedMatrix**](classsdm_1_1MappedMatrix.md) &lt;TLig, TCol, TValue&gt;<br>_Mapped matrices are matrices that use map to store values. Can be view as a sparse matrix with templated indexes._  |
| class | [**MappedVector**](classsdm_1_1MappedVector.md) &lt;TIndex, T, Hash, KeyEqual&gt;<br>_Mapped vectors are vectors with specific type of indexes. They are represented by a map._  |
| class | [**MatrixInterface**](classsdm_1_1MatrixInterface.md) &lt;typename TCol, typename TLig, typename TValue&gt;<br>_The Matrix interface. To be considered as a matrix in SDM'Studio, a class must implement all the following functions._  |
| class | [**MaxInitializer**](classsdm_1_1MaxInitializer.md) <br>_This initializer initializes a value function to the best value. This is an optimistic initialization._  |
| class | [**MaxPlanBackup**](classsdm_1_1MaxPlanBackup.md) <br> |
| class | [**MinInitializer**](classsdm_1_1MinInitializer.md) <br>_This initializer initializes a value function to the worst value. This is a pessimistic initialization._  |
| class | [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) <br>_This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in POSG). This can be view as a set of discrete spaces or as a discrete space of joint items._  |
| class | [**MultiLogger**](classsdm_1_1MultiLogger.md) <br>_The multi logger will print logs in several loggers._  |
| class | [**MultiSpace**](classsdm_1_1MultiSpace.md) <br>_A multi-space is a set a spaces._  |
| class | [**NetworkedDistributedPOMDP**](classsdm_1_1NetworkedDistributedPOMDP.md) <br> |
| class | [**NetworkedDistributedPOMDPInterface**](classsdm_1_1NetworkedDistributedPOMDPInterface.md) <br> |
| class | [**Observation**](classsdm_1_1Observation.md) <br>_A public interface for observations._  |
| class | [**ObservationDynamicsInterface**](classsdm_1_1ObservationDynamicsInterface.md) <br>_This class provides a common interface for every models of observation dynamics._  |
| class | [**OccupancyState**](classsdm_1_1OccupancyState.md) <br>_An occupancy state refers to the complete knowledge the central planner have access to take decisions._  |
| class | [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) <br>_A common interface for objects that represent an occupancy state._  |
| class | [**POMDP**](classsdm_1_1POMDP.md) <br>_The class for Discrete Partially Observable Markov Decision Processes._  |
| class | [**POMDPInitializer**](classsdm_1_1POMDPInitializer.md) <br>_The_ [_**POMDP**_](classsdm_1_1POMDP.md) _initializer enables to initialize the upper bound in_[_**HSVI**_](classsdm_1_1HSVI.md) _with the underlying_[_**POMDP**_](classsdm_1_1POMDP.md) _optimal value function._ |
| class | [**POMDPInterface**](classsdm_1_1POMDPInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**PrivateHierarchicalOccupancyMDP**](classsdm_1_1PrivateHierarchicalOccupancyMDP.md) <br> |
| class | [**PrivateHierarchicalOccupancyMDPWithHistory**](classsdm_1_1PrivateHierarchicalOccupancyMDPWithHistory.md) <br> |
| class | [**PrivateOccupancyState**](classsdm_1_1PrivateOccupancyState.md) <br>_A private occupancy state is an occupancy state (i.e. $p(s\_t, \theta^{-i}\_{t} \mid \iota\_t, \theta\_t^i)$ )._  |
| class | [**QInitializer**](classsdm_1_1QInitializer.md) &lt;class TInput&gt;<br>_Abstract class for initializer._  |
| class | [**QLearning**](classsdm_1_1QLearning.md) &lt;class TInput&gt;<br>_Q-Learning and its extensions (DQN, etc)._  |
| class | [**QValueBackupInterface**](classsdm_1_1QValueBackupInterface.md) <br> |
| class | [**QValueFunction**](classsdm_1_1QValueFunction.md) &lt;TInput&gt;<br>_This class is the abstract class of value function. All value function must derived this class._  |
| class | [**QValueFunctionConditioning**](classsdm_1_1QValueFunctionConditioning.md) &lt;TCondition, TState&gt;<br> |
| class | [**RecursiveMap**](classsdm_1_1RecursiveMap.md) &lt;class T0, class T1, Ts&gt;<br>_The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_  |
| class | [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) &lt;class T0, class T1&gt;<br>[_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._ |
| class | [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md) &lt;class T0, class T1, class T2, Ts&gt;<br> |
| class | [**RelaxedValueFunction**](classsdm_1_1RelaxedValueFunction.md) <br> |
| class | [**ReplayMemory**](classsdm_1_1ReplayMemory.md) <br> |
| class | [**RewardInterface**](classsdm_1_1RewardInterface.md) <br>_This class provides a common interface for every models of reward._  |
| class | [**SerialInterface**](classsdm_1_1SerialInterface.md) <br>_A common interface for objects that are serialized._  |
| class | [**SerialMMDPInterface**](classsdm_1_1SerialMMDPInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**SerialMPOMDPInterface**](classsdm_1_1SerialMPOMDPInterface.md) <br>_The class for Discrete Markov Decision Processes._  |
| class | [**SerialOccupancyInterface**](classsdm_1_1SerialOccupancyInterface.md) <br> |
| class | [**SerialOccupancyMDP**](classsdm_1_1SerialOccupancyMDP.md) <br> |
| class | [**SerialOccupancyState**](classsdm_1_1SerialOccupancyState.md) <br> |
| class | [**SerialProblemInterface**](classsdm_1_1SerialProblemInterface.md) <br> |
| class | [**SerializedMMDP**](classsdm_1_1SerializedMMDP.md) <br> |
| class | [**SerializedMPOMDP**](classsdm_1_1SerializedMPOMDP.md) <br> |
| class | [**SerializedState**](classsdm_1_1SerializedState.md) <br> |
| struct | [**Set**](structsdm_1_1Set.md) &lt;class T&gt;<br> |
| class | [**SolvableByDP**](classsdm_1_1SolvableByDP.md) <br>_Public interface that must be implemented by all transformed problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._ |
| class | [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) <br>_Public interface for problems that can be solved using_ [_**HSVI**_](classsdm_1_1HSVI.md) _(i.e. beliefMDP, occupancyMDP, occupancyGame, etc)._[_**HSVI**_](classsdm_1_1HSVI.md) _can be used to solve the problem that implement this interface._ |
| class | [**SolvableByMDP**](classsdm_1_1SolvableByMDP.md) <br>_The class for Markov Decision Processes._  |
| class | [**Space**](classsdm_1_1Space.md) <br>_This class is an abstract interface that all spaces should inherite._  |
| class | [**State**](classsdm_1_1State.md) <br>_A public interface for states._  |
| class | [**State2OccupancyValueFunction**](classsdm_1_1State2OccupancyValueFunction.md) <br> |
| class | [**StateDynamicsInterface**](classsdm_1_1StateDynamicsInterface.md) <br>_This class provides a common interface for every models of state dynamics._  |
| class | [**StateGraph**](classsdm_1_1StateGraph.md) <br>_A graph that keep all beliefs._  |
| class | [**StdLogger**](classsdm_1_1StdLogger.md) <br>_The standard logger will print logs on the standard output stream._  |
| class | [**StochasticDecisionRule**](classsdm_1_1StochasticDecisionRule.md) <br>_The stochastic decision rule class. This class is a function that maps generic states distribution over generic actions._  |
| class | [**TabularBackup**](classsdm_1_1TabularBackup.md) <br> |
| class | [**TabularObservationDynamics**](classsdm_1_1TabularObservationDynamics.md) <br>_Tabular observation dynamics._  |
| class | [**TabularObservationDynamicsAS**](classsdm_1_1TabularObservationDynamicsAS.md) <br>_Tabular representation for the observation dynamics p(o' | a, s')._  |
| class | [**TabularObservationDynamicsS**](classsdm_1_1TabularObservationDynamicsS.md) <br>_Tabular representation for the observation dynamics p(o' | s')._  |
| class | [**TabularObservationDynamicsSAS**](classsdm_1_1TabularObservationDynamicsSAS.md) <br>_Tabular representation for the observation dynamics p(o' | s, a, s')._  |
| class | [**TabularQValueBackup**](classsdm_1_1TabularQValueBackup.md) <br> |
| class | [**TabularQValueFunction**](classsdm_1_1TabularQValueFunction.md) &lt;TInput&gt;<br> |
| class | [**TabularQValueFunctionConditioning**](classsdm_1_1TabularQValueFunctionConditioning.md) &lt;class TCondition, class TState&gt;<br> |
| class | [**TabularReward**](classsdm_1_1TabularReward.md) <br>_This class provide a way to represent the reward model with a tabular representation._  |
| class | [**TabularStateDynamics**](classsdm_1_1TabularStateDynamics.md) <br>_Tabular representation for the state dynamics._  |
| class | [**TemporalFunction**](classsdm_1_1TemporalFunction.md) &lt;typename TFunction&gt;<br> |
| class | [**TensorImpl**](classsdm_1_1TensorImpl.md) &lt;I&gt;<br>_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._  |
| class | [**TransformedMPOMDP**](classsdm_1_1TransformedMPOMDP.md) <br> |
| class | [**Tree**](classsdm_1_1Tree.md) &lt;T&gt;<br>_Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._ |
| class | [**ValueFunction**](classsdm_1_1ValueFunction.md) <br>_This class is the abstract class of value function. All value function must derived this class._  |
| class | [**ValueFunctionFactory**](classsdm_1_1ValueFunctionFactory.md) &lt;typename TState, typename TAction&gt;<br>_The_ [_**ValueFunctionFactory**_](classsdm_1_1ValueFunctionFactory.md) _class facilitates users to interact and instanciate value functions._ |
| class | [**ValueInitializer**](classsdm_1_1ValueInitializer.md) &lt;class TInput&gt;<br>_This initializer initializes a value function to a constant value._  |
| class | [**ValueIteration**](classsdm_1_1ValueIteration.md) <br>[Value Iteration](https://www.jstor.org/stable/24900506) _for_[_**MDP**_](classsdm_1_1MDP.md) _._ |
| class | [**VarNaming**](classsdm_1_1VarNaming.md) <br> |
| class | [**Variations**](classsdm_1_1Variations.md) &lt;typename TFunction&gt;<br>[_**Iterator**_](classsdm_1_1Iterator.md) _of_[_**Variations**_](classsdm_1_1Variations.md) _._ |
| class | [**VectorInterface**](classsdm_1_1VectorInterface.md) &lt;I, T&gt;<br>_The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the functions of the interface._  |
| class | [**World**](classsdm_1_1World.md) <br> |
| class | [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) &lt;class TInput&gt;<br>_This initializer initializes a value function to zero._  |
| struct | [**equal\_container**](structsdm_1_1equal__container.md) &lt;class T&gt;<br> |
| struct | [**equal\_from\_ptr**](structsdm_1_1equal__from__ptr.md) &lt;typename T&gt;<br> |
| struct | [**hash\_container**](structsdm_1_1hash__container.md) &lt;class T&gt;<br> |
| struct | [**hash\_from\_ptr**](structsdm_1_1hash__from__ptr.md) &lt;typename T&gt;<br> |
| class | [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md) &lt;TLig, TCol, TValue, TBaseMatrix, TBaseVector&gt;<br> |
| class | [**sdmsVector**](classsdm_1_1sdmsVector.md) &lt;class I, class T, class TBaseVector&gt;<br>_Create a SDMS Vector. A SMDS Vector is used to optimize the calculation, however, you have to be careful when using it because it's not possible to add element after the initialization._  |

## Public Types

| Type | Name |
| ---: | :--- |
| enum  | [**@0**](namespacesdm.md#enum-@0)  <br> |
| typedef [**ItemPair**](classsdm_1_1ItemPair.md)&lt; TAction\_1, TAction\_2, Action &gt; | [**ActionPair**](namespacesdm.md#typedef-actionpair)  <br> |
| typedef [**BaseBeliefMDP**](classsdm_1_1BaseBeliefMDP.md)&lt; [**Belief**](classsdm_1_1Belief.md) &gt; | [**BeliefMDP**](namespacesdm.md#typedef-beliefmdp)  <br> |
| typedef [**BaseObservation**](classsdm_1_1BaseObservation.md)&lt; double &gt; | [**ContinuousObservation**](namespacesdm.md#typedef-continuousobservation)  <br>[_**BaseObservation**_](classsdm_1_1BaseObservation.md) _class with type_`double` __ |
| typedef [**BaseState**](classsdm_1_1BaseState.md)&lt; double &gt; | [**ContinuousState**](namespacesdm.md#typedef-continuousstate)  <br>[_**BaseState**_](classsdm_1_1BaseState.md) _class with type_`double` __ |
| enum  | [**Criterion**](namespacesdm.md#enum-criterion)  <br> |
| typedef [**MPOMDP**](classsdm_1_1MPOMDP.md) | [**DecPOMDP**](namespacesdm.md#typedef-decpomdp)  <br> |
| typedef [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md)&lt; TLig, TCol, TValue, boost::numeric::ublas::matrix&lt; TValue &gt;, [**DenseVector**](namespacesdm.md#typedef-densevector)&lt; TCol, TValue &gt; &gt; | [**DenseMatrix**](namespacesdm.md#typedef-densematrix)  <br>_Dense matrix are plain matrix._  |
| typedef [**sdmsVector**](classsdm_1_1sdmsVector.md)&lt; I, T, boost::numeric::ublas::vector&lt; T &gt; &gt; | [**DenseVector**](namespacesdm.md#typedef-densevector)  <br>_Dense vector are standard vector._  |
| typedef [**BaseAction**](classsdm_1_1BaseAction.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**DiscreteAction**](namespacesdm.md#typedef-discreteaction)  <br>[_**BaseAction**_](classsdm_1_1BaseAction.md) _class with type_`number` __ |
| typedef [**BaseObservation**](classsdm_1_1BaseObservation.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**DiscreteObservation**](namespacesdm.md#typedef-discreteobservation)  <br>[_**BaseObservation**_](classsdm_1_1BaseObservation.md) _class with type_`number` __ |
| typedef [**BaseObservation**](classsdm_1_1BaseObservation.md)&lt; std::string &gt; | [**DiscreteObservationString**](namespacesdm.md#typedef-discreteobservationstring)  <br>[_**BaseObservation**_](classsdm_1_1BaseObservation.md) _class with type_`std::string` __ |
| typedef [**BaseState**](classsdm_1_1BaseState.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**DiscreteState**](namespacesdm.md#typedef-discretestate)  <br>[_**BaseState**_](classsdm_1_1BaseState.md) _class with type_`number` __ |
| typedef [**BaseState**](classsdm_1_1BaseState.md)&lt; std::string &gt; | [**DiscreteStateString**](namespacesdm.md#typedef-discretestatestring)  <br>[_**BaseState**_](classsdm_1_1BaseState.md) _class with type_`std::string` __ |
| typedef [**Iterator**](classsdm_1_1Iterator.md)&lt; std::shared\_ptr&lt; [**Item**](classsdm_1_1Item.md) &gt; &gt; | [**ItemIterator**](namespacesdm.md#typedef-itemiterator)  <br> |
| typedef [**BaseAction**](classsdm_1_1BaseAction.md)&lt; [**Joint**](classsdm_1_1Joint.md)&lt; std::shared\_ptr&lt; Action &gt; &gt;&gt; | [**JointAction**](namespacesdm.md#typedef-jointaction)  <br>[_**BaseAction**_](classsdm_1_1BaseAction.md) _class with type_`Joint <std::shared_ptr<Action>>` _._ |
| typedef [**StatePair**](namespacesdm.md#typedef-statepair)&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;, std::shared\_ptr&lt; [**BeliefInterface**](classsdm_1_1BeliefInterface.md) &gt; &gt; | [**JointHistoryBeliefPair**](namespacesdm.md#typedef-jointhistorybeliefpair)  <br> |
| typedef [**StatePair**](namespacesdm.md#typedef-statepair)&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt; | [**JointHistoryJointActionPair**](namespacesdm.md#typedef-jointhistoryjointactionpair)  <br> |
| typedef [**StatePair**](namespacesdm.md#typedef-statepair)&lt; std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt;, std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**JointHistoryStatePair**](namespacesdm.md#typedef-jointhistorystatepair)  <br> |
| enum  | [**Metric**](namespacesdm.md#enum-metric)  <br> |
| typedef [**BaseItem**](structsdm_1_1BaseItem.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**NumberItem**](namespacesdm.md#typedef-numberitem)  <br> |
| typedef [**BaseOccupancyMDP**](classsdm_1_1BaseOccupancyMDP.md)&lt; [**OccupancyState**](classsdm_1_1OccupancyState.md) &gt; | [**OccupancyMDP**](namespacesdm.md#typedef-occupancymdp)  <br> |
| typedef std::pair&lt; T, U &gt; | [**Pair**](namespacesdm.md#typedef-pair)  <br>[_**sdm::Pair**_](namespacesdm.md#typedef-pair) _is an alias to_[std::pair](https://en.cppreference.com/w/cpp/utility/pair) _class with added functionnalities._ |
| typedef [**BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md)&lt; std::hash&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt;, std::equal\_to&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt;&gt; | [**PointSetValueFunction**](namespacesdm.md#typedef-pointsetvaluefunction)  <br> |
| typedef [**BasePointSetValueFunction**](classsdm_1_1BasePointSetValueFunction.md)&lt; [**sdm::hash\_from\_ptr**](structsdm_1_1hash__from__ptr.md)&lt; [**State**](classsdm_1_1State.md) &gt;, [**sdm::equal\_from\_ptr**](structsdm_1_1equal__from__ptr.md)&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**PointSetValueFunction2**](namespacesdm.md#typedef-pointsetvaluefunction2)  <br> |
| typedef [**StatePair**](namespacesdm.md#typedef-statepair)&lt; std::shared\_ptr&lt; [**OccupancyStateInterface**](classsdm_1_1OccupancyStateInterface.md) &gt;, std::shared\_ptr&lt; [**JointHistoryInterface**](classsdm_1_1JointHistoryInterface.md) &gt; &gt; | [**PrivateHierarchicalOccupancyStateJointHistoryPair**](namespacesdm.md#typedef-privatehierarchicaloccupancystatejointhistorypair)  <br> |
| typedef [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md)&lt; [**Pair**](namespacesdm.md#typedef-pair)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt;, std::shared\_ptr&lt; Action &gt; &gt;&gt; | [**QValueFunctionBase**](namespacesdm.md#typedef-qvaluefunctionbase)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; T0, T1, Ts... &gt;::type | [**RecursiveMap\_t**](namespacesdm.md#typedef-recursivemap-t)  <br> |
| typedef [**sdmsMatrix**](classsdm_1_1sdmsMatrix.md)&lt; TLig, TCol, TValue, boost::numeric::ublas::mapped\_matrix&lt; TValue &gt;, [**SparseVector**](namespacesdm.md#typedef-sparsevector)&lt; TCol, TValue &gt; &gt; | [**SparseMatrix**](namespacesdm.md#typedef-sparsematrix)  <br>_Sparse matrix are matrix that store only non-zero values._  |
| typedef [**sdmsVector**](classsdm_1_1sdmsVector.md)&lt; I, T, boost::numeric::ublas::mapped\_vector&lt; T &gt; &gt; | [**SparseVector**](namespacesdm.md#typedef-sparsevector)  <br>_Sparse vector are vectors that store only non-zero values._  |
| typedef [**ItemPair**](classsdm_1_1ItemPair.md)&lt; TState\_1, TState\_2, [**State**](classsdm_1_1State.md) &gt; | [**StatePair**](namespacesdm.md#typedef-statepair)  <br> |
| enum  | [**Statistic**](namespacesdm.md#enum-statistic)  <br> |
| typedef [**BaseItem**](structsdm_1_1BaseItem.md)&lt; std::string &gt; | [**StringItem**](namespacesdm.md#typedef-stringitem)  <br> |
| enum  | [**TState\_t**](namespacesdm.md#enum-tstate-t)  <br> |
| typedef [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)&lt; std::hash&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt;, std::equal\_to&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt;&gt; | [**TabularValueFunction**](namespacesdm.md#typedef-tabularvaluefunction)  <br> |
| typedef [**BaseTabularValueFunction**](classsdm_1_1BaseTabularValueFunction.md)&lt; [**sdm::hash\_from\_ptr**](structsdm_1_1hash__from__ptr.md)&lt; [**State**](classsdm_1_1State.md) &gt;, [**sdm::equal\_from\_ptr**](structsdm_1_1equal__from__ptr.md)&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**TabularValueFunction2**](namespacesdm.md#typedef-tabularvaluefunction2)  <br> |
| typedef std::tuple&lt; T... &gt; | [**Tuple**](namespacesdm.md#typedef-tuple)  <br>[_**sdm::Tuple**_](namespacesdm.md#typedef-tuple) _is an alias to_[std::tuple](https://en.cppreference.com/w/cpp/utility/tuple) _class with added functionnalities. It is a generalization of_[_**sdm::Pair**_](namespacesdm.md#typedef-pair) _._ |
| enum  | [**TypeAction**](namespacesdm.md#enum-typeaction)  <br> |
| enum  | [**TypeOfMaxPlanPrunning**](namespacesdm.md#enum-typeofmaxplanprunning)  <br> |
| enum  | [**TypeOfResolution**](namespacesdm.md#enum-typeofresolution)  <br> |
| enum  | [**TypeOfSawtoothPrunning**](namespacesdm.md#enum-typeofsawtoothprunning)  <br> |
| enum  | [**TypeSawtoothLinearProgram**](namespacesdm.md#enum-typesawtoothlinearprogram)  <br> |
| enum  | [**TypeSoftmax**](namespacesdm.md#enum-typesoftmax)  <br> |
| enum  | [**TypeState**](namespacesdm.md#enum-typestate)  <br> |
| typedef [**BaseValueFunction**](classsdm_1_1BaseValueFunction.md)&lt; std::shared\_ptr&lt; [**State**](classsdm_1_1State.md) &gt; &gt; | [**ValueFunctionBase**](namespacesdm.md#typedef-valuefunctionbase)  <br> |
| typedef boost::bimaps::bimap&lt; std::string, [**sdm::size\_t**](namespacesdm.md#typedef-size-t) &gt; | [**bimap**](namespacesdm.md#typedef-bimap)  <br> |
| typedef boost::bimaps::bimap&lt; TItem, [**sdm::size\_t**](namespacesdm.md#typedef-size-t) &gt; | [**bimap\_item\_index**](namespacesdm.md#typedef-bimap-item-index)  <br> |
| typedef bimap::value\_type | [**name2index**](namespacesdm.md#typedef-name2index)  <br> |
| typedef unsigned short | [**number**](namespacesdm.md#typedef-number)  <br> |
| typedef std::tuple&lt; state, action, double, state &gt; | [**sars\_transition**](namespacesdm.md#typedef-sars-transition)  <br>_Transition of state, action, reward, next\_state._  |
| typedef std::size\_t | [**size\_t**](namespacesdm.md#typedef-size-t)  <br> |
| typedef typename [**RecursiveMap**](classsdm_1_1RecursiveMap.md)&lt; T0, T1, Ts... &gt;::value\_type | [**value\_t**](namespacesdm.md#typedef-value-t)  <br> |


## Public Attributes

| Type | Name |
| ---: | :--- |
|  const [**size\_t**](namespacesdm.md#typedef-size-t) | [**ERROR\_IN\_COMMAND\_LINE**](namespacesdm.md#variable-error-in-command-line)   = = 1<br> |
|  const [**size\_t**](namespacesdm.md#typedef-size-t) | [**ERROR\_UNHANDLED\_EXCEPTION**](namespacesdm.md#variable-error-unhandled-exception)   = = 2<br> |
|  const std::shared\_ptr&lt; [**Observation**](classsdm_1_1Observation.md) &gt; | [**NO\_OBSERVATION**](namespacesdm.md#variable-no-observation)  <br>_Default observation._  |
|  const [**size\_t**](namespacesdm.md#typedef-size-t) | [**SUCCESS**](namespacesdm.md#variable-success)   = = 0<br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; T &gt; | [**cast**](namespacesdm.md#function-cast) (const std::shared\_ptr&lt; I &gt; & item) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**createInstance**](namespacesdm.md#function-createinstance) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |
|  std::shared\_ptr&lt; [**ValueFunction**](classsdm_1_1ValueFunction.md)&lt; TState, TAction &gt; &gt; | [**createInstance**](namespacesdm.md#function-createinstance) () <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**createInstanceAlgoInit**](namespacesdm.md#function-createinstancealgoinit) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world, std::string algo\_name, double error, int trials) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**createInstanceMDPValueIterationInit**](namespacesdm.md#function-createinstancemdpvalueiterationinit) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**createInstanceTabMDPInit**](namespacesdm.md#function-createinstancetabmdpinit) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**createInstanceTabPOMDPInit**](namespacesdm.md#function-createinstancetabpomdpinit) (std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |
| virtual [**TypeAction**](namespacesdm.md#enum-typeaction) | [**getTypeAction**](namespacesdm.md#function-gettypeaction) () const<br> |
|  void | [**hash\_combine**](namespacesdm.md#function-hash-combine) (std::size\_t & seed, T const & v) <br> |
|  void | [**hash\_combine**](namespacesdm.md#function-hash-combine) (std::size\_t & seed, double const & v) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md) &gt; | [**makeInitializer**](namespacesdm.md#function-makeinitializer) (std::string init\_name, std::shared\_ptr&lt; [**SolvableByHSVI**](classsdm_1_1SolvableByHSVI.md) &gt; world) <br> |
|  std::shared\_ptr&lt; [**Initializer**](classsdm_1_1Initializer.md)&lt; TState, TAction &gt; &gt; | [**makeValueFunction**](namespacesdm.md#function-makevaluefunction) (std::string init\_name) <br> |
|  std::ostream & | [**operator&lt;&lt;**](namespacesdm.md#function-operator) (std::ostream & os, const [**sdm::Pair**](namespacesdm.md#typedef-pair)&lt; T, U &gt; & pair) <br> |
|  std::ostream & | [**operator&lt;&lt;**](namespacesdm.md#function-operator-2) (std::ostream & os, [**sdm::Tuple**](namespacesdm.md#typedef-tuple)&lt; T... &gt; const & tuple) <br> |
|  std::ostream & | [**operator&lt;&lt;**](namespacesdm.md#function-operator-3) (std::ostream & os, const std::vector&lt; T &gt; & v) <br> |
| virtual std::string | [**str**](namespacesdm.md#function-str) () const = 0<br> |
|  void | [**test**](namespacesdm.md#function-test) (std::vector&lt; std::string &gt; all\_formalism={"mdp"}, std::vector&lt; std::string &gt; all\_problem={"mabc"}, std::vector&lt; int &gt; all\_horizon={2}, std::vector&lt; double &gt; all\_discount={1}, std::vector&lt; std::string &gt; upper\_bound\_name={""}, std::vector&lt; std::string &gt; lower\_bound\_name={""}, std::vector&lt; std::string &gt; all\_lower\_\_init\_name={"MinInitializer"}, std::vector&lt; std::string &gt; all\_upper\_init\_name={"MaxInitializer"}, std::vector&lt; int &gt; all\_truncation={2}, std::vector&lt; std::string &gt; all\_sawtooth\_current\_type\_of\_resolution={"BigM"}, std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; all\_sawtooth\_BigM={1000}, std::vector&lt; std::string &gt; all\_sawtooth\_type\_of\_linear\_program={"Full"}, std::vector&lt; [**TypeOfMaxPlanPrunning**](namespacesdm.md#enum-typeofmaxplanprunning) &gt; all\_type\_of\_maxplan\_prunning={TypeOfMaxPlanPrunning::PAIRWISE}, std::vector&lt; int &gt; all\_freq\_prunning\_lower\_bound={-1}, std::vector&lt; [**TypeOfSawtoothPrunning**](namespacesdm.md#enum-typeofsawtoothprunning) &gt; all\_type\_of\_sawtooth\_pruning={TypeOfSawtoothPrunning::NONE}, std::vector&lt; int &gt; all\_freq\_prunning\_upper\_bound={-1}, int mean=2, std::string filepath="../data/world/dpomdp/", std::string save\_path="../../run/Resultat/resultat.csv") <br>_This function is utilized to do precise large scale experimentation._  |
| virtual std::shared\_ptr&lt; [**DecisionRule**](classsdm_1_1DecisionRule.md) &gt; | [**toDecisionRule**](namespacesdm.md#function-todecisionrule) () <br>_A public interface for actions._  |
| virtual std::shared\_ptr&lt; [**JointDeterministicDecisionRule**](classsdm_1_1JointDeterministicDecisionRule.md) &gt; | [**toJointDeterministicDecisionRule**](namespacesdm.md#function-tojointdeterministicdecisionrule) () <br>_Cast the action into a joint decision rule._  |








# Detailed Description


Namespace grouping all tools required for sequential decision making. 

    
## Public Types Documentation


### enum @0 


```cpp
enum sdm::@0 {
    STANDARD,
    XML,
    JSON
};
```



### typedef ActionPair 


```cpp
using sdm::ActionPair = typedef ItemPair<TAction_1, TAction_2, Action>;
```



### typedef BeliefMDP 


```cpp
using sdm::BeliefMDP = typedef BaseBeliefMDP<Belief>;
```



### typedef ContinuousObservation 


```cpp
using sdm::ContinuousObservation = typedef BaseObservation<double>;
```



### typedef ContinuousState 


```cpp
using sdm::ContinuousState = typedef BaseState<double>;
```



### enum Criterion 


```cpp
enum sdm::Criterion {
    COST_MIN,
    REW_MAX
};
```



### typedef DecPOMDP 


```cpp
using sdm::DecPOMDP = typedef MPOMDP;
```



### typedef DenseMatrix 


```cpp
using sdm::DenseMatrix = typedef sdmsMatrix<TLig, TCol, TValue, boost::numeric::ublas::matrix<TValue>, DenseVector<TCol, TValue> >;
```




**Template parameters:**


* `TLig` Type of lines 
* `TCol` Type of columns 



        

### typedef DenseVector 


```cpp
using sdm::DenseVector = typedef sdmsVector<I, T, boost::numeric::ublas::vector<T> >;
```




**Template parameters:**


* `I` Type of index 
* `T` Type of value 



        

### typedef DiscreteAction 


```cpp
using sdm::DiscreteAction = typedef BaseAction<number>;
```



### typedef DiscreteObservation 


```cpp
using sdm::DiscreteObservation = typedef BaseObservation<number>;
```



### typedef DiscreteObservationString 


```cpp
using sdm::DiscreteObservationString = typedef BaseObservation<std::string>;
```



### typedef DiscreteState 


```cpp
using sdm::DiscreteState = typedef BaseState<number>;
```



### typedef DiscreteStateString 


```cpp
using sdm::DiscreteStateString = typedef BaseState<std::string>;
```



### typedef ItemIterator 


```cpp
using sdm::ItemIterator = typedef Iterator<std::shared_ptr<Item> >;
```



### typedef JointAction 


```cpp
using sdm::JointAction = typedef BaseAction<Joint<std::shared_ptr<Action> >>;
```



### typedef JointHistoryBeliefPair 


```cpp
using sdm::JointHistoryBeliefPair = typedef StatePair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<BeliefInterface> >;
```



### typedef JointHistoryJointActionPair 


```cpp
using sdm::JointHistoryJointActionPair = typedef StatePair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<Action> >;
```



### typedef JointHistoryStatePair 


```cpp
using sdm::JointHistoryStatePair = typedef StatePair<std::shared_ptr<JointHistoryInterface>, std::shared_ptr<State> >;
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

        

### typedef NumberItem 


```cpp
using sdm::NumberItem = typedef BaseItem<number>;
```



### typedef OccupancyMDP 


```cpp
using sdm::OccupancyMDP = typedef BaseOccupancyMDP<OccupancyState>;
```



### typedef Pair 


```cpp
using sdm::Pair = typedef std::pair<T, U>;
```




**Template parameters:**


* `T` the type of the first element that the pair stores. 
* `U` the type of the second element that the pair stores. 



        

### typedef PointSetValueFunction 


```cpp
using sdm::PointSetValueFunction = typedef BasePointSetValueFunction<std::hash<std::shared_ptr<State> >, std::equal_to<std::shared_ptr<State> >>;
```



### typedef PointSetValueFunction2 


```cpp
using sdm::PointSetValueFunction2 = typedef BasePointSetValueFunction<sdm::hash_from_ptr<State>, sdm::equal_from_ptr<State> >;
```



### typedef PrivateHierarchicalOccupancyStateJointHistoryPair 


```cpp
using sdm::PrivateHierarchicalOccupancyStateJointHistoryPair = typedef StatePair<std::shared_ptr<OccupancyStateInterface>, std::shared_ptr<JointHistoryInterface> >;
```



### typedef QValueFunctionBase 


```cpp
using sdm::QValueFunctionBase = typedef BaseValueFunction<Pair<std::shared_ptr<State>,std::shared_ptr<Action> >>;
```



### typedef RecursiveMap\_t 


```cpp
using sdm::RecursiveMap_t = typedef typename RecursiveMap<T0, T1, Ts...>::type;
```



### typedef SparseMatrix 


```cpp
using sdm::SparseMatrix = typedef sdmsMatrix<TLig, TCol, TValue, boost::numeric::ublas::mapped_matrix<TValue>, SparseVector<TCol, TValue> >;
```




**Template parameters:**


* `TLig` Type of lines 
* `TCol` Type of columns 



        

### typedef SparseVector 


```cpp
using sdm::SparseVector = typedef sdmsVector<I, T, boost::numeric::ublas::mapped_vector<T> >;
```




**Template parameters:**


* `I` Type of index 
* `T` Type of value 



        

### typedef StatePair 


```cpp
using sdm::StatePair = typedef ItemPair<TState_1, TState_2, State>;
```



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

        

### typedef StringItem 


```cpp
using sdm::StringItem = typedef BaseItem<std::string>;
```



### enum TState\_t 


```cpp
enum sdm::TState_t {
    COMPRESSED,
    ONE_STEP_UNCOMPRESSED,
    FULLY_UNCOMPRESSED
};
```



### typedef TabularValueFunction 


```cpp
using sdm::TabularValueFunction = typedef BaseTabularValueFunction<std::hash<std::shared_ptr<State> >, std::equal_to<std::shared_ptr<State> >>;
```



### typedef TabularValueFunction2 


```cpp
using sdm::TabularValueFunction2 = typedef BaseTabularValueFunction<sdm::hash_from_ptr<State>, sdm::equal_from_ptr<State> >;
```



### typedef Tuple 


```cpp
using sdm::Tuple = typedef std::tuple<T...>;
```




**Template parameters:**


* `T...` the types of the elements that the tuple stores. Empty list is supported. 



        

### enum TypeAction 


```cpp
enum sdm::TypeAction {
    ACTION,
    DECISION_RULE
};
```



### enum TypeOfMaxPlanPrunning 


```cpp
enum sdm::TypeOfMaxPlanPrunning {
    PAIRWISE,
    BOUNDED
};
```



### enum TypeOfResolution 


```cpp
enum sdm::TypeOfResolution {
    BigM,
    IloIfThenResolution
};
```



### enum TypeOfSawtoothPrunning 


```cpp
enum sdm::TypeOfSawtoothPrunning {
    ITERATIVE,
    GLOBAL,
    BOTH,
    NONE
};
```



### enum TypeSawtoothLinearProgram 


```cpp
enum sdm::TypeSawtoothLinearProgram {
    PLAIN_SAWTOOTH_LINER_PROGRAMMING,
    RELAXED_SAWTOOTH_LINER_PROGRAMMING,
    RELAXED_V2_SAWTOOTH_LINER_PROGRAMMING
};
```



### enum TypeSoftmax 


```cpp
enum sdm::TypeSoftmax {
    BELIEF,
    BEHAVIOR,
    OCCUPANCY
};
```



### enum TypeState 


```cpp
enum sdm::TypeState {
    STATE,
    BELIEF_STATE,
    OCCUPANCY_STATE,
    SERIAL_OCCUPANCY_STATE,
    SERIAL_STATE,
    UNKNOWN
};
```



### typedef ValueFunctionBase 


```cpp
using sdm::ValueFunctionBase = typedef BaseValueFunction<std::shared_ptr<State> >;
```



### typedef bimap 


```cpp
typedef boost::bimaps::bimap<std::string, sdm::size_t> sdm::bimap;
```



### typedef bimap\_item\_index 


```cpp
using sdm::bimap_item_index = typedef boost::bimaps::bimap<TItem, sdm::size_t>;
```



### typedef name2index 


```cpp
typedef bimap::value_type sdm::name2index;
```



### typedef number 


```cpp
typedef unsigned short sdm::number;
```



### typedef sars\_transition 


```cpp
typedef std::tuple<state, action, double, state> sdm::sars_transition;
```



### typedef size\_t 


```cpp
typedef std::size_t sdm::size_t;
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



### variable NO\_OBSERVATION 


```cpp
const std::shared_ptr<Observation> sdm::NO_OBSERVATION;
```



### variable SUCCESS 


```cpp
const size_t sdm::SUCCESS;
```


## Public Functions Documentation


### function cast 


```cpp
template<class I class I, class T class T>
std::shared_ptr< T > sdm::cast (
    const std::shared_ptr< I > & item
) 
```



### function createInstance 


```cpp
template<class TInit class TInit>
std::shared_ptr< Initializer > sdm::createInstance (
    std::shared_ptr< SolvableByHSVI > world
) 
```



### function createInstance 


```cpp
template<typename TState typename TState, typename TAction typename TAction, template< typename TS, typename TA > class TValueFunction>
std::shared_ptr< ValueFunction < TState, TAction > > sdm::createInstance () 
```



### function createInstanceAlgoInit 


```cpp
template<class TInit class TInit>
std::shared_ptr< Initializer > sdm::createInstanceAlgoInit (
    std::shared_ptr< SolvableByHSVI > world,
    std::string algo_name,
    double error,
    int trials
) 
```



### function createInstanceMDPValueIterationInit 


```cpp
std::shared_ptr< Initializer > sdm::createInstanceMDPValueIterationInit (
    std::shared_ptr< SolvableByHSVI > world
) 
```



### function createInstanceTabMDPInit 


```cpp
std::shared_ptr< Initializer > sdm::createInstanceTabMDPInit (
    std::shared_ptr< SolvableByHSVI > world
) 
```



### function createInstanceTabPOMDPInit 


```cpp
std::shared_ptr< Initializer > sdm::createInstanceTabPOMDPInit (
    std::shared_ptr< SolvableByHSVI > world
) 
```



### function getTypeAction 


```cpp
virtual TypeAction sdm::getTypeAction () const
```



### function hash\_combine 


```cpp
template<class T class T>
inline void sdm::hash_combine (
    std::size_t & seed,
    T const & v
) 
```



### function hash\_combine 


```cpp
template<>
inline void sdm::hash_combine (
    std::size_t & seed,
    double const & v
) 
```



### function makeInitializer 


```cpp
std::shared_ptr< Initializer > sdm::makeInitializer (
    std::string init_name,
    std::shared_ptr< SolvableByHSVI > world
) 
```



### function makeValueFunction 


```cpp
template<typename TState typename TState, typename TAction typename TAction>
std::shared_ptr< Initializer < TState, TAction > > sdm::makeValueFunction (
    std::string init_name
) 
```



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



### function str 


```cpp
virtual std::string sdm::str () const = 0
```



### function test 


```cpp
void sdm::test (
    std::vector< std::string > all_formalism={"mdp"},
    std::vector< std::string > all_problem={"mabc"},
    std::vector< int > all_horizon={2},
    std::vector< double > all_discount={1},
    std::vector< std::string > upper_bound_name={""},
    std::vector< std::string > lower_bound_name={""},
    std::vector< std::string > all_lower__init_name={"MinInitializer"},
    std::vector< std::string > all_upper_init_name={"MaxInitializer"},
    std::vector< int > all_truncation={2},
    std::vector< std::string > all_sawtooth_current_type_of_resolution={"BigM"},
    std::vector< number > all_sawtooth_BigM={1000},
    std::vector< std::string > all_sawtooth_type_of_linear_program={"Full"},
    std::vector< TypeOfMaxPlanPrunning > all_type_of_maxplan_prunning={TypeOfMaxPlanPrunning::PAIRWISE},
    std::vector< int > all_freq_prunning_lower_bound={-1},
    std::vector< TypeOfSawtoothPrunning > all_type_of_sawtooth_pruning={TypeOfSawtoothPrunning::NONE},
    std::vector< int > all_freq_prunning_upper_bound={-1},
    int mean=2,
    std::string filepath="../data/world/dpomdp/",
    std::string save_path="../../run/Resultat/resultat.csv"
) 
```




**Parameters:**


* `filepath` 
* `all_formalism` a vector of all formalism to use (mdp/pomdp/...) 
* `all_problem` a vector of all problem to be solved ( tiger/mabc/...) 
* `all_horizon` a vector of all planning horizon 
* `all_discount` a vector of all discount factor 
* `all_lower_bound` a vector of all lower\_bound 
* `all_upper_bound` a vector of all upper bound 
* `mean` the number of repetition 
* `sauvegarde_path` the path to save all the data 



        

### function toDecisionRule 


```cpp
virtual std::shared_ptr< DecisionRule > sdm::toDecisionRule () 
```


Any class inheriting from this interface will be considered as generic action for algorithms. Consider sections [Theoritical Background](https://aldavid.gitlabpages.inria.fr/sdms/tutorials/theory.html) and [Algorithms](https://aldavid.gitlabpages.inria.fr/sdms/tutorials/algorithms/) for more information.

/ class Action : public [**Item**](classsdm_1_1Item.md) { public: virtual ~Action() {}

/\*\*Cast the action into a decision rule. 

        

### function toJointDeterministicDecisionRule 


```cpp
virtual std::shared_ptr< JointDeterministicDecisionRule > sdm::toJointDeterministicDecisionRule () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/algorithms/alpha_star.hpp`