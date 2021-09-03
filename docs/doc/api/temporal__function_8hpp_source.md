
# File temporal\_function.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**temporal\_function.hpp**](temporal__function_8hpp.md)

[Go to the documentation of this file.](temporal__function_8hpp.md) 


````cpp
#include <sdm/types.hpp>
#include <sdm/core/function.hpp>

namespace sdm
{
    template <typename TFunction>
    class TemporalFunction : public Function<number, TFunction>
    {
    public:
        TemporalFunction(const number horizon = 0);

        TFunction &&getFunction(const number &t) const;

        const TFunction &operator()(const number &t);

        void setFunction(const TFunction &function, number t) const;

    protected:
        number getIndex(number t) const;

        number horizon_;
        std::vector<TFunction> temporal_function_;
    };
}
````

