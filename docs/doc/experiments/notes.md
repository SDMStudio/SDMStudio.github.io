# Notes and choices for SDMS

## Mise à jour des bornes

### Réutilisation de l'action selectionnée vs recalcul de l'action opti

Pour mettre à jour les bornes, on peut **1)** utiliser l'action selectionné par le contrôleur, **2)** recalculer l'action optimale.

**1) Utilisation de l'`action selectionnée` :**

- Avantages:
  - Rapide = 1 seul boucle sur les règles de décisions par pas d'exploration 
  - Converge ultra rapidement pour `recycling` vers valeur qui semble optimale

    | Horizon | Value (RECY) | Time  (RECY) | Value (MABC) | Time  (MABC) | Value (GridSmall) | Time  (GridSmall) |
    | ------- | ------------ | ------------ | ------------ | ------------ | ----------------- | ----------------- |
    | 10      | 31.8639      | 0.141489     | 9.2          | 0.010474     | 4.68424           | 1.608             |
    | 100     | 308.781      | 1.54945      | 90.3889      | O.1127       |                   |                   |
    | 200     | 616.466      | 3.28647      | 180.389      | 0.211497     |                   |                   |
    | 300     | 924.151      | 5.17325      | 270.389      | 0.292992     |                   |                   |
    | 500     | 1539.52      |              | 450.389      | 0.490705     |                   |                   |
    | 1000    | 3077.95      | 17.3526      | 900.388      | 1.04302      |                   |                   |

- Inconvénients: 
  - Convergence **non** garantie

**2) Recalculer l'`action optimale`**

- Avantages:
  - Convergence garantie
- Inconvénients: 
  - Lent = 2 boucles sur les règles de décisions par exploration   

-------

### Fréquence de mise à jour de la borne inf

Dans certains cas, on pourrait penser que la borne inf converge rapidement alors que la borne sup est lente. 
Ainsi, on peut être tenté de ne pas mettre à jour la borne inf à chaque pas de temps.

En pratique, on remarque que (pour de petits problèmes):
- il faut plus de trial pour converger 
- ainsi, le temps de convergence reste haut

-------

## Deploy on Grid'5000

Connect to Grid'5000:
```
ssh lyon.g5k
```

Reserve an node on `nova` cluster and open it in an interactive session:
```
oarsub -p "cluster='nova'" -I
```

Manage nodes:
```sh
oarstat -u
oarstat -j JOBID
```

Kill a job:

```
oardel JOBID
```