---
title: Algorithmes
meta:
  - name: description
    content: SDMS tutorials.
  - name: keywords
    content: sdms solver tuto decision making 
tags:
  - algorithms
---

# Fondements algorithmiques

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

La plateforme SDM'Studio est construite autour de la généricité des schémas algorithmiques de planification et d'apprentissage par renforcement. Les schémas algorithmique natifs de la plateforme sont HSVI et Q-learning. Toutefois, la liste est étendue à d'autres algorithmes de l'état de l'art.



|           |         A*         | Backward Induction  |        HSVI        |     Q-Learning     |  Value Iteration   |
| :-------- | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: |
| MDP       |        :x:         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| POMDP     |        :x:         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
| Dec-POMDP | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
| ZS-POSG   |        :x:         |        :x:         |        :x:         |        :x:         |        :x:         |
| POSG      |        :x:         |        :x:         |        :x:         |        :x:         |        :x:         |

Les schémas algorithmiques peuvent être vu comme des templates génériques. Chaque instance d'un de ces schémas constitue un algorithme à part entière. Les changements peuvent intervenir au niveau de la définition du problème ou dans la façon de représenter les fonctions de valeurs. 


## Schéma algorithmique d'HSVI

Le schéma algorithmique général d'HSVI est représenté par le schéma ci-dessous. 
Pour en définir une instance, celui-ci nécessite de définir les notions d'état $s_t$, d'action $a_t$, de borne inférieur $\underline{V}$ et borne supérieur $\bar{V}$.

![SchemaHSVI](/assets/img/schemaHSVI.png)


**Exemple** : une instance d'HSVI est l'algorithme oHSVI. Cette instance permet de résoudre un Dec-POMDP formulé comme un occupancy-state MDP. Le type d'état dans ce cas est un état d'occupation, noté $\xi_t = p\left( x_t, o_t \mid \iota_t \right)$. Le type d'action est un ensemble de règles de décision individuelles, noté $\mathbf{d}_t = (d_t^1, ..., d_t^n) =  \left(p(u^1 \mid o_t^1), p(u^2 \mid o_t^2),..., p(u^n \mid o_t^n)\right)$. La borne inférieure est représentée par une ensemble d'hyperplan et la borne supérieure par un ensemble de point.

## Schéma algorithmique du Q-learning

Le schéma algorithmique général de Q-learning nécessite, quand à lui, de définir les notions d'état, d'action et de fonction de valeur d'action (Q-valeur).

![SchemaQLearning](/assets/img/schemaQLearning.png)
