
# Namespace sdm::ast

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>



[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**ast**](namespacesdm_1_1ast.md)



_Namespace that is used by the parser._ 











## Classes

| Type | Name |
| ---: | :--- |
| struct | [**discrete\_space\_encoder**](structsdm_1_1ast_1_1discrete__space__encoder.md) <br>_encodes the input into a discrete space class_  |
| struct | [**dpomdp\_encoder**](structsdm_1_1ast_1_1dpomdp__encoder.md) <br> |
| struct | [**dpomdp\_printer**](structsdm_1_1ast_1_1dpomdp__printer.md) <br> |
| struct | [**dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) <br> |
| struct | [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) <br> |
| struct | [**item\_encode**](structsdm_1_1ast_1_1item__encode.md) <br>_encodes the input into a item index (string))_  |
| struct | [**joint\_item\_encode**](classsdm_1_1ast_1_1joint__item__encode.md) <br>_encodes the input into a joint element (vector of number)_  |
| struct | [**matrix\_encoder**](structsdm_1_1ast_1_1matrix__encoder.md) <br>_encodes the input into a mapped matrix_  |
| struct | [**matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) <br> |
| struct | [**multi\_discrete\_space\_encoder**](structsdm_1_1ast_1_1multi__discrete__space__encoder.md) <br>_encodes the input into a multi discrete space class_  |
| class | [**obs\_dynamics\_encoder**](classsdm_1_1ast_1_1obs__dynamics__encoder.md) <br> |
| struct | [**observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) <br> |
| struct | [**observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) <br> |
| struct | [**observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) <br> |
| struct | [**observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) <br> |
| struct | [**observation\_transition\_encoder**](structsdm_1_1ast_1_1observation__transition__encoder.md) <br>_encodes the input into an observation dynamic class_  |
| struct | [**real\_vector\_t**](structsdm_1_1ast_1_1real__vector__t.md) <br> |
| struct | [**reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) <br> |
| struct | [**reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) <br> |
| struct | [**reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) <br> |
| class | [**state\_dynamics\_encoder**](classsdm_1_1ast_1_1state__dynamics__encoder.md) <br>_encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_ |
| struct | [**state\_encoder**](structsdm_1_1ast_1_1state__encoder.md) <br>_encodes the input into a vector of number (vector of states) "\*" -&gt; [0,1,2,3,4,...,n] "s0" -&gt; [0] 0 -&gt; [0]_  |
| class | [**state\_transition\_encoder**](classsdm_1_1ast_1_1state__transition__encoder.md) <br>_encodes state transition dynamics (i.e._ [_**TabularStateDynamics**_](classsdm_1_1TabularStateDynamics.md) _class)_ |
| struct | [**str\_visitor**](structsdm_1_1ast_1_1str__visitor.md) <br> |
| struct | [**tabular\_reward\_encoder**](structsdm_1_1ast_1_1tabular__reward__encoder.md) <br> |
| struct | [**tabular\_rewards\_encoder**](structsdm_1_1ast_1_1tabular__rewards__encoder.md) <br> |
| struct | [**transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) <br> |
| struct | [**transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) <br> |
| struct | [**transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) <br> |
| struct | [**transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) <br> |
| struct | [**value\_t**](structsdm_1_1ast_1_1value__t.md) <br> |
| struct | [**values\_t**](structsdm_1_1ast_1_1values__t.md) <br> |
| struct | [**vector\_encoder**](structsdm_1_1ast_1_1vector__encoder.md) <br>_encodes the input into a mapped vector_  |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef std::vector&lt; [**identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) &gt; | [**identifiers\_t**](namespacesdm_1_1ast.md#typedef-identifiers-t)  <br> |
| typedef std::vector&lt; [**observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) &gt; | [**observation\_t**](namespacesdm_1_1ast.md#typedef-observation-t)  <br> |
| typedef std::vector&lt; [**reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) &gt; | [**reward\_t**](namespacesdm_1_1ast.md#typedef-reward-t)  <br> |
| typedef std::vector&lt; [**transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) &gt; | [**transition\_t**](namespacesdm_1_1ast.md#typedef-transition-t)  <br> |












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



------------------------------
The documentation for this class was generated from the following file `src/sdm/parser/ast.hpp`