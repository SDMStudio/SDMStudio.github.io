# Class List

Here are the classes, structs, unions and interfaces with brief descriptions:


* **struct** [**DQNImpl**](structDQNImpl.md)   
* **class** [**dynamics**](classdynamics.md) 
* **class** [**dynamics**](classdynamics.md) 
* **class** [**reward**](classreward.md) 
* **namespace** [**sdm**](namespacesdm.md) _Namespace grouping all tools required for sequential decision making._   
  * **class** [**Algorithm**](classsdm_1_1Algorithm.md)   
  * **class** [**BinaryFunction**](classsdm_1_1BinaryFunction.md) 
  * **class** [**DQNMDP**](classsdm_1_1DQNMDP.md)   
  * **class** [**DecPOMDP**](classsdm_1_1DecPOMDP.md)   
  * **class** [**DecisionProcess**](classsdm_1_1DecisionProcess.md) _Decision process._   
  * **class** [**DeterministicDecisionRule**](classsdm_1_1DeterministicDecisionRule.md)   
  * **class** [**DiscreteAction**](classsdm_1_1DiscreteAction.md)   
  * **class** [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md) _The discrete space class give a way to keep all possible values of a finite space. In order to instantiate an object of this class, you must provide the constructor method, a the list of all available values._   
  * **struct** [**EpsGreedy**](structsdm_1_1EpsGreedy.md)   
  * **class** [**Function**](classsdm_1_1Function.md)   
  * **class** [**FunctionSpace**](classsdm_1_1FunctionSpace.md) _The class for function spaces. This is helpfull in case we need to enumerate all possible functions (only usable when input space and output space are_ [_**DiscreteSpace**_](classsdm_1_1DiscreteSpace.md) _)._  
  * **class** [**GymInterface**](classsdm_1_1GymInterface.md) _Provides a Gym like interface._   
  * **class** [**HSVI**](classsdm_1_1HSVI.md)   
  * **class** [**HistoryTree**](classsdm_1_1HistoryTree.md)   
  * **class** [**Initializer**](classsdm_1_1Initializer.md)   
  * **class** [**InteractiveWorld**](classsdm_1_1InteractiveWorld.md)   
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
  * **class** [**MappedVector**](classsdm_1_1MappedVector.md) _Mapped vectors are vectors that use map to store values of a vector._   
  * **class** [**MaxInitializer**](classsdm_1_1MaxInitializer.md)   
  * **class** [**MinInitializer**](classsdm_1_1MinInitializer.md)   
  * **class** [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md) _This class provide a way to instantiate multi discrete space (i.e. list of discrete spaces). Typically it is used to store a set of spaces, one by agent (i.e. action\_spaces in_ [_**POSG**_](classsdm_1_1POSG.md) _). This can be view as a set of discrete spaces or as a discrete space of joint items._  
  * **class** [**MultiSpace**](classsdm_1_1MultiSpace.md) _A multi-space is a set a spaces. Each space can be of any derived class of TSpace class. By default TSpace is set to_ [_**Space**_](classsdm_1_1Space.md) _, which means that any space can be used (can be composed of both discrete and continuous spaces)._[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _herites from_[_**Space**_](classsdm_1_1Space.md) _so you can even build hierarchical spaces like_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _of_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _(_[_**MultiSpace**_](classsdm_1_1MultiSpace.md) _&lt;MultiSpace&lt;Space&gt;&gt;&gt;)._  
  * **class** [**NDPOMDP**](classsdm_1_1NDPOMDP.md)   
    * **class** [**Node**](classsdm_1_1NDPOMDP_1_1Node.md)   
  * **class** [**ObservationDynamics**](classsdm_1_1ObservationDynamics.md)   
  * **class** [**POSG**](classsdm_1_1POSG.md) _Partially Observable Stochastic Game class._   
  * **class** [**PartiallyObservableProcess**](classsdm_1_1PartiallyObservableProcess.md) _Partially observable process._   
  * **class** [**RecursiveMap**](classsdm_1_1RecursiveMap.md) _The recursive map class (i.e. map&lt;T0, map&lt;T1, ..... , map&lt;TN-1, TN&gt;)_ 
  * **class** [**RecursiveMap&lt; T0, T1 &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_01_4.md) [_**RecursiveMap**_](classsdm_1_1RecursiveMap.md) _specialization when it is simple map._  
  * **class** [**RecursiveMap&lt; T0, T1, T2, Ts... &gt;**](classsdm_1_1RecursiveMap_3_01T0_00_01T1_00_01T2_00_01Ts_8_8_8_01_4.md)   
  * **class** [**ReplayMemory**](classsdm_1_1ReplayMemory.md)   
  * **class** [**Reward**](classsdm_1_1Reward.md)   
  * **class** [**Space**](classsdm_1_1Space.md) _This class is an abstract interface that all spaces should inherite. It gives some useful general methods to use generic spaces in your algorithms._   
  * **class** [**StateDynamics**](classsdm_1_1StateDynamics.md)   
  * **class** [**StochasticProcess**](classsdm_1_1StochasticProcess.md)   
  * **class** [**TabularValueFunction**](classsdm_1_1TabularValueFunction.md) _Tabular value function are functions of state and action that use a vector representation to store the values._   
  * **class** [**TransformedMDP**](classsdm_1_1TransformedMDP.md)   
  * **class** [**Tree**](classsdm_1_1Tree.md) _Generic_ [_**Tree**_](classsdm_1_1Tree.md) _class._  
  * **class** [**UnaryFunction**](classsdm_1_1UnaryFunction.md) 
  * **class** [**ValueFunction**](classsdm_1_1ValueFunction.md) _This class is the abstract class of value function. All value function must derived this class._   
  * **class** [**ValueInitializer**](classsdm_1_1ValueInitializer.md)   
  * **class** [**Variations**](classsdm_1_1Variations.md)   
  * **class** [**VectorImpl**](classsdm_1_1VectorImpl.md) _The vector interface. To be considered as a vector in SDM'Studio, a class must implement all the following functions._   
  * **class** [**World**](classsdm_1_1World.md)   
  * **class** [**ZSPOSG**](classsdm_1_1ZSPOSG.md)   
  * **class** [**ZeroInitializer**](classsdm_1_1ZeroInitializer.md) 
  * **namespace** [**algo**](namespacesdm_1_1algo.md)   
  * **namespace** [**ast**](namespacesdm_1_1ast.md)   
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
  * **namespace** [**common**](namespacesdm_1_1common.md)   
  * **namespace** [**exception**](namespacesdm_1_1exception.md) _Namespace for exceptions._   
    * **class** [**Except**](classsdm_1_1exception_1_1Except.md) _Base exception class._   
    * **class** [**FileNotFoundException**](classsdm_1_1exception_1_1FileNotFoundException.md) _Developpers use this class to raise a file not found exception._   
    * **class** [**NotImplementedException**](classsdm_1_1exception_1_1NotImplementedException.md)   
    * **class** [**ParsingException**](classsdm_1_1exception_1_1ParsingException.md) _Developpers use this class to raise a parsing exception._   
  * **class** [**feedback**](classsdm_1_1feedback.md)   
  * **class** [**matrix**](classsdm_1_1matrix.md)   
  * **namespace** [**parser**](namespacesdm_1_1parser.md)   
    * **struct** [**error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md)   
  * **class** [**sdmsVector**](classsdm_1_1sdmsVector.md) _Vector that implement the_ [_**sdm::VectorImpl**_](classsdm_1_1VectorImpl.md) _interface._  
  * **namespace** [**tools**](namespacesdm_1_1tools.md)   
  * **class** [**vector**](classsdm_1_1vector.md)   
* **namespace** [**sdms**](namespacesdms.md) _Namespace grouping all tools required for sequential decision making._ 
* **class** [**variation**](classvariation.md) _iterator of Variations._ 