
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
        public:
            explicit Exception(const std::string &msg_);

            virtual const char *what() const throw();

        protected:
            std::string error_message;
        };

        class NotImplementedException : public Exception
        {
        public:
            explicit NotImplementedException();
        };

        class FileNotFoundException : public Exception
        {
        public:
            explicit FileNotFoundException(std::string file_);

            std::string get_file() const;
        private:
            std::string file;
        };

        class ParsingException : public Exception
        {
        public:
            explicit ParsingException(const std::string &line_details_ = "");

            std::string get_line_details() const;

        protected:
            std::string line_details;
        };

    } // namespace exception
} // namespace sdm
````

