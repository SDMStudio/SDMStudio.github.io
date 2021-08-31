# Installation

## Quick install

In order to execute ``install.sh`` file, you may need to change permissions using ``chmod +x install.sh``.


```bash
git clone https://gitlab.inria.fr/chroma1/plasma/sdms.git
cd sdms
./install.sh
```

Step by step installation
--------------------------
**Install SDMS dependencies**

```bash
sudo apt-get install clang libeigen3-dev libboost-all-dev
```

**Install pytorch**

Download the last version of PyTorch C++ for cxx11 ABI according to your machine requirements (https://pytorch.org/get-started/locally/) and unzip the downloaded file into `/opt/` directory.


```bash
wget https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-xxxxxxx.zip -O libtorch.zip
unzip libtorch.zip -d /opt
```

## Images Docker

### Using pre-built images

You can also pull a pre-built docker image from Docker Hub and run with docker. See available tags on [DockerHub](https://hub.docker.com/r/blavad/sdms).

```bash
docker run --rm -ti blavad/sdms:<tag>
docker run --rm -ti blavad/sdms:latest
```

### Building the image yourself

The `Dockerfile` is supplied to build images with PyTorch for CPU. You can pass `LIBTORCH_URL=<path/to/libtorch-xxxxx.zip` argument to specify which  configuration of PyTorch is to be used.

```bash
docker build --rm -t sdms:<tag> .
```

Then you can run a container and get an interactive command on the newly built image.

```bash
docker run --rm -ti sdms:<tag>
```

### For developers

Developers can use the multi-stage build architecture to improve flexibility during development process. If you don't want to install SDMS dependencies on your machine or you want to avoid building a new docker image each time you make changes in the code, you can build and run the base `dev` image using `bind mount` tools to mount your local repo in a container. The following command lines should do that: 

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