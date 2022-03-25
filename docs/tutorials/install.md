# Installation


The library SDM'Studio is compatible with ***Linux*** and ***Mac OSX*** platforms. Windows users are advised to make use of Docker (see section [Docker Images](#docker-images)). 

The SDM'Studio platform requires the libraries below mentionned: 
- [boost](https://www.boost.org/) : C++ tools library
- [fmt](https://fmt.dev) : library to format inputs and outputs
- [torch](https://pytorch.org/) : machine learning library
<!-- - [eigen](https://eigen.tuxfamily.org) : linear algebra library -->

## Install from sources
 

**1. Prerequisite (optional) : ILOG CPLEX**

Some algorithms use `ILOG CPLEX` solver to get solutions of linear programs.
To be able to run these algorithms, download `ILOG CPLEX` on [https://www.ibm.com](https://www.ibm.com) and install it.

**2. Installation**

To install SDMS from sources, simply get sources and execute the file `install.sh`. 

<code-group>
<code-block title="Linux & Mac" active>

```bash
git clone https://github.com/SDMStudio/sdms.git # you need `git` to be installed
cd sdms
./install.sh # this will install sdms sources in /usr/local/
```
</code-block>
</code-group>

::: warning
If you have installed CPLEX, you will need to fill in the installation path as an argument. 
```bash
./install.sh --cplex_root=/opt/ibm/ILOG/CPLEX_Studio201/
```
:::

If installation suceed, go to the [Getting Started](./quickstart.html) section.

## Step by step installation

The step by step installation allows to better understand the different stages in the installation procedure. If you face a problem when executing `install.sh` or if you prefer manage dependencies by yourself, this section is for you. 


**Step 1 : Downloading SDM'Studio sources**

```bash
git clone https://github.com/SDMStudio/sdms.git # you need `git` to be installed 
cd sdms
```

**Step 2 : Installing SDMS dependencies**

<code-group>
<code-block title="Linux" active>
```bash
apt-get update 
apt-get install libboost-all-dev libfmt-dev libgmp-dev zlib1g-dev liblzma-dev unzip wget cmake clang
```
</code-block>

<code-block title="Mac">
```bash
brew install boost fmt gmp zlib zma unzip wget cmake clang
```
</code-block>
</code-group>


**Step 3 (optional) : Installing ILOG CPLEX**

Download `ILOG CPLEX` on [https://www.ibm.com](https://www.ibm.com) and install it.

**Step 4 : Installing de PyTorch C++ API**

Download the last version of PyTorch C++ for cxx11 ABI according to your machine requirements (download links are accessible at  [https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/) ). Uncompress the files in `/opt/` directory.


```bash
wget https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-xxxxxxx.zip -O libtorch.zip
unzip libtorch.zip -d /opt
```


**Step 5 : Compiling and installing SDMS**

For the last step, let's compile the project and install it on your machine. To this end, we will create a folder called `build` and use [CMake](https://cmake.org/) to build compilation files in this folder. We now are able to install SDMS on the system.

```
mkdir -p build && cd build
cmake ..
make -j8 install
```

<!-- ::: warning -->
Some options can be provided when executing `cmake` command. These options may be used to customize the installation on your needs. 
For instance, a modification in the path to CPLEX can be specified with the argument `cmake .. -DCPLEX_ROOT_DIR=/path/to/ILOG/CPLEX_VERSION/`.
<!-- ::: -->

```
cmake .. [-DOPT1=VALUE] [-DOPT2=VALUE] [-DOPT3=VALUE] 
```
Options :
- ***CMAKE_BUILD_TYPE*** : Compiling type `Debug`, `RelWithDebInfo` or `Release` (default : `RelWithDebInfo`) 
- ***CMAKE_PREFIX_PATH*** : Absolute path to libtorch (default : `/opt/libtorch`)
- ***CPLEX_ROOT_DIR*** : Absolute path to CPLEX (default : `/opt/ibm/ILOG/CPLEX_Studio201/`)
- ***SDMS_BUILD_TESTS*** : Build tests (default : `OFF`)
- ***SDMS_BUILD_DOCS*** : Build the documentation (default : `OFF`)

The parameter `CMAKE_BUILD_TYPE` will change the options of the compilation. This can impact the speed of the software. Build the program in `Debug` mode will add the option `-g` and, thus, allow to use debugging tools such as [valgrind](https://valgrind.org/).

| Build Type     | Debug | RelWithDebInfo | Release |
| -------------- | :---: | :------------: | :-----: |
| Compiling time | 2m30s |     3m00s      |  3m00s  |
| Running time   | 2m40s |     0m17s      |  0m17s  |


## Docker Images 

Docker provides a way to install SDMS on any OS. 

### Quick install with Docker 

**Step 1. Get sources**
```bash
git clone --branch develop https://github.com/SDMStudio/sdms.git
cd sdms
```

**Step 2. Configure a development environment with Docker**
```bash
./open-docker.sh
```

**Step 3. Install SDMS in the container**
```bash
./install-docker.sh
```

**Step 4. Use the solver**
```bash
SDMStudio --help
SDMStudio solve --help

# HSVI
SDMStudio solve -w mabc.dpomdp -a HSVI -f oMDP -h 10 -m 1 -e 0.01 --p_c 0.1 --p_o 0.1 --p_b 0.1 --lower_bound maxplan_wcsp --lb_freq_pruning 10 --lb_type_of_pruning bounded --upper_bound sawtooth_lp --ub_init Pomdp --time_max 7200 --name mabc-test

# PBVI
SDMStudio solve -w recycling.dpomdp -a PBVI -f oMDP -h 10 -m 1 -e 0.1 --p_o 0.01 --p_c 0.1 --p_b 0.1 --time_max 7200 --num_samples 100 --name pbvi

# QLearning
SDMStudio solve -w tiger.dpomdp -a QLearning -f oMDP -h 3 -m 3 -e 0.1 --p_c 0.1 --p_o 0.1 --p_b 0.1 --qvalue_function maxplan_wcsp --q_init Zero --time_max 7200 --name qlearning -t 10000
```

### Using pre-built images

You can run a pre-built docker image from the Docker Hub. See available tags on [DockerHub](https://hub.docker.com/r/blavad/sdms).

```bash
docker run --rm -ti blavad/sdms:<TAG>
docker run --rm -ti blavad/sdms:<VERSION>-<PROCESSOR>-<TYPE> # Most of the tags follow this format
```

**1. Runtime Images**

The **runtime** images (i.e. `blavad/sdms:*-run`) allow you to run the software without having to worry about building it.

Usage example:
```bash
docker run --rm -ti blavad/sdms:0.7-cpu-run
SDMStudio --help
```

**2. Development Images**

The **development** images (i.e. `blavad/sdms:*-devel`) allow platform developers to have access to a configured environment with the necessary dependencies. This type of image is particularly useful for contributing to the code with a *Mac OSX* or *Windows* platform. 

Usage example:
```bash
docker run --rm -ti blavad/sdms:0.7-cpu-devel # Example of devel image

docker run --rm -ti --mount type=bind,source="$(pwd)",target=/home/sdms blavad/sdms:0.7-cpu-devel # Example of devel image
```


::: details Setup the developer environment

1. Get sources.
```bash
# Get sources from a specific SDMS repository
git clone <SDMS_REPO>
cd sdms
```

2. Checkout to or create your working branch.
```bash
# Checkout to the develop branch and create your own feature branch
git checkout develop
git checkout -b feature/<BRANCH_NAME>
```

3. Now, you can add your code.

4. Run develop image and move to the source directory.
```bash
# Run the latest -devel image ( blavad/sdms:0.7-cpu-devel at this time )
docker run  -ti --rm --mount type=bind,source="$(pwd)",target=/sdms blavad/sdms:0.7-cpu-devel

# Here, the container docker is running; you will be able to compile and run your code
cd /sdms
```

5.1. If you only need to install and use SDMS'Studio (slower method).

```bash
./install.sh
SDMStudio solve --help
SDMStudio solve -w mabc.dpomdp -a "HSVI" -f "oMDP" -h 10 -m 1 -d 1
```

5.2. If you prefer a step by step compilation and usage (faster method). 
```bash
mkdir build && cd build
cmake .. 
make -j4 SDMStudio
src/SDMStudio solve --help
src/SDMStudio solve -w mabc.dpomdp -a "HSVI" -f "oMDP" -h 10 -m 1 -d 1
```
:::



### Building the image yourself

To build a custom image, you can use the `Dockerfile` provided. The command is :

```bash
docker build -t sdms:<TAG_NAME> .
```

::: warning
The `Dockerfile` supplied will build images with  PyTorch for CPU.  You can specify another path to the PyTorch repository by adding the argument : `LIBTORCH_URL=<PATH/TO/libtorch-xxxxx.zip>`.
:::


With custom parameters, it is possible to build an image that is configure to work with any required version of CUDA.
```bash
docker build --build-arg BASE_IMAGE=nvidia/cuda:<CUDA_TAG_NAME> --build-arg LIBTORCH_URL=<PATH/TO/CUDA/LIBTORCH> --target dev -t sdms:<TAG_NAME> .
docker build --build-arg BASE_IMAGE=nvidia/cuda:10.2-cudnn7-devel-ubuntu18.04 --build-arg LIBTORCH_URL=https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.7.1.zip --target dev -t blavad/sdms:0.7-cuda10.2-cudnn7-devel.
```

It will then be possible to instanciate a container from previously built image in interactive mode.  

```bash
docker run --rm -ti sdms:<TAG_NAME>
```

<!-- 
### For developers

Developers can use the multi-stage build architecture to improve flexibility during development process. If you don't want to install SDMS dependencies on your machine or you want to avoid building a new docker image each time you make changes in the code, you can build and run the base `dev` image using `bind mount` tools. This feature will mount your local repo in a container. The following command lines do that: 

```bash
docker build --target dev -t sdms:develop .
docker run -ti --name sdms-dev --mount type=bind,source="$(pwd)",target=/home/sdms sdms:devel
``` -->


### Grid'5000 users

Grid'5000 users can follow the procedure below to run experiments with GPUs on Grid'5000.

::: details Procedure to follow on Grid'5000
```bash
# Connect to a site on grid'5000
ssh (site).g5k

# Get SDMS sources on g5k with the way you prefer (git clone, scp or rsync)
git clone https://gitlab.inria.fr/chroma1/plasma/sdms
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
docker run --rm --gpus all -ti --name sdms-dev  --mount type=bind,source="$(pwd)",target=/home/sdms blavad/sdms:<version>

# Run experiments on your needs 
```
:::