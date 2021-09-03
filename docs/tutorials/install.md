# Installation


The library SDM'Studio is compatible with ***Linux*** and ***Mac OSX*** platforms. Windows users are advised to make use of Docker (see section [Docker Images](#docker-images)). 

The SDM'Studio platform requires the libraries below mentionned: 
- [boost](https://www.boost.org/) : C++ tools library
- [eigen](https://eigen.tuxfamily.org) : linear algebra library
- [fmt](https://fmt.dev) : library to format inputs and outputs
- [torch](https://pytorch.org/) : machine learning library
## Quick install

To quickly install SDMS, execute the file `install.sh`. 

```bash
git clone https://gitlab.inria.fr/chroma1/plasma/sdms.git
cd sdms
./install.sh
```

::: warning
You may need to change permissions using ``chmod +x install.sh``.
:::

## Step by step installation

The step by step installation allows to better understand the different stages in the installation procedure. If you face a problem when executing `install.sh` or if you prefer manage dependencies by yourself, this section is for you. 


**Step 1 : Downloading SDM'Studio sources**

```bash
git clone https://gitlab.inria.fr/chroma1/plasma/sdms.git
cd sdms
```

**Step 2 : Installing SDMS dependencies**

<code-group>
<code-block title="Linux" active>
```bash
apt-get install libeigen3-dev libboost-all-dev libfmt-dev
```
</code-block>

<code-block title="Mac">
```bash
brew install eigen boost fmt
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

Docker provide a way to install SDMS on any OS and without being administrator of the computer. Thanks to docker containers, the process that is running SDMS, will be isolated to other processes.

### Using pre-built images

You can run a pre-built docker image from the Docker Hub. See available tags on [DockerHub](https://hub.docker.com/r/blavad/sdms).

```bash
docker run --rm -ti blavad/sdms:<tag>
docker run --rm -ti blavad/sdms:latest
```

### Building the image yourself

To build a custom image, you can use the `Dockerfile` provided. The command is :

```bash
docker build -t sdms:<tag> .
```

::: warning
The `Dockerfile` supplied will build images with  PyTorch for CPU.  You can specify another path to the PyTorch repository by adding the argument : `LIBTORCH_URL=<path/to/libtorch-xxxxx.zip`.
:::

It will then be possible to instanciate a container from the newly built image in interactive mode.  

```bash
docker run --rm -ti sdms:<tag>
```

### For developers

Developers can use the multi-stage build architecture to improve flexibility during development process. If you don't want to install SDMS dependencies on your machine or you want to avoid building a new docker image each time you make changes in the code, you can build and run the base `dev` image using `bind mount` tools. This feature will mount your local repo in a container. The following command lines do that: 

```bash
docker build --target dev -t sdms:develop .
docker run -ti --name sdms-dev --mount type=bind,source="$(pwd)",target=/home/sdms sdms:devel
```

With custom parameters, it is possible to build an image that is configure to work with any required version of CUDA.
```bash
docker build --build-arg BASE_IMAGE=nvidia/cuda:<tag> --build-arg LIBTORCH_URL=<url/to/cuda/libtorch> --target dev -t sdms:<tag> .
docker build --build-arg BASE_IMAGE=nvidia/cuda:10.2-cudnn7-devel-ubuntu18.04 --build-arg LIBTORCH_URL=https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.7.1.zip --target dev -t blavad/sdms:0.1-cuda10.2-cudnn7-devel .
```

### Grid'5000 users

Grid'5000 users can follow the procedure below to run experiments with GPUs on Grid'5000.

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