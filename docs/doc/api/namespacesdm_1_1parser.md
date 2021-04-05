
<NavBar active_item_id="2"/>

# Namespace sdm::parser


[**Class List**](annotated.md) **>** [**sdm**](namespacesdm.md) **>** [**parser**](namespacesdm_1_1parser.md)



_Namespace grouping all functions for parsing files._ 











## Classes

| Type | Name |
| ---: | :--- |
| struct | [**error\_handler\_base**](structsdm_1_1parser_1_1error__handler__base.md) <br> |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef x3::with\_context&lt; [**error\_handler\_tag**](namespacesdm_1_1parser.md#typedef-error-handler-tag), std::reference\_wrapper&lt; [**error\_handler\_type**](namespacesdm_1_1parser.md#typedef-error-handler-type) &gt; const, [**phrase\_context\_type**](namespacesdm_1_1parser.md#typedef-phrase-context-type) &gt;::type | [**context\_type**](namespacesdm_1_1parser.md#typedef-context-type)  <br> |
| typedef x3::rule&lt; dpomdp\_class, [**ast::dpomdp\_t**](structsdm_1_1ast_1_1dpomdp__t.md) &gt; | [**dpomdp\_type**](namespacesdm_1_1parser.md#typedef-dpomdp-type)  <br> |
| typedef x3::error\_handler&lt; Iterator &gt; | [**error\_handler**](namespacesdm_1_1parser.md#typedef-error-handler)  <br> |
| typedef x3::error\_handler\_tag | [**error\_handler\_tag**](namespacesdm_1_1parser.md#typedef-error-handler-tag)  <br> |
| typedef [**error\_handler**](namespacesdm_1_1parser.md#typedef-error-handler)&lt; [**iterator\_type**](namespacesdm_1_1parser.md#typedef-iterator-type) &gt; | [**error\_handler\_type**](namespacesdm_1_1parser.md#typedef-error-handler-type)  <br> |
| typedef std::string::const\_iterator | [**iterator\_type**](namespacesdm_1_1parser.md#typedef-iterator-type)  <br> |
| typedef x3::phrase\_parse\_context&lt; x3::ascii::space\_type &gt;::type | [**phrase\_context\_type**](namespacesdm_1_1parser.md#typedef-phrase-context-type)  <br> |


## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**dpomdp\_type**](namespacesdm_1_1parser.md#typedef-dpomdp-type) const | [**dpomdp\_t**](namespacesdm_1_1parser.md#variable-dpomdp-t)   = = "dpomdp\_t"<br> |
|  auto const | [**dpomdp\_t\_def**](namespacesdm_1_1parser.md#variable-dpomdp-t-def)   = =
        lit("agents") &gt;&gt; ':' &gt;&gt; number\_or\_vector\_of\_names &gt;&gt; lit("discount") &gt;&gt; ':' &gt;&gt; float\_
        &gt;&gt; lit("values") &gt;&gt; ':' &gt;&gt; quoted\_string
        &gt;&gt; lit("states") &gt;&gt; ':' &gt;&gt; number\_or\_vector\_of\_names
        &gt;&gt; lit("start") &gt;&gt; ':' &gt;&gt; vector\_stochastic
        &gt;&gt; lit("actions") &gt;&gt; ':' &gt;&gt; numbers\_or\_names
        &gt;&gt; lit("observations") &gt;&gt; ':' &gt;&gt; numbers\_or\_names
        &gt;&gt; [**transition\_t**](namespacesdm_1_1parser.md#variable-transition-t)
        &gt;&gt; [**observation\_t**](namespacesdm_1_1parser.md#variable-observation-t)
        &gt;&gt; [**reward\_t**](namespacesdm_1_1parser.md#variable-reward-t)<br> |
|  x3::rule&lt; identifier\_t\_class, [**ast::identifier\_t**](structsdm_1_1ast_1_1identifier__t.md) &gt; const | [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t)   = = "identifier\_t"<br> |
|  auto const | [**identifier\_t\_def**](namespacesdm_1_1parser.md#variable-identifier-t-def)   = = [**quoted\_string**](namespacesdm_1_1parser.md#variable-quoted-string) | ushort\_<br> |
|  x3::rule&lt; identifiers\_t\_class, [**ast::identifiers\_t**](namespacesdm_1_1ast.md#typedef-identifiers-t) &gt; const | [**identifiers\_t**](namespacesdm_1_1parser.md#variable-identifiers-t)   = = "identifiers\_t"<br> |
|  auto const | [**identifiers\_t\_def**](namespacesdm_1_1parser.md#variable-identifiers-t-def)   = = lexeme[[**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) % \*blank]<br> |
|  x3::rule&lt; matrix\_t\_class, [**ast::matrix\_t**](structsdm_1_1ast_1_1matrix__t.md) &gt; const | [**matrix\_t**](namespacesdm_1_1parser.md#variable-matrix-t)   = = "matrix\_t"<br> |
|  auto const | [**matrix\_t\_def**](namespacesdm_1_1parser.md#variable-matrix-t-def)   = = [**quoted\_string**](namespacesdm_1_1parser.md#variable-quoted-string) | [**vector\_of\_vector\_of\_reals**](namespacesdm_1_1parser.md#variable-vector-of-vector-of-reals)<br> |
|  auto const | [**number\_or\_vector\_of\_names**](namespacesdm_1_1parser.md#variable-number-or-vector-of-names)   = = ushort\_ | [**vector\_of\_names**](namespacesdm_1_1parser.md#variable-vector-of-names)<br> |
|  auto const | [**numbers\_or\_names**](namespacesdm_1_1parser.md#variable-numbers-or-names)   = = [**vector\_of\_numbers**](namespacesdm_1_1parser.md#variable-vector-of-numbers) | [**vector\_of\_vector\_of\_names**](namespacesdm_1_1parser.md#variable-vector-of-vector-of-names)<br> |
|  x3::rule&lt; observation\_entry\_1\_t\_class, [**ast::observation\_entry\_1\_t**](structsdm_1_1ast_1_1observation__entry__1__t.md) &gt; const | [**observation\_entry\_1\_t**](namespacesdm_1_1parser.md#variable-observation-entry-1-t)   = = "observation\_entry\_1\_t"<br> |
|  auto const | [**observation\_entry\_1\_t\_def**](namespacesdm_1_1parser.md#variable-observation-entry-1-t-def)   = =
        lit("O:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) &gt;&gt; ':' &gt;&gt; [**identifiers\_t**](namespacesdm_1_1parser.md#variable-identifiers-t) &gt;&gt; ':' &gt;&gt; float\_<br> |
|  x3::rule&lt; observation\_entry\_2\_t\_class, [**ast::observation\_entry\_2\_t**](structsdm_1_1ast_1_1observation__entry__2__t.md) &gt; const | [**observation\_entry\_2\_t**](namespacesdm_1_1parser.md#variable-observation-entry-2-t)   = = "observation\_entry\_2\_t"<br> |
|  auto const | [**observation\_entry\_2\_t\_def**](namespacesdm_1_1parser.md#variable-observation-entry-2-t-def)   = =
        lit("O:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) &gt;&gt; ':' &gt;&gt; [**vector\_stochastic**](namespacesdm_1_1parser.md#variable-vector-stochastic)<br> |
|  x3::rule&lt; observation\_entry\_3\_t\_class, [**ast::observation\_entry\_3\_t**](structsdm_1_1ast_1_1observation__entry__3__t.md) &gt; const | [**observation\_entry\_3\_t**](namespacesdm_1_1parser.md#variable-observation-entry-3-t)   = = "observation\_entry\_3\_t"<br> |
|  auto const | [**observation\_entry\_3\_t\_def**](namespacesdm_1_1parser.md#variable-observation-entry-3-t-def)   = =
        lit("O:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**matrix\_t**](namespacesdm_1_1parser.md#variable-matrix-t)<br> |
|  x3::rule&lt; observation\_entry\_t\_class, [**ast::observation\_entry\_t**](structsdm_1_1ast_1_1observation__entry__t.md) &gt; const | [**observation\_entry\_t**](namespacesdm_1_1parser.md#variable-observation-entry-t)   = = "observation\_entry\_t"<br> |
|  auto const | [**observation\_entry\_t\_def**](namespacesdm_1_1parser.md#variable-observation-entry-t-def)   = = [**observation\_entry\_1\_t**](namespacesdm_1_1parser.md#variable-observation-entry-1-t) | [**observation\_entry\_2\_t**](namespacesdm_1_1parser.md#variable-observation-entry-2-t) | [**observation\_entry\_3\_t**](namespacesdm_1_1parser.md#variable-observation-entry-3-t)<br> |
|  x3::rule&lt; observation\_t\_class, [**ast::observation\_t**](namespacesdm_1_1ast.md#typedef-observation-t) &gt; const | [**observation\_t**](namespacesdm_1_1parser.md#variable-observation-t)   = = "observation\_t"<br> |
|  auto const | [**observation\_t\_def**](namespacesdm_1_1parser.md#variable-observation-t-def)   = = +[**observation\_entry\_t**](namespacesdm_1_1parser.md#variable-observation-entry-t)<br> |
|  auto const | [**quoted\_string**](namespacesdm_1_1parser.md#variable-quoted-string)   = = lexeme['"' &gt;&gt; \*(char\_ - '"') &gt;&gt; '"']<br> |
|  x3::rule&lt; reward\_entry\_1\_t\_class, [**ast::reward\_entry\_1\_t**](structsdm_1_1ast_1_1reward__entry__1__t.md) &gt; const | [**reward\_entry\_1\_t**](namespacesdm_1_1parser.md#variable-reward-entry-1-t)   = = "reward\_entry\_1\_t"<br> |
|  auto const | [**reward\_entry\_1\_t\_def**](namespacesdm_1_1parser.md#variable-reward-entry-1-t-def)   = =
        lit("R:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) &gt;&gt; ':' &gt;&gt; float\_<br> |
|  x3::rule&lt; reward\_entry\_2\_t\_class, [**ast::reward\_entry\_2\_t**](structsdm_1_1ast_1_1reward__entry__2__t.md) &gt; const | [**reward\_entry\_2\_t**](namespacesdm_1_1parser.md#variable-reward-entry-2-t)   = = "reward\_entry\_2\_t"<br> |
|  auto const | [**reward\_entry\_2\_t\_def**](namespacesdm_1_1parser.md#variable-reward-entry-2-t-def)   = =
        lit("R:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**vector\_stochastic**](namespacesdm_1_1parser.md#variable-vector-stochastic)<br> |
|  x3::rule&lt; reward\_entry\_t\_class, [**ast::reward\_entry\_t**](structsdm_1_1ast_1_1reward__entry__t.md) &gt; const | [**reward\_entry\_t**](namespacesdm_1_1parser.md#variable-reward-entry-t)   = = "reward\_entry\_t"<br> |
|  auto const | [**reward\_entry\_t\_def**](namespacesdm_1_1parser.md#variable-reward-entry-t-def)   = = [**reward\_entry\_1\_t**](namespacesdm_1_1parser.md#variable-reward-entry-1-t) | [**reward\_entry\_2\_t**](namespacesdm_1_1parser.md#variable-reward-entry-2-t)<br> |
|  x3::rule&lt; reward\_t\_class, [**ast::reward\_t**](namespacesdm_1_1ast.md#typedef-reward-t) &gt; const | [**reward\_t**](namespacesdm_1_1parser.md#variable-reward-t)   = = "reward\_t"<br> |
|  auto const | [**reward\_t\_def**](namespacesdm_1_1parser.md#variable-reward-t-def)   = = +[**reward\_entry\_t**](namespacesdm_1_1parser.md#variable-reward-entry-t)<br> |
|  auto const | [**star**](namespacesdm_1_1parser.md#variable-star)   = = +(char\_('\*'))<br> |
|  x3::rule&lt; transition\_entry\_1\_t\_class, [**ast::transition\_entry\_1\_t**](structsdm_1_1ast_1_1transition__entry__1__t.md) &gt; const | [**transition\_entry\_1\_t**](namespacesdm_1_1parser.md#variable-transition-entry-1-t)   = = "transition\_entry\_1\_t"<br> |
|  auto const | [**transition\_entry\_1\_t\_def**](namespacesdm_1_1parser.md#variable-transition-entry-1-t-def)   = =
        lit("T:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) &gt;&gt; ':' &gt;&gt; [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) &gt;&gt; ':' &gt;&gt; float\_<br> |
|  x3::rule&lt; transition\_entry\_2\_t\_class, [**ast::transition\_entry\_2\_t**](structsdm_1_1ast_1_1transition__entry__2__t.md) &gt; const | [**transition\_entry\_2\_t**](namespacesdm_1_1parser.md#variable-transition-entry-2-t)   = = "transition\_entry\_2\_t"<br> |
|  auto const | [**transition\_entry\_2\_t\_def**](namespacesdm_1_1parser.md#variable-transition-entry-2-t-def)   = =
        lit("T:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**identifier\_t**](namespacesdm_1_1parser.md#variable-identifier-t) &gt;&gt; ':' &gt;&gt; [**vector\_stochastic**](namespacesdm_1_1parser.md#variable-vector-stochastic)<br> |
|  x3::rule&lt; transition\_entry\_3\_t\_class, [**ast::transition\_entry\_3\_t**](structsdm_1_1ast_1_1transition__entry__3__t.md) &gt; const | [**transition\_entry\_3\_t**](namespacesdm_1_1parser.md#variable-transition-entry-3-t)   = = "transition\_entry\_3\_t"<br> |
|  auto const | [**transition\_entry\_3\_t\_def**](namespacesdm_1_1parser.md#variable-transition-entry-3-t-def)   = =
        lit("T:") &gt;&gt; identifiers\_t &gt;&gt; ':' &gt;&gt; [**matrix\_t**](namespacesdm_1_1parser.md#variable-matrix-t)<br> |
|  x3::rule&lt; transition\_entry\_t\_class, [**ast::transition\_entry\_t**](structsdm_1_1ast_1_1transition__entry__t.md) &gt; const | [**transition\_entry\_t**](namespacesdm_1_1parser.md#variable-transition-entry-t)   = = "transition\_entry\_t"<br> |
|  auto const | [**transition\_entry\_t\_def**](namespacesdm_1_1parser.md#variable-transition-entry-t-def)   = = [**transition\_entry\_1\_t**](namespacesdm_1_1parser.md#variable-transition-entry-1-t) | [**transition\_entry\_2\_t**](namespacesdm_1_1parser.md#variable-transition-entry-2-t) | [**transition\_entry\_3\_t**](namespacesdm_1_1parser.md#variable-transition-entry-3-t)<br> |
|  x3::rule&lt; transition\_t\_class, [**ast::transition\_t**](namespacesdm_1_1ast.md#typedef-transition-t) &gt; const | [**transition\_t**](namespacesdm_1_1parser.md#variable-transition-t)   = = "transition\_t"<br> |
|  auto const | [**transition\_t\_def**](namespacesdm_1_1parser.md#variable-transition-t-def)   = = +[**transition\_entry\_t**](namespacesdm_1_1parser.md#variable-transition-entry-t)<br> |
|  auto const | [**vector\_of\_names**](namespacesdm_1_1parser.md#variable-vector-of-names)   = = lexeme[[**quoted\_string**](namespacesdm_1_1parser.md#variable-quoted-string) % +blank]<br> |
|  auto const | [**vector\_of\_numbers**](namespacesdm_1_1parser.md#variable-vector-of-numbers)   = = lexeme[ushort\_ % eol]<br> |
|  auto const | [**vector\_of\_reals**](namespacesdm_1_1parser.md#variable-vector-of-reals)   = = lexeme[float\_ % +blank]<br> |
|  auto const | [**vector\_of\_vector\_of\_names**](namespacesdm_1_1parser.md#variable-vector-of-vector-of-names)   = = lexeme[[**vector\_of\_names**](namespacesdm_1_1parser.md#variable-vector-of-names) % eol]<br> |
|  auto const | [**vector\_of\_vector\_of\_reals**](namespacesdm_1_1parser.md#variable-vector-of-vector-of-reals)   = = lexeme[[**vector\_of\_reals**](namespacesdm_1_1parser.md#variable-vector-of-reals) % eol]<br> |
|  auto const | [**vector\_stochastic**](namespacesdm_1_1parser.md#variable-vector-stochastic)   = = [**quoted\_string**](namespacesdm_1_1parser.md#variable-quoted-string) | [**vector\_of\_reals**](namespacesdm_1_1parser.md#variable-vector-of-reals)<br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  std::shared\_ptr&lt; [**sdm::DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**parse\_file**](namespacesdm_1_1parser.md#function-parse-file) (char const \* filename) <br> |
|  std::shared\_ptr&lt; [**sdm::DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**parse\_file**](namespacesdm_1_1parser.md#function-parse-file) (std::string filename) <br> |
|  std::shared\_ptr&lt; [**sdm::DiscreteDecPOMDP**](classsdm_1_1DiscreteDecPOMDP.md) &gt; | [**parse\_string**](namespacesdm_1_1parser.md#function-parse-string) (std::string storage) <br> |








## Public Types Documentation


### typedef context\_type 


```cpp
typedef x3::with_context<error_handler_tag, std::reference_wrapper<error_handler_type> const, phrase_context_type>::type sdm::parser::context_type;
```



### typedef dpomdp\_type 


```cpp
typedef x3::rule<dpomdp_class, ast::dpomdp_t> sdm::parser::dpomdp_type;
```



### typedef error\_handler 


```cpp
using sdm::parser::error_handler = typedef x3::error_handler<Iterator>;
```



### typedef error\_handler\_tag 


```cpp
using sdm::parser::error_handler_tag = typedef x3::error_handler_tag;
```



### typedef error\_handler\_type 


```cpp
typedef error_handler<iterator_type> sdm::parser::error_handler_type;
```



### typedef iterator\_type 


```cpp
typedef std::string::const_iterator sdm::parser::iterator_type;
```



### typedef phrase\_context\_type 


```cpp
typedef x3::phrase_parse_context<x3::ascii::space_type>::type sdm::parser::phrase_context_type;
```


## Public Attributes Documentation


### variable dpomdp\_t 


```cpp
dpomdp_type const sdm::parser::dpomdp_t;
```



### variable dpomdp\_t\_def 


```cpp
auto const sdm::parser::dpomdp_t_def;
```



### variable identifier\_t 


```cpp
x3::rule<identifier_t_class, ast::identifier_t> const sdm::parser::identifier_t;
```



### variable identifier\_t\_def 


```cpp
auto const sdm::parser::identifier_t_def;
```



### variable identifiers\_t 


```cpp
x3::rule<identifiers_t_class, ast::identifiers_t> const sdm::parser::identifiers_t;
```



### variable identifiers\_t\_def 


```cpp
auto const sdm::parser::identifiers_t_def;
```



### variable matrix\_t 


```cpp
x3::rule<matrix_t_class, ast::matrix_t> const sdm::parser::matrix_t;
```



### variable matrix\_t\_def 


```cpp
auto const sdm::parser::matrix_t_def;
```



### variable number\_or\_vector\_of\_names 


```cpp
auto const sdm::parser::number_or_vector_of_names;
```



### variable numbers\_or\_names 


```cpp
auto const sdm::parser::numbers_or_names;
```



### variable observation\_entry\_1\_t 


```cpp
x3::rule<observation_entry_1_t_class, ast::observation_entry_1_t> const sdm::parser::observation_entry_1_t;
```



### variable observation\_entry\_1\_t\_def 


```cpp
auto const sdm::parser::observation_entry_1_t_def;
```



### variable observation\_entry\_2\_t 


```cpp
x3::rule<observation_entry_2_t_class, ast::observation_entry_2_t> const sdm::parser::observation_entry_2_t;
```



### variable observation\_entry\_2\_t\_def 


```cpp
auto const sdm::parser::observation_entry_2_t_def;
```



### variable observation\_entry\_3\_t 


```cpp
x3::rule<observation_entry_3_t_class, ast::observation_entry_3_t> const sdm::parser::observation_entry_3_t;
```



### variable observation\_entry\_3\_t\_def 


```cpp
auto const sdm::parser::observation_entry_3_t_def;
```



### variable observation\_entry\_t 


```cpp
x3::rule<observation_entry_t_class, ast::observation_entry_t> const sdm::parser::observation_entry_t;
```



### variable observation\_entry\_t\_def 


```cpp
auto const sdm::parser::observation_entry_t_def;
```



### variable observation\_t 


```cpp
x3::rule<observation_t_class, ast::observation_t> const sdm::parser::observation_t;
```



### variable observation\_t\_def 


```cpp
auto const sdm::parser::observation_t_def;
```



### variable quoted\_string 


```cpp
auto const sdm::parser::quoted_string;
```



### variable reward\_entry\_1\_t 


```cpp
x3::rule<reward_entry_1_t_class, ast::reward_entry_1_t> const sdm::parser::reward_entry_1_t;
```



### variable reward\_entry\_1\_t\_def 


```cpp
auto const sdm::parser::reward_entry_1_t_def;
```



### variable reward\_entry\_2\_t 


```cpp
x3::rule<reward_entry_2_t_class, ast::reward_entry_2_t> const sdm::parser::reward_entry_2_t;
```



### variable reward\_entry\_2\_t\_def 


```cpp
auto const sdm::parser::reward_entry_2_t_def;
```



### variable reward\_entry\_t 


```cpp
x3::rule<reward_entry_t_class, ast::reward_entry_t> const sdm::parser::reward_entry_t;
```



### variable reward\_entry\_t\_def 


```cpp
auto const sdm::parser::reward_entry_t_def;
```



### variable reward\_t 


```cpp
x3::rule<reward_t_class, ast::reward_t> const sdm::parser::reward_t;
```



### variable reward\_t\_def 


```cpp
auto const sdm::parser::reward_t_def;
```



### variable star 


```cpp
auto const sdm::parser::star;
```



### variable transition\_entry\_1\_t 


```cpp
x3::rule<transition_entry_1_t_class, ast::transition_entry_1_t> const sdm::parser::transition_entry_1_t;
```



### variable transition\_entry\_1\_t\_def 


```cpp
auto const sdm::parser::transition_entry_1_t_def;
```



### variable transition\_entry\_2\_t 


```cpp
x3::rule<transition_entry_2_t_class, ast::transition_entry_2_t> const sdm::parser::transition_entry_2_t;
```



### variable transition\_entry\_2\_t\_def 


```cpp
auto const sdm::parser::transition_entry_2_t_def;
```



### variable transition\_entry\_3\_t 


```cpp
x3::rule<transition_entry_3_t_class, ast::transition_entry_3_t> const sdm::parser::transition_entry_3_t;
```



### variable transition\_entry\_3\_t\_def 


```cpp
auto const sdm::parser::transition_entry_3_t_def;
```



### variable transition\_entry\_t 


```cpp
x3::rule<transition_entry_t_class, ast::transition_entry_t> const sdm::parser::transition_entry_t;
```



### variable transition\_entry\_t\_def 


```cpp
auto const sdm::parser::transition_entry_t_def;
```



### variable transition\_t 


```cpp
x3::rule<transition_t_class, ast::transition_t> const sdm::parser::transition_t;
```



### variable transition\_t\_def 


```cpp
auto const sdm::parser::transition_t_def;
```



### variable vector\_of\_names 


```cpp
auto const sdm::parser::vector_of_names;
```



### variable vector\_of\_numbers 


```cpp
auto const sdm::parser::vector_of_numbers;
```



### variable vector\_of\_reals 


```cpp
auto const sdm::parser::vector_of_reals;
```



### variable vector\_of\_vector\_of\_names 


```cpp
auto const sdm::parser::vector_of_vector_of_names;
```



### variable vector\_of\_vector\_of\_reals 


```cpp
auto const sdm::parser::vector_of_vector_of_reals;
```



### variable vector\_stochastic 


```cpp
auto const sdm::parser::vector_stochastic;
```


## Public Functions Documentation


### function parse\_file 


```cpp
std::shared_ptr< sdm::DiscreteDecPOMDP > sdm::parser::parse_file (
    char const * filename
) 
```



### function parse\_file 


```cpp
std::shared_ptr< sdm::DiscreteDecPOMDP > sdm::parser::parse_file (
    std::string filename
) 
```



### function parse\_string 


```cpp
std::shared_ptr< sdm::DiscreteDecPOMDP > sdm::parser::parse_string (
    std::string storage
) 
```



------------------------------
The documentation for this class was generated from the following file `/home/dalbert/Documents/SDMStudio/sdms/src/sdm/parser/config.hpp`