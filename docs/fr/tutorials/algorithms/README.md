---
title: Algorithms
meta:
  - name: description
    content: SDMS tutorials.
  - name: keywords
    content: sdms solver tuto decision making 
tags:
  - algorithms
---

# Generic algorithms

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

La plateforme SDM'Studio est construite autour de la généricité des schémas algorithmiques de planification et d'apprentissage par renforcement. Les schémas algorithmique centraux de la plateforme sont HSVI et Q-learning. Chaque instance d'algorithme permet de résoudre un type de problème spécifique.  

## Schéma algorithmique d'HSVI

Le schéma algorithmique général d'HSVI nécessite de définir les notions de borne supérieur, borne inférieur, état et action.

**Exemple** : une instance d'HSVI est l'algorithme oHSVI. Cette instance permet de résoudre un Dec-POMDP formulé comme un occupancy-state MDP. Le type d'état dans ce cas est un état d'occupation, noté $\xi_t$ est $\xi_t = p\left( x_t, o_t \mid \iota_t \right)$. Le type d'action est un ensemble de règle de décision individuelles, noté $\mathbf{d}_t$. $\mathbf{d}_t = (d_t^1, ..., d_t^n) =  \left(p(u^1 \mid o_t^1), p(u^2 \mid o_t^2),..., p(u^n \mid o_t^n)\right)$. La borne inférieure est représentée par une ensemble d'hyperplan (classe *MaxPlanVF*). La borne supérieure est représentée par un ensemble de point.


| Problème                   | Etat                                                            | Action                                                                                                              |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| *MDP*                      | $s_t$                                                           | $u_t$                                                                                                               |
| *POMDP*                    | $b_t =  p\left( x_t \mid o_t \right)$                           | $u_t$                                                                                                               |
| *MMDP*                     | $s_t$                                                           | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                                                             |
| *MPOMDP*                   | $b_t =  p\left( x_t \mid \mathbf{o}_t \right)$                  | $\mathbf{u}_t = \left( u_t^1, u_t^2, ..., u_t^n\right)$                                                             |
| *Dec-POMDP*                | $\xi_t =  p\left( x_t, o_t \mid \iota_t \right)$                | $\mathbf{d}_t = (d_t^1, ... , d_t^n) =  \left(p(u^1 \mid o_t^1), p(u^2 \mid o_t^2), ... , p(u^n \mid o_t^n)\right)$ |
| *Extensive-Form Dec-POMDP* | $\xi_t^i =  p\left( x_t, o_t, u_t^{0:i-1} \mid \iota_t \right)$ | $d_t^i =  p(u_t^i \mid o_t^i)$                                                                                      |
| *ZS-SG*                    | $$                                                              | $$                                                                                                                  |  |



## Schéma algorithmique du Q-learning

Le schéma algorithmique général de Q-learning nécessite de définir les notions de fonction de valeur d'action, fonction de valeur cible, état et action.
