---
title: Q-value representations 
meta:
  - name: description
    content: Different representations of the q-value function. 
  - name: keywords
    content: rl qlearning value-function  
tags:
  - value q-function
---

# Q-value functions

<ImageZoom img="/assets/img/q-tab2maxplan2deep.png" title="Improvements in the representation of the Q-value function"/>

## Tabular Q


### Structure 

The simplest function of $Q$ is the tabular function. It is represented by a simple matrix whose rows represent the states and columns the actions. This function is perfectly appropriate for cases where the state and action spaces are discrete and relatively small. Indeed, in the case of a continuous state (resp. action) space, the number of values to be stoked will tend to infinity. To face this problem, we have to define a distance between states (resp. actions) that guarantees the obtaining of a finite dimensional matrix. 


Considering the case of a sufficient statistic $s$ defined on the $(n+1)$-simplex (i.e. $s \in [0,1]^n$ and $sum_{x=1}^n s(x) = 1$), the tabular value function could be represented as below.

<img src="/assets/img/qtabular.png" width="500px">


### Evaluation

The evaluation of a new point $s$ depends on the ball it belongs to.

<img src="/assets/img/qtabular_eval.png" width="800px">

### Update operator

In this case, the update of the value function for the Q-learning algorithm is written as follows.

<img src="/assets/img/qtabular_update_op.png" width="800px">

## PWLC Q

### Structure 

Consider the general case of a sufficient statistic $s$ defined on the $(n+1)$-simplex (i.e. $s \in [0,1]^n$ and $sum_{x=1}^n s(x) = 1$). 

For any action, denoted $a$, the value function $Q^a : [0,1]^n \rightarrow \mathbb{R}$ is convex and piecewise linear. It can therefore be approximated by a set of hyperplanes defined on the simplex. One of the representations used in SDMS consists in mapping $B_i$ balls on the simplex to an associated hyperplane.

<img src="/assets/img/qmaxplan.png" width="500px">

### Evaluation

The evaluation of a new point $s$ depends on the ball it belongs to.

<img src="/assets/img/qmaxplan_eval.png" width="800px">

### Update operator

The update of the value function in this case is written as follows.

<img src="/assets/img/qmaxplan_update_op.png" width="800px">

During training, the value function will be updated successively and according to the generated samples. An example of execution could look like the following figure:

<ImageZoom img="/assets/img/update_qmaxplan.png" title="Successive updates"/>

## Deep Q