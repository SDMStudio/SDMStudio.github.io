
# File config.hpp

[**File List**](files.md) **>** [**sdm**](dir_ae1b8d8c3d2627954ba53c22978558f0.md) **>** [**config.hpp**](config_8hpp.md)

[Go to the documentation of this file.](config_8hpp.md) 


````cpp
#pragma once

namespace sdm
{
    namespace config
    {


        // ----------------------------------------------------
        // -------------- PRECISION PARAMETERS ----------------
        // ----------------------------------------------------

        const double PRECISION_SDMS_VECTOR = 0.0001;

        const double PRECISION_MAPPED_VECTOR = 0.0001;
        
        const double PRECISION_VECTO_INTERFACE = PRECISION_MAPPED_VECTOR;

        const double PRECISION_BELIEF = 0.001;
        
        const double PRECISION_OCCUPANCY_STATE = 0.001;
        
        const double PRECISION_COMPRESSION = 0.1;



        // --------------------------------------------------
        // ----------------- PATH PARAMETERS ----------------
        // --------------------------------------------------

        const std::string PROBLEM_PATH = "/usr/local/share/sdms/world/";




        // --------------------------------------------------
        // ---------------- THEME PARAMETERS ----------------
        // --------------------------------------------------

        const std::string SDMS_THEME_1 = "\033[1;36m";

        const std::string NO_COLOR = "\033[0m";

        const std::string LOG_SDMS = SDMS_THEME_1 + "SDMS#>" + NO_COLOR + " ";




        // ----------------------------------------------------
        // ---------------- DISPLAY PARAMETERS ----------------
        // ----------------------------------------------------

        const unsigned short BELIEF_DECIMAL_PRINT = 5;

        const unsigned short OCCUPANCY_DECIMAL_PRINT = 5;
        
        const unsigned short VALUE_DECIMAL_PRINT = 4;


    } // namespace config

}
````

