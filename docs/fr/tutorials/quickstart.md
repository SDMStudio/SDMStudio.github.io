# Pour commencer 

En installant SDM'Studio vous avez installer quatre types de fichiers (binaries, headers, documentation et libraries). Par défault, ceux-ci sont situés dans les répertoires suivants:
- binaries : `/usr/local/bin/` 
- headers : `/usr/local/include/` 
- libraries : `/usr/local/lib/` 
- documentation : `/usr/local/share/` 

## Interface en Ligne de Commande (CLI)

Le programme principal est ``SDMStudio``. Ce programme concentre les différentes fonctionnalités du logiciel. Pour commencer, exécutez les trois commandes ci-dessous: 

```bash 
SDMStudio solve -a "A*" -f "DecPOMDP" 
SDMStudio solve -a "HSVI" -f "DecPOMDP" 
SDMStudio solve -a "QLearning" -f "DecPOMDP" -m 1 -e 0.1 -t 10000
```

Vous venez de résoudre un DecPOMDP grâce à trois algorithmes différents (A*, HSVI et Q-Learning). Pour voir comment utiliser le programme `SDMStudio`, il faut utiliser ``SDMStudio --help`` ou encore `man SDMStudio`.

```bash
    Usage : SDMStudio COMMAND

    The best solver for sequential decision making problems.

    Commands:
      algorithms	Display all available algorithms.
      help			Show this help message.
      solve			Solve a sequential decision making problem using specified algorithm.
      test			Test a policy.
      version		Show the version.
      worlds		Display all available worlds.

    Run 'SDMStudio COMMAND --help' for more information on a command.
```

Le programme principal `SDMStudio` contient des alias vers d'autres programmes. Par exemple, la commande ``SDMStudio solve`` est équivalent à ``sdms-solve``. Les deux lignes ci-dessous vont retourner exactement la même chose.

```bash
SDMStudio solve --help
sdms-solve --help
```

### Formulation d'un problème 

Les fichiers de problème peuvent prendre différentes formes. La forme la plus classique est le format `.pomdp` de Anthony Cassandra. Celui-ci est décrit dans le fichier [tiger.dpomdp](/tiger.txt). On considèrera aussi les formats `.dpomdp` et `.posg` comme étant les extensions triviales du format précédent. Quelques fichiers problèmes pré-existants sont situés dans le répertoire `/usr/local/share/sdms/world/`. 

## Start with the SDMS library

For a set of examples, please refer to this [folder](https://gitlab.inria.fr/chroma1/plasma/sdms/-/tree/main/src/examples).

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
#include <sdm/world/pomdp_interface.hpp>
#include <sdm/world/belief_mdp.hpp>
#include <sdm/algorithms/backward_induction.hpp>

using namespace sdm;

int main()
{
  // Parse the problem file 
  std::shared_ptr<POMDPInterface> pomdp = sdm::parser::parse_file(sdm::config::PROBLEM_PATH + "pomdp/tiger.pomdp");
  problem->setHorizon(5);
  // Transform the problem in a solvable way 
  std::shared_ptr<BeliefMDP> belief_mdp = std::make_shared<BeliefMDP>(pomdp);
  // Instanciate the algorithm
  auto algo = std::make_shared<BackwardInduction>(belief_mdp);
  // Intialize and solve
  algo->do_initialize();
  algo->do_solve();
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
