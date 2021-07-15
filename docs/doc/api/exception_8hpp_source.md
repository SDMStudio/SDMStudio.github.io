
# File exception.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**exception.hpp**](exception_8hpp.md)

[Go to the documentation of this file.](exception_8hpp.md) 


````cpp

#pragma once

#include <string>
#include <exception>

namespace sdm
{
    namespace exception
    {

        class Exception : virtual public std::exception
        {

        protected:
            std::string error_message;

        public:
            explicit Exception(const std::string &msg_) : error_message(msg_)
            {
            }

            virtual const char *what() const throw()
            {
                return error_message.c_str();
            }
        };

        class NotImplementedException : public Exception
        {
        public:
            explicit NotImplementedException() : Exception("Not Implemented Exception") {}
        };

        class FileNotFoundException : public Exception
        {
        private:
            std::string file;

        public:
            explicit FileNotFoundException(std::string file_) : Exception("File \"" + file_ + "\" does not seem to exists."),
                                                                file(file_) {}
            std::string get_file() const { return file; }
        };

        class ParsingException : public Exception
        {
        protected:
            std::string line_details;

        public:
            explicit ParsingException(const std::string &line_details_ = "") : Exception("Parsing failed -> Stopped at: \"" + line_details_ + "\"\n"),
                                                                               line_details(line_details_) {}
            std::string get_line_details() const { return line_details; }
        };

    } // namespace exception
} // namespace sdm
````
