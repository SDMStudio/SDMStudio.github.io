
# File function.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**function.hpp**](function_8hpp.md)

[Go to the documentation of this file.](function_8hpp.md) 


````cpp
#pragma once

namespace sdm
{
    template <class TInput, class TOutput>
    class Function 
    {
    public:
        using input_type = TInput;
        using output_type = TOutput; 

        TOutput operator()(const TInput &);
    };
} // namespace sdm
````

