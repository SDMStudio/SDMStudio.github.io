# Pour commencer 

En installant SDM'Studio vous avez installer quatre types de fichiers (binaries, headers, documentation et libraries). Par défault, ceux-ci sont situés dans les répertoires suivants:
- binaries : `/usr/local/bin/` 
- headers : `/usr/local/include/` 
- libraries : `/usr/local/lib/` 
- documentation : `/usr/local/share/` 

## Interface en Ligne de Commande (CLI)

Le programme principal est ``sdms``. Ce programme concentre les différentes fonctionnalités du logiciel. Pour commencer, exécutez les trois commandes ci-dessous: 

```bash 
sdms solve -a "A*" -f "OccupancyMDP" 
sdms solve -a "HSVI" -f "OccupancyMDP" 
sdms solve -a "QLearning" -f "OccupancyMDP" -m 1 -e 0.1 -t 10000
```

Vous venez de résoudre un **POMDP décentralisé** grâce à trois algorithmes différents (A*, HSVI et Q-Learning). Le paramètre `-f` spécifie au programme d'utiliser la reformulation en **occupancy MDP** pour le résoudre.  Pour voir comment utiliser le programme `sdms`, il faut utiliser ``sdms --help`` ou encore `man sdms`.

```bash
    Usage : sdms COMMAND

    The best solver for sequential decision making problems.

    Commands:
      algorithms	Display all available algorithms.
      help			Show this help message.
      solve			Solve a sequential decision making problem using specified algorithm.
      test			Test a policy.
      version		Show the version.
      worlds		Display all available worlds.

    Run 'sdms COMMAND --help' for more information on a command.
```

Le programme principal `sdms` contient des alias vers d'autres programmes. Par exemple, la commande ``sdms solve`` est équivalent à ``sdms-solve``. Les deux lignes ci-dessous vont retourner exactement la même chose.

```bash
sdms solve --help
sdms-solve --help
```

### Formulation d'un problème 

Les fichiers de problème peuvent prendre différentes formes. La forme la plus classique est le format `.pomdp` de Anthony Cassandra. Celui-ci est décrit dans le fichier [tiger.dpomdp](/tiger.txt). On considèrera aussi les formats `.dpomdp` et `.posg` comme étant les extensions triviales du format précédent. Quelques fichiers problèmes pré-existants sont situés dans le répertoire `/usr/local/share/sdms/world/`. 

## Démarrer avec la bibliothèque SDMS

Pour un ensemble d'exemples, veuillez vous référer à ce [dossier](https://github.com/SDMStudio/sdms/tree/main/src/examples).

Écrivons un petit fichier C++ appelé `backinduct.cpp` qui inclut `sdm/parser/parser.hpp` et qui, pour l'instant, affiche simplement un problème :

```cpp
#include <iostream>
#include <sdm/config.hpp>
#include <sdm/parser/parser.hpp>

int main() {
  auto problem = sdm::parser::parse_file(sdm::config::PROBLEM_PATH + "dpomdp/mabc.dpomdp");
  std::cout << *problem << std::endl;
} 
```

### Définir un problème transformé

Maintenant que nous avons configuré l'environnement de base, nous pouvons nous plonger sur une partie beaucoup plus intéressante. Tout d'abord, nous allons voir comment transformer le problème original en un problème qui peut être résolu par des algorithmes de programmation dynamique. Ensuite, nous montrerons comment définir une reformulation personnalisée du problème et le résoudre avec des algorithmes existants.

**Utilisation d'une reformulation existante du problème**

Considérons que nous cherchons un moyen de résoudre un POMDP avec les algorithmes de base pour MDPs. A cette effet, définissons une reformulation du POMDP original appelée "belief MDP". 

```cpp
std::shared_ptr<POMDPInterface> pomdp = sdm::parser::parse_file(sdm::config::PROBLEM_PATH + "dpomdp/mabc.dpomdp") ;
std::shared_ptr<BeliefMDP> belief_mdp = std::make_shared<BeliefMDP>(pomdp) ;
```

Cette reformulation suppose que la transition d'état se fait sur les croyances au lieu des états. Le principal avantage de l'utilisation de cette relaxation est que les algorithmes standards pour les MDP peuvent maintenant être appliqués. L'exemple complet du code est ci-dessous : 


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


### Ajouter une classe de problème

<!-- 
**Etape 1: Définir le problème théorique**

Nous considérerons ici l'exemple des MPOMDP hiérarchiques. Ceux-ci sont des MPOMDPs particuliers dans lesquels nous considérons une hiérarchie entre les agents. Formellement, cela se définit par le fait que l'observation de l'agent $i \in \{ 1, .., N\}$ est l'union des observations de ses subordonnés. Récursivement, on a $\hat{o}^i = (o^{i-1}, o^i)$.


**Etape 2: Définir la notion d'état**

La notion d'état dans le cas MPOMDP hiérarchique est la même que dans le cas classique. Il n'y a pas de changements à faire.


**Etape 3: Définir la notion d'action**

La notion d'action dans le cas hiérarchique est la même que dans le cas classique. Il n'y a pas de changements à faire.


**Etape 4: Définir le problème**

Nous pouvons maintenant définir notre problème : le **MPOMDP hierarchique**. Pour être conforme à la plateforme, cette classe devra implémenter les méthodes définies par l'interface `MPOMDPInterface`.

Nous créons donc le fichier `hierarchical_mpomdp.hpp` qui contient la définition de la classe `HierarchicalMPOMDP`. Pour nous simplifier la tâche, nous faisons hériter cette classe `TransformedProblem`. Cela permettra d'automatiser les accesseurs vers les fonctions de base du MPOMDP et, ainsi, nous n'aurons qu'à nous soucier des méthodes qui en sont différentes (`getObservationSpace`, `getReachableObservations` et `getObservationProbability`).

La définition de la classe devrait ressembler à quelquechose comme ça:
```cpp
class HierarchicalMPOMDP : public TransformedMPOMDP
{
public:
    HierarchicalMPOMDP(const std::shared_ptr<MPOMDPInterface> &mpomdp); 
    std::shared_ptr<Space> getObservationSpace(number t) const;
    std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const;
    std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const;
    double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state,      const std::shared_ptr<Observation> &observation, number t) const;

};
``` -->


**Etape 1: Définir une nouvelle classe de problème**

Nous considérerons ici le cas du NDPOMDP (Networked Distributed POMDP). Ceux-ci sont des MPOMDPs où chaque agent dispose de sa propre fonction de transition et d'observation et son propre espace d'états. Par ailleurs, la dynamique des états non contrôlables permet de décrire des phénomènes qui ne sont pas liés à la prise de décision des agents. Enfin, la fonction de récompense est additive par sous-groupe d'agents. En d'autres termes, il existe une fonction de récompense par sous-groupe d'agents, où le nombre de sous-groupe est prédéfini à l'avance.  

<!-- Ceux-ci sont des MPOMDPs particuliers dans lesquels nous hiérarchie entre les agents. Formellement, cela se définit par le fait que l'observation de l'agent $i \in \{ 1, .., N\}$ est l'union des observations de ses subordonnés. Récursivement, on a $\hat{o}^i = (o^{i-1}, o^i)$. -->



**Etape 2 : Définir la transformation du problème**

Cette deuxième étape consiste à définir une reformulation du ND-POMDP en ND-OccupancyMDP. Cette reformulation a pour objectif de résoudre la version décentralisée du problème grâce à des algorithmes de l'état de l'art.

**Etape 2.1: Définir la notion d'état d'occupation**

La notion d'état dans le cas NDPOMDP est définit comme un tuple d'états d'occupation. Un état d'occupation pour un agent donné est la distribution conditionnelle sur les croyances privées de l'agent sachant la politique poursuivie jusqu'ici par l'agent et sa croyance initiale $\mathbf{\xi}_t =  \left(p\left( b^i_t \mid b^i_0, d^i_{0..t} \right)\right)_{i=1..n}$.

Concrètement, il s'agit ici de créer une classe qui hérite de `State` et qui permet de représenter la statistique suffisante  $\mathbf{\xi}_t$. 

**Etape 2.2: Définir la notion d'action**

La notion d'action dans le cas NDPOMDP est un tuple de règles de décisions (1 par agent). Une règle de décision dans le contexte NDPOMDP est une fonction qui associe une croyance accessible à l'ensemble des actions de l'agent.

Pour ce cas, on peut directement utiliser la classe `DeterministicDecisionRule`.

**Etape 2.3: Définir la dynamique**

La transition d'un état d'occupation à un autre est défini par l'ensemble des transitions sur les états d'occupations individuels.


**Etape 2.4: Définir la récompense**

La récompense est l'espérance conditionné par le tuple des états d'occupations du groupe.

$r_{xu} = \sum_{g \in G} r_{x^0, x^g, u^g}$ où $g \subseteq \{1,.., n\}$ et $x^g = (x^i)_{i \in g}$.


Pour définir la dynamique et la récompense, on déclarera une nouvelle classe d'occupancy MDP qui réimplémente les fonctions `computeExactNextState` et `getReward`:

```cpp
#pragma once

#include <sdm/world/occupancy_mdp.hpp>

namespace sdm
{
    class NDOccupancyMDP : public BaseOccupancyMDP<JointBelief>
    {
    public:
        /**
         * @brief Construit un objet de type ND-occupancy MDP. 
         */
        NDOccupancyMDP(const std::shared_ptr<NDPOMDPInterface> &ndpomdp, number memory = -1, bool compression = true, bool store_states = true, bool store_actions = true, int batch_size = 0);

        /**
         * @brief Définition de la dynamique.
         */
        Pair<std::shared_ptr<State>, std::shared_ptr<State>> computeExactNextState(const std::shared_ptr<State> &occupancy_state,
                                                                                   const std::shared_ptr<Action> &decision_rule,
                                                                                   const std::shared_ptr<Observation> &observation,
                                                                                   number t = 0);

        /**
         * @brief Définition de la récompense.
         */
        double getReward(const std::shared_ptr<State> &occupancy_state, 
                         const std::shared_ptr<Action> &decision_rule, 
                         number t = 0);

    };
} // namespace sdm
```

<!-- La récompense dans le cas NDPOMDP est le produit des dynamiques de chaque agent. La dynamique d'un agent est une probabilité de distribution sur les états locaux de l'agent étant donné son état local précédent et son action. -->





<!-- **Etape 4: Définir le problème**

Nous pouvons maintenant définir notre problème : le **MPOMDP hierarchique**. Pour être conforme à la plateforme, cette classe devra implémenter les méthodes définies par l'interface `MPOMDPInterface`.

Nous créons donc le fichier `hierarchical_mpomdp.hpp` qui contient la définition de la classe `HierarchicalMPOMDP`. Pour nous simplifier la tâche, nous faisons hériter cette classe `TransformedProblem`. Cela permettra d'automatiser les accesseurs vers les fonctions de base du MPOMDP et, ainsi, nous n'aurons qu'à nous soucier des méthodes qui en sont différentes (`getObservationSpace`, `getReachableObservations` et `getObservationProbability`).

La définition de la classe devrait ressembler à quelquechose comme ça:
```cpp
class HierarchicalMPOMDP : public TransformedMPOMDP
{
public:
    HierarchicalMPOMDP(const std::shared_ptr<MPOMDPInterface> &mpomdp); 
    std::shared_ptr<Space> getObservationSpace(number t) const;
    std::shared_ptr<Space> getObservationSpace(number agent_id, number t) const;
    std::set<std::shared_ptr<Observation>> getReachableObservations(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state, number t) const;
    double getObservationProbability(const std::shared_ptr<State> &state, const std::shared_ptr<Action> &action, const std::shared_ptr<State> &next_state,      const std::shared_ptr<Observation> &observation, number t) const;

};
``` -->

<!-- 
**Etape 3 : Utiliser les propriétés du problème pour optimiser**

**Etape 3.1: Définir la notion d'état d'occupation**

La notion d'état d'occupation dans le cas hiérarchique est la même que dans le cas classique. Il n'y a pas de changements à faire.

**Etape 3.2: Définir la notion d'état**

La notion d'état dans le cas hiérarchique est la même que dans le cas classique. Il n'y a pas de changements à faire.


**Etape 3.2: Définir la notion d'action**

La notion d'action dans le cas hiérarchique est la même que dans le cas classique. Il n'y a pas de changements à faire. -->


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
