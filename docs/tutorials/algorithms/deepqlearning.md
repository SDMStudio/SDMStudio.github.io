# Deep Q-learning

* h : horizon (h0 = infinite horizon)
* m : memory
* t : number of episodes
* lr : learning rate
* b : batch size (number of transitions used during update)
* s : sampling size (number of items in the sampled occupancy state)
* c : capacity of the experience memory
* eps : range of epsilon from beginning to end

## mabc

### Finite-Horizon Hierarchical Dec-POMDP

![](https://i.imgur.com/PF80dtj.png)

Quand on agit de façon greedy les données qu'on récupere détruisent la pérformance. L'algo centrale oublie ce qu'il a deja appris. Du coup avec mabc epsilon va toujours rester à 1.

![](https://i.imgur.com/svMmsZv.png)

### Infinite-Horizon Hierarchical Dec-POMDP

![](https://i.imgur.com/I4kQlkO.png)

Inner dim = 13 est trop bas, l'aprentissage est instable.

## tiger

### Finite-Horizon Hierarchical Dec-POMDP

![](https://i.imgur.com/jaUgwnR.png)

### Infinite-Horizon Hierarchical Dec-POMDP


## recycling

### Finite-Horizon Hierarchical Dec-POMDP

![](https://i.imgur.com/wTeEbdY.png)

![](https://i.imgur.com/nYCM3pP.png)

Inner dim = 32 est pas assez, l'aprentissage est instable.

### Infinite-Horizon Hierarchical Dec-POMDP

![](https://i.imgur.com/Wm9sqMU.png)

## boxPushingUAI07

### Finite-Horizon Hierarchical Dec-POMDP

![](https://i.imgur.com/LGp1smo.png)

Il faut un Capacity = 10,000 qui corresponds à 10% des données totales. lr=0.001 est un peu mieux que lr=0.01

### Infinite-Horizon Hierarchical Dec-POMDP


## Grid3x3corners

### Finite-Horizon Hierarchical Dec-POMDP

### Infinite-Horizon Hierarchical Dec-POMDP


## Mars

### Finite-Horizon Hierarchical Dec-POMDP

### Infinite-Horizon Hierarchical Dec-POMDP
