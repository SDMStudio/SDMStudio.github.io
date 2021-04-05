
<NavBar active_item_id="2"/>

# Namespace sdm::ast


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md)















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) <br>_encodes the input into a discrete space class_  |
| struct | [**dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md) <br> |
| struct | [**dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md) <br> |
| struct | [**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) <br> |
| struct | [**element\_encoder**](structsdm_1_1ast_1_1element__encoder.md) <br>_encodes the input into a number (index)_  |
| struct | [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) <br> |
| struct | [**joint\_element\_encoder**](classsdm_1_1ast_1_1joint__element__encoder.md) <br>_encodes the input into a joint element (vector of number)_  |
| struct | [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) <br>_encodes the input into a matrix_  |
| struct | [**matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) <br> |
| struct | [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) <br>_encodes the input into a multi discrete space class_  |
| class | [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) <br> |
| struct | [**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) <br> |
| struct | [**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) <br> |
| struct | [**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) <br> |
| struct | [**observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) <br> |
| struct | [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) <br>_encodes the input into a dynamic class_  |
| struct | [**real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) <br> |
| struct | [**reward\_encoder**](structsdm_1_1ast_1_1reward__encoder.md) <br> |
| struct | [**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) <br> |
| struct | [**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) <br> |
| struct | [**reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) <br> |
| class | [**rewards\_encoder**](classsdm_1_1ast_1_1rewards__encoder.md) <br> |
| class | [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) <br> |
| struct | [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) <br>_encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_  |
| struct | [**state\_transition\_encoder**](structsdm_1_1ast_1_1state__transition__encoder.md) <br>_used to encode state transition dynamics (i.e._ [_**StateDynamics**_](classsdm_1_1StateDynamics.md) _class)_ |
| struct | [**str\_visitor**](structsdm_1_1ast_1_1str__visitor.md) <br> |
| struct | [**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) <br> |
| struct | [**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) <br> |
| struct | [**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) <br> |
| struct | [**transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) <br> |
| struct | [**value\_t**](structsdm_1_1ast_1_1value__t.md) <br> |
| struct | [**values\_t**](structsdm_1_1ast_1_1values__t.md) <br> |
| struct | [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) <br>_encodes the input into a vector_  |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::vector&lt; [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) &gt; | [**identifiers\_t**](namespacesdm_1_1ast.md#typedef-identifiers-t)  <br> |
| typedef std::vector&lt; [**observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) &gt; | [**observation\_t**](namespacesdm_1_1ast.md#typedef-observation-t)  <br> |
| typedef std::vector&lt; [**reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) &gt; | [**reward\_t**](namespacesdm_1_1ast.md#typedef-reward-t)  <br> |
| typedef std::vector&lt; [**transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) &gt; | [**transition\_t**](namespacesdm_1_1ast.md#typedef-transition-t)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  [**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**toNumberedSpace**](namespacesdm_1_1ast.md#function-tonumberedspace) ([**DiscreteSpace**](classsdm_1_1DiscreteSpace.md)&lt; std::string &gt; & old\_sp) <br> |
|  [**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; [**number**](namespacesdm.md#typedef-number) &gt; | [**toNumberedSpace**](namespacesdm_1_1ast.md#function-tonumberedspace) ([**MultiDiscreteSpace**](classsdm_1_1MultiDiscreteSpace.md)&lt; std::string &gt; & old\_sp) <br> |








## Public Types Documentation


### typedef identifiers\_t 


```cpp
typedef std::vector<identifier_t> sdm::ast::identifiers_t;
```



### typedef observation\_t 


```cpp
typedef std::vector<observation_entry_t> sdm::ast::observation_t;
```



### typedef reward\_t 


```cpp
typedef std::vector<reward_entry_t> sdm::ast::reward_t;
```



### typedef transition\_t 


```cpp
typedef std::vector<transition_entry_t> sdm::ast::transition_t;
```


## Public Functions Documentation


### function toNumberedSpace 


```cpp
DiscreteSpace < number > sdm::ast::toNumberedSpace (
    DiscreteSpace < std::string > & old_sp
) 
```



### function toNumberedSpace 


```cpp
MultiDiscreteSpace < number > sdm::ast::toNumberedSpace (
    MultiDiscreteSpace < std::string > & old_sp
) 
```



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/ast.hpp`