# Q-learning

## Hierarchical Occupancy MDP

![hierarchical occupancy mdp mabc](https://i.imgur.com/DDuTbkp.png)
```
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/mabc.dpomdp -h 10 -q tabular -b 0 -m 1 -l .1 -t 1000000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_mabc_10_t_0_1_.1_1000000_.1_.1_.1_1 -s 1

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/mabc.dpomdp -h 10 -q hierarchical -v 1 -b 0 -m 1 -l .1 -t 1000000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_mabc_10_hv1_0_1_.1_1000000_.1_.1_.1_1 -s 1

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/mabc.dpomdp -h 10 -q hierarchical -v 2 --ball_r .1 -b 0 -m 1 -l .1 -t 1000000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_mabc_10_hv2_.1_0_1_.1_1000000_.1_.1_.1_1 -s 1

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/mabc.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 0 -m 1 -l .1 -t 1000000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_mabc_10_hv2_1.0_0_1_.1_1000000_.1_.1_.1_1 -s 1
```


![hierarchical occupancy mdp tiger](https://i.imgur.com/GvFfPNG.png)
```
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q tabular -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_t_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q tabular -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_t_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q hierarchical -v 1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_hv1_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q hierarchical -v 1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_hv1_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q hierarchical -v 2 --ball_r .1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_hv2_.1_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q hierarchical -v 2 --ball_r .1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_hv2_.1_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_hv2_1.0_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_tiger_10_hv2_1.0_0_1_.1_100000_.1_.1_.1_2 -s 2
```

![hierarchical occupancy mdp recycling](https://i.imgur.com/WAgwyzs.png)
```
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q tabular -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_t_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q tabular -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_t_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q tabular -b 1024 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_t_1024_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q tabular -b 1024 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_t_1024_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv1_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv1_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 1 -b 1024 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv1_1024_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 1 -b 1024 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv1_1024_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 2 --ball_r .1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv2_.1_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 2 --ball_r .1 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv2_.1_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv2_1.0_0_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 0 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv2_1.0_0_1_.1_100000_.1_.1_.1_2 -s 2

./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 1024 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv2_1.0_1024_1_.1_100000_.1_.1_.1_1 -s 1
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -q hierarchical -v 2 --ball_r 1.0 -b 1024 -m 1 -l .1 -t 100000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_recycling_10_hv2_1.0_1024_1_.1_100000_.1_.1_.1_2 -s 2
```

![hierarchical occupancy mdp Grid3x3corners](https://i.imgur.com/FUl35Yh.png)
```
./src/examples/tmp/quicktest_qlearning -f PrivateHierarchicalOccupancyMDP -p ../data/world/dpomdp/Grid3x3corners.dpomdp -h 3 -q hierarchical -v 2 --ball_r 1.0 -b 0 -m 1 -l .1 -t 1000000 --p_b .1 --p_o .1 --p_c .1 -n ../run/phomdp_Grid3x3corners_3_hv2_1.0_0_1_.1_1000000_.1_.1_.1_1 -s 1
```
(Process killed after running for 1.5 hours)


* Gardez un espace d'action par etat d'occ. -> Peut se servir des graphs de transitions et reward mais c'est trop couteux en memoire et inutile.
* Gardez rien -> Pas couteux en memoire, mais il faut calculer S'(S, Z, A) et R(S, A) chaque fois. Trop couteux en temps.
* Gardez un sac de regles de decisions apres les avoir generez de facon random ou greedy -> Un peu plus couteux en memoire que (2) mais surement beaucoup moins couteux en temps. Il faut juste un bon hash pour les regles de decisions pour pouvoir les trouver en O(1)

<!-- ![hierarchical occupancy mdp mabc]()
```

``` -->

## Occupancy MDP

## Belief MDP

<!-- ![belief mdp mabc]()
```

```

![belief mdp tiger]()
```

```

![belief mdp recycling]()
```

```

![belief mdp Mars]()
```

```

![belief mdp boxPushingUAI07]()
```

```

![belief mdp Grid3x3corners]()
```

``` -->

## MPOMDP

<!-- ![mpomdp mabc]()
```

```

![mpomdp tiger]()
```

```

![mpomdp recycling]()
```

```

![mpomdp Mars]()
```

```

![mpomdp boxPushingUAI07]()
```

```

![mpomdp Grid3x3corners]()
```

``` -->

## POMDP

<!-- ![pomdp mabc]()
```

```

![pomdp tiger]()
```

```

![pomdp recycling]()
```

```

![pomdp Mars]()
```

```

![pomdp boxPushingUAI07]()
```

```

![pomdp Grid3x3corners]()
```

``` -->

## MMDP

![mmdp mabc](https://i.imgur.com/MVq9ICk.png)
```
./src/examples/tmp/quicktest_qlearning -f MMDP -p ../data/world/dpomdp/mabc.dpomdp -h 10 -l 0.1 -t 100000 -n ../run/mmdp_mabc_10_.1_100000
```

![mmdp tiger](https://i.imgur.com/8v2xjUJ.png)
```
./src/examples/tmp/quicktest_qlearning -f MMDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -l 0.1 -t 100000 -n ../run/mmdp_tiger_10_.1_100000
```

![mmdp recycling](https://i.imgur.com/8bBlOQv.png)
```
./src/examples/tmp/quicktest_qlearning -f MMDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -l 0.1 -t 100000 -n ../run/mmdp_recycling_10_.1_100000
```

![mmdp Mars](https://i.imgur.com/tyncOZy.png)
```
./src/examples/tmp/quicktest_qlearning -f MMDP -p ../data/world/dpomdp/Mars.dpomdp -h 10 -l 0.1 -t 10000000 -n ../run/mmdp_Mars_10_.1_10000000
```

![mmdp boxPushingUAI07](https://i.imgur.com/DdyHX7v.png)
```
./src/examples/tmp/quicktest_qlearning -f MMDP -p ../data/world/dpomdp/boxPushingUAI07.dpomdp -h 10 -l 0.1 -t 10000000 -n ../run/mmdp_boxPushingUAI07_10_.1_10000000
```

![mmdp Grid3x3corners](https://i.imgur.com/dyJqUUD.png)
```
./src/examples/tmp/quicktest_qlearning -f MMDP -p ../data/world/dpomdp/Grid3x3corners.dpomdp -h 10 -l 0.1 -t 10000000 -n ../run/mmdp_Grid3x3corners_10_.1_10000000
```

## MDP

![mdp mabc](https://i.imgur.com/XtI6EPF.png)
```
./src/examples/tmp/quicktest_qlearning -f MDP -p ../data/world/dpomdp/mabc.dpomdp -h 10 -l 0.1 -t 100000 -n ../run/mdp_mabc_10_.1_100000
```

![mdp tiger](https://i.imgur.com/QS5p4bQ.png)
```
./src/examples/tmp/quicktest_qlearning -f MDP -p ../data/world/dpomdp/tiger.dpomdp -h 10 -l 0.1 -t 100000 -n ../run/mdp_tiger_10_.1_100000
```

![mdp recycling](https://i.imgur.com/pB3pNnC.png)
```
./src/examples/tmp/quicktest_qlearning -f MDP -p ../data/world/dpomdp/recycling.dpomdp -h 10 -l 0.1 -t 100000 -n ../run/mdp_recycling_10_.1_100000
```

![mdp Mars](https://i.imgur.com/19ylj5E.png)
```
./src/examples/tmp/quicktest_qlearning -f MDP -p ../data/world/dpomdp/Mars.dpomdp -h 10 -l 0.1 -t 10000000 -n ../run/mdp_Mars_10_.1_10000000
```

![mdp boxPushingUAI07](https://i.imgur.com/jZmzc6d.png)
```
./src/examples/tmp/quicktest_qlearning -f MDP -p ../data/world/dpomdp/boxPushingUAI07.dpomdp -h 10 -l 0.1 -t 10000000 -n ../run/mdp_boxPushingUAI07_10_.1_10000000
```

![mdp Grid3x3corners](https://i.imgur.com/DCtyhfE.png)
```
./src/examples/tmp/quicktest_qlearning -f MDP -p ../data/world/dpomdp/Grid3x3corners.dpomdp -h 10 -l 0.1 -t 10000000 -n ../run/mdp_Grid3x3corners_10_.1_10000000
```


