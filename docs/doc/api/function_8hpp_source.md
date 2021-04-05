
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

        virtual output_type operator()(const input_type &) = 0;
    };

    template <class TInput1, class TInput2, class TOutput>
    class BinaryFunction : public Function<std::pair<TInput1, TInput2>, TOutput>
    {
    public:
        using input_type = std::pair<TInput1, TInput2>;
        using output_type = TOutput;

        virtual output_type operator()(const TInput1 &, const TInput2 &) = 0;

        output_type operator()(const input_type &p_input)
        {
            return this->operator()(p_input.first, p_input.second);
        }
    };
} // namespace sdm
````

