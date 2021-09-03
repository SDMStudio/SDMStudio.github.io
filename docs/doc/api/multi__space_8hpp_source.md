
# File multi\_space.hpp

[**File List**](files.md) **>** [**core**](dir_92216a09053680f71034e5e26026ee62.md) **>** [**space**](dir_4382197029a4717686416170aae3e90a.md) **>** [**multi\_space.hpp**](multi__space_8hpp.md)

[Go to the documentation of this file.](multi__space_8hpp.md) 


````cpp

#pragma once

#include <vector>
#include <boost/bimap.hpp>
#include <sdm/types.hpp>
#include <sdm/core/space/space.hpp>

namespace sdm
{
    class MultiSpace : public Space
    {
    public:
        MultiSpace();
        
        MultiSpace(const std::vector<std::shared_ptr<Space>> &);

        bool isDiscrete() const;

        std::vector<number> getDim() const;

        number getNumSpaces() const;

        std::vector<std::shared_ptr<Space>> getSpaces() const;

        std::shared_ptr<Space> getSpace(number index) const;

        void setSpaces(const std::vector<std::shared_ptr<Space>> &);

        std::string str() const;

        MultiSpace &operator=(const MultiSpace &);
        bool operator==(const MultiSpace &) const;
        bool operator!=(const MultiSpace &) const;
        friend std::ostream &operator<<(std::ostream &os, const MultiSpace &sp)
        {
            os << sp.str();
            return os;
        }

    protected:
        std::vector<std::shared_ptr<Space>> spaces_;
    };
} // namespace sdm
````

