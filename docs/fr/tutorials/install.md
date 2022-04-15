# Installation

La bibliothèque SDM'Studio est compatible avec les plateforme ***Linux*** et ***Mac OSX***. Pour les utilisateurs de Windows 32 et 64bits, il est recommandé d'utiliser la technologie Docker (voir section [Images Docker](#images-docker)).  

Lors de l'installation, les dépendances ci-dessous seront installées: 
- [boost](https://www.boost.org/) : bibliothèque d'outils C++
- [fmt](https://fmt.dev) : bibliothèque de formatage d'entrées/sorties
- [torch](https://pytorch.org/) : bibliothèque de machine learning
<!-- - [eigen](https://eigen.tuxfamily.org) : bibliothèque d'algèbre linéaire -->

## Installation rapide

**1. Prerequis (optionnel) : ILOG CPLEX**

Certains algorithms utilisent le logiciel propriétaire `ILOG CPLEX` pour résoudre des programmes linéaires.
Pour utiliser ces algorithmes, téléchargez et installez `ILOG CPLEX` depuis le site [https://www.ibm.com](https://www.ibm.com).

**2. Installation**

Après avoir récupérer les sources de *SDM'Studio*, lancer le script ``install.sh``.

<code-group>
<code-block title="Linux & Mac" active>

```bash
git clone https://github.com/SDMStudio/sdms.git # nécessite d'installer l'utilitaire git
cd sdms
./install.sh # this will install sdms sources in /usr/local/
```
</code-block>
</code-group>

::: warning
Si vous avez installé CPLEX, il faudra renseigner le chemin d'installation en argument. 
```bash
./install.sh --cplex_root=/opt/ibm/ILOG/CPLEX_Studio201/
```
:::

**3. Vérification de l'installation**

Il est possible de tester l'installation de la manière suivante.

```bash
cd build
make test
```

Une fois l'installation terminée, vous pouvez sautez à la section [Getting Started](./quickstart.html).

## Installation pas à pas


L'installation pas à pas permet de mieux comprendre les différentes étapes d'installation de *SDM'Studio*. Si vous rencontrez un problème lors de l'exécution du fichier d'installation ou si vous préférez gérer l'installation des dépendances vous-même cette section est faites pour vous.

**Etape 1 : Téléchargement des sources**

```bash
git clone https://github.com/SDMStudio/sdms.git # nécessite d'installer l'utilitaire git 
cd sdms
```


**Etape 2 : Installation des dépendances**

<code-group>
<code-block title="Linux" active>
```bash
sudo apt-get update 
sudo apt-get install libboost-all-dev libfmt-dev libgmp-dev zlib1g-dev liblzma-dev unzip wget cmake clang
```
</code-block>

<code-block title="Mac">
```bash
brew install boost fmt gmp zlib zma unzip wget cmake clang
```
</code-block>
</code-group>


**Etape 3 (facultatif) : Installation d'ILOG CPLEX**

Télécharger `ILOG CPLEX` sur [https://www.ibm.com](https://www.ibm.com).

**Etape 4 : Installation de PyTorch C++ API**

Téléchargez la dernière version de Pytorch C++ pour ABI cxx11 (site de téléchargement : [https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/) ). Le choix du lien à utiliser peut dépendre des caractéristiques de votre machine. Décompressez le fichier précédemment téléchargé dans le répertoire `/opt/` de votre ordinateur.


```bash
wget https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-xxxxxxx.zip -O libtorch.zip
unzip libtorch.zip -d /opt
```

**Etape 5 : Compilation et installation finale**

La dernière étape consiste à compiler le projet puis l'installer. Pour cela, nous créons le dossier build qui servira de dossier de compilation. Dans ce dossier, nous construisons les fichiers de compilation grâce à l'outil [CMake](https://cmake.org/) puis nous compilons et installons *SDM'Studio* sur le système.

```sh
mkdir -p build && cd build
cmake ..
make -j8 install
```

<!-- ::: warning -->
Certaines options de compilation peuvent ne pas convenir. Pour les changer, il faut fournir les arguments de compilation à la commande `cmake`.
Par exemple, pour changer le chemin d'accès à CPLEX, il faut utilisez `cmake .. -DCPLEX_ROOT_DIR=/path/to/ILOG/CPLEX_VERSION/`.
<!-- ::: -->

```sh
# Command line
cmake .. [-DOPT1=VALUE] [-DOPT2=VALUE] [-DOPT3=VALUE] 
# For instance, the following line modifies some compiling options:
cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_PREFIX_PATH=~/.local/libtorch -DCPLEX_ROOT_DIR=/opt/ibm/ILOG/CPLEX_Studio/ -DSDMS_BUILD_TESTS=OFF  
```
Options :
- ***CMAKE_BUILD_TYPE*** : Type de compilation `Debug`, `RelWithDebInfo` ou `Release` (default : `RelWithDebInfo`) 
- ***CMAKE_PREFIX_PATH*** : Chemin d'accès à libtorch (default : `/opt/libtorch`)
- ***CPLEX_ROOT_DIR*** : Chemin d'accès à CPLEX (default : `/opt/ibm/ILOG/CPLEX_Studio201/`)
- ***SDMS_BUILD_TESTS*** : Compile tests (default : `ON`)
- ***SDMS_BUILD_DOCS*** : Compile the documentation (default : `OFF`)

Le type de compilation permet de contrôler les options de compilations. Cela peut impacter les performances du logiciel. La compilation en mode `Debug` ajoute l'option de compilation `-g` pour permettre l'utilisation d'outils de débogage tel que [valgrind](https://valgrind.org/).

| Build Type     | Debug | RelWithDebInfo | Release |
| -------------- | :---: | :------------: | :-----: |
| Compiling time | 2m30s |     3m00s      |  3m00s  |
| Running time   | 2m40s |     0m17s      |  0m17s  |

## Images Docker

Grâce à la technologie Docker, il est possible d'installer *SDM'Studio* sans se soucier des privilèges utilisateurs ni de l'OS en question. L'utilisation d'un conteneur Docker plutôt que l'installation directement sur sa machine de *SDM'Studio* permet également d'éviter d'avoir des dépendances conflictuelles avec d'autres logiciels.


### I. Installation rapide via Docker 
<br>

**Step 1. Télécharger les sources**
```bash
git clone https://github.com/SDMStudio/sdms.git
cd sdms
```

**Step 2. Configurer un environnement de développement Docker**
```bash
./open-docker.sh
```

**Step 3. Installer *SDM'Studio* dans le container**
```bash
./install-docker.sh
```
*SDM'Studio* est désormais installé dans le container Docker correspondant.

### II. Utilisation d'une image pré-construite

Il est possible de récupérer et exécuter une image docker existante sur DockerHub. Les tags disponibles sont sur [DockerHub](https://hub.docker.com/r/blavad/sdms).

```bash
docker run --rm -ti blavad/sdms:<tag>
docker run --rm -ti blavad/sdms:latest
```

Trois types d'images docker sont fournies : `run`, `devel` et `build`. Chacune est propice à un type d'utilisation particulier. 

**1. Runtime Images**

Les images **runtime** (i.e. `blavad/sdms:*-run`) sont des images prêtes à l'emploi. Elles permettent d'exécuter le logiciel sans avoir à se soucier de la compilation de ce dernier. De plus, l'image est plus légère. 

Exemple d'utilisation:
```bash
docker run --rm -ti blavad/sdms:0.7-cpu-run
sdms --help
```

**2. Development Images**

Les images de **développement** (c'est-à-dire `blavad/sdms:*-devel`) permettent aux développeurs de plateformes d'avoir accès à un environnement configuré avec les dépendances nécessaires. Ce type d'image est particulièrement utile pour les personnes qui veulent contribuer au code avec une plateforme *Mac OSX* ou *Windows*. 

Exemple d'utilisation:
```bash
# Example of running a development container where sources are bind mounted
# - this setting allows to make local modifications to the code and test it using the docker container  
docker run --rm -ti --mount type=bind,source="$(pwd)",target=/home/sdms blavad/sdms:0.7-cpu-devel 
```


::: details Comment configurer un environnement de développement

-------
Les développeurs peuvent utiliser l'architecture multi-stage pour bénéficier des fonctionnalités de Docker en phase de développement. Ainsi, vous pourrez tester vos modifications locales dans un container Docker. Pour cela, il vous suffit d'utiliser une image construite sur la base dev (tags *-devel sur DockerHub (opens new window)) et utiliser la fonctionnalité bind mount pour monter le répertoire local sdms dans le container. Les commandes suivantes montrent comment construire une image de développement et l'exécuter:

1. Télécharger les sources.
```bash
# Get sources from a specific SDM'Studio repository
git clone <SDMS_REPO>
cd sdms
```

1. Changer ou créer une branche de travail.
```bash
# Checkout to the develop branch and create your own feature branch
git checkout develop
git checkout -b feature/<BRANCH_NAME>
```

3. A ce stade, vous pouvez ajout vos modifications à la plateforme.

4. Créer un container docker et se déplacer dans le répertoire contenant les sources.
```bash
# Run the latest -devel image ( blavad/sdms:0.7-cpu-devel at this time )
docker run  -ti --rm --name sdms-dev \
    --mount type=bind,source="$(pwd)",target=/home/sdms \
    --mount type=bind,source="/opt/ibm",target=/opt/ibm \ # Only if you have installed ILOG CPLEX
    blavad/sdms:0.7-cpu-devel

# Here, the container docker is running; you will be able to compile and run your code
cd /sdms
```

5.1. Si vous voulez simplement installer *SDM'Studio* (méthode facile mais **inefficace**).

```bash
./install.sh
sdms solve --help
sdms solve -w mabc.dpomdp -a "HSVI" -f "oMDP" -h 10 -m 1 -d 1
```

5.2. Si vous préférez une compilation par étape (**meilleure** méthode). 
```bash
mkdir build && cd build
cmake .. 
make -j4 SDMStudio
src/sdms solve --help
src/sdms solve -w mabc.dpomdp -a "HSVI" -f "oMDP" -h 10 -m 1 -d 1
```
:::

### III. Construction d'une image

Si aucune image docker existante ne vous convient, un fichier `Dockerfile` est disponible pour en construire de nouvelles. La construction d'une nouvelle image se fait via la commande suivante:

```bash
docker build -t sdms:<tag> .
```

::: warning
Le `Dockerfile` qui est fournit va construire une image utilisant la version CPU de PyTorch. Vous pouvez spécifier un autre chemin pour PyTorch en passant l'argument `LIBTORCH_URL=<path/to/libtorch-xxxxx.zip`.
:::

Vous pourrez ensuite lancer un conteneur de la nouvelle image en mode interactif :

```bash
docker run --rm -ti sdms:<tag>
```


En ajoutant certains arguments, on peut construire une image configurée pour CUDA.

```bash
docker build --build-arg BASE_IMAGE=nvidia/cuda:<tag> --build-arg LIBTORCH_URL=<url/to/cuda/libtorch> --target dev -t sdms:<tag> .
docker build --build-arg BASE_IMAGE=nvidia/cuda:10.2-cudnn7-devel-ubuntu18.04 --build-arg LIBTORCH_URL=https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.7.1.zip --target dev -t blavad/sdms:0.1-cuda10.2-cudnn7-devel .
```


### IV. Pour les utilisateurs de Grid'5000

Les utilisateurs du serveur de calcul *Grid'5000* peuvent s'aider des instructions ci-dessous pour lancer leurs expérimentations sur le serveur.


Initialisation de Grid'5000 en mode GPUs.

::: details Procedure d'utilisation sous Grid'5000 (en mode GPUs)
```bash
# Connect to a site on grid'5000
ssh (site).g5k

# Get SDMS sources on g5k with the way you prefer (git clone, scp or rsync)
git clone https://github.com/SDMStudio/sdms.git
cd sdms/

# Reserve a node with GPUs (params should be adapted to your needs)
oarsub -p "cluster='cluster-name'" -I

# Setup CUDA and CUDNN for Docker in the interactive node
g5k-setup-nvidia-docker -t
module load cudnn

# Pull the docker image that is adapted for your usage (on g5k must be 'cuda10.1-cudnn8') 
docker pull blavad/sdms:<version> # ex: docker pull blavad/sdms:0.1-cuda10.1-cudnn8-devel

# (alternatively you can build the image yourself)
# docker build --build-arg BASE_IMAGE=nvidia/cuda:10.1-cudnn8-devel-ubuntu18.04 --build-arg LIBTORCH_URL=https://download.pytorch.org/libtorch/cu101/libtorch-cxx11-abi-shared-with-deps-1.8.0%2Bcu101.zip --target dev -t  sdms:0.1-cuda10.1-cudnn8-devel .

# Run the docker image interactively
docker run --rm --gpus all -ti --name sdms-dev --mount type=bind,source="$(pwd)",target=/home/sdms blavad/sdms:<version>

# Run experiments on your needs 
```
:::

## Désinstaller *SDM'Studio*

Les utilisateurs Linux peuvent exécuter la commande suivante `cat install_manifest.txt | xargs -d '\n' rm` depuis le répertoire `build` du projet pour désinstaller *SDM'Studio* de leur système.