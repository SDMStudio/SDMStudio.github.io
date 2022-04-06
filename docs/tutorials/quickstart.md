
# Getting started 

Installing *SDM'Studio* results in installing four types of files (binaries, headers, libraries and the documentation). By default, those files are located in the following repositories:
- binaries : `/usr/local/bin/` 
- headers : `/usr/local/include/` 
- libraries : `/usr/local/lib/` 
- documentation : `/usr/local/share/` 

## Command Line Interface

The main program is called `sdms`. This program gather all functionalities of the software. Firstly, let's execute the commands below:

```bash 
sdms solve -a "A*" -f "OccupancyMDP" 
sdms solve -a "HSVI" -f "OccupancyMDP" 
sdms solve -a "QLearning" -f "OccupancyMDP" -m 1 -e 0.1 -t 10000
```

You just solved a **decentralized POMDP** thanks to three different algorithms (A*, HSVI and Q-Learning). The `-f` parameter tells the program to use the **occupancy MDP** reformulation to solve it. To check the different usage of `sdms`, simply run  ``sdms --help`` or `man sdms`.

```
    Usage : sdms COMMAND

    The best solver for sequential decision making problems.

    Commands:
      algorithms		Display all available algorithms.
      formalisms		Display all available formalisms.
      help			Show this help message.
      solve			Solve a sequential decision making problem using specified algorithm.
      test			Test a policy.
      version		Show the version.
      worlds		Display all available worlds.

    Run 'sdms COMMAND --help' for more information on a command.
```

The main program uses aliases to other programs. For instance, the command `sdms solve` is equivalent to `sdms-solve`. The next command lines produce the same outputs.

```bash
sdms solve --help
sdms-solve --help
```


### Formulating a problem

To define a new problem, one way is to write a file of the standardized format `.pomdp` by Anthony Cassandra. This format is described in the file [tiger.dpomdp](/tiger.txt). We also consider the format `.dpomdp` and `.posg`, which are extensions of `.pomdp`. Predefined problems can be found in `/usr/local/share/sdms/world/`. 

## Start with the SDMS library

For a set of examples, please refer to this [folder](https://github.com/SDMStudio/sdms/tree/main/src/examples).

Let’s write a tiny C++ file called `backinduct.cpp` that includes `sdm/parser/parser.hpp` and for now simply prints out a parsed problem:

```cpp
#include <iostream>
#include <sdm/config.hpp>
#include <sdm/parser/parser.hpp>

int main() {
  auto problem = sdm::parser::parse_file(sdm::config::PROBLEM_PATH + "dpomdp/mabc.dpomdp");
  std::cout << *problem << std::endl;
} 
```

### Defining the transformed problems

Now that we have basic environment configured, we can dive into a much more interesting part of this turorial. First we will discuss how to transform the original problem into a problem that can be solved by dynamic programming algorithms. Then, we will show how to define a customed problem reformulation and solve it with existing algorithms

**Using an existing problem reformulation**

Let's consider we are looking for a way to solve a POMDP with basic MDP oriented algorithms. To this end, let's define a reformulation of the original POMDP  called belief MDP. 

```cpp
std::shared_ptr<POMDPInterface> pomdp = sdm::parser::parse_file(sdm::config::PROBLEM_PATH + "dpomdp/mabc.dpomdp");
std::shared_ptr<BeliefMDP> belief_mdp = std::make_shared<BeliefMDP>(pomdp);
```

This reformulation assumes that the state transition go over beliefs instead of states. The main advantage of using this relaxation is that standard algorithms for MDP can now be applied. The full example of code is below: 

```cpp
#include <iostream>

#include <sdm/config.hpp>
#include <sdm/parser/parser.hpp>
#include <sdm/world/belief_mdp.hpp>
#include <sdm/algorithms/planning/backward_induction.hpp>

using namespace sdm;

int main()
{
    // Parse the problem file
    auto pomdp = sdm::parser::parse_file(sdm::config::PROBLEM_PATH + "dpomdp/tiger.dpomdp");
    pomdp->setHorizon(4);
    // Recast the problem instance into a solvable interface
    auto belief_mdp = std::make_shared<BeliefMDP>(pomdp);
    // Instanciate the algorithm
    auto algo = std::make_shared<BackwardInduction>(belief_mdp);
    // Initialize and solve
    algo->initialize();
    algo->solve();
}
```

<!-- 


## Deploy and run long experiments

Your algorithm is ready to be used. The project can be build correctly using CMake. Your main program seems to do what you want but your computer is too slow to solve such a difficult problem in acceptable time.
The solution is to deploy SDMS on a server. To this purpose, we provide a Dockerfile to easily deploy SDMS on a server and execute the code.

### Procedure

1. Copy the code to the server
2. On the server, go to ``/path/to/sdms``
3. Build the image yourself

```bash
docker build --rm -t sdms:v1.0 .
```

4. Instanciate a container and run your experiment

```bash
docker run -d sdms:v1.0 SMDStudio solve [ARG...]
```

::: warning
The default ``Dockerfile`` build an image containing PyTorch for CPU. You can pass ``LIBTORCH_URL=<path/to/libtorch-xxxxx.zip`` argument to specify a different configuration of PyTorch and use, for instance, pytorch for GPU 10.2.
::: -->