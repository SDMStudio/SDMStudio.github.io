
# File tools.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**tools.hpp**](tools_8hpp.md)

[Go to the documentation of this file.](tools_8hpp.md) 


````cpp

#pragma once

#include <string>
#include <cstdlib>
#include <fstream>
#include <sstream>
#include <iostream>
#include <set>

#include <sdm/utils/struct/vector.hpp>

namespace sdm
{
    namespace tools
    {
        bool hasExtension(std::string filename, std::string extension);

        void indentedOutput(std::ostream &outStream, const char *message, int num_indent = 1);

        std::string addIndent(std::string input_string, int num_indents = 1, std::string indent = "\t");

        std::string repeatString(const std::string &str, size_t times);

        std::string getPathTo(std::string base, std::string world_name, std::string formalism_name);

        template <typename T>
        std::vector<T> set2vector(const std::set<T> &set)
        {
            return std::vector<T>(set.begin(), set.end());
        }

        template <typename TKey, typename TValue>
        std::vector<TKey> extractKeys(const std::map<TKey, TValue> &input_map)
        {
            std::vector<TKey> retkey;
            for (auto const &element : input_map)
            {
                retkey.push_back(element.first);
            }
            return retkey;
        }

        template <typename TKey, typename TValue>
        std::vector<TValue> extractValues(const std::map<TKey, TValue> &input_map)
        {
            std::vector<TValue> retvalue;
            for (auto const &element : input_map)
            {
                retvalue.push_back(element.second);
            }
            return retvalue;
        }

    } // namespace tools
} // namespace sdm
````

