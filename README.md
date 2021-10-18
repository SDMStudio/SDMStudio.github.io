# Website of the [SDM'Studio](https://gitlab.inria.fr/chroma1/plasma/sdms) library

[![pipeline status](https://github.com/SDMStudio/SDMStudio.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/SDMStudio/SDMStudio.github.io/actions/workflows/deploy.yml/)

[![last commit](https://img.shields.io/github/last-commit/SDMStudio/SDMStudio.github.io)](https://github.com/SDMStudio/SDMStudio.github.io/graphs/commit-activity)

SDM'Studio is a C++ librairy that provides efficient solvers for sequential decision making problems. The associated webpage provides information about how to use the library and how to contribute to it. Moreover, the website provides a full documentation of the platform and some tutorials to understand the theoritical concepts behind the platform.

***Resulting website at*** :  https://sdmstudio.github.io/


## Get and test the website project

To run the SDMS webpage locally, all you have to do is to follow the next few steps:

### 1. Install `node.js` on your machine

```bash
sudo apt-get update
sudo apt-get install nodejs npm
```
You can then check the version of node installed.
    
    node -v

> :warning: **Tested version of node is `v10.24.0` !**
> For example, with v8 of js, npm install and npm run fails. v14 of js works and can be downloaded here https://nodejs.org/en/

### 2. Clone this repository

```bash
git clone https://github.com/SDMStudio/SDMStudio.github.io.git
cd SDMStudio.github.io.git
git checkout src
```

### 3. Install the VuePress project

```bash
npm install
```

### 4. Run locally the web server and see the result 

```bash
npm run dev
```

## Contribute to the documentation, tutorials, etc

Once the project is running locally, you can contribute to it. 

**Please look at the online help (https://sdmstudio.github.io/tutorials/contribute) to have a full explanation of how to contribute to the website.**

There is three main ways to contribute to the Website of SDMS. The first contribution should be to complete the ***tutorials***. This contribution can be made by adding examples, theories or even interactive explanation of an algorithm. Another way to indirectly contribute to the website would be to ***document*** the code of SDMS (https://gitlab.inria.fr/chroma1/plasma/sdms). This will allows to have a more complete documentation of classes on the website. Finally, you can contribute to customize the ***homepage*** by adding information (only for SDM'Studio team).

