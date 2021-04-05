
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

namespace sdm
{
    namespace tools
    {
        std::string getPathTo(std::string base, std::string world_name, std::string formalism_name);

        bool hasExtension(std::string filename, std::string extension);

        std::string addIndent(std::string s, int num_indents, std::string indent = "\t");

        void indentedOutput(std::ostream &outStream, const char *message);

        std::string repeatString(const std::string &str, size_t times);

    } // namespace tools
} // namespace sdm
````

