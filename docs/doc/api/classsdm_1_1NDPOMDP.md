
<NavBar active_item_id="2"/>

# Class sdm::NDPOMDP


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**NDPOMDP**](classsdm_1_1NDPOMDP.md)





* `#include <ndpomdp.hpp>`



Inherits the following classes: [sdm::World](classsdm_1_1World.md)







## Classes

| Type | Name |
| ---: | :--- |
| class | [**Node**](classsdm_1_1NDPOMDP_1_1Node.md) <br> |





## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**act\_space\_**](classsdm_1_1NDPOMDP.md#variable-act-space-)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**agent\_space\_**](classsdm_1_1NDPOMDP.md#variable-agent-space-)  <br> |
|  double | [**discount**](classsdm_1_1NDPOMDP.md#variable-discount)  <br>_Discount factor._  |
|  std::unordered\_map&lt; std::string, std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**dynamics\_generator**](classsdm_1_1NDPOMDP.md#variable-dynamics-generator)  <br> |
|  std::ifstream | [**input\_file**](classsdm_1_1NDPOMDP.md#variable-input-file)  <br> |
|  [**action**](namespacesdm.md#typedef-action) | [**maxActions**](classsdm_1_1NDPOMDP.md#variable-maxactions)  <br> |
|  [**Node**](classsdm_1_1NDPOMDP_1_1Node.md) \* | [**n**](classsdm_1_1NDPOMDP.md#variable-n)  <br> |
|  [**agent**](namespacesdm.md#typedef-agent) \* | [**nodes**](classsdm_1_1NDPOMDP.md#variable-nodes)  <br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**obs\_space\_**](classsdm_1_1NDPOMDP.md#variable-obs-space-)  <br> |
|  std::map&lt; std::string, std::unordered\_set&lt; [**observation**](namespacesdm.md#typedef-observation) &gt; &gt; | [**observationSuccessor**](classsdm_1_1NDPOMDP.md#variable-observationsuccessor)  <br> |
|  std::map&lt; std::string, double &gt; | [**observationsmatrix**](classsdm_1_1NDPOMDP.md#variable-observationsmatrix)  <br> |
|  double | [**rMax**](classsdm_1_1NDPOMDP.md#variable-rmax)   = = 45<br> |
|  [**agent**](namespacesdm.md#typedef-agent) | [**root**](classsdm_1_1NDPOMDP.md#variable-root)  <br> |
|  std::discrete\_distribution&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**start\_generator**](classsdm_1_1NDPOMDP.md#variable-start-generator)  <br> |
|  Vector | [**startingBelief**](classsdm_1_1NDPOMDP.md#variable-startingbelief)  <br> |
|  std::unordered\_set&lt; [**state**](namespacesdm.md#typedef-state) &gt; \* | [**stateSuccessor**](classsdm_1_1NDPOMDP.md#variable-statesuccessor)  <br> |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**state\_space\_**](classsdm_1_1NDPOMDP.md#variable-state-space-)  <br> |
|  [**horizon**](namespacesdm.md#typedef-horizon) | [**timeHorizon**](classsdm_1_1NDPOMDP.md#variable-timehorizon)  <br>_Planning horizon._  |
|  std::map&lt; int, int &gt; | [**transitionmatrix**](classsdm_1_1NDPOMDP.md#variable-transitionmatrix)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|   | [**NDPOMDP**](classsdm_1_1NDPOMDP.md#function-ndpomdp) (std::string) <br> |
|  void | [**createDAG**](classsdm_1_1NDPOMDP.md#function-createdag) () <br> |
| virtual void | [**execute**](classsdm_1_1NDPOMDP.md#function-execute) ([**action**](namespacesdm.md#typedef-action), [**feedback**](classsdm_1_1feedback.md) \*) <br> |
|  const [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; & | [**getActionSpace**](classsdm_1_1NDPOMDP.md#function-getactionspace) () const<br>_Getter for the observation spaces._  |
|  void | [**getData**](classsdm_1_1NDPOMDP.md#function-getdata) (std::string) <br> |
|  double | [**getDiscount**](classsdm_1_1NDPOMDP.md#function-getdiscount) () <br> |
|  std::tuple&lt; std::vector&lt; double &gt;, [**observation**](namespacesdm.md#typedef-observation), [**state**](namespacesdm.md#typedef-state) &gt; | [**getDynamicsGenerator**](classsdm_1_1NDPOMDP.md#function-getdynamicsgenerator-1-2) ([**number**](namespacesdm.md#typedef-number) state, [**number**](namespacesdm.md#typedef-number) jaction) <br> |
|  std::tuple&lt; [**state**](namespacesdm.md#typedef-state), [**observation**](namespacesdm.md#typedef-observation), [**observation**](namespacesdm.md#typedef-observation) &gt; | [**getDynamicsGenerator**](classsdm_1_1NDPOMDP.md#function-getdynamicsgenerator-2-2) ([**state**](namespacesdm.md#typedef-state), [**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action)) <br> |
|  double | [**getInitialBelief**](classsdm_1_1NDPOMDP.md#function-getinitialbelief) ([**state**](namespacesdm.md#typedef-state)) <br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumActions**](classsdm_1_1NDPOMDP.md#function-getnumactions-1-2) ([**number**](namespacesdm.md#typedef-number) agent) const<br>_Get the number of Actions for a specific agent._  |
|  std::vector&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**getNumActions**](classsdm_1_1NDPOMDP.md#function-getnumactions-2-2) () const<br>_Get the number of Action for every agents._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumAgents**](classsdm_1_1NDPOMDP.md#function-getnumagents) () const<br> |
|  [**number**](namespacesdm.md#typedef-number) | [**getNumJActions**](classsdm_1_1NDPOMDP.md#function-getnumjactions) () const<br>_Get the number of joint observations._  |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumObservations**](classsdm_1_1NDPOMDP.md#function-getnumobservations) ([**number**](namespacesdm.md#typedef-number) agent) const<br> |
| virtual [**number**](namespacesdm.md#typedef-number) | [**getNumStates**](classsdm_1_1NDPOMDP.md#function-getnumstates) () const<br> |
|  double | [**getObservation**](classsdm_1_1NDPOMDP.md#function-getobservation) ([**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**state**](namespacesdm.md#typedef-state), [**observation**](namespacesdm.md#typedef-observation)) <br> |
|  std::unordered\_set&lt; [**observation**](namespacesdm.md#typedef-observation) &gt; | [**getObservationSuccessor**](classsdm_1_1NDPOMDP.md#function-getobservationsuccessor) ([**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**state**](namespacesdm.md#typedef-state)) <br> |
|  double | [**getP**](classsdm_1_1NDPOMDP.md#function-getp) ([**state**](namespacesdm.md#typedef-state), [**action**](namespacesdm.md#typedef-action), [**state**](namespacesdm.md#typedef-state)) <br> |
|  [**state**](namespacesdm.md#typedef-state) | [**getPGenerator**](classsdm_1_1NDPOMDP.md#function-getpgenerator) ([**state**](namespacesdm.md#typedef-state)) <br> |
|  double | [**getQ**](classsdm_1_1NDPOMDP.md#function-getq) ([**state**](namespacesdm.md#typedef-state), [**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**observation**](namespacesdm.md#typedef-observation), [**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**observation**](namespacesdm.md#typedef-observation)) <br> |
|  [**observation**](namespacesdm.md#typedef-observation) | [**getQGenerator**](classsdm_1_1NDPOMDP.md#function-getqgenerator) ([**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**state**](namespacesdm.md#typedef-state)) <br> |
|  double | [**getReward**](classsdm_1_1NDPOMDP.md#function-getreward) ([**state**](namespacesdm.md#typedef-state), [**agent**](namespacesdm.md#typedef-agent), [**agent**](namespacesdm.md#typedef-agent), [**action**](namespacesdm.md#typedef-action), [**action**](namespacesdm.md#typedef-action)) <br> |
|  std::unordered\_set&lt; [**state**](namespacesdm.md#typedef-state) &gt; | [**getStateSuccessor**](classsdm_1_1NDPOMDP.md#function-getstatesuccessor) ([**state**](namespacesdm.md#typedef-state)) <br> |
|  std::vector&lt; std::pair&lt; [**number**](namespacesdm.md#typedef-number), [**number**](namespacesdm.md#typedef-number) &gt; &gt; | [**getUniqueValidNeighbors**](classsdm_1_1NDPOMDP.md#function-getuniquevalidneighbors) () <br> |
| virtual [**state**](namespacesdm.md#typedef-state) | [**init**](classsdm_1_1NDPOMDP.md#function-init) () <br> |
|  void | [**printDAG**](classsdm_1_1NDPOMDP.md#function-printdag) ([**agent**](namespacesdm.md#typedef-agent)) <br> |
|  void | [**setDiscount**](classsdm_1_1NDPOMDP.md#function-setdiscount) (double) <br> |
|  void | [**setupDynamicsGenerator**](classsdm_1_1NDPOMDP.md#function-setupdynamicsgenerator) () <br> |









## Protected Attributes inherited from sdm::World

See [sdm::World](classsdm_1_1World.md)

| Type | Name |
| ---: | :--- |
|  [**state**](namespacesdm.md#typedef-state) | [**internal**](classsdm_1_1World.md#variable-internal)   = = 0<br> |







## Public Attributes Documentation


### variable act\_space\_ 


```cpp
MultiDiscreteSpace<number> sdm::NDPOMDP::act_space_;
```



### variable agent\_space\_ 


```cpp
DiscreteSpace<number> sdm::NDPOMDP::agent_space_;
```



### variable discount 


```cpp
double sdm::NDPOMDP::discount;
```



### variable dynamics\_generator 


```cpp
std::unordered_map<std::string, std::discrete_distribution<number> > sdm::NDPOMDP::dynamics_generator;
```



### variable input\_file 


```cpp
std::ifstream sdm::NDPOMDP::input_file;
```



### variable maxActions 


```cpp
action sdm::NDPOMDP::maxActions;
```



### variable n 


```cpp
Node* sdm::NDPOMDP::n;
```



### variable nodes 


```cpp
agent* sdm::NDPOMDP::nodes;
```



### variable obs\_space\_ 


```cpp
MultiDiscreteSpace<number> sdm::NDPOMDP::obs_space_;
```



### variable observationSuccessor 


```cpp
std::map<std::string, std::unordered_set<observation> > sdm::NDPOMDP::observationSuccessor;
```



### variable observationsmatrix 


```cpp
std::map<std::string, double> sdm::NDPOMDP::observationsmatrix;
```



### variable rMax 


```cpp
double sdm::NDPOMDP::rMax;
```



### variable root 


```cpp
agent sdm::NDPOMDP::root;
```



### variable start\_generator 


```cpp
std::discrete_distribution<number> sdm::NDPOMDP::start_generator;
```




**Parameters:**


* `dynamics_generator` 



        

### variable startingBelief 


```cpp
Vector sdm::NDPOMDP::startingBelief;
```



### variable stateSuccessor 


```cpp
std::unordered_set<state>* sdm::NDPOMDP::stateSuccessor;
```



### variable state\_space\_ 


```cpp
DiscreteSpace<number> sdm::NDPOMDP::state_space_;
```



### variable timeHorizon 


```cpp
horizon sdm::NDPOMDP::timeHorizon;
```



### variable transitionmatrix 


```cpp
std::map<int, int> sdm::NDPOMDP::transitionmatrix;
```


## Public Functions Documentation


### function NDPOMDP 


```cpp
sdm::NDPOMDP::NDPOMDP (
    std::string
) 
```



### function createDAG 


```cpp
void sdm::NDPOMDP::createDAG () 
```



### function execute 


```cpp
virtual void sdm::NDPOMDP::execute (
    action,
    feedback *
) 
```



### function getActionSpace 


```cpp
const MultiDiscreteSpace < number > & sdm::NDPOMDP::getActionSpace () const
```



### function getData 


```cpp
void sdm::NDPOMDP::getData (
    std::string
) 
```



### function getDiscount 


```cpp
double sdm::NDPOMDP::getDiscount () 
```



### function getDynamicsGenerator [1/2]


```cpp
std::tuple< std::vector< double >, observation , state > sdm::NDPOMDP::getDynamicsGenerator (
    number state,
    number jaction
) 
```



### function getDynamicsGenerator [2/2]


```cpp
std::tuple< state , observation , observation > sdm::NDPOMDP::getDynamicsGenerator (
    state,
    agent,
    action,
    agent,
    action
) 
```



### function getInitialBelief 


```cpp
double sdm::NDPOMDP::getInitialBelief (
    state
) 
```



### function getNumActions [1/2]


```cpp
number sdm::NDPOMDP::getNumActions (
    number agent
) const
```



### function getNumActions [2/2]


```cpp
std::vector< number > sdm::NDPOMDP::getNumActions () const
```



### function getNumAgents 


```cpp
virtual number sdm::NDPOMDP::getNumAgents () const
```



### function getNumJActions 


```cpp
number sdm::NDPOMDP::getNumJActions () const
```



### function getNumObservations 


```cpp
virtual number sdm::NDPOMDP::getNumObservations (
    number agent
) const
```



### function getNumStates 


```cpp
virtual number sdm::NDPOMDP::getNumStates () const
```



### function getObservation 


```cpp
double sdm::NDPOMDP::getObservation (
    agent,
    action,
    state,
    observation
) 
```



### function getObservationSuccessor 


```cpp
std::unordered_set< observation > sdm::NDPOMDP::getObservationSuccessor (
    agent,
    action,
    state
) 
```



### function getP 


```cpp
double sdm::NDPOMDP::getP (
    state,
    action,
    state
) 
```



### function getPGenerator 


```cpp
state sdm::NDPOMDP::getPGenerator (
    state
) 
```



### function getQ 


```cpp
double sdm::NDPOMDP::getQ (
    state,
    agent,
    action,
    observation,
    agent,
    action,
    observation
) 
```



### function getQGenerator 


```cpp
observation sdm::NDPOMDP::getQGenerator (
    agent,
    action,
    state
) 
```



### function getReward 


```cpp
double sdm::NDPOMDP::getReward (
    state,
    agent,
    agent,
    action,
    action
) 
```



### function getStateSuccessor 


```cpp
std::unordered_set< state > sdm::NDPOMDP::getStateSuccessor (
    state
) 
```



### function getUniqueValidNeighbors 


```cpp
std::vector< std::pair< number , number > > sdm::NDPOMDP::getUniqueValidNeighbors () 
```



### function init 


```cpp
virtual state sdm::NDPOMDP::init () 
```



### function printDAG 


```cpp
void sdm::NDPOMDP::printDAG (
    agent
) 
```



### function setDiscount 


```cpp
void sdm::NDPOMDP::setDiscount (
    double
) 
```



### function setupDynamicsGenerator 


```cpp
void sdm::NDPOMDP::setupDynamicsGenerator () 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/world/ndpomdp.hpp`