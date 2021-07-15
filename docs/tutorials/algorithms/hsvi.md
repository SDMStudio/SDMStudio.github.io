# HSVI


| Problème                   | Etat | Action |
| -------------------------- | ---- | ------ |
| *MDP*                      | 0.8  |        |
| *POMDP*                    | 0.5  |        |
| *MMDP*                     | 0.8  |        |
| *MPOMDP*                   | 0.8  |        |
| *Dec-POMDP*                | 0.8  |        |
| *Extensive-Form Dec-POMDP* | 0.8  |        |
| *ZS-SG*                    | 0.8  |        |


# Tests

## Un choix d'hyperparamètres pour avoir l'optimalité


| Problem | Horizon | PRECISION_BELIEF | PRECISION_OCCUPANCY | COMPRESS_PRECISION |
| ------- | ------- | ---------------- | ------------------- | ------------------ |
| mabc    | *       | 0.01             | 0.001               | O.1                |
| tiger   | 3       | 0.01             | 0.001               | O.1                |

## Variation en fonction de la précision de compression

**Parameters :**

- STOCKAGE_OCCUPANCY_STATES = True 
- STOCKAGE_DECISION_RULES = True 
- BORNE_INF = Tabulaire / Exhaustive
- BORNE_SUP = Tabulaire / Exhaustive
- BELIEF_PRECISION = 0.01;
- OCCUPANCY_STATE_PRECISION = 0.1


### mabc (h=100, m=1)

| Compress Precision | Num Trials | Error       | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ----------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 13,4946 |
| 0,8                | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 14,5666 |
| 0,5                | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 15,9397 |
| 0,3                | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 17,0605 |
| 0,2                | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 17,2069 |
| 0,1                | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 17,1994 |
| 0,05               | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 18,7359 |
| 0,02               | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 17,605  |
| 0,01               | 2866       | 0,000312363 | 90,6623  | 90,6626  | 3802    | 4222    | 49                   | 1             | 17,0469 |


### tiger (h=3, m=3)

| Compress Precision | Num Trials | Error | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time     |
| ------------------ | ---------- | ----- | -------- | -------- | ------- | ------- | -------------------- | ------------- | -------- |
| 0,8                | 3          | 0     | 15,9322  | 15,9322  | 5       | 5       | 7                    | 1             | 0,0277   |
| 0,5                | 5          | 0     | -4,46683 | -4,46683 | 8       | 8       | 23                   | 4             | 0,384563 |
| 0,3                | 8          | 0     | 5,19081  | 5,19081  | 10      | 11      | 67                   | 12            | 2,24968  |
| 0,2                | 5          | 0     | 5,19081  | 5,19081  | 7       | 8       | 65                   | 25            | 2,97977  |
| 0,1                | 7          | 0     | 5,19081  | 5,19081  | 9       | 11      | 127                  | 42            | 9,79318  |
| 0,05               | 7          | 0     | 5,19081  | 5,19081  | 9       | 11      | 83                   | 42            | 12,3159  |
| 0,02               | 7          | 0     | 5,19081  | 5,19081  | 9       | 11      | 68                   | 42            | 13,2845  |
| 0,01               | 7          | 0     | 5,19081  | 5,19081  | 9       | 11      | 68                   | 42            | 12,1883  |

### tiger (h=4, m=3)

| Compress Precision | Num Trials | Error  | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time     |
| ------------------ | ---------- | ------ | -------- | -------- | ------- | ------- | -------------------- | ------------- | -------- |
| 0,8                | 3          | 0      | 31,7718  | 31,7718  | 7       | 7       | 7                    | 1             | 0,080937 |
| 0,5                | 9          | 0      | 9,89814  | 9,89814  | 16      | 23      | 32                   | 9             | 1,97109  |
| 0,2                | 30         | 0      | 8,82848  | 8,82848  | 36      | 66      | 299                  | 36            | 472,888  |
| 0,1                | Memory     | Memory | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory   |

### alignment (h=4, m=3)

| Compress Precision | Num Trials | Error       | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ----------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 18         | 3,55271E-15 | 21,25    | 21,25    | 24      | 235     | 343                  | 5             | 4,64992 |
| 0,5                | 18         | 3,55271E-15 | 21,25    | 21,25    | 24      | 235     | 343                  | 5             | 3,24932 |
| 0,3                | 18         | 3,55271E-15 | 21,25    | 21,25    | 24      | 235     | 345                  | 5             | 3,07319 |
| 0,2                | 18         | 3,55271E-15 | 21,25    | 21,25    | 24      | 235     | 347                  | 5             | 3,30735 |
| 0,1                | 32         | 7,10543E-15 | 30,7187  | 30,7188  | 43      | 435     | 793                  | 7             | 8,83943 |


### GridSmall (h=3, m=3)

| Compress Precision | Num Trials | Error | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time     |
| ------------------ | ---------- | ----- | -------- | -------- | ------- | ------- | -------------------- | ------------- | -------- |
| 0,8                | 1          | 0     | 1,41152  | 1,41152  | 3       | 21      | 30                   | 2             | 0,237512 |
| 0,5                | 1          | 0     | 1,08444  | 1,08444  | 3       | 39      | 53                   | 6             | 0,361443 |
| 0,3                | 2          | 0     | 0,981111 | 0,981111 | 5       | 145     | 204                  | 12            | 19,5487  |
| 0,2                | 2          | 0     | 0,94     | 0,94     | 4       | 205     | 261                  | 16            | 4,45301  |
| 0,1                | 2          | 0     | 0,91     | 0,91     | 4       | 211     | 331                  | 30            | 24,3367  |

### GridSmall (h=4, m=3)

| Compress Precision | Num Trials | Error       | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ----------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,5                | 4          | 2,05902E-05 | 1,75831  | 1,75833  | 7       | 69      | 71                   | 6             | 1,14222 |
| 0,3                | 5          | 0           | 1,60859  | 1,60859  | 10      | 253     | 277                  | 16            | 47,214  |
| 0,2                | 13         | 0           | 1,55666  | 1,55666  | 18      | 694     | 804                  | 20            | 324,032 |
| 0,1                | Memory     | Memory      | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory  |

### GridSmall (h=6, m=3)

| Compress Precision | Num Trials | Error  | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time   |
| ------------------ | ---------- | ------ | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------ |
| 0,8                | Memory     | Memory | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory |
| 0,5                | Memory     | Memory | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory |
| 0,3                | Memory     | Memory | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory |
| 0,2                | Memory     | Memory | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory |


### BoxPushing (h=3, m=3)

| Compress Precision | Num Trials | Error  | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time   |
| ------------------ | ---------- | ------ | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------ |
| 0,8                | Memory     | Memory | Memory   | Memory   | Memory  | Memory  | Memory               | Memory        | Memory |



**Parameters :**

- STOCKAGE_OCCUPANCY_STATES = True 
- STOCKAGE_DECISION_RULES = True 
- BORNE_INF = MaxPlan / Exhaustive
- BORNE_SUP = Sawtooth / Exhaustive
- BELIEF_PRECISION = 0.1;
- OCCUPANCY_STATE_PRECISION = 0.1

### alignment (h=4, m=3)


| Compress Precision | Num Trials | Error | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ----- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 23         | 0     | 21,25    | 21,25    | 55      | 40      | 639                  | 5             | 14,9739 |
| 0,5                | 23         | 0     | 21,25    | 21,25    | 55      | 40      | 642                  | 5             | 14,0392 |
| 0,3                | 23         | 0     | 21,25    | 21,25    | 55      | 40      | 644                  | 5             | 15,6661 |
| 0,2                | 23         | 0     | 21,25    | 21,25    | 55      | 40      | 659                  | 5             | 15,5554 |
| 0,1                | 41         | 0     | 21,25    | 21,25    | 84      | 63      | 2200                 | 7             | 32,6302 |
| 0,05               | 41         | 0     | 21,25    | 21,25    | 84      | 63      | 2336                 | 7             | 31,3864 |
| 0,02               | 43         | 0     | 21,25    | 21,25    | 87      | 69      | 2598                 | 7             | 38,7079 |
| 0,01               | 47         | 0     | 21,25    | 21,25    | 91      | 73      | 2651                 | 7             | 38,2383 |

### tiger (h=3, m=3)

| Compress Precision | Num Trials | Error        | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ------------ | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 10001      | 34,9322      | -19      | 15,9322  | 7       | 4       | 7                    | 1             | 38,736  |
| 0,5                | 10001      | 1,53317      | -6       | -4,46683 | 11      | 8       | 23                   | 4             | 274,758 |
| 0,3                | 9          | -1,77636E-15 | 5,19081  | 5,19081  | 12      | 11      | 88                   | 12            | 6,40171 |
| 0,2                | 7          | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 9       | 143                  | 25            | 12,2728 |
| 0,1                | 11         | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 13      | 441                  | 42            | 52,7547 |
| 0,05               | 11         | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 13      | 477                  | 42            | 51,5022 |
| 0,02               | 11         | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 13      | 699                  | 42            | 48,4657 |
| 0,01               | 11         | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 13      | 699                  | 42            | 50,5421 |

### mabc (h=100, m=1)

| Compress Precision | Num Trials | Error      | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ---------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,9091 |
| 0,5                | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,8942 |
| 0,3                | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 11,0568 |
| 0,2                | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,7283 |
| 0,1                | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,289  |
| 0,05               | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,7723 |
| 0,02               | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,6566 |
| 0,01               | 140        | -0,0350535 | 90,4797  | 90,4447  | 359     | 275     | 4                    | 1             | 10,7023 |


### recycling (h=10, m=1)

| Compress Precision | Num Trials | Error      | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ---------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 10001      | 45         | 5        | 50       | 20      | 10      | 6                    | 2             | 53,0146 |
| 0,5                | 10001      | 45         | 5        | 50       | 20      | 10      | 7                    | 4             | 62,4442 |
| 0,3                | 20         | -0,0135327 | 31,8639  | 31,8504  | 31      | 35      | 102                  | 4             | 2,20285 |
| 0,2                | 20         | -0,0135327 | 31,8639  | 31,8504  | 31      | 35      | 102                  | 4             | 2,02593 |
| 0,1                | 20         | -0,0135327 | 31,8639  | 31,8504  | 31      | 35      | 102                  | 4             | 2,2514  |
| 0,05               | 20         | -0,0135327 | 31,8639  | 31,8504  | 31      | 35      | 102                  | 4             | 2,07901 |
| 0,02               | 20         | -0,0135327 | 31,8639  | 31,8504  | 31      | 35      | 102                  | 4             | 2,31064 |
| 0,01               | 20         | -0,0135327 | 31,8639  | 31,8504  | 31      | 35      | 102                  | 4             | 1,97624 |


**Parameters :**

- STOCKAGE_OCCUPANCY_STATES = True 
- STOCKAGE_DECISION_RULES = True 
- BORNE_INF = MaxPlanLP / ?
- BORNE_SUP = SawtoothLP / ?
- BELIEF_PRECISION = 0.1;
- OCCUPANCY_STATE_PRECISION = 0.1

### alignment (h=4, m=3)

| Compress Precision | Num Trials | Error     | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | --------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 4          | -0,125    | 8,75     | 8,625    | 14      | 9       | 18                   | 2             | 1,30787 |
| 0,5                | 8          | -0,125    | 8,75     | 8,625    | 20      | 13      | 29                   | 3             | 3,31118 |
| 0,3                | 9          | -0,125    | 8,75     | 8,625    | 21      | 15      | 34                   | 4             | 3,29555 |
| 0,2                | 3          | -0,875    | -3,125   | -4       | 12      | 8       | 18                   | 2             | 0,73112 |
| 0,1                | 29         | -1,49023  | 10,5625  | 9,07227  | 62      | 49      | 109                  | 3             | 34,4229 |
| 0,05               | 63         | -0,375    | 21,625   | 21,25    | 90      | 76      | 191                  | 5             | 168,26  |
| 0,02               | 28         | -0,427734 | 9,5      | 9,07227  | 59      | 47      | 107                  | 4             | 29,1283 |
| 0,01               | 41         | -0,25     | 21,5     | 21,25    | 67      | 54      | 124                  | 4             | 81,5174 |


### tiger (h=3, m=3)

| Compress Precision | Num Trials | Error        | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time     |
| ------------------ | ---------- | ------------ | -------- | -------- | ------- | ------- | -------------------- | ------------- | -------- |
| 0,8                | 4463       | 19,8859      | -19      | 0,885906 | 8       | 5       | 7                    | 1             | 1000,58  |
| 0,5                | 2234       | 0,11         | -6       | -5,89    | 8       | 7       | 12                   | 4             | 1000,04  |
| 0,3                | 8          | -2,19081     | 5,19081  | 3        | 11      | 10      | 18                   | 9             | 6,83308  |
| 0,2                | 4          | -2,19081     | 5,19081  | 3        | 8       | 6       | 10                   | 12            | 0,859801 |
| 0,1                | 11         | 0            | 5,19081  | 5,19081  | 9       | 13      | 24                   | 36            | 5,98179  |
| 0,05               | 11         | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 13      | 24                   | 36            | 5,20096  |
| 0,02               | 11         | -1,77636E-15 | 5,19081  | 5,19081  | 9       | 13      | 24                   | 36            | 4,30856  |
| 0,01               | 11         | 0            | 5,19081  | 5,19081  | 9       | 13      | 24                   | 36            | 5,15637  |


### mabc (h=100, m=1)

| Compress Precision | Num Trials | Error    | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | -------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 13,5839 |
| 0,5                | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 14,5781 |
| 0,3                | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 13,6815 |
| 0,2                | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 13,1699 |
| 0,1                | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 30,5646 |
| 0,05               | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 19,7357 |
| 0,02               | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 13,4461 |
| 0,01               | 7          | -0,90094 | 90,2899  | 89,389   | 298     | 214     | 4                    | 1             | 13,0356 |



### recycling (h=10, m=1)

| Compress Precision | Num Trials | Error      | Value LB | Value UB | Size LB | Size UB | Num Occupancy States | Num Max JHist | Time    |
| ------------------ | ---------- | ---------- | -------- | -------- | ------- | ------- | -------------------- | ------------- | ------- |
| 0,8                | 5          | -0,848325  | 25,9708  | 25,1225  | 38      | 29      | 7                    | 2             | 1,87583 |
| 0,5                | 5          | -0,539889  | 31,8639  | 31,324   | 34      | 21      | 13                   | 4             | 1,74841 |
| 0,3                | 5          | -0,0156118 | 31,8639  | 31,8483  | 22      | 15      | 13                   | 4             | 1,92641 |
| 0,2                | 5          | -0,0156118 | 31,8639  | 31,8483  | 22      | 15      | 13                   | 4             | 1,74298 |
| 0,1                | 5          | -0,0156118 | 31,8639  | 31,8483  | 22      | 15      | 13                   | 4             | 2,04613 |
| 0,05               | 5          | -0,0156118 | 31,8639  | 31,8483  | 22      | 15      | 13                   | 4             | 1,9431  |
| 0,02               | 5          | -0,0156118 | 31,8639  | 31,8483  | 22      | 15      | 13                   | 4             | 1,93024 |
| 0,01               | 5          | -0,0156118 | 31,8639  | 31,8483  | 22      | 15      | 13                   | 4             | 2,36531 |

<!-- # Comparaison versions avec et sans templates

| Test                                                                                                                                                                                  | Version **Template**           | Version **No Template**   | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------- | ----------- |
| Generation Dec Rules (M)                                                                                                                                                              | Memory Used (increasing) >100% | Memory Used (stable) 0.5% |
| Paramètres du test : num_agent=2 , num_actions=[4,4], num_histories=[8,8] → Génération de toutes les règles de décision déterministes jointes. Soit num_total_dec_rules=4 294 967 296 | -->                            |

<!-- |Compilation Complète | 	51 s |	45 s |	Test réalisé sur la compilation d'un programme qui exécute HSVI pour MDP et donc ne compile que les fichiers  nécessaire pour cela.|
Compilation après changement "haut niveau"	42 s	3.5 s	La cassure des dépendances montre déjà son effet.
Compilation après changement "bas niveau"	46 s	38 s	
Charger Mars (T)	71 s	0.05 s	
Charger Mars (M)	Memory Used : 4 590 755 840       Soit <30%	Memory Used : 14 725 120            Soit <1%         	Pour la version sans template, les tests ont été effectués avec TabularObservationDynamicsAS, mais même avec la version TabularObservationDynamicsSAS (plus complète), on obtient un Memory Used < 10% 
Charger Mars Serialized (M)	>100%	<1%	
oHSVI Tabulaire (T)	> 2 min	30 s	Résolution de Tiger à horizon 3 sans troncature. Utilisation de la structure utilisant les belief graph.
oHSVI Tabulaire (M)	Memory Used (increasing) 
~45%	Memory Used (increasing) 
~58%	Résolution de Tiger à horizon 3 sans troncature. Utilisation de la structure utilisant les belief graph. -->