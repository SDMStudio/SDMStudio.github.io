
# File boost\_serializable.hpp

[**File List**](files.md) **>** [**public**](dir_33715f1cc09e852083918bf432e54d5e.md) **>** [**boost\_serializable.hpp**](boost__serializable_8hpp.md)

[Go to the documentation of this file.](boost__serializable_8hpp.md) 


````cpp
#pragma once

#include <regex>
#include <iostream>
#include <fstream>

#include <boost/archive/text_iarchive.hpp>
#include <boost/archive/text_oarchive.hpp>
#include <boost/archive/binary_iarchive.hpp>
#include <boost/archive/binary_oarchive.hpp>
#include <boost/archive/xml_iarchive.hpp>
#include <boost/archive/xml_oarchive.hpp>
#include <boost/archive/text_iarchive.hpp>

namespace sdm
{
    template <class SerializableClass>
    class BoostSerializable
    {
    public:
        BoostSerializable() {}
        void save(std::string filename)
        {
            std::ofstream ofs(filename);
            if (regex_match(filename, std::regex(".*\\.txt$")) || regex_match(filename, std::regex(".*\\.TXT$")))
            {
                boost::archive::text_oarchive output_archive(ofs);
                this->serialize(output_archive, 0);
                // else if (regex_match(filename, std::regex(".*\\.xml$")) || regex_match(filename, std::regex(".*\\.XML$")))
                // {
                //     boost::archive::xml_oarchive output_archive(ofs);
                //     this->serialize(output_archive, 0);
                // }
            }
            else
            {
                boost::archive::binary_oarchive output_archive(ofs);
                this->serialize(output_archive, 0);
            }
            ofs.close();
        }

        void load(std::string filename)
        {
            std::ifstream ifs(filename);
            if (regex_match(filename, std::regex(".*\\.txt$")) || regex_match(filename, std::regex(".*\\.TXT$")))
            {
                boost::archive::text_iarchive input_archive(ifs);
                this->serialize(input_archive, 0);
                // else if (regex_match(filename, std::regex(".*\\.xml$")) || regex_match(filename, std::regex(".*\\.XML$")))
                // {
                //     boost::archive::xml_iarchive input_archive(ifs);
                //     this->serialize(input_archive, 0);
                // }
            }
            else
            {
                boost::archive::binary_iarchive input_archive(ifs);
                this->serialize(input_archive, 0);
            }
            ifs.close();
        }

    protected:
        friend class boost::serialization::access;

        template <class Archive>
        void serialize(Archive &archive, const unsigned int version)
        {
            std::cout << "Est ce que cela fonctionne ? " << std::endl;
            static_cast<SerializableClass *>(this)->serialize(archive, version);
        }
    };

}
````

