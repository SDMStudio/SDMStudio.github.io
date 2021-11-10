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



|                            |         A*         | Backward Induction |        HSVI        | MCTS  |        PBVI        |      Perseus       |     Q-Learning     | REINFORCE | SARSA |  Value Iteration   |
| :------------------------- | :----------------: | :----------------: | :----------------: | :---: | :----------------: | :----------------: | :----------------: | :-------: | :---: | :----------------: |
| MDP                        |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: |  :x:  |  :no_entry_sign:   |  :no_entry_sign:   | :white_check_mark: |    :x:    |  :x:  | :white_check_mark: |
| serial MMDP                |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: |  :x:  |  :no_entry_sign:   |  :no_entry_sign:   | :white_check_mark: |    :x:    |  :x:  | :white_check_mark: |
| belief MDP                 |        :x:         | :white_check_mark: | :white_check_mark: |  :x:  | :white_check_mark: | :white_check_mark: | :white_check_mark: |    :x:    |  :x:  |  :no_entry_sign:   |
| serial belief MDP          |        :x:         | :white_check_mark: | :white_check_mark: |  :x:  | :white_check_mark: | :white_check_mark: | :white_check_mark: |    :x:    |  :x:  |  :no_entry_sign:   |
| hierarchical belief MDP    |        :x:         | :white_check_mark: | :white_check_mark: |  :x:  | :white_check_mark: | :white_check_mark: | :white_check_mark: |    :x:    |  :x:  |  :no_entry_sign:   |
| occupancy MDP              | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :x:  | :white_check_mark: | :white_check_mark: | :white_check_mark: |    :x:    |  :x:  |  :no_entry_sign:   |
| serial occupancy MDP       |        :x:         | :white_check_mark: | :white_check_mark: |  :x:  | :white_check_mark: | :white_check_mark: | :white_check_mark: |    :x:    |  :x:  |  :no_entry_sign:   |
| hierarchical occupancy MDP |        :x:         | :white_check_mark: | :white_check_mark: |  :x:  | :white_check_mark: | :white_check_mark: | :white_check_mark: |    :x:    |  :x:  |  :no_entry_sign:   |
| OccupancyMG                |        :x:         |        :x:         |        :x:         |  :x:  |        :x:         |        :x:         |        :x:         |    :x:    |  :x:  |  :no_entry_sign:   |

Legend :  :x: not implemented :no_entry_sign: not allowed  :white_check_mark: implemented

Les schémas algorithmiques peuvent être vu comme des templates génériques. Chaque instance d'un de ces schémas constitue un algorithme à part entière. Les changements peuvent intervenir au niveau de la définition du problème ou dans la façon de représenter les fonctions de valeurs. 

## Relation entre les algorithmes


<ImageZoom img="/assets/img/algoUML.png" title="Relations between algorithms" max_width="800"/>


|                            |         A*         | Backward Induction |        HSVI        |        PBVI        |      Perseus       |     Q-Learning     |  Value Iteration   |
| :------------------------- | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: |
| MDP                        |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: |
| serial MMDP                |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: |
| belief MDP                 |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |
| serial belief MDP          |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |
| hierarchical belief MDP    |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |
| occupancy MDP              | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |
| serial occupancy MDP       | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |
| hierarchical occupancy MDP |  :no_entry_sign:   | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |  :no_entry_sign:   |
| OccupancyMG                |  :no_entry_sign:   |        :x:         |        :x:         |        :x:         |        :x:         |        :x:         |  :no_entry_sign:   |