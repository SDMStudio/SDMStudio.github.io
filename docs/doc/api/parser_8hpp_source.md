
# File parser.hpp

[**File List**](files.md) **>** [**parser**](dir_6daa6254ddefc40233dd42d3ed88a5a9.md) **>** [**parser.hpp**](parser_8hpp.md)

[Go to the documentation of this file.](parser_8hpp.md) 


````cpp
/*=============================================================================
  Copyright (c) 2016 Jilles Steeve Dibangoye
  ==============================================================================*/
#pragma once

#include <sdm/parser/ast.hpp>
#include <sdm/world/mpomdp.hpp>
#include <sdm/world/networked_distributed_pomdp.hpp>
#include <boost/spirit/home/x3.hpp>

namespace sdm
{
  namespace x3 = boost::spirit::x3;

  namespace parser
  {
    struct dpomdp_class;

    typedef x3::rule<dpomdp_class, ast::dpomdp_t> dpomdp_type;

    BOOST_SPIRIT_DECLARE(dpomdp_type)

    std::shared_ptr<sdm::DecPOMDP> parse_string(std::string);

    std::shared_ptr<sdm::DecPOMDP> parse_file(char const *);
    
    std::shared_ptr<sdm::DecPOMDP> parse_file(std::string);

  } // namespace parser
} // namespace sdm
````

