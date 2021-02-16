
# Getting started 

## Command Line Interface

By installing SDM'Studio, you are installing four different things (binaries, docs, headers, libraries). By default, the installation folder is ``/usr/local``.

### Binaries

**Binaries** are store in ``/usr/local/bin/``. The main program is called ``SDMStudio``. It can be used for almost everything. 
To see how to use it, just type ``SDMStudio --help`` and you will get an help of this kind.

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

The program SDMStudio is simply make alias to other programs. Invoking ``SDMStudio solve`` is the same as invoking ``sdms-solve``. 
To verify that, you can try to run:

```bash
SDMStudio solve --help
```

and 

```bash
sdms-solve --help
```

This will display exacly the same thing.

### Documentation

The **documentation** is store in ``/usr/local/share/``.

### Librairies

**Libraries** are store in ``/usr/local/lib/``. 


### Headers

**Header** files are store in ``/usr/local/include/``.



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
:::